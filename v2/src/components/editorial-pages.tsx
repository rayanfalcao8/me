import Link from 'next/link';
import type { Locale } from '@/content/site';
import { experiences, education, certifications, profile, ui } from '@/content/site';
import { PageIntro } from './shell';
import { Arrow } from './arrow';

/* ─────────────────────────────────────────────────────────
   Page Parcours — /[lang]/experience/
───────────────────────────────────────────────────────── */
export function ExperiencePage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';

  return <>
    <PageIntro
      eyebrow={fr ? 'PARCOURS / 2020 — AUJOURD\u2019HUI' : 'EXPERIENCE / 2020 — TODAY'}
      title={fr ? 'Six ans, plusieurs terrains.' : 'Six years. Different challenges.'}
      description={
        fr
          ? 'Responsabilité web sur des plateformes e-commerce à fort trafic, direction technique d’équipes, conception de passerelles Fintech et développement de produits SaaS.'
          : 'Web leadership on high-traffic commerce platforms, technical team leadership, fintech gateway engineering and SaaS product development.'
      }
    />

    <section className="shell timeline" aria-label={fr ? 'Expérience professionnelle' : 'Professional experience'}>
      {experiences.map((item) => (
        <article className="timeline-row reveal-on-scroll" key={item.company}>
          <div className="timeline-period">
            <span>{item.period[locale]}</span>
            <small>{item.location[locale]}</small>
          </div>
          <div className="timeline-content">
            <h2>{item.company}</h2>
            <h3>{item.role[locale]}</h3>
            <p>{item.description[locale]}</p>
            <div className="tag-list">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </article>
      ))}
    </section>

    <div className="shell cross-link reveal-on-scroll">
      <span>{fr ? 'En parallèle du métier, la formation continue.' : 'Alongside professional work, learning continues.'}</span>
      <Link className="text-link" href={`/${locale}/education/`}>
        {fr ? 'Certifications & formation' : 'Certifications & education'}<Arrow />
      </Link>
    </div>
  </>;
}

