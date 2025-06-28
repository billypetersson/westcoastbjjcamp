// ========================================
// Westcoast BJJ Camp - Main JavaScript
// ========================================

// Configuration object for easy management
const CONFIG = {
    // Remove hardcoded URLs for security
    API_ENDPOINTS: {
        REGISTRATION: window.ENV?.REGISTRATION_ENDPOINT || '/api/register',
        CONTACT: window.ENV?.CONTACT_ENDPOINT || '/api/contact'
    },
    ANIMATION: {
        FADE_IN_THRESHOLD: 0.1,
        FADE_IN_ROOT_MARGIN: '0px 0px -100px 0px'
    },
    NAVBAR: {
        SCROLL_THRESHOLD: 50,
        HIDE_THRESHOLD: 500
    }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    initMobileMenu();
    initSmoothScrolling();
    initNavbarEffects();
    initFAQAccordion();
    initRegistrationForm();
    initScrollAnimations();
    initGalleryLightbox();
    initLazyLoading();
    initPerformanceOptimizations();
}

// ========================================
// Mobile Navigation
// ========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = this.classList.contains('active');
        
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Update ARIA attributes for accessibility
        this.setAttribute('aria-expanded', !isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// ========================================
// Smooth Scrolling
// ========================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navbar = document.getElementById('navbar');
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Update URL without triggering scroll
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ========================================
// Navbar Effects
// ========================================
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    let ticking = false;
    
    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        
        // Change navbar background on scroll
        if (currentScroll > CONFIG.NAVBAR.SCROLL_THRESHOLD) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.97)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > CONFIG.NAVBAR.HIDE_THRESHOLD) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Add keyboard support
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ========================================
// Registration Form
// ========================================
function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmission);
    
    // Add real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Validate all fields
    if (!validateForm(form)) {
        return;
    }
    
    // Get form data
    const formData = getFormData(form);
    
    // Show loading state
    setSubmitButtonState(submitBtn, 'Skickar...', true);
    
    try {
        // Send data to server (placeholder for now)
        await submitRegistration(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showErrorMessage('Något gick fel vid skickning av anmälan. Försök igen eller kontakta oss direkt.');
    } finally {
        // Reset button state
        setSubmitButtonState(submitBtn, originalText, false);
    }
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Remove existing error styling
    clearFieldError({ target: field });
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 8) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function getFormData(form) {
    return {
        fullName: form.fullName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        beltLevel: form.beltLevel.value,
        dietary: form.dietary.value.trim(),
        tshirtSize: form.tshirtSize.value,
        comments: form.comments.value.trim(),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };
}

async function submitRegistration(formData) {
    // In production, this would connect to your backend
    // For now, we'll simulate an API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Registration data:', formData);
            // Randomly simulate success/failure for demo
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Simulated server error'));
            }
        }, 1500);
    });
}

function setSubmitButtonState(button, text, disabled) {
    button.textContent = text;
    button.disabled = disabled;
}

function showSuccessMessage() {
    alert('Tack för din anmälan! Vi skickar en bekräftelse via e-post inom 24 timmar.');
}

function showErrorMessage(message) {
    alert(message);
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: CONFIG.ANIMATION.FADE_IN_THRESHOLD,
        rootMargin: CONFIG.ANIMATION.FADE_IN_ROOT_MARGIN
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Optional: Stop observing after animation for performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// Gallery Lightbox
// ========================================
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', openLightbox);
        
        // Add keyboard support
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox.call(this);
            }
        });
    });
}

function openLightbox() {
    const img = this.querySelector('img');
    if (!img) return;
    
    const lightbox = createLightboxElement(img);
    document.body.appendChild(lightbox);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close lightbox handlers
    setupLightboxCloseHandlers(lightbox);
    
    // Animate in
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
}

function createLightboxElement(img) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
        </div>
    `;
    
    // Apply styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        cursor: default;
    `;
    
    const lightboxImg = content.querySelector('img');
    lightboxImg.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: 90vw;
        max-height: 90vh;
    `;
    
    const closeBtn = content.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;
        background: none;
        border: none;
        padding: 0.5rem;
        line-height: 1;
    `;
    
    return lightbox;
}

function setupLightboxCloseHandlers(lightbox) {
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const content = lightbox.querySelector('.lightbox-content');
    
    function closeLightbox() {
        lightbox.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.remove();
            }
        }, 300);
    }
    
    // Click outside to close
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close button
    closeBtn.addEventListener('click', closeLightbox);
    
    // Escape key to close
    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', handleKeyDown);
        }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent content click from closing
    content.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// ========================================
// Lazy Loading
// ========================================
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (!img.src && img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        loadLazySizesLibrary();
    }
}

function loadLazySizesLibrary() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.async = true;
    document.head.appendChild(script);
}

// ========================================
// Performance Optimizations
// ========================================
function initPerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Setup performance monitoring
    setupPerformanceMonitoring();
}

function preloadCriticalResources() {
    const criticalImages = [
        './images/hero-bg.jpg',
        './images/logo.svg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

function setupPerformanceMonitoring() {
    // Log performance metrics
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }
    });
}

// ========================================
// Utility Functions
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// Error Handling
// ========================================
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error reporting service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});