import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import './Home.css';
import './HomeV2.css';

/* ── Scroll-reveal hook ─────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { 
        threshold,
        // Trigger exit a bit before leaving screen to ensure smooth transition
        rootMargin: '-5% 0px -5% 0px'
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Cycling words (Upscayl-style "made for") ─ */
const FOR_WORDS = ['Startups', 'Founders', 'Businesses', 'Creators', 'Designers', 'You'];

function CyclingWords() {
  const [idx, setIdx] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [ref, visible] = useReveal(0.3);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % FOR_WORDS.length);
        setExiting(false);
      }, 350);
    }, 1800);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section className="hv2-for-section" ref={ref}>
      <p className="hv2-for-label">PIXE is built for</p>
      <div className="hv2-for-word-wrap">
        <h2 className={`hv2-for-word text-gradient ${exiting ? 'word-exit' : 'word-enter'}`}>
          {FOR_WORDS[idx]}
        </h2>
      </div>
    </section>
  );
}

/* ── Feature rows (alternating) ──────────────── */
const FEATURE_ROWS = [
  {
    icon: '💻',
    accent: 'rgba(0,240,255,0.08)',
    tag: 'Custom Software',
    title: 'Built for your exact workflow.',
    body: 'Got a process no off-the-shelf app covers? PIXE builds bespoke software — from SaaS platforms and internal dashboards to automation pipelines and B2B tools — engineered precisely around your business logic.',
    extra: 'Every line of code is yours, fully owned, fully documented.',
  },
  {
    icon: '🌐',
    accent: 'rgba(0,85,255,0.08)',
    tag: 'Web Design & Dev',
    title: 'Websites that convert, not just impress.',
    body: "Most agency sites look great but don't perform. PIXE sites are obsessively optimised — Lighthouse 95+, Core Web Vitals green, and built with conversion architecture from the ground up.",
    extra: 'SEO-ready. CMS-integrated. Fast on day one.',
  },
  {
    icon: '📱',
    accent: 'rgba(120,40,255,0.08)',
    tag: 'Mobile Apps',
    title: 'One codebase. Two platforms. Zero compromise.',
    body: 'React Native apps that feel completely native on iOS and Android. From App Store submission to push notifications, in-app purchases, and offline support — fully handled.',
    extra: 'Half the cost. Same premium quality.',
  },
];

function FeatureRow({ row, index }) {
  const [ref, visible] = useReveal(0.12);
  const isReverse = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`hv2-feature-row ${isReverse ? 'reverse' : ''} ${visible ? 'row-visible' : 'row-hidden'}`}
      style={{ '--row-accent': row.accent, '--row-delay': `${index * 0.08}s` }}
    >
      <div className="hv2-feature-visual">
        <div className="hv2-feature-icon-bg">
          <span className="hv2-feature-icon">{row.icon}</span>
        </div>
        <div className="hv2-feature-glow" />
      </div>
      <div className="hv2-feature-copy">
        <div className="section-pill">{row.tag}</div>
        <h2>{row.title}</h2>
        <p>{row.body}</p>
        <p className="hv2-feature-extra">{row.extra}</p>
        <Link to="/services" className="btn btn-secondary hv2-feature-link">
          Explore this service →
        </Link>
      </div>
    </div>
  );
}

/* ── Bento grid cards ─────────────────────────── */
const BENTO_CARDS = [
  { icon: '⚡', title: 'Blazing fast delivery', body: 'Websites in days. Apps in weeks. Consistently ahead of schedule.', size: 'tall' },
  { icon: '🔒', title: 'Transparent pricing', body: 'No scope creep surprises. UI/UX starts at ₹5K / $100. Web dev from ₹15K / $250.', size: 'normal' },
  { icon: '🌍', title: 'Serving India & beyond', body: 'Clients across India, US, UK, EU — fully async-first so timezone is never a barrier.', size: 'normal' },
  { icon: '🎨', title: 'Design-first code', body: 'Every interface is pixel-precise and grounded in user psychology.', size: 'wide' },
  { icon: '📦', title: '30 days support', body: 'Post-launch bug fixes included. No retainer required.', size: 'normal' },
  { icon: '🤝', title: 'One point of contact', body: 'You talk directly to the person building your product. Always.', size: 'normal' },
];

