import { useState, useEffect, useRef } from 'react';
import './CallPopup.css';
import { recordImpression } from '../services/analyticsService';

export default function CallPopup() {
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    setOpen(true);
    recordImpression('Call_Trigger', 'Direct Call / WhatsApp Popup Opened');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  return (
    <>
      {/* Floating Call trigger button */}
      <button
        className={`call-trigger font-mono ${open ? 'hidden' : ''}`}
        onClick={handleOpen}
        aria-label="Direct Call or Message"
      >
        <span className="kb-status-dot" />
        <span>BOOK A CALL</span>
      </button>

      {/* Overlay + Modal */}
      {open && (
        <div
          ref={overlayRef}
          className="call-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Direct Call or Message PIXE"
        >
          <div className="call-modal kb-card">
            {/* Header */}
            <div className="call-header">
              <div className="kb-badge font-mono">30-MIN DISCOVERY CALL</div>
              <button className="call-close" onClick={handleClose} aria-label="Close">
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="call-body">
              <div className="call-title-wrap">
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '12px 0 8px' }}>
                  Schedule a Consultation
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Direct line to engineering. No sales pitch deck — just technical evaluation and milestone roadmap.
                </p>
              </div>

              <div className="call-options-grid">
                {/* 1. Phone Call */}
                <div className="call-option-card">
                  <span className="info-lbl font-mono">PHONE CALL</span>
                  <h3>Direct Phone</h3>
                  <p>Speak directly with our senior software architect.</p>
                  <a href="tel:+917381763856" className="kb-btn-primary font-mono" style={{ fontSize: '0.82rem' }}>
                    +91 7381763856 →
                  </a>
                </div>

                {/* 2. WhatsApp */}
                <div className="call-option-card">
                  <span className="info-lbl font-mono">WHATSAPP CHAT</span>
                  <h3>WhatsApp Async</h3>
                  <p>Send a voice note, message, or project brief.</p>
                  <a
                    href="https://wa.me/917381763856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kb-btn-secondary font-mono"
                    style={{ fontSize: '0.82rem' }}
                  >
                    Open WhatsApp →
                  </a>
                </div>

                {/* 3. Direct Email */}
                <div className="call-option-card">
                  <span className="info-lbl font-mono">EMAIL</span>
                  <h3>Email Brief</h3>
                  <p>Drop a detailed requirements document or RFP.</p>
                  <a href="mailto:raj@pixelexcellence.online" className="kb-btn-secondary font-mono" style={{ fontSize: '0.82rem' }}>
                    raj@pixelexcellence.online →
                  </a>
                </div>
              </div>
            </div>

            <div className="call-footer font-mono">
              <span style={{ color: 'var(--status-green)', fontSize: '0.78rem' }}>
                ● Response guaranteed within 24 hours
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