/* ─────────────────────────────────────────────────────────
   Page Formation — /[lang]/education/
───────────────────────────────────────────────────────── */
export function EducationPage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';

  return <>
    <PageIntro
      eyebrow={fr ? 'FORMATION & CERTIFICATIONS' : 'EDUCATION & CERTIFICATIONS'}
      title={fr ? 'Comprendre plus loin.' : 'A deeper understanding.'}
      description={
        fr
          ? 'Certifications officielles éditeurs, fondements en génie logiciel et maîtrise en intelligence artificielle à l\u2019Université Laval.'
          : 'Official vendor certifications, software engineering foundations and an artificial intelligence master\u2019s at Université Laval.'
      }
    />

    {/* Section Certifications officielles */}
    <section className="shell certifications-section reveal-on-scroll" aria-label={ui[locale].certificationsTitle}>
      <div className="certifications-header">
        <span className="eyebrow">{ui[locale].certificationsTitle}</span>
        <h2>{ui[locale].certificationsSubtitle}</h2>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <article className="certification-card" key={cert.title}>
            <div className="cert-top">
              <span className="cert-badge">{cert.period[locale]}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-level">{cert.level[locale]}</p>
            <p className="cert-description">{cert.description[locale]}</p>
            <div className="cert-skills">
              {cert.skills.map((s) => <span key={s}>{s}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="shell education-list" aria-label={fr ? 'Parcours académique' : 'Academic background'}>
      {education.map((item, index) => (
        <article
          className={`degree-row reveal-on-scroll ${index === 0 ? 'degree-current' : ''}`}
          key={`${item.school}-${index}`}
        >
          <span className="degree-index">0{index + 1}</span>
          <div>
            <span className="eyebrow">{item.period[locale]}</span>
            <h2>{item.school}</h2>
            <h3>{item.degree[locale]}</h3>
            <p className="degree-focus">{item.focus[locale]}</p>
            <p>{item.description[locale]}</p>
            <span className="degree-city">{item.city[locale]}</span>
          </div>
        </article>
      ))}
    </section>

    <div className="shell learning-note reveal-on-scroll">
      <span className="eyebrow">{fr ? 'DE LA THÉORIE À LA PRATIQUE' : 'FROM THEORY TO PRACTICE'}</span>
      <h2>{fr ? 'Apprendre les fondements. Comprendre les limites.' : 'Learn the foundations. Understand the limits.'}</h2>
      <p>
        {fr
          ? 'La maîtrise approfondit ma compréhension des méthodes d\u2019apprentissage, du traitement automatique de la langue (NLP) et des systèmes de recherche d\u2019information. Mon objectif : relier ces principes aux défis réels d’architecture et de données des entreprises.'
          : 'My master\u2019s studies deepen my understanding of machine learning methods, natural language processing (NLP) and information retrieval systems. My goal is to connect these principles with enterprise software architecture and data challenges.'}
      </p>
      <Link className="text-link" href={`/${locale}/about/`}>
        {fr ? 'Ma façon de travailler' : 'How I work'}<Arrow />
      </Link>
    </div>
  </>;
}

/* ─────────────────────────────────────────────────────────
   Page À propos — /[lang]/about/
───────────────────────────────────────────────────────── */
export function AboutPage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';

  return <>
    <PageIntro
      eyebrow={fr ? 'À PROPOS / RAYAN TSOLEFACK' : 'ABOUT / RAYAN TSOLEFACK'}
      title={fr ? 'Le logiciel, côté terrain.' : 'Software, grounded in reality.'}
      description={
        fr
          ? 'Développeur logiciel principal & responsable web, fondateur de MIREV Solutions et étudiant à la maîtrise en intelligence artificielle à Québec.'
          : 'Principal software developer & web lead, founder of MIREV Solutions and AI master\u2019s student in Québec City.'
      }
    />

    <section className="shell about-grid">
      {/* Colonne gauche — identité */}
      <div className="about-caption reveal-on-scroll">
        <span className="about-monogram" aria-hidden="true">rt.</span>
        <span className="eyebrow">CAMEROUN → QUÉBEC</span>
        <p>{fr ? 'Français & anglais' : 'French & English'}</p>
        <div className="about-links">
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn<Arrow />
          </a>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub<Arrow />
          </a>
        </div>
      </div>

      {/* Colonne droite — texte */}
      <div className="prose reveal-on-scroll">
        <h2>{fr ? 'Mon point de départ : à quoi cela sert ?' : 'My starting point: what is it for?'}</h2>
        <p>
          {fr
            ? 'J\u2019aime le moment où un besoin encore flou commence à devenir un système compréhensible : des utilisateurs, des règles, des flux de données et des interactions fiables. C\u2019est cette continuité entre le métier et la technique qui m\u2019intéresse.'
            : 'I enjoy the point where an unclear need starts becoming an understandable system: users, rules, data flows and reliable interactions. That continuum between business objectives and technical implementation is what drives me.'}
        </p>
        <p>
          {fr
            ? 'Mon parcours m\u2019a amené à diriger le volet web de plateformes e-commerce multisites d’envergure, à encadrer des équipes de développeurs et à concevoir des applications financières (Fintech) et mobiles à fort enjeu transactionnel.'
            : 'My journey has taken me to lead the web engineering of high-traffic multi-site commerce platforms, manage teams of developers, and design financial (Fintech) and mobile applications handling critical transactional flows.'}
        </p>

        <h2>{fr ? 'Une pratique qui continue d\u2019évoluer.' : 'A practice that keeps evolving.'}</h2>
        <p>
          {fr
            ? 'Symfony, Pimcore, Laravel, TypeScript, React, Angular, Java, Node.js et ASP.NET Core font partie de ma boîte à outils. Leur intérêt ne réside pas dans la mode, mais dans le problème spécifique qu\u2019ils permettent de résoudre avec robustesse et maintenabilité.'
            : 'Symfony, Pimcore, Laravel, TypeScript, React, Angular, Java, Node.js and ASP.NET Core are tools I rely on. Their value lies in the specific problem they solve cleanly, with maintainability and resilience.'}
        </p>
        <p>
          {fr
            ? 'Je m\u2019attache à comprendre l\u2019existant, à expliciter les règles métier et à vérifier les changements avec rigueur. Mes études à l\u2019Université Laval prolongent cette curiosité en approfondissant les fondements théoriques de l’intelligence artificielle.'
            : 'I focus on understanding existing architectures, clarifying business rules and systematically verifying changes. My studies at Université Laval extend that curiosity through deeper theoretical foundations in artificial intelligence.'}
        </p>

        <h2>{fr ? 'Faire, puis apprendre de ce qui résiste.' : 'Build, then learn from what resists.'}</h2>
        <p>
          {fr
            ? 'Avec MIREV et mes projets personnels (Reservix, CotiTrace, MirevAccess), je continue d\u2019explorer la réservation multi-tenant, la traçabilité comptable déterministe et les architectures d’accès réseau. Ces projets me donnent un laboratoire pour perfectionner les designs de systèmes de bout en bout.'
            : 'Through MIREV and independent projects (Reservix, CotiTrace, MirevAccess), I explore multi-tenant booking, deterministic financial ledgers and network access architectures. These projects serve as a playground to hone end-to-end system design.'}
        </p>
      </div>
    </section>
  </>;
}
