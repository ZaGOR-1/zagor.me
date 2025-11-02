'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import type { Translation, SkillCategory } from '@/types';

interface SkillsSectionProps {
  translations: Translation;
}

const skills = {
  frontend: [
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 65 },
    { name: 'MongoDB', level: 60 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'MS SQL', level: 70 },
  ],
  languages: [
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'C++', level: 65 },
    { name: 'C', level: 75 },
    { name: 'C#', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'Docker', level: 55 },
    { name: 'Figma', level: 60 },
  ],
};

function SkillsSection({ translations }: SkillsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      
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
            <span className="gradient-text">{translations.skills.title}</span>
          </motion.h2>
          <p className="text-[#4A5568] dark:text-gray-400 text-base sm:text-lg px-2">
            {translations.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {(Object.entries(skills) as [keyof typeof skills, typeof skills[keyof typeof skills]][]).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 card-hover"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 lg:mb-6 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {translations.skills.categories[category]}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.15 + index * 0.08 
                    }}
                  >
                    <div className="flex justify-between mb-1.5 sm:mb-2">
                      <span className="text-sm sm:text-base text-[#1A2332] dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-xs sm:text-sm text-[#4A5568] dark:text-gray-400 font-medium"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: categoryIndex * 0.15 + index * 0.08 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] dark:bg-gray-700 rounded-full h-2 sm:h-2.5 overflow-hidden relative">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 via-blue-500 to-purple-600 h-2 sm:h-2.5 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.15 + index * 0.08,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={isInView ? { x: '200%' } : { x: '-100%' }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.15 + index * 0.08 + 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);
