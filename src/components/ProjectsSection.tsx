import { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

export interface ProjectCardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconType: 'folder' | 'database' | 'code-screen' | 'chart' | 'house' | 'bank';
  date: string;
  description: string;
  techTags: string[];
  actionType: 'github' | 'demo' | 'details';
  actionLabel: string;
  linkUrl: string;
  filterCategories: ('all' | 'dotnet' | 'python' | 'javascript' | 'fullstack' | 'mobile')[];
}

const projectsCatalog: ProjectCardData[] = [
  {
    id: 'vaulta',
    number: '01',
    title: 'Vaulta',
    subtitle: 'Personal & Official Document Manager',
    iconType: 'folder',
    date: 'JUL 2026',
    description: 'Privacy-first offline PWA to securely store and manage documents.',
    techTags: ['JavaScript', 'PWA', 'PDF.js', 'jsPDF'],
    actionType: 'github',
    actionLabel: 'View on GitHub',
    linkUrl: 'https://github.com/charan-kumar99/Vaulta',
    filterCategories: ['all', 'javascript', 'mobile'],
  },
  {
    id: 'migration',
    number: '02',
    title: 'Migration Master',
    subtitle: 'High-Performance PostgreSQL Migration Tool',
    iconType: 'database',
    date: 'JUN 2026',
    description: "Fast and reliable database migration using Binary COPY & Kahn's Algorithm.",
    techTags: ['C#', '.NET', 'PostgreSQL', 'Npgsql'],
    actionType: 'github',
    actionLabel: 'View on GitHub',
    linkUrl: 'https://github.com/charan-kumar99/Migration-Master',
    filterCategories: ['all', 'dotnet'],
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'Advanced Developer Portfolio',
    subtitle: 'Immersive 3D Dev Portfolio',
    iconType: 'code-screen',
    date: 'AUG 2025',
    description: 'A modern portfolio with real-time metrics and AI assistant.',
    techTags: ['Next.js', 'React', 'Three.js', 'AI'],
    actionType: 'demo',
    actionLabel: 'View Demo',
    linkUrl: 'https://advanced-portfolio-sandy.vercel.app/',
    filterCategories: ['all', 'javascript', 'fullstack'],
  },
  {
    id: 'devlens',
    number: '04',
    title: 'DevLens',
    subtitle: 'AI-Powered GitHub Repository Analyzer',
    iconType: 'chart',
    date: 'MAR 2026',
    description: 'Get deep insights and intelligent summaries for any repo.',
    techTags: ['C#', 'ASP.NET Core', 'React', 'Gemini'],
    actionType: 'github',
    actionLabel: 'View on GitHub',
    linkUrl: 'https://github.com/charan-kumar99/DevLens',
    filterCategories: ['all', 'dotnet', 'javascript', 'fullstack'],
  },
  {
    id: 'agremate',
    number: '05',
    title: 'Agremate',
    subtitle: 'Smart Property Management Platform',
    iconType: 'house',
    date: 'DEC 2025',
    description: 'Scalable property management with payments and automation.',
    techTags: ['C#', '.NET', 'EF Core', 'Docker'],
    actionType: 'details',
    actionLabel: 'View Details',
    linkUrl: 'https://github.com/charan-kumar99',
    filterCategories: ['all', 'dotnet', 'fullstack'],
  },
  {
    id: 'banking',
    number: '06',
    title: 'RTGS/NEFT Banking System',
    subtitle: 'Enterprise Banking Solution',
    iconType: 'bank',
    date: 'JUN 2026',
    description: 'Microservices architecture for RTGS/NEFT across multiple banks.',
    techTags: ['C#', '.NET', 'Microservices', 'Azure'],
    actionType: 'github',
    actionLabel: 'View on GitHub',
    linkUrl: 'https://github.com/charan-kumar99',
    filterCategories: ['all', 'dotnet', 'fullstack'],
  },
];

type FilterType = 'all' | 'dotnet' | 'python' | 'javascript' | 'fullstack' | 'mobile';

