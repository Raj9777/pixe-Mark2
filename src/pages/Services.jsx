import { useState } from 'react';
import { Link } from 'react-router-dom';
import TechTicker from '../components/TechTicker';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const services = [

  {
    num: '01',
    title: 'Web Design & Architecture',
    tagline: 'Stunning web platforms that convert and scale',
    desc: 'From marketing landing pages to full-scale web applications, we design and build websites that combine aesthetic excellence with measurable performance. Every interaction is refined for conversion.',
    features: ['Responsive & mobile-first architecture', 'SEO-optimised structure', 'Sanity / CMS integration', 'Lighthouse score ≥ 98 guaranteed', 'Analytics & conversion tracking'],
    startINR: '₹15,000',
    startUSD: '$250',
    timeline: '1–3 days',
    ideal: 'Startups, founders, direct-to-consumer brands',
  },
  {
    num: '02',
    title: 'Custom Software & SaaS MVP',
    tagline: 'Built precisely around your business logic',
    desc: 'Off-the-shelf software rarely fits a growing product. We build bespoke web applications — SaaS platforms, internal tools, automation pipelines, and B2B dashboards — engineered for performance.',
    features: ['Full-stack React + Node/Python', 'Database design & query tuning', 'Role-based access & auth', 'Razorpay / Stripe payment flows', 'CI/CD & cloud infrastructure setup'],
    startINR: '₹20,000',
    startUSD: '$300',
    timeline: '3–8 days',
    ideal: 'SaaS founders, SMBs, automation tools',
  },
  {
    num: '03',
    title: 'Cross-Platform Mobile Apps',
    tagline: 'Native performance on iOS & Android',
    desc: 'React Native mobile applications with smooth gesture navigation and native device features. Single codebase, dual platforms, half the cost — without compromising on quality.',
    features: ['React Native (iOS & Android)', 'Push notifications & offline sync', 'App Store & Play Store deployment', 'In-app purchases & payments', 'Native animation performance'],
    startINR: '₹2,50,000',
    startUSD: '$300',
    timeline: '4–10 days',
    ideal: 'Consumer products, mobile B2B tools',
  },
  {
    num: '04',
    title: 'UI/UX & Product Design Systems',
    tagline: 'Minimalist luxury interfaces that feel premium',
    desc: 'High-contrast, typography-driven product design that blends visual polish with deep user psychology. We deliver complete Figma design systems ready for developer handoff.',
    features: ['User research & wireframing', 'High-fidelity Figma mockups', 'Design token systems', 'Interactive micro-prototypes', 'Component library export'],
    startINR: '₹5,000',
    startUSD: '$100',
    timeline: '1–3 days',
    ideal: 'New product launches, UI revamps',
  },
  {
    num: '05',
    title: 'Architecture & Performance Audit',
    tagline: 'Make your slow codebase disappear',
    desc: 'We analyze your codebase, find memory leaks, slow database queries, and cloud bill spikes, and execute precision speed optimization.',
    features: ['Core Web Vitals diagnostic', 'Infra cost reduction', 'Static analysis rollout', 'CI/CD pipeline acceleration', 'Written recommendations roadmap'],
    startINR: '₹30,000',
    startUSD: '$400',
    timeline: '1–4 days',
    ideal: 'Legacy apps, slow web products',
  },
];

export default function Services() {
  const [isINR, setIsINR] = useState(true);
  useScrollReveal();

  return (
    <div className="kb-services-page">
      {/* Page Hero */}
      <section className="kb-services-hero">
        <div className="kb-badge font-mono">SERVICES & ENGAGEMENTS</div>
        <h1 className="kb-services-title">
          Proof-driven engineering. <br />
          <span className="kb-title-accent">Fixed scope, zero retainers.</span>
        </h1>
        <p className="kb-services-sub">
          Every project is handled with senior engineering precision. No junior delegates, no agency inflation — just focused execution.
        </p>

        {/* Currency toggle */}
        <div className="kb-currency-strip">
          <div className="currency-toggle glass">
            <button className={isINR ? 'active' : ''} onClick={() => setIsINR(true)}>
              ₹ INR
            </button>
            <button className={!isINR ? 'active' : ''} onClick={() => setIsINR(false)}>
              $ USD
            </button>
          </div>
          <span className="currency-note font-mono">PROPOSAL RATES IN YOUR REGION</span>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechTicker />

      {/* Services List */}
      <section className="kb-section">

        <div className="kb-services-grid">
          {services.map((s) => (
            <div key={s.num} className="kb-card kb-service-card">
              <div className="kb-service-top">
                <span className="kb-step-num">{s.num}</span>
                <span className="kb-service-timeline font-mono">{s.timeline} turnaround</span>
              </div>

              <h2 className="kb-service-heading">{s.title}</h2>
              <p className="kb-service-tagline font-mono">{s.tagline}</p>
              <p className="kb-service-desc">{s.desc}</p>

              <div className="kb-service-features">
                <h4 className="font-mono">WHAT IS INCLUDED</h4>
                <ul>
                  {s.features.map((f, i) => (
                    <li key={i}>
                      <span className="kb-check font-mono">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="kb-service-bottom">
                <div className="kb-price-block">
                  <span className="price-lbl font-mono">STARTING FROM</span>
                  <span className="price-val font-mono">{isINR ? s.startINR : s.startUSD}</span>
                </div>
                <Link to="/contact" className="kb-btn-primary">
                  <span>Book a call</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="kb-section">
        <div className="kb-statement-card text-center" style={{ textAlign: 'center' }}>
          <span className="kb-badge font-mono">UNCERTAIN OF SCOPE?</span>
          <h2 className="kb-statement-heading" style={{ fontSize: '2.4rem' }}>
            Need a custom hybrid contract?
          </h2>
          <p className="kb-statement-body" style={{ margin: '0 auto 28px auto' }}>
            Most projects require a mix of design, web development, and backend APIs. Book a 30-min call and we will map out an exact milestone roadmap.
          </p>
          <Link to="/contact" className="kb-btn-primary">
            <span>Book a 30-min call</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

