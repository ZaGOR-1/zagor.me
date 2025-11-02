import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getTTFB, reportWebVitals } from '@/lib/web-vitals';

/**
 * Hook для автоматичного трекінгу Web Vitals
 * Використовується тільки в production
 */
export function useWebVitals(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    if (process.env.NODE_ENV !== 'production') return;

    const cleanup: Array<() => void> = [];

    try {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    } catch (error) {
      console.error('Error tracking Web Vitals:', error);
    }

    return () => {
      cleanup.forEach(fn => fn());
    };
  }, [enabled]);
}
