import Link from 'next/link';
import type { Locale } from '@/content/site';
import { experiences, education, profile } from '@/content/site';
import { PageIntro } from './shell';
import { Arrow } from './arrow';

export function ExperiencePage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  return <>
    <PageIntro eyebrow={fr ? 'PARCOURS / 2020 — AUJOURD’HUI' : 'EXPERIENCE / 2020 — TODAY'} title={fr ? 'Six ans, plusieurs terrains.' : 'Six years. Different challenges.'} description={fr ? 'Applications, produits, équipes et missions. Un fil conducteur : comprendre le besoin, construire et accompagner la suite.' : 'Applications, products, teams and consulting engagements. A common thread: understand the need, build and follow through.'} />
    <section className="shell timeline" aria-label={fr ? 'Expérience professionnelle' : 'Professional experience'}>
      {experiences.map((item) => <article className="timeline-row" key={item.company}>
        <div className="timeline-period"><span>{item.period[locale]}</span><small>{item.location[locale]}</small></div>
        <div className="timeline-content"><h2>{item.company}</h2><h3>{item.role[locale]}</h3><p>{item.description[locale]}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      </article>)}
    </section>
    <div className="shell cross-link"><span>{fr ? 'En parallèle du métier, la formation continue.' : 'Alongside professional work, learning continues.'}</span><Link className="text-link" href={`/${locale}/education/`}>{fr ? 'Ma formation' : 'My education'}<Arrow /></Link></div>
  </>;
}

export function EducationPage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  return <>
    <PageIntro eyebrow={fr ? 'FORMATION / APPRENTISSAGE CONTINU' : 'EDUCATION / CONTINUOUS LEARNING'} title={fr ? 'Comprendre plus loin.' : 'A deeper understanding.'} description={fr ? 'Les fondements appris à l’IAI, la pratique professionnelle et une maîtrise en intelligence artificielle à l’Université Laval. Trois dimensions d’un même parcours.' : 'Foundations at IAI, professional practice and master’s studies in artificial intelligence at Université Laval. Three dimensions of the same journey.'} />
    <section className="shell education-list" aria-label={fr ? 'Parcours académique' : 'Academic background'}>
      {education.map((item, index) => <article className={`degree-row ${index === 0 ? 'degree-current' : ''}`} key={`${item.school}-${index}`}>
        <span className="degree-index">0{index + 1}</span>
        <div><span className="eyebrow">{item.period[locale]}</span><h2>{item.school}</h2><h3>{item.degree[locale]}</h3><p className="degree-focus">{item.focus[locale]}</p><p>{item.description[locale]}</p><span className="degree-city">{item.city[locale]}</span></div>
      </article>)}
    </section>
    <div className="shell learning-note"><span className="eyebrow">{fr ? 'DE LA THÉORIE À LA PRATIQUE' : 'FROM THEORY TO PRACTICE'}</span><h2>{fr ? 'Apprendre les fondements. Comprendre les limites.' : 'Learn the foundations. Understand the limits.'}</h2><p>{fr ? 'La maîtrise approfondit ma compréhension des méthodes d’apprentissage, du traitement du langage et de la recherche d’information. Mon objectif : comprendre leurs hypothèses, leurs limites et les problèmes auxquels elles peuvent répondre.' : 'My master’s studies deepen my understanding of learning methods, language processing and information retrieval. My goal is to understand their assumptions, their limits and the problems they can address.'}</p><Link className="text-link" href={`/${locale}/about/`}>{fr ? 'Ma façon de travailler' : 'How I work'}<Arrow /></Link></div>
  </>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  return <>
    <PageIntro eyebrow={fr ? 'À PROPOS / RAYAN TSOLEFACK' : 'ABOUT / RAYAN TSOLEFACK'} title={fr ? 'Le logiciel, côté terrain.' : 'Software, grounded in reality.'} description={fr ? 'Développeur full stack, fondateur de MIREV Solutions et étudiant à la maîtrise en intelligence artificielle. Basé à Québec, originaire du Cameroun.' : 'Full-stack developer, founder of MIREV Solutions and a master’s student in artificial intelligence. Based in Québec City, originally from Cameroon.'} />
    <section className="shell about-grid">
      <div className="about-caption"><span className="about-monogram" aria-hidden="true">rt.</span><span className="eyebrow">CAMEROUN → QUÉBEC</span><p>{fr ? 'Français & anglais' : 'French & English'}</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<Arrow /></a></div>
      <div className="prose"><h2>{fr ? 'Mon point de départ : à quoi cela sert ?' : 'My starting point: what is it for?'}</h2><p>{fr ? 'J’aime le moment où un besoin encore flou commence à devenir un système compréhensible : des utilisateurs, des règles, des données et des interactions. C’est cette continuité entre le métier et la technique qui m’intéresse.' : 'I enjoy the point where an unclear need starts becoming an understandable system: users, rules, data and interactions. That connection between business and technology is what interests me.'}</p><p>{fr ? 'Mon parcours m’a amené à travailler sur des applications web et mobiles, des produits financiers et des plateformes e-commerce. Il m’a aussi donné des responsabilités de coordination et de consultation, en complément du développement.' : 'My work has taken me through web and mobile applications, financial products and commerce platforms. Alongside development, I have taken on coordination and consulting responsibilities.'}</p><h2>{fr ? 'Une pratique qui continue d’évoluer.' : 'A practice that keeps evolving.'}</h2><p>{fr ? 'Symfony, Laravel, TypeScript, React, Node.js et ASP.NET Core font partie des outils avec lesquels je travaille ou construis mes projets. Leur intérêt tient au problème qu’ils aident à résoudre et à la capacité de l’équipe à faire vivre le produit.' : 'Symfony, Laravel, TypeScript, React, Node.js and ASP.NET Core are among the tools I use in my work and independent projects. Their value lies in the problems they help solve and the team’s ability to maintain the product.'}</p><p>{fr ? 'Je m’attache à comprendre l’existant, à expliciter les règles métier et à vérifier les changements. Mes études à l’Université Laval prolongent cette curiosité en approfondissant les fondements théoriques.' : 'I focus on understanding existing systems, making business rules explicit and verifying changes. My studies at Université Laval extend that curiosity through deeper theoretical foundations.'}</p><h2>{fr ? 'Faire, puis apprendre de ce qui résiste.' : 'Build, then learn from what resists.'}</h2><p>{fr ? 'Avec MIREV et mes projets personnels, je continue d’explorer la réservation, l’accès réseau et les flux transactionnels. Ces projets me donnent un terrain pour travailler le produit dans son ensemble, avec ses choix, ses limites et ses prochaines étapes.' : 'Through MIREV and independent projects, I continue exploring booking systems, network access and transactional workflows. These projects let me work on the product as a whole, including its decisions, limitations and next steps.'}</p></div>
    </section>
  </>;
}
