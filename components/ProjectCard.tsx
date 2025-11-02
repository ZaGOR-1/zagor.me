'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  index: number;
}

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -8 }}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden card-hover h-full flex flex-col group border border-gray-200/50 dark:border-gray-700/50"
    >
      <motion.div 
        className="h-40 sm:h-48 bg-gradient-to-br from-primary-500 via-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <motion.span 
          className="text-5xl sm:text-6xl relative z-10 filter drop-shadow-lg"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          📁
        </motion.span>
      </motion.div>
      
      <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-[#1A2332] dark:text-gray-100 mb-2 sm:mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{title}</h3>
        
        <p className="text-sm sm:text-base text-[#4A5568] dark:text-gray-400 mb-3 sm:mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium border border-primary-200/50 dark:border-primary-700/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/20 dark:hover:to-blue-900/20 rounded-xl transition-all text-center text-sm sm:text-base font-medium mobile-touch-target btn-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-xl transition-all text-center text-sm sm:text-base font-medium mobile-touch-target shadow-lg hover:shadow-xl btn-modern"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
