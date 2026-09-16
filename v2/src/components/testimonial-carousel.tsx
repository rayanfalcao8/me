'use client';

import { useState } from 'react';
import type { Locale, Testimonial } from '@/content/site';

export function TestimonialCarousel({ locale, items }: { locale: Locale; items: readonly Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  const fr = locale === 'fr';
  const previous = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  return (
    <div className="testimonial-carousel" aria-roledescription="carousel" aria-label={fr ? 'Recommandations LinkedIn' : 'LinkedIn recommendations'}>
      <article className="testimonial-card testimonial-slide" key={item.author} aria-live="polite">
        <span className="testimonial-quote-mark" aria-hidden="true">“</span>
        <blockquote className="testimonial-text">{item.quote[locale]}</blockquote>
        <div className="testimonial-author-row">
          <div>
            <strong className="testimonial-author">{item.author}</strong>
            <span className="testimonial-role">{item.role[locale]}</span>
            <span className="testimonial-context">{item.context[locale]}</span>
          </div>
          <span className="testimonial-source">LinkedIn</span>
        </div>
      </article>
      <div className="testimonial-controls">
        <button type="button" className="testimonial-control" onClick={previous} aria-label={fr ? 'Voir la recommandation précédente' : 'View previous recommendation'}>←</button>
        <span className="testimonial-count" aria-label={fr ? `Recommandation ${index + 1} sur ${items.length}` : `Recommendation ${index + 1} of ${items.length}`}>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
        <button type="button" className="testimonial-control" onClick={next} aria-label={fr ? 'Voir la recommandation suivante' : 'View next recommendation'}>→</button>
        <div className="testimonial-dots" role="group" aria-label={fr ? 'Choisir une recommandation' : 'Choose a recommendation'}>
          {items.map((entry, itemIndex) => <button key={entry.author} type="button" className={itemIndex === index ? 'is-active' : ''} onClick={() => setIndex(itemIndex)} aria-label={entry.author} aria-pressed={itemIndex === index} />)}
        </div>
      </div>
    </div>
  );
}
