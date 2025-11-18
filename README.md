# Ivan Kovalenko - Web Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-success)](https://ivankovalenko.github.io/)

> Modern, multilingual portfolio website showcasing web development projects and skills.

[View Live Demo](https://ivankovalenko.github.io/) | [🇺🇦 Українська](#українська) | [🇬🇧 English](#english)

---

## 🇺🇦 Українська

### Про проєкт

Сучасне портфоліо веб-розробника з підтримкою двох мов (українська та англійська). Створено для демонстрації навичок, проєктів та освітнього досвіду студента 2 курсу спеціальності "Інженерія програмного забезпечення" (ІПЗ) Житомирської Політехніки.

### ✨ Можливості

- 🌍 **Двомовність**: Повна підтримка української та англійської мов
- 🎨 **Сучасний дизайн**: Адаптивний інтерфейс з підтримкою світлої та темної теми
- 📱 **Responsive**: Оптимізовано для всіх пристроїв (десктоп, планшет, мобільний)
- 🚀 **Швидкий**: Мінімальні залежності, оптимізована продуктивність
- ♿ **Доступність**: Семантична HTML розмітка, ARIA атрибути
- 🔍 **SEO оптимізація**: Мета-теги, Open Graph, structured data
- 📊 **Аналітика**: Готовність до інтеграції Google Analytics
- 🎯 **PWA ready**: Web manifest та підтримка Service Worker

### 🛠️ Технології

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Стилізація**: Custom CSS з CSS Variables, Flexbox, Grid
- **Локалізація**: JSON-based система перекладів
- **SEO**: Schema.org structured data, Open Graph, Twitter Cards
- **Іконки**: SVG favicons з підтримкою light/dark режимів
- **Хостинг**: GitHub Pages

### 📋 Передумови

Для роботи з проєктом вам потрібен тільки веб-браузер. Для розробки рекомендується:

- Сучасний веб-браузер (Chrome, Firefox, Safari, Edge)
- Текстовий редактор або IDE (VS Code, Sublime Text, etc.)
- Git для контролю версій
- (Опціонально) Локальний веб-сервер для розробки

### 🚀 Швидкий старт

#### 1. Клонування репозиторію

```bash
git clone https://github.com/ivankovalenko/portfolio.git
cd portfolio
```

#### 2. Локальна розробка

**Варіант А: Використання Python (рекомендується)**

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Відкрийте браузер: `http://localhost:8000`

**Варіант Б: Використання Node.js**

```bash
# Встановіть http-server глобально (один раз)
npm install -g http-server

# Запустіть сервер
http-server -p 8000
```

Відкрийте браузер: `http://localhost:8000`

**Варіант В: Використання PHP**

```bash
php -S localhost:8000
```

**Варіант Г: Використання VS Code**

Встановіть розширення "Live Server" та натисніть "Go Live" у редакторі.

#### 3. Відкрийте в браузері

Перейдіть до `http://localhost:8000` і сайт буде доступний локально.

### 📁 Структура проєкту

```
portfolio/
├── index.html              # Головна HTML сторінка
├── manifest.json           # Web app manifest (PWA)
├── README.md              # Цей файл
├── css/
│   └── style.css          # Основні стилі
├── js/
│   ├── localization.js    # Система локалізації
│   └── main.js            # Основна логіка
├── locales/
│   ├── uk.json            # Український переклад
│   └── en.json            # Англійський переклад
└── assets/
    ├── images/
    │   ├── favicon-light.svg      # Favicon для світлої теми
    │   ├── favicon-dark.svg       # Favicon для темної теми
    │   └── social-preview.svg     # Зображення для соцмереж
    └── icons/
```

### 🎨 Налаштування контенту

#### Редагування перекладів

Відредагуйте файли локалізації для зміни контенту:

- **Українська**: `locales/uk.json`
- **Англійська**: `locales/en.json`

Структура JSON файлу:

```json
{
  "hero": {
    "greeting": "Привіт, я",
    "name": "Ім'я Прізвище"
  },
  "about": {
    "heading": "Про мене",
    "text": ["Параграф 1", "Параграф 2"]
  },
  "projects": {
    "items": [
      {
        "title": "Назва проєкту",
        "description": "Опис",
        "technologies": ["React", "Node.js"],
        "links": {
          "github": "https://github.com/...",
          "demo": "https://..."
        }
      }
    ]
  }
}
```

#### Зміна мета-тегів

Мета-теги автоматично оновлюються з файлів локалізації. Для зміни базових значень відредагуйте розділ `meta` у JSON файлах.

#### Додавання проєктів

Додайте нові проєкти до масиву `projects.items` у JSON файлах:

```json
{
  "title": "Новий проєкт",
  "description": "Опис проєкту",
  "technologies": ["Tech1", "Tech2"],
  "links": {
    "github": "URL",
    "demo": "URL",
    "live": "URL"
  },
  "featured": true
}
```

### 🌐 Розгортання на GitHub Pages

#### Автоматичне розгортання

1. **Створіть репозиторій GitHub**
   ```bash
   # Ініціалізуйте git (якщо ще не зроблено)
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Підключіть віддалений репозиторій**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Увімкніть GitHub Pages**
   - Перейдіть до Settings репозиторію
   - Натисніть "Pages" у лівому меню
   - В "Source" виберіть "Deploy from a branch"
   - В "Branch" виберіть "main" та папку "/ (root)"
   - Натисніть "Save"

4. **Зачекайте розгортання**
   - GitHub автоматично розгорне ваш сайт
   - Сайт буде доступний за адресою: `https://YOUR_USERNAME.github.io/YOUR_REPO`
   - Або `https://YOUR_USERNAME.github.io/` якщо репозиторій називається `YOUR_USERNAME.github.io`

#### Оновлення сайту

```bash
# Зробіть зміни у коді
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages автоматично перебудує сайт протягом кількох хвилин.

### 🔧 Налаштування

#### Зміна URL сайту

Після розгортання оновіть ці файли:

1. **index.html** - змініть `canonical`, `og:url`, `twitter:url`:
   ```html
   <link rel="canonical" href="https://YOUR_USERNAME.github.io/">
   ```

2. **locales/*.json** - оновіть посилання у проєктах
3. **manifest.json** - оновіть `start_url` якщо потрібно

#### Додавання Google Analytics

Додайте перед закриваючим тегом `</head>` в `index.html`:

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

#### Власний домен

1. Створіть файл `CNAME` в корені проєкту:
   ```
   yourdomain.com
   ```

2. Налаштуйте DNS записи у вашого провайдера домену:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```

### 🧪 Тестування

#### Перевірка SEO

- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Lighthouse**: Вбудований в Chrome DevTools

#### Перевірка доступності

```bash
# Використовуйте Lighthouse в Chrome DevTools
# Або встановіть CLI
npm install -g lighthouse

# Запустіть аудит
lighthouse http://localhost:8000 --view
```

#### Перевірка на різних пристроях

- Chrome DevTools: F12 → Device Toolbar (Ctrl+Shift+M)
- Реальні пристрої через локальну мережу
- BrowserStack або подібні сервіси

### 📝 Чеклист перед публікацією

- [ ] Оновлено всі тексти у JSON файлах
- [ ] Додано реальні посилання на проєкти
- [ ] Змінено контактну інформацію
- [ ] Оновлено мета-теги та OpenGraph зображення
- [ ] Перевірено на мобільних пристроях
- [ ] Протестовано в різних браузерах
- [ ] Перевірено SEO через валідатори
- [ ] Оновлено URL у файлах після розгортання
- [ ] Додано Google Analytics (опціонально)

### 🐛 Вирішення проблем

**Проблема**: Сайт не відображається на GitHub Pages

**Рішення**:
- Перевірте, що GitHub Pages увімкнено в налаштуваннях
- Переконайтесь, що `index.html` знаходиться в корені репозиторію
- Зачекайте 5-10 хвилин після першого push

**Проблема**: JSON не завантажується локально

**Рішення**:
- Використовуйте локальний веб-сервер (не просто відкривайте файл у браузері)
- Переконайтесь у правильних шляхах до файлів

**Проблема**: Стилі не застосовуються

**Рішення**:
- Перевірте шляхи до CSS файлів
- Очистіть кеш браузера (Ctrl+Shift+R)
- Перевірте консоль браузера на помилки

### 📄 Ліцензія

MIT License - вільне використання для особистих та комерційних проєктів.

### 🤝 Внесок

Пропозиції та покращення вітаються! Створюйте issue або pull request.

### 📧 Контакти

- **Email**: ivan.kovalenko@example.com
- **GitHub**: [@ivankovalenko](https://github.com/ivankovalenko)
- **LinkedIn**: [Ivan Kovalenko](https://linkedin.com/in/ivankovalenko)

---

## 🇬🇧 English

### About

Modern web developer portfolio with bilingual support (Ukrainian and English). Created to showcase skills, projects, and educational experience of a 2nd year Software Engineering (IPZ) student at Zhytomyr Polytechnic State University.

### ✨ Features

- 🌍 **Bilingual**: Full Ukrainian and English language support
- 🎨 **Modern Design**: Responsive interface with light and dark theme support
- 📱 **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- 🚀 **Fast**: Minimal dependencies, optimized performance
- ♿ **Accessible**: Semantic HTML markup, ARIA attributes
- 🔍 **SEO Optimized**: Meta tags, Open Graph, structured data
- 📊 **Analytics Ready**: Ready for Google Analytics integration
- 🎯 **PWA Ready**: Web manifest and Service Worker support

### 🛠️ Technologies

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Styling**: Custom CSS with CSS Variables, Flexbox, Grid
- **Localization**: JSON-based translation system
- **SEO**: Schema.org structured data, Open Graph, Twitter Cards
- **Icons**: SVG favicons with light/dark mode support
- **Hosting**: GitHub Pages

### 📋 Prerequisites

You only need a web browser to view the site. For development, we recommend:

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code, Sublime Text, etc.)
- Git for version control
- (Optional) Local web server for development

### 🚀 Quick Start

#### 1. Clone Repository

```bash
git clone https://github.com/ivankovalenko/portfolio.git
cd portfolio
```

#### 2. Local Development

**Option A: Using Python (recommended)**

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Open browser: `http://localhost:8000`

**Option B: Using Node.js**

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000
```

Open browser: `http://localhost:8000`

**Option C: Using PHP**

```bash
php -S localhost:8000
```

**Option D: Using VS Code**

Install "Live Server" extension and click "Go Live" in the editor.

#### 3. Open in Browser

Navigate to `http://localhost:8000` and the site will be available locally.

### 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML page
├── manifest.json           # Web app manifest (PWA)
├── README.md              # This file
├── css/
│   └── style.css          # Main styles
├── js/
│   ├── localization.js    # Localization system
│   └── main.js            # Main logic
├── locales/
│   ├── uk.json            # Ukrainian translation
│   └── en.json            # English translation
└── assets/
    ├── images/
    │   ├── favicon-light.svg      # Favicon for light theme
    │   ├── favicon-dark.svg       # Favicon for dark theme
    │   └── social-preview.svg     # Social media preview image
    └── icons/
```

### 🎨 Customizing Content

#### Editing Translations

Edit the localization files to change content:

- **Ukrainian**: `locales/uk.json`
- **English**: `locales/en.json`

JSON file structure:

```json
{
  "hero": {
    "greeting": "Hi, I'm",
    "name": "Your Name"
  },
  "about": {
    "heading": "About Me",
    "text": ["Paragraph 1", "Paragraph 2"]
  },
  "projects": {
    "items": [
      {
        "title": "Project Name",
        "description": "Description",
        "technologies": ["React", "Node.js"],
        "links": {
          "github": "https://github.com/...",
          "demo": "https://..."
        }
      }
    ]
  }
}
```

#### Changing Meta Tags

Meta tags are automatically updated from localization files. To change base values, edit the `meta` section in JSON files.

#### Adding Projects

Add new projects to the `projects.items` array in JSON files:

```json
{
  "title": "New Project",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "links": {
    "github": "URL",
    "demo": "URL",
    "live": "URL"
  },
  "featured": true
}
```

### 🌐 Deploying to GitHub Pages

#### Automatic Deployment

1. **Create GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Connect Remote Repository**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the left menu
   - Under "Source" select "Deploy from a branch"
   - Under "Branch" select "main" and folder "/ (root)"
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will automatically deploy your site
   - Site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO`
   - Or `https://YOUR_USERNAME.github.io/` if repository is named `YOUR_USERNAME.github.io`

#### Updating the Site

```bash
# Make changes to code
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will automatically rebuild the site within a few minutes.

### 🔧 Configuration

#### Changing Site URL

After deployment, update these files:

1. **index.html** - change `canonical`, `og:url`, `twitter:url`:
   ```html
   <link rel="canonical" href="https://YOUR_USERNAME.github.io/">
   ```

2. **locales/*.json** - update project links
3. **manifest.json** - update `start_url` if needed

#### Adding Google Analytics

Add before closing `</head>` tag in `index.html`:

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

#### Custom Domain

1. Create `CNAME` file in project root:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```

### 🧪 Testing

#### SEO Validation

- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Lighthouse**: Built into Chrome DevTools

#### Accessibility Check

```bash
# Use Lighthouse in Chrome DevTools
# Or install CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:8000 --view
```

#### Device Testing

- Chrome DevTools: F12 → Device Toolbar (Ctrl+Shift+M)
- Real devices via local network
- BrowserStack or similar services

### 📝 Pre-Launch Checklist

- [ ] Updated all texts in JSON files
- [ ] Added real project links
- [ ] Changed contact information
- [ ] Updated meta tags and OpenGraph images
- [ ] Tested on mobile devices
- [ ] Tested in different browsers
- [ ] Validated SEO through validators
- [ ] Updated URLs in files after deployment
- [ ] Added Google Analytics (optional)

### 🐛 Troubleshooting

**Issue**: Site not displaying on GitHub Pages

**Solution**:
- Check that GitHub Pages is enabled in settings
- Ensure `index.html` is in repository root
- Wait 5-10 minutes after first push

**Issue**: JSON not loading locally

**Solution**:
- Use a local web server (don't just open file in browser)
- Verify correct file paths

**Issue**: Styles not applying

**Solution**:
- Check paths to CSS files
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### 📄 License

MIT License - free to use for personal and commercial projects.

### 🤝 Contributing

Suggestions and improvements are welcome! Create an issue or pull request.

### 📧 Contact

- **Email**: ivan.kovalenko@example.com
- **GitHub**: [@ivankovalenko](https://github.com/ivankovalenko)
- **LinkedIn**: [Ivan Kovalenko](https://linkedin.com/in/ivankovalenko)

---

**Made with ❤️ and ☕ in Zhytomyr, Ukraine**
