import type { Localized } from './site';

export type Category = 'commerce' | 'saas' | 'fintech' | 'applications';
export type ProjectStatus = 'professional' | 'development' | 'prototype' | 'past';
export type DiagramKind = 'commerce' | 'booking' | 'ledger' | 'access';
export type CaseStudy = {
  context: Localized;
  role: Localized;
  decisions: Localized<string[]>;
  delivered: Localized<string[]>;
  limits: Localized;
};
export type Project = {
  slug: string; name: string; category: Category; status: ProjectStatus;
  subtitle: Localized; description: Localized; period: Localized;
  tags: string[]; diagram?: DiagramKind; source?: string; caseStudy?: CaseStudy;
};

export const categoryNames: Record<Category, Localized> = {
  commerce: { fr: 'Commerce', en: 'Commerce' }, saas: { fr: 'SaaS', en: 'SaaS' },
  fintech: { fr: 'Fintech', en: 'Fintech' }, applications: { fr: 'Applications', en: 'Applications' },
};
export const statusNames: Record<ProjectStatus, Localized> = {
  professional: { fr: 'Expérience professionnelle', en: 'Professional work' },
  development: { fr: 'En développement', en: 'In development' },
  prototype: { fr: 'Prototype', en: 'Prototype' },
  past: { fr: 'Contribution antérieure', en: 'Past contribution' },
};

