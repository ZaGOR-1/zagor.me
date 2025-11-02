export function reportWebVitals(metric: any) {
  // Можна додати Google Analytics, Vercel Analytics, або інші інструменти
  if (process.env.NODE_ENV === 'production') {
    console.log(metric);
    
    // Приклад інтеграції з Google Analytics
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }
    
    // Приклад інтеграції з власним API
    // navigator.sendBeacon('/api/vitals', JSON.stringify(metric));
  }
}

export function getCLS(onReport: (metric: any) => void) {
  if (typeof window === 'undefined') return;
  
  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        clsEntries.push(entry);
      }
    }
    onReport({ name: 'CLS', value: clsValue, entries: clsEntries });
  });

  observer.observe({ type: 'layout-shift', buffered: true });
}

export function getFID(onReport: (metric: any) => void) {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fidValue = (entry as PerformanceEventTiming).processingStart - entry.startTime;
      onReport({ name: 'FID', value: fidValue, entry });
    }
  });

  observer.observe({ type: 'first-input', buffered: true });
}

export function getLCP(onReport: (metric: any) => void) {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    onReport({ name: 'LCP', value: lastEntry.startTime, entry: lastEntry });
  });

  observer.observe({ type: 'largest-contentful-paint', buffered: true });
}

export function getTTFB(onReport: (metric: any) => void) {
  if (typeof window === 'undefined') return;

  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigationEntry) {
    const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    onReport({ name: 'TTFB', value: ttfb, entry: navigationEntry });
  }
}
