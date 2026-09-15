import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales, isLocale } from '@/content/site';
import { SiteShell } from '@/components/shell';
import '@fontsource-variable/manrope';
import '../globals.css';

export const dynamicParams = false;
export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <html lang={lang}><body><SiteShell locale={lang}>{children}</SiteShell></body></html>;
}
