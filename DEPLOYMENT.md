# Deployment Guide

This guide covers how to deploy the West Coast BJJ Camp Hugo site to GitHub Pages.

## 🚀 Automatic Deployment (Recommended)

The site is configured for automatic deployment using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Setup Steps

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push Your Code:**
   ```bash
   git add .
   git commit -m "Deploy Hugo site"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the "Actions" tab in your GitHub repository
   - Watch the "Deploy Hugo site to Pages" workflow
   - Once complete, your site will be live

### Deployment URL

- **With Custom Domain:** `https://westcoastbjjcamp.se` (if CNAME is configured)
- **GitHub Pages Default:** `https://yourusername.github.io/westcoastbjjcamp`

## 🔧 Configuration

### Custom Domain Setup

1. **Add CNAME File:**
   ```bash
   echo "westcoastbjjcamp.se" > static/CNAME
   ```

2. **Configure DNS:**
   - Add CNAME record: `www.westcoastbjjcamp.se` → `yourusername.github.io`
   - Add A records for apex domain to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable in GitHub:**
   - Repository Settings → Pages
   - Custom domain: `westcoastbjjcamp.se`
   - Check "Enforce HTTPS"

### Environment Variables

The workflow automatically handles:
- `HUGO_ENVIRONMENT=production`
- `HUGO_ENV=production`
- Base URL configuration

## 🛠️ Manual Deployment

If you need to deploy manually:

1. **Install Hugo:**
   ```bash
   # macOS
   brew install hugo
   
   # Ubuntu/Debian
   sudo apt install hugo
   
   # Windows (via Chocolatey)
   choco install hugo-extended
   ```

2. **Build the Site:**
   ```bash
   hugo --gc --minify --cleanDestinationDir
   ```

3. **Deploy to Your Server:**
   ```bash
   # Upload the public/ directory to your web server
   rsync -avz --delete public/ user@yourserver.com:/path/to/webroot/
   ```

## 🔍 Troubleshooting

### Common Issues

1. **Workflow Fails:**
   - Check the Actions tab for error messages
   - Ensure repository has Pages enabled
   - Verify workflow permissions

2. **Site Not Updating:**
   - Clear browser cache
   - Check if deployment completed successfully
   - Verify DNS propagation (for custom domains)

3. **Build Errors:**
   - Test locally with `hugo server`
   - Check for broken links or missing files
   - Verify Hugo version compatibility

### Debug Commands

```bash
# Test site locally
hugo server --buildDrafts --buildFuture

# Build with verbose output
hugo --verbose --debug

# Check site URLs
hugo list all
```

## 📊 Performance Optimization

The GitHub Actions workflow includes:

- **Minification:** CSS, JS, and HTML are minified
- **Compression:** Assets are optimized
- **Cache Busting:** Static assets have cache headers
- **SEO:** Sitemap and robots.txt generation

## 🔒 Security

- HTTPS is enforced for custom domains
- No sensitive data in public repository
- Form submissions handled by Formspree (external service)
- No server-side code vulnerabilities (static site)

## 📈 Monitoring

### Site Health Checks

- **GitHub Pages Status:** Check repository Actions tab
- **Site Availability:** Use tools like UptimeRobot
- **Performance:** Test with Google PageSpeed Insights
- **SEO:** Monitor with Google Search Console

### Analytics Setup

To add Google Analytics:

1. **Get Tracking ID** from Google Analytics
2. **Add to config.toml:**
   ```toml
   [params]
     googleAnalytics = "G-XXXXXXXXXX"
   ```
3. **Add tracking code** to `layouts/partials/header.html`

## 🚨 Emergency Procedures

### Rollback Deployment

1. **Find Last Working Commit:**
   ```bash
   git log --oneline
   ```

2. **Revert to Previous Version:**
   ```bash
   git reset --hard <commit-hash>
   git push --force-with-lease origin main
   ```

### Quick Fixes

For urgent fixes:
1. Make changes directly on GitHub (for small content updates)
2. Or clone, fix, and push immediately
3. Monitor Actions tab for deployment completion

## 📞 Support

- **Technical Issues:** Create issue in GitHub repository
- **DNS/Domain Issues:** Contact domain provider
- **GitHub Pages Issues:** Check [GitHub Status](https://www.githubstatus.com/)

---

**Note:** Always test changes locally before pushing to production!