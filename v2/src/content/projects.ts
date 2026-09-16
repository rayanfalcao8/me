import type { Localized } from './site';

export type Category = 'commerce' | 'saas' | 'fintech' | 'applications';
export type ProjectStatus = 'professional' | 'development' | 'prototype' | 'past';
export type DiagramKind = 'commerce' | 'booking' | 'ledger' | 'access' | 'fintech' | 'payment';
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
  featured?: boolean;
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
    slug: 'pneus-ratte-tiredirect', name: 'Pneus Ratté & TireDirect', category: 'commerce', status: 'professional',
    featured: true,
    period: { fr: '2024 — aujourd’hui', en: '2024 — present' },
    subtitle: { fr: 'Deux plateformes e-commerce. Un environnement Pimcore unifié.', en: 'Two distinct commerce platforms. One unified Pimcore architecture.' },
    description: {
      fr: 'Direction technique et ingénierie de deux plateformes e-commerce majeures du Québec : données produit (PIM), recherche instantanée et intégrations Shopify.',
      en: 'Technical leadership and engineering for two major Québec commerce platforms: product data (PIM), instant search and Shopify integrations.',
    }, tags: ['Pimcore', 'Symfony', 'Shopify', 'Algolia', 'TypeScript'], diagram: 'commerce',
    caseStudy: {
      context: {
        fr: 'Pneus Ratté (réseau de centres de service et vente au détail) et TireDirect (vente en ligne directe) constituent deux vitrines e-commerce distinctes partageant des catalogues de dizaines de milliers de références pneus et roues. L’enjeu architectural est d’opérer ces deux plateformes au sein d’un socle Pimcore unifié tout en garantissant des règles de prix, des parcours de commande et des identités de marque propres.',
        en: 'Pneus Ratté (automotive service network and retail) and TireDirect (direct-to-consumer online sales) represent two distinct e-commerce storefronts sharing tire and wheel catalogs of tens of thousands of SKUs. The core architectural challenge is operating both platforms within a unified Pimcore foundation while preserving brand-specific pricing rules, customer journeys and identities.',
      },
      role: {
        fr: 'Responsable web et développeur logiciel principal sur le projet. Direction technique de la plateforme multi-site sous Pimcore, modélisation des données produit (PIM), architecture des intégrations Shopify et moteurs de recherche (Algolia, Unbxd), orchestration des flux d’inventaire et collaboration étroite avec la direction et les partenaires externes.',
        en: 'Web lead and principal software developer on the project. Technical ownership of the multi-site Pimcore platform, product data modelling (PIM), Shopify and search engine integrations (Algolia, Unbxd), inventory flux orchestration, and close collaboration with leadership and external technical partners.',
      },
      decisions: {
        fr: [
          'Concevoir un modèle de données produit unique dans Pimcore capable de décliner les attributs, compatibilités véhicules et variantes pour les deux marques sans duplication.',
          'Structurer les synchronisations bidirectionnelles avec Shopify et les moteurs de recherche via des commandes asynchrones résilientes avec métriques et journalisation.',
          'Gérer le multi-site et le bilinguisme intégral (FR/EN) au niveau des routes, des gabarits et de l’expérience d’achat.',
        ],
        en: [
          'Design a unified product data model in Pimcore capable of projecting attributes, vehicle fitments and variants across both brands without data redundancy.',
          'Structure bidirectional synchronizations with Shopify and search engines through resilient asynchronous commands with metrics and logging.',
          'Enforce native multi-site and bilingualism (FR/EN) across routing, templates and transactional checkout journeys.',
        ],
      },
      delivered: {
        fr: [
          'Direction technique et livraison continue des fonctionnalités applicatives sur pneusratte.com et tiredirect.ca.',
          'Intégration et synchronisation des catalogues PIM (dizaines de milliers de références) vers Shopify et Algolia/Unbxd.',
          'Développement du moteur de recherche multicritère par dimension, modèle de véhicule et saisonnalité.',
          'Parcours de prise de rendez-vous en ligne en atelier mécanique interconnecté aux disponibilités des centres de service.',
          'Diagnostic, optimisation de performance et résolution proactive des incidents de production.',
        ],
        en: [
          'Technical leadership and continuous delivery of application features across pneusratte.com and tiredirect.ca.',
          'PIM catalog integration and synchronization (tens of thousands of SKUs) into Shopify and Algolia/Unbxd.',
          'Development of multi-criteria search engines by tire size, vehicle fitment and seasonality.',
          'Online garage appointment booking flow connected to real-time service center schedules.',
          'Performance diagnostics, optimization and proactive production issue resolution.',
        ],
      },
      limits: {
        fr: 'Présentation des responsabilités de direction technique et d’ingénierie web au sein de l’organisation. Les deux plateformes sont en exploitation commerciale continue.',
        en: 'Overview of web leadership and technical engineering responsibilities within the organization. Both platforms operate in active commercial production.',
      },
    },
  },
  {
    slug: 'cosna-afrique', name: 'Cosna Afrique', category: 'fintech', status: 'professional',
    featured: true,
    period: { fr: '2021 — 2023', en: '2021 — 2023' },
    subtitle: { fr: 'Transferts de fonds multi-pays et flux Mobile Money.', en: 'Cross-border money transfers and Mobile Money flows.' },
    description: {
      fr: 'Plateforme et application de transfert de fonds reliant plusieurs pays d’Afrique avec conciliation financière et notifications.',
      en: 'Cross-border money transfer platform and application operating across several African countries with financial reconciliation.',
    }, tags: ['Laravel', 'Fintech', 'Mobile Money', 'API REST', 'SQL'], diagram: 'fintech',
    caseStudy: {
      context: {
        fr: 'Permettre aux utilisateurs d’envoyer et de recevoir de l’argent entre plusieurs pays d’Afrique à travers des canaux web et mobiles. La plateforme devait orchestrer les devises, appliquer les taux de change en temps réel, s’interfacer avec les opérateurs Mobile Money locaux et assurer une traçabilité comptable irréprochable.',
        en: 'Enable users to send and receive funds across multiple African countries through web and mobile channels. The platform orchestrated currencies, real-time exchange rates, local Mobile Money carriers and strict transactional auditability.',
      },
      role: {
        fr: 'Développeur logiciel full stack chez ISDG. Conception des API backend, implémentation des règles de transaction et intégration des passerelles Mobile Money. Collaboration sur les interfaces mobiles et les outils d’administration financière.',
        en: 'Full-stack software developer at ISDG. Backend API design, implementation of transaction rules and Mobile Money gateway integrations. Collaboration on mobile interfaces and financial administration tools.',
      },
      decisions: {
        fr: [
          'Sécuriser chaque transfert par un cycle d’états transactionnels strict (initié, verrouillé, validé, crédité, audité).',
          'Isoler les passerelles d’opérateurs de paiement derrière une couche d’abstraction facilitant l’ajout de nouveaux pays.',
          'Mettre en place une conciliation journalière automatisée pour prévenir les écarts de trésorerie.',
        ],
        en: [
          'Secure each transfer through a strict transactional state machine (initiated, locked, validated, credited, audited).',
          'Isolate payment carrier gateways behind an abstraction layer facilitating the addition of new countries.',
          'Implement automated daily reconciliation to prevent cashflow discrepancies.',
        ],
      },
      delivered: {
        fr: [
          'API sécurisée de calcul des frais, validation d’identité et exécution des transferts.',
          'Intégration d’opérateurs Mobile Money majeurs et notifications transactionnelles instantanées.',
          'Portail de gestion et de conformité pour les opérateurs et agents de transfert.',
        ],
        en: [
          'Secure API for fee calculations, identity verification and transfer execution.',
          'Integration of major Mobile Money carriers and real-time transaction alerts.',
          'Operator and agent management portal for transaction compliance and monitoring.',
        ],
      },
      limits: {
        fr: 'Projet livré dans le cadre des activités d’ISDG. Les données clients et flux financiers réels restent strictement confidentiels.',
        en: 'Project delivered as part of ISDG engineering activities. Customer data and actual financial workflows remain strictly confidential.',
      },
    },
  },
  {
    slug: 'loov-solutions', name: 'Loov Solutions', category: 'fintech', status: 'professional',
    featured: true,
    period: { fr: '2022 — 2023', en: '2022 — 2023' },
    subtitle: { fr: 'Passerelle et API de paiement unifiée.', en: 'Unified payment gateway and API.' },
    description: {
      fr: 'Une API unifiant les moyens de paiement locaux (Mobile Money, cartes bancaires) pour les applications et plateformes marchandes.',
      en: 'A payment API unifying local payment methods (Mobile Money, credit cards) for client applications and merchant platforms.',
    }, tags: ['API REST', 'Fintech', 'Webhooks', 'Paiements', 'Sécurité'], diagram: 'payment',
    caseStudy: {
      context: {
        fr: 'Fournir aux développeurs et commerçants une API unique pour encaisser des paiements sans avoir à intégrer chaque opérateur télécom individuellement. Le service devait offrir une haute disponibilité, une idempotence garantie et des webhooks fiables.',
        en: 'Provide developers and merchants with a single API to collect payments without manually integrating each telecom carrier. The service required high availability, guaranteed idempotency and reliable webhooks.',
      },
      role: {
        fr: 'Conception et développement des points de terminaison d’API, de la gestion des clés d’authentification marchandes et du dispatching des webhooks de notification de paiement.',
        en: 'Design and engineering of API endpoints, merchant authentication key management and asynchronous payment webhook dispatching.',
      },
      decisions: {
        fr: [
          'Garantir l’idempotence des transactions pour éliminer tout risque de double débit lors d’incidents réseau.',
          'Mettre en place un système de retry exponentiel pour la livraison des webhooks vers les serveurs marchands.',
          'Sandbox complète avec simulation de statuts de transaction pour faciliter l’intégration des développeurs.',
        ],
        en: [
          'Guarantee transaction idempotency to eliminate double-charge risks during network timeouts.',
          'Implement exponential backoff retries for webhook delivery to merchant servers.',
          'Complete sandbox environment with transaction status simulation to streamline developer onboarding.',
        ],
      },
      delivered: {
        fr: [
          'Spécification OpenAPI et documentation interactive pour les marchands.',
          'Endpoints d’initiation, vérification et remboursement de paiements.',
          'Tableau de bord d’analyse des transactions et gestion des clés API.',
        ],
        en: [
          'OpenAPI specification and interactive developer documentation.',
          'Payment initiation, verification and refund endpoints.',
          'Transaction analytics dashboard and API key management portal.',
        ],
      },
      limits: {
        fr: 'Solution en exploitation par les clients de la plateforme.',
        en: 'Solution in active production use by platform merchants.',
      },
    },
  },
  {
    slug: 'reservix', name: 'Reservix', category: 'saas', status: 'development',
    featured: true,
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

export const featuredProjects = projects.filter((project) => project.featured ?? Boolean(project.caseStudy));
export const caseStudyProjects = projects.filter((project) => project.caseStudy);
