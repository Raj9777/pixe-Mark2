import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import './Home.css';

/* ── Typical Engagements ─────────────────────── */
const ENGAGEMENTS = [
  {
    num: '01',
    title: 'Custom Software & SaaS MVP',
    desc: 'From initial prototype to production-grade architecture. We build bespoke SaaS platforms, automated pipelines, and internal tools engineered for scale.',
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL'],
    features: ['Full technical ownership', 'HIPAA/SOC2 compliant options', 'Zero technical debt'],
  },
  {
    num: '02',
    title: 'High-Conversion Web Architecture',
    desc: 'Obsessively optimized web platforms. We combine high-end UI design with ultra-fast page speeds (Lighthouse 99+) and conversion-first user flows.',
    tags: ['Next.js', 'Vite', 'Tailwind', 'Figma', 'CMS'],
    features: ['Core Web Vitals green', 'SEO & accessibility built-in', '100% custom codebase'],
  },
  {
    num: '03',
    title: 'Cross-Platform Mobile Apps',
    desc: 'Native-feel iOS and Android applications built with React Native. App Store submission, offline capabilities, push notifications, and in-app purchases.',
    tags: ['React Native', 'Expo', 'iOS', 'Android', 'REST/GraphQL'],
    features: ['Single codebase delivery', 'Native animations & gesture UI', 'Complete ownership'],
  },
  {
    num: '04',
    title: 'Architecture & Performance Audit',
    desc: 'We analyze your codebase, find what is slowing down your engineers or cloud budget, and execute targeted performance refactoring.',
    tags: ['CI/CD', 'Cloud Cost', 'Static Analysis', 'Database Tuning'],
    features: ['−70% infra cost reduction', 'Instant build speeds', 'Detailed written roadmap'],
  },
];

/* ── Selected Case Studies ────────────────────── */
const CASE_STUDIES = [
  {
    id: '01',
    category: 'SaaS & AI Integration',
    title: 'Clinical AI Concierge & Health Dashboard',
    desc: 'Built a HIPAA-compliant medical decision support chatbot with real-time FHIR data integration and voice controls for international conferences.',
    tags: ['Next.js', 'Vercel AI SDK', 'GPT-4', 'FHIR'],
    metric: 'Zero to Production in 14 Days',
    link: '/portfolio',
  },
  {
    id: '02',
    category: 'Web Platform & Performance',
    title: 'E-Commerce Platform with 99+ Core Web Vitals',
    desc: 'Re-architected a slow legacy store into a headless storefront. Cut page load times from 4.2s to 0.4s and boosted checkout conversions by 34%.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'GraphQL'],
    metric: '−90% Load Time · +34% Conversion',
    link: '/portfolio',
  },
  {
    id: '03',
    category: 'Mobile Application',
    title: 'Cross-Platform Spatial & Fitness Tracking App',
    desc: 'Engineered a React Native fitness app with real-time video keyframe detection, offline sync, and smooth 60fps animations.',
    tags: ['React Native', 'Expo', 'TensorFlow', 'Firebase'],
    metric: '4.9★ App Store Rating',
    link: '/portfolio',
  },
];

/* ── Process Steps ───────────────────────────── */
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'We own the outcome',
    body: "Give us the core problem, not just a static task list. We find the shortest path, flag architecture risks early, and deliver on time — you don't chase us.",
  },
  {
    num: '02',
    title: 'Async-first, global speed',
    body: 'We operate async-first with overlapping call windows. Clear written documentation for every decision so your team is never blocked waiting.',
  },
  {
    num: '03',
    title: 'Two versions of every decision',
    body: 'Your engineers get the deep technical specifics. Your stakeholders get the business impact. Clear communication with zero translation lost.',
  },
  {
    num: '04',
    title: 'Fixed scope, zero surprises',
    body: 'Transparent upfront rates starting from ₹5,000 / $100. Clear deliverables defined before a line of code is written — no hidden retainers.',
  },
];

