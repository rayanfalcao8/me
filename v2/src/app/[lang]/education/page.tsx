import { notFound } from 'next/navigation';
import { isLocale } from '@/content/site';
import { EducationPage } from '@/components/editorial-pages';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound();
  return pageMetadata(lang, lang === 'fr' ? 'Formation' : 'Education', lang === 'fr' ? 'Maîtrise en informatique et intelligence artificielle à l’Université Laval, en cours. Formation initiale à l’IAI, Cameroun.' : 'Ongoing master’s studies in computer science and artificial intelligence at Université Laval. Foundational education at IAI, Cameroon.', 'education');
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; if (!isLocale(lang)) notFound(); return <EducationPage locale={lang} />;
}
