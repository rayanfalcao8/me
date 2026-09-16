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
  role: { fr: 'Développeur logiciel principal & responsable web', en: 'Principal software developer & web lead' },
  location: { fr: 'Québec, Canada', en: 'Québec City, Canada' },
} as const;

export const coreSkills = [
  'Symfony', 'Laravel', 'TypeScript', 'React', 'Angular', 'Java', 'ASP.NET Core', 'PostgreSQL', 'Pimcore',
] as const;

export const impactStats = [
  {
    value: '+50 000',
    label: { fr: 'Références SKU orchestrées', en: 'SKU references orchestrated' },
    detail: { fr: 'Pimcore PIM / Pneus Ratté & TireDirect', en: 'Pimcore PIM / Pneus Ratté & TireDirect' },
  },
  {
    value: '2',
    label: { fr: 'Plateformes e-commerce', en: 'E-commerce platforms' },
    detail: { fr: 'Exploitation nationale en continu', en: 'Nationwide continuous operation' },
  },
  {
    value: '7',
    label: { fr: 'Pays en flux financiers', en: 'Countries connected' },
    detail: { fr: 'Transferts & Mobile Money (Cosna Afrique)', en: 'Transfers & Mobile Money (Cosna Afrique)' },
  },
  {
    value: '4',
    label: { fr: 'Ingénieurs encadrés', en: 'Engineers mentored' },
    detail: { fr: 'Direction technique Lead dev (PILINK)', en: 'Tech lead engineering (PILINK)' },
  },
] as const;

export type Testimonial = {
  quote: Localized;
  author: string;
  role: Localized;
  context: Localized;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      fr: 'Je recommande vivement Rayan TSOLEFACK. Il travaille dur, possède de grandes qualités humaines et son expérience fait de lui un excellent collègue. Il sait clairement travailler en équipe et apprend de façon autonome.',
      en: 'I strongly recommend Rayan TSOLEFACK. He is hard working and has great soft skills. His experience make him a great colleague to work with. He clearly knows how to work in a team and is a good self-taught.',
    },
    author: 'Blaise FOTSO',
    role: { fr: 'Développeur full stack', en: 'Full-stack developer' },
    context: { fr: 'A reporté directement à Rayan · 19 septembre 2023', en: 'Reported directly to Rayan · September 19, 2023' },
  },
  {
    quote: {
      fr: 'Si Rayan TSOLEFACK fait partie de vos équipes, vous pouvez être certain que vos projets auront du succès ! Depuis que je la connais, il a été un moteur dans notre entreprise. il a toujours fait preuve d’initiative et a montré un sens du collectif sans faille. Nous serons attristé qu’il quitte aujourd’hui l’équipe mais heureux qu’il puisse relever de nouveaux défis et se dépasser grâce à de nouvelles responsabilités. Son expérience et ses qualités d’adaptation en feront un élément essentiel de votre groupe. Enfin, vous pouvez comptez sur la fraîcheur de ses idées pour donner un aspect unique à vos projets.',
      en: 'If Rayan TSOLEFACK is part of your team, you can be certain that your projects will succeed. He has been a driving force in our company, showing initiative and an unwavering team spirit.',
    },
    author: 'Sagnol Boutal Kamdem Djoko',
    role: { fr: 'SWE Apprentice · Société Générale', en: 'SWE Apprentice · Société Générale' },
    context: { fr: 'Même équipe · 15 février 2023', en: 'Worked on the same team · February 15, 2023' },
  },
  {
    quote: {
      fr: 'Il est difficile de décrire comment le travail de Rayan m’a impressionné quand j’ai eu la chance de travailler avec lui. C’est vraiment un super développeur avec le sens du travail bien fait, il applique du Software Craftsmanship. Même dans des périodes de crises avec de fortes pressions, Rayan sait garder le calme et c’est un des plus grands points qui m’a marqué chez lui. Nous avons travaillé ensemble dans un projet international du secteur financier et j’ai été particulièrement surpris par sa capacité à s’adapter au changement et à avoir une compréhension claire sur la partie DevOps. Rayan est un vrai atout dans un projet qui évolue rapidement, je le recommanderai sans hésiter.',
      en: 'It is difficult to describe how impressed I was by Rayan’s work when I had the chance to work with him. He is a great developer with a strong sense of quality and Software Craftsmanship. Even in high-pressure periods, Rayan remains calm. We worked together on an international financial-sector project, where his adaptability and clear understanding of DevOps stood out. Rayan is a real asset to a fast-evolving project; I would recommend him without hesitation.',
    },
    author: 'Yannick Nkendem',
    role: { fr: 'Technology Enthusiast · Value Creation', en: 'Technology Enthusiast · Value Creation' },
    context: { fr: 'Même équipe · 31 janvier 2023', en: 'Worked on the same team · January 31, 2023' },
  },
  {
    quote: {
      fr: 'Rayan est un bon développeur logiciel, autant côté BackEnd que FrontEnd, avec un sens approfondi de l’analyse. Très ordonné, communicatif et méticuleux dans son travail. Ayant travaillé avec lui sur plusieurs projets, je le recommande vivement.',
      en: 'Rayan is a good software developer in both back-end and front-end, with a deep sense of analysis. Very orderly, communicative and meticulous in his work. Having worked with him on several projects, I highly recommend him.',
    },
    author: 'Adrian LEKEUMO',
    role: { fr: 'IT Project Manager · Sustainability · Transformation numérique', en: 'IT Project Manager · Sustainability · Digital Transformation' },
    context: { fr: 'A encadré Rayan directement · 23 janvier 2023', en: 'Managed Rayan directly · January 23, 2023' },
  },
];

