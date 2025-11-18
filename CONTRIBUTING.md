# Contributing to Portfolio Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this portfolio website.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Enhancements

Enhancement suggestions are welcome! Please create an issue with:
- A clear, descriptive title
- Detailed description of the proposed feature
- Why this enhancement would be useful
- Examples of how it would work

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style guidelines below
3. **Test your changes** in multiple browsers
4. **Update documentation** if needed
5. **Commit your changes** with clear, descriptive commit messages
6. **Push to your fork** and submit a pull request

## Code Style Guidelines

### JavaScript

- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Use arrow functions where appropriate
- Use template literals for string interpolation
- Use async/await for asynchronous operations
- Add comments for complex logic only
- Keep functions small and focused

Example:
```javascript
async loadTranslations(lang) {
    try {
        const response = await fetch(`/locales/${lang}.json`);
        this.translations = await response.json();
    } catch (error) {
        console.error('Failed to load translations:', error);
    }
}
```

### CSS

- Use CSS custom properties (variables) for colors and spacing
- Mobile-first approach (base styles for mobile, media queries for larger screens)
- Use meaningful class names following BEM-like conventions
- Group related properties together
- Use shorthand properties where appropriate

Example:
```css
.project-card {
    background-color: var(--bg-primary);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    transition: transform var(--transition-base);
}
```

### HTML

- Use semantic HTML5 elements (`<nav>`, `<section>`, `<article>`, etc.)
- Include appropriate ARIA attributes for accessibility
- Use `data-*` attributes for JavaScript hooks
- Keep proper nesting and indentation
- Add `alt` text to all images

Example:
```html
<section class="projects section" id="projects">
    <div class="container">
        <h2 class="section-title" data-i18n="projects.heading">Projects</h2>
        <!-- content -->
    </div>
</section>
```

### JSON Localization Files

- Maintain consistent structure across all language files
- Use clear, descriptive keys
- Keep translations accurate and contextually appropriate
- Ensure all special characters are properly escaped

Example:
```json
{
    "hero": {
        "greeting": "Hi, I'm",
        "name": "Your Name",
        "title": "Your Title"
    }
}
```

## Localization

When adding new content that needs translation:

1. Add the key-value pair to both `locales/uk.json` and `locales/en.json`
2. Use the `data-i18n` attribute in HTML to bind the content
3. Update the localization.js rendering methods if needed
4. Test language switching to ensure proper display

## Testing

Before submitting a pull request:

- [ ] Test in Chrome, Firefox, Safari, and Edge
- [ ] Test responsive design on mobile, tablet, and desktop
- [ ] Verify all links work correctly
- [ ] Check that language switching works
- [ ] Validate HTML, CSS, and JavaScript (no console errors)
- [ ] Test with screen readers (if accessibility-related changes)
- [ ] Verify SEO meta tags are correct

## Commit Message Guidelines

Use clear and meaningful commit messages:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no code change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

Examples:
```
feat: Add project filtering by technology
fix: Correct navigation scroll behavior on mobile
docs: Update deployment instructions in README
style: Improve CSS formatting and organization
refactor: Simplify localization loading logic
```

## Questions?

Feel free to create an issue with your question or reach out via the contact information in the README.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Be patient with newcomers
- Help others learn and grow

Thank you for contributing! 🎉
