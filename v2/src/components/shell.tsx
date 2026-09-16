import type { ReactNode } from 'react';
import type { Locale } from '@/content/site';
import { profile, ui } from '@/content/site';
import { Navigation } from './navigation';
import { Contact } from './contact';
import { Arrow } from './arrow';
import { ScrollRevealInit } from './scroll-reveal';

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <ScrollRevealInit />
      <a className="skip-link" href="#main">{ui[locale].skip}</a>
      <Navigation locale={locale} />
      <main id="main">{children}</main>
      <Contact locale={locale} />
      <footer className="site-footer shell">
        <div><span className="footer-name">Rayan Tsolefack.</span><span className="footer-signature">{ui[locale].footerNote}</span></div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<Arrow /></a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub<Arrow /></a>
          <span className="footer-location">{profile.location[locale]}</span>
        </div>
      </footer>
    </>
  );
}

export function SectionTitle({ index, title, children }: { index: string; title: string; children?: ReactNode }) {
  return <div className="section-title"><div><span className="section-index">{index}</span><h2>{title}</h2></div>{children}</div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-intro shell"><p className="eyebrow"><span className="tiny-square" />{eyebrow}</p><h1>{title}</h1><p className="intro-description">{description}</p></div>;
}