export type TechNote = {
  slug: string;
  title: Localized;
  tag: string;
  readTime: string;
  summary: Localized;
  takeaways: Localized<string[]>;
};

export const techNotes: TechNote[] = [
  {
    slug: 'pimcore-shopify-synchronization',
    title: {
      fr: 'Synchroniser 50 000 SKUs Pimcore vers Shopify sans bloquer la production',
      en: 'Synchronizing 50,000 Pimcore SKUs to Shopify without production disruption',
    },
    tag: 'Architecture / E-Commerce',
    readTime: '3 min',
    summary: {
      fr: 'Comment orchestrer des catalogues volumineux de pneus et jantes entre un PIM Pimcore et l’API Shopify en garantissant l’intégrité des prix, des variantes et la résilience aux quotas d’appels API.',
      en: 'How to orchestrate large tire and wheel catalogs between a Pimcore PIM and the Shopify API while guaranteeing price integrity, variant consistency and rate-limiting resilience.',
    },
    takeaways: {
      fr: [
        'Workers asynchrones Symfony découplés avec gestion de files d’attente et reprise sur erreur.',
        'Calcul d’empreinte (delta hashing) pour n’envoyer à Shopify que les attributs modifiés.',
        'Gestion fine des quotas GraphQL Shopify et reporting d’exécution en temps réel.',
      ],
      en: [
        'Decoupled asynchronous Symfony workers with queue management and error recovery.',
        'Delta hashing to only transmit modified attributes to the Shopify API.',
        'Fine-grained Shopify GraphQL quota handling and real-time execution reporting.',
      ],
    },
  },
  {
    slug: 'mobile-money-idempotency',
    title: {
      fr: 'Idempotence et conciliation sur les passerelles Mobile Money multi-pays',
      en: 'Idempotency and reconciliation in cross-border Mobile Money gateways',
    },
    tag: 'Fintech / Sécurité',
    readTime: '4 min',
    summary: {
      fr: 'Concevoir des machines à états transactionnels strictes pour éliminer les doubles débits et réconcilier les flux financiers en présence de timeouts télécoms imprévisibles.',
      en: 'Designing strict transactional state machines to eliminate double-charges and reconcile financial flows amid unpredictable telecom timeouts.',
    },
    takeaways: {
      fr: [
        'Clés d’idempotence cryptographiques et verrouillage transactionnel par compte.',
        'Webhook dispatcher à retry exponentiel avec signature HMAC pour chaque requête.',
        'Mécanisme de conciliation automatisée en fin de journée pour certifier les soldes.',
      ],
      en: [
        'Cryptographic idempotency keys and transactional locking per account.',
        'Exponential backoff webhook dispatcher with HMAC signatures on every request.',
        'Automated end-of-day reconciliation mechanism to certify account balances.',
      ],
    },
  },
];