export const projects: Project[] = [
  {
    slug: 'pneus-ratte-tiredirect', name: 'Pneus Ratté / TireDirect', category: 'commerce', status: 'professional',
    period: { fr: '2024 — aujourd’hui', en: '2024 — present' },
    subtitle: { fr: 'Relier le catalogue à l’expérience client.', en: 'Connecting the catalog to the customer experience.' },
    description: {
      fr: 'Données produit, recherche et parcours e-commerce dans un environnement multisite et bilingue.',
      en: 'Product data, search and commerce journeys across a bilingual, multi-site platform.',
    }, tags: ['Symfony', 'Pimcore', 'Shopify', 'Algolia'], diagram: 'commerce',
    caseStudy: {
      context: {
        fr: 'Les parcours de Pneus Ratté et TireDirect reposent sur un ensemble de données produit, de contenus et de services externes. L’enjeu applicatif est de relier ces éléments pour permettre la recherche, la consultation du catalogue et les interactions des clients, en français et en anglais.',
        en: 'Pneus Ratté and TireDirect customer journeys rely on product data, content and external services. The application challenge is to connect these pieces to support search, catalog browsing and customer interactions in French and English.',
      },
      role: {
        fr: 'Développeur full stack au sein de l’équipe, avec des contributions aux services Symfony, aux fonctionnalités Pimcore, aux interfaces et aux intégrations. Je collabore avec les autres développeurs et les partenaires techniques sur la plateforme existante.',
        en: 'A full-stack developer within the team, contributing to Symfony services, Pimcore features, interfaces and integrations. I work with fellow developers and technical partners on the existing platform.',
      },
      decisions: {
        fr: ['Faire circuler les attributs, variantes et URL entre les données produit et les services de recherche ou de commerce.', 'Structurer des traitements récurrents en commandes et tâches suivies, avec progression et journalisation.', 'Tenir compte du site et de la langue dans les contenus, routes et parcours clients.'],
        en: ['Carry attributes, variants and URLs from product data to search and commerce services.', 'Organize recurring processing into commands and tracked jobs with progress reporting and logs.', 'Account for the site and language in content, routes and customer journeys.'],
      },
      delivered: {
        fr: ['Contributions aux flux Shopify, Algolia et Unbxd ainsi qu’aux traitements de synchronisation.', 'Développement de parcours de contenu, blog, FAQ, recherche et prise de rendez-vous.', 'Évolution des imports et opérations de données, avec des commandes Symfony et ProcessManager.', 'Diagnostic et corrections de comportements applicatifs dans les interfaces, routes, gabarits et intégrations.'],
        en: ['Contributions to Shopify, Algolia and Unbxd flows and synchronization jobs.', 'Development of content, blog, FAQ, search and appointment journeys.', 'Work on imports and data operations through Symfony commands and ProcessManager.', 'Investigation and fixes across interfaces, routes, templates and integrations.'],
      },
      limits: {
        fr: 'Cette vue présente mes contributions applicatives à un travail collectif. Le schéma est volontairement simplifié et ne décrit pas l’infrastructure interne. Les responsabilités d’architecture et d’exploitation sont partagées au sein de l’équipe.',
        en: 'This overview describes my application contributions to a team effort. The diagram is intentionally simplified and does not describe internal infrastructure. Architecture and operational responsibilities are shared across the team.',
      },
    },
  },
  {
    slug: 'reservix', name: 'Reservix', category: 'saas', status: 'development',
    period: { fr: 'Projet en développement', en: 'In development' },
    subtitle: { fr: 'Une réservation. Plusieurs réalités métier.', en: 'One booking flow. Different business needs.' },
    description: {
      fr: 'Un SaaS de réservation avec disponibilités, équipes et espaces séparés pour chaque entreprise.',
      en: 'A booking SaaS with availability, staff scheduling and separate workspaces for each business.',
    }, tags: ['Laravel', 'Filament', 'API', 'Multi-tenant'], diagram: 'booking',
    source: 'https://github.com/rayanfalcao8/booking-saas',
    caseStudy: {
      context: {
        fr: 'Proposer un parcours de réservation commun à plusieurs entreprises tout en respectant leurs services, collaborateurs et horaires. Le produit doit articuler une expérience publique simple et des outils de gestion propres à chaque entreprise.',
        en: 'Provide a shared booking experience for multiple businesses while respecting each one’s services, staff and schedules. The product connects a simple public journey with business-specific management tools.',
      },
      role: {
        fr: 'Conception et développement du produit personnel, du modèle multi-tenant aux parcours de réservation et d’administration. Vérification des règles métier et de l’isolation des données entre entreprises.',
        en: 'Design and development of an independent product, from the multi-tenant model to booking and administration. Verification of business rules and data isolation between businesses.',
      },
      decisions: {
        fr: ['Rattacher les données à une entreprise via business_id et vérifier cette frontière dans les parcours métier.', 'Séparer le panel de l’entreprise de l’administration de la plateforme.', 'Faire calculer les disponibilités par un service commun aux parcours de réservation.'],
        en: ['Associate data with a business through business_id and verify that boundary in business flows.', 'Separate the business panel from platform administration.', 'Calculate availability through a service shared by the booking journeys.'],
      },
      delivered: {
        fr: ['Pages publiques de réservation et de confirmation.', 'Gestion des services, collaborateurs, horaires et absences.', 'API de disponibilités et de création des réservations.', 'Tests couvrant notamment l’isolation entre entreprises et la validation des horaires.'],
        en: ['Public booking and confirmation pages.', 'Management of services, staff, schedules and time off.', 'Availability and booking creation APIs.', 'Tests covering business isolation and schedule validation, among other rules.'],
      },
      limits: {
        fr: 'Le produit est en développement. Les parcours locaux et les tests constituent les preuves disponibles; ils ne valent pas une affirmation de déploiement chez des clients.',
        en: 'The product is in development. Local workflows and tests are the available evidence; they do not establish a customer production deployment.',
      },
    },
  },
  {
    slug: 'cotitrace', name: 'CotiTrace', category: 'fintech', status: 'prototype',
    period: { fr: '2026', en: '2026' },
    subtitle: { fr: 'Un solde doit pouvoir s’expliquer.', en: 'Every balance should tell its story.' },
    description: {
      fr: 'Un prototype de suivi de fonds d’avance fondé sur un journal financier et des répartitions déterministes.',
      en: 'An advance-fund tracking prototype built around a financial ledger and deterministic allocations.',
    }, tags: ['ASP.NET Core', 'React', 'PostgreSQL', 'xUnit'], diagram: 'ledger',
    caseStudy: {
      context: {
        fr: 'Suivre les contributions et les débits d’un fonds collectif en gardant une explication de chaque solde. Une dépense doit être répartie entre les membres avec un calcul reproductible, y compris quand le montant ne se divise pas exactement au cent près.',
        en: 'Track contributions and debits in a shared fund while preserving an explanation for every balance. Expenses need a reproducible allocation across members, including amounts that do not divide evenly into cents.',
      },
      role: {
        fr: 'Conception et implémentation d’une première tranche fonctionnelle : domaine, API ASP.NET Core, persistance PostgreSQL et interface React. Vérification des règles de calcul et de répartition.',
        en: 'Design and implementation of an initial functional slice: domain model, ASP.NET Core API, PostgreSQL persistence and React interface. Verification of calculation and allocation rules.',
      },
      decisions: {
        fr: ['Calculer le solde à partir des écritures, sans modifier directement un total.', 'Isoler les règles financières dans le domaine pour les tester indépendamment de l’interface.', 'Prévisualiser la répartition avant d’enregistrer les débits dans une transaction.'],
        en: ['Calculate balances from ledger entries rather than directly editing a total.', 'Keep financial rules in the domain so they can be tested independently of the interface.', 'Preview the allocation before recording debits in a transaction.'],
      },
      delivered: {
        fr: ['Membres, recharges et consultation du journal.', 'Création d’événements en brouillon et prévisualisation de leur répartition.', 'Répartition déterministe au cent près et enregistrement transactionnel.', 'Tableau de bord React et tests unitaires du calcul et des comptes de fonds.'],
        en: ['Members, top-ups and ledger browsing.', 'Draft event creation and allocation preview.', 'Deterministic cent-level allocation and transactional recording.', 'A React dashboard and unit tests for allocations and fund accounts.'],
      },
      limits: {
        fr: 'Prototype local. L’authentification, l’isolation sécurisée des organisations et les scénarios de concurrence doivent être complétés et vérifiés avant une exploitation publique. Aucune donnée réelle de membre n’est présentée ici.',
        en: 'Local prototype. Authentication, secure organization isolation and concurrent-operation scenarios need to be completed and verified before public operation. No real member data is shown here.',
      },
    },
  },
  {
    slug: 'mirev-access', name: 'MirevAccess', category: 'saas', status: 'development',
    period: { fr: '2026 — en cours', en: '2026 — ongoing' },
    subtitle: { fr: 'Connecter l’abonnement à l’accès.', en: 'Connecting subscriptions to network access.' },
    description: {
      fr: 'Un produit de gestion d’accès WiFi qui sépare les opérations client des fournisseurs de paiement et du matériel réseau.',
      en: 'A WiFi access product separating customer operations from payment providers and networking hardware.',
    }, tags: ['Laravel', 'Livewire', 'Filament', 'Adapters'], diagram: 'access',
    source: 'https://github.com/rayanfalcao8/mirev-access',
    caseStudy: {
      context: {
        fr: 'Relier les clients, offres, commandes et abonnements d’un service WiFi à l’accès au réseau. La conception doit permettre de travailler sur le parcours client sans dépendre en permanence du matériel physique.',
        en: 'Connect WiFi service customers, plans, orders and subscriptions to network access. The design should make it possible to develop customer journeys without continuously depending on physical hardware.',
      },
      role: {
        fr: 'Conception du produit et développement de sa fondation, avec une séparation explicite entre les domaines métier et leurs fournisseurs externes.',
        en: 'Product design and foundation development, with an explicit separation between business domains and external providers.',
      },
      decisions: {
        fr: ['Isoler le matériel derrière un contrat de fournisseur d’accès réseau.', 'Prévoir des adaptateurs simulés pour développer et tester le parcours sans matériel.', 'Distinguer commande, paiement, abonnement et autorisation d’accès.'],
        en: ['Isolate hardware behind a network access provider contract.', 'Use simulated adapters to develop and test the journey without hardware.', 'Distinguish orders, payments, subscriptions and access grants.'],
      },
      delivered: {
        fr: ['Définition des frontières du produit et de ses domaines.', 'Fondation du parcours client et de l’espace opérateur sur des branches dédiées.', 'Structure d’adaptation pour les fournisseurs réseau et paiement.'],
        en: ['Definition of product boundaries and business domains.', 'Foundation work on customer journeys and the operator area in dedicated branches.', 'An adapter structure for network and payment providers.'],
      },
      limits: {
        fr: 'Le dépôt indique un produit en développement sans déploiement de production. Les intégrations matérielles et Mobile Money font partie des prochaines validations; elles ne sont pas présentées comme déjà opérationnelles.',
        en: 'The repository describes an in-development product without a production deployment. Hardware and Mobile Money integrations are future validation steps, not capabilities claimed to be operational today.',
      },
    },
  },
  {
    slug: 'faroxpress', name: 'FaroXpress', category: 'fintech', status: 'prototype',
    period: { fr: 'Conception & prototypage', en: 'Design & prototyping' },
    subtitle: { fr: 'Transferts d’argent', en: 'Money transfers' },
    description: { fr: 'Conception d’une plateforme de transfert : identité, transactions, fournisseurs, taux et notifications.', en: 'Designing a transfer platform spanning identity, transactions, providers, rates and notifications.' },
    tags: ['Laravel', 'API', 'Fintech'], source: 'https://github.com/rayanfalcao8/faroxpress-api',
  },
  {
    slug: 'cosna-afrique', name: 'Cosna Afrique', category: 'fintech', status: 'past',
    period: { fr: 'Parcours antérieur', en: 'Earlier work' },
    subtitle: { fr: 'Transferts d’argent', en: 'Money transfers' },
    description: { fr: 'Application de transfert d’argent, présentée dans mon parcours web et mobile.', en: 'A money transfer application from my web and mobile development work.' },
    tags: ['Web', 'Mobile', 'Paiements / Payments'],
  },
  {
    slug: 'loov-solutions', name: 'Loov Solutions', category: 'fintech', status: 'past',
    period: { fr: 'Parcours antérieur', en: 'Earlier work' },
    subtitle: { fr: 'Intégration de paiements', en: 'Payment integrations' },
    description: { fr: 'Une API de paiement destinée aux applications clientes.', en: 'A payment API intended for client applications.' },
    tags: ['API', 'Paiements / Payments'],
  },
  {
    slug: 'smile-car-pro', name: 'Smile Car Pro', category: 'applications', status: 'past',
    period: { fr: 'Parcours antérieur', en: 'Earlier work' },
    subtitle: { fr: 'Mobilité partagée', en: 'Shared mobility' },
    description: { fr: 'Application multiplateforme de covoiturage pour le Cameroun.', en: 'A cross-platform carpooling application for Cameroon.' }, tags: ['Web', 'Mobile'],
  },
  {
    slug: 'relex', name: 'Relex', category: 'applications', status: 'past',
    period: { fr: 'Parcours antérieur', en: 'Earlier work' },
    subtitle: { fr: 'Livraison & suivi', en: 'Delivery & tracking' },
    description: { fr: 'Application de livraison avec suivi des colis.', en: 'A delivery application with package tracking.' }, tags: ['Web', 'Mobile'],
  },
];

export const featuredProjects = projects.filter((project) => project.caseStudy);
