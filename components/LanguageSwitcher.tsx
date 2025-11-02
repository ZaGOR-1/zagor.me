'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, memo } from 'react';
import type { Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = useCallback((newLocale: Locale) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  }, [pathname, currentLocale, router]);

  return (
    <div className="flex items-center space-x-2 bg-[#EDF2F7] dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => switchLocale('uk')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLocale === 'uk'
            ? 'bg-[#FCFDFE] dark:bg-gray-700 text-primary-600 dark:text-primary-400'
            : 'text-[#4A5568] dark:text-gray-400 hover:text-[#1A2332] dark:hover:text-gray-200'
        }`}
        aria-label="Switch to Ukrainian"
      >
        🇺🇦
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLocale === 'en'
            ? 'bg-[#FCFDFE] dark:bg-gray-700 text-primary-600 dark:text-primary-400'
            : 'text-[#4A5568] dark:text-gray-400 hover:text-[#1A2332] dark:hover:text-gray-200'
        }`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>
    </div>
  );
}

export default memo(LanguageSwitcher);
