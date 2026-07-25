import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const [price, setPrice] = useState({ currency: '$', amount: '100', flag: '🌐', loading: true });

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
      <div className="kb-hero-container">
        {/* Availability Badge */}
        <div className="kb-hero-badge-wrap">
          <div className="kb-badge">
            <span className="kb-status-dot" />
            <span>AVAILABLE FOR NEW PROJECTS · Q3 2026</span>
          </div>
        </div>

        {/* Editorial Heading */}
        <h1 className="kb-hero-title">
          Bespoke Software & <br />
          <span className="kb-title-accent">Web Architecture.</span>
        </h1>

        {/* Subtitle statement */}
        <p className="kb-hero-sub">
          You have an idea, an AI prototype, or a web application that needs to launch.
          We find what's blocking it and ship the production-ready solution — <strong>3× faster</strong> than traditional agencies, with zero retainer fluff.
        </p>

        {/* Pricing & CTA Row */}
        <div className="kb-hero-cta-group">
          <Link to="/contact" className="kb-btn-primary">
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

        {/* Proof, not adjectives strip */}
        <div className="kb-proof-strip">
          <div className="proof-header font-mono">PROOF, NOT ADJECTIVES</div>
          <div className="proof-grid">
            <div className="proof-card">
              <div className="proof-num font-mono">50+</div>
              <div className="proof-desc">Production web apps & sites shipped</div>
            </div>
            <div className="proof-card">
              <div className="proof-num font-mono">3×</div>
              <div className="proof-desc">Faster turnaround than agencies</div>
            </div>
            <div className="proof-card">
              <div className="proof-num font-mono">99+</div>
              <div className="proof-desc">Lighthouse performance scores</div>
            </div>
            <div className="proof-card">
              <div className="proof-num font-mono">100%</div>
              <div className="proof-desc">Fixed scope & transparent pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

