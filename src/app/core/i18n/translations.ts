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
  'hero.tag': 'Front-end Developer & UI/UX Design Enthusiast',
  'hero.hello': "Hi, I'm",
  'hero.title.pre': 'The',
  'hero.title.outline': 'Dual Soul:',
  'hero.title.where': 'where',
  'hero.title.fashion': 'fashion',
  'hero.title.meets': 'meets',
  'hero.title.code': 'code.',
  'hero.sub':
    'Front-end Developer & UX Engineer blending Italian & Venezuelan roots with a fashion-forward design eye.',
  'hero.lead':
    'Shaping digital experiences with a sharp design eye and rock-solid engineering. From Venezuela to Italy & Dublin, building the web of 2026.',
  'hero.cta.projects': 'Explore projects',
  'hero.cta.contact': 'Get in touch',
  'hero.sticker.age': '[{age} years old]',
  'hero.sticker.languages': '[{count} languages]',
  'hero.sticker.ai': '[AI-powered dev]',
  'hero.alt':
    '{name} — 3D avatar portrait with long wavy hair, black glasses and a burgundy leather bomber jacket',

  // ---------- Projects ----------
  'projects.index': '(01) — Projects Directory',
  'projects.title.pre': 'Selected ',
  'projects.title.em': 'work',
  'projects.title.post': ', loud by design.',
  'projects.lead':
    'Five projects, five personalities: from high-fashion editorial to industrial SaaS dashboards. Filter by category and hover the cards to play.',
  'projects.filter.label': 'Filter projects by category',
  'projects.filter.all': 'All',
  'projects.comingSoon': '[Next project coming soon...]',
  'projects.comingSoon.cta': 'Could it be yours? →',
  'projects.card.live': 'Visit site ↗',
  'projects.card.newTab': '(opens in a new tab)',
  'projects.card.soon': 'Case study soon',
  'category.web-app': 'Web App',
  'category.editorial': 'Editorial',
  'category.landing': 'Landing Page',
  'category.interactive': 'Interactive',
  'category.dashboard': 'Dashboard',
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
  'about.index': '(02) — About & Story',
  'about.title': 'The story of',
  'about.lead':
    "Half fashion lover, half software engineer: two souls, one craft. Here's how {name} went from Venezuela to writing Angular in Italy with a stylist's eye.",
  'about.alt':
    '{name} — full-body 3D avatar in a burgundy leather bomber, white tee, blue jeans and white sneakers',
  'story.origins.kicker': 'The Origins',
  'story.origins.title': 'Born in Venezuela, raised between three languages.',
  'story.origins.body':
    'Valentina Andrea Camejo grew up in Venezuela, moved to Italy in 2017 and spent a year in Dublin. Switching countries taught her to adapt fast, listen carefully and communicate with people from every background — in Italian, Spanish and English.',
  'story.origins.italy': 'Italy · 2017',
  'story.origins.dublin': 'Dublin',
  'story.design.kicker': 'The Design Eye',
  'story.design.title': 'Trained in fashion, fluent in visual language.',
  'story.design.body':
    'Before writing a single line of code, Valentina Camejo studied Fashion Design in Bologna and Personal Styling/Shopping at Condé Nast College in Madrid. Composition, colour theory and trend analysis sharpened an aesthetic sensibility she now translates into high-end UI/UX.',
  'story.design.bologna': 'Bologna',
  'story.engineering.kicker': 'Engineering & Full-Stack',
  'story.engineering.title': 'From sketchbook to production code.',
  'story.engineering.body':
    'A post-diploma IFTS specialisation in Software Development at Cisita Parma turned Valentina Andrea Camejo into an engineer, followed by 4 years in the field at KEDOS srl building Angular front-ends backed by Java, SQL, AWS and Docker.',
  'story.ai.kicker': 'AI Workflow',
  'story.ai.title': 'Human taste, machine speed.',
  'story.ai.body':
    "AI tools like Claude Code and Gemini are built into Valentina Camejo's workflow: faster prototyping, sharper refactors and more time spent on the details that make an interface feel right.",
  'story.ai.assisted': 'AI-assisted dev',

  // ---------- Timeline ----------
  'timeline.index': '(03) — Timeline',
  'timeline.title.pre': 'Experience &',
  'timeline.title.em': 'education',
  'timeline.filter.label': 'Filter timeline',
  'timeline.filter.all': 'All',
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
  'skills.index': '(04) — Skills & AI',
  'skills.title.pre': 'The ',
  'skills.title.em': 'tech & AI',
  'skills.title.post': ' stack.',
  'skills.lead': '{count} tools across design, engineering and AI. Hover a block to spotlight it.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX & Design',
  'skills.group.backend': 'Backend & Data',
  'skills.group.ai-devops': 'AI & DevOps',
  'skill.colorTheory': 'Color Theory',
  'skill.trendAnalysis': 'Trend Analysis',

  // ---------- Contact ----------
  'contact.index': '(05) — Contact',
  'contact.title.pre': "Let's build something ",
  'contact.title.highlight': 'bold.',
  'contact.lead':
    'Open to front-end, UX engineering and creative web projects. Drop me a line. I reply fast.',
  'contact.email.label': 'Email',
  'contact.email.copy': 'Click to copy',
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
  'footer.signature': 'Designed & coded with 🖤 by {name}',
  'footer.rights': '© {year} {name}. All rights reserved.',
  'footer.top': 'Back to top ↑',
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

  'hero.tag': 'Front-end Developer & appassionata di UI/UX Design',
  'hero.hello': 'Ciao, sono',
  'hero.title.pre': 'La',
  'hero.title.outline': 'Doppia Anima:',
  'hero.title.where': 'dove la',
  'hero.title.fashion': 'moda',
  'hero.title.meets': 'incontra il',
  'hero.title.code': 'codice.',
  'hero.sub':
    "Front-end Developer & UX Engineer che unisce radici italiane e venezuelane a un occhio per il design ispirato alla moda.",
  'hero.lead':
    "Creo esperienze digitali con un occhio attento al design e un'ingegneria solida. Dal Venezuela all'Italia e a Dublino, costruisco il web del 2026.",
  'hero.cta.projects': 'Scopri i progetti',
  'hero.cta.contact': 'Contattami',
  'hero.sticker.age': '[{age} anni]',
  'hero.sticker.languages': '[{count} lingue]',
  'hero.sticker.ai': '[Dev con AI]',
  'hero.alt':
    '{name} — avatar 3D con lunghi capelli mossi, occhiali neri e bomber in pelle bordeaux',

  'projects.index': '(01) — Progetti',
  'projects.title.pre': 'Lavori ',
  'projects.title.em': 'selezionati',
  'projects.title.post': ', audaci per natura.',
  'projects.lead':
    "Cinque progetti, cinque personalità: dall'editoriale high-fashion alle dashboard SaaS industriali. Filtra per categoria e passa sopra le card per giocare.",
  'projects.filter.label': 'Filtra i progetti per categoria',
  'projects.filter.all': 'Tutti',
  'projects.comingSoon': '[Prossimo progetto in arrivo...]',
  'projects.comingSoon.cta': 'Potrebbe essere il tuo? →',
  'projects.card.live': 'Visita il sito ↗',
  'projects.card.newTab': '(si apre in una nuova scheda)',
  'projects.card.soon': 'Case study in arrivo',
  'category.web-app': 'Web App',
  'category.editorial': 'Editoriale',
  'category.landing': 'Landing Page',
  'category.interactive': 'Interattivo',
  'category.dashboard': 'Dashboard',
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

  'about.index': '(02) — Chi sono & Storia',
  'about.title': 'La storia di',
  'about.lead':
    "Metà amante della moda, metà ingegnera del software: due anime, un solo mestiere. Ecco come {name} è passata dal Venezuela a scrivere Angular in Italia con l'occhio di una stylist.",
  'about.alt':
    '{name} — avatar 3D a figura intera con bomber in pelle bordeaux, t-shirt bianca, jeans e sneakers bianche',
  'story.origins.kicker': 'Le origini',
  'story.origins.title': 'Nata in Venezuela, cresciuta tra tre lingue.',
  'story.origins.body':
    "Valentina Andrea Camejo è cresciuta in Venezuela, nel 2017 si è trasferita in Italia e ha trascorso un anno a Dublino. Cambiare paese le ha insegnato ad adattarsi in fretta, ad ascoltare con attenzione e a comunicare con persone di ogni provenienza — in italiano, spagnolo e inglese.",
  'story.origins.italy': 'Italia · 2017',
  'story.origins.dublin': 'Dublino',
  'story.design.kicker': "L'occhio del design",
  'story.design.title': 'Formata nella moda, fluente nel linguaggio visivo.',
  'story.design.body':
    'Prima di scrivere una sola riga di codice, Valentina Camejo ha studiato Fashion Design a Bologna e Personal Styling/Shopping al Condé Nast College di Madrid. Composizione, teoria del colore e analisi dei trend hanno affinato una sensibilità estetica che oggi traduce in UI/UX di alto livello.',
  'story.design.bologna': 'Bologna',
  'story.engineering.kicker': 'Ingegneria & Full-Stack',
  'story.engineering.title': 'Dallo sketchbook al codice in produzione.',
  'story.engineering.body':
    "Una specializzazione post-diploma IFTS in Sviluppo Software al Cisita Parma ha trasformato Valentina, seguita da 4 anni sul campo in KEDOS srl a costruire front-end Angular supportati da Java, SQL, AWS e Docker.",
  'story.ai.kicker': "Workflow con l'AI",
  'story.ai.title': 'Gusto umano, velocità da macchina.',
  'story.ai.body':
    "Strumenti di AI come Claude Code e Gemini fanno parte del workflow di Valentina Camejo: prototipazione più rapida, refactoring più precisi e più tempo per i dettagli che rendono un'interfaccia davvero giusta.",
  'story.ai.assisted': 'Sviluppo assistito da AI',

  'timeline.index': '(03) — Percorso',
  'timeline.title.pre': 'Esperienza e',
  'timeline.title.em': 'formazione',
  'timeline.filter.label': 'Filtra il percorso',
  'timeline.filter.all': 'Tutto',
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

  'skills.index': '(04) — Skills & AI',
  'skills.title.pre': 'Lo stack ',
  'skills.title.em': 'tech & AI',
  'skills.title.post': '.',
  'skills.lead':
    '{count} strumenti tra design, ingegneria e AI. Passa sopra un blocco per metterlo in evidenza.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX & Design',
  'skills.group.backend': 'Backend & Dati',
  'skills.group.ai-devops': 'AI & DevOps',
  'skill.colorTheory': 'Teoria del colore',
  'skill.trendAnalysis': 'Analisi dei trend',

  'contact.index': '(05) — Contatti',
  'contact.title.pre': 'Creiamo qualcosa di ',
  'contact.title.highlight': 'audace.',
  'contact.lead':
    'Scrivimi: rispondo in fretta.',
  'contact.email.label': 'Email',
  'contact.email.copy': 'Clicca per copiare',
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

  'footer.signature': 'Progettato e sviluppato con 🖤 da {name}',
  'footer.rights': '© {year} {name}. Tutti i diritti riservati.',
  'footer.top': 'Torna su ↑',
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

  'hero.tag': 'Front-end Developer & apasionada del diseño UI/UX',
  'hero.hello': 'Hola, soy',
  'hero.title.pre': 'El',
  'hero.title.outline': 'Alma Dual:',
  'hero.title.where': 'donde la',
  'hero.title.fashion': 'moda',
  'hero.title.meets': 'se une al',
  'hero.title.code': 'código.',
  'hero.sub':
    'Front-end Developer & UX Engineer que combina raíces italianas y venezolanas con un ojo para el diseño inspirado en la moda.',
  'hero.lead':
    'Creo experiencias digitales con buen ojo para el diseño e ingeniería sólida. De Venezuela a Italia y Dublín, construyendo la web de 2026.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.contact': 'Escríbeme',
  'hero.sticker.age': '[{age} años]',
  'hero.sticker.languages': '[{count} idiomas]',
  'hero.sticker.ai': '[Dev con IA]',
  'hero.alt':
    '{name} — avatar 3D con cabello largo ondulado, lentes negros y chaqueta bomber de cuero vinotinto',

  'projects.index': '(01) — Proyectos',
  'projects.title.pre': 'Trabajos ',
  'projects.title.em': 'elegidos',
  'projects.title.post': ', atrevidos por diseño.',
  'projects.lead':
    'Cinco proyectos, cinco personalidades: del editorial de alta moda a dashboards SaaS industriales. Filtra por categoría y pasa el cursor por las tarjetas para jugar.',
  'projects.filter.label': 'Filtrar proyectos por categoría',
  'projects.filter.all': 'Todos',
  'projects.comingSoon': '[Próximo proyecto muy pronto...]',
  'projects.comingSoon.cta': '¿Será el tuyo? →',
  'projects.card.live': 'Visita el sitio ↗',
  'projects.card.newTab': '(se abre en una pestaña nueva)',
  'projects.card.soon': 'Caso de estudio pronto',
  'category.web-app': 'App Web',
  'category.editorial': 'Editorial',
  'category.landing': 'Landing Page',
  'category.interactive': 'Interactivo',
  'category.dashboard': 'Dashboard',
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

  'about.index': '(02) — Sobre mí & Historia',
  'about.title': 'La historia de',
  'about.lead':
    'Mitad amante de la moda, mitad ingeniera de software: dos almas, un solo oficio. Así es como {name} pasó de Venezuela a programar en Angular en Italia con ojo de estilista.',
  'about.alt':
    '{name} — avatar 3D de cuerpo entero con bomber de cuero vinotinto, franela blanca, blue jeans y zapatos deportivos blancos',
  'story.origins.kicker': 'Los orígenes',
  'story.origins.title': 'Nacida en Venezuela, criada entre tres idiomas.',
  'story.origins.body':
    'Valentina Andrea Camejo creció en Venezuela, se mudó a Italia en 2017 y pasó un año en Dublín. Cambiar de país le enseñó a adaptarse rápido, a escuchar con atención y a comunicarse con gente de todas partes — en italiano, español e inglés.',
  'story.origins.italy': 'Italia · 2017',
  'story.origins.dublin': 'Dublín',
  'story.design.kicker': 'El ojo para el diseño',
  'story.design.title': 'Formada en moda, experta en lenguaje visual.',
  'story.design.body':
    'Antes de escribir una sola línea de código, Valentina Camejo estudió Diseño de Moda en Bolonia y Personal Styling/Shopping en el Condé Nast College de Madrid. La composición, la teoría del color y el análisis de tendencias afinaron una sensibilidad estética que hoy traduce en UI/UX de alto nivel.',
  'story.design.bologna': 'Bolonia',
  'story.engineering.kicker': 'Ingeniería y Full-Stack',
  'story.engineering.title': 'Del cuaderno de bocetos al código en producción.',
  'story.engineering.body':
    'Una especialización post-bachillerato IFTS en Desarrollo de Software en Cisita Parma convirtió a Valentina Andrea Camejo en ingeniera, seguida de 4 años en el campo en KEDOS srl construyendo front-ends en Angular con Java, SQL, AWS y Docker.',
  'story.ai.kicker': 'Flujo de trabajo con IA',
  'story.ai.title': 'Gusto humano, velocidad de máquina.',
  'story.ai.body':
    'Herramientas de IA como Claude Code y Gemini forman parte del flujo de trabajo de Valentina Camejo: prototipos más rápidos, refactors más precisos y más tiempo para los detalles que hacen que una interfaz se sienta perfecta.',
  'story.ai.assisted': 'Desarrollo asistido por IA',

  'timeline.index': '(03) — Trayectoria',
  'timeline.title.pre': 'Experiencia y',
  'timeline.title.em': 'formación',
  'timeline.filter.label': 'Filtrar trayectoria',
  'timeline.filter.all': 'Todo',
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

  'skills.index': '(04) — Skills & IA',
  'skills.title.pre': 'El stack ',
  'skills.title.em': 'tech & IA',
  'skills.title.post': '.',
  'skills.lead':
    '{count} herramientas entre diseño, ingeniería e IA. Pasa el cursor por un bloque para destacarlo.',
  'skills.group.frontend': 'Frontend',
  'skills.group.design': 'UI/UX y Diseño',
  'skills.group.backend': 'Backend y Datos',
  'skills.group.ai-devops': 'IA y DevOps',
  'skill.colorTheory': 'Teoría del color',
  'skill.trendAnalysis': 'Análisis de tendencias',

  'contact.index': '(05) — Contacto',
  'contact.title.pre': 'Creemos algo ',
  'contact.title.highlight': 'atrevido.',
  'contact.lead':
    'Escríbeme, respondo rapidito.',
  'contact.email.label': 'Correo',
  'contact.email.copy': 'Haz clic para copiar',
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

  'footer.signature': 'Diseñado y programado con 🖤 por {name}',
  'footer.rights': '© {year} {name}. Todos los derechos reservados.',
  'footer.top': 'Volver arriba ↑',
};

export const TRANSLATIONS: Record<Language, Dictionary> = { it, es, en };
