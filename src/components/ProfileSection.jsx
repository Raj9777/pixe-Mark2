import { Link } from 'react-router-dom';
import './ProfileSection.css';

export default function ProfileSection({ title = "FOUNDER & LEAD ENGINEER", badge = "MEET THE FOUNDER" }) {
  return (
    <section className="kb-section kb-profile-section" id="founder">
      <div className="kb-profile-container">
        <div className="kb-profile-card kb-card">
          {/* Profile Image & Status Badge Column */}
          <div className="kb-profile-media-col">
            <div className="kb-profile-img-frame">
              <img
                src="/assets/raj-profile.jpg"
                alt="Raj Ratan Parija - Founder & Lead Full-Stack Engineer at Pixel Excellence Custom Software Agency India"
                className="kb-profile-img"
                loading="eager"
              />
              <div className="kb-profile-img-overlay font-mono">
                <span className="kb-status-dot" />
                <span>ONLINE & BUILDING</span>
              </div>
            </div>
            
            {/* Social Icons Bar */}
            <div className="kb-profile-socials">
              <a
                href="https://www.linkedin.com/in/rajratanparija"
                target="_blank"
                rel="noopener noreferrer"
                className="kb-social-btn kb-social-linkedin"
                title="LinkedIn: Raj"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                </svg>
                <span className="social-lbl font-mono">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Raj9777"
                target="_blank"
                rel="noopener noreferrer"
                className="kb-social-btn kb-social-github"
                title="GitHub: @Raj9777"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span className="social-lbl font-mono">GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/raj_ratan_02_01/"
                target="_blank"
                rel="noopener noreferrer"
                className="kb-social-btn kb-social-instagram"
                title="Instagram: @raj_ratan_02_01"
                aria-label="Instagram Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="social-lbl font-mono">Instagram</span>
              </a>

              <a
                href="mailto:raj@pixelexcellence.online"
                className="kb-social-btn kb-social-mail"
                title="Email: raj@pixelexcellence.online"
                aria-label="Send Email"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="social-lbl font-mono">Email</span>
              </a>
            </div>
          </div>

          {/* Profile Bio & Content Column */}
          <div className="kb-profile-content-col">
            <div className="kb-profile-header">
              <span className="kb-badge font-mono">{badge}</span>
              <h2 className="kb-profile-name">
                Raj
              </h2>
              <span className="kb-profile-role font-mono">{title}</span>
            </div>

            <div className="kb-profile-bio">
              <p>
                Hi, I'm <strong>Raj</strong> — Founder & Lead Full-Stack Engineer at <strong>PIXE Studio</strong>. 
                I engineer production-ready web applications, SaaS platforms, and custom software architectures designed for lightning speed, high conversion, and long-term scalability.
              </p>
              <p>
                Whether building AI integrations from scratch, optimizing core web vitals to 99+ Lighthouse scores, or architecting mobile platforms, I work directly with clients to ship clean, debt-free code with total transparency.
              </p>
            </div>

            {/* Core Competencies / Tags */}
            <div className="kb-profile-highlights">
              <div className="kb-highlight-item">
                <span className="kb-check font-mono">✓</span>
                <span>Full-Stack Architecture & SaaS MVPs</span>
              </div>
              <div className="kb-highlight-item">
                <span className="kb-check font-mono">✓</span>
                <span>Lighthouse 99+ Speed & Web Performance</span>
              </div>
              <div className="kb-highlight-item">
                <span className="kb-check font-mono">✓</span>
                <span>Direct 1-on-1 Founder & Engineering Access</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="kb-profile-actions">
              <Link to="/contact" className="kb-btn-primary">
                <span>Book a 30-min call</span>
                <span>→</span>
              </Link>
              <a href="mailto:raj@pixelexcellence.online" className="kb-btn-secondary">
                <span>Email Raj Directly</span>
                <span>✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
