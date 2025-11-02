import { getTranslations, type Locale, locales } from '@/lib/i18n';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import ScrollProgress from '@/components/ScrollProgress';
import ErrorBoundary from '@/components/ErrorBoundary';
import PerformanceMonitor from '@/components/PerformanceMonitor';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations(locale);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <PerformanceMonitor />
        <ScrollProgress />
        <Navbar locale={locale} translations={t} />
        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
            <HeroSection translations={t} />
          </Suspense>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <AboutSection translations={t} />
          </Suspense>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <SkillsSection translations={t} />
          </Suspense>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <EducationSection translations={t} />
          </Suspense>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <ProjectsSection translations={t} />
          </Suspense>
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <ContactForm translations={t} />
          </Suspense>
        </main>
        <Footer translations={t} />
      </div>
    </ErrorBoundary>
  );
}
