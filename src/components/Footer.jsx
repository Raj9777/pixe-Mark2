import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="kb-footer">
      <div className="kb-footer-container">
        <div className="kb-footer-grid">
          {/* Col 1: Brand & bio statement */}
          <div className="kb-footer-brand">
            <div className="kb-footer-logo-row">
              <span className="logo-badge">PIXE</span>
              <span className="logo-text">Software & Web Studio</span>
            </div>
            <p className="kb-footer-desc">
              We take projects that are stuck or complex and ship them end-to-end.
              Custom software, web applications, mobile platforms, and performance optimizations.
            </p>
            <div className="kb-footer-cta-row">
              <Link to="/contact" className="kb-btn-primary">
                Book a 30-min call →
              </Link>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div className="kb-footer-col">
            <h4 className="font-mono">PAGES</h4>
            <Link to="/portfolio">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Col 3: Contact */}
          <div className="kb-footer-col">
            <h4 className="font-mono">CONTACT</h4>
            <a href="mailto:raj@pixelexcellence.online" className="kb-footer-email">raj@pixelexcellence.online</a>
            <a href="https://www.linkedin.com/in/rajratanparija" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Raj9777" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/raj_ratan_02_01/" target="_blank" rel="noreferrer">Instagram</a>
          </div>

          {/* Col 4: Legal & Dashboard */}
          <div className="kb-footer-col">
            <h4 className="font-mono">LEGAL</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/dashboard" className="kb-owner-link font-mono">Owner Dashboard 🔒</Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="kb-footer-bottom">
          <div className="kb-footer-copyright">
            © {year} PIXE Studio. Async-first · Worldwide operations.
          </div>

          <button onClick={scrollToTop} className="kb-back-top font-mono">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

