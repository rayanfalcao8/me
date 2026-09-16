from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'cv'
OUT.mkdir(parents=True, exist_ok=True)

FONT = Path('/System/Library/Fonts/Supplemental/Verdana.ttf')
FONT_BOLD = Path('/System/Library/Fonts/Supplemental/Verdana Bold.ttf')
if FONT.exists() and FONT_BOLD.exists():
    pdfmetrics.registerFont(TTFont('PortfolioSans', str(FONT)))
    pdfmetrics.registerFont(TTFont('PortfolioSansBold', str(FONT_BOLD)))
    SANS = 'PortfolioSans'
    SANS_BOLD = 'PortfolioSansBold'
else:
    SANS = 'Helvetica'
    SANS_BOLD = 'Helvetica-Bold'

INK = colors.HexColor('#242720')
MUTED = colors.HexColor('#5d6259')
ACCENT = colors.HexColor('#4a5842')
LINE = colors.HexColor('#d1d2c7')

def styles():
    base = getSampleStyleSheet()
    return {
        'name': ParagraphStyle('name', parent=base['Normal'], fontName=SANS_BOLD, fontSize=20, leading=23, textColor=INK, spaceAfter=2),
        'role': ParagraphStyle('role', parent=base['Normal'], fontName=SANS, fontSize=9, leading=11, textColor=ACCENT, spaceAfter=6),
        'contact': ParagraphStyle('contact', parent=base['Normal'], fontName=SANS, fontSize=7.6, leading=10, textColor=MUTED),
        'section': ParagraphStyle('section', parent=base['Normal'], fontName=SANS_BOLD, fontSize=8.6, leading=10, textColor=ACCENT, spaceBefore=7, spaceAfter=3),
        'body': ParagraphStyle('body', parent=base['Normal'], fontName=SANS, fontSize=7.6, leading=10.1, textColor=INK, spaceAfter=2.5),
        'muted': ParagraphStyle('muted', parent=base['Normal'], fontName=SANS, fontSize=7.1, leading=9.3, textColor=MUTED),
        'job': ParagraphStyle('job', parent=base['Normal'], fontName=SANS_BOLD, fontSize=8.2, leading=10.3, textColor=INK),
        'date': ParagraphStyle('date', parent=base['Normal'], fontName=SANS, fontSize=7.1, leading=9.5, textColor=MUTED, alignment=TA_LEFT),
    }

def p(text, style):
    return Paragraph(text, style)

def section(title, content, s):
    return [HRFlowable(width='100%', thickness=.55, color=LINE, spaceBefore=5, spaceAfter=3), p(title, s['section']), *content]

def experience_row(company, job, period, location, description, stack, s):
    left = [p(company, s['job']), p(job, s['body'])]
    right = [p(period, s['date']), p(location, s['date'])]
    table = Table([[left, right]], colWidths=[4.9*inch, 1.6*inch], hAlign='LEFT')
    table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    return KeepTogether([table, p(description, s['body']), p(stack, s['muted']), Spacer(1, 2.5)])

