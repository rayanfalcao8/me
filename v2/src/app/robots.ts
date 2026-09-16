import type { MetadataRoute } from 'next';
import { isIndexable, siteUrl } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', ...(isIndexable ? {} : { disallow: '/' }) },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
