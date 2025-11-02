import { useEffect } from 'react';

/**
 * Hook для prefetch-інгу ресурсів коли браузер в idle стані
 */
export function usePrefetch(urls: string[], enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const prefetchResource = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'document';
      document.head.appendChild(link);
      return link;
    };

    const handleIdle = () => {
      const links = urls.map(url => prefetchResource(url));
      
      return () => {
        links.forEach(link => {
          if (link && link.parentNode) {
            link.parentNode.removeChild(link);
          }
        });
      };
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(handleIdle, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const timeoutId = setTimeout(handleIdle, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [urls, enabled]);
}

/**
 * Hook для preconnect до зовнішніх доменів
 */
export function usePreconnect(domains: string[], enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const links: HTMLLinkElement[] = [];

    domains.forEach(domain => {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = domain;
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
      links.push(preconnect);

      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = domain;
      document.head.appendChild(dnsPrefetch);
      links.push(dnsPrefetch);
    });

    return () => {
      links.forEach(link => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [domains, enabled]);
}
