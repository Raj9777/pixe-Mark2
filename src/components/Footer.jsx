import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="PIXE Logo" className="logo-img" />
            </div>
            <p className="footer-tagline">Engineering tomorrow. Delivering today.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Navigate</h5>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <Link to="/services">Custom Software</Link>
              <Link to="/services">Web Design</Link>
              <Link to="/services">Mobile Apps</Link>
              <Link to="/services">UI/UX Design</Link>
              <Link to="/services">API Integrations</Link>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} PIXE. All rights reserved.</span>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">gh</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
