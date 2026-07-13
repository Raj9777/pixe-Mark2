import { useState } from 'react';
import './Contact.css';

const INTERESTS = ['Custom Software', 'Website', 'Mobile App', 'UI/UX Design'];

export default function Contact() {
  const [interest, setInterest] = useState('Website');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-info">
          <h2>
            Let's craft the{' '}
            <span className="text-gradient">future together.</span>
          </h2>
          <p className="contact-sub">
            Whether you're launching a startup or evolving an enterprise, I'm
            ready to accelerate your vision with fast delivery and premium
            quality.
          </p>

          <div className="contact-details glass">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📍</div>
              <div className="contact-detail-info">
                <strong>Global Remote</strong>
                <span>Available worldwide</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div className="contact-detail-info">
                <strong>Direct Communication</strong>
                <span>hello@aetherdev.co</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">⚡</div>
              <div className="contact-detail-info">
                <strong>Fast Response</strong>
                <span>Reply within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-form-wrap glass">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                Message sent!
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-stack">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="full-name">Full Name</label>
                  <div className="input-wrap">
                    <span className="input-icon">👤</span>
                    <input
                      id="full-name"
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrap">
                    <span className="input-icon">✉️</span>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Interested In</label>
                <div className="pill-selector">
                  {INTERESTS.map((item) => (
                    <label key={item} className="pill-option">
                      <input
                        type="radio"
                        name="interest"
                        value={item}
                        checked={interest === item}
                        onChange={() => setInterest(item)}
                      />
                      <span className="pill-label">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="brief">Project Brief</label>
                <textarea
                  id="brief"
                  className="form-control no-icon"
                  rows={4}
                  placeholder="Tell me about your vision, timeline, and requirements…"
                  required
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message &rarr;
                </button>
                <div className="secure-note">
                  <span>🔒</span> Secure, encrypted connection.
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
