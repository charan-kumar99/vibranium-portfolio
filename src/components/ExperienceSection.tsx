import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import './ExperienceSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section" aria-label="Professional experience">
      <div className="container">
        <div className="section-header">
          <span className="section-identifier">05 // TIMELINE</span>
          <h2 className="section-title">ENGINEERING EXPERIENCE</h2>
          <p className="section-subtitle">
            Track record of shipping production backend systems, banking-grade microservices, and enterprise APIs.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.role}-${idx}`}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              {/* Timeline Marker Circuit */}
              <div className="timeline-marker">
                <div className="marker-ring">
                  <div className="marker-core" />
                </div>
                {idx < experience.length - 1 && <div className="timeline-spine" />}
              </div>

              {/* Experience Card */}
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <span className="company-badge">{item.company}</span>
                    <h3 className="role-title">{item.role}</h3>
                  </div>
                  <div className="timeline-period-badge">
                    <span className="period-text">{item.period}</span>
                    <span className="period-loc">{item.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{item.description}</p>

                <div className="responsibilities-block">
                  <h4 className="responsibilities-title">KEY IMPACT & RESPONSIBILITIES</h4>
                  <ul className="responsibilities-list">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="responsibility-item">
                        <span className="resp-bullet" aria-hidden="true">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-tech">
                  {item.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
