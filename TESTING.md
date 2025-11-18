# Testing Guide

This document provides a comprehensive testing checklist for the portfolio website.

## Quick Validation

### SEO Meta Tags Validation

Test the structured data and meta tags using these tools:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Paste your site URL
   - Verify Person schema appears correctly

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Check Open Graph tags
   - Verify preview image displays

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Verify card displays correctly
   - Check image and description

4. **Google Lighthouse**
   - Open Chrome DevTools (F12)
   - Go to Lighthouse tab
   - Run audit for Performance, Accessibility, Best Practices, SEO
   - Target: All scores > 90

## Functional Testing

### Navigation

- [ ] All navigation links scroll to correct sections
- [ ] Active section is highlighted in navigation
- [ ] Mobile menu opens and closes correctly
- [ ] Mobile menu closes when clicking a link
- [ ] Mobile menu closes when clicking outside
- [ ] Navigation hides on scroll down, shows on scroll up
- [ ] Logo link returns to top

### Language Switching

- [ ] Language switcher button toggles between UK and EN
- [ ] All text content changes when switching languages
- [ ] Meta tags update correctly
- [ ] URL parameter updates (?lang=uk or ?lang=en)
- [ ] Selected language persists in localStorage
- [ ] Browser refresh maintains selected language

### Content Display

#### Hero Section
- [ ] Greeting displays correctly
- [ ] Name and title are visible
- [ ] CTA buttons navigate to correct sections
- [ ] Hero image/placeholder displays

#### About Section
- [ ] All paragraphs render
- [ ] Text is readable and formatted correctly

#### Education Section
- [ ] Education card displays all information
- [ ] Institution name, degree, and field are visible
- [ ] Period and description render correctly
- [ ] Card hover effect works

#### Skills Section
- [ ] All skill items display
- [ ] Skill bars animate when scrolling into view
- [ ] Percentage levels are correct
- [ ] Skills are readable and properly formatted

#### Technologies Section
- [ ] All technology cards display
- [ ] Icons render correctly
- [ ] Descriptions are visible
- [ ] Hover effects work smoothly

#### Projects Section
- [ ] All projects display
- [ ] Featured projects have special styling
- [ ] Project links open in new tabs
- [ ] Technology tags display correctly
- [ ] Descriptions are readable

#### Contact Section
- [ ] Contact information displays
- [ ] Email and phone links work
- [ ] Social media links open correctly
- [ ] Contact form renders properly

### Contact Form

- [ ] All form fields are present
- [ ] Required field validation works
- [ ] Email validation works
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Form resets after submission
- [ ] Error handling works for failed submissions

### Interactive Features

- [ ] Scroll-to-top button appears after scrolling
- [ ] Scroll-to-top button returns to top smoothly
- [ ] Smooth scrolling works on all navigation
- [ ] Animations trigger when scrolling into view
- [ ] Hover states work on interactive elements

## Responsive Testing

### Mobile (320px - 767px)

- [ ] Mobile menu icon displays
- [ ] Menu is accessible and functional
- [ ] All sections are readable
- [ ] Images scale appropriately
- [ ] Buttons are touch-friendly (min 44x44px)
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Forms are easy to fill on mobile

### Tablet (768px - 1023px)

- [ ] Layout adapts correctly
- [ ] Navigation displays properly
- [ ] Grid layouts work well
- [ ] Images and content are balanced
- [ ] Touch interactions work smoothly

### Desktop (1024px+)

- [ ] Full navigation menu displays
- [ ] Content doesn't exceed max-width
- [ ] All sections utilize space well
- [ ] Hover effects work on mouse over
- [ ] Multi-column layouts display correctly

## Browser Compatibility

Test in the following browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### Checks for Each Browser

- [ ] Layout renders correctly
- [ ] Fonts display properly
- [ ] Colors match design
- [ ] Animations work smoothly
- [ ] JavaScript executes without errors
- [ ] CSS styles apply correctly
- [ ] No console errors or warnings

## Accessibility Testing

### Keyboard Navigation

- [ ] Tab key navigates through all interactive elements
- [ ] Tab order is logical
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes mobile menu
- [ ] Focus indicators are visible
- [ ] Skip to content link works (if implemented)

### Screen Reader Testing

Test with screen readers (NVDA, JAWS, or VoiceOver):

- [ ] Page title is announced
- [ ] Headings are properly structured (h1 → h2 → h3)
- [ ] Links have meaningful text
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA attributes work correctly
- [ ] Dynamic content updates are announced

### Visual Accessibility

- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Text is readable at 200% zoom
- [ ] Focus indicators are visible
- [ ] No information conveyed by color alone
- [ ] Animations respect prefers-reduced-motion

