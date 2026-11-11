export type Language = 'it' | 'es' | 'en';

/**
 * English is the reference dictionary: its keys define `TranslationKey`, so the
 * compiler flags any key missing from the other languages.
 * `{placeholders}` are filled in by `TranslationService.t(key, params)`.
 */
const en = {
  // ---------- Header ----------
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.timeline': 'Timeline',
  'nav.skills': 'Skills & AI',
  'nav.contact': 'Contact',
  'nav.label': 'Main',
  'nav.menu': 'Menu',
  'nav.home': '{name} — home',
  'header.available': 'Available',
  'lang.label': 'Language',

  // ---------- Hero ----------
  'hero.statement.where': 'Where',
  'hero.statement.fashion': 'fashion',
  'hero.statement.meets': 'meets',
  'hero.statement.code': 'code.',
  'hero.proof':
    'Four years building production Angular front-ends at KEDOS srl, with a fashion design training from Bologna and Condé Nast College Madrid.',
  'hero.cta.projects': 'See the work',
  'hero.cta.contact': 'Get in touch',
  'hero.sticker.angular': '[Angular · 4 yrs in prod]',
  'hero.sticker.languages': '[{count} languages]',
  'hero.sticker.ai': '[AI-assisted workflow]',
  'hero.alt':
    '{name} — 3D avatar portrait with long wavy hair, black glasses and a burgundy leather bomber jacket',

  // ---------- Projects ----------
  'projects.title.pre': 'Five concepts, five ',
  'projects.title.em': 'worlds',
  'projects.title.post': '.',
  'projects.lead':
    'Self-initiated projects: the brands are invented, the code is real and live on Vercel. Each one has its own art direction, from a late-90s editorial to an industrial SaaS dashboard.',
  'projects.concept': 'Self-initiated concept',
  'projects.look': 'Look {n} / {total}',
  'projects.palette': 'Palette',
  'projects.preview.alt': '{title}: homepage screenshot',
  'projects.outro': 'Have a brand that needs a world of its own?',
  'projects.outro.cta': "Let's talk →",
  'projects.card.live': 'Visit site ↗',
  'projects.card.newTab': '(opens in a new tab)',
  'project.office-99.subtitle': 'Retro-Editorial Agency Showcase',
  'project.office-99.description':
    'A late-90s office aesthetic remixed into a high-fashion editorial experience.',
  'project.funky-vino.subtitle': 'Neo-Bistro Natural Wine Bar',
  'project.funky-vino.description':
    'A bold, flavour-forward landing page for a neo-bistro and natural wine bar.',
  'project.dreamy-chaos.subtitle': 'Y2K Interactive Festival Experience',
  'project.dreamy-chaos.description':
    'An acid-pop, Y2K-flavoured interactive experience for a music festival.',
  'project.dang-studio.subtitle': 'Gen Z Anti-Corporate Social Agency',
  'project.dang-studio.description':
    'An anti-corporate site for a Gen Z social media agency that refuses to be boring.',
  'project.nexus-operations.subtitle': 'Industrial SaaS & KPI Dashboard',
  'project.nexus-operations.description':
    'An industrial ERP and KPI SaaS dashboard focused on dense, readable data.',

  // ---------- About / Story ----------
  'about.title': 'The story of',
  'about.lead':
    "Half fashion lover, half software engineer: two souls, one craft. This is how I went from Venezuela to writing Angular in Italy with a stylist's eye.",
  'about.alt':
    '{name} — full-body 3D avatar in a burgundy leather bomber, white tee, blue jeans and white sneakers',
  'story.origins.kicker': 'The Origins',
  'story.origins.title': 'Born in Venezuela, raised between three languages.',
  'story.origins.body':
    'I grew up in Venezuela, moved to Italy on my own in 2017 and spent a year in Dublin. Changing countries taught me to adapt fast, listen carefully and communicate with people from every background, in Italian, Spanish and English.',
  'story.origins.italy': 'Italy · 2017',
  'story.origins.dublin': 'Dublin',
  'story.design.kicker': 'The Design Eye',
  'story.design.title': 'Trained in fashion, fluent in visual language.',
  'story.design.body':
    'Before writing a single line of code, I studied Fashion Design in Bologna and Personal Styling/Shopping at Condé Nast College in Madrid. Composition, colour theory and trend analysis sharpened the eye I now bring to UI/UX.',
  'story.design.bologna': 'Bologna',
  'story.engineering.kicker': 'Engineering & Full-Stack',
  'story.engineering.title': 'From sketchbook to production code.',
  'story.engineering.body':
    'A post-diploma IFTS specialisation in Software Development at Cisita Parma turned me into an engineer, followed by 4 years at KEDOS srl building Angular front-ends backed by Java, SQL, AWS and Docker.',
  'story.ai.kicker': 'AI Workflow',
  'story.ai.title': 'Human taste, machine speed.',
  'story.ai.body':
    'Claude Code and Gemini are part of how I work: faster prototypes, sharper refactors and more time for the details that make an interface feel right.',
  'story.ai.assisted': 'AI-assisted dev',

  // ---------- Timeline ----------
  'timeline.title.pre': 'Experience &',
  'timeline.title.em': 'education',
  'timeline.kind.work': 'Work',
  'timeline.kind.education': 'Education',
  'timeline.present': 'Present',
  'exp.kedos-frontend.role': 'Frontend Developer',
  'exp.kedos-frontend.description':
    'Scalable Angular architectures, Figma-to-code delivery, B2B/ERP systems and DevOps on AWS & Docker.',
  'exp.kedos-junior.role': 'Junior Frontend Developer',
  'exp.kedos-junior.description':
    'From internship to full-time hire: HTML, CSS and Angular on production projects.',
  'exp.e-project.role': 'Junior Full-Stack Developer',
  'exp.e-project.description':
    'End-to-end internal web apps with ASP.NET and SQL, including PayPal integration.',
  'exp.cisita.role': 'IFTS — Software Engineering',
  'exp.cisita.description': 'Post-diploma specialisation in software development.',
  'exp.next-fashion.role': 'Fashion Design',
  'exp.next-fashion.description': 'Fashion design studies in Bologna.',
  'exp.conde-nast.role': 'Fashion Design',
  'exp.conde-nast.description': 'Fashion, personal shopping, styling and trend analysis.',
  'exp.seda.role': 'English Language',
  'exp.seda.description': 'A year abroad in Dublin.',
  'exp.pio-xii.role': 'Scientific High School Diploma',
  'exp.pio-xii.description': 'Scientific high school studies.',

  // ---------- Skills ----------
  'skills.title.pre': 'The ',
  'skills.title.em': 'tech & AI',
  'skills.title.post': ' stack.',
  'skills.lead': 'What I use day to day, from the first Figma frame to the deploy.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX & Design',
  'skills.group.backend': 'Backend & Data',
  'skills.group.ai-devops': 'AI & DevOps',
  'skill.colorTheory': 'Color Theory',
  'skill.trendAnalysis': 'Trend Analysis',

  // ---------- Contact ----------
  'contact.title.pre': "Let's build something ",
  'contact.title.highlight': 'bold.',
  'contact.lead':
    'Open to front-end and UX engineering roles, and to freelance web projects. Drop me a line, I reply fast.',
  'contact.email.label': 'Email',
  'contact.email.write': 'Write to me →',
  'contact.email.copy': 'Copy address',
  'contact.email.copied': 'Copied! ✓',
  'contact.linkedin.value': "Let's connect",
  'contact.linkedin.hint': 'Open profile ↗',
  'contact.cv.label': 'Résumé',
  'contact.cv.value': 'Download CV',
  'contact.cv.hint': '3 languages · PDF ↓',
  'cv.kicker': 'Résumé — PDF',
  'cv.title': 'Download my CV',
  'cv.lead': 'Same story, three languages. Pick the one that suits you.',
  'cv.current': 'Current language',
  'cv.close': 'Close',

  // ---------- Footer ----------
  'footer.signature': 'Designed & coded by {name}',
  'footer.rights': '© {year} {name}. All rights reserved.',
  'footer.top': 'Back to top ↑',
  'footer.legal': 'Privacy & Legal',

  // ---------- Off-Duty teaser (landing) ----------
  'teaser.title': 'Beyond the code.',
  'teaser.lead':
    "Outfits, a lo-fi loop and a two-voice interview: the side of me that doesn't fit in a CV.",
  'teaser.cta': 'Explore the Dual Soul Lab',

  // ---------- Ticker ----------
  'ticker.dualSoul': 'Fashion meets code',
  'ticker.angular': 'Angular & AI-assisted dev',
  'ticker.route': 'Venezuela → Ireland → Italy',

  // ---------- Off-Duty page ----------
  'offDuty.back': '← Back to portfolio',
  'offDuty.lead':
    'What I wear while I code, what plays in my headphones and an interview with the AI I build with every day.',
  'offDuty.jump.label': 'Page sections',
  'offDuty.jump.lookbook': 'Lookbook',
  'offDuty.jump.interview': 'Interview',
  'offDuty.jump.vibe': 'Vibe',

  'lookbook.title.pre': 'Seven outfits, ',
  'lookbook.title.em': 'one',
  'lookbook.title.post': ' mindset.',
  'lookbook.lead': "Every look comes with its own mode. Pick an outfit and see what I'm up to.",
  'lookbook.status': 'Status',
  'lookbook.pick': 'Choose an outfit',
  'lookbook.prev': 'Previous outfit',
  'lookbook.next': 'Next outfit',
  'lookbook.alt': '{name} — 3D avatar wearing {outfit}',

  'interview.title.pre': 'The ',
  'interview.title.em': 'double',
  'interview.title.post': ' interview.',
  'interview.lead': 'The AI asks, Valentina answers. No filters, no retakes.',
  'interview.ai': 'AI asks',
  'interview.me': 'Valentina',
  'interview.motto': 'Life motto',
  'interview.q1.question':
    'That lightbulb moment: when did you realise fashion and code could coexist?',
  'interview.q1.answer':
    "When I was studying programming, I felt my creativity was going to take a back seat... but once I started working I realised it's not just about writing code, it's about understanding the user and the experience. Studying fashion made that side of me impossible to switch off.",
  'interview.q2.question': 'Your biggest visual red flag?',
  'interview.q2.answer':
    "Outdated or sloppy aesthetics. It's 2026: let's use the tools to push creativity to the max!",
  'interview.q3.question': 'Your superpower on a project?',
  'interview.q3.answer':
    "I'm a born problem solver. I was born in Venezuela and at 17 I moved to another country on my own, with nothing: I had to learn to figure things out, no matter what. With calm and patience, everything works out.",
  'interview.q4.question': 'Your ideal desk setup?',
  'interview.q4.answer':
    "Super clean and organised. Water, phone, headphones, the task at hand and that's it. Zero distractions.",
  'interview.q5.question': 'Your perfect trio?',
  'interview.q5.answer': 'Coffee, Dark Mode and working at night.',
  'interview.q6.answer':
    "Live in the present, love what you do and be proud of how far you've come.",

  'vibe.title.pre': 'Current ',
  'vibe.title.em': 'obsessions.',
  'vibe.lead': 'The soundtrack and the little things fuelling this season.',
  'player.label': 'Now playing',
  'player.play': 'Play the loop',
  'player.pause': 'Pause the loop',
  'player.loop': '∞ loop',
  'player.note': 'Generated live in your browser with the Web Audio API. Loops forever.',
  'player.unsupported': 'Your browser does not support the Web Audio API.',
  'obsession.coffee': 'Matcha Latte & Espresso',
  'obsession.cats': 'AI Cat Videos',
  'obsession.vogue': 'Vintage Vogue Archives',

  // ---------- Legal ----------
  'legal.title': 'Privacy & Legal Notice',
  'legal.privacyTitle': '1. Privacy Policy',
  'legal.privacyBody':
    'This website is a personal portfolio. The only personal data processed is what you voluntarily send via email or contact forms for response purposes only.',
  'legal.cookieTitle': '2. Cookie Policy',
  'legal.cookieBody':
    'This site does NOT use tracking or third-party profiling cookies. It only uses essential technical storage for language preferences.',
  'legal.copyrightTitle': '3. Copyright & Intellectual Property',
  'legal.copyrightBody':
    'All content, source code, concepts, and showcase projects are exclusive property of Valentina Andrea Camejo (valentinacamejo.com).',
  'legal.close': 'Close',
};

