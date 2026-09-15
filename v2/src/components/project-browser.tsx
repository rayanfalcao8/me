'use client';

import { useState } from 'react';
import type { Locale } from '@/content/site';
import { ui } from '@/content/site';
import { projects, categoryNames, statusNames, type Category } from '@/content/projects';
import { ProjectCard } from './project-card';
import { Arrow } from './arrow';

export function ProjectBrowser({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);
  const detailed = filtered.filter((p) => p.caseStudy);
  const other = filtered.filter((p) => !p.caseStudy);
  return (
    <div className="shell work-browser">
      <div className="filter-bar">
        <div className="filters" role="group" aria-label={locale === 'fr' ? 'Filtrer les projets par domaine' : 'Filter projects by domain'}>
          {(['all', ...Object.keys(categoryNames)] as (Category | 'all')[]).map((key) => <button key={key} aria-pressed={filter === key} onClick={() => setFilter(key)}>{key === 'all' ? ui[locale].all : categoryNames[key][locale]}</button>)}
        </div>
        <p className="filter-count" role="status">{filtered.length} {locale === 'fr' ? 'projets présentés' : 'projects shown'}</p>
      </div>
      {detailed.length > 0 && <div className="projects-grid">{detailed.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div>}
      {other.length > 0 && <section className="project-directory" aria-labelledby="directory-title">
        <h2 id="directory-title">{locale === 'fr' ? 'Autres réalisations & explorations' : 'More work & explorations'}</h2>
        <div className="directory-items">{other.map((project) => <article className="directory-item" key={project.slug}>
          <span className="directory-category">{categoryNames[project.category][locale]}</span>
          <div><h3>{project.name}</h3><p>{project.description[locale]}</p></div>
          <span className="directory-status">{statusNames[project.status][locale]}</span>
          {project.source ? <a href={project.source} target="_blank" rel="noreferrer" className="directory-link" aria-label={`${ui[locale].source} — ${project.name}`}><Arrow /><span className="sr-only">{ui[locale].source}</span></a> : <span aria-hidden="true" className="directory-dash">—</span>}
        </article>)}</div>
      </section>}
    </div>
  );
}
