/* ==========================================================================
   DIGITAL DUNE — App
   i18n (EN / FR / AR with RTL), icon set, nav + footer injection,
   scroll reveal, portfolio filtering, contact form, mobile menu.
   ========================================================================== */

import emailjs from '@emailjs/browser';

/* ---------- CONFIG: EmailJS ----------
   Replace the values below with your EmailJS credentials.
   Get them at https://dashboard.emailjs.com
   - PUBLIC_KEY:  Account → API Keys → Public Key
   - SERVICE_ID:  Email Services → (your service) → Service ID
   - TEMPLATE_ID: Email Templates → (your template) → Template ID
   ===================================== */
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'fqk42Y4GFAztTzCjR',
  SERVICE_ID: 'service_9xsefvm',
  TEMPLATE_ID: 'template_wa9jawl',
};
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

/* ---------- Icon set ---------- */
const ICONS = {
  dune: '<svg viewBox="0 0 32 32" fill="none"><path d="M2 28 Q8 8 16 16 Q24 24 30 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M2 28 Q12 14 18 20 Q24 26 30 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 8h20"/><circle cx="5" cy="5.5" r=".5" fill="currentColor" stroke="none"/><circle cx="7.5" cy="5.5" r=".5" fill="currentColor" stroke="none"/></svg>',
  mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M10.5 18h3"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
  ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/><circle cx="12" cy="12" r="2"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21 7 19l11-11-3-3L5 17l-2 4Z"/><path d="M15 7l3-3 2 2-3 3"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5 4.5 4.5 0 0 1 17.5 19H6Z"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5a4 4 0 0 1 4 4l-5 5a4 4 0 0 1-4-4 4 4 0 0 0-4 4l-3 3"/><path d="M12 12 9 9"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h3l2 5-2.3 1.4a11 11 0 0 0 4.9 4.9L13 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-6 8-12a8 8 0 1 0-16 0c0 6 8 12 8 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.2 1.4-1.2h1.5V5.6c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2v2.6H7v2.8h2.8V21h3.7Z"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-8-5.5-8-10a5.5 5.5 0 0 1 9.5-3.5A5.5 5.5 0 0 1 20 11c0 4.5-8 10-8 10Z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83"/></svg>',
};

/* ---------- Navbar HTML ---------- */
function renderNavbar(currentPage) {
  const lang = getCurrentLang();
  const t = translations[lang].nav;
  return `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar-inner">
        <a href="/" class="navbar-logo" aria-label="Digital Dune home">
          ${ICONS.dune}
          <span class="gradient-text">Digital Dune</span>
        </a>
        <div class="nav-links">
          <a href="/" class="${currentPage === 'home' ? 'active' : ''}" data-i18n="nav.home">${t.home}</a>
          <a href="/services.html" class="${currentPage === 'services' ? 'active' : ''}" data-i18n="nav.services">${t.services}</a>
          <a href="/portfolio.html" class="${currentPage === 'portfolio' ? 'active' : ''}" data-i18n="nav.portfolio">${t.portfolio}</a>
          <a href="/about.html" class="${currentPage === 'about' ? 'active' : ''}" data-i18n="nav.about">${t.about}</a>
          <a href="/contact.html" class="${currentPage === 'contact' ? 'active' : ''}" data-i18n="nav.contact">${t.contact}</a>
        </div>
        <div class="nav-right">
          <div class="lang-switcher" role="group" aria-label="Language switcher">
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="fr">FR</button>
            <button class="lang-btn" data-lang="ar">AR</button>
          </div>
          <a href="/contact.html" class="btn btn-primary" data-i18n="nav.cta">${t.cta}</a>
          <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-nav" role="navigation" aria-label="Mobile navigation">
      <a href="/" data-i18n="nav.home">${t.home}</a>
      <a href="/services.html" data-i18n="nav.services">${t.services}</a>
      <a href="/portfolio.html" data-i18n="nav.portfolio">${t.portfolio}</a>
      <a href="/about.html" data-i18n="nav.about">${t.about}</a>
      <a href="/contact.html" data-i18n="nav.contact">${t.contact}</a>
      <a href="/contact.html" class="btn btn-primary" data-i18n="nav.cta">${t.cta}</a>
    </div>
  `;
}

