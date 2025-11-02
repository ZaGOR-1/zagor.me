import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://zagor-1.github.io/testanyproject'),
  title: 'Denys Zahorovskyi | Portfolio',
  description: 'Portfolio website of Denys Zahorovskyi - Software Engineering Student at Zhytomyr Polytechnic',
  keywords: ['portfolio', 'software engineering', 'web development', 'Denys Zahorovskyi'],
  authors: [{ name: 'Denys Zahorovskyi' }],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://zagor-1.github.io/testanyproject',
    siteName: 'Denys Zahorovskyi Portfolio',
    title: 'Denys Zahorovskyi | Portfolio',
    description: 'Portfolio website of Denys Zahorovskyi - Software Engineering Student',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Denys Zahorovskyi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denys Zahorovskyi | Portfolio',
    description: 'Portfolio website of Denys Zahorovskyi - Software Engineering Student',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        {/* Preconnect для швидшого завантаження */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="theme-color" content="#1a202c" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Denys Zahorovskyi',
              jobTitle: 'Software Engineering Student',
              url: 'https://zagor-1.github.io/testanyproject',
              sameAs: [
                'https://github.com/ZaGOR-1',
              ],
              alumniOf: {
                '@type': 'Organization',
                name: 'Zhytomyr Polytechnic State University',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
