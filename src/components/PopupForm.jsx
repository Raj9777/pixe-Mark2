import { useState, useEffect, useRef } from 'react';
import './PopupForm.css';
import { sendBookingEmail } from '../services/emailService';

const SERVICES = ['Custom Software', 'Website', 'Mobile App', 'UI/UX Design', 'API / Backend', 'Other'];
const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1); // 1 = contact, 2 = schedule, 3 = success
  const [service, setService] = useState('Website');
  const [time, setTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '', date: '', phone: '' });
  const [sending, setSending] = useState(false);
  const overlayRef = useRef(null);

  // Trap focus and close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setStep(1); setForm({ name: '', email: '', message: '', date: '', phone: '' }); setTime(''); }, 400);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendBookingEmail({
        name:    form.name,
        email:   form.email,
        phone:   form.phone,
        service,
        message: form.message,
        date:    form.date,
        time,
      });
    } catch (err) {
      console.error('EmailJS error (booking):', err);
      // Still advance to success — email failure shouldn't block the user
    } finally {
      setSending(false);
      setStep(3);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`popup-trigger ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Book a call or start a project"
      >
        <span className="popup-trigger-icon">💬</span>
        <span className="popup-trigger-text">Book a Call</span>
        <span className="popup-trigger-ping" />
      </button>

      {/* Overlay + Modal */}
      {open && (
        <div
          ref={overlayRef}
          className="popup-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a call or contact PIXE"
        >
          <div className="popup-modal glass">
            {/* Header */}
            <div className="popup-header">
              <div className="popup-header-left">
                <div className="popup-logo">PIXE<span>.</span></div>
                <div className="popup-steps">
                  <div className={`popup-step-dot ${step >= 1 ? 'active' : ''}`} />
                  <div className="popup-step-line" />
                  <div className={`popup-step-dot ${step >= 2 ? 'active' : ''}`} />
                  <div className="popup-step-line" />
                  <div className={`popup-step-dot ${step === 3 ? 'active' : ''}`} />
                </div>
              </div>
              <button className="popup-close" onClick={handleClose} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Step 1 — Contact info */}
            {step === 1 && (
              <form className="popup-body" onSubmit={handleNext}>
                <div className="popup-title-wrap">
                  <h2>Let's talk.</h2>
                  <p>Tell me a bit about yourself and what you need. Takes 60 seconds.</p>
                </div>

                <div className="popup-fields">
                  <div className="popup-row">
                    <div className="popup-field">
                      <label htmlFor="p-name">Full Name *</label>
                      <div className="popup-input-wrap">
                        <span className="pi-icon">👤</span>
                        <input
                          id="p-name"
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div className="popup-field">
                      <label htmlFor="p-email">Email *</label>
                      <div className="popup-input-wrap">
                        <span className="pi-icon">✉️</span>
                        <input
                          id="p-email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="popup-field">
                    <label>Service Needed *</label>
                    <div className="popup-pills">
                      {SERVICES.map(s => (
                        <label key={s} className="popup-pill">
                          <input type="radio" name="p-service" checked={service === s} onChange={() => setService(s)} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="popup-field">
                    <label htmlFor="p-message">Brief Message</label>
                    <textarea
                      id="p-message"
                      rows={3}
                      placeholder="What are you building? Any details help…"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="popup-footer">
                  <button type="submit" className="btn btn-primary popup-submit">
                    Next — Pick a Time &rarr;
                  </button>
                  <span className="popup-secure">🔒 No spam. Ever.</span>
                </div>
              </form>
            )}

            {/* Step 2 — Schedule */}
            {step === 2 && (
              <form className="popup-body" onSubmit={handleSubmit}>
                <div className="popup-title-wrap">
                  <h2>Pick a slot.</h2>
                  <p>Choose a preferred date and time for a free 30-min discovery call.</p>
                </div>

                <div className="popup-fields">
                  <div className="popup-row">
                    <div className="popup-field">
                      <label htmlFor="p-date">Preferred Date *</label>
                      <div className="popup-input-wrap">
                        <span className="pi-icon">📅</span>
                        <input
                          id="p-date"
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div className="popup-field">
                      <label htmlFor="p-phone">WhatsApp / Phone</label>
                      <div className="popup-input-wrap">
                        <span className="pi-icon">📱</span>
                        <input
                          id="p-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="popup-field">
                    <label>Preferred Time *</label>
                    <div className="popup-time-grid">
                      {TIMES.map(t => (
                        <button
                          key={t}
                          type="button"
                          className={`time-slot ${time === t ? 'active' : ''}`}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="schedule-summary glass">
                    <div className="summary-row">
                      <span className="summary-icon">👤</span>
                      <span>{form.name} · {form.email}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-icon">🔧</span>
                      <span>{service}</span>
                    </div>
                    {form.date && time && (
                      <div className="summary-row">
                        <span className="summary-icon">📅</span>
                        <span>{new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} · {time}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="popup-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setStep(1)}
                  >
                    &larr; Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary popup-submit"
                    disabled={!form.date || !time || sending}
                  >
                    {sending ? 'Confirming...' : 'Confirm Booking \u2192'}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 — Success */}
            {step === 3 && (
              <div className="popup-body popup-success">
                <div className="success-burst">🚀</div>
                <h2>You're booked!</h2>
                <p>
                  I'll send a confirmation to <strong>{form.email}</strong> within the hour.
                  Talk soon, {form.name.split(' ')[0]}!
                </p>
                <div className="success-details glass">
                  <div className="summary-row">
                    <span className="summary-icon">📅</span>
                    <span>
                      {form.date
                        ? new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })
                        : 'Date TBD'}
                      {time ? ` · ${time}` : ''}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon">🔧</span>
                    <span>{service}</span>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={handleClose}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
