import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [price, setPrice] = useState({ currency: '$', amount: '300', flag: '🌐', loading: true });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error();
        const data = await res.json();
        // Convert country code to flag emoji (each letter → regional indicator symbol)
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      <div 
        className="hero-content"
        style={{
          opacity: Math.max(0, 1 - scrollY / 550),
          transform: `translateY(${scrollY * 0.25}px)`,
          transition: 'none'
        }}
      >
        <div className="hero-badge glass">Solo Agency · PIXE</div>

        <h1>
          Built faster. <br />
          <span className="text-gradient">Priced fairly.</span>
        </h1>

        <p className="hero-sub">
          PIXE crafts custom software and high-performance websites with delivery
          that's 3× faster than the market — without the agency price tag.
        </p>


        <div className="pricing-pill glass">
          <span className="pricing-pill-label">Starting from</span>
          <div className="pricing-pill-divider" />
          <div className="pricing-pill-value">
            <span className="pricing-currency">
              {price.loading ? '…' : price.currency}
            </span>
            <span className="pricing-amount">
              {price.loading ? '—' : price.amount}
            </span>
          </div>
          <span className="pricing-note">
            {price.loading ? '🌐' : price.flag}
          </span>
        </div>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-secondary">View My Work</a>
          <a href="#contact" className="btn btn-primary">
            Let's craft the future &rarr;
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
