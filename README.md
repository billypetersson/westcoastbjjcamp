# West Coast BJJ Camp Website

A static website for West Coast BJJ Camp (Brazilian Jiu-Jitsu) hosted in Strömstad, Sweden. Built with HTML, CSS, and JavaScript for deployment on GitHub Pages.

🌐 **Live Site**: [www.westcoastbjjcamp.se](https://www.westcoastbjjcamp.se)

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Development](#development)
- [Updating Content](#updating-content)
- [Technical Details](#technical-details)

## Overview

This website provides information about West Coast BJJ Camp, including:

- **Hem (Home)**: Welcome page with overview and call-to-action
- **Instruktörer (Instructors)**: Profiles of BJJ instructors
- **Priser (Pricing)**: Package details and pricing information
- **Schema (Schedule)**: Detailed timetable for the 3-day camp
- **Galleri (Gallery)**: Photo gallery from previous camps
- **Bokning (Booking)**: Registration form for participants
- **FAQ**: Frequently asked questions
- **Om oss (About)**: Background and mission of the camp

All content is in Swedish as requested, with this README in English for technical documentation.

## Project Structure

```
west-coast-bjj-camp/
├── index.html              # Home page (Hem)
├── css/
│   └── style.css           # Main stylesheet with responsive design
├── js/
│   └── script.js           # JavaScript for interactivity
├── images/                 # All images (currently placeholder files)
│   ├── hero-bjj.jpg        # Main hero image
│   ├── instructor-*.jpg    # Instructor photos
│   ├── gallery-*.jpg       # Gallery images
│   └── about-*.jpg         # About page images
├── pages/                  # All other pages
│   ├── instructors.html    # Instructor profiles
│   ├── pricing.html        # Pricing packages
│   ├── schedule.html       # Camp schedule
│   ├── gallery.html        # Photo gallery
│   ├── booking.html        # Registration form
│   ├── faq.html           # FAQ with accordion
│   └── about.html         # About the camp
└── README.md              # This file
```

## Content Management

### Updating Instructors

**File**: `pages/instructors.html`

To add/edit instructor profiles:

1. Find the `features-grid` section
2. Each instructor is a `card` element with:
   - `card-image`: Photo (update `src` and `alt` attributes)
   - `card-title`: Instructor name
   - `card-text`: Belt level, bio, and credentials

**Example instructor card:**
```html
<div class="card">
    <img src="../images/instructor-1.jpg" alt="Magnus Andersson" class="card-image">
    <div class="card-content">
        <h3 class="card-title">Magnus Andersson</h3>
        <p class="card-text"><strong>Svart bälte, 3:e dan</strong></p>
        <p class="card-text">Instructor bio and background...</p>
        <p class="card-text"><em>Certifications or achievements</em></p>
    </div>
</div>
```

### Updating Pricing

**File**: `pages/pricing.html`

1. **Main packages**: Update the `pricing-grid` section
2. **Additional services**: Update the table in `table-container`
3. **Important info**: Update the `info-grid` cards

**Package structure:**
```html
<div class="pricing-card [featured]">
    <h3 class="pricing-title">Package Name</h3>
    <div class="pricing-price">2,950 <span style="font-size: 1rem;">SEK</span></div>
    <p class="pricing-period">Duration description</p>
    <ul class="pricing-features">
        <li>✅ Included feature</li>
        <li>❌ Not included feature</li>
    </ul>
    <a href="booking.html" class="btn btn-primary">Choose Package</a>
</div>
```

### Updating Schedule

**File**: `pages/schedule.html`

Each day has its own table. To modify:

1. Find the relevant day section (Fredag/Lördag/Söndag)
2. Edit rows in the `table` element
3. Each row has: Time, Activity, Instructor, Description

**Schedule row structure:**
```html
<tr>
    <td><strong>15:00-16:30</strong></td>
    <td>Activity Name</td>
    <td>Instructor Name</td>
    <td>Activity description</td>
</tr>
```

### Updating Gallery

**File**: `pages/gallery.html`

1. Add images to the `/images/` folder
2. Update the `gallery-grid` sections
3. Each gallery item includes image and caption

**Gallery item structure:**
```html
<div class="gallery-item">
    <img src="../images/gallery-image.jpg" alt="Description" loading="lazy">
    <div class="gallery-caption">
        <h4>Image Title</h4>
        <p>Image description</p>
    </div>
</div>
```

### Updating FAQ

**File**: `pages/faq.html`

FAQ uses accordion-style collapsible sections:

```html
<div class="faq-item">
    <button class="faq-question">
        Your question here?
        <span class="faq-icon">▼</span>
    </button>
    <div class="faq-answer">
        <p>Your detailed answer here...</p>
    </div>
</div>
```

The JavaScript automatically handles the accordion functionality.

### Updating Booking Form

**File**: `pages/booking.html`

The booking form includes dynamic pricing calculation. To modify:

1. **Form fields**: Add/edit fields in the form
2. **Pricing logic**: Update the JavaScript at the bottom of the file
3. **Package options**: Update the `package` select dropdown

**Key variables to update:**
```javascript
const packagePrices = {
    'day-pass-friday': 450,
    'basic-package': 1200,
    'full-package': 2950
};
```

## Deployment

### GitHub Pages Setup

1. **Create GitHub repository**: Name it appropriately for your domain
2. **Upload files**: Push all files to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

4. **Custom domain** (for www.westcoastbjjcamp.se):
   - Add `CNAME` file to root with your domain
   - Configure DNS settings at your domain provider
   - Add CNAME record pointing to `yourusername.github.io`

### DNS Configuration

For the domain `www.westcoastbjjcamp.se`:

```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### SSL Certificate

GitHub Pages automatically provides SSL certificates for custom domains. Ensure "Enforce HTTPS" is enabled in repository settings.

## Development

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/west-coast-bjj-camp.git
   cd west-coast-bjj-camp
   ```

2. **Serve locally**: Use any local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have live-server installed)
   npx live-server
   ```

3. **Open in browser**: Visit `http://localhost:8000`

### Making Changes

1. Edit HTML/CSS/JS files as needed
2. Test changes locally
3. Commit and push to GitHub
4. Changes automatically deploy to GitHub Pages

## Updating Content

### Regular Updates

**Before each camp:**
1. Update dates in `schedule.html`
2. Update pricing if changed in `pricing.html`
3. Add new instructor photos and bios in `instructors.html`
4. Update FAQ with new common questions

**After each camp:**
1. Add new photos to gallery
2. Update testimonials in `about.html`
3. Update "previous camp" references

### Images

**Recommended image sizes:**
- **Hero image**: 1200x600px
- **Instructor photos**: 400x400px (square)
- **Gallery images**: 800x600px
- **About page images**: 600x400px

**Optimization tips:**
- Keep file sizes under 500KB for web performance
- Use JPG for photos, PNG for graphics with transparency
- Include descriptive alt text for accessibility

### Contact Information

Update contact details in:
- Footer of all pages
- `pages/booking.html`
- `pages/faq.html`

**Current contact info:**
- Email: info@westcoastbjjcamp.se
- Phone: +46 72 294 93 39

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript**: ES6+, DOM manipulation
- **Fonts**: Google Fonts (Inter)

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile

### Performance Features

- **Responsive design**: Mobile-first approach
- **Lazy loading**: Images load as needed
- **Semantic HTML**: Proper heading structure
- **Accessibility**: ARIA labels, keyboard navigation
- **SEO optimized**: Meta descriptions, structured data

### JavaScript Features

- **Mobile navigation**: Hamburger menu toggle
- **FAQ accordion**: Collapsible Q&A sections
- **Image gallery**: Lightbox functionality
- **Form validation**: Client-side validation
- **Dynamic pricing**: Booking form price calculator
- **Smooth scrolling**: Enhanced navigation

### CSS Architecture

- **CSS Custom Properties**: Consistent theming
- **Mobile-first**: Responsive breakpoints
- **Component-based**: Reusable classes
- **Print styles**: Printer-friendly layouts

### Maintenance

**Monthly tasks:**
- Check all links work
- Verify form submissions
- Update camp dates/prices as needed
- Add new gallery photos

**Annual tasks:**
- Review and update instructor bios
- Update testimonials
- Refresh FAQ content
- Update pricing structure

---

For technical support or questions about updating the website, contact the development team or refer to this documentation.

**Happy coding! 🥋**