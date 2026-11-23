import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import './ExperienceSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ExperienceSection() {
  // Modal state: null when closed, 'NTSIPL' or 'AGREMATE' when open
  const [activeModal, setActiveModal] = useState<'NTSIPL' | 'AGREMATE' | null>(null);

  // Hover timer ref for smooth hover-intent triggering
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCardMouseEnter = (company: 'NTSIPL' | 'AGREMATE') => {
    // 350ms deliberate hover-intent so quick mouse traversal doesn't trigger by accident
    hoverTimerRef.current = setTimeout(() => {
      setActiveModal(company);
    }, 350);
  };

  const handleCardMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleCardClick = (company: 'NTSIPL' | 'AGREMATE') => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setActiveModal(company);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const ntsipl = experience.find(e => e.company === 'NTSIPL') || experience[1];
  const agremate = experience.find(e => e.company.includes('AGREMATE')) || experience[0];
  const modalData = activeModal === 'NTSIPL' ? ntsipl : agremate;

  return (
    <section id="experience" className="section experience-section" aria-label="Professional experience">
      {/* High-Resolution Un-zoomed Black Panther Background (from bp folder) */}
      <div className="experience-bg" aria-hidden="true" />
      <div className="experience-top-fade" aria-hidden="true" />
      <div className="experience-bottom-fade" aria-hidden="true" />

      <div className="container experience-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-identifier">05 // TIMELINE</span>
          <h2 className="section-title">ENGINEERING EXPERIENCE</h2>
          <p className="section-subtitle">
            Track record of shipping production backend systems, banking-grade microservices, and enterprise APIs.
          </p>
        </div>

        {/* =========================================================================
            INITIAL STATE: 2 SMALL, COMPACT CARDS ON THE LEFT
            Hovering (350ms) or clicking opens the Wakandan cyber HUD dialogue
            ========================================================================= */}
        <div className="compact-cards-stack">
          {/* Timeline connecting track */}
          <div className="compact-track-spine" aria-hidden="true">
            <div className="track-pulse-node top-node" />
            <div className="track-pulse-line" />
            <div className="track-pulse-node bottom-node" />
          </div>

          {/* Card 1: AGREMATE */}
          <motion.div
            className={`compact-exp-card ${activeModal === 'AGREMATE' ? 'card-active' : ''}`}
            onClick={() => handleCardClick('AGREMATE')}
            onMouseEnter={() => handleCardMouseEnter('AGREMATE')}
            onMouseLeave={handleCardMouseLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('AGREMATE')}
            aria-label="Open AGREMATE experience details HUD"
          >
            <div className="compact-card-top">
              <span className="compact-company-badge agremate-badge">AGREMATE</span>
              <span className="compact-period-tag">Jun 2026 – Present</span>
            </div>

            <div className="compact-card-body">
              <h3 className="compact-role-title">Software Developer</h3>
              <p className="compact-role-desc">
                Building scalable backend APIs for India's smart property management platform.
              </p>
            </div>

            <div className="compact-card-footer">
              <div className="compact-tech-preview">
                <span className="compact-pill">ASP.NET Core</span>
                <span className="compact-pill">PostgreSQL</span>
                <span className="compact-pill">Docker</span>
              </div>
              <div className="compact-inspect-btn">
                <span>OPEN HUD</span>
                <span className="inspect-arrow">↗</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: NTSIPL */}
          <motion.div
            className={`compact-exp-card ntsipl-card ${activeModal === 'NTSIPL' ? 'card-active' : ''}`}
            onClick={() => handleCardClick('NTSIPL')}
            onMouseEnter={() => handleCardMouseEnter('NTSIPL')}
            onMouseLeave={handleCardMouseLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick('NTSIPL')}
            aria-label="Open NTSIPL experience details HUD"
          >
            <div className="compact-card-top">
              <span className="compact-company-badge ntsipl-badge">NTSIPL</span>
              <span className="compact-period-tag">Sep 2025 – Jun 2026</span>
            </div>

            <div className="compact-card-body">
              <h3 className="compact-role-title">Trainee Engineer- DotNet</h3>
              <p className="compact-role-desc">
                Developed critical RTGS/NEFT payment processing systems using Microservices Architecture.
              </p>
            </div>

            <div className="compact-card-footer">
              <div className="compact-tech-preview">
                <span className="compact-pill">RTGS/NEFT</span>
                <span className="compact-pill">Microservices</span>
                <span className="compact-pill">SQL Server</span>
              </div>
              <div className="compact-inspect-btn">
                <span>OPEN HUD</span>
                <span className="inspect-arrow">↗</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE HOLOGRAPHIC SCI-FI HUD MODAL POPUP
          Opens smoothly when either card is hovered or clicked
          ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="hud-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveModal(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-role-title"
          >
            <motion.div
              className="hud-modal-container"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Floating Capsule & Navigation Bar */}
              <div className="hud-modal-topbar">
                {/* Floating Capsule Badge (Matches Reference Mockup) */}
                <div className="sci-capsule-badge">
                  <span className="sci-capsule-title">EXPERIENCE</span>
                  <span className="sci-capsule-sub">
                    {activeModal === 'NTSIPL' ? 'TRAINEE ENGINEER- DOTNET' : 'SOFTWARE DEVELOPER'}
                  </span>
                </div>

                <div className="hud-modal-controls">
                  {/* Job Toggle Switcher Inside Modal */}
                  <div className="hud-switcher-pills" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeModal === 'NTSIPL'}
                      className={`hud-switch-pill ${activeModal === 'NTSIPL' ? 'active' : ''}`}
                      onClick={() => setActiveModal('NTSIPL')}
                    >
                      NTSIPL
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeModal === 'AGREMATE'}
                      className={`hud-switch-pill ${activeModal === 'AGREMATE' ? 'active' : ''}`}
                      onClick={() => setActiveModal('AGREMATE')}
                    >
                      AGREMATE
                    </button>
                  </div>

                  {/* Close Button with ESC label */}
                  <button
                    type="button"
                    className="hud-close-btn"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close HUD Telemetry (Escape)"
                  >
                    <span className="close-symbol">✕</span>
                    <span className="close-text">CLOSE</span>
                  </button>
                </div>
              </div>

              {/* The Wakandan Sci-Fi Cyber HUD Console Card */}
              <div className="sci-hud-console">
                {/* Left Vertical Cyber Icon Dock */}
                <div className="sci-dock-rail" aria-hidden="true">
                  <div className="dock-icon-btn active" title="Dossier Overview">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dock-svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="dock-icon-btn" title="Code & APIs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dock-svg">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="dock-icon-btn" title="Microservices Architecture">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dock-svg">
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="12" r="3" />
                      <line x1="6" y1="9" x2="6" y2="15" />
                      <line x1="8.5" y1="7.5" x2="15.5" y2="10.5" />
                      <line x1="8.5" y1="16.5" x2="15.5" y2="13.5" />
                    </svg>
                  </div>
                  <div className="dock-icon-btn" title="Security & Telemetry">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dock-svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="dock-chevron">⟨</div>
                </div>

                {/* Main Console Content */}
                <div className="sci-console-main">
                  {/* Header Row: Company Pill, Designation, Period + Mini Telemetry Widgets */}
                  <div className="sci-console-header">
                    <div className="sci-company-block">
                      <div className="sci-company-pill-row">
                        <span className={`sci-company-pill ${activeModal === 'NTSIPL' ? 'ntsipl-brand' : 'agremate-brand'}`}>
                          {modalData.company}
                        </span>
                      </div>

                      <h3 id="modal-role-title" className="sci-role-title">
                        {modalData.role}
                      </h3>

                      <div className="sci-duration-row">
                        <span className="sci-duration-label">DURATION:</span>
                        <span className="sci-duration-val">{modalData.period.toUpperCase()}</span>
                        <span className="sci-period-loc">({modalData.location})</span>
                        <span className="sci-verified-tag">● VERIFIED</span>
                      </div>
                    </div>

                    {/* Mini Telemetry Graph Box (Matches Reference Mockup) */}
                    <div className="sci-telemetry-box" aria-hidden="true">
                      <div className="sci-graph-header">
                        <span className="sci-graph-title">Graphs</span>
                        <svg className="sci-wave-svg" viewBox="0 0 100 24" preserveAspectRatio="none">
                          <path
                            d={activeModal === 'NTSIPL' ? "M0 16 Q 15 4, 30 14 T 60 10 T 85 18 T 100 8" : "M0 14 Q 20 6, 40 18 T 70 8 T 100 12"}
                            fill="none"
                            stroke="#c084fc"
                            strokeWidth="2"
                          />
                          <path
                            d={activeModal === 'NTSIPL' ? "M0 18 Q 20 8, 40 16 T 70 12 T 100 14" : "M0 16 Q 25 10, 50 14 T 80 12 T 100 16"}
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.5"
                            opacity="0.65"
                          />
                        </svg>
                      </div>

                      <div className="sci-stat-metrics">
                        <div className="sci-stat-col">
                          <span className="sci-stat-lbl">Codebase</span>
                          <strong className="sci-stat-num">4</strong>
                        </div>
                        <div className="sci-stat-col">
                          <span className="sci-stat-lbl">PRs</span>
                          <strong className="sci-stat-num">{activeModal === 'NTSIPL' ? '215+' : '180+'}</strong>
                        </div>
                        <div className="sci-stat-col">
                          <span className="sci-stat-lbl">Commits</span>
                          <strong className="sci-stat-num">{activeModal === 'NTSIPL' ? '1890+' : '1420+'}</strong>
                        </div>
                      </div>

                      <div className="sci-equalizer-wrap">
                        <span className="sci-eq-label">Technical 12</span>
                        <div className="sci-equalizer-bars">
                          <div className="eq-bar bar-1" />
                          <div className="eq-bar bar-2" />
                          <div className="eq-bar bar-3" />
                          <div className="eq-bar bar-4" />
                          <div className="eq-bar bar-5" />
                          <div className="eq-bar bar-6" />
                          <div className="eq-bar bar-7" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="sci-job-desc">{modalData.description}</p>

                  {/* Detailed Engineering Content & Architecture Flow */}
                  <div className="sci-impact-content">
                    {/* Bullet 1: Core Tech Stack */}
                    <div className="sci-bullet-line">
                      <span className="sci-neon-dot" />
                      <span className="sci-bullet-txt">
                        <strong>Core Stack:</strong> {activeModal === 'NTSIPL' ? '.NET Core, C#, Web API, ASP.NET Core, SQL Server' : 'ASP.NET Core, C#, Clean Architecture, PostgreSQL, Docker'}
                      </span>
                    </div>

                    {/* Bullet 2: Visual Nodes Graph Data Flow */}
                    <div className="sci-microservices-block">
                      <div className="sci-microservices-header">
                        <span className="sci-neon-dot" />
                        <span className="sci-microservices-title">
                          {activeModal === 'NTSIPL'
                            ? 'Microservices Architecture Data Flow (Visual Nodes graph with connecting lines, arrows, nodes):'
                            : 'Smart Property Management API Pipeline (Visual Nodes graph with connecting lines, arrows, nodes):'}
                        </span>
                      </div>

                      <div className="sci-node-chain" aria-label="Microservices Data Flow Graph">
                        {activeModal === 'NTSIPL' ? (
                          <>
                            <div className="sci-node">AUTH</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">CATALOG</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">PAYMENT</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node active-rail">RTGS / NEFT</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">ORDER</div>
                          </>
                        ) : (
                          <>
                            <div className="sci-node">AUTH</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">PROPERTY</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">TENANT</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node active-rail">RAZORPAY RENT</div>
                            <div className="sci-arrow">➔</div>
                            <div className="sci-node">AGREEMENT</div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bullet 3: Telemetry Badges */}
                    <div className="sci-bullet-line">
                      <span className="sci-neon-dot" />
                      <div className="sci-telemetry-badge-row">
                        <span className="sci-bullet-txt">
                          {activeModal === 'NTSIPL' ? 'RTGS / NEFT Telemetry Badges:' : 'API Gateway Telemetry Badges:'}
                        </span>
                        <span className="sci-badge-live">
                          {activeModal === 'NTSIPL' ? 'LIVE: 2.1s' : 'LIVE: 1.8s'}
                        </span>
                        <span className="sci-badge-secure">STATUS: SECURE</span>
                        <span className="sci-badge-uptime">99.9% UPTIME</span>
                      </div>
                    </div>

                    {/* Bullet 4: Payment Gateway & Performance Metrics */}
                    <div className="sci-bullet-line">
                      <span className="sci-neon-dot" />
                      <span className="sci-bullet-txt">
                        <strong>Payment Gateway Integration:</strong> {activeModal === 'NTSIPL' ? 'PayU, Razorpay (Multi-bank clearing channels)' : 'Razorpay automated rent collection & settlements'}
                      </span>
                    </div>

                    <div className="sci-bullet-line">
                      <span className="sci-neon-dot" />
                      <span className="sci-bullet-txt">
                        <strong>Performance Metrics:</strong> {activeModal === 'NTSIPL' ? '98.7% Uptime, 1.2M+ Transactions, Latency: 45ms' : 'Sub-50ms API response time, automated agreement processing'}
                      </span>
                    </div>

                    {/* Key Responsibilities Block */}
                    <div className="sci-responsibilities-block">
                      <h4 className="sci-responsibilities-heading">KEY IMPACT & RESPONSIBILITIES</h4>
                      <div className="sci-responsibilities-list">
                        {modalData.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="sci-resp-item">
                            <span className="sci-resp-bullet" aria-hidden="true">▹</span>
                            <span className="sci-resp-text">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Pills */}
                    <div className="sci-tech-pills">
                      {modalData.technologies.map(tech => (
                        <span key={tech} className="sci-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
