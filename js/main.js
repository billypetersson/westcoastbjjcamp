// ========================================
// Westcoast BJJ Camp - Main JavaScript
// ========================================

// Configuration object for easy management
const CONFIG = {
    // Remove hardcoded URLs for security
    API_ENDPOINTS: {
        REGISTRATION: process?.env?.REGISTRATION_ENDPOINT || '/api/register',
        CONTACT: process?.env?.CONTACT_ENDPOINT || '/api/contact'
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
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.97)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
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
    setSubmitButtonState(submitBtn, 'Submitting...', true);
    
    try {
        // Send data to server (placeholder for now)
        await submitRegistration(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showErrorMessage('Sorry, there was an error submitting your registration. Please try again or contact us directly.');
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
    
    // Performance: Throttle scroll events
    let ticking = false;
    function throttleScroll(callback) {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                callback();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Apply throttle to scroll events
    let scrollEvents = [];
    window.addEventListener('scroll', function() {
        throttleScroll(function() {
            scrollEvents.forEach(callback => callback());
        });
    });
    
    // Add scroll event listeners using the throttled system
    scrollEvents.push(function() {
        // Your scroll-based animations here
    });
    
});// ========================================
// Westcoast BJJ Camp - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.97)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Form Validation and Submission
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                beltLevel: document.getElementById('beltLevel').value,
                dietary: document.getElementById('dietary').value.trim(),
                tshirtSize: document.getElementById('tshirtSize').value,
                comments: document.getElementById('comments').value.trim(),
                timestamp: new Date().toISOString()
            };
            
            // Basic validation
            if (!formData.fullName || !formData.email || !formData.phone || !formData.beltLevel) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(formData.phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            try {
// Send to Google Sheets
            const response = await fetch('https://script.google.com/macros/s/AKfycbzH4u3iWKlXbXepbScX1me5U_4nfCmH4fYbHA60MW_S4n2Sv1vNVODngR8rX3r8TjIy/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit registration');
            }
        }, 1500);
    });
}

function setSubmitButtonState(button, text, disabled) {
    button.textContent = text;
    button.disabled = disabled;
}

function showSuccessMessage() {
    alert('Thank you for registering! We\'ll send you a confirmation email within 24 hours.');
}

function showErrorMessage(message) {
    alert(message);
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Gallery Lightbox (basic implementation)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Create lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <span class="lightbox-close">&times;</span>
                        <img src="${img.src}" alt="${img.alt}">
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                
                // Add styles
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
                `;
                
                const content = lightbox.querySelector('.lightbox-content');
                content.style.cssText = `
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                `;
                
                const lightboxImg = content.querySelector('img');
                lightboxImg.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
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
                `;
                
                // Close lightbox
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox || e.target === closeBtn) {
                        lightbox.remove();
                    }
                });
                
                // Close with escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && document.querySelector('.lightbox')) {
                        document.querySelector('.lightbox').remove();
                    }
                });
            }
        });
    });
    
    // Lazy Loading for Images
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // Performance: Throttle scroll events
    let ticking = false;
    function throttleScroll(callback) {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                callback();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Apply throttle to scroll events
    let scrollEvents = [];
    window.addEventListener('scroll', function() {
        throttleScroll(function() {
            scrollEvents.forEach(callback => callback());
        });
    });
    
    // Add scroll event listeners using the throttled system
    scrollEvents.push(function() {
        // Your scroll-based animations here
    });
    
});

// Google Sheets Integration Example
// Uncomment and modify this function if you want to use Google Sheets
/*
async function submitToGoogleSheets(formData) {
    const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
    
    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
}
*/

// Mailchimp Integration Example
// Uncomment and modify this function if you want to use Mailchimp
/*
async function submitToMailchimp(formData) {
    const MAILCHIMP_URL = 'YOUR_MAILCHIMP_FORM_ACTION_URL';
    
    const data = new FormData();
    data.append('EMAIL', formData.email);
    data.append('FNAME', formData.fullName.split(' ')[0]);
    data.append('LNAME', formData.fullName.split(' ').slice(1).join(' '));
    data.append('PHONE', formData.phone);
    
    try {
        const response = await fetch(MAILCHIMP_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: data
        });
        
        return true;
    } catch (error) {
        console.error('Error submitting to Mailchimp:', error);
        return false;
    }
}
*/

// Google Sheets Integration Example
// Uncomment and modify this function if you want to use Google Sheets

// async function submitToGoogleSheets(formData) {
//     const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzH4u3iWKlXbXepbScX1me5U_4nfCmH4fYbHA60MW_S4n2Sv1vNVODngR8rX3r8TjIy/exec';
    
//     try {
//         const response = await fetch(GOOGLE_SHEETS_URL, {
//             method: 'POST',
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData)
//         });
        
//         return true;
//     } catch (error) {
//         console.error('Error submitting to Google Sheets:', error);
//         return false;
//     }
// }

// Mailchimp Integration Example
// Uncomment and modify this function if you want to use Mailchimp
/*
async function submitToMailchimp(formData) {
    const MAILCHIMP_URL = 'YOUR_MAILCHIMP_FORM_ACTION_URL';
    
    const data = new FormData();
    data.append('EMAIL', formData.email);
    data.append('FNAME', formData.fullName.split(' ')[0]);
    data.append('LNAME', formData.fullName.split(' ').slice(1).join(' '));
    data.append('PHONE', formData.phone);
    
    try {
        const response = await fetch(MAILCHIMP_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: data
        });
        
        return true;
    } catch (error) {
        console.error('Error submitting to Mailchimp:', error);
        return false;
    }
}
*/