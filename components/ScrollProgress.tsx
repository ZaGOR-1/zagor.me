'use client';

import { memo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-blue-600 origin-left z-[100] shadow-lg"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export default memo(ScrollProgress);
