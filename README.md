# Denys Zahorovskyi - Portfolio Website

A modern, responsive portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Features bilingual support (Ukrainian/English), dark/light theme toggle, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8?style=for-the-badge&logo=tailwindcss)

## 🎓 About

This is a portfolio website for **Denys Zahorovskyi**, a 2nd year Software Engineering student at Zhytomyr Polytechnic (Specialty 121 — Software Engineering).

## ✨ Features

- 🌐 **Bilingual Support**: Ukrainian and English localization
- 🎨 **Dark/Light Theme**: Persistent theme toggle with localStorage
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast & Optimized**: Static site generation with Next.js
- 🎬 **Smooth Animations**: Framer Motion animations and transitions
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible**: ARIA labels, keyboard navigation, focus states

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: Vercel & GitHub Pages

## 📂 Project Structure

```
testanyproject/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-specific layout
│   │   └── page.tsx             # Main page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Root redirect
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation with smooth scroll
│   ├── Footer.tsx               # Footer with social links
│   ├── HeroSection.tsx          # Hero/landing section
│   ├── AboutSection.tsx         # About me section
│   ├── SkillsSection.tsx        # Skills with progress bars
│   ├── EducationSection.tsx     # Education timeline
│   ├── ProjectsSection.tsx      # Projects grid
│   ├── ProjectCard.tsx          # Reusable project card
│   ├── ContactForm.tsx          # Contact form with validation
│   ├── LanguageSwitcher.tsx     # Language toggle (🇺🇦/🇬🇧)
│   └── ThemeToggle.tsx          # Dark/light theme toggle
├── locales/
│   ├── uk/translation.json      # Ukrainian translations
│   └── en/translation.json      # English translations
├── lib/
│   └── i18n.ts                  # i18n configuration
├── public/
│   ├── images/                  # Image assets
│   └── favicon/                 # Favicon files
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ZaGOR-1/testanyproject.git
cd testanyproject
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static site

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZaGOR-1/testanyproject)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed automatically

### Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings:
   - Go to **Settings** → **Pages**
   - Source: **GitHub Actions**

2. Push to the `main` branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. The GitHub Actions workflow will automatically build and deploy your site
4. Your site will be available at `https://yourusername.github.io/testanyproject/`

## 📧 Contact

- **Email**: denys.zahorovskyi@example.com
- **GitHub**: [@ZaGOR-1](https://github.com/ZaGOR-1)
- **Location**: Zhytomyr, Ukraine

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ by Denys Zahorovskyi