export const ui = {
  fr: {
    work: 'Réalisations', experience: 'Parcours', education: 'Formation', about: 'À propos',
    contact: 'Parlons-en', skip: 'Aller au contenu', menu: 'Menu', close: 'Fermer',
    allWork: 'Toutes les réalisations', readCase: 'Explorer le projet',
    source: 'Voir le code', all: 'Tous', context: 'Contexte', role: 'Mon rôle',
    approach: 'Choix & approche', delivered: 'Travail réalisé', limits: 'État & perspectives',
    back: 'Retour aux réalisations', next: 'À découvrir aussi',
    diagram: 'Vue fonctionnelle & architecture', copy: 'Copier le courriel', copied: 'Courriel copié',
    copyError: 'Copie indisponible. Sélectionnez le courriel ci-dessus.',
    footerTitle: 'Parlons de la suite.',
    footerBody: 'Conception d’architectures résilientes, direction technique de projets d’envergure, plateformes e-commerce & SaaS.',
    footerNote: 'Concevoir. Construire. Faire évoluer.',
    certificationsTitle: 'Certifications officielles',
    certificationsSubtitle: 'Titres Pimcore obtenus en 2024 et références vérifiables.',
    impactTitle: 'IMPACT & VOLUMÉTRIE',
    testimonialsTitle: '04 / RECOMMANDATIONS & RÉSEAU',
    testimonialsSubtitle: 'La confiance de collaborateurs, équipes et partenaires.',
    viewLinkedIn: 'Voir mon profil et toutes les recommandations sur LinkedIn',
    techNotesTitle: '05 / NOTES D’ARCHITECTURE & RÉFLEXIONS',
    techNotesSubtitle: 'Pratiques de terrain, retours d’expérience et décisions d’ingénierie.',
  },
  en: {
    work: 'Work', experience: 'Experience', education: 'Education', about: 'About',
    contact: 'Let’s talk', skip: 'Skip to content', menu: 'Menu', close: 'Close',
    allWork: 'Explore all work', readCase: 'Explore project',
    source: 'View source', all: 'All', context: 'Context', role: 'My role',
    approach: 'Decisions & approach', delivered: 'The work', limits: 'Status & next steps',
    back: 'Back to work', next: 'Keep exploring',
    diagram: 'Functional & architecture view', copy: 'Copy email', copied: 'Email copied',
    copyError: 'Copy unavailable. Select the email address above.',
    footerTitle: 'Let’s build what’s next.',
    footerBody: 'Designing resilient architectures, leading technical initiatives, scaling e-commerce & SaaS platforms.',
    footerNote: 'Design. Build. Improve.',
    certificationsTitle: 'Official certifications',
    certificationsSubtitle: 'Pimcore credentials earned in 2024, with verifiable references.',
    impactTitle: 'IMPACT & SCALE',
    testimonialsTitle: '04 / ENDORSEMENTS & NETWORK',
    testimonialsSubtitle: 'Trust from peers, engineering teams and partners.',
    viewLinkedIn: 'View my full profile & endorsements on LinkedIn',
    techNotesTitle: '05 / ARCHITECTURE NOTES & THOUGHTS',
    techNotesSubtitle: 'Field practices, system design patterns and engineering decisions.',
  },
} as const;

