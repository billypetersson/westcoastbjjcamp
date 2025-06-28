# Westcoast BJJ Camp Website

A modern, responsive website for Westcoast BJJ Camp in Strömstad, Sweden. The website is fully translated to Swedish and optimized for performance and SEO.

## 📁 File Structure

```
westcoast-bjj-camp/
├── index.html              # Homepage (Swedish)
├── about.html              # About page (Swedish)
├── schedule.html           # Schedule page (Swedish)
├── instructors.html        # Instructors page (Swedish)
├── pricing.html            # Pricing page (Swedish)
├── gallery.html            # Gallery page (Swedish)
├── contact.html            # Contact page (Swedish)
├── register.html           # Registration page (Swedish)
├── css/
│   └── style.css          # All stylesheets
├── js/
│   └── main.js           # JavaScript functions
├── images/
│   ├── westcoastlogo.webp # Logo
│   ├── hero-bg.jpg       # Hero background image
│   ├── og-image.webp     # Social media sharing image
│   ├── favicon.webp      # Browser icon
│   ├── icons/            # Icons for different sections
│   │   ├── location.svg
│   │   ├── belt.svg
│   │   ├── home.svg
│   │   ├── community.svg
│   │   ├── email.svg
│   │   ├── phone.svg
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   └── youtube.svg
│   ├── instructors/      # Instructor photos
│   │   ├── marcus.jpg
│   │   ├── sofia.jpg
│   │   └── guest.jpg
│   └── gallery/          # Gallery images
│       ├── training-1.jpg
│       ├── beach-training.jpg
│       ├── group-photo.jpg
│       ├── evening-bbq.jpg
│       ├── open-mat.jpg
│       └── sunrise-yoga.jpg
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
└── README.md              # This file
```

## 🚀 Getting Started

### 1. Download Files
Save all files in the correct folder structure as shown above.

### 2. Add Images
You need to add the following images:
- **Hero background** (1920x1080px recommended): `images/hero-bg.jpg`
- **Logo** (WebP format): `images/westcoastlogo.webp`
- **Instructor photos** (400x400px recommended): `images/instructors/`
- **Gallery images** (minimum 800x600px): `images/gallery/`
- **Favicon** (WebP format): `images/favicon.webp`

### 3. Customize Content
Edit the HTML files to:
- Update text and information
- Change camp dates
- Update pricing
- Add correct contact information
- Update social media links

### 4. Configure Forms
The forms need to be connected to a backend service. Choose an option:

#### Option A: Netlify Forms (Recommended)
1. Publish on Netlify
2. Add `netlify` attribute to form tags
3. Form data is automatically sent to Netlify

#### Option B: Google Sheets
1. Create a Google Apps Script
2. Connect to a Google Sheets document
3. Update the URL in `main.js`

#### Option C: EmailJS
1. Create an EmailJS account
2. Configure email templates
3. Update configuration in `main.js`

## 📱 Features

- ✅ Fully responsive design for all devices
- ✅ Smooth scrolling and animations
- ✅ Multi-language support (Swedish)
- ✅ FAQ accordion functionality
- ✅ Contact form with validation
- ✅ Registration form
- ✅ SEO-optimized structure
- ✅ Fast loading times
- ✅ Accessibility compliant (WCAG)

## 🌍 Language & Localization

### Current Language:
- 🇸🇪 Swedish (primary language)

### Key Swedish Translations:
- **Navigation**: Hem, Om Oss, Schema, Instruktörer, Priser, Galleri, Kontakt, Anmäl Dig
- **Content**: All page content translated to Swedish
- **SEO**: Swedish meta descriptions and keywords
- **Forms**: Swedish labels and placeholders

### Adding More Languages:
1. Duplicate HTML files with language code (e.g., `index-en.html`)
2. Translate content
3. Add language selector to navigation
4. Update `hreflang` tags for SEO

## 🎨 Customization