/* ---------- Footer HTML ---------- */
function renderFooter() {
  const lang = getCurrentLang();
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const svc = translations[lang].services.list;
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="navbar-logo">
              ${ICONS.dune}
              <span>Digital Dune</span>
            </a>
            <p>${t.tagline}</p>
          </div>
          <div>
            <h4>${t.linksTitle}</h4>
            <div class="footer-links">
              <a href="/">${nav.home}</a>
              <a href="/services.html">${nav.services}</a>
              <a href="/portfolio.html">${nav.portfolio}</a>
              <a href="/about.html">${nav.about}</a>
              <a href="/contact.html">${nav.contact}</a>
            </div>
          </div>
          <div>
            <h4>${t.servicesTitle}</h4>
            <div class="footer-links">
              ${svc.slice(0, 4).map(s => `<a href="/services.html#${s.id}">${s.title}</a>`).join('')}
            </div>
          </div>
          <div>
            <h4>${t.contactTitle}</h4>
            <div class="footer-contact">
              <p>${ICONS.email} contact@digitaldune.mr</p>
              <p>${ICONS.phone} +222 00 00 00 00</p>
              <p>${ICONS.pin} Nouakchott, Mauritania</p>
            </div>
            <h4 style="margin-top:var(--space-xl)">${t.langTitle}</h4>
            <div class="lang-switcher" role="group" aria-label="Language switcher">
              <button class="lang-btn" data-lang="en">EN</button>
              <button class="lang-btn" data-lang="fr">FR</button>
              <button class="lang-btn" data-lang="ar">AR</button>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>${t.rights}</span>
          <span class="footer-bottom-made">
            ${ICONS.heart} ${t.madeIn}
          </span>
        </div>
      </div>
    </footer>
  `;
}

/* ---------- Translations ---------- */
const translations = {};

translations.en = {
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Work',
    about: 'About',
    contact: 'Contact',
    cta: 'Start a project'
  },
  footer: {
    tagline: 'Digital Dune is a software agency based in Nouakchott, building web, mobile, SaaS and AI products for clients across the region and beyond.',
    linksTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    langTitle: 'Language',
    rights: '\u00a9 2026 Digital Dune. All rights reserved.',
    madeIn: 'Designed & built in Nouakchott, Mauritania.'
  },
  home: {
    hero: {
      eyebrow: 'Software agency \u2014 Nouakchott, Mauritania',
      title: 'Software, built in layers.',
      lead: 'A Nouakchott-based agency designing web platforms, mobile apps, SaaS products and AI agents for businesses ready to grow.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See our work'
    },
    strata: {
      eyebrow: 'How we build',
      title: 'Built in four layers.',
      lead: 'Every product we ship rests on the same stack \u2014 from the infrastructure that keeps it running to the interface people actually touch.',
      layers: [
        { index: 'Layer 01 \u2014 Foundation', title: 'Infrastructure & Cloud', desc: 'Servers, databases, hosting and DevOps pipelines configured to be secure, scalable and quietly reliable \u2014 the bedrock everything else stands on.' },
        { index: 'Layer 02 \u2014 Structure', title: 'Backend & SaaS Platforms', desc: 'APIs, business logic, authentication and multi-tenant architecture that let a SaaS product serve one customer or ten thousand.' },
        { index: 'Layer 03 \u2014 Intelligence', title: 'AI Agents & Automation', desc: 'Conversational agents, automated workflows and machine-learning models that handle repetitive work and surface what matters.' },
        { index: 'Layer 04 \u2014 Surface', title: 'Web & Mobile Experiences', desc: 'The part people see and touch \u2014 fast, accessible interfaces across web, iOS and Android, designed in Arabic, French and English.' }
      ]
    },
    why: {
      eyebrow: 'Why Digital Dune',
      title: 'Built close to home, to a global standard.',
      lead: 'We combine local context \u2014 language, payment methods, connectivity \u2014 with the engineering practices used by international product teams.',
      cards: [
        { title: 'Full-stack, from idea to launch', desc: 'One team handles design, backend, mobile and AI \u2014 so nothing gets lost between handoffs.' },
        { title: 'Built for Arabic, French and English', desc: 'RTL layouts, local payment integrations and multilingual content are part of the brief from day one, not an afterthought.' },
        { title: 'AI-native, not AI-bolted-on', desc: 'We design AI agents and automation into the architecture from the start, not as a feature added at the end.' }
      ]
    },
    work: {
      eyebrow: 'Selected work',
      title: 'A glimpse of what we build.',
      lead: 'Concept builds and sample products that show the range \u2014 from e-commerce to AI support agents.',
      viewAll: 'View all work'
    },
    testimonials: {
      eyebrow: 'What clients say',
      title: 'Trusted by local businesses.',
      items: [
        { text: 'Digital Dune helped us launch our food delivery platform in under 3 months. The team understood our market from day one.', name: 'Ahmed Ould', role: 'Founder, Tawary', initials: 'AO' },
        { text: 'We needed a multilingual SaaS platform that worked in Arabic, French and English. Digital Dune delivered exactly that, on time and on budget.', name: 'Fatima Seck', role: 'CTO, Mauritel', initials: 'FS' },
        { text: 'The AI assistant they built for our customer service cut response times by 60%. Our team loves it, and so do our customers.', name: 'Sidi Diallo', role: 'Operations Lead, Saham', initials: 'SD' }
      ]
    },
    stats: {
      items: [
        { number: 10, suffix: '+', label: 'Projects delivered' },
        { number: 3, suffix: '', label: 'Languages supported' },
        { number: 100, suffix: '%', label: 'Client satisfaction' },
        { number: 24, suffix: '/7', label: 'Support & monitoring' }
      ]
    },
    cta: {
      title: 'Have a project in mind?',
      lead: 'Tell us what you\'re building. We\'ll get back to you within a couple of days with next steps.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Explore services'
    }
  },
  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Everything you need to ship a digital product.',
      lead: 'From a single landing page to a full AI-powered platform \u2014 here\'s what we build, and how we build it.'
    },
    list: [
      { id: 'web', title: 'Web Development', desc: 'Marketing sites, web apps and e-commerce platforms \u2014 fast, accessible and easy for your team to update.', tags: ['React', 'Next.js', 'Node.js', 'E-commerce'] },
      { id: 'mobile', title: 'Mobile App Development', desc: 'Native-feeling iOS and Android apps from a single codebase, built with Flutter or React Native.', tags: ['Flutter', 'React Native', 'iOS', 'Android'] },
      { id: 'saas', title: 'SaaS Product Development', desc: 'From MVP to a multi-tenant platform \u2014 subscription billing, dashboards and an architecture that scales with your users.', tags: ['Multi-tenant', 'Billing', 'Dashboards', 'APIs'] },
      { id: 'ai', title: 'AI Agents & Automation', desc: 'Custom AI agents for support, sales or internal operations, plus workflow automation that connects your existing tools.', tags: ['LLM Integration', 'Chatbots', 'Automation', 'RAG'] },
      { id: 'design', title: 'UI/UX Design & Branding', desc: 'Interfaces and brand systems designed for the languages and contexts your users actually live in.', tags: ['UI Design', 'Design Systems', 'RTL/Arabic', 'Branding'] },
      { id: 'cloud', title: 'Cloud, DevOps & Consulting', desc: 'Infrastructure setup, deployment pipelines and technical advice for teams building or scaling their own products.', tags: ['Cloud', 'CI/CD', 'Architecture', 'Audits'] }
    ],
    process: {
      eyebrow: 'Our process',
      title: 'Five steps, start to finish.',
      lead: 'A clear process keeps timelines predictable and budgets under control.',
      steps: [
        { title: 'Discovery', desc: 'We map your goals, users and constraints before writing a line of code.' },
        { title: 'Design', desc: 'Wireframes and UI design in your languages, reviewed with you before development starts.' },
        { title: 'Build', desc: 'Agile sprints with regular demos, so you see progress and can adjust early.' },
        { title: 'Launch', desc: 'Testing, deployment and a smooth handover \u2014 including training for your team.' },
        { title: 'Grow', desc: 'Ongoing support, monitoring and improvements as your product and user base grow.' }
      ]
    },
    cta: {
      title: 'Not sure which service you need?',
      lead: 'Tell us about your idea \u2014 we\'ll help you figure out the right scope and approach.',
      ctaPrimary: 'Start a conversation'
    }
  },
  portfolio: {
    hero: {
      eyebrow: 'Our work',
      title: 'Concepts and builds that show how we think.',
      lead: 'A selection of products we\u2019ve built \u2014 from real-world apps now in production to concept projects that explore new ideas across web, mobile, SaaS and AI.'
    },
    filters: { all: 'All', web: 'Web', mobile: 'Mobile', saas: 'SaaS', ai: 'AI Agents' },
    conceptLabel: 'Concept project',
    projects: [
      { cat: 'mobile', title: 'Utlobli', desc: 'A food delivery app built with React Native (Expo) featuring real-time order tracking, driver management, wallet/cashback, push notifications, and multi-language support. Powered by Supabase.', real: true },
      { cat: 'mobile', title: 'MediTrack', desc: 'A healthcare mobile application connecting patients with doctors through IoT sensor monitoring, OCR-based medical document processing, emergency dispatch, and follow-up tracking. Backend powered by ASP.NET Core.', real: true },
      { cat: 'web', title: 'Souq Marketplace', desc: 'A multi-vendor marketplace concept for local retailers, with Arabic/French storefronts and mobile-money checkout.' },
      { cat: 'saas', title: 'Caravan Fleet', desc: 'A SaaS dashboard concept for logistics companies to track vehicles, drivers and delivery routes in real time.' },
      { cat: 'mobile', title: 'Tabib Health', desc: 'A telehealth app concept connecting patients with doctors, with an AI assistant for triage and appointment booking.' },
      { cat: 'ai', title: 'Sahel Assistant', desc: 'An AI customer-support agent concept that answers in Arabic, French and English and hands off to a human when needed.' },
      { cat: 'mobile', title: 'Nour Delivery', desc: 'A food ordering and delivery tracking app concept for local restaurants, with real-time driver mapping.' },
      { cat: 'web', title: 'Sahara Learn', desc: 'An online learning platform concept with Arabic and French course content, progress tracking, and instructor tools.' }
    ]
  },
  about: {
    hero: {
      eyebrow: 'About us',
      title: 'We build software from the edge of the Sahara.',
      lead: 'Digital Dune was founded in Nouakchott to prove that world-class digital products can be built from anywhere.'
    },
    story: {
      title: 'Our story',
      p1: 'Mauritania sits at a crossroads \u2014 Arab, African, Atlantic. Languages shift between Arabic, French and English. Connectivity is growing fast. And a generation of talented builders is ready to create for the region and the world.',
      p2: 'Digital Dune exists to channel that energy. We\'re a full-stack software agency that handles everything from infrastructure and backend architecture to mobile interfaces and AI agents. Every project we take on is built with three things in mind: quality, context, and longevity.'
    },
    values: {
      eyebrow: 'What we believe',
      title: 'Built on three principles.',
      cards: [
        { title: 'Quality over quantity', desc: 'We take on fewer projects and ship each one right \u2014 with clean architecture, thorough testing, and interfaces that actually work in the languages people speak.' },
        { title: 'Context matters', desc: 'Great software fits its environment. We design for local payment methods, mobile-first connectivity, RTL layouts, and the cultural nuances that make a product feel native.' },
        { title: 'Built to last', desc: 'We don\'t cut corners. Every architecture we design is meant to scale, every codebase we ship is meant to be maintained, and every relationship we start is meant to continue.' }
      ]
    },
    team: {
      eyebrow: 'Our team',
      title: 'The people behind the work.',
      members: [
        { name: 'Ahmed El Aleoui Baban', role: 'Co-Founder & Developer', bio: 'Co-founder of Digital Dune. Full-stack developer building web and mobile products for the region and beyond.', initials: 'AE', color: '#c1694f', image: 'images/Ahmed_El_Aleou.jpeg' },
        { name: 'Mohamed Abdellahi Babana', role: 'Co-Founder & Developer', bio: 'Co-founder of Digital Dune with a passion for building software that solves real problems in Mauritania and across West Africa.', initials: 'MB', color: '#d4a853', image: 'images/Mohamed_Abdellahi_Babana.jpeg' },
        { name: 'Ahmed Vall', role: 'AI Engineer', bio: 'Builds LLM-powered agents and automation pipelines that solve real problems for businesses in the region.', initials: 'AV', color: '#c4a882' }
      ]
    },
    cta: {
      title: 'Want to work with us?',
      lead: 'We\'re always open to new projects, collaborations and conversations.',
      ctaPrimary: 'Get in touch'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Let\'s build something together.',
      lead: 'Tell us about your project, your timeline, and your budget. We\'ll get back to you within 48 hours.'
    },
    form: {
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email address',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Thanks! Your message has been sent. We\'ll get back to you within 48 hours.',
      error: 'Something went wrong. Please try again or email us directly at contact@digitaldune.mr.'
    },
    info: {
      title: 'Contact information',
      email: 'contact@digitaldune.mr',
      phone: '+222 00 00 00 00',
      location: 'Nouakchott, Mauritania',
      hours: 'Sun \u2014 Thu, 9:00 \u2014 17:00 GMT'
    }
  }
};

translations.fr = {
  nav: {
    home: 'Accueil',
    services: 'Services',
    portfolio: 'R\u00e9alisations',
    about: '\u00c0 propos',
    contact: 'Contact',
    cta: 'D\u00e9marrer un projet'
  },
  footer: {
    tagline: 'Digital Dune est une agence de logiciel bas\u00e9e \u00e0 Nouakchott, cr\u00e9ant des produits web, mobile, SaaS et IA pour des clients dans la r\u00e9gion et au-del\u00e0.',
    linksTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    langTitle: 'Langue',
    rights: '\u00a9 2026 Digital Dune. Tous droits r\u00e9serv\u00e9s.',
    madeIn: 'Con\u00e7u et d\u00e9velopp\u00e9 \u00e0 Nouakchott, Mauritanie.'
  },
  home: {
    hero: {
      eyebrow: 'Agence de logiciel \u2014 Nouakchott, Mauritanie',
      title: 'Un logiciel construit en couches.',
      lead: 'Une agence bas\u00e9e \u00e0 Nouakchott concevant des plateformes web, applications mobiles, produits SaaS et agents IA pour les entreprises pr\u00eates \u00e0 se d\u00e9velopper.',
      ctaPrimary: 'D\u00e9marrer un projet',
      ctaSecondary: 'Voir nos r\u00e9alisations'
    },
    strata: {
      eyebrow: 'Notre m\u00e9thode',
      title: 'Construit en quatre couches.',
      lead: 'Chaque produit que nous livrons repose sur la m\u00eame pile \u2014 de l\u2019infrastructure qui le fait fonctionner \u00e0 l\u2019interface que les gens utilisent.',
      layers: [
        { index: 'Couche 01 \u2014 Fondation', title: 'Infrastructure & Cloud', desc: 'Serveurs, bases de donn\u00e9es, h\u00e9bergement et pipelines DevOps configur\u00e9s pour \u00eatre s\u00e9curis\u00e9s, scalable et fiables \u2014 le socle sur lequel tout repose.' },
        { index: 'Couche 02 \u2014 Structure', title: 'Backend & Plateformes SaaS', desc: 'API, logique m\u00e9tier, authentification et architecture multi-tenant qui permettent \u00e0 un SaaS de servir un client ou dix mille.' },
        { index: 'Couche 03 \u2014 Intelligence', title: 'Agents IA & Automatisation', desc: 'Agents conversationnels, flux automatis\u00e9s et mod\u00e8les de machine learning qui g\u00e8rent les t\u00e2ches r\u00e9p\u00e9titives et font ressortir l\u2019essentiel.' },
        { index: 'Couche 04 \u2014 Surface', title: 'Exp\u00e9riences Web & Mobile', desc: 'La partie visible et tangible \u2014 des interfaces rapides et accessibles sur le web, iOS et Android, con\u00e7ues en arabe, fran\u00e7ais et anglais.' }
      ]
    },
    why: {
      eyebrow: 'Pourquoi Digital Dune',
      title: 'Construit pr\u00e8s de chez vous, aux standards mondiaux.',
      lead: 'Nous combinons le contexte local \u2014 langue, moyens de paiement, connectivit\u00e9 \u2014 avec les pratiques d\u2019ing\u00e9nierie des \u00e9quipes produit internationales.',
      cards: [
        { title: 'Full-stack, de l\'id\u00e9e au lancement', desc: 'Une seule \u00e9quipe g\u00e8re le design, le backend, le mobile et l\u2019IA \u2014 rien ne se perd entre les \u00e9tapes.' },
        { title: 'Con\u00e7u pour l\'arabe, le fran\u00e7ais et l\'anglais', desc: 'Dispositions RTL, int\u00e9grations de paiement locales et contenu multilingue font partie du brief d\u00e8s le premier jour.' },
        { title: 'IA-native, pas ajout\u00e9e apr\u00e8s coup', desc: 'Nous concevons les agents IA et l\u2019automatisation dans l\u2019architecture d\u00e8s le d\u00e9part.' }
      ]
    },
    work: {
      eyebrow: 'R\u00e9alisations s\u00e9lectionn\u00e9es',
      title: 'Un aper\u00e7u de ce que nous construisons.',
      lead: 'Projets conceptuels et \u00e9chantillons qui montrent notre \u00e9tendue \u2014 du e-commerce aux agents IA de support.',
      viewAll: 'Voir toutes les r\u00e9alisations'
    },
    testimonials: {
      eyebrow: 'Ce que disent nos clients',
      title: 'Approuv\u00e9 par les entreprises locales.',
      items: [
        { text: 'Digital Dune nous a aid\u00e9s \u00e0 lancer notre plateforme de livraison en moins de 3 mois. L\u2019\u00e9quipe a compris notre march\u00e9 d\u00e8s le premier jour.', name: 'Ahmed Ould', role: 'Fondateur, Tawary', initials: 'AO' },
        { text: 'Nous avions besoin d\u2019une plateforme SaaS multilingue en arabe, fran\u00e7ais et anglais. Digital Dune a livr\u00e9 exactement cela, dans les temps et dans le budget.', name: 'Fatima Seck', role: 'CTO, Mauritel', initials: 'FS' },
        { text: 'L\u2019assistant IA qu\u2019ils ont construit pour notre service client a r\u00e9duit les temps de r\u00e9ponse de 60%. Notre \u00e9quipe l\u2019adore, et nos clients aussi.', name: 'Sidi Diallo', role: 'Responsable Op\u00e9rations, Saham', initials: 'SD' }
      ]
    },
    stats: {
      items: [
        { number: 10, suffix: '+', label: 'Projets livr\u00e9s' },
        { number: 3, suffix: '', label: 'Langues support\u00e9es' },
        { number: 100, suffix: '%', label: 'Satisfaction client' },
        { number: 24, suffix: '/7', label: 'Support & surveillance' }
      ]
    },
    cta: {
      title: 'Vous avez un projet en t\u00eate ?',
      lead: 'Dites-nous ce que vous construisez. Nous vous répondrons sous quelques jours avec les prochaines \u00e9tapes.',
      ctaPrimary: 'Nous contacter',
      ctaSecondary: 'Explorer les services'
    }
  },
  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Tout ce qu\u2019il faut pour lancer un produit num\u00e9rique.',
      lead: 'D\u2019une simple page d\u2019atterrissage \u00e0 une plateforme IA compl\u00e8te \u2014 voici ce que nous construisons et comment nous le faisons.'
    },
    list: [
      { id: 'web', title: 'D\u00e9veloppement Web', desc: 'Sites marketing, applications web et plateformes e-commerce \u2014 rapides, accessibles et faciles \u00e0 mettre \u00e0 jour.', tags: ['React', 'Next.js', 'Node.js', 'E-commerce'] },
      { id: 'mobile', title: 'D\u00e9veloppement Mobile', desc: 'Applications iOS et Android \u00e0 l\u2019aspect natif depuis une seule base de code, avec Flutter ou React Native.', tags: ['Flutter', 'React Native', 'iOS', 'Android'] },
      { id: 'saas', title: 'D\u00e9veloppement SaaS', desc: 'Du MVP \u00e0 une plateforme multi-tenant \u2014 facturation par abonnement, tableaux de bord et architecture qui \u00e9volue.', tags: ['Multi-tenant', 'Facturation', 'Tableaux de bord', 'APIs'] },
      { id: 'ai', title: 'Agents IA & Automatisation', desc: 'Agents IA personnalis\u00e9s pour le support, les ventes ou les op\u00e9rations, plus automatisation des processus.', tags: ['LLM', 'Chatbots', 'Automatisation', 'RAG'] },
      { id: 'design', title: 'Design UI/UX & Marque', desc: 'Interfaces et syst\u00e8mes de marque con\u00e7us pour les langues et contextes de vos utilisateurs.', tags: ['UI Design', 'Design Systems', 'RTL/Arabe', 'Branding'] },
      { id: 'cloud', title: 'Cloud, DevOps & Conseil', desc: 'Configuration d\u2019infrastructure, pipelines de d\u00e9ploiement et conseils techniques pour les \u00e9quipes.', tags: ['Cloud', 'CI/CD', 'Architecture', 'Audits'] }
    ],
    process: {
      eyebrow: 'Notre processus',
      title: 'Cinq \u00e9tapes, du d\u00e9but \u00e0 la fin.',
      lead: 'Un processus clair permet de ma\u00eetriser les d\u00e9lais et les budgets.',
      steps: [
        { title: 'D\u00e9couverte', desc: 'Nous cartographions vos objectifs, utilisateurs et contraintes avant d\u2019\u00e9crire une ligne de code.' },
        { title: 'Design', desc: 'Wireframes et design UI dans vos langues, revus avec vous avant le d\u00e9veloppement.' },
        { title: 'D\u00e9veloppement', desc: 'Sprints agiles avec d\u00e9mos r\u00e9guli\u00e8res pour voir la progression et ajuster rapidement.' },
        { title: 'Lancement', desc: 'Tests, d\u00e9ploiement et transition en douceur \u2014 y compris la formation de votre \u00e9quipe.' },
        { title: '\u00c9volution', desc: 'Support continu, surveillance et am\u00e9liorations au fur et \u00e0 mesure de la croissance.' }
      ]
    },
    cta: {
      title: 'Vous ne savez pas quel service choisir ?',
      lead: 'Parlez-nous de votre id\u00e9e \u2014 nous vous aiderons \u00e0 d\u00e9finir le bon p\u00e9rim\u00e8tre et la bonne approche.',
      ctaPrimary: 'D\u00e9marrer une conversation'
    }
  },
  portfolio: {
    hero: {
      eyebrow: 'Nos r\u00e9alisations',
      title: 'Concepts et projets qui montrent notre fa\u00e7on de penser.',
      lead: 'Une s\u00e9lection de produits que nous avons construits \u2014 des applications r\u00e9elles en production aux projets conceptuels explorant de nouvelles id\u00e9es en web, mobile, SaaS et IA.'
    },
    filters: { all: 'Tout', web: 'Web', mobile: 'Mobile', saas: 'SaaS', ai: 'Agents IA' },
    conceptLabel: 'Projet conceptuel',
    projects: [
      { cat: 'mobile', title: 'Utlobli', desc: 'Une application de livraison de repas construite avec React Native (Expo) offrant un suivi des commandes en temps r\u00e9el, la gestion des chauffeurs, un portefeuille/cashback, des notifications push et un support multilingue. Propuls\u00e9e par Supabase.', real: true },
      { cat: 'mobile', title: 'MediTrack', desc: 'Une application mobile de sant\u00e9 connectant les patients aux m\u00e9decins via la surveillance de capteurs IoT, le traitement OCR de documents m\u00e9dicaux, le dispatching d\u2019urgence et le suivi. Backend propuls\u00e9 par ASP.NET Core.', real: true },
      { cat: 'web', title: 'Souq Marketplace', desc: 'Concept de place de march\u00e9 multi-vendeurs pour les commer\u00e7ants locaux, avec vitrines en arabe/fran\u00e7ais et paiement mobile.' },
      { cat: 'saas', title: 'Caravan Fleet', desc: 'Concept de tableau de bord SaaS pour les entreprises de logistique, suivi des v\u00e9hicules et des livraisons en temps r\u00e9el.' },
      { cat: 'mobile', title: 'Tabib Health', desc: 'Concept d\'application de t\u00e9l\u00e9m\u00e9decine avec assistant IA pour le triage et la prise de rendez-vous.' },
      { cat: 'ai', title: 'Sahel Assistant', desc: 'Concept d\'agent IA de support client r\u00e9pondant en arabe, fran\u00e7ais et anglais.' },
      { cat: 'mobile', title: 'Nour Delivery', desc: 'Concept d\'application de livraison de repas avec suivi en temps r\u00e9el des livreurs.' },
      { cat: 'web', title: 'Sahara Learn', desc: 'Concept de plateforme d\'apprentissage en ligne en arabe et fran\u00e7ais avec suivi de progression.' }
    ]
  },
  about: {
    hero: {
      eyebrow: '\u00c0 propos',
      title: 'Nous construisons des logiciels depuis les confins du Sahara.',
      lead: 'Digital Dune a \u00e9t\u00e9 fond\u00e9 \u00e0 Nouakchott pour prouver que des produits num\u00e9riques de classe mondiale peuvent \u00eatre cr\u00e9\u00e9s depuis n\u2019importe o\u00f9.'
    },
    story: {
      title: 'Notre histoire',
      p1: 'La Mauritanie se trouve \u00e0 un carrefour \u2014 arabe, africain, atlantique. Les langues alternent entre l\u2019arabe, le fran\u00e7ais et l\u2019anglais. La connectivit\u00e9 cro\u00eet rapidement. Et une g\u00e9n\u00e9ration de talents est pr\u00eate \u00e0 cr\u00e9er pour la r\u00e9gion et le monde.',
      p2: 'Digital Dune existe pour canaliser cette \u00e9nergie. Nous sommes une agence full-stack qui g\u00e8re tout, de l\u2019infrastructure et l\u2019architecture backend aux interfaces mobiles et aux agents IA.'
    },
    values: {
      eyebrow: 'Nos valeurs',
      title: 'Construit sur trois principes.',
      cards: [
        { title: 'La qualit\u00e9 avant la quantit\u00e9', desc: 'Nous prenons moins de projets et livrons chacun correctement \u2014 architecture propre, tests approfondis, interfaces qui fonctionnent dans les langues parl\u00e9es.' },
        { title: 'Le contexte compte', desc: 'Un bon logiciel s\u2019adapte \u00e0 son environnement. Paiements locaux, connectivit\u00e9 mobile, dispositions RTL, nuances culturelles.' },
        { title: 'Con\u00e7u pour durer', desc: 'Chaque architecture est con\u00e7ue pour passer \u00e0 l\u2019\u00e9chelle, chaque code est maintenable, chaque relation est construite pour continuer.' }
      ]
    },
    team: {
      eyebrow: 'Notre \u00e9quipe',
      title: 'Les personnes derri\u00e8re le travail.',
      members: [
        { name: 'Ahmed El Aleoui Baban', role: 'Co-fondateur & D\u00e9veloppeur', bio: 'Co-fondateur de Digital Dune. D\u00e9veloppeur full-stack cr\u00e9ant des produits web et mobiles pour la r\u00e9gion et au-del\u00e0.', initials: 'AE', color: '#c1694f', image: 'images/Ahmed_El_Aleou.jpeg' },
        { name: 'Mohamed Abdellahi Babana', role: 'Co-fondateur & D\u00e9veloppeur', bio: 'Co-fondateur de Digital Dune passionn\u00e9 par la cr\u00e9ation de logiciels qui r\u00e9solvent des probl\u00e8mes concrets en Mauritanie et en Afrique de l\u2019Ouest.', initials: 'MB', color: '#d4a853', image: 'images/Mohamed_Abdellahi_Babana.jpeg' },
        { name: 'Ahmed Vall', role: 'Ing\u00e9nieur IA', bio: 'Construit des agents LLM et des pipelines d\u2019automatisation qui r\u00e9solvent des probl\u00e8mes concrets.', initials: 'AV', color: '#c4a882' }
      ]
    },
    cta: {
      title: 'Vous voulez travailler avec nous ?',
      lead: 'Nous sommes toujours ouverts aux nouveaux projets, collaborations et conversations.',
      ctaPrimary: 'Nous contacter'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Construisons quelque chose ensemble.',
      lead: 'Parlez-nous de votre projet, de votre calendrier et de votre budget. Nous vous répondrons sous 48 heures.'
    },
    form: {
      name: 'Nom complet',
      namePlaceholder: 'Votre nom',
      email: 'Adresse email',
      emailPlaceholder: 'vous@exemple.com',
      subject: 'Sujet',
      subjectPlaceholder: 'De quoi s\'agit-il ?',
      message: 'Message',
      messagePlaceholder: 'Parlez-nous de votre projet, objectifs et calendrier...',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Merci ! Votre message a \u00e9t\u00e9 envoy\u00e9. Nous vous r\u00e9pondrons sous 48 heures.',
      error: 'Une erreur est survenue. Veuillez r\u00e9essayer ou nous \u00e9crire directement \u00e0 contact@digitaldune.mr.'
    },
    info: {
      title: 'Coordonn\u00e9es',
      email: 'contact@digitaldune.mr',
      phone: '+222 00 00 00 00',
      location: 'Nouakchott, Mauritanie',
      hours: 'Dim \u2014 Jeu, 9:00 \u2014 17:00 GMT'
    }
  }
};

translations.ar = {
  nav: {
    home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
    services: '\u0627\u0644\u062e\u062f\u0645\u0627\u062a',
    portfolio: '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
    about: '\u0645\u0646 \u0646\u062d\u0646',
    contact: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
    cta: '\u0627\u0628\u062f\u0623 \u0645\u0634\u0631\u0648\u0639\u0627\u064b'
  },
  footer: {
    tagline: '\u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646 \u0647\u0648 \u0648\u0643\u0627\u0644\u0629 \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u064a\u0646\u0634\u0637 \u0641\u064a \u0646\u0648\u0627\u0643\u0634\u0648\u0637\u060c \u064a\u0628\u0646\u064a \u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062c\u0648\u0627\u0644 \u0648\u0627\u0644\u0633\u0627\u0627\u0633 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.',
    linksTitle: '\u0627\u0644\u062a\u0646\u0642\u0644',
    servicesTitle: '\u0627\u0644\u062e\u062f\u0645\u0627\u062a',
    contactTitle: '\u0627\u0644\u0627\u062a\u0635\u0627\u0644',
    langTitle: '\u0627\u0644\u0644\u063a\u0629',
    rights: '\u0662\u0660\u0662\u0666 \u00a9 \u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
    madeIn: '\u062a\u0645 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0641\u064a \u0646\u0648\u0627\u0643\u0634\u0648\u0637\u060c \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627.'
  },
  home: {
    hero: {
      eyebrow: '\u0648\u0643\u0627\u0644\u0629 \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u2014 \u0646\u0648\u0627\u0643\u0634\u0648\u0637\u060c \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627',
      title: '\u0628\u0631\u0645\u062c\u064a\u0627\u062a\u060c \u0645\u0628\u0646\u064a\u0629 \u0637\u0628\u0642\u064a\u0627\u064b.',
      lead: '\u0648\u0643\u0627\u0644\u0629 \u0645\u0642\u0631\u0647\u0627 \u0646\u0648\u0627\u0643\u0634\u0648\u0637 \u064a\u0635\u0645\u0645 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u062c\u0648\u0627\u0644 \u0648\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0633\u0627\u0627\u0633 \u0648\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.',
      ctaPrimary: '\u0627\u0628\u062f\u0623 \u0645\u0634\u0631\u0648\u0639\u0627\u064b',
      ctaSecondary: '\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u0646\u0627'
    },
    strata: {
      eyebrow: '\u0643\u064a\u0641 \u0646\u0628\u0646\u064a',
      title: '\u0645\u0628\u0646\u064a \u0641\u064a \u0623\u0631\u0628\u0639 \u0637\u0628\u0642\u0627\u062a.',
      lead: '\u0643\u0644 \u0645\u0646\u062a\u062c \u0646\u0635\u062f\u0631\u0647 \u064a\u0633\u062a\u0646\u062f \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0647\u064a\u0643\u0644 \u2014 \u0645\u0646 \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062a\u064a \u064a\u0644\u0645\u0633\u0647\u0627 \u0627\u0644\u0646\u0627\u0633.',
      layers: [
        { index: '\u0627\u0644\u0637\u0628\u0642\u0629 \u0660\u0661 \u2014 \u0627\u0644\u0623\u0633\u0627\u0633', title: '\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0648\u0627\u0644\u0633\u062d\u0627\u0628\u0629', desc: '\u062e\u0648\u0627\u062f\u0645\u060c \u0642\u0648\u0627\u0639\u062f \u0628\u064a\u0627\u0646\u0627\u062a\u060c \u0627\u0633\u062a\u0636\u0627\u0641\u0629 \u0648\u062e\u0637\u0648\u0637 DevOps \u0645\u0643\u0648\u0646\u0629 \u0644\u062a\u0643\u0648\u0646 \u0622\u0645\u0646\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639.' },
        { index: '\u0627\u0644\u0637\u0628\u0642\u0629 \u0660\u0662 \u2014 \u0627\u0644\u0647\u064a\u0643\u0644', title: '\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062f \u0648\u0645\u0646\u0635\u0627\u062a SaaS', desc: '\u0648\u0627\u062c\u0647\u0627\u062a API\u060c \u0645\u0646\u0637\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644\u060c \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0648\u0647\u064a\u0643\u0644 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0633\u062a\u0626\u062c\u0631\u064a\u0646.' },
        { index: '\u0627\u0644\u0637\u0628\u0642\u0629 \u0660\u0663 \u2014 \u0627\u0644\u0630\u0643\u0627\u0621', title: '\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629', desc: '\u0648\u0643\u0644\u0627\u0621 \u0645\u062d\u0627\u062f\u062b\u0629\u060c \u0633\u064a\u0648\u0642 \u0639\u0645\u0644 \u0622\u0644\u064a\u0629 \u0648\u0646\u0645\u0627\u0630\u062c \u062a\u0639\u0644\u0645 \u0622\u0644\u0629.' },
        { index: '\u0627\u0644\u0637\u0628\u0642\u0629 \u0660\u0664 \u2014 \u0627\u0644\u0633\u0637\u062d', title: '\u062a\u062c\u0627\u0631\u0628 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062c\u0648\u0627\u0644', desc: '\u0627\u0644\u062c\u0632\u0621 \u0627\u0644\u0630\u064a \u064a\u0631\u0627\u0647 \u0627\u0644\u0646\u0627\u0633 \u0648\u064a\u0644\u0645\u0633\u0648\u0646\u0647 \u2014 \u0648\u0627\u062c\u0647\u0627\u062a \u0633\u0631\u064a\u0639\u0629 \u0648\u0645\u062a\u064a\u062d\u0629 \u0639\u0644\u0649 \u0627\u0644\u0648\u064a\u0628 \u0648iOS \u0648Android.' }
      ]
    },
    why: {
      eyebrow: '\u0644\u0645\u0627\u0630\u0627 \u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646',
      title: '\u0645\u0628\u0646\u064a \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0639\u0627\u0644\u0645\u064a\u0629\u060c \u0642\u0631\u064a\u0628 \u0645\u0646\u0643.',
      lead: '\u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0633\u064a\u0627\u0642 \u0627\u0644\u0645\u062d\u0644\u064a \u0648\u0645\u0645\u0627\u0631\u0633\u0627\u062a \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629.',
      cards: [
        { title: '\u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0625\u0637\u0644\u0627\u0642', desc: '\u0641\u0631\u064a\u0642 \u0648\u0627\u062d\u062f \u064a\u062a\u0648\u0644\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062f \u0648\u0627\u0644\u062c\u0648\u0627\u0644 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.' },
        { title: '\u0645\u0635\u0645\u0645 \u0644\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629', desc: '\u062a\u062e\u0627\u0637\u064a\u0637 RTL\u060c \u062f\u0645\u062c \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0648\u0645\u062d\u062a\u0648\u0649 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0644\u063a\u0627\u062a.' },
        { title: '\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0623\u0635\u064a\u0644', desc: '\u0646\u0635\u0645\u0645 \u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629 \u0641\u064a \u0627\u0644\u0647\u064a\u0643\u0644 \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629.' }
      ]
    },
    work: {
      eyebrow: '\u0623\u0639\u0645\u0627\u0644 \u0645\u062e\u062a\u0627\u0631\u0629',
      title: '\u0644\u0645\u062d\u0629 \u0639\u0645\u0627 \u0646\u0628\u0646\u064a.',
      lead: '\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0641\u0627\u0647\u064a\u0645\u064a\u0629 \u0648\u0646\u0645\u0627\u0630\u062c \u062a\u0638\u0647\u0631 \u0627\u0644\u0646\u0637\u0627\u0642.',
      viewAll: '\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644'
    },
    testimonials: {
      eyebrow: '\u0645\u0627 \u064a\u0642\u0648\u0644\u0647 \u0627\u0644\u0639\u0645\u0644\u0627\u0621',
      title: '\u0645\u0648\u062b\u0648\u0642 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0645\u062d\u0644\u064a\u0629.',
      items: [
        { text: '\u0633\u0627\u0639\u062f\u0646\u0627 Digital Dune \u0641\u064a \u0625\u0637\u0644\u0627\u0642 \u0645\u0646\u0635\u0629 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u062e\u0644\u0627\u0644 \u0623\u0642\u0644 \u0645\u0646 \u0663 \u0623\u0634\u0647\u0631.', name: '\u0623\u062d\u0645\u062f \u0648\u0644\u062f', role: '\u0645\u0624\u0633\u0633\u060c Tawary', initials: '\u0623\u0648' },
        { text: '\u0643\u0646\u0627 \u0646\u062d\u062a\u0627\u062c \u0645\u0646\u0635\u0629 SaaS \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0644\u063a\u0627\u062a.', name: '\u0641\u0627\u0637\u0645\u0629 \u0633\u0643', role: 'CTO\u060c Mauritel', initials: '\u0641\u0633' },
        { text: '\u062e\u0641\u0636 \u0627\u0644\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0630\u0643\u064a \u0623\u0648\u0642\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0628\u0646\u0633\u0628\u0629 60%.', name: '\u0633\u064a\u062f\u064a \u062f\u064a\u0627\u0644\u0648', role: '\u0631\u0626\u064a\u0633 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a\u060c Saham', initials: '\u0633\u062f' }
      ]
    },
    stats: {
      items: [
        { number: 10, suffix: '+', label: '\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u064f\u0646\u062c\u0632\u0629' },
        { number: 3, suffix: '', label: '\u0644\u063a\u0627\u062a \u0645\u062f\u0639\u0648\u0645\u0629' },
        { number: 100, suffix: '%', label: '\u0631\u0636\u0627 \u0627\u0644\u0639\u0645\u0644\u0627\u0621' },
        { number: 24, suffix: '/7', label: '\u0627\u0644\u062f\u0639\u0645 \u0648\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629' }
      ]
    },
    cta: {
      title: '\u0647\u0644 \u0644\u062f\u064a\u0643 \u0645\u0634\u0631\u0648\u0639 \u0641\u064a \u0627\u0644\u0630\u0647\u0646\u061f',
      lead: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0639\u0645\u0627 \u062a\u0628\u0646\u064a\u0647. \u0633\u0646\u0639\u0648\u062f \u0625\u0644\u064a\u0643 \u062e\u0644\u0627\u0644 \u0628\u0636\u0639\u0629 \u0623\u064a\u0627\u0645.',
      ctaPrimary: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      ctaSecondary: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0627\u0644\u062e\u062f\u0645\u0627\u062a'
    }
  },
  services: {
    hero: {
      eyebrow: '\u0627\u0644\u062e\u062f\u0645\u0627\u062a',
      title: '\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u0647 \u0644\u0625\u0637\u0644\u0627\u0642 \u0645\u0646\u062a\u062c \u0631\u0642\u0645\u064a.',
      lead: '\u0645\u0646 \u0635\u0641\u062d\u0629 \u0647\u0628\u0648\u0637 \u0648\u0627\u062d\u062f\u0629 \u0625\u0644\u0649 \u0645\u0646\u0635\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0643\u0627\u0645\u0644\u0629.'
    },
    list: [
      { id: 'web', title: '\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628', desc: '\u0645\u0648\u0627\u0642\u0639 \u062a\u0633\u0648\u064a\u0642\u064a\u0629\u060c \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u0648\u0645\u0646\u0635\u0627\u062a \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629.', tags: ['React', 'Next.js', 'Node.js', '\u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629'] },
      { id: 'mobile', title: '\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062c\u0648\u0627\u0644', desc: '\u062a\u0637\u0628\u064a\u0642\u0627\u062a iOS \u0648Android \u0628\u0646\u0641\u0633 \u0627\u0644\u0634\u0639\u0648\u0631 \u0627\u0644\u0623\u0635\u0644\u064a.', tags: ['Flutter', 'React Native', 'iOS', 'Android'] },
      { id: 'saas', title: '\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0633\u0627\u0627\u0633', desc: '\u0645\u0646 MVP \u0625\u0644\u0649 \u0645\u0646\u0635\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0645\u0633\u062a\u0626\u062c\u0631\u064a\u0646.', tags: ['\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0633\u062a\u0626\u062c\u0631\u064a\u0646', '\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631', '\u0644\u0648\u062d\u0627\u062a \u0627\u0644\u0642\u064a\u0627\u062f\u0629', 'APIs'] },
      { id: 'ai', title: '\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0648\u0627\u0644\u0623\u062a\u0645\u062a\u0629', desc: '\u0648\u0643\u0644\u0627\u0621 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u062e\u0635\u0635\u064a\u0646.', tags: ['LLM', '\u0631\u0648\u0627\u062f \u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0629', '\u0623\u062a\u0645\u062a\u0629', 'RAG'] },
      { id: 'design', title: '\u062a\u0635\u0645\u064a\u0645 UI/UX \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629', desc: '\u0648\u0627\u062c\u0647\u0627\u062a \u0648\u0623\u0646\u0638\u0645\u0629 \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u062c\u0627\u0631\u064a\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0633\u064a\u0627\u0642\u0627\u062a.', tags: ['UI Design', '\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645', 'RTL/\u0639\u0631\u0628\u064a', '\u0627\u0644\u0639\u0644\u0627\u0645\u0629'] },
      { id: 'cloud', title: '\u0627\u0644\u0633\u062d\u0627\u0628\u0629\u060c DevOps \u0648\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a', desc: '\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0648\u062e\u0637\u0648\u0637 \u0627\u0644\u062a\u0648\u0632\u064a\u0639.', tags: ['\u0633\u062d\u0627\u0628\u0629', 'CI/CD', '\u0645\u0639\u0645\u0627\u0631\u064a\u0629', '\u062a\u062f\u0642\u064a\u0642'] }
    ],
    process: {
      eyebrow: '\u0639\u0645\u0644\u064a\u062a\u0646\u0627',
      title: '\u062e\u0645\u0633 \u062e\u0637\u0648\u0627\u062a\u060c \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u064a\u0629.',
      lead: '\u0639\u0645\u0644\u064a\u0629 \u0648\u0627\u0636\u062d\u0629 \u062a\u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a \u0648\u062a\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0629.',
      steps: [
        { title: '\u0627\u0644\u0627\u0643\u062a\u0634\u0627\u0641', desc: '\u0646\u062d\u062f\u062f \u0623\u0647\u062f\u0627\u0641\u0643 \u0648\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0643 \u0648\u0627\u0644\u0642\u064a\u0648\u062f.' },
        { title: '\u0627\u0644\u062a\u0635\u0645\u064a\u0645', desc: '\u062a\u0635\u0627\u0645\u064a\u0645 \u0648\u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0644\u063a\u0627\u062a\u0643.' },
        { title: '\u0627\u0644\u0628\u0646\u0627\u0621', desc: '\u0633\u0628\u0631\u0627\u062a \u0631\u0634\u064a\u0642\u0629 \u0645\u0639 \u0639\u0631\u0648\u0636 \u0645\u0646\u062a\u0638\u0645\u0629.' },
        { title: '\u0627\u0644\u0625\u0637\u0644\u0627\u0642', desc: '\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a\u060c \u0646\u0634\u0631 \u0648\u062a\u0633\u0644\u064a\u0645 \u0633\u0644\u0633.' },
        { title: '\u0627\u0644\u0646\u0645\u0648', desc: '\u062f\u0639\u0645 \u0645\u0633\u062a\u0645\u0631 \u0648\u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0645\u0633\u062a\u0645\u0631\u0629.' }
      ]
    },
    cta: {
      title: '\u0644\u0633\u062a \u0645\u062a\u0623\u0643\u062f\u0627\u064b \u0645\u0646 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u064a \u062a\u062d\u062a\u0627\u062c\u0647\u0627\u061f',
      lead: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0639\u0646 \u0641\u0643\u0631\u062a\u0643 \u0648\u0633\u0646\u0633\u0627\u0639\u062f\u0643 \u0641\u064a \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0646\u0637\u0627\u0642 \u0648\u0627\u0644\u0646\u0647\u062c.',
      ctaPrimary: '\u0627\u0628\u062f\u0623 \u0645\u062d\u0627\u062f\u062b\u0629'
    }
  },
  portfolio: {
    hero: {
      eyebrow: '\u0623\u0639\u0645\u0627\u0644\u0646\u0627',
      title: '\u0645\u0641\u0627\u0647\u064a\u0645 \u0648\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0638\u0647\u0631 \u0643\u064a\u0641 \u0646\u0641\u0643\u0631.',
      lead: '\u0645\u062c\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u062a\u064a \u0628\u0646\u064a\u0646\u0627\u0647\u0627 \u2014 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u062d\u0642\u064a\u0642\u064a\u0629 \u0642\u064a\u062f \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0625\u0644\u0649 \u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0641\u0627\u0647\u064a\u0645\u064a\u0629 \u062a\u0633\u062a\u0643\u0634\u0641 \u0623\u0641\u0643\u0627\u0631\u0627\u064b \u062c\u062f\u064a\u062f\u0629 \u0641\u064a \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062c\u0648\u0627\u0644 \u0648SaaS \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.'
    },
    filters: { all: '\u0627\u0644\u0643\u0644', web: '\u0648\u064a\u0628', mobile: '\u062c\u0648\u0627\u0644', saas: 'SaaS', ai: '\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a' },
    conceptLabel: '\u0645\u0634\u0631\u0648\u0639 \u0645\u0641\u0647\u0648\u0645\u064a',
    projects: [
      { cat: 'mobile', title: 'Utlobli', desc: '\u062a\u0637\u0628\u064a\u0642 \u062a\u0648\u0635\u064a\u0644 \u0637\u0639\u0627\u0645 \u0645\u0628\u0646\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React Native (Expo) \u0645\u0639 \u062a\u062a\u0628\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0641\u0639\u0644\u064a\u060c \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0633\u0627\u0626\u0642\u064a\u0646\u060c \u0645\u062d\u0641\u0638\u0629/\u0643\u0627\u0634 \u0628\u0627\u0643\u060c \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0641\u0648\u0631\u064a\u0629 \u0648\u062f\u0639\u0645 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0644\u063a\u0627\u062a. \u0645\u062f\u0639\u0648\u0645 \u0628\u0648\u0627\u0633\u0637\u0629 Supabase.', real: true },
      { cat: 'mobile', title: 'MediTrack', desc: '\u062a\u0637\u0628\u064a\u0642 \u0635\u062d\u064a \u0645\u062a\u0646\u0642\u0644 \u064a\u0631\u0628\u0637 \u0627\u0644\u0645\u0631\u0636\u0649 \u0628\u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0631\u0627\u0642\u0628\u0629 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0627\u0633\u062a\u0634\u0639\u0627\u0631 IoT\u060c \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0627\u0644\u0637\u0628\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 OCR\u060c \u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0631\u0636\u0649. \u0627\u0644\u062e\u0644\u0641\u064a\u0629 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0640 ASP.NET Core.', real: true },
      { cat: 'web', title: '\u0633\u0648\u0642 \u0645\u0627\u0631\u0643\u062a \u0628\u0644\u064a\u0633', desc: '\u0645\u0641\u0647\u0648\u0645 \u0633\u0648\u0642 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0628\u0627\u0626\u0639\u064a\u0646 \u0644\u0644\u062a\u062c\u0627\u0631 \u0627\u0644\u0645\u062d\u0644\u064a\u064a\u0646.' },
      { cat: 'saas', title: '\u0623\u0633\u0637\u0648\u0644 \u0642\u0627\u0641\u0644\u0629', desc: '\u0645\u0641\u0647\u0648\u0645 \u0644\u0648\u062d\u0629 SaaS \u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0643.' },
      { cat: 'mobile', title: '\u0637\u0628\u064a\u0628 \u0635\u062d\u0629', desc: '\u0645\u0641\u0647\u0648\u0645 \u062a\u0637\u0628\u064a\u0642 \u0635\u062d\u0629 \u0639\u0646 \u0628\u0639\u062f \u0628\u0645\u0633\u0627\u0639\u062f \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a.' },
      { cat: 'ai', title: '\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0633\u0627\u062d\u0644', desc: '\u0645\u0641\u0647\u0648\u0645 \u0648\u0643\u064a\u0644 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u062f\u0639\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.' },
      { cat: 'mobile', title: '\u0646\u0648\u0631 \u062f\u064a\u0644\u064a\u0641\u0631\u064a', desc: '\u0645\u0641\u0647\u0648\u0645 \u062a\u0637\u0628\u064a\u0642 \u062a\u0648\u0635\u064a\u0644 \u0637\u0639\u0627\u0645 \u0645\u0639 \u062a\u062a\u0628\u0639 \u0641\u0648\u0631\u064a.' },
      { cat: 'web', title: '\u0635\u062d\u0631\u0627\u0621 \u062a\u0639\u0644\u0645', desc: '\u0645\u0641\u0647\u0648\u0645 \u0645\u0646\u0635\u0629 \u062a\u0639\u0644\u064a\u0645 \u0639\u0646 \u0628\u0639\u062f \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629.' }
    ]
  },
  about: {
    hero: {
      eyebrow: '\u0645\u0646 \u0646\u062d\u0646',
      title: '\u0646\u0628\u0646\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0645\u0646 \u062d\u0627\u0641\u0629 \u0627\u0644\u0635\u062d\u0631\u0627\u0621.',
      lead: '\u062a\u0623\u0633\u0633 \u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646 \u0641\u064a \u0646\u0648\u0627\u0643\u0634\u0648\u0637 \u0644\u0625\u062b\u0628\u0627\u062a \u0623\u0646 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u064a\u0645\u0643\u0646 \u0628\u0646\u0627\u0624\u0647\u0627 \u0645\u0646 \u0623\u064a \u0645\u0643\u0627\u0646.'
    },
    story: {
      title: '\u0642\u0635\u062a\u0646\u0627',
      p1: '\u062a\u0642\u0639 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u0639\u0646\u062f \u062a\u0642\u0627\u0637\u0639 \u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0639\u0631\u0628\u064a \u0648\u0627\u0644\u0625\u0641\u0631\u064a\u0642\u064a \u0648\u0627\u0644\u0623\u0637\u0644\u0633\u064a. \u0627\u0644\u0644\u063a\u0627\u062a \u062a\u062a\u062d\u0648\u0644 \u0628\u064a\u0646 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629. \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u064a\u0646\u0645\u0648 \u0628\u0633\u0631\u0639\u0629. \u0648\u062c\u064a\u0644 \u0645\u0646 \u0627\u0644\u0645\u0648\u0647\u0648\u0628\u064a\u0646 \u0645\u0633\u062a\u0639\u062f \u0644\u0644\u0625\u0628\u062f\u0627\u0639.',
      p2: '\u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646 \u0648\u062c\u062f \u0644\u062a\u0648\u062c\u064a\u0647 \u0647\u0630\u0647 \u0627\u0644\u0637\u0627\u0642\u0629. \u0646\u062d\u0646 \u0648\u0643\u0627\u0644\u0629 full-stack \u064a\u062f\u064a\u0631 \u0643\u0644 \u0634\u064a\u0621 \u0645\u0646 \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0625\u0644\u0649 \u0648\u0627\u062c\u0647\u0627\u062a \u0627\u0644\u062c\u0648\u0627\u0644 \u0648\u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.'
    },
    values: {
      eyebrow: '\u0645\u0627 \u0646\u0624\u0645\u0646 \u0628\u0647',
      title: '\u0645\u0628\u0646\u064a \u0639\u0644\u0649 \u062b\u0644\u0627\u062b\u0629 \u0645\u0628\u0627\u062f\u0626.',
      cards: [
        { title: '\u0627\u0644\u062c\u0648\u062f\u0629 \u0642\u0628\u0644 \u0627\u0644\u0643\u0645\u064a\u0629', desc: '\u0646\u062a\u062d\u0645\u0644 \u0645\u0634\u0627\u0631\u064a\u0639 \u0623\u0642\u0644 \u0648\u0646\u0642\u062f\u0645 \u0643\u0644 \u0648\u0627\u062d\u062f \u0628\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0635\u062d\u064a\u062d.' },
        { title: '\u0627\u0644\u0633\u064a\u0627\u0642 \u064a\u0647\u0645', desc: '\u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u0645\u064a\u0632\u0629 \u062a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639 \u0628\u064a\u0626\u062a\u0647\u0627.' },
        { title: '\u0645\u0635\u0645\u0645 \u0644\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631\u064a\u0629', desc: '\u0643\u0644 \u0647\u064a\u0643\u0644 \u0646\u0635\u0645\u0645\u0647 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0648\u0633\u0639.' }
      ]
    },
    team: {
      eyebrow: '\u0641\u0631\u064a\u0642\u0646\u0627',
      title: '\u0627\u0644\u0623\u0634\u062e\u0627\u0635 \u0648\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644.',
      members: [
        { name: '\u0623\u062d\u0645\u062f \u0627\u0644\u0639\u0644\u0648\u064a \u0628\u0627\u0628\u0627\u0646', role: '\u0645\u0624\u0633\u0633 \u0648\u0645\u0637\u0648\u0631', bio: '\u0645\u0624\u0633\u0633 \u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646. \u0645\u0637\u0648\u0631 full-stack \u064a\u0628\u0646\u064a \u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u062c\u0648\u0627\u0644.', initials: '\u0623\u0628', color: '#c1694f', image: 'images/Ahmed_El_Aleou.jpeg' },
        { name: '\u0645\u062d\u0645\u062f \u0639\u0628\u062f \u0627\u0644\u0644\u0647 \u0628\u0627\u0628\u0627\u0646\u0627', role: '\u0645\u0624\u0633\u0633 \u0648\u0645\u0637\u0648\u0631', bio: '\u0645\u0624\u0633\u0633 \u062f\u064a\u062c\u064a\u062a\u0627\u0644 \u062f\u064a\u0648\u0646 \u064a\u0647\u062a\u0645 \u0628\u0628\u0646\u0627\u0621 \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u062a\u062d\u0644 \u0645\u0634\u0627\u0643\u0644 \u062d\u0642\u064a\u0642\u064a\u0629.', initials: '\u0645\u0628', color: '#d4a853', image: 'images/Mohamed_Abdellahi_Babana.jpeg' },
        { name: '\u0623\u062d\u0645\u062f \u0648\u0627\u0644', role: '\u0645\u0647\u0646\u062f\u0633 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a', bio: '\u064a\u0628\u0646\u064a \u0648\u0643\u0644\u0627\u0621 LLM \u0648\u062e\u0637\u0648\u0637 \u0623\u062a\u0645\u062a\u0629.', initials: '\u0623\u0648', color: '#c4a882' }
      ]
    },
    cta: {
      title: '\u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0644\u0639\u0645\u0644 \u0645\u0639\u0646\u0627\u061f',
      lead: '\u0646\u062d\u0646 \u062f\u0627\u0626\u0645\u0627\u064b \u0645\u0646\u062a\u0648\u062c\u0648\u0646 \u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u062c\u062f\u064a\u062f\u0629.',
      ctaPrimary: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627'
    }
  },
  contact: {
    hero: {
      eyebrow: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
      title: '\u0644\u0646\u0628\u0646\u064a \u0634\u064a\u0626\u0627\u064b \u0645\u0639\u0627\u064b.',
      lead: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u062c\u062f\u0648\u0644\u0643 \u0627\u0644\u0632\u0645\u0646\u064a \u0648\u0645\u064a\u0632\u0627\u0646\u064a\u062a\u0643.'
    },
    form: {
      name: '\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644',
      namePlaceholder: '\u0627\u0633\u0645\u0643',
      email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
      emailPlaceholder: 'you@example.com',
      subject: '\u0627\u0644\u0645\u0648\u0636\u0648\u0639',
      subjectPlaceholder: '\u0639\u0645\u0627 \u064a\u062a\u0639\u0644\u0642 \u0627\u0644\u0623\u0645\u0631\u061f',
      message: '\u0627\u0644\u0631\u0633\u0627\u0644\u0629',
      messagePlaceholder: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u0623\u0647\u062f\u0627\u0641\u0643...',
      submit: '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629',
      sending: '\u062c\u0627\u0631\u064a \u0627\u0644\u0625\u0631\u0633\u0627\u0644...',
      success: '\u0634\u0643\u0631\u0627\u064b! \u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643. \u0633\u0646\u0639\u0648\u062f \u0625\u0644\u064a\u0643 \u062e\u0644\u0627\u0644 \u0664\u0668 \u0633\u0627\u0639\u0629.',
      error: '\u062d\u062f\u062b \u062e\u0637\u0623. \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0644\u0649 contact@digitaldune.mr.'
    },
    info: {
      title: '\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644',
      email: 'contact@digitaldune.mr',
      phone: '+222 00 00 00 00',
      location: '\u0646\u0648\u0627\u0643\u0634\u0648\u0637\u060c \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627',
      hours: '\u0627\u0644\u0623\u062d\u062f \u2014 \u0627\u0644\u062e\u0645\u064a\u0633\u060c \u0669:\u0660\u0660 \u2014 \u0661\u0667:\u0660\u0660 \u062a.\u063a.'
    }
  }
};

/* ---------- Helpers ---------- */
function getCurrentLang() {
  return localStorage.getItem('dd-lang') || 'en';
}

function setLanguage(lang) {
  const supported = ['en', 'fr', 'ar'];
  if (!supported.includes(lang)) return;
  localStorage.setItem('dd-lang', lang);
  applyTranslations(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const parts = key.split('.');
    let value = t;
    for (const part of parts) {
      value = value?.[part];
      if (!value) break;
    }
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* Expose globally so inline page scripts can use them */
window.ICONS = ICONS;
window.translations = translations;

/* ---------- Init on DOM ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  /* Determine current page */
  const path = window.location.pathname;
  let currentPage = 'home';
  if (path.includes('services')) currentPage = 'services';
  else if (path.includes('portfolio')) currentPage = 'portfolio';
  else if (path.includes('about')) currentPage = 'about';
  else if (path.includes('contact')) currentPage = 'contact';

  /* Inject navbar */
  const navContainer = document.getElementById('navbar');
  if (navContainer) navContainer.innerHTML = renderNavbar(currentPage);

  /* Inject footer */
  const footerContainer = document.getElementById('footer');
  if (footerContainer) footerContainer.innerHTML = renderFooter();

  /* Inject back-to-top button */
  const existingBtt = document.querySelector('.back-to-top');
  if (!existingBtt) {
    const btt = document.createElement('button');
    btt.className = 'back-to-top';
    btt.setAttribute('aria-label', 'Scroll to top');
    btt.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btt);
  }

  /* Add page-enter class to main */
  const mainEl = document.getElementById('main-content');
  if (mainEl) mainEl.classList.add('page-enter');

  /* Apply initial translations */
  applyTranslations(lang);
  updateLangButtons(lang);

  /* Update copyright year */
  document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el => {
    el.textContent = el.textContent.replace('2026', new Date().getFullYear());
  });

  /* ---------- Page-specific rendering ---------- */
  const iconMap = { web: 'web', mobile: 'mobile', saas: 'layers', ai: 'ai', design: 'design', cloud: 'cloud' };
  const strataIcons = ['cloud', 'layers', 'ai', 'mobile'];

  function renderPageSections() {
    const pageLang = getCurrentLang();
    const t = translations[pageLang];
    if (!t) return;

    /* Home: Strata layers */
    const strataStack = document.getElementById('strata-stack');
    if (strataStack && t.home?.strata?.layers) {
      strataStack.innerHTML = t.home.strata.layers.map((layer, i) => `
        <div class="strata-layer">
          <span class="layer-index">${layer.index}</span>
          <div class="layer-content">
            <div class="layer-icon">${ICONS[strataIcons[i]] || ICONS.layers}</div>
            <h3>${layer.title}</h3>
            <p>${layer.desc}</p>
          </div>
        </div>
      `).join('');
    }

    /* Home: Why cards */
    const whyGrid = document.getElementById('why-grid');
    if (whyGrid && t.home?.why?.cards) {
      whyGrid.innerHTML = t.home.why.cards.map(card => `
        <div class="why-card">
          <div class="why-card-icon">${ICONS.target}</div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      `).join('');
    }

    /* Home: Work preview */
    const workGrid = document.getElementById('work-grid');
    if (workGrid && t.portfolio?.projects) {
      const previews = t.portfolio.projects.slice(0, 3);
      workGrid.innerHTML = previews.map(project => `
        <a href="/contact.html" class="project-card">
          <span class="project-card-cat">${project.cat}</span>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <span class="project-badge ${project.real ? 'project-badge--production' : 'project-badge--concept'}">${project.real ? 'Production' : t.portfolio.conceptLabel}</span>
          <span class="card-arrow">${ICONS.arrowRight} Learn more</span>
        </a>
      `).join('');
    }

    /* Home: Testimonials */
    const testimonialGrid = document.getElementById('testimonials-grid');
    if (testimonialGrid && t.home?.testimonials?.items) {
      testimonialGrid.innerHTML = t.home.testimonials.items.map(item => `
        <div class="testimonial-card">
          <p class="testimonial-text">${item.text}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${item.initials}</div>
            <div>
              <div class="testimonial-name">${item.name}</div>
              <div class="testimonial-role">${item.role}</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    /* Home: Stats */
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid && t.home?.stats?.items) {
      statsGrid.innerHTML = t.home.stats.items.map(stat => `
        <div class="stat-card">
          <div class="stat-number">
            <span class="counter-prefix"></span>
            <span class="counter-value" data-target="${stat.number}">0</span>
            <span class="counter-suffix">${stat.suffix}</span>
          </div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
    }

    /* Services: Grid */
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && t.services?.list) {
      servicesGrid.innerHTML = t.services.list.map(svc => `
        <a href="/contact.html" class="service-card" id="${svc.id}">
          <div class="service-card-icon">${ICONS[iconMap[svc.id]] || ICONS.tool}</div>
          <h3>${svc.title}</h3>
          <p>${svc.desc}</p>
          <div class="service-tags">${svc.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}</div>
          <span class="card-arrow">${ICONS.arrowRight} Get started</span>
        </a>
      `).join('');
    }

    /* Services: Process steps */
    const procSteps = document.getElementById('process-steps');
    if (procSteps && t.services?.process?.steps) {
      procSteps.innerHTML = t.services.process.steps.map(step => `
        <div class="process-step">
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      `).join('');
    }

    /* Portfolio: Filters */
    const filtersEl = document.getElementById('filters');
    if (filtersEl && t.portfolio?.filters) {
      const filterKeys = ['all', 'web', 'mobile', 'saas', 'ai'];
      filtersEl.innerHTML = filterKeys.map((key, i) => `
        <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${key}">${t.portfolio.filters[key]}</button>
      `).join('');
      /* Re-bind filter clicks */
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.dataset.filter || 'all';
          document.querySelectorAll('.project-card').forEach(card => {
            const cat = card.dataset.cat;
            if (filter === 'all' || cat === filter) {
              card.style.display = 'block';
              card.style.opacity = '0';
              requestAnimationFrame(() => { card.style.opacity = '1'; });
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    /* Portfolio: Projects */
    const portGrid = document.getElementById('portfolio-grid');
    if (portGrid && t.portfolio?.projects) {
      portGrid.innerHTML = t.portfolio.projects.map(project => `
        <a href="/contact.html" class="project-card" data-cat="${project.cat}">
          <span class="project-card-cat">${t.portfolio.filters[project.cat] || project.cat}</span>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <span class="project-badge ${project.real ? 'project-badge--production' : 'project-badge--concept'}">
            ${project.real ? 'Production' : t.portfolio.conceptLabel}
          </span>
          <span class="card-arrow">${ICONS.arrowRight} Learn more</span>
        </a>
      `).join('');
    }

    /* About: Values */
    const valsGrid = document.getElementById('values-grid');
    if (valsGrid && t.about?.values?.cards) {
      valsGrid.innerHTML = t.about.values.cards.map(card => `
        <div class="value-card">
          <div class="value-card-icon">${ICONS.heart}</div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      `).join('');
    }

    /* About: Team */
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid && t.about?.team?.members) {
      teamGrid.innerHTML = t.about.team.members.map(member => `
        <div class="team-card">
          ${member.image
            ? `<div class="team-avatar" style="background:${member.color};overflow:hidden"><img src="/${member.image}" alt="${member.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>`
            : `<div class="team-avatar" style="background:${member.color}">${member.initials}</div>`}
          <div class="team-name">${member.name}</div>
          <div class="team-role">${member.role}</div>
          <div class="team-bio">${member.bio}</div>
        </div>
      `).join('');
    }

    /* Contact: Info */
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo) {
      contactInfo.innerHTML = `
        <h3 data-i18n="contact.info.title">${t.contact?.info?.title || 'Contact information'}</h3>
        <div class="contact-info-card">
          ${ICONS.email}
          <div>
            <h4>Email</h4>
            <p>${t.contact?.info?.email || 'contact@digitaldune.mr'}</p>
          </div>
        </div>
        <div class="contact-info-card">
          ${ICONS.phone}
          <div>
            <h4>Phone</h4>
            <p>${t.contact?.info?.phone || '+222 00 00 00 00'}</p>
          </div>
        </div>
        <div class="contact-info-card">
          ${ICONS.pin}
          <div>
            <h4>Location</h4>
            <p>${t.contact?.info?.location || 'Nouakchott, Mauritania'}</p>
          </div>
        </div>
        <div class="contact-info-card">
          ${ICONS.clock}
          <div>
            <h4>Working hours</h4>
            <p>${t.contact?.info?.hours || 'Sun — Thu, 9:00 — 17:00 GMT'}</p>
          </div>
        </div>
        <div style="margin-top:var(--space-xl)">
          <h4>Follow us</h4>
          <div style="display:flex;gap:var(--space-md);margin-top:var(--space-md)">
            <a href="https://facebook.com/digitaldune" target="_blank" rel="noopener noreferrer" style="width:40px;height:40px;color:var(--color-terracotta);display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-radius:var(--radius-md);transition:all var(--transition-fast)" aria-label="Facebook">
              ${ICONS.fb}
            </a>
            <a href="mailto:contact@digitaldune.mr" style="width:40px;height:40px;color:var(--color-terracotta);display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-radius:var(--radius-md);transition:all var(--transition-fast)" aria-label="Email">
              ${ICONS.email}
            </a>
          </div>
        </div>
      `;
    }

    /* Update placeholders on contact form */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.placeholder) {
        const key = el.dataset.i18n;
        const parts = key.split('.');
        let val = pageLang === 'en' ? translations.en : (pageLang === 'fr' ? translations.fr : translations.ar);
        for (const part of parts) {
          val = val?.[part];
          if (!val) break;
        }
        if (typeof val === 'string') el.placeholder = val;
      }
    });
  }

  renderPageSections();

  /* Re-render page sections on language change */
  const origSetItem = localStorage.setItem;
  localStorage.setItem = function(key, value) {
    origSetItem.call(this, key, value);
    if (key === 'dd-lang') {
      renderPageSections();
    }
  };

  /* ---------- Language switcher ---------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn) setLanguage(btn.dataset.lang);
  });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    /* Close mobile nav on link click */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll shadow on navbar ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
    revealObserver.observe(el);
  });

  /* ---------- Scroll progress bar ---------- */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progressBar.style.width = (scrollTop / scrollHeight) * 100 + '%';
    }, { passive: true });
  }

  /* ---------- Back-to-top visibility ---------- */
  const bttBtn = document.querySelector('.back-to-top');
  if (bttBtn) {
    window.addEventListener('scroll', () => {
      bttBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Counter animation ---------- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          if (isNaN(target)) return;
          const duration = 1500;
          const start = performance.now();
          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter-value').forEach(el => {
    counterObserver.observe(el);
  });

  /* ---------- Particle system ---------- */
  const particleCanvas = document.querySelector('.particle-canvas');
  if (particleCanvas) {
    const ctx = particleCanvas.getContext('2d');
    const hero = particleCanvas.closest('.hero');
    let particles = [];
    let animId;

    function resizeParticles() {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      particleCanvas.width = rect.width;
      particleCanvas.height = rect.height;
    }

    function initParticles() {
      const count = Math.min(Math.floor((particleCanvas.width * particleCanvas.height) / 8000), 60);
      particles = [];
      const colors = ['rgba(212, 168, 83,', 'rgba(196, 168, 130,', 'rgba(193, 105, 79,', 'rgba(228, 192, 120,'];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * particleCanvas.width,
          y: Math.random() * particleCanvas.height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2 - 0.08,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < -10) p.x = particleCanvas.width + 10;
        if (p.x > particleCanvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = particleCanvas.height + 10;
        if (p.y > particleCanvas.height + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animateParticles);
    }

    resizeParticles();
    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      resizeParticles();
      initParticles();
    });

    /* Clean up on page hide */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && animId) {
        cancelAnimationFrame(animId);
      } else if (!document.hidden) {
        animateParticles();
      }
    });
  }

  /* ---------- Card 3D tilt + spotlight ---------- */
  let tiltRAF;
  document.querySelectorAll('.service-card, .project-card, .why-card, .strata-layer').forEach(card => {
    card.addEventListener('mousemove', e => {
      if (tiltRAF) cancelAnimationFrame(tiltRAF);
      tiltRAF = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.setProperty('--tilt-x', rotateX + 'deg');
        card.style.setProperty('--tilt-y', rotateY + 'deg');
        /* Spotlight follows cursor */
        card.style.setProperty('--spot-x', ((x / rect.width) * 100) + '%');
        card.style.setProperty('--spot-y', ((y / rect.height) * 100) + '%');
      });
    });
    card.addEventListener('mouseleave', () => {
      if (tiltRAF) cancelAnimationFrame(tiltRAF);
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  /* ---------- Magnetic buttons ---------- */
  let magnetRAF;
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      if (magnetRAF) cancelAnimationFrame(magnetRAF);
      magnetRAF = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const maxDist = 12;
        const dist = Math.min(Math.sqrt(x * x + y * y), maxDist);
        const angle = Math.atan2(y, x);
        const mx = Math.cos(angle) * dist * 0.4;
        const my = Math.sin(angle) * dist * 0.4;
        btn.style.setProperty('--magnet-x', mx + 'px');
        btn.style.setProperty('--magnet-y', my + 'px');
      });
    });
    btn.addEventListener('mouseleave', () => {
      if (magnetRAF) cancelAnimationFrame(magnetRAF);
      btn.style.setProperty('--magnet-x', '0px');
      btn.style.setProperty('--magnet-y', '0px');
    });
  });

  /* ---------- Ripple click effect ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* ---------- Portfolio filtering ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter || 'all';

        projectCards.forEach(card => {
          const cat = card.dataset.cat;
          if (filter === 'all' || cat === filter) {
            card.style.display = 'block';
            card.style.opacity = '0';
            requestAnimationFrame(() => { card.style.opacity = '1'; });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit');
      const origText = submitBtn.textContent;
      const lang = getCurrentLang();
      const t = translations[lang]?.contact?.form;

      submitBtn.textContent = t?.sending || 'Sending...';
      submitBtn.disabled = true;
      if (formStatus) {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
        formStatus.classList.remove('visible');
      }

      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      try {
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          data
        );

        if (response.status === 200) {
          if (formStatus) {
            formStatus.textContent = t?.success || 'Message sent!';
            formStatus.className = 'form-status success visible';
          }
          form.reset();
        } else {
          throw new Error('Send failed');
        }
      } catch (err) {
        if (formStatus) {
          formStatus.textContent = t?.error || 'Something went wrong.';
          formStatus.className = 'form-status error visible';
        }
      } finally {
        submitBtn.textContent = origText;
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
