import { notFound } from 'next/navigation';
import { isLocale } from '@/content/site';
import { ExperiencePage } from '@/components/editorial-pages';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound();
  return pageMetadata(lang, lang === 'fr' ? 'Parcours' : 'Experience', lang === 'fr' ? 'Le parcours de Rayan Tsolefack : développement, coordination et consultation, du Cameroun au Québec.' : 'Rayan Tsolefack’s experience in development, coordination and consulting, from Cameroon to Québec.', 'experience');
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound(); return <ExperiencePage locale={lang} />;
}
