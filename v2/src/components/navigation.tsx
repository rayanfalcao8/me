'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '@/content/site';
import { ui } from '@/content/site';
import { Arrow } from './arrow';

export function Navigation({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const words = ui[locale];
  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const localePath = /^\/(fr|en)(\/|$)/.test(pathname)
    ? pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${otherLocale}`)
    : `/${otherLocale}/`;
  const links = [
    { path: 'work', label: words.work },
    { path: 'experience', label: words.experience },
    { path: 'education', label: words.education },
    { path: 'about', label: words.about },
  ];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href={`/${locale}/`} onClick={() => setOpen(false)} aria-label="Rayan Tsolefack">
          <span className="brand-icon" aria-hidden="true">rt.</span>
          <span>Rayan Tsolefack<span className="wordmark-dot">.</span></span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? words.close : words.menu}<span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav id="primary-navigation" className={`primary-navigation ${open ? 'is-open' : ''}`} aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {links.map(({ path, label }) => (
            <Link key={path} href={`/${locale}/${path}/`} className="nav-link" onClick={() => setOpen(false)} aria-current={pathname.startsWith(`/${locale}/${path}`) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
          <Link className="language-link" href={localePath} hrefLang={otherLocale} lang={otherLocale} onClick={() => setOpen(false)} aria-label={otherLocale === 'en' ? 'Read this page in English' : 'Lire cette page en français'}>{otherLocale.toUpperCase()}</Link>
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>{words.contact}<Arrow /></a>
        </nav>
      </div>
    </header>
  );
}
