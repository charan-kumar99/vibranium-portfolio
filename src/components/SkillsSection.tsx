import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

// ─── 8 CAPABILITY MODULES (EXACT ORDER FROM IMAGE 2) ──────────────────────────
interface CapabilityCard {
  id: string;
  title: string;
  items: string;
  icon: ReactNode;
  hasTacticalAccent?: boolean;
}

const leftColumnCards: CapabilityCard[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    items: 'C#, Python, Java, TypeScript',
    hasTacticalAccent: true, // Signature tactical chamfer with /// slashes from reference
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    items: 'Git, GitHub, Visual Studio, Jira',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    items: 'AWS, Docker, Azure DevOps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    id: 'messaging-caching',
    title: 'Messaging & Caching',
    items: 'Redis, SNS, SQS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const rightColumnCards: CapabilityCard[] = [
  {
    id: 'databases',
    title: 'Databases',
    items: 'SQL Server, PostgreSQL, Redis',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'frameworks-libraries',
    title: 'Frameworks & Libraries',
    items: 'ASP.NET Core, Entity Framework',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'architecture',
    title: 'Architecture',
    items: 'Clean Architecture, Microservices',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'apis-services',
    title: 'APIs & Services',
    items: 'REST APIs, gRPC, Swagger',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

// ─── BOTTOM TECH STACK RIBBON BRANDS ─────────────────────────────────────────
interface TechBrand {
  name: string;
  icon: ReactNode;
}

const techBrands: TechBrand[] = [
  {
    name: '.NET 8',
    icon: (
      <div className="brand-badge brand-badge--dotnet" aria-hidden="true">
        <span>.NET</span>
      </div>
    ),
  },
  {
    name: 'C#',
    icon: (
      <div className="brand-badge brand-badge--csharp" aria-hidden="true">
        <svg viewBox="0 0 28 28" width="18" height="18" fill="none">
          <path d="M14 2L24.39 8V20L14 26L3.61 20V8L14 2Z" fill="#512BD4" stroke="#9333EA" strokeWidth="1" />
          <text x="14" y="17.5" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C#</text>
        </svg>
      </div>
    ),
  },
  {
    name: 'aws',
    icon: (
      <div className="brand-badge brand-badge--aws" aria-hidden="true">
        <svg viewBox="0 0 40 24" width="34" height="20" fill="none">
          <text x="5" y="15" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif" letterSpacing="-0.5">aws</text>
          <path d="M6 19C14 23 26 23 34 17" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M33 16L35 18L32.5 19.5" fill="#FF9900" stroke="#FF9900" strokeWidth="1" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <div className="brand-badge brand-badge--docker" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#2496ED">
          <path d="M13.98 11.08h1.86v1.86h-1.86zm-2.42 0h1.86v1.86h-1.86zm-2.43 0h1.86v1.86H9.13zm-2.42 0h1.86v1.86H6.71zm4.84-2.43h1.86v1.86h-1.86zm-2.42 0h1.86v1.86H9.13zm-2.42 0h1.86v1.86H6.71zm4.84-2.42h1.86v1.86h-1.86zm-2.42 0h1.86v1.86H9.13zM21.9 12.82c-.37-.28-1.18-.38-1.78-.3-.14-.72-.53-1.4-1.07-1.86l-.42-.35-.32.44c-.45.62-.64 1.34-.63 2.1-.56.3-1.63.35-2.06.37H2.06l-.2.95c.57 2.68 2.29 4.83 4.96 5.86 1.05.41 2.21.62 3.39.62 4.98 0 9.29-3.23 10.63-7.85.45-.12.88-.34 1.25-.67l.38-.34-.57-.47z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <div className="brand-badge brand-badge--postgres" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#336791">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.12 7.23C6.73 17.65 8 15.65 8 13.5V11c0-1.66 1.34-3 3-3h2c1.66 0 3 1.34 3 3v2.5c0 2.15 1.27 4.15 2.88 5.73C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10zm-1 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <div className="brand-badge brand-badge--redis" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#DC382D">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.5 19.5 7 12 10.5z" />
          <path d="M2 12l10 5 10-5v2l-10 5-10-5v-2z" />
          <path d="M2 17l10 5 10-5v2l-10 5-10-5v-2z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Azure DevOps',
    icon: (
      <div className="brand-badge brand-badge--azure" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#0078D7">
          <path d="M4.5 6.5L12 2l7.5 4.5v11L12 22l-7.5-4.5v-11zm1.5.88v9.24L12 20.12l6-3.5V7.38L12 3.88 6 7.38z" />
          <path d="M9 8h6v2H9zm0 3h6v2H9zm0 3h4v2H9z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <div className="brand-badge brand-badge--github" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </div>
    ),
  },
];

export default function SkillsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCardId(prev => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="section skills-section" aria-label="Technical skills">
      {/* Master Kimoyo Cyber Glitch Matrix Background Layer */}
      <div className="skills-bg" aria-hidden="true" />
      <div className="skills-vignette" aria-hidden="true" />
      <div className="geo-pattern geo-pattern--right" aria-hidden="true" />

      <div className="container skills-container">
        {/* ─── 2-ZONE ASYMMETRICAL LAYOUT ───────────────────────────────────── */}
        <div className="skills-main-grid">
          {/* LEFT ZONE: Tag, Heading, Subtitle & Stat HUD */}
          <motion.div
            className="skills-left-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Dual Pill Tag */}
            <div className="skills-pill-tag">
              <span className="skills-pill-bars" aria-hidden="true">
                <span className="skills-pill-bar" />
                <span className="skills-pill-bar" />
              </span>
              <span className="skills-tag-text">MY SKILLS</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="skills-heading">
              <span className="skills-heading-white">Technologies</span>
              <br />
              <span className="skills-heading-white">I </span>
              <span className="skills-heading-gradient">Work With</span>
            </h2>

            {/* Subtitle */}
            <p className="skills-lead">
              A blend of modern technologies, tools and frameworks to build scalable,
              performant and innovative solutions.
            </p>

            {/* Tactical Stat HUD Widget */}
            <div className="skills-stat-hud" role="region" aria-label="Experience summary">
              <div className="skills-stat-hud-corner" aria-hidden="true" />

              {/* Col 1: Projects */}
              <div className="skills-stat-box">
                <div className="skills-stat-icon-wrap" aria-hidden="true">
                  <span className="skills-code-icon">&lt;/&gt;</span>
                </div>
                <div className="skills-stat-value">6+</div>
                <div className="skills-stat-label">Projects</div>
              </div>

              <div className="skills-stat-divider" aria-hidden="true" />

              {/* Col 2: Experience */}
              <div className="skills-stat-box">
                <div className="skills-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2.5s4 3.5 4 8.5c0 2-.5 3.5-1 4.5 1.5 1 3 3.5 3 6.5h-2c0-2-1-3.5-2.5-4.5-.5.5-1 1-1.5 1s-1-.5-1.5-1C9 18.5 8 20 8 22H6c0-3 1.5-5.5 3-6.5-.5-1-1-2.5-1-4.5 0-5 4-8.5 4-8.5z" />
                  </svg>
                </div>
                <div className="skills-stat-value">1+ Year</div>
                <div className="skills-stat-label">Experience</div>
              </div>

              <div className="skills-stat-divider" aria-hidden="true" />

              {/* Col 3: Learning */}
              <div className="skills-stat-box">
                <div className="skills-stat-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="skills-stat-value">Always</div>
                <div className="skills-stat-label">Learning</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT ZONE: 8 Capability Interactive Expandable Buttons */}
          <div className="skills-right-col">
            <div className="skills-cards-grid">
              {/* Left Sub-Column (4 Buttons) */}
              <div className="skills-col-track">
                {leftColumnCards.map((card, idx) => {
                  const isExpanded = activeCardId === card.id;
                  return (
                    <motion.div
                      key={card.id}
                      className={`skills-cap-card ${card.hasTacticalAccent ? 'skills-cap-card--accented' : ''} ${isExpanded ? 'skills-cap-card--expanded' : ''}`}
                      onClick={() => toggleCard(card.id)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                    >
                      {/* Signature tactical chamfer slash accent */}
                      <div className="skills-card-tactical-accent" aria-hidden="true">
                        <span className="tactical-slash" />
                        <span className="tactical-slash" />
                        <span className="tactical-slash" />
                      </div>

                      <div className="skills-cap-icon-box" aria-hidden="true">
                        {card.icon}
                      </div>

                      <div className="skills-cap-info">
                        <div className="skills-cap-header-row">
                          <h3 className="skills-cap-title">{card.title}</h3>
                          <span className="skills-cap-expand-arrow" aria-hidden="true">
                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                        <p className="skills-cap-items">{card.items}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Sub-Column (4 Buttons) */}
              <div className="skills-col-track">
                {rightColumnCards.map((card, idx) => {
                  const isExpanded = activeCardId === card.id;
                  return (
                    <motion.div
                      key={card.id}
                      className={`skills-cap-card ${isExpanded ? 'skills-cap-card--expanded' : ''}`}
                      onClick={() => toggleCard(card.id)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
                    >
                      {/* Signature tactical chamfer slash accent */}
                      <div className="skills-card-tactical-accent" aria-hidden="true">
                        <span className="tactical-slash" />
                        <span className="tactical-slash" />
                        <span className="tactical-slash" />
                      </div>

                      <div className="skills-cap-icon-box" aria-hidden="true">
                        {card.icon}
                      </div>

                      <div className="skills-cap-info">
                        <div className="skills-cap-header-row">
                          <h3 className="skills-cap-title">{card.title}</h3>
                          <span className="skills-cap-expand-arrow" aria-hidden="true">
                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                        <p className="skills-cap-items">{card.items}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM FULL-WIDTH TECH STACK DOCK ─────────────────────────────── */}
        <motion.div
          className="skills-tech-dock"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Left Title with Glowing Star */}
          <div className="skills-dock-header">
            <span className="skills-dock-star" aria-hidden="true">★</span>
            <span className="skills-dock-title">Tech Stack</span>
            <span className="skills-dock-pipe" aria-hidden="true" />
          </div>

          {/* Horizontal Brand Badges */}
          <div className="skills-dock-brands" role="list" aria-label="Core technology stack">
            {techBrands.map(brand => (
              <div key={brand.name} className="skills-brand-chip" role="listitem">
                {brand.icon}
                <span className="skills-brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
