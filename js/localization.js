// Localization Manager
class LocalizationManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = {};
        this.init();
    }

    detectLanguage() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && ['uk', 'en'].includes(langParam)) {
            return langParam;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && ['uk', 'en'].includes(savedLang)) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('uk')) {
            return 'uk';
        }

        // Default to Ukrainian
        return 'uk';
    }

    async init() {
        try {
            await this.loadTranslations(this.currentLang);
            this.updateHTML();
            this.updateMetaTags();
            this.updateStructuredData();
            this.renderDynamicContent();
            this.setupLanguageSwitcher();
        } catch (error) {
            console.error('Failed to initialize localization:', error);
        }
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`/locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.translations = await response.json();
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
        } catch (error) {
            console.error('Failed to load translations:', error);
            // Fallback to default language if loading fails
            if (lang !== 'uk') {
                await this.loadTranslations('uk');
            }
        }
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    updateHTML() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedValue(this.translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedValue(this.translations, key);
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    updateMetaTags() {
        const meta = this.translations.meta;
        if (!meta) return;

        // Update page title
        document.title = meta.title;
        this.updateMetaTag('id', 'page-title', meta.title);
        this.updateMetaTag('id', 'meta-title', meta.title, 'content');
        this.updateMetaTag('id', 'meta-description', meta.description, 'content');
        this.updateMetaTag('id', 'meta-keywords', meta.keywords, 'content');

        // Update Open Graph tags
        this.updateMetaTag('id', 'og-title', meta.ogTitle, 'content');
        this.updateMetaTag('id', 'og-description', meta.ogDescription, 'content');
        this.updateMetaTag('id', 'og-locale', this.currentLang === 'uk' ? 'uk_UA' : 'en_US', 'content');

        // Update Twitter tags
        this.updateMetaTag('id', 'twitter-title', meta.twitterTitle, 'content');
        this.updateMetaTag('id', 'twitter-description', meta.twitterDescription, 'content');
    }

    updateMetaTag(attribute, value, content, contentAttribute = 'textContent') {
        const element = document.querySelector(`[${attribute}="${value}"]`);
        if (element) {
            if (contentAttribute === 'content') {
                element.setAttribute('content', content);
            } else {
                element[contentAttribute] = content;
            }
        }
    }

    updateStructuredData() {
        const structuredDataScript = document.getElementById('structured-data');
        if (structuredDataScript) {
            const data = JSON.parse(structuredDataScript.textContent);
            
            // Update language-specific fields if needed
            data.name = this.translations.hero?.name || "Ivan Kovalenko";
            data.jobTitle = this.currentLang === 'uk' ? 'Веб-розробник' : 'Web Developer';
            
            structuredDataScript.textContent = JSON.stringify(data, null, 2);
        }
    }

    renderDynamicContent() {
        this.renderAbout();
        this.renderEducation();
        this.renderSkills();
        this.renderTechnologies();
        this.renderProjects();
        this.renderContact();
    }

    renderAbout() {
        const aboutContent = document.getElementById('about-content');
        if (!aboutContent || !this.translations.about) return;

        aboutContent.innerHTML = this.translations.about.text
            .map(paragraph => `<p class="about-text">${paragraph}</p>`)
            .join('');
    }

    renderEducation() {
        const educationContent = document.getElementById('education-content');
        if (!educationContent || !this.translations.education) return;

        educationContent.innerHTML = this.translations.education.items
            .map(item => `
                <div class="education-card">
                    <div class="education-header">
                        <h3 class="education-institution">${item.institution}</h3>
                        <span class="education-period">${item.period}</span>
                    </div>
                    <p class="education-degree">${item.degree} - ${item.field}</p>
                    <p class="education-year">${item.year}</p>
                    <p class="education-description">${item.description}</p>
                </div>
            `)
            .join('');
    }

    renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        if (!skillsGrid || !this.translations.skills) return;

        skillsGrid.innerHTML = this.translations.skills.items
            .map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `)
            .join('');
    }

    renderTechnologies() {
        const technologiesGrid = document.getElementById('technologies-grid');
        if (!technologiesGrid || !this.translations.technologies) return;

        technologiesGrid.innerHTML = this.translations.technologies.items
            .map(tech => `
                <div class="technology-card">
                    <div class="technology-icon">${tech.icon}</div>
                    <h3 class="technology-name">${tech.name}</h3>
                    <p class="technology-description">${tech.description}</p>
                </div>
            `)
            .join('');
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !this.translations.projects) return;

        projectsGrid.innerHTML = this.translations.projects.items
            .map(project => {
                const links = [];
                if (project.links.live) {
                    links.push(`<a href="${project.links.live}" class="project-link" target="_blank" rel="noopener noreferrer">${this.translations.projects.viewLive}</a>`);
                }
                if (project.links.demo) {
                    links.push(`<a href="${project.links.demo}" class="project-link" target="_blank" rel="noopener noreferrer">${this.translations.projects.viewDemo}</a>`);
                }
                if (project.links.github) {
                    links.push(`<a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer">${this.translations.projects.viewCode}</a>`);
                }

                return `
                    <div class="project-card ${project.featured ? 'featured' : ''}">
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-technologies">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${links.join('')}
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('');
    }

    renderContact() {
        const contactInfo = document.getElementById('contact-info');
        if (!contactInfo || !this.translations.contact) return;

        const info = this.translations.contact.info;
        const labels = this.translations.contact.labels;

        contactInfo.innerHTML = `
            <div class="contact-text">
                <p>${this.translations.contact.text}</p>
            </div>
            <div class="contact-details">
                <div class="contact-detail">
                    <span class="contact-label">${labels.email}:</span>
                    <a href="mailto:${info.email}" class="contact-value">${info.email}</a>
                </div>
                <div class="contact-detail">
                    <span class="contact-label">${labels.phone}:</span>
                    <a href="tel:${info.phone.replace(/\s/g, '')}" class="contact-value">${info.phone}</a>
                </div>
                <div class="contact-detail">
                    <span class="contact-label">${labels.location}:</span>
                    <span class="contact-value">${info.location}</span>
                </div>
                <div class="contact-social">
                    <span class="contact-label">${labels.social}:</span>
                    <div class="social-links">
                        <a href="${info.github}" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
                        <a href="${info.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
                        <a href="${info.telegram}" target="_blank" rel="noopener noreferrer" class="social-link">Telegram</a>
                    </div>
                </div>
            </div>
        `;
    }

    setupLanguageSwitcher() {
        const switcher = document.getElementById('lang-switcher');
        if (!switcher) return;

        switcher.addEventListener('click', async () => {
            const newLang = this.currentLang === 'uk' ? 'en' : 'uk';
            await this.switchLanguage(newLang);
        });
    }

    async switchLanguage(lang) {
        await this.loadTranslations(lang);
        this.updateHTML();
        this.updateMetaTags();
        this.updateStructuredData();
        this.renderDynamicContent();

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
    }
}

// Initialize localization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.localizationManager = new LocalizationManager();
    });
} else {
    window.localizationManager = new LocalizationManager();
}
