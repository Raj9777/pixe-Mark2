import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    img: '/assets/project1.png',
    category: 'Web App',
    title: 'Aeon Cloud Infrastructure',
    desc: 'Real-time spatial visualization platform for global server nodes with streaming telemetry, event alerting, and one-click incident response.',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    year: '2024',
  },
  {
    img: '/assets/project2.png',
    category: 'UI/UX Design',
    title: 'Aether Audio',
    desc: 'Spatial design system and interactive prototype for a next-gen media playback platform, engineered around deep listener immersion.',
    tags: ['Figma', 'Design System', 'Prototype'],
    year: '2024',
  },
  {
    img: '/assets/project3.png',
    category: 'FinTech',
    title: 'Lumina Wealth',
    desc: 'High-performance portfolio management dashboard for private equity clients — real-time market data, AI-driven insights, and secure multi-account management.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'AWS'],
    year: '2024',
  },
  {
    img: '/assets/project4.png',
    category: 'SaaS',
    title: 'HyperLink Supply Chain',
    desc: 'B2B logistics and supply chain platform with live world-map tracking, predictive ETA calculations, and automated customs documentation.',
    tags: ['React', 'Node.js', 'MongoDB', 'MapboxGL'],
    year: '2023',
  },
  {
    img: '/assets/project1.png',
    category: 'Mobile App',
    title: 'Medica Patient Portal',
    desc: 'HIPAA-compliant patient management mobile app with appointment booking, teleconsultation, prescription tracking, and secure medical records.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    year: '2023',
  },
  {
    img: '/assets/project2.png',
    category: 'Custom Software',
    title: 'AI Agent Terminal',
    desc: 'Custom CLI-like LLM integration interface for developer workflows — command parsing, context management, and automated code generation pipelines.',
    tags: ['Python', 'OpenAI API', 'React', 'Docker'],
    year: '2024',
  },
];

const categories = ['All', 'Web App', 'UI/UX Design', 'FinTech', 'SaaS', 'Mobile App', 'Custom Software'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="page-hero portfolio-hero-section">
        <div className="page-hero-content">
          <div className="section-pill">Portfolio</div>
          <h1>Work that <br /><span className="text-gradient">speaks for itself.</span></h1>
          <p>A curated selection of projects across software, web, mobile, and design — each delivered with precision and built to last.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="portfolio-filters-wrap">
        <div className="portfolio-filters">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="section portfolio-page-grid-wrap">
        <div className="portfolio-page-grid">
          {filtered.map(p => (
            <div key={p.title} className="pp-card glass">
              <div className="pp-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="pp-overlay">
                  <span className="pp-overlay-btn">✦ View Project</span>
                </div>
              </div>
              <div className="pp-body">
                <div className="pp-top-row">
                  <span className="pp-cat">{p.category}</span>
                  <span className="pp-year">{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pp-tags">
                  {p.tags.map(t => <span key={t} className="pp-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="no-results">No projects in this category yet.</div>
        )}
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', paddingTop: 0 }}>
        <div className="portfolio-page-cta glass">
          <h3>Have a project in mind?</h3>
          <p>Let's build the next entry in this portfolio — together.</p>
          <Link to="/contact" className="btn btn-primary">Start a Project &rarr;</Link>
        </div>
      </section>
    </>
  );
}
