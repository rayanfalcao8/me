export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T = string> = Record<Locale, T>;
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const pick = <T>(value: Localized<T>, locale: Locale): T => value[locale];

export const profile = {
  name: 'Rayan Tsolefack',
  email: 'rayanfalcao8@gmail.com',
  github: 'https://github.com/rayanfalcao8',
  linkedin: 'https://www.linkedin.com/in/rayan-tsolefack',
  role: { fr: 'Développeur logiciel full stack', en: 'Full-stack software developer' },
  location: { fr: 'Québec, Canada', en: 'Québec City, Canada' },
} as const;

export const ui = {
  fr: {
    work: 'Réalisations', experience: 'Parcours', education: 'Formation', about: 'À propos',
    contact: 'Parlons-en', skip: 'Aller au contenu', menu: 'Menu', close: 'Fermer',
    allWork: 'Toutes les réalisations', readCase: 'Explorer le projet',
    source: 'Voir le code', all: 'Tous', context: 'Contexte', role: 'Mon rôle',
    approach: 'Choix & approche', delivered: 'Travail réalisé', limits: 'État & perspectives',
    back: 'Retour aux réalisations', next: 'À découvrir aussi',
    diagram: 'Vue fonctionnelle simplifiée', copy: 'Copier le courriel', copied: 'Courriel copié',
    copyError: 'Copie indisponible. Sélectionnez le courriel ci-dessus.',
    footerTitle: 'Parlons de la suite.', footerBody: 'Un produit à construire, une plateforme à faire évoluer, une équipe à rejoindre.',
    footerNote: 'Concevoir. Construire. Faire évoluer.',
  },
  en: {
    work: 'Work', experience: 'Experience', education: 'Education', about: 'About',
    contact: 'Let’s talk', skip: 'Skip to content', menu: 'Menu', close: 'Close',
    allWork: 'Explore all work', readCase: 'Explore project',
    source: 'View source', all: 'All', context: 'Context', role: 'My role',
    approach: 'Decisions & approach', delivered: 'The work', limits: 'Status & next steps',
    back: 'Back to work', next: 'Keep exploring',
    diagram: 'Simplified functional view', copy: 'Copy email', copied: 'Email copied',
    copyError: 'Copy unavailable. Select the email address above.',
    footerTitle: 'Let’s build what’s next.', footerBody: 'A product to build, a platform to evolve, a team to join.',
    footerNote: 'Design. Build. Improve.',
  },
} as const;

type Experience = {
  company: string; period: Localized; location: Localized; role: Localized;
  description: Localized; tags: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Pneus Ratté', period: { fr: '2024 — aujourd’hui', en: '2024 — present' },
    location: { fr: 'Québec, Canada', en: 'Québec City, Canada' }, role: profile.role,
    description: {
      fr: 'Développement et évolution de plateformes e-commerce multisites : données produit, recherche, intégrations Shopify, contenus et parcours clients. Prise en charge de fonctionnalités applicatives et résolution d’incidents en collaboration avec l’équipe et les partenaires techniques.',
      en: 'Building and evolving multi-site commerce platforms: product data, search, Shopify integrations, content and customer journeys. Owning application features and investigating production issues alongside the team and technical partners.',
    }, tags: ['Symfony', 'Pimcore', 'Shopify', 'Algolia', 'TypeScript'],
  },
  {
    company: 'MIREV Solutions', period: { fr: 'Depuis 2022', en: 'Since 2022' },
    location: { fr: 'Activité de consultation & produits', en: 'Consulting & product work' },
    role: { fr: 'Fondateur & consultant logiciel', en: 'Founder & software consultant' },
    description: {
      fr: 'Accompagnement technique, conception d’applications et développement de produits personnels. Une activité qui relie les besoins des clients, les choix d’architecture et la livraison.',
      en: 'Technical consulting, application design and independent product development. Connecting client needs, architecture decisions and delivery.',
    }, tags: ['Produits / Products', 'API', 'SaaS'],
  },
  {
    company: 'PILINK', period: { fr: '2023', en: '2023' },
    location: { fr: 'France · à distance', en: 'France · remote' },
    role: { fr: 'Lead développeur · mission', en: 'Lead developer · consulting engagement' },
    description: {
      fr: 'Développement full stack et coordination technique d’une équipe de quatre développeurs. Travail sur les API, les interfaces et la livraison de projets clients.',
      en: 'Full-stack development and technical coordination of a four-developer team, spanning APIs, interfaces and client project delivery.',
    }, tags: ['Node.js', 'Angular', 'React', 'Flutter'],
  },
  {
    company: 'ISDG', period: { fr: '2021 — 2023', en: '2021 — 2023' },
    location: { fr: 'Cameroun', en: 'Cameroon' }, role: profile.role,
    description: {
      fr: 'Applications web et mobiles, services backend et intégrations pour des produits métier et financiers. Analyse des besoins, conception de modèles de données et travail en équipe sur les livraisons.',
      en: 'Web and mobile applications, backend services and integrations for business and financial products. Requirements analysis, data modelling and collaborative delivery.',
    }, tags: ['Laravel', 'API', 'SQL', 'Web & mobile'],
  },
  {
    company: 'Thrust Techno Corporation', period: { fr: '2020 — 2021', en: '2020 — 2021' },
    location: { fr: 'Cameroun · 2TCorp', en: 'Cameroon · 2TCorp' },
    role: { fr: 'Développeur logiciel', en: 'Software developer' },
    description: {
      fr: 'Débuts professionnels sur des applications web et des API pour des projets clients : implémentation, débogage, essais et livraison de fonctionnalités.',
      en: 'Early professional work on client web applications and APIs, including implementation, debugging, testing and feature delivery.',
    }, tags: ['Web', 'API', 'SQL'],
  },
];

export const education = [
  {
    school: 'Université Laval', city: { fr: 'Québec, Canada', en: 'Québec City, Canada' },
    period: { fr: 'En cours · temps partiel', en: 'In progress · part-time' },
    degree: { fr: 'Maîtrise en informatique', en: 'Master’s studies in Computer Science' },
    focus: { fr: 'Intelligence artificielle', en: 'Artificial intelligence' },
    description: {
      fr: 'Approfondir les fondements de l’IA et les relier à la pratique du développement. Mes apprentissages actuels incluent le traitement automatique du langage et la recherche d’information.',
      en: 'Deepening my understanding of AI foundations and connecting them to software practice. My current studies include natural language processing and information retrieval.',
    },
  },
  {
    school: 'Institut Africain d’Informatique', city: { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' },
    period: { fr: '2021 · diplôme obtenu', en: '2021 · completed' },
    degree: { fr: 'Ingénieur des travaux informatiques', en: 'Ingénieur des travaux informatiques' },
    focus: { fr: 'Génie logiciel', en: 'Software engineering · original degree title' },
    description: {
      fr: 'La formation qui a posé les bases de mon métier : analyse, conception et développement de logiciels.',
      en: 'The education that laid the foundations for my work in software analysis, design and development.',
    },
  },
  {
    school: 'Institut Africain d’Informatique', city: { fr: 'Cameroun', en: 'Cameroon' },
    period: { fr: '2020', en: '2020' },
    degree: { fr: 'Higher Technical Diploma', en: 'Higher Technical Diploma' },
    focus: { fr: 'Informatique', en: 'Computer science' },
    description: {
      fr: 'Une première étape dans mon parcours de formation en développement logiciel.',
      en: 'An earlier step in my software development education.',
    },
  },
];
