import { useState, useEffect, useRef } from 'react';
import './PopupForm.css';
import { sendBookingEmail } from '../services/emailService';
import { saveBookingSub } from '../services/dbService';
import { logBooking, logSubmission } from '../services/analyticsService';

const SERVICES = ['Custom Software', 'Website Architecture', 'Mobile App', 'UI/UX Design', 'API / Backend', 'Audit'];
const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [service, setService] = useState('Website Architecture');
  const [time, setTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '', date: '', phone: '' });
  const [sending, setSending] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setForm({ name: '', email: '', message: '', date: '', phone: '' });
      setTime('');
    }, 400);
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

    const submissionPayload = {
      type: 'Instant Quote',
      name: form.name,
      email: form.email,
      phone: form.phone,
      service,
      message: form.message,
      date: form.date,
      time,
    };

    logSubmission(submissionPayload);
    if (form.date || time) {
      logBooking(submissionPayload);
    }

    try {
      await Promise.allSettled([
        sendBookingEmail(submissionPayload),
        saveBookingSub(submissionPayload),
      ]);
    } catch (err) {
      console.error('Booking submission error:', err);
    } finally {
      setSending(false);
      setStep(3);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Floating CTA Badge Button */}
      <button
        className={`popup-trigger font-mono ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Request Instant Quote"
      >
        <span>⚡ INSTANT QUOTE</span>
      </button>

      {open && (
        <div
          ref={overlayRef}
          className="popup-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div className="popup-modal kb-card">
            {/* Modal Header */}
            <div className="popup-header">
              <div className="kb-badge font-mono">
                {step === 1 ? 'STEP 01/02 · BRIEF' : step === 2 ? 'STEP 02/02 · SCHEDULE' : 'CONFIRMED'}
              </div>
              <button className="popup-close" onClick={handleClose}>
                ✕
              </button>
            </div>

            {/* Step 1 — Contact */}
            {step === 1 && (
              <form className="popup-body" onSubmit={handleNext}>
                <h2 className="popup-title">Start a Project</h2>
                <p className="popup-sub">
                  Tell us what you are building. We will set up a technical consultation.
                </p>

                <div className="kb-form-stack" style={{ marginTop: '16px' }}>
                  <div className="kb-form-row">
                    <div className="kb-form-group">
                      <label className="font-mono">FULL NAME *</label>
                      <input
                        type="text"
                        className="kb-input"
                        placeholder="Alex Morgan"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="kb-form-group">
                      <label className="font-mono">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        className="kb-input"
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <label className="font-mono">SERVICE *</label>
                    <div className="kb-pill-selector">
                      {SERVICES.map((s) => (
                        <button
                          type="button"
                          key={s}
                          className={`kb-pill-btn font-mono ${service === s ? 'active' : ''}`}
                          onClick={() => setService(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <label className="font-mono">PROJECT DESCRIPTION *</label>
                    <textarea
                      className="kb-textarea"
                      rows={3}
                      placeholder="Outline core requirements or current software challenges..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      required
                    />
                  </div>

                  <button type="submit" className="kb-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Next — Select Slot →
                  </button>
                </div>
              </form>
            )}

            {/* Step 2 — Schedule */}
            {step === 2 && (
              <form className="popup-body" onSubmit={handleSubmit}>
                <h2 className="popup-title">Pick a Date & Time</h2>
                <p className="popup-sub">Select your preferred 30-min call window.</p>

                <div className="kb-form-stack" style={{ marginTop: '16px' }}>
                  <div className="kb-form-row">
                    <div className="kb-form-group">
                      <label className="font-mono">PREFERRED DATE *</label>
                      <input
                        type="date"
                        min={today}
                        className="kb-input"
                        value={form.date}
                        onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="kb-form-group">
                      <label className="font-mono">WHATSAPP / PHONE</label>
                      <input
                        type="tel"
                        className="kb-input"
                        placeholder="+91..."
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="kb-form-group">
                    <label className="font-mono">TIME SLOT *</label>
                    <div className="kb-pill-selector">
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`kb-pill-btn font-mono ${time === t ? 'active' : ''}`}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="kb-form-row">
                    <button type="button" className="kb-btn-secondary" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="kb-btn-primary"
                      style={{ justifyContent: 'center' }}
                      disabled={!form.date || !time || sending}
                    >
                      {sending ? 'Confirming...' : 'Confirm Call →'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 3 — Success */}
            {step === 3 && (
              <div className="popup-body text-center" style={{ textAlign: 'center' }}>
                <span className="kb-step-num font-mono">SUCCESS</span>
                <h2 className="popup-title" style={{ marginTop: '12px' }}>Call Request Confirmed!</h2>
                <p className="popup-sub" style={{ margin: '8px auto 24px auto' }}>
                  A confirmation email has been dispatched to <strong>{form.email}</strong>.
                </p>
                <button className="kb-btn-primary" onClick={handleClose} style={{ margin: '0 auto' }}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
