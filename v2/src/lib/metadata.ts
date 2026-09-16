import type { Metadata } from 'next';
import type { Locale } from '@/content/site';
import { profile } from '@/content/site';

const defaultOrigin = 'https://rayanfalcao8.is-a.dev';
const origin = (process.env.NEXT_PUBLIC_SITE_URL || defaultOrigin).replace(/\/$/, '');
if (origin && !/^https?:\/\//.test(origin)) throw new Error('NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL.');
export const siteUrl = origin;
export const isIndexable = process.env.PORTFOLIO_INDEXABLE === 'true';

export function pageMetadata(locale: Locale, title: string, description: string, path = ''): Metadata {
  const pathname = `/${locale}/${path ? `${path}/` : ''}`;
  return {
    title: `${title} — ${profile.name}`,
    description,
    applicationName: 'Rayan Tsolefack',
    robots: { index: isIndexable, follow: true },
    icons: { icon: '/favicon.svg' },
    metadataBase: new URL(origin),
    alternates: {
      canonical: pathname,
      languages: { fr: `/fr/${path ? `${path}/` : ''}`, en: `/en/${path ? `${path}/` : ''}` },
    },
    openGraph: {
      type: 'website', locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      title: `${title} — ${profile.name}`, description, siteName: profile.name,
      url: `${origin}${pathname}`,
      images: [{ url: '/images/og-portfolio.png', width: 1200, height: 630, alt: `${profile.name} — software developer portfolio` }],
    },
    twitter: { card: 'summary_large_image', title: `${title} — ${profile.name}`, description, images: ['/images/og-portfolio.png'] },
  };
}
