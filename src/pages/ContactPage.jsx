import { useState } from 'react';
import '../components/Contact.css';
import './ContactPage.css';


const INTERESTS = ['Custom Software', 'Website', 'Mobile App', 'UI/UX Design', 'API / Backend', 'Other'];

const BUDGETS_INR = ['₹20,000 – ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', '₹5,00,000+'];
const BUDGETS_USD = ['$300 – $700', '$700 – $2,000', '$2,000 – $7,000', '$7,000+'];

const faqs = [
  {
    q: 'How fast can you actually deliver?',
    a: 'Most websites ship in 1–3 days. Custom software takes 3–8 days depending on complexity. I\'ve never missed a deadline.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — I work with clients worldwide. Payments accepted in INR and USD. I work async-first so timezone is rarely an issue.',
  },
  {
    q: 'What\'s included after launch?',
    a: 'Every project includes 30 days of post-launch support for bug fixes at no extra cost. Ongoing retainers are available.',
  },
  {
    q: 'Can I see work before paying?',
    a: 'Absolutely. I share a detailed proposal with mockups before any work begins. You only proceed when you\'re fully confident.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. I\'m happy to sign an NDA before we discuss your project details. Confidentiality is standard practice for me.',
  },
  {
    q: 'What if I already have a half-built project?',
    a: 'I frequently take on rescue projects and existing codebases. I\'ll do a thorough audit first so you know exactly what you\'re getting into.',
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item glass ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-q">
        <span>{q}</span>
        <span className={`faq-chevron ${open ? 'up' : ''}`}>›</span>
      </div>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

import { sendContactEmail } from '../services/emailService';

export default function ContactPage() {
  const [interest, setInterest] = useState('Website');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isINR, setIsINR] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', brief: '', ref: '' });
  const [sending, setSending] = useState(false);
  
  const budgets = isINR ? BUDGETS_INR : BUDGETS_USD;

  const handleChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('cp-', '');
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const message = `Company: ${formData.company || 'N/A'}\nPhone/WhatsApp: ${formData.phone || 'N/A'}\nReference URLs: ${formData.ref || 'N/A'}\n\nProject Brief:\n${formData.brief}`;
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        interest,
        budget,
        message
      });
    } catch (err) {
      console.error('EmailJS error (contact page):', err);
    } finally {
      setSending(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', company: '', phone: '', brief: '', ref: '' });
      setInterest('Website');
      setBudget('');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero contact-page-hero">
        <div className="page-hero-content">
          <div className="section-pill">Contact</div>
          <h1>Let's craft the <br /><span className="text-gradient">future together.</span></h1>
          <p>Ready to build something remarkable? Tell me about your project and I'll get back to you within 24 hours — no fluff, no sales pitch.</p>
        </div>
        <div className="contact-page-aside">
          <div className="contact-details glass">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📍</div>
              <div className="contact-detail-info">
                <strong>Global Remote</strong>
                <span>Working with clients worldwide</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div className="contact-detail-info">
                <strong>hello@pixe.dev</strong>
                <span>Reply within 24 hours</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">⚡</div>
              <div className="contact-detail-info">
                <strong>Fast Delivery</strong>
                <span>Websites from 1 day · Software from 3 days</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">💰</div>
              <div className="contact-detail-info">
                <strong>Starting From ₹20,000 / $300</strong>
                <span>Transparent fixed pricing, no surprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section contact-form-section">
        <div className="contact-form-wrap glass">
          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">🚀</div>
              <h3>Message received!</h3>
              <p>I'll review your project details and get back to you within 24 hours. Exciting things ahead!</p>
              <button type="button" className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-stack">
              <div className="form-section-title">Project Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cp-name">Full Name *</label>
                  <div className="input-wrap">
                    <span className="input-icon">👤</span>
                    <input id="cp-name" type="text" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cp-email">Email Address *</label>
                  <div className="input-wrap">
                    <span className="input-icon">✉️</span>
                    <input id="cp-email" type="email" className="form-control" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cp-company">Company / Brand</label>
                  <div className="input-wrap">
                    <span className="input-icon">🏢</span>
                    <input id="cp-company" type="text" className="form-control" placeholder="Optional" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cp-phone">Phone / WhatsApp</label>
                  <div className="input-wrap">
                    <span className="input-icon">📱</span>
                    <input id="cp-phone" type="tel" className="form-control" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Service Needed *</label>
                <div className="pill-selector">
                  {INTERESTS.map(item => (
                    <label key={item} className="pill-option">
                      <input type="radio" name="interest" value={item} checked={interest === item} onChange={() => setInterest(item)} />
                      <span className="pill-label">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <div className="budget-label-row">
                  <label>Approximate Budget</label>
                  <div className="currency-toggle glass" style={{ transform: 'scale(0.85)', transformOrigin: 'right' }}>
                    <button type="button" className={isINR ? 'active' : ''} onClick={() => setIsINR(true)}>₹</button>
                    <button type="button" className={!isINR ? 'active' : ''} onClick={() => setIsINR(false)}>$</button>
                  </div>
                </div>
                <div className="pill-selector">
                  {budgets.map(b => (
                    <label key={b} className="pill-option">
                      <input type="radio" name="budget" value={b} checked={budget === b} onChange={() => setBudget(b)} />
                      <span className="pill-label">{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cp-brief">Project Brief *</label>
                <textarea
                  id="cp-brief"
                  className="form-control no-icon"
                  rows={5}
                  placeholder="Tell me about your project — what problem it solves, who the users are, your timeline, and any existing work or references you have."
                  value={formData.brief}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cp-ref">Reference URLs / Inspiration</label>
                <div className="input-wrap">
                  <span className="input-icon">🔗</span>
                  <input id="cp-ref" type="text" className="form-control" placeholder="https://example.com (optional)" value={formData.ref} onChange={handleChange} />
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }} disabled={sending}>
                  {sending ? 'Sending Brief...' : 'Send Project Brief \u2192'}
                </button>
                <div className="secure-note">
                  <span>🔒</span> Secure, encrypted. No spam, ever.
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section contact-faq">
        <div className="section-header">
          <div className="section-pill">FAQ</div>
          <h2>Common Questions</h2>
          <p>Quick answers to things people usually ask before reaching out.</p>
        </div>
        <div className="faq-list">
          {faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>
    </>
  );
}