export type TranslationKey = keyof typeof en;
type Dictionary = Record<TranslationKey, string>;

const it: Dictionary = {
  'nav.about': 'Chi sono',
  'nav.projects': 'Progetti',
  'nav.timeline': 'Percorso',
  'nav.skills': 'Skills & AI',
  'nav.contact': 'Contatti',
  'nav.label': 'Principale',
  'nav.menu': 'Menu',
  'nav.home': '{name} — home',
  'header.available': 'Disponibile',
  'lang.label': 'Lingua',

  'hero.statement.where': 'Dove la',
  'hero.statement.fashion': 'moda',
  'hero.statement.meets': 'incontra il',
  'hero.statement.code': 'codice.',
  'hero.proof':
    'Da quattro anni costruisco front-end Angular in produzione in KEDOS srl, con una formazione in fashion design tra Bologna e il Condé Nast College di Madrid.',
  'hero.cta.projects': 'Guarda i lavori',
  'hero.cta.contact': 'Contattami',
  'hero.sticker.angular': '[Angular · 4 anni in prod]',
  'hero.sticker.languages': '[{count} lingue]',
  'hero.sticker.ai': '[Workflow con AI]',
  'hero.alt':
    '{name} — avatar 3D con lunghi capelli mossi, occhiali neri e bomber in pelle bordeaux',

  'projects.title.pre': 'Cinque concept, cinque ',
  'projects.title.em': 'mondi',
  'projects.title.post': '.',
  'projects.lead':
    "Progetti personali: i brand sono inventati, il codice è vero e online su Vercel. Ognuno ha la sua art direction, dall'editoriale anni '90 alla dashboard SaaS industriale.",
  'projects.concept': 'Concept personale',
  'projects.look': 'Look {n} / {total}',
  'projects.palette': 'Palette',
  'projects.preview.alt': '{title}: screenshot della homepage',
  'projects.outro': 'Hai un brand che ha bisogno di un mondo tutto suo?',
  'projects.outro.cta': 'Parliamone →',
  'projects.card.live': 'Visita il sito ↗',
  'projects.card.newTab': '(si apre in una nuova scheda)',
  'project.office-99.subtitle': 'Showcase editoriale retrò per agenzia',
  'project.office-99.description':
    "Un'estetica da ufficio anni '90 reinterpretata in un'esperienza editoriale high-fashion.",
  'project.funky-vino.subtitle': 'Neo-bistrot & wine bar naturale',
  'project.funky-vino.description':
    'Una landing page audace e piena di gusto per un neo-bistrot e wine bar di vini naturali.',
  'project.dreamy-chaos.subtitle': 'Esperienza interattiva per festival Y2K',
  'project.dreamy-chaos.description':
    "Un'esperienza interattiva acid-pop dal sapore Y2K per un festival musicale.",
  'project.dang-studio.subtitle': 'Social agency Gen Z anti-corporate',
  'project.dang-studio.description':
    "Un sito anti-corporate per un'agenzia social Gen Z che si rifiuta di essere noiosa.",
  'project.nexus-operations.subtitle': 'Dashboard SaaS industriale & KPI',
  'project.nexus-operations.description':
    'Una dashboard SaaS industriale per ERP e KPI, pensata per dati densi ma leggibili.',

  'about.title': 'La storia di',
  'about.lead':
    "Metà amante della moda, metà ingegnera del software: due anime, un solo mestiere. Ecco come sono passata dal Venezuela a scrivere Angular in Italia con l'occhio di una stylist.",
  'about.alt':
    '{name} — avatar 3D a figura intera con bomber in pelle bordeaux, t-shirt bianca, jeans e sneakers bianche',
  'story.origins.kicker': 'Le origini',
  'story.origins.title': 'Nata in Venezuela, cresciuta tra tre lingue.',
  'story.origins.body':
    'Sono cresciuta in Venezuela, nel 2017 mi sono trasferita in Italia da sola e ho trascorso un anno a Dublino. Cambiare paese mi ha insegnato ad adattarmi in fretta, ad ascoltare con attenzione e a comunicare con persone di ogni provenienza, in italiano, spagnolo e inglese.',
  'story.origins.italy': 'Italia · 2017',
  'story.origins.dublin': 'Dublino',
  'story.design.kicker': "L'occhio del design",
  'story.design.title': 'Formata nella moda, fluente nel linguaggio visivo.',
  'story.design.body':
    "Prima di scrivere una sola riga di codice ho studiato Fashion Design a Bologna e Personal Styling/Shopping al Condé Nast College di Madrid. Composizione, teoria del colore e analisi dei trend hanno affinato l'occhio che oggi porto nella UI/UX.",
  'story.design.bologna': 'Bologna',
  'story.engineering.kicker': 'Ingegneria & Full-Stack',
  'story.engineering.title': 'Dallo sketchbook al codice in produzione.',
  'story.engineering.body':
    "Una specializzazione post-diploma IFTS in Sviluppo Software al Cisita Parma mi ha resa un'ingegnera, seguita da 4 anni in KEDOS srl a costruire front-end Angular supportati da Java, SQL, AWS e Docker.",
  'story.ai.kicker': "Workflow con l'AI",
  'story.ai.title': 'Gusto umano, velocità da macchina.',
  'story.ai.body':
    "Claude Code e Gemini fanno parte del mio modo di lavorare: prototipi più rapidi, refactoring più precisi e più tempo per i dettagli che rendono un'interfaccia davvero giusta.",
  'story.ai.assisted': 'Sviluppo assistito da AI',

  'timeline.title.pre': 'Esperienza e',
  'timeline.title.em': 'formazione',
  'timeline.kind.work': 'Lavoro',
  'timeline.kind.education': 'Formazione',
  'timeline.present': 'Oggi',
  'exp.kedos-frontend.role': 'Frontend Developer',
  'exp.kedos-frontend.description':
    'Architetture Angular scalabili, da Figma al codice, sistemi B2B/ERP e DevOps su AWS e Docker.',
  'exp.kedos-junior.role': 'Junior Frontend Developer',
  'exp.kedos-junior.description':
    "Dallo stage all'assunzione a tempo pieno: HTML, CSS e Angular su progetti in produzione.",
  'exp.e-project.role': 'Junior Full-Stack Developer',
  'exp.e-project.description':
    "Web app interne end-to-end con ASP.NET e SQL, inclusa l'integrazione con PayPal.",
  'exp.cisita.role': 'IFTS — Ingegneria del Software',
  'exp.cisita.description': 'Specializzazione post-diploma in sviluppo software.',
  'exp.next-fashion.role': 'Fashion Design',
  'exp.next-fashion.description': 'Studi di fashion design a Bologna.',
  'exp.conde-nast.role': 'Fashion Design',
  'exp.conde-nast.description': 'Moda, personal shopping, styling e analisi dei trend.',
  'exp.seda.role': 'Lingua inglese',
  'exp.seda.description': "Un anno all'estero a Dublino.",
  'exp.pio-xii.role': 'Diploma di Liceo Scientifico',
  'exp.pio-xii.description': 'Studi di liceo scientifico.',

  'skills.title.pre': 'Lo stack ',
  'skills.title.em': 'tech & AI',
  'skills.title.post': '.',
  'skills.lead': 'Quello che uso ogni giorno, dal primo frame in Figma al deploy.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX & Design',
  'skills.group.backend': 'Backend & Dati',
  'skills.group.ai-devops': 'AI & DevOps',
  'skill.colorTheory': 'Teoria del colore',
  'skill.trendAnalysis': 'Analisi dei trend',

  'contact.title.pre': 'Creiamo qualcosa di ',
  'contact.title.highlight': 'audace.',
  'contact.lead':
    'Aperta a ruoli da front-end e UX engineer e a progetti web freelance. Scrivimi: rispondo in fretta.',
  'contact.email.label': 'Email',
  'contact.email.write': 'Scrivimi →',
  'contact.email.copy': 'Copia indirizzo',
  'contact.email.copied': 'Copiata! ✓',
  'contact.linkedin.value': 'Connettiamoci',
  'contact.linkedin.hint': 'Apri il profilo ↗',
  'contact.cv.label': 'Curriculum',
  'contact.cv.value': 'Scarica il CV',
  'contact.cv.hint': '3 lingue · PDF ↓',
  'cv.kicker': 'Curriculum — PDF',
  'cv.title': 'Scarica il mio CV',
  'cv.lead': 'Stessa storia, tre lingue. Scegli quella che preferisci.',
  'cv.current': 'Lingua attuale',
  'cv.close': 'Chiudi',

  'footer.signature': 'Progettato e sviluppato da {name}',
  'footer.rights': '© {year} {name}. Tutti i diritti riservati.',
  'footer.top': 'Torna su ↑',
  'footer.legal': 'Privacy & Note Legali',

  // ---------- Off-Duty teaser (landing) ----------
  'teaser.title': 'Oltre il codice.',
  'teaser.lead':
    "Outfit, un loop lo-fi e un'intervista doppia: il lato di me che non entra in un CV.",
  'teaser.cta': 'Entra nel Dual Soul Lab',

  // ---------- Ticker ----------
  'ticker.dualSoul': 'La moda incontra il codice',
  'ticker.angular': 'Angular & sviluppo con AI',
  'ticker.route': 'Venezuela → Irlanda → Italia',

  // ---------- Off-Duty page ----------
  'offDuty.back': '← Torna al portfolio',
  'offDuty.lead':
    "Cosa indosso mentre programmo, cosa suona nelle mie cuffie e un'intervista con l'AI con cui costruisco ogni giorno.",
  'offDuty.jump.label': 'Sezioni della pagina',
  'offDuty.jump.lookbook': 'Lookbook',
  'offDuty.jump.interview': 'Intervista',
  'offDuty.jump.vibe': 'Vibe',

  'lookbook.title.pre': 'Sette outfit, ',
  'lookbook.title.em': 'un solo',
  'lookbook.title.post': ' mindset.',
  'lookbook.lead': 'Ogni look ha la sua modalità. Scegli un outfit e scopri cosa sto facendo.',
  'lookbook.status': 'Status',
  'lookbook.pick': 'Scegli un outfit',
  'lookbook.prev': 'Outfit precedente',
  'lookbook.next': 'Outfit successivo',
  'lookbook.alt': '{name} — avatar 3D con {outfit}',

  'interview.title.pre': "L'intervista ",
  'interview.title.em': 'doppia',
  'interview.title.post': '.',
  'interview.lead': "L'AI fa le domande, Valentina risponde. Senza filtri, senza seconde prove.",
  'interview.ai': "Chiede l'AI",
  'interview.me': 'Valentina',
  'interview.motto': 'Il motto',
  'interview.q1.question':
    'Il momento della rivelazione: quando hai capito che moda e codice potevano coesistere?',
  'interview.q1.answer':
    "Quando studiavo programmazione sentivo che la mia creatività sarebbe passata in secondo piano... ma quando ho iniziato a lavorare ho capito che non si tratta solo di scrivere codice, ma di capire l'utente e l'esperienza. Studiare fashion ha reso impossibile spegnere questo lato di me.",
  'interview.q2.question': 'La tua più grande red flag visiva?',
  'interview.q2.answer':
    "L'estetica datata o trascurata. Siamo nel 2026: usiamo gli strumenti per spingere la creatività al massimo!",
  'interview.q3.question': 'Il tuo superpotere in un progetto?',
  'interview.q3.answer':
    'Sono una problem solver nata. Sono nata in Venezuela e a 17 anni mi sono trasferita da sola in un altro paese, senza niente: ho dovuto imparare a risolvere, per forza. Con calma e pazienza si sistema tutto.',
  'interview.q4.question': 'La tua scrivania ideale?',
  'interview.q4.answer':
    'Super pulita e organizzata. Acqua, telefono, cuffie, la task del momento e basta. Zero distrazioni.',
  'interview.q5.question': 'La triade perfetta?',
  'interview.q5.answer': 'Caffè, Dark Mode e lavorare di notte.',
  'interview.q6.answer':
    'Vivi il presente, ama quello che fai e sii fiero di quanta strada hai fatto.',

  'vibe.title.pre': 'Ossessioni ',
  'vibe.title.em': 'del momento.',
  'vibe.lead': 'La colonna sonora e le piccole cose che alimentano questa stagione.',
  'player.label': 'In riproduzione',
  'player.play': 'Avvia il loop',
  'player.pause': 'Metti in pausa il loop',
  'player.loop': '∞ loop',
  'player.note': 'Generata dal vivo nel tuo browser con la Web Audio API. In loop infinito.',
  'player.unsupported': 'Il tuo browser non supporta la Web Audio API.',
  'obsession.coffee': 'Matcha Latte & Espresso',
  'obsession.cats': 'Video di gatti generati con AI',
  'obsession.vogue': 'Archivi vintage di Vogue',

  // ---------- Legal ----------
  'legal.title': 'Privacy & Note Legali',
  'legal.privacyTitle': '1. Privacy Policy',
  'legal.privacyBody':
    'Questo sito è un portfolio personale. Gli unici dati raccolti sono quelli inviati volontariamente via email o form di contatto per sole finalità di risposta.',
  'legal.cookieTitle': '2. Cookie Policy',
  'legal.cookieBody':
    'Questo sito NON utilizza cookie di profilazione o di tracciamento di terze parti. Utilizza solo una memorizzazione locale tecnica per la gestione delle preferenze di lingua.',
  'legal.copyrightTitle': '3. Copyright & Proprietà Intellettuale',
  'legal.copyrightBody':
    'Tutti i contenuti, il codice sorgente, i concept e i progetti mostrati sono di proprietà esclusiva di Valentina Andrea Camejo (valentinacamejo.com).',
  'legal.close': 'Chiudi',
};

