import { useState } from 'react';
import './TechTicker.css';

const TECH_ROW_1 = [
  { name: 'React 19', category: 'Frontend Engine', icon: '⚛️' },
  { name: 'Vite 8', category: 'Build Tool', icon: '⚡' },
  { name: 'Next.js 15', category: 'SSR Framework', icon: '▲' },
  { name: 'Node.js', category: 'Runtime Server', icon: '🟢' },
  { name: 'TypeScript', category: 'Type Safety', icon: '🔷' },
  { name: 'Python', category: 'AI & Data Backend', icon: '🐍' },
  { name: 'PostgreSQL', category: 'Relational DB', icon: '🐘' },
  { name: 'AWS Cloud', category: 'Infrastructure', icon: '☁️' },
  { name: 'Docker', category: 'Containerization', icon: '🐳' },
  { name: 'Tailwind CSS', category: 'Styling System', icon: '🎨' },
  { name: 'GraphQL', category: 'Query Language', icon: '🕸️' },
  { name: 'WebGL / Three.js', category: '3D Animations', icon: '🎮' }
];

const TECH_ROW_2 = [
  { name: 'Redux Toolkit', category: 'State Management', icon: '🔄' },
  { name: 'Figma', category: 'UI/UX Design', icon: '🎨' },
  { name: 'Redis', category: 'Caching & Queues', icon: '🔴' },
  { name: 'Supabase', category: 'Cloud Backend', icon: '⚡' },
  { name: 'Vercel Platform', category: 'Edge Deployment', icon: '🚀' },
  { name: 'Rust', category: 'High-Perf Core', icon: '⚙️' },
  { name: 'PyTorch / AI', category: 'Machine Learning', icon: '🔥' },
  { name: 'MongoDB', category: 'NoSQL Database', icon: '🍃' },
  { name: 'OAuth / JWT', category: 'Auth Systems', icon: '🔐' },
  { name: 'WebSockets', category: 'Real-Time Sync', icon: '📡' },
  { name: 'Jest / Playwright', category: 'QA & E2E Testing', icon: '🧪' },
  { name: 'REST APIs', category: 'Microservices', icon: '🔌' }
];

export default function TechTicker() {
  const [activeTech, setActiveTech] = useState(null);

  return (
    <section className="tech-ticker-section">
      <div className="tech-ticker-header text-center">
        <span className="kb-badge font-mono">TECHNOLOGIES WE USE</span>
        <h2 className="tech-ticker-title">
          Powered by modern, enterprise-grade engineering stack.
        </h2>
        <p className="tech-ticker-sub">
          We leverage bleeding-edge tools, resilient frameworks, and high-performance databases to deliver zero-latency web platforms.
        </p>
      </div>

      {/* Marquee Row 1 (Scrolls Left) */}
      <div className="ticker-track-wrap">
        <div className="ticker-track track-left">
          {[...TECH_ROW_1, ...TECH_ROW_1].map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className={`tech-ticker-card ${activeTech === tech.name ? 'active' : ''}`}
              onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
            >
              <span className="tech-icon">{tech.icon}</span>
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-cat font-mono">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Scrolls Right) */}
      <div className="ticker-track-wrap" style={{ marginTop: '16px' }}>
        <div className="ticker-track track-right">
          {[...TECH_ROW_2, ...TECH_ROW_2].map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className={`tech-ticker-card ${activeTech === tech.name ? 'active' : ''}`}
              onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
            >
              <span className="tech-icon">{tech.icon}</span>
              <div className="tech-info">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-cat font-mono">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
