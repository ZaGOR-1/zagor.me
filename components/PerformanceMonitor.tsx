'use client';

import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getTTFB, reportWebVitals } from '@/lib/web-vitals';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Відстеження Core Web Vitals
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getLCP(reportWebVitals);
    getTTFB(reportWebVitals);

    // Відстеження Navigation Timing
    if (performance.getEntriesByType) {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navTiming = navigationEntries[0] as PerformanceNavigationTiming;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Navigation Timing:', {
            'DNS Lookup': navTiming.domainLookupEnd - navTiming.domainLookupStart,
            'TCP Connection': navTiming.connectEnd - navTiming.connectStart,
            'Request Time': navTiming.responseStart - navTiming.requestStart,
            'Response Time': navTiming.responseEnd - navTiming.responseStart,
            'DOM Interactive': navTiming.domInteractive - navTiming.fetchStart,
            'DOM Complete': navTiming.domComplete - navTiming.fetchStart,
            'Load Complete': navTiming.loadEventEnd - navTiming.loadEventStart,
          });
        }
      }
    }

    // Відстеження Resource Timing
    if (performance.getEntriesByType) {
      const resourceEntries = performance.getEntriesByType('resource');
      const slowResources = resourceEntries.filter(
        (entry: PerformanceEntry) => entry.duration > 1000
      );

      if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('Slow resources detected:', slowResources);
      }
    }

    // Відстеження Long Tasks (якщо підтримується)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('Long task detected:', entry.duration, 'ms');
          }
        }
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
      
      return () => longTaskObserver.disconnect();
    } catch (e) {
      // longtask не підтримується
    }
  }, []);

  return null;
}
