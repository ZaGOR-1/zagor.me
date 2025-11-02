export const locales = ['uk', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uk';

const translationCache = new Map<Locale, any>();

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function getTranslations(locale: Locale) {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  if (translationCache.has(locale)) {
    return translationCache.get(locale);
  }

  const translation = await import(`@/locales/${locale}/translation.json`).then(
    (module) => module.default
  );

  translationCache.set(locale, translation);
  return translation;
}
