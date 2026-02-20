# Soul Level Athletics — Product Requirements Document (PRD)

**Version:** 1.0
**Date:** February 20, 2026
**Status:** Draft — Pending Approval

---

## 1. Executive Summary

Soul Level Athletics is an elite basketball training and personal fitness coaching business founded by **Chris Johnson**, a former NAIA All-American (2017) and NBA G League player (2020) with professional experience across 7+ countries. The business serves youth, high school, college, and adult athletes in the **Porter Ranch, CA** area.

This PRD defines the requirements for building a modern, high-performance marketing website that establishes credibility, showcases services, drives session bookings, and supports merchandise sales.

---

## 2. Business Goals

| Priority | Goal | Success Metric |
|----------|------|----------------|
| P0 | Establish professional online presence | Site live with all core pages |
| P0 | Drive session bookings | Contact form submissions / booking clicks |
| P1 | Showcase coach credibility & experience | Time on About page, scroll depth |
| P1 | Display social proof (testimonials) | Testimonial page views |
| P2 | Sell branded merchandise | Merch page visits, purchase conversions |
| P2 | Capture leads for future marketing | Email sign-ups |
| P3 | Rank in local search results | Google Search Console impressions/clicks |

---

## 3. Target Audience

| Segment | Age Range | Key Needs |
|---------|-----------|-----------|
| Youth basketball players | 8–13 | Fun, skill development, parent-facing messaging |
| High school athletes | 14–18 | Competitive edge, college recruitment readiness |
| College athletes | 18–22 | Elite-level training, performance optimization |
| Adult athletes & fitness clients | 22+ | Personal fitness, recreational basketball |
| **Decision makers (parents)** | 30–55 | Trust, safety, credentials, clear pricing info |

**Primary device:** Mobile (76%+ of fitness website traffic comes from mobile)

---

## 4. Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Astro 5.x | Zero-JS by default, islands architecture, built-in image optimization, perfect Lighthouse scores |
| **Styling** | Tailwind CSS 4.x | Utility-first, rapid development, excellent responsive design, small production bundle (~10KB purged) |
| **Interactive Components** | React (island hydration) | Only where needed: mobile menu, booking form, image gallery, testimonial carousel |
| **Deployment** | Vercel (free tier) | Global CDN, instant deploys, form handling, analytics |
| **Forms** | Netlify Forms or Formspree | Contact/booking form handling without a backend |
| **Analytics** | Google Analytics 4 + Search Console | Traffic monitoring, SEO tracking |
| **Package Manager** | npm | Standard, reliable |

### Why Astro over Next.js?
- Soul Level Athletics is primarily a **content-focused marketing site**, not a dynamic web app
- Astro ships **zero JavaScript by default** — pages load significantly faster
- Interactive elements (forms, carousels) use Astro's **Islands Architecture** — only those components get hydrated with JS
- Built-in image optimization handles the photo-heavy content without extra configuration
- Results in perfect or near-perfect Lighthouse scores out of the box

---

## 5. Design System

### 5.1 Color Palette

The design follows a **dark-dominant theme** to match the existing black logo and convey a premium, elite training brand aesthetic.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Rich Black | `#0A0A0A` | Main backgrounds, header, footer |
| **Secondary** | Gold / Amber | `#D4A843` | Accents, headings, highlights, CTA hover states |
| **Accent** | Bright Orange | `#FF6B2B` | Primary CTA buttons, energy elements, icons |
| **Surface** | Dark Gray | `#1A1A1A` | Card backgrounds, elevated surfaces |
| **Surface Light** | Off-White | `#F5F5F0` | Alternate section backgrounds for contrast |
| **Text Primary** | White | `#FFFFFF` | Body text on dark backgrounds |
| **Text Secondary** | Light Gray | `#A0A0A0` | Secondary text, captions |
| **Text on Light** | Charcoal | `#1A1A2E` | Body text on light backgrounds |

**Color Psychology Rationale:**
- **Black** = authority, control, premium quality (used by Equinox, Nike)
- **Gold** = aspiration, excellence, championship (matches the crown in the logo)
- **Orange** = energy, movement, motivation (proven in fitness branding — Orangetheory)

### 5.2 Typography

Based on analysis of 55,000+ gym websites and fitness brand best practices:

