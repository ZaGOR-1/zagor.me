'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import type { Translation } from '@/types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  translations: Translation;
}

function ProjectsSection({ translations }: ProjectsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      
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
            <span className="gradient-text">{translations.projects.title}</span>
          </motion.h2>
          <p className="text-[#4A5568] dark:text-gray-400 text-base sm:text-lg px-2">
            {translations.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {translations.projects.items.map((project: any, index: number) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