/** Venezuelan Spanish: tú/ustedes, local vocabulary (pasantía, franela, lentes, vinotinto). */
const es: Dictionary = {
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.timeline': 'Trayectoria',
  'nav.skills': 'Skills & IA',
  'nav.contact': 'Contacto',
  'nav.label': 'Principal',
  'nav.menu': 'Menú',
  'nav.home': '{name} — inicio',
  'header.available': 'Disponible',
  'lang.label': 'Idioma',

  'hero.statement.where': 'Donde la',
  'hero.statement.fashion': 'moda',
  'hero.statement.meets': 'se une al',
  'hero.statement.code': 'código.',
  'hero.proof':
    'Cuatro años construyendo front-ends en Angular en producción en KEDOS srl, con formación en diseño de moda en Bolonia y en el Condé Nast College de Madrid.',
  'hero.cta.projects': 'Ver los trabajos',
  'hero.cta.contact': 'Escríbeme',
  'hero.sticker.angular': '[Angular · 4 años en prod]',
  'hero.sticker.languages': '[{count} idiomas]',
  'hero.sticker.ai': '[Flujo con IA]',
  'hero.alt':
    '{name} — avatar 3D con cabello largo ondulado, lentes negros y chaqueta bomber de cuero vinotinto',

  'projects.title.pre': 'Cinco conceptos, cinco ',
  'projects.title.em': 'mundos',
  'projects.title.post': '.',
  'projects.lead':
    'Proyectos personales: las marcas son inventadas, el código es real y está online en Vercel. Cada uno tiene su propia dirección de arte, del editorial noventero al dashboard SaaS industrial.',
  'projects.concept': 'Concepto personal',
  'projects.look': 'Look {n} / {total}',
  'projects.palette': 'Paleta',
  'projects.preview.alt': '{title}: captura de la página de inicio',
  'projects.outro': '¿Tienes una marca que necesita un mundo propio?',
  'projects.outro.cta': 'Hablemos →',
  'projects.card.live': 'Visita el sitio ↗',
  'projects.card.newTab': '(se abre en una pestaña nueva)',
  'project.office-99.subtitle': 'Showcase editorial retro para agencia',
  'project.office-99.description':
    'Una estética de oficina de finales de los 90 remezclada en una experiencia editorial de alta moda.',
  'project.funky-vino.subtitle': 'Neo-bistró y bar de vinos naturales',
  'project.funky-vino.description':
    'Una landing page atrevida y llena de sabor para un neo-bistró y bar de vinos naturales.',
  'project.dreamy-chaos.subtitle': 'Experiencia interactiva de festival Y2K',
  'project.dreamy-chaos.description':
    'Una experiencia interactiva acid-pop con sabor Y2K para un festival de música.',
  'project.dang-studio.subtitle': 'Agencia social Gen Z anti-corporativa',
  'project.dang-studio.description':
    'Un sitio anti-corporativo para una agencia de redes Gen Z que se niega a ser aburrida.',
  'project.nexus-operations.subtitle': 'Dashboard SaaS industrial y KPI',
  'project.nexus-operations.description':
    'Un dashboard SaaS industrial de ERP y KPI, enfocado en datos densos pero legibles.',

  'about.title': 'La historia de',
  'about.lead':
    'Mitad amante de la moda, mitad ingeniera de software: dos almas, un solo oficio. Así pasé de Venezuela a programar en Angular en Italia con ojo de estilista.',
  'about.alt':
    '{name} — avatar 3D de cuerpo entero con bomber de cuero vinotinto, franela blanca, blue jeans y zapatos deportivos blancos',
  'story.origins.kicker': 'Los orígenes',
  'story.origins.title': 'Nacida en Venezuela, criada entre tres idiomas.',
  'story.origins.body':
    'Crecí en Venezuela, me mudé sola a Italia en 2017 y pasé un año en Dublín. Cambiar de país me enseñó a adaptarme rápido, a escuchar con atención y a comunicarme con gente de todas partes, en italiano, español e inglés.',
  'story.origins.italy': 'Italia · 2017',
  'story.origins.dublin': 'Dublín',
  'story.design.kicker': 'El ojo para el diseño',
  'story.design.title': 'Formada en moda, experta en lenguaje visual.',
  'story.design.body':
    'Antes de escribir una sola línea de código, estudié Diseño de Moda en Bolonia y Personal Styling/Shopping en el Condé Nast College de Madrid. La composición, la teoría del color y el análisis de tendencias afinaron el ojo que hoy llevo a la UI/UX.',
  'story.design.bologna': 'Bolonia',
  'story.engineering.kicker': 'Ingeniería y Full-Stack',
  'story.engineering.title': 'Del cuaderno de bocetos al código en producción.',
  'story.engineering.body':
    'Una especialización post-bachillerato IFTS en Desarrollo de Software en Cisita Parma me convirtió en ingeniera, seguida de 4 años en KEDOS srl construyendo front-ends en Angular con Java, SQL, AWS y Docker.',
  'story.ai.kicker': 'Flujo de trabajo con IA',
  'story.ai.title': 'Gusto humano, velocidad de máquina.',
  'story.ai.body':
    'Claude Code y Gemini forman parte de mi forma de trabajar: prototipos más rápidos, refactors más precisos y más tiempo para los detalles que hacen que una interfaz se sienta perfecta.',
  'story.ai.assisted': 'Desarrollo asistido por IA',

  'timeline.title.pre': 'Experiencia y',
  'timeline.title.em': 'formación',
  'timeline.kind.work': 'Trabajo',
  'timeline.kind.education': 'Formación',
  'timeline.present': 'Presente',
  'exp.kedos-frontend.role': 'Desarrolladora Frontend',
  'exp.kedos-frontend.description':
    'Arquitecturas Angular escalables, de Figma a código, sistemas B2B/ERP y DevOps en AWS y Docker.',
  'exp.kedos-junior.role': 'Desarrolladora Frontend Junior',
  'exp.kedos-junior.description':
    'De pasantía a contratación a tiempo completo: HTML, CSS y Angular en proyectos en producción.',
  'exp.e-project.role': 'Desarrolladora Full-Stack Junior',
  'exp.e-project.description':
    'Aplicaciones web internas de punta a punta con ASP.NET y SQL, incluida la integración con PayPal.',
  'exp.cisita.role': 'IFTS — Ingeniería de Software',
  'exp.cisita.description': 'Especialización post-bachillerato en desarrollo de software.',
  'exp.next-fashion.role': 'Diseño de Moda',
  'exp.next-fashion.description': 'Estudios de diseño de moda en Bolonia.',
  'exp.conde-nast.role': 'Diseño de Moda',
  'exp.conde-nast.description': 'Moda, personal shopping, styling y análisis de tendencias.',
  'exp.seda.role': 'Idioma inglés',
  'exp.seda.description': 'Un año en el exterior, en Dublín.',
  'exp.pio-xii.role': 'Bachillerato en Ciencias',
  'exp.pio-xii.description': 'Estudios de bachillerato en ciencias.',

  'skills.title.pre': 'El stack ',
  'skills.title.em': 'tech & IA',
  'skills.title.post': '.',
  'skills.lead': 'Lo que uso cada día, del primer frame en Figma al deploy.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX y Diseño',
  'skills.group.backend': 'Backend y Datos',
  'skills.group.ai-devops': 'IA y DevOps',
  'skill.colorTheory': 'Teoría del color',
  'skill.trendAnalysis': 'Análisis de tendencias',

  'contact.title.pre': 'Creemos algo ',
  'contact.title.highlight': 'atrevido.',
  'contact.lead':
    'Abierta a puestos de front-end y UX engineering, y a proyectos web freelance. Escríbeme, respondo rapidito.',
  'contact.email.label': 'Correo',
  'contact.email.write': 'Escríbeme →',
  'contact.email.copy': 'Copiar dirección',
  'contact.email.copied': '¡Copiado! ✓',
  'contact.linkedin.value': 'Conectemos',
  'contact.linkedin.hint': 'Abrir perfil ↗',
  'contact.cv.label': 'Currículum',
  'contact.cv.value': 'Descargar CV',
  'contact.cv.hint': '3 idiomas · PDF ↓',
  'cv.kicker': 'Currículum — PDF',
  'cv.title': 'Descarga mi CV',
  'cv.lead': 'La misma historia, en tres idiomas. Elige el que prefieras.',
  'cv.current': 'Idioma actual',
  'cv.close': 'Cerrar',

  'footer.signature': 'Diseñado y programado por {name}',
  'footer.rights': '© {year} {name}. Todos los derechos reservados.',
  'footer.top': 'Volver arriba ↑',
  'footer.legal': 'Privacidad y Aviso Legal',

  // ---------- Off-Duty teaser (landing) ----------
  'teaser.title': 'Más allá del código.',
  'teaser.lead':
    'Outfits, un loop lo-fi y una entrevista doble: el lado de mí que no cabe en un CV.',
  'teaser.cta': 'Entra al Dual Soul Lab',

  // ---------- Ticker ----------
  'ticker.dualSoul': 'La moda se une al código',
  'ticker.angular': 'Angular y desarrollo con IA',
  'ticker.route': 'Venezuela → Irlanda → Italia',

  // ---------- Off-Duty page ----------
  'offDuty.back': '← Volver al portfolio',
  'offDuty.lead':
    'Lo que me pongo mientras programo, lo que suena en mis audífonos y una entrevista con la IA con la que construyo todos los días.',
  'offDuty.jump.label': 'Secciones de la página',
  'offDuty.jump.lookbook': 'Lookbook',
  'offDuty.jump.interview': 'Entrevista',
  'offDuty.jump.vibe': 'Vibe',

  'lookbook.title.pre': 'Siete outfits, ',
  'lookbook.title.em': 'un solo',
  'lookbook.title.post': ' mindset.',
  'lookbook.lead': 'Cada look tiene su propio modo. Elige un outfit y descubre en qué ando.',
  'lookbook.status': 'Status',
  'lookbook.pick': 'Elige un outfit',
  'lookbook.prev': 'Outfit anterior',
  'lookbook.next': 'Outfit siguiente',
  'lookbook.alt': '{name} — avatar 3D con {outfit}',

  'interview.title.pre': 'La entrevista ',
  'interview.title.em': 'doble',
  'interview.title.post': '.',
  'interview.lead': 'La IA pregunta, Valentina responde. Sin filtros, sin repetir tomas.',
  'interview.ai': 'Pregunta la IA',
  'interview.me': 'Valentina',
  'interview.motto': 'El lema',
  'interview.q1.question':
    'Ese momento de revelación: ¿cuándo entendiste que la moda y el código podían coexistir?',
  'interview.q1.answer':
    'Cuando estaba estudiando programación, sentía que mi creatividad iba a quedar en segundo plano... pero al empezar a trabajar entendí que no se trata solo de escribir código, sino de entender al usuario y la experiencia. Estudiar fashion hizo que esta faceta fuera imposible de apagar.',
  'interview.q2.question': '¿Tu mayor red flag visual?',
  'interview.q2.answer':
    'La estética anticuada o descuidada. ¡Estamos en el 2026, usemos las herramientas para explotar la creatividad al máximo!',
  'interview.q3.question': '¿Tu superpower en un proyecto?',
  'interview.q3.answer':
    'Soy problem solver nata. Nací en Venezuela y a los 17 me mudé sola a otro país sin nada: me tocó aprender a resolver sí o sí. Con calma y paciencia todo se arregla.',
  'interview.q4.question': '¿Tu mesa de trabajo ideal?',
  'interview.q4.answer':
    'Súper limpio y organizado. Agua, teléfono, audífonos, tarea y ya. Cero distracciones.',
  'interview.q5.question': '¿Tríada perfecta?',
  'interview.q5.answer': 'Café, Dark Mode y trabajar de noche.',
  'interview.q6.answer':
    'Vive el presente, ama lo que haces y siéntete orgulloso de hasta dónde has llegado.',

  'vibe.title.pre': 'Obsesiones ',
  'vibe.title.em': 'del momento.',
  'vibe.lead': 'El soundtrack y las cositas que alimentan esta temporada.',
  'player.label': 'Sonando ahora',
  'player.play': 'Reproducir el loop',
  'player.pause': 'Pausar el loop',
  'player.loop': '∞ loop',
  'player.note': 'Generada en vivo en tu navegador con la Web Audio API. En loop infinito.',
  'player.unsupported': 'Tu navegador no soporta la Web Audio API.',
  'obsession.coffee': 'Matcha Latte & Espresso',
  'obsession.cats': 'Videos de gatos hechos con IA',
  'obsession.vogue': 'Archivos vintage de Vogue',

  // ---------- Legal ----------
  'legal.title': 'Privacidad y Aviso Legal',
  'legal.privacyTitle': '1. Política de Privacidad',
  'legal.privacyBody':
    'Este sitio es un portfolio personal. Los únicos datos recopilados son los enviados voluntariamente por correo o formulario para el único propósito de responder.',
  'legal.cookieTitle': '2. Política de Cookies',
  'legal.cookieBody':
    'Este sitio NO utiliza cookies de rastreo ni de terceros. Solo utiliza almacenamiento local técnico esencial para la preferencia de idioma.',
  'legal.copyrightTitle': '3. Copyright y Propiedad Intelectual',
  'legal.copyrightBody':
    'Todos los contenidos, código fuente, conceptos y proyectos mostrados son propiedad exclusiva de Valentina Andrea Camejo (valentinacamejo.com).',
  'legal.close': 'Cerrar',
};

export const TRANSLATIONS: Record<Language, Dictionary> = { it, es, en };
