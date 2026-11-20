import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vaultVisuals, type VaultVisual } from '../data/pantherVault';
import './PantherVisualVault.css';

interface PantherVisualVaultProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PantherVisualVault({ isOpen: controlledOpen, onClose }: PantherVisualVaultProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVisual, setSelectedVisual] = useState<VaultVisual | null>(null);

  const isModalOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleClose = useCallback(() => {
    if (onClose) onClose();
    setInternalOpen(false);
    setSelectedVisual(null);
  }, [onClose]);

  // Global event listener for custom 'open-panther-vault' event
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ visualId?: string }>;
      setInternalOpen(true);
      if (customEvent.detail?.visualId) {
        const found = vaultVisuals.find(v => v.id === customEvent.detail.visualId);
        if (found) setSelectedVisual(found);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Hotkey 'V' when not typing in form inputs
      if (
        (e.key === 'v' || e.key === 'V') &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        e.preventDefault();
        setInternalOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };

    window.addEventListener('open-panther-vault', handleOpenEvent);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-panther-vault', handleOpenEvent);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleClose]);

  const categories = [
    { id: 'all', label: 'ALL ARCHIVES', count: vaultVisuals.length },
    { id: 'operator', label: 'OPERATOR PROTOCOL', count: vaultVisuals.filter(v => v.category === 'operator').length },
    { id: 'kinetic', label: 'KINETIC ENERGY', count: vaultVisuals.filter(v => v.category === 'kinetic').length },
    { id: 'recon', label: 'TACTICAL RECON', count: vaultVisuals.filter(v => v.category === 'recon').length },
    { id: 'cyber', label: 'CYBER WAKANDA', count: vaultVisuals.filter(v => v.category === 'cyber').length },
  ];

  const filteredVisuals = activeCategory === 'all'
    ? vaultVisuals
    : vaultVisuals.filter(v => v.category === activeCategory);

  const handleSelect = (visual: VaultVisual) => {
    setSelectedVisual(visual);
  };

  const handleNext = () => {
    if (!selectedVisual) return;
    const currentIndex = vaultVisuals.findIndex(v => v.id === selectedVisual.id);
    const nextIndex = (currentIndex + 1) % vaultVisuals.length;
    setSelectedVisual(vaultVisuals[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedVisual) return;
    const currentIndex = vaultVisuals.findIndex(v => v.id === selectedVisual.id);
    const prevIndex = (currentIndex - 1 + vaultVisuals.length) % vaultVisuals.length;
    setSelectedVisual(vaultVisuals[prevIndex]);
  };

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="vault-backdrop" onClick={handleClose} role="dialog" aria-modal="true" aria-label="Wakanda Visual Vault">
        <motion.div
          className="vault-modal"
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="vault-header">
            <div className="vault-header-title">
              <span className="vault-badge">
                <span className="vault-badge-pulse" />
                CLASSIFIED ARCHIVES // WAKANDA SEC-01
              </span>
              <h2 className="vault-title">
                VIBRANIUM VISUAL VAULT <span>// {vaultVisuals.length} PROTOCOLS</span>
              </h2>
              <p className="vault-desc">
                High-resolution imagery of Charan Kumar in the ceremonial Black Panther habit and Wakandan tactical operations.
              </p>
            </div>
            <div className="vault-header-actions">
              <span className="vault-shortcut-hint">HOTKEY: <kbd>V</kbd> / <kbd>ESC</kbd></span>
              <button
                className="vault-close-btn"
                onClick={handleClose}
                aria-label="Close visual vault"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="vault-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`vault-tab ${activeCategory === cat.id ? 'vault-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="vault-tab-count">[{cat.count}]</span>
              </button>
            ))}
          </div>

          {/* Main Grid View */}
          <div className="vault-content">
            <div className="vault-grid">
              {filteredVisuals.map(visual => (
                <div
                  key={visual.id}
                  className={`vault-card ${selectedVisual?.id === visual.id ? 'vault-card--selected' : ''}`}
                  onClick={() => handleSelect(visual)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleSelect(visual)}
                >
                  <div className="vault-card-media">
                    <img
                      src={visual.thumbnail || visual.image}
                      alt={visual.title}
                      loading="lazy"
                      className="vault-card-img"
                    />
                    <div className="vault-card-overlay" />
                    <span className="vault-card-category">{visual.categoryLabel}</span>
                  </div>
                  <div className="vault-card-body">
                    <div className="vault-card-meta">
                      <span className="vault-card-tag">{visual.stats.tacticalZone}</span>
                      <span className="vault-card-res">{visual.stats.resonance}</span>
                    </div>
                    <h3 className="vault-card-title">{visual.title}</h3>
                    <p className="vault-card-sub">{visual.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox / Expanded Inspection Overlay */}
          <AnimatePresence>
            {selectedVisual && (
              <motion.div
                className="vault-inspector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedVisual(null)}
              >
                <div className="inspector-panel" onClick={e => e.stopPropagation()}>
                  <button
                    className="inspector-close"
                    onClick={() => setSelectedVisual(null)}
                    aria-label="Back to gallery view"
                  >
                    ← BACK TO VAULT
                  </button>

                  <div className="inspector-layout">
                    {/* Media Display */}
                    <div className="inspector-media-container">
                      <img
                        src={selectedVisual.image}
                        alt={selectedVisual.title}
                        className="inspector-img"
                      />
                      <div className="inspector-scanlines" aria-hidden="true" />
                      <div className="inspector-reticle" aria-hidden="true">
                        <div className="reticle-corner corner--tl" />
                        <div className="reticle-corner corner--tr" />
                        <div className="reticle-corner corner--bl" />
                        <div className="reticle-corner corner--br" />
                      </div>
                    </div>

                    {/* Metadata & Diagnostics */}
                    <div className="inspector-details">
                      <div className="inspector-badge">
                        <span className="status-dot" />
                        {selectedVisual.categoryLabel} // TELEMETRY OK
                      </div>
                      <h2 className="inspector-title">{selectedVisual.title}</h2>
                      <p className="inspector-subtitle">{selectedVisual.subtitle}</p>

                      <div className="inspector-stats">
                        <div className="stat-row">
                          <span className="stat-label">VIBRANIUM FREQUENCY</span>
                          <span className="stat-val">{selectedVisual.stats.resonance}</span>
                        </div>
                        <div className="stat-row">
                          <span className="stat-label">ALLOY GRADE</span>
                          <span className="stat-val">{selectedVisual.stats.vibraniumGrade}</span>
                        </div>
                        <div className="stat-row">
                          <span className="stat-label">TACTICAL DEPLOYMENT</span>
                          <span className="stat-val">{selectedVisual.stats.tacticalZone}</span>
                        </div>
                      </div>

                      <div className="inspector-lore">
                        <h4>TACTICAL DOSSIER & PROTOCOL</h4>
                        <p>{selectedVisual.lore}</p>
                      </div>

                      <div className="inspector-tags">
                        {selectedVisual.tags.map(tag => (
                          <span key={tag} className="inspector-tag">#{tag}</span>
                        ))}
                      </div>

                      <div className="inspector-actions">
                        <a
                          href={selectedVisual.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={`${selectedVisual.id}-wakanda.webp`}
                          className="inspector-action-btn btn--primary"
                        >
                          DOWNLOAD ULTRA-HD VISUAL ↗
                        </a>
                        <div className="inspector-nav-group">
                          <button
                            className="inspector-nav-btn"
                            onClick={handlePrev}
                            aria-label="Previous image"
                          >
                            ← PREV
                          </button>
                          <button
                            className="inspector-nav-btn"
                            onClick={handleNext}
                            aria-label="Next image"
                          >
                            NEXT →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