| Role | Font | Weight | Size (Desktop) | Size (Mobile) |
|------|------|--------|----------------|---------------|
| **H1 Headlines** | Oswald | 700 | 48–64px | 32–40px |
| **H2 Section Titles** | Oswald | 600 | 36–48px | 28–32px |
| **H3 Subheadings** | Montserrat | 600 | 24–30px | 20–24px |
| **Body Text** | Inter | 400 | 16–18px | 16px |
| **Small / Captions** | Inter | 400 | 14px | 13px |
| **CTA Buttons** | Montserrat | 700 | 16–18px | 16px |

**Technical Implementation:**
- Use CSS `clamp()` for fluid responsive typography
- `font-display: swap` to prevent invisible text during font load
- Preload critical fonts (Oswald, Montserrat) via `<link rel="preload">`
- Maximum 3 font families to minimize network requests

### 5.3 Spacing & Layout

- **Base unit:** 4px (all spacing is multiples of 4)
- **Container max-width:** 1280px with horizontal padding of 16px (mobile) / 32px (desktop)
- **Section vertical padding:** 64px (mobile) / 96px (desktop)
- **Card border-radius:** 8px–12px
- **Button border-radius:** 8px

### 5.4 Responsive Breakpoints

```
Mobile:     320px – 639px   (single column layout)
Tablet:     640px – 1023px  (two-column grid)
Desktop:    1024px – 1279px (full layout)
Wide:       1280px+         (max-width container, centered)
```

---

## 6. Site Architecture

### 6.1 Sitemap

```
Home (/)
├── About (/about)
├── Services (/services)
│   ├── Strength & Conditioning (/services/strength-conditioning)
│   ├── Athletic Performance Training (/services/athletic-performance)
│   ├── Injury Prevention (/services/injury-prevention)
│   ├── Film Study & Basketball IQ (/services/film-study)
│   ├── Private Skill Training (/services/private-training)
│   └── Live Action Training (/services/live-action)
├── Testimonials (/testimonials)
├── Merch (/merch) [Phase 2]
├── Contact (/contact)
│   └── Waiver Form (/contact/waiver)
└── Legal
    ├── Privacy Policy (/privacy)
    └── Terms of Service (/terms)
```

### 6.2 Navigation Structure

**Desktop:** Horizontal nav bar
```
Logo | Home | About | Services ▾ | Testimonials | Merch | Contact | [Book Now ➜] (CTA button)
```

**Mobile:** Hamburger menu with slide-in drawer + sticky "Book Now" button

---

## 7. Page Specifications

### 7.1 Homepage

**Purpose:** First impression, credibility establishment, conversion funnel entry

**Section Layout (top to bottom):**

| # | Section | Content | CTA |
|---|---------|---------|-----|
| 1 | **Hero** | Full-width dark background with basketball action photo overlay. Logo. Headline: *"Elite Basketball Training & Personal Fitness Coaching"*. Subheadline: *"Real Training. Real Experience. Real Results."* | "Book Your Session" (primary) + "View Programs" (secondary) |
| 2 | **Credibility Bar** | Horizontal stats strip: "NBA G League \| NAIA All-American \| 7+ Countries \| Trained 100+ Athletes" | — |
| 3 | **About Preview** | Coach photo (johnson1.JPG) + 2-3 sentence bio highlighting pro experience | "Learn More" → About page |
| 4 | **Services Grid** | 6 responsive cards (3×2 desktop, 2×3 tablet, 1×6 mobile). Each: icon + title + 1-sentence description | "Learn More" per card → individual service page |
| 5 | **Who This Is For** | 4 audience blocks: Youth \| High School \| College \| Adult Athletes. Each with brief description | — |
| 6 | **Testimonials Carousel** | 3-5 rotating testimonials pulled from Thumbtack reviews with star ratings | "Read More Reviews" → Testimonials page |
| 7 | **Action Gallery** | Photo grid or Instagram-style gallery showing training sessions (use provided JPG images) | Instagram links (@nba_ready818, @soul_level_athletics) |
| 8 | **CTA Banner** | Full-width dark section with gold text: *"Ready to Elevate Your Game?"* | "Book Your Session" (large button) |
| 9 | **Footer** | Contact info, social links, quick nav, service area, copyright | — |

### 7.2 About Page

**Purpose:** Build trust through coach credentials and personal story