export default function Home() {
  return (
    <div className="kb-home">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Typical Engagements */}
      <section className="kb-section" id="services">
        <div className="kb-section-header">
          <span className="kb-badge font-mono">SERVICES & SCOPE</span>
          <h2 className="kb-section-title">Typical Engagements</h2>
          <p className="kb-section-sub">
            Whether you need an MVP built from scratch or a codebase rescued, we deliver clear outcomes.
          </p>
        </div>

        <div className="kb-engagements-grid">
          {ENGAGEMENTS.map((eng) => (
            <div key={eng.num} className="kb-card kb-engagement-card">
              <div className="kb-card-top">
                <span className="kb-step-num">{eng.num}</span>
                <h3 className="kb-card-title">{eng.title}</h3>
              </div>

              <p className="kb-card-desc">{eng.desc}</p>

              <div className="kb-tags-row">
                {eng.tags.map((t) => (
                  <span key={t} className="kb-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="kb-features-list">
                {eng.features.map((f, i) => (
                  <li key={i}>
                    <span className="kb-check font-mono">✓</span> {f}
                  </li>
                ))}
              </ul>

              <div className="kb-card-action">
                <Link to="/services" className="kb-btn-secondary">
                  Explore details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Selected Case Studies */}
      <section className="kb-section kb-section-alt" id="work">
        <div className="kb-section-header">
          <span className="kb-badge font-mono">CASE STUDIES</span>
          <h2 className="kb-section-title">Selected Work & Proof</h2>
          <p className="kb-section-sub">Real products, production code, and measurable business outcomes.</p>
        </div>

        <div className="kb-case-grid">
          {CASE_STUDIES.map((c) => (
            <div key={c.id} className="kb-card kb-case-card">
              <div className="kb-case-header">
                <span className="kb-case-cat font-mono">{c.category}</span>
                <span className="kb-case-metric font-mono">{c.metric}</span>
              </div>

              <h3 className="kb-case-title">{c.title}</h3>
              <p className="kb-case-desc">{c.desc}</p>

              <div className="kb-tags-row">
                {c.tags.map((t) => (
                  <span key={t} className="kb-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <Link to={c.link} className="kb-link-arrow font-mono">
                Read full case study →
              </Link>
            </div>
          ))}
        </div>

        <div className="kb-center-btn">
          <Link to="/portfolio" className="kb-btn-primary">
            See all work & products →
          </Link>
        </div>
      </section>

      {/* 4. What We Actually Do */}
      <section className="kb-section">
        <div className="kb-statement-card">
          <span className="kb-badge font-mono">OUR PHILOSOPHY</span>
          <h2 className="kb-statement-heading">
            We find what's costing you — and we cut it.
          </h2>
          <p className="kb-statement-body">
            The AI prototype that won't scale. The website that takes 4 seconds to load. The app feature stuck in code review for three sprints. We take the expensive problem everyone learned to live with — and we ship the solution.
          </p>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="kb-section kb-section-alt">
        <div className="kb-section-header">
          <span className="kb-badge font-mono">METHODOLOGY</span>
          <h2 className="kb-section-title">How We Work</h2>
          <p className="kb-section-sub">Simple, direct, and focused on momentum.</p>
        </div>

        <div className="kb-process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="kb-card kb-process-card">
              <span className="kb-step-num">{step.num}</span>
              <h3 className="kb-process-title">{step.title}</h3>
              <p className="kb-process-body">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Final Call CTA */}
      <section className="kb-section">
        <div className="kb-final-cta-card">
          <span className="kb-badge font-mono">LET'S TALK</span>
          <h2 className="kb-final-title">
            Have a project in mind?<br />
            Let's build it right.
          </h2>
          <p className="kb-final-sub">
            Book a 30-min call. No sales pitch deck — just your problem, tech requirements, and whether we're the right team for it.
          </p>
          <div className="kb-final-actions">
            <Link to="/contact" className="kb-btn-primary">
              <span>Book a 30-min call</span>
              <span>→</span>
            </Link>
            <a href="mailto:raj@pixelexcellence.online" className="kb-btn-secondary">
              <span>Or send an email</span>
              <span>✉</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

