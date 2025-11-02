'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import type { Translation } from '@/types';

interface EducationSectionProps {
  translations: Translation;
}

function EducationSection({ translations }: EducationSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      
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
            <span className="gradient-text">{translations.education.title}</span>
          </motion.h2>
          <p className="text-[#4A5568] dark:text-gray-400 text-base sm:text-lg px-2">
            {translations.education.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 rounded-full"></div>
            
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 sm:ml-12 lg:ml-16 relative border border-gray-200/50 dark:border-gray-700/50 card-hover"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <motion.div 
                className="hidden sm:block absolute -left-8 lg:-left-12 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0.4)',
                    '0 0 0 10px rgba(59, 130, 246, 0)',
                    '0 0 0 0 rgba(59, 130, 246, 0)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              ></motion.div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight">
                    {translations.education.current.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {translations.education.current.institution}
                  </p>
                </div>
                <motion.span 
                  className="text-sm sm:text-base text-white dark:text-gray-900 bg-gradient-to-r from-primary-600 to-blue-600 px-3 py-1 rounded-full sm:whitespace-nowrap font-medium shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  {translations.education.current.year}
                </motion.span>
              </div>
              
              <p className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {translations.education.current.speciality}
              </p>
              
              <p className="text-sm sm:text-base text-[#4A5568] dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                {translations.education.current.description}
              </p>
              
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-3 text-[#1A2332] dark:text-gray-200">
                  Ключові курси:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {translations.education.current.courses.map((course: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5">▸</span>
                      <span className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 leading-relaxed">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {translations.education.certificates && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-8 bg-[#FCFDFE] dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary-600 dark:text-primary-400">
                {translations.education.certificates.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {translations.education.certificates.items.map((cert: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-br from-[#E6F4FB] to-[#E3F2FD] dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 sm:p-4 border-2 border-[#B3D9F2] dark:border-primary-700"
                  >
                    <div className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#1A2332] dark:text-gray-100 leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium mt-0.5">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-[#4A5568] dark:text-gray-300 mt-1 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(EducationSection);
