import Link from 'next/link';
import type { Locale } from '@/content/site';
import { ui } from '@/content/site';
import type { Project } from '@/content/projects';
import { categoryNames, statusNames } from '@/content/projects';
import { ProjectVisual } from './project-visual';
import { Arrow } from './arrow';

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/${locale}/work/${project.slug}/`} aria-label={`${ui[locale].readCase} — ${project.name}`}>
        {project.diagram && <ProjectVisual kind={project.diagram} locale={locale} />}
        <div className="project-card-meta"><span>{categoryNames[project.category][locale]}</span><span>{statusNames[project.status][locale]}</span></div>
        <div className="project-card-title"><h3>{project.name}</h3><span className="circle-arrow"><Arrow /></span></div>
        <p>{project.description[locale]}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </Link>
    </article>
  );
}