**Content:**
- Full bio of Chris Johnson
- Professional playing career timeline (Mexico, Canada, Spain, Indonesia, Malta, Europe, NBA G League)
- NAIA All-American achievement (2017)
- Training philosophy: "No fluff. No shortcuts. Real training from real experience."
- Professional photo(s) of Chris
- Call-to-action to book a session

### 7.3 Services Page

**Purpose:** Detail all 6 training programs, drive bookings

**Layout:** Overview page with cards linking to 6 individual service detail pages

**Individual Service Pages include:**
- Service title and icon
- Detailed description (from WEBSITE CONTENT.docx)
- What to expect in a session
- Who it's for (age group / skill level)
- Duration and format info
- CTA: "Book This Session"

**The 6 Services:**

1. **Strength & Conditioning** — Explosive strength, vertical jump, speed/agility, core stability, functional movement
2. **Athletic Performance Training** — Acceleration/deceleration, change of direction, footwork, reaction time, game-speed conditioning
3. **Injury Prevention** — Mobility, joint stability, muscle balance, corrective movement, return-to-play
4. **Film Study & Basketball IQ** — Film breakdown, decision-making analysis, defensive positioning, spacing, situational awareness
5. **Private Basketball Skill Training** — Ball handling, shooting mechanics, footwork/finishing, scoring moves, game-speed reps
6. **Live Action Training (Competitive)** — Competitive live runs, situational basketball, pressure decision-making, leadership, game intensity

### 7.4 Testimonials Page

**Purpose:** Social proof and trust building

**Content:**
- Client testimonials (sourced from Thumbtack reviews)
- Star ratings display
- Client name and context (e.g., "Parent of 14-year-old high school player")
- Optional: video testimonials (embedded)
- CTA: "Start Your Training Journey"

### 7.5 Contact / Booking Page

**Purpose:** Convert visitors into clients

**Contact Form Fields:**
- Full Name (required)
- Email (required)
- Phone Number (required)
- Service of Interest (dropdown: 6 services + "Not sure yet")
- Preferred Date(s) (date picker)
- Preferred Time (morning / afternoon / evening)
- Message / Additional Info (textarea)
- Submit button: "Send Request"

**Additional Contact Info Displayed:**
- Email: coachchrisjohnson1@gmail.com (clickable mailto:)
- Phone: (818) 743-3100 (clickable tel:)
- Instagram: @nba_ready818 and @soul_level_athletics (clickable links)
- Service area: Porter Ranch and surrounding cities

### 7.6 Waiver Page

**Purpose:** Digital liability waiver for participants

**Requirements:**
- Display full waiver text (from Final Waiver Soul Level.docx)
- Form fields: participant name, date, emergency contact, medical conditions
- Checkbox acknowledgments for each waiver section
- Digital signature field (name typed + date = acknowledgment)
- Parent/guardian section for minors
- Photo/video release opt-in checkbox
- Submit → sends waiver data to coach email or stores in form backend
- Print-friendly version available

### 7.7 Merch Page (Phase 2)

**Purpose:** Sell Soul Level Athletics branded merchandise

**Requirements:**
- Product grid with images, names, prices
- Link to external store (Shopify, Big Cartel, or similar) OR basic product display
- Phase 2 implementation — placeholder page initially with "Coming Soon" messaging

---

## 8. Functional Requirements

### 8.1 Navigation
- [x] Responsive header with logo + navigation links
- [x] Sticky/fixed header on scroll
- [x] Mobile hamburger menu with slide-in drawer
- [x] "Book Now" CTA button always visible in header
- [x] Smooth scroll for anchor links on homepage

### 8.2 Forms
- [x] Contact/booking form with validation
- [x] Waiver form with all required fields
- [x] Form submission handling (Formspree or Netlify Forms)
- [x] Success/error states after submission
- [x] Email notification to coach on form submission

### 8.3 Interactive Elements
- [x] Testimonial carousel/slider
- [x] Image gallery with lightbox
- [x] Smooth scroll animations on section reveal
- [x] Hover effects on service cards and CTA buttons
- [x] Mobile swipe support for carousels