### Colors
Change colors in `css/style.css`:
```css
:root {
    --primary-blue: #2563eb;    /* Primary color */
    --light-blue: #dbeafe;      /* Light accent */
    --dark-blue: #1e40af;       /* Dark accent */
    --white: #ffffff;           /* White */
    --gray-light: #f3f4f6;      /* Light gray */
    --gray-medium: #6b7280;     /* Medium gray */
    --gray-dark: #1f2937;       /* Dark gray */
}
```

### Typography
The site uses Inter from Google Fonts. To change:
1. Choose a new font from [Google Fonts](https://fonts.google.com)
2. Update `<link>` tags in all HTML files
3. Change `font-family` in `css/style.css`

### Images
All images use modern WebP format for best performance:
- Convert images to WebP for smaller file sizes
- Use responsive images for different screen sizes
- Compress images for faster loading

## 🌐 Publishing

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch
6. Your site will be published at: `https://[username].github.io/[repo-name]/`

### Netlify (Recommended)
1. Create a Netlify account
2. Connect your GitHub repository
3. Automatic deployment on every commit
4. Built-in form support
5. Free SSL certificate

### Custom Domain
1. Register the domain westcoastbjjcamp.se
2. Configure DNS settings
3. Add CNAME file with domain name
4. Enable SSL certificate

## 📧 Email Integration

### Netlify Forms (Easiest)
Add `netlify` attribute to forms:
```html
<form netlify name="registration">
    <!-- Form fields -->
</form>
```

### EmailJS (For custom email)
```javascript
// Configure EmailJS in main.js
emailjs.init("YOUR_PUBLIC_KEY");

async function sendEmail(formData) {
    try {
        await emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            formData
        );
        alert("Message sent successfully!");
    } catch (error) {
        alert("Error sending message.");
    }
}
```

## 🔍 SEO Optimization

### Already Implemented:
- ✅ Semantic HTML structure
- ✅ Meta tags for search engines
- ✅ Open Graph tags for social media
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Swedish language optimization

### Additional Improvements:
1. **Add Google Analytics**:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. **Google Search Console**:
   - Verify ownership
   - Submit sitemap
   - Monitor search performance

## 📊 Performance

### Current Optimizations:
- WebP image format for smaller file sizes
- CSS and JavaScript minification
- Lazy loading for images
- Optimized Google Fonts loading
- Gzip compression (via server)

### Performance Testing:
```bash
# Install Lighthouse
npm install -g lighthouse

# Run performance test
lighthouse https://your-website.se --view
```

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths (case-sensitive on Linux/Mac)
- Ensure images are in correct folders
- Verify image formats (WebP supported in modern browsers)

### Forms Not Working
- Open developer console (F12)
- Check for JavaScript errors
- Verify backend configuration

### Mobile Menu Not Working
- Check that JavaScript loads correctly
- Verify IDs match between HTML and JS

### Links Not Working Locally
- Use a local web server instead of opening files directly
- Test with: `python3 -m http.server 8000`

## 📱 Responsive Design

The website is optimized for:
- 📱 Mobile devices (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

### CSS Breakpoints:
```css
/* Mobile first */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large screens */ }
```

## 📞 Support & Maintenance

### Contact for Technical Support:
- Email: [technical-support@example.com]
- GitHub Issues: [github.com/your-username/westcoast-bjj-camp/issues]

### Regular Maintenance:
- Update content before each camp
- Check all links and forms
- Test performance and accessibility
- Create backups of all files

## 📋 Pre-Launch Checklist

- [ ] All images uploaded and optimized
- [ ] Contact information updated
- [ ] Dates and prices correct
- [ ] Forms working properly
- [ ] All links tested
- [ ] SEO tags complete
- [ ] Mobile responsive design verified
- [ ] Performance test completed
- [ ] Backups created

## 📄 License

This project is created for Westcoast BJJ Camp. All rights reserved.

## 🏆 Contribution

Developed with love for the BJJ community in Sweden.

### Tech Stack:
- HTML5 & CSS3
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)
- Responsive design
- SEO-optimized
- Accessibility compliant

---

**Good luck with your BJJ camp! 🥋**

Created with ❤️ for Westcoast BJJ Camp