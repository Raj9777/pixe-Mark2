import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: '🌐',
    title: 'Web Design & Development',
    tagline: 'Stunning websites that convert visitors into customers',
    desc: 'From marketing landing pages to full-scale web applications, we design and build websites that combine aesthetic excellence with measurable business performance. Trusted by startups and SMEs across India — every pixel intentional, every interaction refined for conversions.',
    features: ['Responsive & mobile-first design', 'SEO-optimised architecture for Google India', 'CMS integration (Sanity, Contentful)', 'Performance ≥ 95 Lighthouse score', 'Analytics & conversion tracking'],
    startINR: '₹15,000',
    startUSD: '$250',
    timeline: '1–3 days',
    ideal: 'Startups, small businesses, personal brands',
  },
  {
    icon: '💻',
    title: 'Custom Software Development',
    tagline: 'Built exactly for your Indian business',
    desc: 'Off-the-shelf software doesn\'t fit every business. We build bespoke applications — SaaS platforms, internal tools, automation systems, and business dashboards — designed around your specific Indian market workflows and data needs.',
    features: ['Full-stack development (React + Node/Python)', 'Database design & optimisation', 'Authentication & role-based access', 'Third-party API integrations (Razorpay, etc.)', 'Cloud deployment & CI/CD pipelines'],
    startINR: '₹20,000',
    startUSD: '$300',
    timeline: '3–8 days',
    ideal: 'SMBs, enterprises, SaaS founders',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    tagline: 'Native feel, cross-platform speed',
    desc: 'Cross-platform mobile applications built with React Native that run beautifully on both iOS and Android. One codebase, two platforms, half the cost — without compromising on quality or performance. Perfect for India\'s mobile-first audience.',
    features: ['React Native (iOS & Android)', 'Push notifications', 'Offline support', 'App Store & Play Store submission', 'UPI & Razorpay in-app payments'],
    startINR: '₹2,50,000',
    startUSD: '$300',
    timeline: '4–10 days',
    ideal: 'Consumer apps, B2B mobile tools',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    tagline: 'Design that drives decisions',
    desc: 'Premium interface design that blends beautiful aesthetics with deep user psychology. We deliver complete design systems — from research and wireframes to pixel-perfect Figma files ready for handoff. Tailored for Indian users and global standards.',
    features: ['User research & persona mapping', 'Wireframes & information architecture', 'High-fidelity Figma designs', 'Interactive prototypes', 'Design system & component library'],
    startINR: '₹5,000',
    startUSD: '$100',
    timeline: '1–3 days',
    ideal: 'Product teams, redesigns, new products',
  },
  {
    icon: '🔌',
    title: 'API & Backend Development',
    tagline: 'The engine under the hood',
    desc: 'Robust, scalable backend services and API layers that power your digital products. From simple REST endpoints to complex microservice architectures with real-time capabilities — built for Indian scale and global reliability.',
    features: ['REST & GraphQL API design', 'Database architecture (SQL & NoSQL)', 'Real-time with WebSockets', 'OAuth & JWT authentication', 'AWS / GCP / Vercel deployment'],
    startINR: '₹40,000',
    startUSD: '$500',
    timeline: '2–6 days',
    ideal: 'Products needing backend infrastructure',
  },
  {
    icon: '⚡',
    title: 'Performance Optimisation',
    tagline: 'Make your existing product fly',
    desc: 'Already have a product that feels slow, bloated, or hard to maintain? We audit, diagnose, and systematically optimise your codebase for speed, scalability, and developer experience — ensuring you rank better on Google India.',
    features: ['Core Web Vitals audit', 'Bundle size reduction', 'Database query optimisation', 'Caching strategy implementation', 'Refactoring & code quality'],
    startINR: '₹30,000',
    startUSD: '$400',
    timeline: '1–4 days',
    ideal: 'Existing products with performance issues',
  },
];

export default function Services() {
  const [isINR, setIsINR] = useState(true);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero services-hero-section">
        <div className="page-hero-content">
          <div className="section-pill">Services</div>
          <h1>Premium work. <br /><span className="text-gradient">Fair pricing.</span></h1>
          <p>Every service is delivered with the full attention and craft of a senior specialist. No juniors, no outsourcing — just focused, expert execution on every project.</p>
        </div>
        <div className="services-hero-stats">
          {[['50+', 'Projects shipped'], ['3d', 'Average delivery'], ['0', 'Hidden fees'], ['30d', 'Post-launch support']].map(([v, l]) => (
            <div key={l} className="sh-stat glass">
              <span className="sh-stat-val text-gradient">{v}</span>
              <span className="sh-stat-label">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Currency toggle */}
      <div className="currency-toggle-wrap">
        <div className="currency-toggle glass">
          <button className={isINR ? 'active' : ''} onClick={() => setIsINR(true)}>₹ INR</button>
          <button className={!isINR ? 'active' : ''} onClick={() => setIsINR(false)}>$ USD</button>
        </div>
        <span className="currency-note">Toggle to see prices in your currency</span>
      </div>

      {/* Service cards */}
      <section className="section services-list">
        {services.map((s, i) => (
          <div key={s.title} className={`svc-card glass ${i % 2 === 1 ? 'svc-card-alt' : ''}`}>
            <div className="svc-card-left">
              <div className="svc-icon-wrap">
                <span className="svc-icon">{s.icon}</span>
              </div>
              <div className="svc-meta">
                <span className="svc-tagline">{s.tagline}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <Link to="/contact" className="btn btn-primary svc-btn">Get a Quote &rarr;</Link>
              </div>
            </div>
            <div className="svc-card-right">
              <div className="svc-features glass">
                <h4>What's included</h4>
                <ul>
                  {s.features.map(f => <li key={f}><span className="check">✓</span>{f}</li>)}
                </ul>
              </div>
              <div className="svc-pricing-box glass">
                <div className="svc-price-row">
                  <div>
                    <span className="svc-price-label">Starting from</span>
                    <div className="svc-price">{isINR ? s.startINR : s.startUSD}</div>
                  </div>
                  <div>
                    <span className="svc-price-label">Typical timeline</span>
                    <div className="svc-timeline">{s.timeline}</div>
                  </div>
                </div>
                <div className="svc-ideal">
                  <span>Ideal for: </span>{s.ideal}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ note */}
      <section className="section services-note">
        <div className="services-note-inner glass">
          <h3>Not sure which service you need?</h3>
          <p>Most projects span multiple capabilities. Book a free discovery call and I'll map out exactly what your product needs — with no obligation and no sales pitch.</p>
          <Link to="/contact" className="btn btn-primary">Book a Free Call &rarr;</Link>
        </div>
      </section>
    </>
  );
}
