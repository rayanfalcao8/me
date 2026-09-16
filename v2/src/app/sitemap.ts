import type { MetadataRoute } from 'next';
import { caseStudyProjects } from '@/content/projects';
import { locales } from '@/content/site';
import { siteUrl } from '@/lib/metadata';

export const dynamic = 'force-static';

const pages = ['', 'work', 'experience', 'education', 'about'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...pages, ...caseStudyProjects.map((project) => `work/${project.slug}`)];

  return locales.flatMap((locale) => routes.map((path) => ({
    url: `${siteUrl}/${locale}/${path ? `${path}/` : ''}`,
    lastModified: new Date(),
    changeFrequency: path ? 'monthly' : 'weekly',
    priority: path ? 0.7 : 1,
    alternates: {
      languages: Object.fromEntries(locales.map((language) => [language, `${siteUrl}/${language}/${path ? `${path}/` : ''}`])),
    },
  })));
}
