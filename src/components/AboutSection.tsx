import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './AboutSection.css';

export default function AboutSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.dispatchEvent(new CustomEvent('open-panther-vault'));
  };

  const quickIntroRows = [
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      label: 'ROLE',
      value: 'Software Developer',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="9" y1="22" x2="9" y2="18" />
          <line x1="15" y1="22" x2="15" y2="18" />
          <line x1="9" y1="14" x2="9" y2="14.01" />
          <line x1="15" y1="14" x2="15" y2="14.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15" y2="10.01" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15" y2="6.01" />
        </svg>
      ),
      label: 'COMPANY',
      value: 'AGREMATE Private Limited',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      label: 'EDUCATION',
      value: 'MCA (Online) – Manipal University Jaipur',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'LOCATION',
      value: 'Bengaluru, India',
    },
  ];

  const drivesCards = [
    {
      title: 'BUILD',
      sub: 'Scalable & reliable systems',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: 'LEARN',
      sub: 'Explore cloud, DevOps & modern architectures',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: 'GROW',
      sub: 'Solve real problems & create real impact',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="as-about-section" aria-label="About Charan Kumar — Software Developer Profile">
      {/* Master Background Layer with Black Panther Looking Up & Violet Spirit Mandala */}
      <div className="as-about-bg" aria-hidden="true" />
      <div className="as-about-vignette" aria-hidden="true" />

      {/* Top Header Status Bar */}
      <div className="as-top-bar" aria-hidden="true">
        <div className="as-top-status">
          <span className="as-status-pip" />
          <span className="as-status-text">STATUS: DEVELOPER</span>
          <span className="as-status-dot">•</span>
          <span className="as-status-text">BUILDER</span>
          <span className="as-status-dot">•</span>
          <span className="as-status-text">LEARNER</span>
        </div>
      </div>

      <div className="as-about-container">
        {/* Main 3-Zone Symmetrical Layout */}
        <div className="as-about-grid">
          {/* ─── LEFT FLANK: ABOUT CHARAN KUMAR ─── */}
          <motion.div
            className="as-about-flank as-flank-left"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Badge */}
            <div className="as-pill-badge">
              <span className="as-pill-dot" />
              <span className="as-pill-text">02 // DOSSIER</span>
            </div>

            {/* Headline Title */}
            <h2 className="as-heading">
              <span className="as-heading-line as-heading-white">ABOUT</span>
              <span className="as-heading-line as-heading-white">CHARAN</span>
              <span className="as-heading-line as-heading-purple">KUMAR</span>
            </h2>

            {/* Glowing Accent Gradient Bar Under Title */}
            <div className="as-heading-bar" aria-hidden="true" />

            {/* Role Subtitle */}
            <div className="as-role-subtitle">
              <span>SOFTWARE DEVELOPER</span>
            </div>

            {/* Narrative Paragraphs */}
            <p className="as-bio-lead">
              I'm Charan Kumar, a passionate Software Developer who enjoys building scalable, secure, and impactful web applications. I love turning complex business problems into clean, reliable, and high-performance solutions.
            </p>

            <p className="as-bio-secondary">
              Currently, I'm working at <strong>AGREMATE Private Limited</strong>, where I build and maintain scalable backend APIs for a smart property management platform. I'm also pursuing my <strong>MCA (Online)</strong> at Manipal University Jaipur (MUJ), continuously strengthening my fundamentals and expanding my skills across cloud, DevOps, and modern system design.
            </p>

            {/* Quick Meta Chips */}
            <div className="as-meta-chips" aria-label="Quick Highlights">
              <span className="as-meta-chip">
                <span className="as-chip-emoji" aria-hidden="true">💼</span>
                <span>1+ Years Experience</span>
              </span>

              <span className="as-meta-chip">
                <span className="as-chip-emoji" aria-hidden="true">🎓</span>
                <span>MCA @ MUJ</span>
              </span>

              <span className="as-meta-chip">
                <span className="as-chip-emoji" aria-hidden="true">📍</span>
                <span>Bengaluru, India</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="as-actions-row">
              <button
                type="button"
                className="as-btn-download"
                onClick={handleResumeDownload}
                aria-label="Download Resume"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="as-btn-download-icon" aria-hidden="true">⤓</span>
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="as-btn-connect"
                aria-label="Let's Connect on LinkedIn"
              >
                <span>LET'S CONNECT</span>
                <span className="as-btn-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          {/* ─── CENTER CLEAR CORRIDOR (Preserves Black Panther, Mandala & Spirit Art) ─── */}
          <div className="as-about-center-spacer" aria-hidden="true">
            {/* Visual focal void for the Black Panther warrior, purple circular mandala, and ethereal spirit cat */}
          </div>

          {/* ─── RIGHT FLANK: CARDS HUD ─── */}
          <motion.div
            className="as-about-flank as-flank-right"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* 1. QUICK INTRO CARD */}
            <div className="as-card-wrapper">
              <div className="as-card-header-label">
                <span className="as-label-slash">/</span>
                <span>QUICK INTRO</span>
              </div>
              <div className="as-hud-card as-card-intro as-chamfer-box">
                <div className="as-chamfer-corner tl" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" className="as-chamfer-svg">
                    <line x1="0" y1="16" x2="16" y2="0" stroke="#C084FC" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className="as-chamfer-corner br" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" className="as-chamfer-svg">
                    <line x1="16" y1="32" x2="32" y2="16" stroke="#C084FC" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className="as-table-rows">
                  {quickIntroRows.map((row, idx) => (
                    <div key={idx} className="as-table-row">
                      <div className="as-row-left">
                        <span className="as-row-icon">{row.icon}</span>
                        <span className="as-row-label">{row.label}</span>
                      </div>
                      <span className="as-row-arrow" aria-hidden="true">›</span>
                      <span className="as-row-val">{row.value}</span>
                    </div>
                  ))}
                </div>
                {/* Geometric Panther Mask Watermark on right of card */}
                <div className="as-card-panther-watermark" aria-hidden="true">
                  <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
                    <polygon
                      points="20,24 32,10 44,26 50,20 56,26 68,10 80,24 85,52 75,76 50,94 25,76 15,52"
                      stroke="rgba(168, 85, 247, 0.28)"
                      strokeWidth="1.8"
                    />
                    <polygon
                      points="32,46 45,50 36,55"
                      stroke="rgba(192, 132, 252, 0.45)"
                      strokeWidth="1.8"
                      fill="rgba(168, 85, 247, 0.12)"
                    />
                    <polygon
                      points="68,46 55,50 64,55"
                      stroke="rgba(192, 132, 252, 0.45)"
                      strokeWidth="1.8"
                      fill="rgba(168, 85, 247, 0.12)"
                    />
                    <polyline
                      points="43,65 50,72 57,65"
                      stroke="rgba(192, 132, 252, 0.35)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. WHAT DRIVES ME (3-COLUMN BENTO) */}
            <div className="as-card-wrapper">
              <div className="as-card-header-label">
                <span className="as-label-slash">/</span>
                <span>WHAT DRIVES ME</span>
              </div>
              <div className="as-drives-bento-grid">
                {drivesCards.map((bento, idx) => (
                  <div key={idx} className="as-bento-card as-chamfer-box">
                    <div className="as-chamfer-corner tl" aria-hidden="true">
                      <svg viewBox="0 0 28 28" fill="none" className="as-chamfer-svg">
                        <line x1="0" y1="14" x2="14" y2="0" stroke="#C084FC" strokeWidth="2.2" />
                      </svg>
                    </div>
                    <div className="as-chamfer-corner br" aria-hidden="true">
                      <svg viewBox="0 0 28 28" fill="none" className="as-chamfer-svg">
                        <line x1="14" y1="28" x2="28" y2="14" stroke="#C084FC" strokeWidth="2.2" />
                      </svg>
                    </div>
                    <div className="as-bento-icon-box" aria-hidden="true">
                      {bento.icon}
                    </div>
                    <div className="as-bento-title">{bento.title}</div>
                    <div className="as-bento-sub">{bento.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. MY PHILOSOPHY QUOTE CARD */}
            <div className="as-card-wrapper">
              <div className="as-card-header-label">
                <span className="as-label-slash">/</span>
                <span>MY PHILOSOPHY</span>
              </div>
              <div className="as-hud-card as-card-philosophy as-chamfer-box">
                <div className="as-chamfer-corner tl philo" aria-hidden="true">
                  <svg viewBox="0 0 36 36" fill="none" className="as-chamfer-svg">
                    <line x1="0" y1="18" x2="18" y2="0" stroke="#C084FC" strokeWidth="2.5" />
                    <line x1="5" y1="25" x2="25" y2="5" stroke="rgba(192, 132, 252, 0.65)" strokeWidth="1.6" />
                    <line x1="9" y1="31" x2="31" y2="9" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="as-chamfer-corner br" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" className="as-chamfer-svg">
                    <line x1="16" y1="32" x2="32" y2="16" stroke="#C084FC" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className="as-quote-content">
                  <span className="as-quote-mark" aria-hidden="true">“</span>
                  <p className="as-quote-text">
                    "Build with purpose, learn without limits, and create technology that makes a difference."
                  </p>
                </div>
                {/* Birnin Zana Futuristic Skyline Silhouette on the right */}
                <div className="as-skyline-silhouette" aria-hidden="true">
                  <svg width="140" height="60" viewBox="0 0 200 80" fill="none">
                    <path
                      d="M0 80L12 75L22 77L28 68L36 72L42 63L48 74L56 76L66 58L76 72L82 52L92 42L100 16L104 8L108 16L116 48L126 56L136 66L146 50L156 62L166 70L176 66L186 75L200 80Z"
                      fill="url(#skylineGlowExact)"
                    />
                    <path
                      d="M100 16L104 6L108 16L106 80L102 80Z"
                      fill="rgba(216, 180, 254, 0.45)"
                    />
                    <defs>
                      <linearGradient id="skylineGlowExact" x1="100" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgba(192, 132, 252, 0.55)" />
                        <stop offset="0.5" stopColor="rgba(147, 51, 234, 0.3)" />
                        <stop offset="1" stopColor="rgba(88, 28, 135, 0.05)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="as-bottom-hud" aria-hidden="true" onClick={() => scrollTo('skills')}>
          <span className="as-hud-scroll-text">// SCROLL TO EXPLORE SKILLS //</span>
          <div className="as-hud-arrow">
            <svg width="18" height="10" viewBox="0 0 20 12" fill="none">
              <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
