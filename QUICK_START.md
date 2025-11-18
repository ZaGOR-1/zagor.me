# Quick Start Guide

## 🚀 Run Locally in 30 Seconds

```bash
# Clone and enter directory
git clone <your-repo-url>
cd portfolio

# Start local server (choose one):
python3 -m http.server 8000
# OR
./serve.sh

# Open browser
open http://localhost:8000
```

## 📝 Customize Content (5 Minutes)

Edit these files:

1. **`locales/uk.json`** - Ukrainian content
2. **`locales/en.json`** - English content

Replace:
- Your name and title
- Project links and descriptions
- Contact information (email, phone, social links)
- Skills and technologies
- Education details (if not Zhytomyr Polytechnic IPZ)

## 🌐 Deploy to GitHub Pages (2 Minutes)

```bash
# 1. Create GitHub repository (via web interface)

# 2. Push code
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add .
git commit -m "Initial commit: Portfolio website"
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch, / (root) → Save

# 4. Wait 2-5 minutes, then visit:
# https://YOUR_USERNAME.github.io/YOUR_REPO
```

## 🔧 Update URLs After Deployment

In `index.html`, update these lines:

```html
<link rel="canonical" href="https://YOUR_USERNAME.github.io/YOUR_REPO">
<meta property="og:url" content="https://YOUR_USERNAME.github.io/YOUR_REPO">
<meta name="twitter:url" content="https://YOUR_USERNAME.github.io/YOUR_REPO">
```

Also update `sitemap.xml` and `robots.txt` URLs.

## ✅ Validate SEO

Test your deployed site:

1. **Structured Data**: https://search.google.com/test/rich-results
2. **Facebook Preview**: https://developers.facebook.com/tools/debug/
3. **Twitter Card**: https://cards-dev.twitter.com/validator
4. **Lighthouse**: Chrome DevTools (F12) → Lighthouse tab

## 📚 Need More Help?

- **Full instructions**: See README.md
- **Testing guide**: See TESTING.md
- **Troubleshooting**: See README.md → Troubleshooting section

## 🎯 Key Files

- `index.html` - Main page
- `locales/*.json` - All content (edit these!)
- `css/style.css` - Styles
- `js/localization.js` - Language switching
- `js/main.js` - Interactive features

## 💡 Pro Tips

1. **Test locally first** - Always test changes before deploying
2. **Use browser DevTools** - Check console for errors
3. **Test both languages** - Switch between UK/EN
4. **Test on mobile** - Use Chrome DevTools device mode
5. **Validate HTML/CSS** - Use W3C validators

---

**That's it! Your portfolio is ready to go! 🎉**
