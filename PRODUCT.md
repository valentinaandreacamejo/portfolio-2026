# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally:

- **Hiring side** — recruiters and tech leads evaluating Valentina Andrea Camejo for a Front-end Developer / UX Engineer role. They scan quickly, want proof of engineering depth (Angular, production experience) and of design judgment, and decide whether to open a conversation.
- **Freelance clients** — brands, studios and small businesses looking for someone to design and build a distinctive website. They judge range, taste and whether the work feels like it could carry their brand.

Both arrive mostly cold (LinkedIn, CV link, direct URL) and give the site a short first look before deciding to dig deeper.

## Product Purpose

A personal portfolio site (valentinacamejo.com) that presents Valentina as a front-end developer with a trained design eye, and turns interest into contact. Success = an email, a LinkedIn connection or a CV download, from either audience.

## Positioning

"The Dual Soul: where fashion meets code." Fashion design training (Bologna, Condé Nast College Madrid) combined with 4 years of production Angular work at KEDOS srl and an AI-assisted workflow (Claude Code, Gemini).

The fashion background is a differentiator, not the headline of the CV: it must read as an asset that sharpens the engineering, never as something that makes her look less technical. Engineering credibility comes first; the design eye is the reason to choose her over an equally capable developer.

## Operating Context

- Single-page portfolio at `/` with sections: hero, projects directory, about/story, experience & education timeline, tech & AI stack, contact, plus a teaser to the personal page.
- `/off-duty` ("Dual Soul Lab"): the personal side — avatar outfit lookbook, an AI-asks/Valentina-answers interview, a lo-fi loop generated with the Web Audio API, current obsessions.
- Trilingual: Italian, Spanish, English (Italian is the document default). All copy goes through `src/app/core/i18n/translations.ts`; English is the reference dictionary.
- Contact paths: copy-to-clipboard email, LinkedIn, CV dialog with a PDF per language.

## Capabilities and Constraints

- Angular 22, standalone components, signals, new control flow; SCSS with shared partials in `src/styles/`. No Bootstrap, no React.
- Static front-end, no backend; no tracking or third-party profiling cookies (stated in the legal notice) — only technical storage for the language preference.
- Every visible string must exist in all three languages.

## Brand Commitments

- Name: Valentina Andrea Camejo (short form "Valentina Camejo"). Role line: "Front-end Developer & UX Engineer".
- Identity is personal and first-person in voice; bold, playful but credible.
- The 3D avatar is her visual stand-in across the site (no real photographs).

## Evidence on Hand

- Real experience: KEDOS srl (Frontend Developer, 2023–present; Junior, 2022–2023), e-Project srl (Junior Full-Stack, 2022); education at Cisita Parma (IFTS Software Engineering), Next Fashion School Bologna, Condé Nast College Madrid, SEDA College Dublin, Liceo Pio XII.
- CV PDFs in IT/ES/EN: `src/assets/CV design per Valentina Camejo*.pdf`.
- 3D avatar renders (portrait, full body, outfit series): `src/assets/frontend-developer-avatar*.{jpg,png}`.
- Showcase projects — **all self-initiated concepts with invented brands**, live on Vercel: OFFICE 99, THE FUNKY VINO, DREAMY CHAOS FESTIVAL, DANG! STUDIO, NEXUS_OPERATIONS. They must never be presented as client work.
- Absent, and not to be fabricated: client names, testimonials, metrics, awards, press, case-study results.

## Product Principles

1. Engineer first, stylist's eye second: every section should reinforce technical credibility; the fashion story explains *why* the interfaces look better, not what she does instead of code.
2. Serve both audiences on the same page: a recruiter and a prospective client should each find their proof and their contact path without a separate funnel.
3. The site is itself the strongest portfolio piece — craft, performance and accessibility are part of the claim.
4. Honest showcase: concept projects are labelled as such in spirit; no invented clients, numbers or quotes.
5. Personality lives in a dedicated space (Off-Duty) so the main portfolio stays focused.

## Accessibility & Inclusion

No product-specific standard confirmed. Baseline: semantic HTML, sufficient contrast, visible focus, keyboard navigation, `prefers-reduced-motion` respected, correct `lang` per selected language.
