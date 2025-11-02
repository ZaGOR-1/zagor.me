'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import type { Translation } from '@/types';

interface AboutSectionProps {
  translations: Translation;
}

function AboutSection({ translations }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-950/10"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{translations.about.title}</span>
          </motion.h2>
          <p className="text-[#4A5568] dark:text-gray-400 text-base sm:text-lg px-2">
            {translations.about.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="prose dark:prose-invert max-w-none space-y-4">
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                {translations.about.description}
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                {translations.about.paragraph1}
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {translations.about.paragraph2}
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-[#1A2332] dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                {translations.about.paragraph3}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 card-hover"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1A2332] dark:text-gray-100 mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                {translations.about.interests.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {translations.about.interests.items.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-blue-500"></span>
                    <span className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 card-hover"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1A2332] dark:text-gray-100 mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {translations.about.achievements.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {translations.about.achievements.items.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                    <span className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-purple-50 dark:from-blue-900/20 dark:via-blue-800/10 dark:to-purple-900/20 rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-blue-500 backdrop-blur-sm card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-[#1565C0] dark:text-blue-300 relative z-10">
              💭 {translations.about.philosophy ? 'My Philosophy' : 'Моя філософія'}
            </h3>
            <p className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 italic leading-relaxed relative z-10">
              &ldquo;{translations.about.philosophy}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-purple-50 via-pink-100/50 to-red-50 dark:from-purple-900/20 dark:via-pink-800/10 dark:to-red-900/20 rounded-2xl shadow-lg p-4 sm:p-6 border-l-4 border-purple-500 backdrop-blur-sm card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-[#6A1B9A] dark:text-purple-300 relative z-10">
              ✨ {translations.about.funFact ? 'Fun Fact' : 'Цікавий факт'}
            </h3>
            <p className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 leading-relaxed relative z-10">
              {translations.about.funFact}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
