import { notFound } from 'next/navigation';
import { isLocale } from '@/content/site';
import { PageIntro } from '@/components/shell';
import { ProjectBrowser } from '@/components/project-browser';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return pageMetadata(lang, lang === 'fr' ? 'Réalisations' : 'Work', lang === 'fr' ? 'Plateformes e-commerce, SaaS, paiements et applications : réalisations et projets de Rayan Tsolefack.' : 'Commerce platforms, SaaS, payments and applications: work and projects by Rayan Tsolefack.', 'work');
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <><PageIntro eyebrow={lang === 'fr' ? 'RÉALISATIONS / RÉPERTOIRE' : 'WORK / DIRECTORY'} title={lang === 'fr' ? 'Des problèmes aux produits.' : 'From problems to products.'} description={lang === 'fr' ? 'Une sélection de mon travail professionnel, de produits indépendants et de prototypes. Chaque projet a son contexte et son état d’avancement.' : 'A selection of professional work, independent products and prototypes. Each project has its own context and stage of development.'} /><ProjectBrowser locale={lang} /></>;
}
