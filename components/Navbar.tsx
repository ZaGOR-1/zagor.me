'use client';

import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n';
import type { Translation } from '@/types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { usePrefetch } from '@/hooks/usePrefetch';

interface NavbarProps {
  locale: Locale;
  translations: Translation;
}

function Navbar({ locale, translations }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const alternativeLocale = locale === 'uk' ? 'en' : 'uk';
  usePrefetch([`/${alternativeLocale}/`], true);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home' as const, href: '#home' },
    { key: 'about' as const, href: '#about' },
    { key: 'skills' as const, href: '#skills' },
    { key: 'education' as const, href: '#education' },
    { key: 'projects' as const, href: '#projects' },
    { key: 'contact' as const, href: '#contact' },
  ] as const;

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link
            href={`/${locale}`}
            className="text-lg sm:text-xl font-bold gradient-text hover:opacity-80 transition-all mobile-touch-target flex items-center hover:scale-110"
          >
            DZ
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm lg:text-base text-[#4A5568] dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {translations.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden xs:block">
              <ThemeToggle />
            </div>
            <div className="hidden xs:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            
            <button
              className="md:hidden p-2 mobile-touch-target rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden glass-effect border-t border-gray-200/50 dark:border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-3 pt-3 pb-4 space-y-1 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-[#4A5568] dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/20 dark:hover:to-blue-900/20 active:scale-95 transition-all mobile-touch-target"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.nav[item.key]}
              </motion.a>
            ))}
            <div className="xs:hidden pt-2 mt-2 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default memo(Navbar);
