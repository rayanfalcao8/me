import { notFound } from 'next/navigation';
import { isLocale } from '@/content/site';
import { AboutPage } from '@/components/editorial-pages';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound();
  return pageMetadata(lang, lang === 'fr' ? 'À propos' : 'About', lang === 'fr' ? 'Développeur logiciel full stack à Québec. Six ans de pratique, MIREV Solutions et études en intelligence artificielle.' : 'Full-stack software developer in Québec City. Six years of practice, MIREV Solutions and studies in artificial intelligence.', 'about');
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound(); return <AboutPage locale={lang} />;
}
