'use client';

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { Translation } from '@/types';

interface HeroSectionProps {
  translations: Translation;
}

function HeroSection({ translations }: HeroSectionProps) {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-14 sm:pt-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="text-primary-600 dark:text-primary-400 text-base sm:text-lg mb-2 font-semibold tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {translations.hero.greeting}
            </motion.p>
            
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {translations.hero.name}
            </motion.h1>
            
            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl text-[#4A5568] dark:text-gray-400 mb-3 sm:mb-4 leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {translations.hero.title}
            </motion.h2>
            
            <motion.div
              className="mb-4 sm:mb-6 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base sm:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed">
                {translations.hero.subtitle}
              </p>
              <p className="text-base sm:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed">
                {translations.hero.university}
              </p>
            </motion.div>
            
            <motion.p
              className="text-sm sm:text-base text-[#4A5568] dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {translations.hero.description}
            </motion.p>
            
            <motion.div
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-xl transition-all font-medium text-base mobile-touch-target shadow-lg hover:shadow-2xl btn-modern"
              >
                {translations.hero.cta.projects}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-[#E6F4FB] dark:hover:bg-primary-900/20 rounded-xl transition-all font-medium text-base mobile-touch-target backdrop-blur-sm btn-modern"
              >
                {translations.hero.cta.contact}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center order-1 lg:order-2 mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-blue-500 to-purple-500 rounded-full opacity-30 blur-2xl sm:blur-3xl animate-pulse-glow"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-700/30 shadow-2xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 flex items-center justify-center backdrop-blur-sm floating"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <motion.div 
                  className="text-6xl xs:text-7xl sm:text-8xl relative z-10"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
