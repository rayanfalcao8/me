import type { Locale } from '@/content/site';
import { ui } from '@/content/site';
import type { DiagramKind } from '@/content/projects';

export function ProjectVisual({ kind, locale, large = false }: { kind: DiagramKind; locale: Locale; large?: boolean }) {
  const fr = locale === 'fr';
  if (kind === 'commerce') return <figure className={`project-visual visual-commerce ${large ? 'visual-large' : ''}`}>
    <div className="visual-topline"><span>PNEUS RATTÉ / E-COMMERCE</span><span>2024 — {fr ? 'AUJOURD’HUI' : 'PRESENT'}</span></div>
    <div className="production-frame"><div className="production-browserbar">pneusratte.com</div><img src="/images/projects/pneusratte-public.jpg" alt={fr ? 'Accueil du site public Pneus Ratté, septembre 2026' : 'Public Pneus Ratté homepage, September 2026'} width="1363" height="936" loading="lazy" /></div>
    <figcaption><span>{fr ? 'CAPTURE DU SITE PUBLIC · SEPT. 2026' : 'PUBLIC WEBSITE CAPTURE · SEPT. 2026'}</span><span aria-hidden="true">↗</span></figcaption>
  </figure>;
  return (
    <figure className={`project-visual visual-${kind} ${large ? 'visual-large' : ''}`}>
      <div className="visual-topline"><span>{({ booking: 'SAAS / BOOKING', ledger: 'FINTECH / LEDGER', access: 'NETWORK / ACCESS' })[kind]}</span><span aria-hidden="true">[ {kind === 'booking' ? '02' : kind === 'ledger' ? '03' : '04'} ]</span></div>
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
