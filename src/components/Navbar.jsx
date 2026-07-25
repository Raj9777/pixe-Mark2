import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../App';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Home', num: '00' },
    { to: '/portfolio', label: 'Work', num: '01' },
    { to: '/services', label: 'Services', num: '02' },
    { to: '/about', label: 'About', num: '03' },
    { to: '/contact', label: 'Contact', num: '04' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand logo & monogram */}
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="logo-badge">PIXE</span>
          <span className="logo-text">Software & Dev</span>
          <span className="status-indicator-pill" title="Available for new projects">
            <span className="kb-status-dot" />
            <span className="status-text font-mono">AVAILABLE Q3</span>
          </span>
        </NavLink>

        {/* Desktop links with monospace numbers */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                <span className="nav-num">{item.num}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls: Theme toggle & CTA */}
        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <NavLink to="/contact" className="kb-btn-primary navbar-cta">
            <span>Book a call</span>
            <span className="cta-arrow">→</span>
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
          <div className="mobile-actions">
            <button className="theme-toggle-mobile" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <NavLink
              to="/contact"
              className="kb-btn-primary mobile-cta"
              onClick={() => setOpen(false)}
            >
              Book a 30-min call →
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

