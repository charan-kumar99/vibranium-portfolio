import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './ContactSection.css';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="build-together-section" aria-label="Contact and collaboration">
      <div className="build-together-container">
        {/* Massive Bold Headline */}
        <motion.div
          className="build-headline-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="build-headline">
            <span>LET'S BUILD</span>
            <span>SOMETHING.</span>
          </h2>
        </motion.div>

        {/* Minimal Bottom Conversation Row */}
        <div className="build-action-row">
          <div className="build-copy">
            <p className="build-subtext">
              Have a product, an API or a system to build? Start a conversation.
            </p>
            <div className="build-quick-links">
              <button className="quick-email-btn" onClick={copyEmail}>
                <span>{copied ? 'COPIED TO CLIPBOARD' : profile.email}</span>
                <span className="copy-icon">📋</span>
              </button>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="build-social-link">
                LINKEDIN ↗
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="build-social-link">
                GITHUB ↗
              </a>
              <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="build-social-link">
                WHATSAPP ↗
              </a>
            </div>
          </div>

          <form className="build-input-form" onSubmit={handleSubmit}>
            <div className="build-input-wrapper">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="build-email-input"
                required
              />
              <button type="submit" className="build-send-btn">
                <span>{sent ? 'MESSAGE RECEIVED' : 'START CONVERSATION'}</span>
                <span className="send-arrow">→</span>
              </button>
            </div>
            {sent && (
              <span className="build-success-msg">
                ✓ Resonance confirmed. Charan Kumar will establish transmission shortly.
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
