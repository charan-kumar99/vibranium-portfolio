import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useHooks';
import logoSvg from '../assets/logo.svg';
import DecodeText from './WakandaDecode';
import './Navigation.css';

const NAV_SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'certifications',
  'contact',
];

const mainNavItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

/* Every utility glyph is drawn on the 24-unit grid at 16px with a 2-unit
   stroke, i.e. ~1.33 device pixels at 1x. Anything thinner blurs into a grey
   smear at this size, and rays shorter than ~2px collapse into dots — which is
   exactly what made the first pass read as low quality. */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="3.9" />
      <path d="M12 2.4v2.9M12 18.7v2.9M2.4 12h2.9M18.7 12h2.9M5.2 5.2l2 2M16.8 16.8l2 2M18.8 5.2l-2 2M7.2 16.8l-2 2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.6 8.6 0 1 0 10.9 10.9Z" />
    </svg>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTION_IDS, 250);

  useEffect(() => {
    let lastY = window.scrollY;
    let accumulated = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      // Always show at the top of the page
      if (y <= 50) {
        setNavHidden(false);
        setScrolled(false);
        lastY = y;
        accumulated = 0;
        return;
      }

      setScrolled(true);

      // If scrolling direction switched, reset accumulator
      if ((delta > 0 && accumulated < 0) || (delta < 0 && accumulated > 0)) {
        accumulated = 0;
      }

      accumulated += delta;

      // Scrolling DOWN -> hide top bar
      if (accumulated > 10) {
        setNavHidden(true);
      }
      // Scrolling UP -> reveal top bar immediately
      else if (accumulated < -6) {
        setNavHidden(false);
      }

      lastY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('lights-on', lightsOn);
  }, [lightsOn]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`nav-top-bar ${scrolled ? 'nav-top-bar--scrolled' : ''} ${
        navHidden && !mobileOpen ? 'nav-top-bar--hidden' : ''
      }`}
    >
      <div className="nav-top-inner">
        {/* Brand lockup */}
        <button className="nav-brand-group" onClick={() => scrollTo('hero')} aria-label="Charan Kumar, Software Developer, Home">
          <span className="nav-ck-logo">
            <img src={logoSvg} alt="Charan Kumar Logo" width="28" height="28" />
          </span>

          <span className="nav-title-text">
            <DecodeText text="Charan Kumar" startDelay={150} step={34} />
          </span>

          {/* Role label on the right of the wordmark */}
          <span className="nav-brand-divider" aria-hidden="true" />
          <span className="nav-brand-role">
            <DecodeText text="Software Developer" startDelay={600} step={16} />
          </span>
        </button>

        {/* Primary navigation */}
        <nav className="nav-menu-container" aria-label="Primary">
          <ul className="nav-links-row">
            {mainNavItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link-btn ${isActive ? 'nav-link-btn--active' : ''}`}
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-telemetry-glow"
                        className="nav-active-bar"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Hairline baseline running beneath the links */}
          <div className="nav-baseline-rule" aria-hidden="true" />

          {/* Instrumentation ticks at the far right of the rail — exact telemetry_test.svg */}
          <div className="nav-contact-telemetry" aria-hidden="true">
            <svg width="140" height="12" viewBox="0 0 140 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-telemetry-svg">
              <defs>
                <linearGradient id="telemetry-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#6366F1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4338CA" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Baseline extension line on top */}
              <line x1="0" y1="1" x2="132" y2="1" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

              {/* Diagonal hatch slashes (11 slashes, 45 degree angle) */}
              <g stroke="rgba(192, 132, 252, 0.75)" strokeWidth="1.2" strokeLinecap="round">
                <line x1="2" y1="1" x2="7" y2="7" />
                <line x1="5" y1="1" x2="10" y2="7" />
                <line x1="8" y1="1" x2="13" y2="7" />
                <line x1="11" y1="1" x2="16" y2="7" />
                <line x1="14" y1="1" x2="19" y2="7" />
                <line x1="17" y1="1" x2="22" y2="7" />
                <line x1="20" y1="1" x2="25" y2="7" />
                <line x1="23" y1="1" x2="28" y2="7" />
                <line x1="26" y1="1" x2="31" y2="7" />
                <line x1="29" y1="1" x2="34" y2="7" />
                <line x1="32" y1="1" x2="37" y2="7" />
              </g>

              {/* Solid tapered trapezoid block */}
              <polygon points="41,1 92,1 89,7 46,7" fill="url(#telemetry-gradient)" />

              {/* Precision step tick mark */}
              <line x1="97" y1="4" x2="114" y2="4" stroke="rgba(192, 132, 252, 0.5)" strokeWidth="1" />
              <line x1="97" y1="1" x2="97" y2="4" stroke="rgba(192, 132, 252, 0.5)" strokeWidth="1" />

              {/* Micro telemetry square dot */}
              <rect x="120" y="3" width="2.5" height="2.5" fill="#FFFFFF" opacity="0.9" />
            </svg>
          </div>
        </nav>

        {/* Utilities */}
        <div className="nav-actions">
          <div className="nav-utility-group">
            <button
              className={`nav-theme-toggle ${lightsOn ? 'nav-theme-toggle--on' : ''}`}
              onClick={() => setLightsOn(on => !on)}
              aria-label="Toggle ambient lighting"
              aria-pressed={lightsOn}
              title={lightsOn ? 'Lights off' : 'Lights on'}
            >
              {lightsOn ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          <button
            className={`nav-mobile-toggle ${mobileOpen ? 'nav-mobile-toggle--open' : ''}`}
            onClick={() => setMobileOpen(open => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {mainNavItems.map(item => (
              <button
                key={item.id}
                className={`nav-mobile-item ${activeSection === item.id ? 'nav-mobile-item--active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
