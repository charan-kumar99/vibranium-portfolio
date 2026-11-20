import { motion } from 'framer-motion';
import { education, certifications, interests } from '../data/portfolio';
import './EducationSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function EducationSection() {
  return (
    <section id="education" className="section education-section" aria-label="Education, certifications and leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-identifier">06 // ACADEMICS & HONORS</span>
          <h2 className="section-title">EDUCATION & CREDENTIALS</h2>
          <p className="section-subtitle">
            Formal computer science foundations, verified certifications, athletic discipline, and leadership distinctions.
          </p>
        </div>

        {/* Education & Certifications Row */}
        <div className="edu-cert-grid">
          {/* Degrees */}
          <div className="edu-col">
            <h3 className="subsection-title">
              <span className="sub-icon">🎓</span>
              <span>ACADEMIC DEGREES</span>
            </h3>

            <div className="edu-cards">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="edu-card card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="edu-header">
                    <span className="edu-period">{edu.period}</span>
                    {edu.location && <span className="edu-loc">{edu.location}</span>}
                  </div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-inst">{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-col" id="certifications">
            <h3 className="subsection-title">
              <span className="sub-icon">📜</span>
              <span>CERTIFICATIONS & TRAINING</span>
            </h3>

            <div className="cert-grid">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="cert-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="cert-badge-dot" />
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-area">{cert.area} · {cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Interests (Wakandan Warrior & Mindset attributes) */}
        <div className="interests-wrapper">
          <h3 className="subsection-title">
            <span className="sub-icon">⚔️</span>
            <span>DISCIPLINE, LEADERSHIP & INTERESTS</span>
          </h3>

          <div className="interests-grid">
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                className="interest-pill card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="interest-icon" aria-hidden="true">{item.icon}</span>
                <div className="interest-info">
                  <span className="interest-name">{item.name}</span>
                  {item.detail && <span className="interest-detail">{item.detail}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
