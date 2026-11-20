import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, profile } from '../data/portfolio';
import './CommandPalette.css';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    ...navItems.map(item => ({
      id: `nav-${item.id}`,
      title: `Navigate to ${item.label}`,
      category: 'NAVIGATION',
      shortcut: '↵',
      run: () => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      },
    })),
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      category: 'ACTIONS',
      shortcut: 'CP',
      run: () => {
        navigator.clipboard.writeText(profile.email);
        alert('Email copied to clipboard: ' + profile.email);
        setIsOpen(false);
      },
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'EXTERNAL',
      shortcut: 'GH',
      run: () => {
        window.open(profile.github, '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'EXTERNAL',
      shortcut: 'IN',
      run: () => {
        window.open(profile.linkedin, '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'act-vault',
      title: 'Open Panther Visual Vault (12 Visuals)',
      category: 'MEDIA',
      shortcut: 'V',
      run: () => {
        window.dispatchEvent(new CustomEvent('open-panther-vault'));
        setIsOpen(false);
      },
    },
  ];

  const filtered = query.trim() === ''
    ? actions
    : actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].run();
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="palette-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
              className="palette-window"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="palette-input-wrapper">
                <span className="palette-search-icon">🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search sections... (Esc to close)"
                  value={query}
                  onChange={e => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  className="palette-input"
                />
                <span className="palette-kbd">ESC</span>
              </div>

              <div className="palette-list">
                {filtered.length === 0 ? (
                  <div className="palette-empty">No matching commands found.</div>
                ) : (
                  filtered.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`palette-item ${selectedIndex === idx ? 'palette-item--selected' : ''}`}
                      onClick={() => item.run()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="palette-item-left">
                        <span className="palette-item-category">{item.category}</span>
                        <span className="palette-item-title">{item.title}</span>
                      </div>
                      <span className="palette-item-shortcut">{item.shortcut}</span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
