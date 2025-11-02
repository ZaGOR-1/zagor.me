/**
 * Utility функції для оптимізації продуктивності
 */

/**
 * Перевірка чи пристрій підтримує webp
 */
export function supportsWebP(): Promise<boolean> {
  if (typeof window === 'undefined') return Promise.resolve(false);
  
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Перевірка connection type для адаптивного завантаження
 */
export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' {
  if (typeof window === 'undefined') return 'medium';
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 'medium';
  
  const type = connection.effectiveType;
  
  if (type === 'slow-2g' || type === '2g') return 'slow';
  if (type === '3g') return 'medium';
  return 'fast';
}

/**
 * Перевірка чи користувач зберігає дані
 */
export function isDataSaverEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  return connection?.saveData === true;
}

/**
 * Оптимізований setTimeout з очищенням
 */
export function safeTimeout(callback: () => void, delay: number): () => void {
  const timeoutId = setTimeout(callback, delay);
  return () => clearTimeout(timeoutId);
}

/**
 * Оптимізований setInterval з очищенням
 */
export function safeInterval(callback: () => void, interval: number): () => void {
  const intervalId = setInterval(callback, interval);
  return () => clearInterval(intervalId);
}

/**
 * RequestAnimationFrame з cancellation
 */
export function safeRAF(callback: () => void): () => void {
  const rafId = requestAnimationFrame(callback);
  return () => cancelAnimationFrame(rafId);
}

/**
 * Measure performance of a function
 */
export async function measurePerformance<T>(
  name: string,
  fn: () => T | Promise<T>
): Promise<T> {
  const start = performance.now();
  
  try {
    const result = await fn();
    const duration = performance.now() - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`[Performance] ${name} failed after ${duration.toFixed(2)}ms:`, error);
    throw error;
  }
}

/**
 * Throttle function для обмеження викликів
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;

  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      lastResult = func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Перевірка видимості сторінки
 */
export function onPageVisible(callback: () => void): () => void {
  if (typeof document === 'undefined') return () => {};

  const handleVisibilityChange = () => {
    if (!document.hidden) {
      callback();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}

/**
 * Lazy load функція з Intersection Observer
 */
export function lazyLoad(
  element: HTMLElement,
  callback: () => void,
  options?: IntersectionObserverInit
): () => void {
  if (typeof window === 'undefined') return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    options || { threshold: 0.1 }
  );

  observer.observe(element);

  return () => observer.disconnect();
}

/**
 * Preload критичних ресурсів
 */
export function preloadResource(href: string, as: string): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Prefetch наступних сторінок
 */
export function prefetchResource(href: string): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}
