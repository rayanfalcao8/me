'use client';

import { useState } from 'react';
import type { Locale } from '@/content/site';
import { profile, ui } from '@/content/site';
import { Arrow } from './arrow';

export function Contact({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const words = ui[locale];
  async function copy() {
    try { await navigator.clipboard.writeText(profile.email); setStatus('copied'); }
    catch { setStatus('error'); }
  }
  return (
    <section id="contact" className="contact-section shell" aria-labelledby="contact-title">
      <div className="eyebrow"><span className="tiny-square" />CONTACT</div>
      <div className="contact-grid">
        <div><h2 id="contact-title">{words.footerTitle}</h2><p>{words.footerBody}</p></div>
        <div className="contact-actions">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a>
          <div className="resume-downloads" aria-label={locale === 'fr' ? 'Télécharger mon CV' : 'Download my resume'}>
            <a href="/cv/Rayan-Tsolefack-CV-FR.pdf" download>CV FR <Arrow direction="down" /></a>
            <a href="/cv/Rayan-Tsolefack-Resume-EN.pdf" download>Resume EN <Arrow direction="down" /></a>
          </div>
          <button type="button" className="copy-button" onClick={copy}>{status === 'copied' ? words.copied : words.copy}<span aria-hidden="true">{status === 'copied' ? '✓' : '⧉'}</span></button>
          <p className="copy-status" role="status">{status === 'error' ? words.copyError : status === 'copied' ? words.copied : ''}</p>
        </div>
      </div>
    </section>
  );
}
