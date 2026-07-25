import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import './index.css';
import Loader from './components/Loader';
import PopupForm from './components/PopupForm';
import CallPopup from './components/CallPopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Dashboard from './pages/Dashboard';
import { recordVisit } from './services/analyticsService';

export const ThemeContext = createContext({
  theme: 'dark',
});

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.style.backgroundColor = '#08090d';
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Scroll to top and record visit analytics on route change
function ScrollToTopAndTrack() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Don't track visits inside admin dashboard itself
    if (!pathname.startsWith('/admin') && !pathname.startsWith('/dashboard')) {
      recordVisit(pathname);
    }
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <ScrollToTopAndTrack />
      {!isAdmin && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <PopupForm />}
      {!isAdmin && <CallPopup />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {loading && <Loader onDone={() => setLoading(false)} />}
        {!loading && <AppContent />}
      </BrowserRouter>
    </ThemeProvider>
  );
}