### 8.4 SEO
- [x] Semantic HTML5 structure
- [x] Unique title tags and meta descriptions per page
- [x] Open Graph and Twitter Card meta tags
- [x] JSON-LD structured data: `LocalBusiness`, `SportsActivityLocation`, `Person`
- [x] Sitemap.xml (auto-generated)
- [x] robots.txt
- [x] Canonical URLs
- [x] Image alt text on all images
- [x] Target keywords: "basketball training Porter Ranch", "private basketball trainer LA", "youth basketball coaching", etc.

### 8.5 Performance Targets
- [x] Lighthouse Performance score: 95+
- [x] LCP (Largest Contentful Paint): < 2.5 seconds
- [x] INP (Interaction to Next Paint): < 200ms
- [x] CLS (Cumulative Layout Shift): < 0.1
- [x] Total page weight: < 1.5MB
- [x] JavaScript bundle: < 50KB

---

## 9. Assets Available

### 9.1 Logo
- `logo.PNG` — 3375×3375px, black design with basketball in "O", wings, and crown

### 9.2 Photos
| File | Description | Dimensions | Use |
|------|-------------|------------|-----|
| `johnson1.JPG` | Coach Chris Johnson portrait | 1536×2304 | About section, coach bio |
| `IMG_6268.JPG` | Training session | 2422×1536 | Gallery, services |
| `IMG_6343 2.JPG` | Portrait | 1536×2146 | Gallery |
| `IMG_6361.JPG` | Training | 1578×2048 | Gallery, services |
| `IMG_6371 2.JPG` | Training session | 1536×2304 | Gallery |
| `IMG_6386.JPG` | Training session | 1536×2304 | Gallery, hero candidate |
| `basketball-game-concept.jpg` | Basketball concept art | 5824×3264 | Hero background |
| `black-man-doing-sports...jpg` | Basketball silhouette at sunrise | 5616×3744 | Hero background (primary pick) |

### 9.3 Content Documents
- `WEBSITE CONTENT.docx` — All website copy, service descriptions, bio, contact info
- `Final Waiver Soul Level.docx` — Complete liability waiver text

---

## 10. Content Enhancements (Recommended Additions)

Beyond the provided content, the following additions would strengthen the website:

### 10.1 Homepage
- **Tagline variation:** "Train Smarter. Move Faster. Play Stronger. Elevate Your Game."
- **Stats section:** Quantifiable achievements (years of experience, athletes trained, countries played in)
- **"Who This Is For" section:** Clear audience segmentation with age-appropriate messaging

### 10.2 About Page
- **Career timeline:** Visual timeline of professional career milestones
- **Training philosophy section:** Expand on the "no fluff, no shortcuts" approach
- **Certifications/credentials list:** Any additional certifications beyond playing career

### 10.3 Services Pages
- **"What to Expect" blocks:** First-session experience description for each service
- **Duration & format info:** Session length, group vs. individual, frequency recommendations
- **FAQ per service:** 3-5 common questions answered

### 10.4 Sitewide
- **FAQ page:** General questions about training, pricing, scheduling, location, cancellation policy
- **Blog section (Phase 2):** Basketball tips, training advice, workout routines for SEO growth
- **Lead magnet:** "5-Day Basketball Skill Challenge" PDF download for email capture

---

## 11. Accessibility Requirements (WCAG 2.2 Level AA)

| Requirement | Standard | Implementation |
|-------------|----------|----------------|
| Color contrast | 4.5:1 minimum for body text | Gold `#D4A843` on black `#0A0A0A` = ~8.5:1 (passes) |
| Keyboard navigation | All elements focusable and operable | Tab order, focus styles, Escape to close modals |
| Screen reader support | Semantic HTML + ARIA labels | `<nav>`, `<main>`, `<section>`, `aria-label` on icon buttons |
| Image alt text | Descriptive text on all images | e.g., "Coach Chris Johnson coaching a youth basketball player" |
| Touch targets | Minimum 44×44px | All buttons, links, form inputs |
| Skip navigation | Skip-to-content link | Hidden link, visible on focus |
| Form accessibility | Labels, error messages, fieldset/legend | Associated `<label>` elements, `aria-describedby` for errors |
| Heading hierarchy | Logical h1 → h2 → h3 order | One h1 per page, sequential subheadings |
| Language attribute | `<html lang="en">` | Set on root element |
| Zoom support | Page functional at 200% zoom | Responsive design handles this |

---

## 12. Phased Delivery Plan

