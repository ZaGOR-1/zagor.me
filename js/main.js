// Main JavaScript for portfolio interactions

// Navigation functionality
class Navigation {
    constructor() {
        this.nav = document.getElementById('nav');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupScrollSpy();
        this.setupStickyNav();
    }

    setupMobileMenu() {
        if (!this.navToggle || !this.navMenu) return;

        this.navToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && this.navMenu.classList.contains('active')) {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${entry.target.id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-80px 0px -50% 0px'
            }
        );

        sections.forEach(section => observer.observe(section));
    }

    setupStickyNav() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                this.nav.classList.remove('scroll-up');
                this.nav.classList.remove('scroll-down');
                return;
            }

            if (currentScroll > lastScroll && !this.nav.classList.contains('scroll-down')) {
                // Scrolling down
                this.nav.classList.remove('scroll-up');
                this.nav.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && this.nav.classList.contains('scroll-down')) {
                // Scrolling up
                this.nav.classList.remove('scroll-down');
                this.nav.classList.add('scroll-up');
            }

            lastScroll = currentScroll;
        });
    }
}

// Scroll to top button
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scroll-top');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contact form handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit();
        });
    }

    async handleSubmit() {
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        const translations = window.localizationManager?.translations;

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = translations?.contact?.form?.sending || 'Sending...';

        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            this.showMessage('success', translations?.contact?.form?.success || 'Message sent successfully!');
            this.form.reset();
        } catch (error) {
            // Show error message
            this.showMessage('error', translations?.contact?.form?.error || 'Error sending message. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }

    showMessage(type, message) {
        // Remove existing message if any
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and insert new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        this.form.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Animate elements on scroll
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        const elementsToAnimate = document.querySelectorAll(
            '.section, .skill-item, .technology-card, .project-card, .education-card'
        );

        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
}

// Skill bars animation
class SkillBarsAnimation {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                        skillBars.forEach(bar => {
                            bar.style.animation = 'fillBar 1.5s ease-out forwards';
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
}

// Theme detection and handling
class ThemeHandler {
    constructor() {
        this.init();
    }

    init() {
        // Listen for theme changes
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        darkModeQuery.addEventListener('change', (e) => {
            this.updateThemeColor(e.matches);
        });

        // Set initial theme
        this.updateThemeColor(darkModeQuery.matches);
    }

    updateThemeColor(isDark) {
        const themeColor = isDark ? '#1e40af' : '#2563eb';
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Log performance metrics
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${pageLoadTime}ms`);
            }
        });
    }
}

// Initialize all components when DOM is ready
function initializeApp() {
    new Navigation();
    new ScrollToTop();
    new ContactForm();
    new ScrollAnimations();
    new SkillBarsAnimation();
    new ThemeHandler();
    new PerformanceMonitor();

    // Add loaded class to body
    document.body.classList.add('loaded');
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