const filterTabs: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'dotnet', label: '.NET Core' },
  { key: 'python', label: 'Python' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'mobile', label: 'Mobile' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projectsCatalog.filter(
    proj => activeFilter === 'all' || proj.filterCategories.includes(activeFilter)
  );

  const renderIcon = (type: ProjectCardData['iconType']) => {
    switch (type) {
      case 'folder':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'database':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case 'code-screen':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <polyline points="7 10 9 12 7 14" />
            <line x1="12" y1="14" x2="16" y2="14" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      case 'house':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'bank':
        return (
          <svg className="wp-card-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="10" x2="4" y2="18" />
            <line x1="10" y1="10" x2="10" y2="18" />
            <line x1="14" y1="10" x2="14" y2="18" />
            <line x1="20" y1="10" x2="20" y2="18" />
            <polygon points="2 7 12 2 22 7 2 7" />
            <line x1="2" y1="21" x2="22" y2="21" />
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="featured-projects-section" aria-label="Featured Projects Showcase">
      {/* Background with Black Panther perched on the left overlooking neon city */}
      <div className="featured-projects-bg" aria-hidden="true" />
      <div className="featured-projects-top-fade" aria-hidden="true" />
      <div className="featured-projects-vignette" aria-hidden="true" />

      <motion.div
        className="featured-projects-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Header Row */}
        <div className="fp-header-row">
          <div className="fp-header-left">
            <div className="fp-eyebrow-wrap">
              <span className="fp-eyebrow-text">M Y   W O R K</span>
              <span className="fp-eyebrow-line" />
            </div>

            <h2 className="fp-headline">
              <span className="headline-featured">FEATURED</span>
              <span className="headline-projects">PROJECTS</span>
            </h2>

            <p className="fp-subtext">
              <span className="subtext-bar" aria-hidden="true" />
              Building real-world solutions with modern technologies.
            </p>
          </div>

          <div className="fp-header-right">
            {/* Filter Tabs */}
            <div className="fp-filter-pill-group" role="tablist" aria-label="Filter projects">
              {filterTabs.map(tab => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    className={`fp-filter-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFilter(tab.key)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3x2 Clean Grid Container — Right-aligned leaving negative space for Black Panther */}
        <div className="fp-grid-wrapper">
          <div className="fp-cards-grid">
            {filteredProjects.map((proj) => (
              <motion.article
                key={proj.id}
                className="fp-project-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Card Top: Number + Date */}
                <div className="wp-card-top">
                  <span className="wp-card-num">{proj.number}</span>
                  <div className="wp-card-date">
                    <span className="wp-cal-icon">📅</span>
                    <span>{proj.date}</span>
                  </div>
                </div>

                {/* Card Icon */}
                <div className="wp-card-icon-wrap" aria-hidden="true">
                  {renderIcon(proj.iconType)}
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="wp-card-title">{proj.title}</h3>
                <div className="wp-card-subtitle">{proj.subtitle}</div>

                {/* Card Description */}
                <p className="wp-card-desc">{proj.description}</p>

                {/* Tech Tags */}
                <div className="wp-tags-row">
                  {proj.techTags.map(tag => (
                    <span key={tag} className="wp-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Card Footer: Action Pill + Circular Arrow */}
                <div className="wp-card-footer">
                  <a
                    href={proj.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-action-pill"
                    aria-label={`${proj.actionLabel} for ${proj.title}`}
                  >
                    {proj.actionType === 'github' ? (
                      <svg className="wp-pill-svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ) : (
                      <svg className="wp-pill-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    )}
                    <span>{proj.actionLabel}</span>
                  </a>

                  <a
                    href={proj.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-action-arrow"
                    aria-label={`Open link for ${proj.title}`}
                  >
                    →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom Telemetry HUD Bar — Exact matching user mockup */}
        <div className="fp-bottom-hud-bar">
          <div className="hud-left-brand">
            <span>CODE</span>
            <span className="dot">·</span>
            <span>BUILD</span>
            <span className="dot">·</span>
            <span>INNOVATE</span>
          </div>

          <div className="hud-center-crest" aria-hidden="true">
            <svg className="panther-emblem-svg" viewBox="0 0 32 32" fill="none" width="22" height="22">
              <path
                d="M6 8l4-5 3 4 3-2 3 2 3-4 4 5-1 7-4 9-5 4-5-4-4-9-1-7z"
                fill="rgba(168, 85, 247, 0.22)"
                stroke="#C084FC"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <polygon points="10,12 13,14 10,16" fill="#FFFFFF" />
              <polygon points="22,12 19,14 22,16" fill="#FFFFFF" />
              <polyline points="13,20 16,23 19,20" stroke="#C084FC" strokeWidth="1.6" />
            </svg>
          </div>

          <div className="hud-right-tagline">
            <span>LET'S BUILD A BETTER TOMORROW</span>
            <span className="motto-slash">//</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