### Phase 1 — Core Website (Target: MVP Launch)

| Task | Description | Priority |
|------|-------------|----------|
| Project setup | Initialize Astro + Tailwind + React, configure build | P0 |
| Design system | Implement colors, typography, spacing as Tailwind config | P0 |
| Layout components | Header, footer, navigation, page layout, mobile menu | P0 |
| Homepage | All 9 sections as specified in Section 7.1 | P0 |
| About page | Coach bio, credentials, philosophy, photos | P0 |
| Services overview page | 6-card grid linking to individual service pages | P0 |
| Individual service pages | 6 pages with detailed descriptions | P1 |
| Contact page | Booking/contact form with validation and submission | P0 |
| Testimonials page | Testimonial display with ratings | P1 |
| Image optimization | Compress and serve responsive images via Astro | P0 |
| SEO implementation | Meta tags, structured data, sitemap, robots.txt | P1 |
| Accessibility pass | WCAG 2.2 AA compliance check | P1 |
| Mobile testing | Cross-device testing and optimization | P0 |
| Deployment | Deploy to Vercel with custom domain setup | P0 |

### Phase 2 — Enhancements

| Task | Description | Priority |
|------|-------------|----------|
| Merch page | Product display (Shopify integration or similar) | P2 |
| Digital waiver form | Interactive waiver with e-signature | P2 |
| Blog/tips section | SEO-focused content area | P2 |
| Email capture | Lead magnet integration | P2 |
| Google Business Profile | Setup and optimization | P2 |
| Instagram feed embed | Live feed integration | P3 |
| Video testimonials | Video embed support on testimonials page | P3 |

---

## 13. File & Folder Structure (Proposed)

```
soullevelathletics-website/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero/
│   │   ├── coach/
│   │   ├── training/
│   │   └── og-image.jpg
│   ├── favicon.ico
│   ├── robots.txt
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileMenu.tsx        (React island)
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── TestimonialCarousel.tsx (React island)
│   │   ├── ContactForm.tsx        (React island)
│   │   ├── Gallery.astro
│   │   ├── CTABanner.astro
│   │   ├── CredibilityBar.astro
│   │   └── AudienceSection.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── strength-conditioning.astro
│   │   │   ├── athletic-performance.astro
│   │   │   ├── injury-prevention.astro
│   │   │   ├── film-study.astro
│   │   │   ├── private-training.astro
│   │   │   └── live-action.astro
│   │   ├── testimonials.astro
│   │   ├── contact.astro
│   │   └── merch.astro
│   ├── styles/
│   │   └── global.css
│   └── data/
│       ├── services.ts
│       ├── testimonials.ts
│       └── siteConfig.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── PRD.md
```

---

## 14. Key Decisions Needed Before Development

| # | Decision | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | **Custom domain** | What domain will the site use? | soullevelathletics.com (if available) |
| 2 | **Pricing display** | Show prices on site vs. "Contact for pricing" | Show at least "Starting at $X" — sites with pricing see 3-4× higher conversions |
| 3 | **Booking method** | Contact form only vs. Calendly integration vs. custom booking | Start with contact form, add Calendly later if desired |
| 4 | **Merch approach** | Shopify store link vs. built-in product display | Phase 2 — start with "Coming Soon" placeholder |
| 5 | **Testimonials source** | Manual entry vs. Thumbtack API/widget | Manual entry initially (copy from Thumbtack) |
| 6 | **Waiver handling** | PDF download vs. digital form vs. third-party (WaiverSign) | Digital form on-site (Phase 2) |
| 7 | **Email/form service** | Formspree (free tier: 50/month) vs. Netlify Forms | Formspree for Vercel deployment |

---

## 15. Success Criteria

The website will be considered successful when:

1. All Phase 1 pages are live and functional
2. Lighthouse score is 90+ across Performance, Accessibility, Best Practices, SEO
3. Contact form successfully receives and delivers submissions
4. Site is fully responsive across mobile, tablet, and desktop
5. All provided images are optimized and displayed
6. Local SEO foundations are in place (structured data, meta tags, sitemap)
7. WCAG 2.2 AA accessibility compliance is met
8. Page load time is under 3 seconds on mobile 4G

---

*This PRD is a living document. It will be updated as decisions are made and requirements evolve.*
