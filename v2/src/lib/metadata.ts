import type { Metadata } from 'next';
import type { Locale } from '@/content/site';
import { profile } from '@/content/site';

const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
if (origin && !/^https?:\/\//.test(origin)) throw new Error('NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL.');
export const isIndexable = process.env.PORTFOLIO_INDEXABLE === 'true' && Boolean(origin);

export function pageMetadata(locale: Locale, title: string, description: string, path = ''): Metadata {
  const pathname = `/${locale}/${path ? `${path}/` : ''}`;
  return {
    title: `${title} — ${profile.name}`,
    description,
    applicationName: 'Rayan Tsolefack',
    robots: { index: isIndexable, follow: isIndexable },
    icons: { icon: '/favicon.svg' },
    ...(origin ? {
      metadataBase: new URL(origin),
      alternates: {
        canonical: pathname,
        languages: { fr: `/fr/${path ? `${path}/` : ''}`, en: `/en/${path ? `${path}/` : ''}` },
      },
    } : {}),
    openGraph: {
      type: 'website', locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      title: `${title} — ${profile.name}`, description, siteName: profile.name,
      ...(origin ? { url: `${origin}${pathname}` } : {}),
    },
  };
}