function BentoCard({ card, i }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`hv2-bento-card glass ${card.size} ${visible ? 'bento-visible' : 'bento-hidden'}`}
      style={{ transitionDelay: `${i * 0.07}s` }}
    >
      <div className="hv2-bento-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.body}</p>
      <div className="hv2-bento-glow-hover" />
    </div>
  );
}

/* ── Stats row ────────────────────────────────── */
const STATS = [
  { value: '50+', label: 'Projects shipped' },
  { value: '3×', label: 'Faster than agencies' },
  { value: '100%', label: 'Client satisfaction' },
  { value: '₹5K', label: 'Starting price' },
];

function StatsRow() {
  const [ref, visible] = useReveal(0.2);
  return (
    <div className={`hv2-stats-row ${visible ? 'stats-visible' : 'stats-hidden'}`} ref={ref}>
      {STATS.map((s, i) => (
        <div key={s.label} className="hv2-stat" style={{ transitionDelay: `${i * 0.1}s` }}>
          <span className="hv2-stat-value text-gradient">{s.value}</span>
          <span className="hv2-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Giant scrolling ticker ───────────────────── */
function Ticker() {
  const words = ['Custom Software', '·', 'Web Design', '·', 'Mobile Apps', '·', 'UI/UX', '·', 'APIs', '·', 'Fast Delivery', '·'];
  const doubled = [...words, ...words];
  return (
    <div className="hv2-ticker-wrap" aria-hidden="true">
      <div className="hv2-ticker-inner">
        {doubled.map((w, i) => (
          <span key={i} className={w === '·' ? 'hv2-ticker-dot' : 'hv2-ticker-word'}>{w}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Final CTA ────────────────────────────────── */
function FinalCTA() {
  const [ref, visible] = useReveal(0.2);
  return (
    <section className={`hv2-final-cta ${visible ? 'cta-visible' : 'cta-hidden'}`} ref={ref}>
      <div className="hv2-final-cta-inner glass">
        <div className="hv2-cta-glow" />
        <div className="section-pill">Ready?</div>
        <h2>
          Let's build something<br />
          <span className="text-gradient">remarkable.</span>
        </h2>
        <p>No fluff. No long waits. Just fast, focused, world-class work.</p>
        <div className="hv2-cta-actions">
          <Link to="/contact" className="btn btn-primary">Start a Project →</Link>
          <Link to="/portfolio" className="btn btn-secondary">View Work</Link>
        </div>
      </div>
    </section>
  );
}

/* ── Main Home Page ───────────────────────────── */
export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats */}
      <section className="hv2-section">
        <StatsRow />
      </section>

      {/* 3. Ticker */}
      <Ticker />

      {/* 4. Feature rows */}
      <section className="hv2-section hv2-features-section">
        <div className="hv2-section-header">
          <div className="section-pill">What we do</div>
          <h2>Pixel-perfect craft.<br /><span className="text-gradient">Engineered to perform.</span></h2>
          <p>Premium digital products across every platform and discipline.</p>
        </div>
        {FEATURE_ROWS.map((row, i) => <FeatureRow key={row.tag} row={row} index={i} />)}
      </section>

      {/* 5. Cycling words */}
      <CyclingWords />

      {/* 6. Bento grid */}
      <section className="hv2-section hv2-bento-section">
        <div className="hv2-section-header">
          <div className="section-pill">Why PIXE</div>
          <h2>Built different,<br /><span className="text-gradient">by design.</span></h2>
        </div>
        <div className="hv2-bento-grid">
          {BENTO_CARDS.map((c, i) => <BentoCard key={c.title} card={c} i={i} />)}
        </div>
      </section>

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Final CTA */}
      <FinalCTA />
    </>
  );
}
