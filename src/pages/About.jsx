import { Link } from 'react-router-dom';
import './About.css';

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'Docker',
  'Figma', 'React Native', 'Express', 'GraphQL', 'Tailwind CSS',
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We start with a deep-dive conversation to fully understand your goals, users, constraints, and success metrics.',
    time: '1–2 days',
  },
  {
    num: '02',
    title: 'Proposal & Scope',
    desc: 'I deliver a detailed project proposal with tech stack, timeline, milestones, and transparent fixed pricing.',
    time: '1–3 days',
  },
  {
    num: '03',
    title: 'Design & Prototype',
    desc: 'High-fidelity Figma designs with clickable prototypes so you can see and feel the product before a single line of code is written.',
    time: '1–2 days',
  },
  {
    num: '04',
    title: 'Development Sprints',
    desc: 'Iterative daily updates with live preview links. You see real progress every single day — no waiting in the dark.',
    time: '2–8 days',
  },
  {
    num: '05',
    title: 'Testing & QA',
    desc: 'Rigorous cross-browser, cross-device testing, performance audits, and accessibility checks before launch.',
    time: '3–5 days',
  },
  {
    num: '06',
    title: 'Launch & Support',
    desc: 'Smooth deployment to your infrastructure of choice, plus 30 days of post-launch support included in every project.',
    time: 'Ongoing',
  },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-content">
          <div className="section-pill">About PIXE</div>
          <h1>One builder. <br /><span className="text-gradient">Limitless ambition.</span></h1>
          <p>PIXE is a solo digital agency that punches well above its weight. I combine the design sensibility of a creative studio with the engineering depth of a product team — minus the agency overhead, delays, and bloated invoices.</p>
        </div>
        <div className="about-img-wrap glass">
          <img src="/assets/about_hero.png" alt="PIXE workspace" />
          <div className="about-img-badge glass">
            <span className="badge-value">3×</span>
            <span className="badge-label">Faster than the market</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="about-story-grid">
          <div>
            <div className="section-pill">The Story</div>
            <h2>Why PIXE exists</h2>
            <p>After watching businesses spend months and fortunes at agencies that delivered mediocre results, I set out to prove a simpler model works better. One person, fully accountable, deeply invested in every pixel and every line of code.</p>
            <p>The result? Clients who expected 3-week timelines get their products in 3 days. Startups that thought premium design was out of reach discover it fits their budget. Enterprises find a partner who actually understands their business, not just their brief.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>Work With Me &rarr;</Link>
          </div>
          <div className="story-highlights">
            {[
              { icon: '🎯', title: 'Mission', desc: 'Make world-class digital products accessible to every business — fast, affordable, and with zero compromise on quality.' },
              { icon: '🔮', title: 'Vision', desc: 'A world where great software is not a privilege of the well-funded, but a baseline for every ambitious idea.' },
              { icon: '⚡', title: 'Values', desc: 'Radical transparency. Obsessive craft. Honest timelines. Long-term relationships over one-off transactions.' },
            ].map(v => (
              <div key={v.title} className="story-card glass">
                <span className="story-icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section about-tech">
        <div className="section-header">
          <div className="section-pill">Tech Stack</div>
          <h2>Tools of the trade</h2>
          <p>Modern, battle-tested technologies chosen for performance, scalability, and developer experience.</p>
        </div>
        <div className="tech-pills">
          {techStack.map(t => (
            <span key={t} className="tech-pill glass">{t}</span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section about-process">
        <div className="section-header">
          <div className="section-pill">Process</div>
          <h2>How PIXE works</h2>
          <p>A clear, collaborative process that keeps you informed and in control from day one to launch.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(s => (
            <div key={s.num} className="process-step glass">
              <div className="process-step-header">
                <span className="process-num text-gradient">{s.num}</span>
                <span className="process-time">{s.time}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '16px' }}>
          Sounds like a fit?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
          I'm selective about projects I take on — not because I'm exclusive, but because I give every client 100%.
        </p>
        <Link to="/contact" className="btn btn-primary">Let's Talk &rarr;</Link>
      </section>
    </>
  );
}
