import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <img src="/assets/logo.png" alt="PIXE Logo" className="logo-img" />
      </NavLink>

      {/* Desktop links */}
      <ul className="navbar-links">
        {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <NavLink to="/contact" className="btn btn-primary navbar-cta">
        Start a Project
      </NavLink>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer glass">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Start a Project
          </NavLink>
        </div>
      )}
    </nav>
  );
}
