import { useState, useEffect, useRef } from 'react';
import './CallPopup.css';
import { recordImpression } from '../services/analyticsService';

export default function CallPopup() {
  const [open, setOpen] = useState(false);
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
        className={`call-trigger ${open ? 'hidden' : ''}`}
        onClick={handleOpen}
        aria-label="Direct Call or Message"
      >
        <span className="call-trigger-icon">📞</span>
        <span className="call-trigger-text">Call / WhatsApp</span>
        <span className="call-trigger-ping" />
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
          <div className="call-modal glass">
            {/* Header */}
            <div className="call-header">
              <div className="call-logo">PIXE<span>.</span></div>
              <button className="call-close" onClick={handleClose} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="call-body">
              <div className="call-title-wrap">
                <h2>Direct Contact</h2>
                <p>Have a question or want to get started? Reach out via any channel below.</p>
              </div>

              <div className="call-options-grid">
                {/* 1. Phone Call */}
                <div className="call-option-card glass">
                  <div className="call-option-icon-wrap">
                    <span className="call-option-icon">📞</span>
                  </div>
                  <h3>Direct Call</h3>
                  <p>Speak directly with Raj. Available for service, support, and discussions.</p>
                  <a href="tel:+917381763856" className="btn btn-primary call-option-btn">
                    +91 7381763856
                  </a>
                </div>

                {/* 2. WhatsApp */}
                <div className="call-option-card glass">
                  <div className="call-option-icon-wrap whatsapp-accent">
                    <span className="call-option-icon">💬</span>
                  </div>
                  <h3>WhatsApp Message</h3>
                  <p>Send a message, voice note, or drop a quick project brief instantly.</p>
                  <a href="https://wa.me/917381763856" target="_blank" rel="noopener noreferrer" className="btn btn-secondary call-option-btn">
                    Open Chat
                  </a>
                </div>

                {/* 3. Direct Email */}
                <div className="call-option-card glass">
                  <div className="call-option-icon-wrap email-accent">
                    <span className="call-option-icon">✉️</span>
                  </div>
                  <h3>Send Email</h3>
                  <p>Drop an email for formal requests, support, proposals, and details.</p>
                  <a href="mailto:raj@pixe.in" className="btn btn-secondary call-option-btn">
                    raj@pixe.in
                  </a>
                </div>
              </div>
            </div>

            <div className="call-footer">
              <span className="call-secure">⚡ Reply within minutes on call/chat, 24h on email.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
