import { notFound } from 'next/navigation';
import { isLocale, profile } from '@/content/site';
import { Home } from '@/components/home';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, profile.role[lang], lang === 'fr' ? 'Six ans de développement logiciel. Plateformes e-commerce, API, produits métier et maîtrise en intelligence artificielle à Québec.' : 'Six years in software development. Commerce platforms, APIs, business products and master’s studies in artificial intelligence in Québec City.');
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <Home locale={lang} />;
}
