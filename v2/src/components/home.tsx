import Link from 'next/link';
import type { Locale } from '@/content/site';
import {
  coreSkills,
  education,
  perspective,
  certifications,
  impactStats,
  testimonials,
  techNotes,
  ui,
  profile,
} from '@/content/site';
import { Arrow } from './arrow';
import { FeaturedWork } from './featured-work';
import { TestimonialCarousel } from './testimonial-carousel';

export function Home({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  const words = ui[locale];
  const route = (path: string) => '/' + locale + '/' + path + '/';

  return <>
    {/* ── Hero / Identité ─────────────────────────────────── */}
    <section className="identity-section shell" aria-labelledby="identity-title">
      <div className="identity-meta">
        <span className="eyebrow">{fr ? 'DÉVELOPPEUR LOGICIEL PRINCIPAL · FULL STACK & RESPONSABLE WEB' : 'PRINCIPAL SOFTWARE DEVELOPER · FULL STACK & WEB LEAD'}</span>
        <span className="identity-location"><i aria-hidden="true" />{fr ? 'Québec, Canada' : 'Québec City, Canada'}</span>
      </div>

      <div className="identity-grid">
        <div className="identity-copy">
          <h1 id="identity-title" className="reveal reveal-1">
            Rayan<br /><em>Tsolefack.</em><span className="name-period" aria-hidden="true">↗</span>
          </h1>
          <div className="identity-description reveal reveal-2">
            <span className="identity-rule" aria-hidden="true" />
            <p>
              {fr ? 'L\u2019interface. Les services.' : 'The interface. The services.'}<br />
              <strong>{fr ? 'Et tout ce qui les relie.' : 'And everything in between.'}</strong>
            </p>
          </div>
          <p className="identity-bio reveal reveal-3">
            {fr
              ? 'Six ans à concevoir des architectures résilientes, diriger des projets web complexes et faire évoluer des plateformes e-commerce, SaaS et Fintech.'
              : 'Six years designing resilient architectures, leading complex web platforms and scaling high-traffic e-commerce, SaaS and Fintech systems.'}
          </p>
          <div className="identity-links reveal reveal-3">
            <a href="#selected-work" className="solid-link">
              {fr ? 'Découvrir mon travail' : 'Explore my work'}<Arrow direction="down" />
            </a>
            <Link href={route('about')} className="text-link">
              {fr ? 'Un peu plus sur moi' : 'A little more about me'}<Arrow />
            </Link>
          </div>
        </div>

        <div className="portrait-composition reveal reveal-2">
          <span className="portrait-corner portrait-corner-a" aria-hidden="true" />
          <span className="portrait-corner portrait-corner-b" aria-hidden="true" />
          <div className="portrait-top">
            <span>{fr ? 'LA CURIOSITÉ COMME FIL CONDUCTEUR.' : 'LED BY CURIOSITY.'}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="portrait-art">
            <span className="portrait-letter" aria-hidden="true">R</span>
            <img
              src="/images/rayan.png"
              alt={fr ? 'Rayan Tsolefack à son bureau' : 'Rayan Tsolefack at his desk'}
              width="612"
              height="408"
              fetchPriority="high"
            />
          </div>
          <div className="portrait-bottom">
            <span>CMR<span className="route-line" aria-hidden="true"><i /></span>CAN</span>
            <p>
              {fr ? 'Deux continents.' : 'Two continents.'}<br />
              <em>{fr ? 'La même envie de construire.' : 'The same drive to build.'}</em>
            </p>
          </div>
        </div>
      </div>

      <div className="identity-footnote">
        <p><span className="footnote-number">06</span>{fr ? 'années de métier' : 'years in software'}</p>
        <span className="identity-fields">{fr ? 'E-Commerce / Fintech / SaaS / APIs' : 'E-Commerce / Fintech / SaaS / APIs'}</span>
        <Link href={route('education')}>
          <span className="academic-dot" />
          {fr ? 'Titres Pimcore · Maîtrise en IA (Laval)' : 'Pimcore credentials · AI Master\u2019s (Laval)'}
          <span className="academic-status">2024</span>
          <Arrow />
        </Link>
      </div>
    </section>

    {/* ── En bref / Positionnement ────────────────────────── */}
    <section className="recruiter-summary shell reveal-on-scroll" aria-labelledby="recruiter-summary-title">
      <div>
        <span className="eyebrow">{fr ? 'EN BREF' : 'AT A GLANCE'}</span>
        <h2 id="recruiter-summary-title">{fr ? 'Ce que j’apporte à vos projets.' : 'What I bring to high-impact projects.'}</h2>
      </div>
      <div className="summary-details">
        <p>
          {fr
            ? 'Direction technique, conception d’architectures logicielles et ingénierie full stack sur des plateformes existantes ou de nouveaux produits à bâtir, de la règle métier à l’infrastructure.'
            : 'Technical leadership, software architecture and full-stack engineering across established platforms and greenfield products, from business rules to production infrastructure.'}
        </p>
        <div className="summary-skills" aria-label={fr ? 'Compétences principales' : 'Core technologies'}>
          {coreSkills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <div className="summary-links">
          <Link href={route('experience')} className="text-link">
            {fr ? 'Voir mon parcours' : 'View experience'}<Arrow />
          </Link>
          <a href={fr ? '/cv/Rayan-Tsolefack-CV-FR.pdf' : '/cv/Rayan-Tsolefack-Resume-EN.pdf'} className="text-link" download>
            {fr ? 'Télécharger le CV PDF' : 'Download resume PDF'}<Arrow direction="down" />
          </a>
        </div>
      </div>
    </section>

    {/* ── Impact & Volumétrie (KPIs) ───────────────────────── */}
    <section className="impact-section shell reveal-on-scroll" aria-label={words.impactTitle}>
      <div className="impact-heading">
        <span className="eyebrow">{words.impactTitle}</span>
        <h2>{fr ? 'Quelques repères de périmètre.' : 'A few indicators of scope.'}</h2>
      </div>
      <div className="impact-grid">
        {impactStats.map((stat) => (
          <div className="impact-item" key={stat.value}>
            <span className="impact-value">{stat.value}</span>
            <h3 className="impact-label">{stat.label[locale]}</h3>
            <p className="impact-detail">{stat.detail[locale]}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Réalisations sélectionnées ──────────────────────── */}
    <section className="work-section reveal-on-scroll" id="selected-work" aria-labelledby="selected-title">
      <div className="shell">
        <div className="work-heading">
          <div>
            <span className="eyebrow">01 / {fr ? 'LE TRAVAIL' : 'THE WORK'}</span>
            <h2 id="selected-title">
              {fr ? 'Derrière chaque écran,' : 'Behind every screen,'}<br />
              <em>{fr ? 'un vrai sujet.' : 'a real problem.'}</em>
            </h2>
          </div>
          <p>{fr
            ? 'Des plateformes e-commerce à fort trafic aux solutions de transfert financier et SaaS. Le contexte, les choix et le travail réalisé.'
            : 'From high-traffic commerce platforms to cross-border financial transfer and SaaS products. The context, the decisions and the delivery.'}</p>
        </div>
        <FeaturedWork locale={locale} />
        <Link href={route('work')} className="work-directory-link">
          <span>{fr ? 'Explorer toutes les réalisations' : 'Explore the complete project directory'}</span>
          <span>{fr ? 'Commerce, paiements, mobilité et produits métier' : 'Commerce, payments, mobility and business software'}</span>
          <Arrow />
        </Link>
      </div>
    </section>

    {/* ── Archive / Projets de parcours ──────────────────── */}
    <section className="archive-section shell reveal-on-scroll">
      <div className="archive-heading">
        <span className="eyebrow">{fr ? 'AUSSI DANS MON PARCOURS' : 'ALSO ALONG THE WAY'}</span>
        <p>{fr ? 'D\u2019autres terrains. D\u2019autres contraintes.' : 'Different domains. Different constraints.'}</p>
      </div>
      <div className="archive-gallery">
        {[
          { name: 'Cosna Afrique', image: 'cosna.png', kind: fr ? 'Fintech & transferts' : 'Fintech & transfers' },
          { name: 'Smile Car Pro', image: 'smile.png', kind: fr ? 'Mobilité & applications' : 'Mobility & applications' },
        ].map((item) => (
          <Link key={item.name} href={route('work')} className="archive-piece">
            <div className={'archive-image archive-' + item.image.split('.')[0]}>
              <img
                src={'/images/projects/' + item.image}
                alt={fr ? 'Capture de la version de ' + item.name : 'Screenshot of ' + item.name}
                width="1200"
                height="650"
                loading="lazy"
              />
            </div>
            <div>
              <h3>{item.name}</h3>
              <span>{item.kind}</span>
              <Arrow />
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* ── Approche ────────────────────────────────────────── */}
    <section className="perspective-section shell reveal-on-scroll">
      <div className="perspective-title">
        <span className="eyebrow">02 / {fr ? 'LA FAÇON DE FAIRE' : 'THE APPROACH'}</span>
        <h2>
          {fr ? 'Le détail compte.' : 'The details matter.'}<br />
          <em>{fr ? 'L\u2019ensemble aussi.' : 'So does the whole.'}</em>
        </h2>
      </div>
      <div className="perspective-list">
        {perspective.map((item, index) => (
          <article key={item.title.fr}>
            <span>0{index + 1}</span>
            <div>
              <h3>{item.title[locale]}</h3>
              <p>{item.body[locale]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* ── Parcours & Formation ────────────────────────────── */}
    <section className="chapter-section shell reveal-on-scroll">
      <div className="chapter-intro">
        <span className="eyebrow">03 / {fr ? 'LE PARCOURS' : 'THE JOURNEY'}</span>
        <h2>
          {fr ? 'Toujours' : 'Always'}<br />
          <em>{fr ? 'en mouvement.' : 'moving forward.'}</em>
        </h2>
        <p>
          {fr
            ? 'Du Cameroun au Québec. Du lead technique d’équipe chez PILINK à la responsabilité web chez Pneus Ratté & TireDirect. Et aujourd\u2019hui, la maîtrise en IA en parallèle.'
            : 'From Cameroon to Québec. From leading teams at PILINK to web leadership at Pneus Ratté & TireDirect. And today, continuing with an AI master\u2019s.'}
        </p>
        <Link href={route('experience')} className="text-link">
          {fr ? 'Voir le parcours complet' : 'Explore my experience'}<Arrow />
        </Link>
      </div>
      <div className="chapter-education">
        <span className="eyebrow">{fr ? 'LA FORMATION CONTINUE LE CHEMIN' : 'EDUCATION CONTINUES THE JOURNEY'}</span>
        {education.slice(0, 2).map((item, index) => (
          <Link href={route('education')} className="chapter-degree" key={item.school}>
            <span className="chapter-year">{index === 0 ? (fr ? 'En cours' : 'In progress') : '2021'}</span>
            <div>
              <h3>{item.school}</h3>
              <p>{item.degree[locale]}</p>
              <span>{item.focus[locale]}</span>
            </div>
            <Arrow />
          </Link>
        ))}
        <Link href={route('education')} className="text-link">
          {fr ? 'Certifications & formation complète' : 'Certifications & full education'}<Arrow />
        </Link>
      </div>
    </section>

    {/* ── Recommandations & Réseau ───────────────────────── */}
    <section className="testimonials-section shell reveal-on-scroll" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <span className="eyebrow">{words.testimonialsTitle}</span>
        <h2 id="testimonials-title">{words.testimonialsSubtitle}</h2>
      </div>
      <TestimonialCarousel locale={locale} items={testimonials} />
      <div className="testimonials-footer">
        <a className="solid-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          {words.viewLinkedIn}<Arrow />
        </a>
      </div>
    </section>

    {/* ── Notes d'Architecture & Réflexions ──────────────── */}
    <section className="technotes-section shell reveal-on-scroll" aria-labelledby="technotes-title">
      <div className="section-heading">
        <span className="eyebrow">{words.techNotesTitle}</span>
        <h2 id="technotes-title">{words.techNotesSubtitle}</h2>
      </div>
      <div className="technotes-grid">
        {techNotes.map((note) => (
          <article className="technote-card" key={note.slug}>
            <div className="technote-top">
              <span className="technote-tag">{note.tag}</span>
              <span className="technote-time">{note.readTime}</span>
            </div>
            <h3>{note.title[locale]}</h3>
            <p className="technote-summary">{note.summary[locale]}</p>
            <ul className="technote-takeaways">
              {note.takeaways[locale].map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </>;
}
