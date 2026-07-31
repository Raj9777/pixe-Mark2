import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const ROTATING_WORDS = [
  'Web Architecture.',
  'SaaS Applications.',
  'AI Integrations.',
  'Mobile Platforms.',
  'UI/UX Design Systems.'
];

export default function Hero() {
  const [price, setPrice] = useState({ currency: '$', amount: '100', flag: '🌐', loading: true });
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Rotating headline accent words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(wordInterval);
  }, []);

  // IP Location & Currency detection
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error();
        const data = await res.json();
        const toFlag = (code) =>
          code
            .toUpperCase()
            .split('')
            .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
            .join('');
        const flag = data.country_code ? toFlag(data.country_code) : '🌐';
        if (data.country_code === 'IN') {
          setPrice({ currency: '₹', amount: '5,000', flag, loading: false });
        } else {
          setPrice({ currency: '$', amount: '100', flag, loading: false });
        }
      } catch {
        setPrice({ currency: '$', amount: '100', flag: '🌐', loading: false });
      }
    };
    detectLocation();
  }, []);

  return (
    <section id="hero" className="kb-hero">
      {/* Background Animated Grid & Accents */}
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="kb-hero-container">
        {/* Availability Badge */}
        <div className="kb-hero-badge-wrap">
          <div className="kb-badge hero-pulse-badge">
            <span className="kb-status-dot animated-dot" />
            <span>AVAILABLE FOR NEW PROJECTS · Q3 2026</span>
          </div>
        </div>

        {/* Hero Split Layout */}
        <div className="hero-main-layout">
          <div className="hero-left-content">
            {/* Editorial Animated Heading */}
            <h1 className="kb-hero-title">
              Custom Software & <br />
              <span className={`kb-title-accent word-flip ${fade ? 'fade-in' : 'fade-out'}`}>
                {ROTATING_WORDS[wordIndex]}
              </span>
            </h1>

            {/* Subtitle statement */}
            <p className="kb-hero-sub">
              Pixel Excellence is a custom software development company & website development agency serving India, USA, and Canada.
              We build high-performance React web applications and mobile software — <strong>3× faster</strong> than traditional agencies, with zero retainer fluff.
            </p>

            {/* Pricing & CTA Row */}
            <div className="kb-hero-cta-group">
              <Link to="/contact" className="kb-btn-primary hero-btn-animated">
                <span>Book a 30-min call</span>
                <span>→</span>
              </Link>
              
              <a href="#work" className="kb-btn-secondary">
                <span>See the work</span>
                <span>↓</span>
              </a>

              {/* Pricing indicator */}
              <div className="kb-hero-pricing">
                <span className="pricing-label font-mono">FROM</span>
                <span className="pricing-val font-mono">
                  {price.loading ? '…' : `${price.currency}${price.amount}`}
                </span>
                <span className="pricing-flag">{price.flag}</span>
              </div>
            </div>
          </div>

          {/* Right — Live Execution Terminal Visual */}
          <div className="hero-right-visual">
            <div className="terminal-card">
              <div className="terminal-header font-mono">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="terminal-title">PIXE_ENGINE_STATION_v2.6</span>
              </div>
              <div className="terminal-body font-mono">
                <div className="term-line prompt">&gt; pixe deploy --target=production</div>
                <div className="term-line success">✓ Environment initialized: React 19 + Vite</div>
                <div className="term-line success">✓ Architecture audit: 0 vulnerabilities</div>
                <div className="term-line highlight">⚡ Lighthouse Score: 99/100 (Core Web Vitals)</div>
                <div className="term-line highlight">⚡ First Contentful Paint: 0.2s</div>
                <div className="term-line info">ℹ Response SLA: Guaranteed &lt; 24h</div>
                <div className="term-line cursor-line">
                  <span>&gt; STATUS: </span>
                  <span className="status-live-pulse">LIVE & READY TO SHIP</span>
                  <span className="term-cursor">▋</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof, not adjectives strip */}
        <div className="kb-proof-strip">
          <div className="proof-header font-mono">PROOF, NOT ADJECTIVES</div>
          <div className="proof-grid">
            <div className="proof-card float-card-1">
              <div className="proof-num font-mono">50+</div>
              <div className="proof-desc">Production web apps & sites shipped</div>
            </div>
            <div className="proof-card float-card-2">
              <div className="proof-num font-mono">3×</div>
              <div className="proof-desc">Faster turnaround than agencies</div>
            </div>
            <div className="proof-card float-card-3">
              <div className="proof-num font-mono">99+</div>
              <div className="proof-desc">Lighthouse performance scores</div>
            </div>
            <div className="proof-card float-card-4">
              <div className="proof-num font-mono">100%</div>
              <div className="proof-desc">Fixed scope & transparent pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


