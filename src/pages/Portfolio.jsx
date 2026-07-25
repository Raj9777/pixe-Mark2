import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: '01',
    category: 'Web App',
    title: 'Clinical AI Concierge & Health Dashboard',
    desc: 'HIPAA-compliant medical decision support chatbot with real-time FHIR data integration, voice input, and tool calling built for an international conference.',
    tags: ['Next.js', 'Vercel AI SDK', 'GPT-4', 'FHIR'],
    metric: 'Zero to Production in 14 Days',
    year: '2025',
  },
  {
    id: '02',
    category: 'SaaS',
    title: 'Aeon Cloud Infrastructure Monitor',
    desc: 'Owned backend reliability and spatial visualizer: cut test times by 95%, migrated cloud storage, and introduced automated static analysis.',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    metric: '−95% Test Runtime · −70% Infra Cost',
    year: '2025',
  },
  {
    id: '03',
    category: 'UI/UX Design',
    title: 'Aether Audio Spatial Interface',
    desc: 'Minimalist dark-mode spatial design system and interactive prototype engineered around deep listener immersion.',
    tags: ['Figma', 'Design Token System', 'Prototyping'],
    metric: 'WCAG AAA Compliant Design System',
    year: '2024',
  },
  {
    id: '04',
    category: 'FinTech',
    title: 'Lumina Private Wealth Terminal',
    desc: 'High-performance portfolio management dashboard for private equity clients with real-time streaming market data and automated reporting.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'AWS'],
    metric: 'Sub-100ms Telemetry Stream',
    year: '2024',
  },
  {
    id: '05',
    category: 'Mobile App',
    title: 'Medica Patient Telehealth App',
    desc: 'Cross-platform React Native patient app with appointment scheduling, video consultation, offline sync, and prescription tracking.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    metric: '4.9★ App Store Rating · 50k+ Users',
    year: '2024',
  },
  {
    id: '06',
    category: 'Custom Software',
    title: 'Developer AI Command CLI & Web SDK',
    desc: 'Custom CLI-like LLM interface for dev workflows — context parsing, automated code refactoring, and CI pipeline checks.',
    tags: ['Python', 'OpenAI API', 'React', 'Docker'],
    metric: 'Used by 2,000+ Open Source Developers',
    year: '2024',
  },
];

const categories = ['All', 'Web App', 'SaaS', 'UI/UX Design', 'FinTech', 'Mobile App', 'Custom Software'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="kb-portfolio-page">
      {/* Hero */}
      <section className="kb-portfolio-hero">
        <span className="kb-badge font-mono">SELECTED CASE STUDIES</span>
        <h1 className="kb-portfolio-title">
          Proof, code & outcomes. <br />
          <span className="kb-title-accent">Built for production speed.</span>
        </h1>
        <p className="kb-portfolio-sub">
          A selection of recent technical engagements, open-source libraries, and bespoke client platforms.
        </p>
      </section>

      {/* Filter Category Pills */}
      <div className="kb-portfolio-filters-wrap">
        <div className="kb-portfolio-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`kb-filter-btn font-mono ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Cards */}
      <section className="kb-section">
        <div className="kb-portfolio-list">
          {filtered.map((p) => (
            <div key={p.id} className="kb-card kb-portfolio-item">
              <div className="kb-port-item-header">
                <div className="kb-port-meta">
                  <span className="kb-step-num">Case Study {p.id}</span>
                  <span className="kb-port-cat font-mono">{p.category}</span>
                </div>
                <span className="kb-port-metric font-mono">{p.metric}</span>
              </div>

              <h2 className="kb-port-item-title">{p.title}</h2>
              <p className="kb-port-item-desc">{p.desc}</p>

              <div className="kb-tags-row">
                {p.tags.map((t) => (
                  <span key={t} className="kb-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="kb-port-footer">
                <span className="kb-port-year font-mono">SHIPPED {p.year}</span>
                <Link to="/contact" className="kb-btn-secondary">
                  Read full case →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="kb-no-results font-mono">No case studies found in this category.</div>
        )}
      </section>

      {/* CTA */}
      <section className="kb-section">
        <div className="kb-final-cta-card">
          <span className="kb-badge font-mono">HAVE A STUCK PROJECT?</span>
          <h2 className="kb-final-title">Let's ship your next platform.</h2>
          <p className="kb-final-sub">
            Book a 30-min call to discuss architecture, timeline, and deliverables.
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

