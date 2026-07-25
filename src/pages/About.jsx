import { Link } from 'react-router-dom';
import TechTicker from '../components/TechTicker';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const processSteps = [
  {
    num: '01',
    title: 'We own the outcome',
    desc: 'Give us the core problem, not just a static task list. We find the path, flag architecture risks early, and ship — you don\'t chase us.',
  },
  {
    num: '02',
    title: 'Remote, async, worldwide',
    desc: 'We work async-first with overlapping call windows. Decisions are documented in writing so your team is never stuck waiting for us.',
  },
  {
    num: '03',
    title: 'Two versions of every decision',
    desc: 'Your engineers get the deep technical detail. Your investors get the business case. Same decision, two versions — zero translation lost.',
  },
  {
    num: '04',
    title: 'Judgment over billable hours',
    desc: 'The right decision made once beats the wrong one made fast and unwound for months. We define rate and scope upfront on our first call — no surprises.',
  },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="kb-about-page">
      {/* Hero */}
      <section className="kb-about-hero">
        <span className="kb-badge font-mono">WHO YOU'D BE WORKING WITH</span>
        <h1 className="kb-about-title">
          Senior engineering. <br />
          <span className="kb-title-accent">Zero agency overhead.</span>
        </h1>
        <p className="kb-about-sub">
          We take projects that are stuck, complex, or lack a clear brief and ship them end-to-end. Custom web applications, AI integrations, mobile platforms, and performance optimizations.
        </p>
      </section>

      {/* Tech Stack Marquee */}
      <TechTicker />

      {/* Story & Philosophy */}
      <section className="kb-section">
        <div className="kb-statement-card">
          <span className="kb-badge font-mono">DIRECT ACCOUNTABILITY</span>
          <h2 className="kb-statement-heading">
            Proof, not adjectives.
          </h2>
          <p className="kb-statement-body">
            Most agencies assign junior developers while charging senior rates. At PIXE, you speak directly to the engineer writing your code. Every architecture choice, database schema, and UI component is documented in writing — because six months from now, that clarity is what saves your product.
          </p>
        </div>
      </section>


      {/* Process */}
      <section className="kb-section">
        <div className="kb-section-header">
          <span className="kb-badge font-mono">HOW WE WORK</span>
          <h2 className="kb-section-title">Our Operating Model</h2>
          <p className="kb-section-sub">Built around speed, transparency, and async momentum.</p>
        </div>
        <div className="kb-process-grid">
          {processSteps.map((s) => (
            <div key={s.num} className="kb-card kb-process-card">
              <span className="kb-step-num">{s.num}</span>
              <h3 className="kb-process-title">{s.title}</h3>
              <p className="kb-process-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="kb-section">
        <div className="kb-final-cta-card">
          <span className="kb-badge font-mono">READY TO TALK?</span>
          <h2 className="kb-final-title">Let's discuss your product requirements.</h2>
          <p className="kb-final-sub">
            Book a 30-minute call. No pitch deck — just your problem and whether we are the right fit.
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

