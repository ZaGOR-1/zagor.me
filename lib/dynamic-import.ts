import { ComponentType, lazy } from 'react';

/**
 * Utility для динамічного імпорту компонентів з retry механізмом
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries = 3,
  interval = 1000
): React.LazyExoticComponent<T> {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      const attemptImport = (retriesLeft: number) => {
        componentImport()
          .then(resolve)
          .catch((error) => {
            if (retriesLeft === 0) {
              reject(error);
              return;
            }
            
            setTimeout(() => {
              console.log(`Retrying import... (${retriesLeft} attempts left)`);
              attemptImport(retriesLeft - 1);
            }, interval);
          });
      };

      attemptImport(retries);
    });
  });
}

/**
 * Preload компонента для швидшого завантаження
 */
export function preloadComponent(
  componentImport: () => Promise<any>
): void {
  if (typeof window !== 'undefined') {
    // Використовуємо requestIdleCallback якщо доступний
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        componentImport().catch(() => {
          // Ігноруємо помилки при preload
        });
      });
    } else {
      // Fallback для браузерів без requestIdleCallback
      setTimeout(() => {
        componentImport().catch(() => {
          // Ігноруємо помилки при preload
        });
      }, 1);
    }
  }
}

/**
 * Динамічний імпорт з prefetch
 */
export function prefetchRoute(route: string): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
}