type Experience = {
  company: string; period: Localized; location: Localized; role: Localized;
  description: Localized; tags: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Pneus Ratté & TireDirect', period: { fr: '2024 — aujourd’hui', en: '2024 — present' },
    location: { fr: 'Québec, Canada', en: 'Québec City, Canada' },
    role: { fr: 'Responsable web & développeur logiciel principal', en: 'Web lead & principal software developer' },
    description: {
      fr: 'Direction technique et développement de deux plateformes e-commerce distinctes (Pneus Ratté et TireDirect) opérées dans un même environnement multi-site sous Pimcore. Conception du modèle de données produit (PIM), intégrations Shopify, moteurs de recherche Algolia et Unbxd, orchestration des flux ERP/POS et parcours d’ateliers mécaniques.',
      en: 'Technical leadership and development of two distinct e-commerce platforms (Pneus Ratté and TireDirect) operated in a unified multi-site Pimcore environment. Product data modelling (PIM), Shopify integrations, Algolia and Unbxd search engines, ERP/POS synchronization and garage service workflows.',
    }, tags: ['Pimcore', 'Symfony', 'Shopify', 'Algolia', 'TypeScript', 'Multi-site'],
  },
  {
    company: 'MIREV Solutions', period: { fr: 'Depuis 2022', en: 'Since 2022' },
    location: { fr: 'Activité de consultation & produits', en: 'Consulting & product work' },
    role: { fr: 'Fondateur & consultant logiciel', en: 'Founder & software consultant' },
    description: {
      fr: 'Activité de consultation et de produits personnels menée en parallèle de mes fonctions principales. Elle relie les besoins clients, les choix d’architecture et la livraison.',
      en: 'Consulting and independent product work carried out alongside my primary roles. It connects client needs, architecture decisions and delivery.',
    }, tags: ['Produits / Products', 'API', 'SaaS', 'Architecture'],
  },
  {
    company: 'PILINK', period: { fr: '2023', en: '2023' },
    location: { fr: 'France · à distance', en: 'France · remote' },
    role: { fr: 'Lead développeur · mission', en: 'Lead developer · consulting engagement' },
    description: {
      fr: 'Direction technique et encadrement d’une équipe de quatre développeurs. Architecture logicielle, développement d’API modulaires (Node.js) et d’interfaces web (Angular, React, Flutter), gestion des revues de code et pilotage des livraisons clients.',
      en: 'Technical leadership and management of a four-developer team. Software architecture, modular API development (Node.js), web interfaces (Angular, React, Flutter), code reviews and client delivery.',
    }, tags: ['Node.js', 'Angular', 'React', 'Flutter', 'Lead tech'],
  },
  {
    company: 'ISDG', period: { fr: '2021 — 2023', en: '2021 — 2023' },
    location: { fr: 'Cameroun', en: 'Cameroon' },
    role: { fr: 'Développeur logiciel full stack (Fintech)', en: 'Full-stack software developer (Fintech)' },
    description: {
      fr: 'Applications web et mobiles, services backend et intégrations pour des produits financiers et métier (Cosna Afrique, Loov Solutions). Conception de modèles transactionnels sécurisés, intégration de passerelles de paiement, webhooks et flux Mobile Money multi-opérateurs.',
      en: 'Web and mobile applications, backend services and integrations for fintech and business products (Cosna Afrique, Loov Solutions). Secure transactional data modelling, payment gateways, webhooks and multi-carrier Mobile Money workflows.',
    }, tags: ['Laravel', 'Fintech', 'Mobile Money', 'API REST', 'SQL'],
  },
  {
    company: 'Thrust Techno Corporation', period: { fr: '2020 — 2021', en: '2020 — 2021' },
    location: { fr: 'Cameroun · 2TCorp', en: 'Cameroon · 2TCorp' },
    role: { fr: 'Développeur logiciel & lead d’équipe', en: 'Software developer & team lead' },
    description: {
      fr: 'Développement d’applications web et d’API pour des projets clients, puis coordination d’une petite équipe de 5 développeurs et stagiaires. Implémentation, débogage, essais et livraison de fonctionnalités.',
      en: 'Development of client web applications and APIs, then coordination of a team of 5 developers and interns. Implementation, debugging, testing and feature delivery.',
    }, tags: ['Java', 'Web', 'API', 'SQL', 'Coordination'],
  },
];

