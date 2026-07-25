import { useState } from 'react';
import { sendContactEmail } from '../services/emailService';
import { saveContactSub } from '../services/dbService';
import { logSubmission } from '../services/analyticsService';
import '../components/Contact.css';
import './ContactPage.css';

const INTERESTS = ['Custom Software', 'Website Architecture', 'Mobile App', 'UI/UX Design', 'API / Backend', 'Audit'];
const BUDGETS_INR = ['₹15,000 – ₹50,000', '₹50,000 – ₹1.5L', '₹1.5L – ₹5L', '₹5L+'];
const BUDGETS_USD = ['$100 – $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000+'];

const faqs = [
  {
    q: 'How fast can you deliver?',
    a: 'Websites ship in 1–3 days. Custom software & SaaS platforms take 3–8 days depending on scope. We set a fixed delivery date on day one.',
  },
  {
    q: 'Do you work async with international clients?',
    a: 'Yes. We work async-first with clients in India, US, UK, and EU. Rates are available in INR and USD.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes 30 days of post-launch support and bug fixes at zero extra charge.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, we are happy to sign an NDA before reviewing proprietary technical briefs or codebases.',
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`kb-card kb-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)}>
      <div className="kb-faq-q">
        <span className="font-mono" style={{ color: 'var(--accent-cyan)', marginRight: '10px' }}>?</span>
        <span>{q}</span>
        <span className="kb-faq-chevron">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="kb-faq-a">{a}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [interest, setInterest] = useState('Website Architecture');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isINR, setIsINR] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', brief: '', ref: '' });
  const [sending, setSending] = useState(false);

  const budgets = isINR ? BUDGETS_INR : BUDGETS_USD;

  const handleChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('cp-', '');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const message = `Company: ${formData.company || 'N/A'}\nPhone/WhatsApp: ${formData.phone || 'N/A'}\nReference URLs: ${formData.ref || 'N/A'}\n\nProject Brief:\n${formData.brief}`;
    const submissionPayload = {
      type: 'Contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      interest,
      budget,
      message,
    };

    logSubmission(submissionPayload);

    try {
      await Promise.allSettled([
        sendContactEmail(submissionPayload),
        saveContactSub(submissionPayload),
      ]);
    } catch (err) {
      console.error('Contact submission error:', err);
    } finally {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', brief: '', ref: '' });
    }
  };

  return (
    <div className="kb-contact-page">
      {/* Hero */}
      <section className="kb-contact-hero">
        <div className="kb-badge font-mono">LET'S TALK</div>
        <h1 className="kb-contact-title">
          Book a 30-min call. <br />
          <span className="kb-title-accent">No sales pitch deck.</span>
        </h1>
        <p className="kb-contact-sub">
          Tell us about your product challenge. We read every inquiry and reply within 24 hours with technical feedback and estimated scope.
        </p>
      </section>

      {/* Main Grid */}
      <section className="kb-section">
        <div className="kb-contact-grid">
          {/* Left Details */}
          <div className="kb-contact-info">
            <div className="kb-card">
              <h3 className="kb-info-heading font-mono">DIRECT CONTACT</h3>

              <div className="kb-info-item">
                <span className="info-lbl font-mono">EMAIL</span>
                <a href="mailto:raj@pixelexcellence.online" className="info-val font-mono">raj@pixelexcellence.online</a>
              </div>

              <div className="kb-info-item">
                <span className="info-lbl font-mono">DIRECT CALL / WHATSAPP</span>
                <a href="tel:+917381763856" className="info-val font-mono">+91 7381763856</a>
              </div>

              <div className="kb-info-item">
                <span className="info-lbl font-mono">AVAILABILITY</span>
                <span className="info-val font-mono" style={{ color: 'var(--status-green)' }}>● Q3 2026 Contracts Open</span>
              </div>

              <div className="kb-info-item">
                <span className="info-lbl font-mono">RESPONSE TIME</span>
                <span className="info-val">Under 24 hours guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="kb-contact-form-wrap">
            <div className="kb-card">
              {submitted ? (
                <div className="kb-success-state">
                  <div className="kb-step-num font-mono">PROPOSAL RECEIVED</div>
                  <h3 className="kb-success-heading">Message sent successfully!</h3>
                  <p className="kb-success-text">
                    We will review your brief and get back to you with actionable next steps within 24 hours.
                  </p>
                  <button type="button" className="kb-btn-secondary" onClick={() => setSubmitted(false)}>
                    Send another brief →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="kb-form-stack">
                  <div className="kb-form-row">
                    <div className="kb-form-group">
                      <label htmlFor="cp-name" className="font-mono">FULL NAME *</label>
                      <input id="cp-name" type="text" className="kb-input" placeholder="Alex Morgan" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="kb-form-group">
                      <label htmlFor="cp-email" className="font-mono">EMAIL ADDRESS *</label>
                      <input id="cp-email" type="email" className="kb-input" placeholder="alex@company.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="kb-form-row">
                    <div className="kb-form-group">
                      <label htmlFor="cp-company" className="font-mono">COMPANY / PRODUCT</label>
                      <input id="cp-company" type="text" className="kb-input" placeholder="Company Name" value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="kb-form-group">
                      <label htmlFor="cp-phone" className="font-mono">PHONE / WHATSAPP</label>
                      <input id="cp-phone" type="tel" className="kb-input" placeholder="+91..." value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <label className="font-mono">PRIMARY SERVICE NEEDED *</label>
                    <div className="kb-pill-selector">
                      {INTERESTS.map((item) => (
                        <button
                          type="button"
                          key={item}
                          className={`kb-pill-btn font-mono ${interest === item ? 'active' : ''}`}
                          onClick={() => setInterest(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <div className="kb-budget-header">
                      <label className="font-mono">APPROXIMATE BUDGET</label>
                      <div className="currency-toggle glass" style={{ transform: 'scale(0.85)', transformOrigin: 'right' }}>
                        <button type="button" className={isINR ? 'active' : ''} onClick={() => setIsINR(true)}>₹</button>
                        <button type="button" className={!isINR ? 'active' : ''} onClick={() => setIsINR(false)}>$</button>
                      </div>
                    </div>
                    <div className="kb-pill-selector">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          className={`kb-pill-btn font-mono ${budget === b ? 'active' : ''}`}
                          onClick={() => setBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <label htmlFor="cp-brief" className="font-mono">PROJECT BRIEF / GOALS *</label>
                    <textarea
                      id="cp-brief"
                      className="kb-textarea"
                      rows={5}
                      placeholder="Describe what you want to build, current blockers, or target launch timeframe..."
                      value={formData.brief}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="kb-btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                    {sending ? 'Sending...' : 'Send Brief →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kb-section">
        <div className="kb-section-header">
          <span className="kb-badge font-mono">FREQUENTLY ASKED</span>
          <h2 className="kb-section-title">Common Questions</h2>
        </div>
        <div className="kb-faq-list">
          {faqs.map((f) => (
            <FAQ key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </div>
  );
}

