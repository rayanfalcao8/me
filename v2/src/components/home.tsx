import Link from 'next/link';
import type { Locale } from '@/content/site';
import { education } from '@/content/site';
import { Arrow } from './arrow';
import { FeaturedWork } from './featured-work';

export function Home({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  const route = (path: string) => '/' + locale + '/' + path + '/';
  return <>
    <section className="identity-section shell" aria-labelledby="identity-title">
      <div className="identity-meta"><span className="eyebrow">{fr ? 'DÉVELOPPEUR LOGICIEL · FULL STACK' : 'SOFTWARE DEVELOPER · FULL STACK'}</span><span className="identity-location"><i />Québec, Canada</span></div>
      <div className="identity-grid">
        <div className="identity-copy">
          <h1 id="identity-title">Rayan<br /><em>Tsolefack.</em><span className="name-period" aria-hidden="true">↗</span></h1>
          <div className="identity-description"><span className="identity-rule" aria-hidden="true" /><p>{fr ? 'L’interface. Les services.' : 'The interface. The services.'}<br /><strong>{fr ? 'Et tout ce qui les relie.' : 'And everything in between.'}</strong></p></div>
          <p className="identity-bio">{fr ? 'Six ans à construire des applications et à faire évoluer des plateformes métier. Du besoin sur le terrain au détail dans le code.' : 'Six years building applications and evolving business platforms. From real-world needs to the details in the code.'}</p>
          <div className="identity-links"><a href="#selected-work" className="solid-link">{fr ? 'Découvrir mon travail' : 'Explore my work'}<Arrow direction="down" /></a><Link href={route('about')} className="text-link">{fr ? 'Un peu plus sur moi' : 'A little more about me'}<Arrow /></Link></div>
        </div>
        <div className="portrait-composition">
          <span className="portrait-corner portrait-corner-a" aria-hidden="true" /><span className="portrait-corner portrait-corner-b" aria-hidden="true" />
          <div className="portrait-top"><span>{fr ? 'LA CURIOSITÉ COMME FIL CONDUCTEUR.' : 'LED BY CURIOSITY.'}</span><span aria-hidden="true">↗</span></div>
          <div className="portrait-art"><span className="portrait-letter" aria-hidden="true">R</span><img src="/images/rayan.png" alt={fr ? 'Rayan Tsolefack à son bureau' : 'Rayan Tsolefack at his desk'} width="612" height="408" fetchPriority="high" /></div>
          <div className="portrait-bottom"><span>CMR<span className="route-line" aria-hidden="true"><i /></span>CAN</span><p>{fr ? 'Deux continents.' : 'Two continents.'}<br /><em>{fr ? 'La même envie de construire.' : 'The same drive to build.'}</em></p></div>
        </div>
      </div>
      <div className="identity-footnote"><p><span className="footnote-number">06</span>{fr ? 'années de métier' : 'years in software'}</p><span className="identity-fields">{fr ? 'Commerce / API / SaaS / Applications' : 'Commerce / APIs / SaaS / Applications'}</span><Link href={route('education')}><span className="academic-dot" />{fr ? 'Maîtrise en IA · Université Laval' : 'AI master’s studies · Université Laval'}<span className="academic-status">{fr ? 'EN COURS' : 'IN PROGRESS'}</span><Arrow /></Link></div>
    </section>
    <section className="work-section" id="selected-work" aria-labelledby="selected-title">
      <div className="shell"><div className="work-heading"><div><span className="eyebrow">01 / {fr ? 'LE TRAVAIL' : 'THE WORK'}</span><h2 id="selected-title">{fr ? 'Derrière chaque écran,' : 'Behind every screen,'}<br /><em>{fr ? 'un vrai sujet.' : 'a real problem.'}</em></h2></div><p>{fr ? 'Des plateformes en production aux produits que je développe. Le contexte, les choix et le travail réalisé.' : 'From production platforms to products I’m building. The context, the decisions and the work behind them.'}</p></div><FeaturedWork locale={locale} /><Link href={route('work')} className="work-directory-link"><span>{fr ? 'Explorer toutes les réalisations' : 'Explore the complete project directory'}</span><span>{fr ? 'Commerce, paiements, mobilité et produits métier' : 'Commerce, payments, mobility and business software'}</span><Arrow /></Link></div>
    </section>
    <section className="archive-section shell"><div className="archive-heading"><span className="eyebrow">{fr ? 'AUSSI DANS MON PARCOURS' : 'ALSO ALONG THE WAY'}</span><p>{fr ? 'D’autres terrains. D’autres contraintes.' : 'Different domains. Different constraints.'}</p></div><div className="archive-gallery">
      {[{name:'Loov Solutions',image:'loov.png',kind:fr?'API & paiements':'APIs & payments'}, {name:'Smile Car Pro',image:'smile.png',kind:fr?'Mobilité & applications':'Mobility & applications'}].map(item=><Link key={item.name} href={route('work')} className="archive-piece"><div className={'archive-image archive-' + item.image.split('.')[0]}><img src={'/images/projects/' + item.image} alt={fr ? 'Capture de la version antérieure de ' + item.name : 'Screenshot of an earlier version of ' + item.name} width="1200" height="650" loading="lazy" /></div><div><h3>{item.name}</h3><span>{item.kind}</span><Arrow /></div></Link>)}
    </div></section>
    <section className="perspective-section shell"><div className="perspective-title"><span className="eyebrow">02 / {fr ? 'LA FAÇON DE FAIRE' : 'THE APPROACH'}</span><h2>{fr ? 'Le détail compte.' : 'The details matter.'}<br /><em>{fr ? 'L’ensemble aussi.' : 'So does the whole.'}</em></h2></div><div className="perspective-list">{[
      [fr?'Comprendre avant de construire.':'Understand before building.',fr?'Les utilisateurs, leurs contraintes, ce qui coince. Le besoin métier donne la direction aux choix techniques.':'The users, their constraints, what gets in the way. Business needs give technical decisions their direction.'],
      [fr?'Relier ce qui doit fonctionner ensemble.':'Connect what needs to work together.',fr?'Une interface, une API, des données et des services externes. Je m’intéresse autant aux passages entre les pièces qu’aux pièces elles-mêmes.':'An interface, an API, data and external services. I care as much about the connections between the parts as the parts themselves.'],
      [fr?'Penser à la suite.':'Think about what comes next.',fr?'Des règles explicites, des changements vérifiés et des décisions documentées. Pour que le produit puisse continuer à évoluer.':'Explicit rules, verified changes and documented decisions. So the product can keep evolving.'],
    ].map(([title,body],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
    <section className="chapter-section shell"><div className="chapter-intro"><span className="eyebrow">03 / {fr ? 'LE PARCOURS' : 'THE JOURNEY'}</span><h2>{fr ? 'Toujours' : 'Always'}<br /><em>{fr ? 'en mouvement.' : 'moving forward.'}</em></h2><p>{fr ? 'Du Cameroun au Québec. Du premier poste à la création de MIREV. Et aujourd’hui, la maîtrise en parallèle du métier.' : 'From Cameroon to Québec. From my first role to founding MIREV. And today, master’s studies alongside professional work.'}</p><Link href={route('experience')} className="text-link">{fr ? 'Voir le parcours complet' : 'Explore my experience'}<Arrow /></Link></div><div className="chapter-education"><span className="eyebrow">{fr ? 'LA FORMATION CONTINUE LE CHEMIN' : 'EDUCATION CONTINUES THE JOURNEY'}</span>{education.slice(0,2).map((item,index)=><Link href={route('education')} className="chapter-degree" key={item.school}><span className="chapter-year">{index===0 ? (fr?'En cours':'In progress'):'2021'}</span><div><h3>{item.school}</h3><p>{item.degree[locale]}</p><span>{item.focus[locale]}</span></div><Arrow /></Link>)}<Link href={route('education')} className="text-link">{fr ? 'Toute ma formation' : 'My full education'}<Arrow /></Link></div></section>
  </>;
}