/**
 * Textes de la section « Approche » sur la page d'accueil.
 * Modifie ici pour les deux langues simultanément.
 */
export const perspective = [
  {
    title: { fr: 'Comprendre avant de construire.', en: 'Understand before building.' },
    body: {
      fr: 'Les utilisateurs, leurs contraintes, ce qui coince. Le besoin métier donne la direction aux choix techniques.',
      en: 'The users, their constraints, what gets in the way. Business needs give technical decisions their direction.',
    },
  },
  {
    title: { fr: 'Relier ce qui doit fonctionner ensemble.', en: 'Connect what needs to work together.' },
    body: {
      fr: 'Une interface, une API, des données et des services externes. Je m’intéresse autant aux passages entre les pièces qu’aux pièces elles-mêmes.',
      en: 'An interface, an API, data and external services. I care as much about the connections between the parts as the parts themselves.',
    },
  },
  {
    title: { fr: 'Penser à la suite.', en: 'Think about what comes next.' },
    body: {
      fr: 'Des règles explicites, des changements vérifiés et des décisions documentées. Pour que le produit puisse continuer à évoluer.',
      en: 'Explicit rules, verified changes and documented decisions. So the product can keep evolving.',
    },
  },
] as const;

export const certifications = [
  {
    title: 'Pimcore Consultant',
    issuer: 'Pimcore',
    period: { fr: 'Délivrée en mars 2024', en: 'Issued March 2024' },
    level: { fr: 'ID : S3DQMNP6ZVBGCUT', en: 'Credential ID: S3DQMNP6ZVBGCUT' },
    description: {
      fr: 'Titre Pimcore affiché sur le profil LinkedIn public.',
      en: 'Pimcore credential listed on the public LinkedIn profile.',
    },
    skills: ['Pimcore', 'Consulting'],
  },
  {
    title: 'Pimcore Enterprise Developer',
    issuer: 'Pimcore',
    period: { fr: 'Délivrée en mars 2024', en: 'Issued March 2024' },
    level: { fr: 'ID : 826SFW1QXUHP35J', en: 'Credential ID: 826SFW1QXUHP35J' },
    description: { fr: 'Titre Pimcore affiché sur le profil LinkedIn public.', en: 'Pimcore credential listed on the public LinkedIn profile.' },
    skills: ['Pimcore', 'Enterprise development'],
  },
  {
    title: 'Pimcore Developer Junior',
    issuer: 'Pimcore',
    period: { fr: 'Délivrée en février 2024', en: 'Issued February 2024' },
    level: { fr: 'ID : HY91842UQR65TL7', en: 'Credential ID: HY91842UQR65TL7' },
    description: { fr: 'Titre Pimcore affiché sur le profil LinkedIn public.', en: 'Pimcore credential listed on the public LinkedIn profile.' },
    skills: ['Pimcore', 'Development'],
  },
  {
    title: 'Pimcore Developer Senior',
    issuer: 'Pimcore',
    period: { fr: 'Délivrée en février 2024', en: 'Issued February 2024' },
    level: { fr: 'ID : 2SECV7DTGQY6FHM', en: 'Credential ID: 2SECV7DTGQY6FHM' },
    description: { fr: 'Titre Pimcore affiché sur le profil LinkedIn public.', en: 'Pimcore credential listed on the public LinkedIn profile.' },
    skills: ['Pimcore', 'Senior development'],
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