def build(language, filename):
    s = styles()
    if language == 'fr':
        role = 'Développeur logiciel principal & responsable web'
        intro = 'Développeur logiciel principal et responsable web basé à Québec, avec six ans d’expérience en ingénierie logicielle : architectures e-commerce, Fintech, API et plateformes SaaS. Direction technique, modélisation de données complexes, intégrations résilientes et encadrement d’équipes.'
        headings = {'profile':'PROFIL', 'skills':'COMPÉTENCES CLÉS', 'experience':'EXPÉRIENCE', 'certifications':'CERTIFICATIONS', 'education':'FORMATION', 'projects':'RÉALISATIONS MAJEURES'}
        skills = 'Pimcore · Symfony · Laravel · TypeScript · React · Angular · Java · Node.js · ASP.NET Core · PostgreSQL · Shopify · Algolia'
        jobs = [
            ('Pneus Ratté & TireDirect', 'Responsable web & développeur logiciel principal', '2024 - aujourd’hui', 'Québec, Canada', 'Direction technique et développement de deux plateformes e-commerce (pneusratte.com et tiredirect.ca) opérées dans un socle multisite Pimcore. Modélisation PIM (dizaines de milliers de références), intégrations Shopify, Algolia et Unbxd, flux ERP/POS et rendez-vous d’ateliers.', 'Pimcore · Symfony · Shopify · Algolia · TypeScript · Multi-site'),
            ('MIREV Solutions', 'Fondateur et consultant logiciel - activité parallèle', 'Depuis 2022', 'Québec, Canada', 'Conception d’applications, accompagnement technique et développement de produits personnels reliant besoin client, choix d’architecture et livraison.', 'Produits · API · SaaS · Architecture'),
            ('PILINK', 'Lead développeur - mission', '2023', 'France - à distance', 'Direction technique et encadrement d’une équipe de quatre développeurs. Architecture logicielle, développement d’API modulaires (Node.js) et d’interfaces web (Angular, React, Flutter), gestion des revues de code et livraisons.', 'Node.js · Angular · React · Flutter · Lead tech'),
            ('ISDG', 'Développeur logiciel full stack (Fintech)', '2021 - 2023', 'Cameroun', 'Applications web et mobiles, backend et intégrations pour des produits financiers et métier (Cosna Afrique, Loov Solutions). Passerelles Mobile Money multi-pays, webhooks et modèles transactionnels sécurisés.', 'Laravel · Fintech · Mobile Money · API REST · SQL'),
            ('Thrust Techno Corporation', 'Développeur logiciel & lead d’équipe', '2020 - 2021', 'Cameroun', 'Développement d’applications web et d’API pour des projets clients, puis coordination d’une équipe de 5 développeurs et stagiaires.', 'Java · Web · API · SQL · Coordination'),
        ]
        certifications = [
            ('Pimcore Academy', '<b>Pimcore Certified Developer & Consultant</b> — Suite complète de certifications officielles (PIM, MDM, DAM, Symfony, E-commerce), 2024')
        ]
        education = [
            ('Université Laval', 'Maîtrise en informatique - intelligence artificielle, en cours à temps partiel'),
            ('Institut Africain d’Informatique', 'Ingénieur des travaux informatiques - génie logiciel, 2021'),
            ('Institut Africain d’Informatique', 'Higher Technical Diploma - informatique, 2020')
        ]
        projects = 'Pneus Ratté & TireDirect : deux plateformes e-commerce opérées sous Pimcore unifié. Cosna Afrique : plateforme de transfert de fonds multi-pays. Loov Solutions : API passerelle de paiement unifiée. Reservix : SaaS de réservation multi-tenant. CotiTrace : prototype de journal financier déterministe.'
    else:
        role = 'Principal software developer & web lead'
        intro = 'Québec City-based principal software developer and web lead with six years of experience across high-traffic commerce architectures, Fintech, APIs and SaaS platforms. Technical leadership, complex data modelling, resilient integrations and engineering team management.'
        headings = {'profile':'PROFILE', 'skills':'CORE SKILLS', 'experience':'EXPERIENCE', 'certifications':'CERTIFICATIONS', 'education':'EDUCATION', 'projects':'KEY ACHIEVEMENTS'}
        skills = 'Pimcore · Symfony · Laravel · TypeScript · React · Angular · Java · Node.js · ASP.NET Core · PostgreSQL · Shopify · Algolia'
        jobs = [
            ('Pneus Ratté & TireDirect', 'Web lead & principal software developer', '2024 - present', 'Québec City, Canada', 'Technical leadership and engineering for two e-commerce platforms (pneusratte.com and tiredirect.ca) operated in a unified multi-site Pimcore environment. PIM modelling (tens of thousands of SKUs), Shopify, Algolia and Unbxd integrations, ERP/POS data sync and appointment booking.', 'Pimcore · Symfony · Shopify · Algolia · TypeScript · Multi-site'),
            ('MIREV Solutions', 'Founder and software consultant - parallel activity', 'Since 2022', 'Québec City, Canada', 'Application design, technical consulting and independent product development connecting client needs, architecture decisions and delivery.', 'Products · APIs · SaaS · Architecture'),
            ('PILINK', 'Lead developer - consulting engagement', '2023', 'France - remote', 'Technical leadership and management of a four-developer team. Modular API development (Node.js), web applications (Angular, React, Flutter), code reviews and delivery.', 'Node.js · Angular · React · Flutter · Tech Lead'),
            ('ISDG', 'Full-stack software developer (Fintech)', '2021 - 2023', 'Cameroon', 'Web and mobile applications, backend services and integrations for fintech and business products (Cosna Afrique, Loov Solutions). Multi-country Mobile Money gateways, webhooks and secure transactional flows.', 'Laravel · Fintech · Mobile Money · REST APIs · SQL'),
            ('Thrust Techno Corporation', 'Software developer & team lead', '2020 - 2021', 'Cameroon', 'Development of client web applications and APIs, then coordination of a team of 5 developers and interns.', 'Java · Web · APIs · SQL · Coordination'),
        ]
        certifications = [
            ('Pimcore Academy', '<b>Pimcore Certified Developer & Consultant</b> — Complete official certification suite (PIM, MDM, DAM, Symfony, E-commerce), 2024')
        ]
        education = [
            ('Université Laval', 'Master’s studies in Computer Science - Artificial Intelligence, in progress part-time'),
            ('Institut Africain d’Informatique', 'Ingénieur des travaux informatiques - Software Engineering, 2021'),
            ('Institut Africain d’Informatique', 'Higher Technical Diploma - Computer Science, 2020')
        ]
        projects = 'Pneus Ratté & TireDirect: two distinct commerce platforms operated in a unified Pimcore setup. Cosna Afrique: cross-border money transfer platform. Loov Solutions: unified payment gateway API. Reservix: multi-tenant booking SaaS. CotiTrace: deterministic financial ledger prototype.'

    doc = SimpleDocTemplate(str(OUT / filename), pagesize=letter, leftMargin=.65*inch, rightMargin=.65*inch, topMargin=.38*inch, bottomMargin=.38*inch, title=f'Rayan Tsolefack - {role}', author='Rayan Tsolefack')
    story = [p('Rayan Tsolefack', s['name']), p(role, s['role']), p('Québec, Canada  |  rayanfalcao8@gmail.com  |  linkedin.com/in/rayan-tsolefack  |  github.com/rayanfalcao8', s['contact'])]
    story += section(headings['profile'], [p(intro, s['body'])], s)
    story += section(headings['skills'], [p(skills, s['body'])], s)
    story += section(headings['experience'], [experience_row(*job, s) for job in jobs], s)
    story += section(headings['certifications'], [p(f'<b>{issuer}</b> — {desc}', s['body']) for issuer, desc in certifications], s)
    story += section(headings['education'], [p(f'<b>{school}</b> — {degree}', s['body']) for school, degree in education], s)
    story += section(headings['projects'], [p(projects, s['body'])], s)
    doc.build(story)

build('fr', 'Rayan-Tsolefack-CV-FR.pdf')
build('en', 'Rayan-Tsolefack-Resume-EN.pdf')
print("Successfully generated resumes in public/cv/")
