'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/content/site';
import { featuredProjects, categoryNames, statusNames } from '@/content/projects';
import { ProjectVisual } from './project-visual';
import { Arrow } from './arrow';

export function FeaturedWork({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const project = featuredProjects[selected];
  const fr = locale === 'fr';

  return (
    <div className="featured-work">
      <div className="work-selector" aria-label={fr ? 'Choisir une réalisation' : 'Choose a project'}>
        {featuredProjects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            {item.name}
            <span className="selector-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="featured-panel" key={project.slug}>
        <div className="featured-art">
          <ProjectVisual kind={project.diagram!} locale={locale} large />
        </div>
        <div className="featured-story">
          <div className="featured-status">
            <span className="status-pin" />
            {statusNames[project.status][locale]}
            <span>0{selected + 1} / 0{featuredProjects.length}</span>
          </div>
          <span className="featured-category">{categoryNames[project.category][locale]}</span>
          <h3>{project.name}</h3>
          <p>{project.description[locale]}</p>
          <div className="featured-tech">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="featured-case-link" href={'/' + locale + '/work/' + project.slug + '/'}>
            {fr ? 'Dans les détails du projet' : 'Inside the project'}
            <span><Arrow /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