### Lighthouse Accessibility Audit

Run Lighthouse in Chrome DevTools:
- [ ] Accessibility score > 95
- [ ] No critical accessibility issues
- [ ] All images have alt attributes
- [ ] Form elements have labels
- [ ] Proper heading hierarchy

## Performance Testing

### Lighthouse Performance

Run Lighthouse audit:
- [ ] Performance score > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

### Network Testing

Test on throttled connections:
- [ ] Fast 3G: Site loads in reasonable time
- [ ] Slow 3G: Critical content visible quickly
- [ ] Images load progressively
- [ ] No broken resources

### Resource Loading

- [ ] CSS loads without blocking
- [ ] JavaScript loads asynchronously
- [ ] Fonts display with fallbacks
- [ ] Images use appropriate formats
- [ ] No unused CSS or JavaScript

## SEO Testing

### Meta Tags

- [ ] Title tag present and descriptive
- [ ] Meta description present and compelling
- [ ] Keywords meta tag included
- [ ] Canonical URL set correctly
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] Language attributes correct (lang, hreflang)

### Structured Data

- [ ] JSON-LD structured data present
- [ ] Person schema validates
- [ ] All required properties included
- [ ] No errors in Google Rich Results Test

### Content

- [ ] Heading hierarchy is logical
- [ ] Content is meaningful and unique
- [ ] Internal links work correctly
- [ ] External links open in new tabs with rel="noopener noreferrer"
- [ ] URLs are clean and descriptive

### Technical SEO

- [ ] robots.txt file present and correct
- [ ] sitemap.xml present and valid
- [ ] Mobile-friendly (Google Mobile-Friendly Test)
- [ ] HTTPS enabled (when deployed)
- [ ] No broken links
- [ ] Page load speed is good

## Cross-Device Testing

Test on actual devices if possible:

### iOS Devices
- [ ] iPhone (latest iOS)
- [ ] iPad (latest iOS)
- [ ] Safari works correctly
- [ ] Touch interactions smooth

### Android Devices
- [ ] Android phone (latest version)
- [ ] Android tablet
- [ ] Chrome works correctly
- [ ] Touch interactions smooth

### Desktop Operating Systems
- [ ] Windows 10/11
- [ ] macOS (latest)
- [ ] Linux (Ubuntu/Fedora)

## Code Quality Checks

### HTML Validation

- [ ] Run through W3C HTML Validator
- [ ] No errors
- [ ] No critical warnings
- [ ] Semantic HTML used correctly

### CSS Validation

- [ ] Run through W3C CSS Validator
- [ ] No errors in custom CSS
- [ ] Vendor prefixes used where needed

### JavaScript

- [ ] No console errors
- [ ] No console warnings in production
- [ ] ES6+ features used correctly
- [ ] No undefined variables
- [ ] Error handling in place

## Pre-Deployment Checklist

Before deploying to production:

- [ ] All tests above passed
- [ ] Content reviewed for accuracy
- [ ] Contact information verified
- [ ] Project links tested
- [ ] Analytics code added (if using)
- [ ] Error tracking set up (if using)
- [ ] Favicons present
- [ ] Social preview image optimized
- [ ] Meta tags customized
- [ ] README documentation complete

## Post-Deployment Verification

After deploying to GitHub Pages:

- [ ] Site loads at correct URL
- [ ] All pages accessible
- [ ] HTTPS working correctly
- [ ] Favicons display correctly
- [ ] Social sharing works
- [ ] Analytics tracking (if configured)
- [ ] No 404 errors
- [ ] DNS configured correctly (if custom domain)

## Continuous Monitoring

Regularly check:

- [ ] Google Search Console for errors
- [ ] Analytics for traffic patterns
- [ ] Broken links checker
- [ ] Performance metrics
- [ ] Security alerts

## Automated Testing (Optional)

Consider setting up:

- Lighthouse CI for continuous performance monitoring
- Percy or BackstopJS for visual regression testing
- Jest for JavaScript unit tests
- GitHub Actions for CI/CD pipeline

---

## Testing Tools Reference

### Validators
- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- Accessibility: https://wave.webaim.org/

### SEO
- Google Rich Results: https://search.google.com/test/rich-results
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### Performance
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

### Browser Testing
- BrowserStack: https://www.browserstack.com/
- LambdaTest: https://www.lambdatest.com/

### Accessibility
- WAVE: https://wave.webaim.org/
- axe DevTools: Browser extension
- Color Contrast Analyzer: https://www.tpgi.com/color-contrast-checker/

---

**Note**: This testing guide should be followed before each major release or significant update to ensure quality and consistency.
