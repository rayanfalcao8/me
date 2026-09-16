'use client';

import { useState } from 'react';
import type { Locale } from '@/content/site';
import { ui } from '@/content/site';
import type { DiagramKind } from '@/content/projects';

export function ProjectVisual({ kind, locale, large = false }: { kind: DiagramKind; locale: Locale; large?: boolean }) {
  const fr = locale === 'fr';
  const [activeBrand, setActiveBrand] = useState<'pneusratte' | 'tiredirect'>('pneusratte');

  if (kind === 'commerce') {
    return (
      <figure className={`project-visual visual-commerce ${large ? 'visual-large' : ''}`}>
        <div className="visual-topline">
          <span>PNEUS RATTÉ &amp; TIREDIRECT / PIMCORE MULTI-SITE</span>
          <div className="multi-site-switch" role="tablist" aria-label={fr ? 'Choisir la vitrine e-commerce' : 'Choose storefront'}>
            <button
              type="button"
              role="tab"
              aria-selected={activeBrand === 'pneusratte'}
              className={`switch-btn ${activeBrand === 'pneusratte' ? 'is-active' : ''}`}
              onClick={() => setActiveBrand('pneusratte')}
            >
              Pneus Ratté
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeBrand === 'tiredirect'}
              className={`switch-btn ${activeBrand === 'tiredirect' ? 'is-active' : ''}`}
              onClick={() => setActiveBrand('tiredirect')}
            >
              TireDirect
            </button>
          </div>
        </div>

        <div className="commerce-showcase">
          <div className="production-frame">
            <div className="production-browserbar">
              {activeBrand === 'pneusratte'
                ? 'pneusratte.com · Pneus Ratté (B2C & Ateliers mécanique)'
                : 'tiredirect.ca · TireDirect Canada (Distribution & Vente en ligne)'}
            </div>
            <img
              src={activeBrand === 'pneusratte' ? '/images/projects/pneusratte-public.jpg' : '/images/projects/tiredirect-public.jpg'}
              alt={activeBrand === 'pneusratte' ? 'Site public Pneus Ratté' : 'Site public TireDirect Canada'}
              width="1363"
              height="936"
              loading="lazy"
            />
          </div>
        </div>

        <figcaption className="commerce-caption">
          <span className="multisite-badge">
            {fr
              ? 'SOCLE PIMCORE UNIFIÉ · GESTION MULTI-SITE & CATALOGUE PARTAGÉ'
              : 'UNIFIED PIMCORE FOUNDATION · MULTI-SITE & SHARED CATALOG'}
          </span>
          <span aria-hidden="true">↗</span>
        </figcaption>
      </figure>
    );
  }

  if (kind === 'fintech') {
    return (
      <figure className={`project-visual visual-fintech ${large ? 'visual-large' : ''}`}>
        <div className="visual-topline">
          <span>COSNA AFRIQUE / FINTECH &amp; TRANSFERTS</span>
          <span aria-hidden="true">[ 02 ]</span>
        </div>
        <div className="production-frame">
          <div className="production-browserbar">cosna-afrique.com · Mobile Money &amp; Transferts multi-pays</div>
          <img
            src="/images/projects/cosna.png"
            alt={fr ? 'Plateforme Cosna Afrique' : 'Cosna Afrique platform'}
            width="1200"
            height="650"
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>{fr ? 'TRANSFERTS MULTI-PAYS · PRODUCTION RÉELLE' : 'CROSS-BORDER TRANSFERS · REAL PRODUCTION'}</span>
          <span aria-hidden="true">↗</span>
        </figcaption>
      </figure>
    );
  }

  if (kind === 'payment') {
    return (
      <figure className={`project-visual visual-payment ${large ? 'visual-large' : ''}`}>
        <div className="visual-topline">
          <span>LOOV SOLUTIONS / PASSERELLE DE PAIEMENT</span>
          <span aria-hidden="true">[ 03 ]</span>
        </div>
        <div className="production-frame">
          <div className="production-browserbar">loov-solutions.com · API &amp; Gateway Webhooks</div>
          <img
            src="/images/projects/loov.png"
            alt={fr ? 'Passerelle de paiement Loov Solutions' : 'Loov Solutions payment gateway'}
            width="1200"
            height="650"
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>{fr ? 'PASSERELLE DE PAIEMENT &amp; API WEBHOOKS' : 'PAYMENT GATEWAY &amp; WEBHOOKS API'}</span>
          <span aria-hidden="true">↗</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={`project-visual visual-${kind} ${large ? 'visual-large' : ''}`}>
      <div className="visual-topline">
        <span>{({ booking: 'SAAS / BOOKING', ledger: 'FINTECH / LEDGER', access: 'NETWORK / ACCESS' })[kind]}</span>
        <span aria-hidden="true">[ {kind === 'booking' ? '04' : kind === 'ledger' ? '05' : '06'} ]</span>
      </div>
      {kind === 'booking' && (
        <div className="booking-schema">
          <div className="visual-product-name">reservix<span aria-hidden="true">.</span></div>
          <p className="visual-promise">{fr ? 'Un socle commun.' : 'A shared foundation.'}<br /><span>{fr ? 'Des espaces distincts.' : 'Separate workspaces.'}</span></p>
          <div className="tenant-grid">{['A', 'B'].map((tenant) => <div className="tenant" key={tenant}><strong>{fr ? 'Entreprise' : 'Business'} {tenant}</strong><span>{fr ? 'Services · équipe' : 'Services · staff'}</span><span>{fr ? 'Disponibilités · réservations' : 'Availability · bookings'}</span></div>)}</div>
        </div>
      )}
      {kind === 'ledger' && (
        <div className="ledger-schema">
          <div className="visual-product-name">CotiTrace<span className="visual-period" aria-hidden="true">.</span></div>
          <div className="ledger-equation"><span className="sigma" aria-hidden="true">Σ</span><div><strong>{fr ? 'Chaque écriture compte.' : 'Every entry counts.'}</strong><span>{fr ? 'Le solde découle du journal.' : 'The balance follows the ledger.'}</span></div></div>
          <div className="ledger-flow"><span>{fr ? 'Contributions' : 'Contributions'}</span><span aria-hidden="true">+</span><span>{fr ? 'Débits' : 'Debits'}</span><span aria-hidden="true">=</span><strong>{fr ? 'Solde' : 'Balance'}</strong></div>
        </div>
      )}
      {kind === 'access' && (
        <div className="access-schema">
          <div className="visual-product-name">mirev<span className="access-word">access</span></div>
          <div className="access-domains"><span>{fr ? 'Clients' : 'Customers'}</span><span>{fr ? 'Offres' : 'Plans'}</span><span>{fr ? 'Abonnements' : 'Subscriptions'}</span></div>
          <div className="access-contract"><span>{fr ? 'CONTRAT D’ACCÈS' : 'ACCESS CONTRACT'}</span><strong>NetworkAccessProvider</strong></div>
          <p className="access-caption">{fr ? 'Le métier indépendant du matériel.' : 'Business logic independent of hardware.'}</p>
        </div>
      )}
      <figcaption><span>{ui[locale].diagram}</span><span aria-hidden="true">↗</span></figcaption>
    </figure>
  );
}
