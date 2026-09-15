import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, ui } from '@/content/site';
import { featuredProjects, statusNames, categoryNames } from '@/content/projects';
import { ProjectVisual } from '@/components/project-visual';
import { Arrow } from '@/components/arrow';
import { pageMetadata } from '@/lib/metadata';

export const dynamicParams = false;
export function generateStaticParams() { return featuredProjects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!isLocale(lang) || !project) notFound();
  return pageMetadata(lang, project.name, project.description[lang], `work/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!isLocale(lang) || !project?.caseStudy) notFound();
  const words = ui[lang];
  const study = project.caseStudy;
  const next = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length];
  return <>
    <div className="shell case-header"><Link href={`/${lang}/work/`} className="back-link">← {words.back}</Link><div className="case-meta"><span className="eyebrow">{categoryNames[project.category][lang]}</span><span>{statusNames[project.status][lang]}</span></div><h1>{project.name}</h1><p className="case-subtitle">{project.subtitle[lang]}</p><div className="case-facts"><span>{project.period[lang]}</span><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.source && <a className="text-link" href={project.source} target="_blank" rel="noreferrer">{words.source}<Arrow /></a>}</div></div>
    {project.diagram && <div className="shell"><ProjectVisual kind={project.diagram} locale={lang} large /></div>}
    <div className="shell case-body">
      <nav className="case-index" aria-label={lang === 'fr' ? 'Sommaire du projet' : 'Project contents'}>{[['context', words.context], ['role', words.role], ['approach', words.approach], ['delivered', words.delivered], ['limits', words.limits]].map(([id, text], i) => <a key={id} href={`#${id}`}><span>0{i + 1}</span>{text}</a>)}</nav>
      <div className="case-prose prose">
        <section id="context"><span className="eyebrow">01 /</span><h2>{words.context}</h2><p>{study.context[lang]}</p></section>
        <section id="role"><span className="eyebrow">02 /</span><h2>{words.role}</h2><p>{study.role[lang]}</p></section>
        <section id="approach"><span className="eyebrow">03 /</span><h2>{words.approach}</h2><ol className="decision-list">{study.decisions[lang].map((text, i) => <li key={text}><span>0{i + 1}</span><p>{text}</p></li>)}</ol></section>
        <section id="delivered"><span className="eyebrow">04 /</span><h2>{words.delivered}</h2><ul className="delivered-list">{study.delivered[lang].map((text) => <li key={text}>{text}</li>)}</ul></section>
        <section id="limits" className="limits-section"><span className="eyebrow">05 /</span><h2>{words.limits}</h2><p>{study.limits[lang]}</p></section>
      </div>
    </div>
    <div className="shell next-case"><span className="eyebrow">{words.next}</span><Link href={`/${lang}/work/${next.slug}/`}>{next.name}<Arrow /></Link></div>
  </>;
}
