import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/about.css'
import '../styles/method.css'

export default function AboutSection() {
  useReveal()
  const [philosophyOpen, setPhilosophyOpen] = useState(false)
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-stats reveal">
          <div>
            <span className="about-stat-num">{a.stat1num}</span>
            <span className="about-stat-label">{a.stat1label}</span>
          </div>
          <div>
            <span className="about-stat-num">{a.stat2num}</span>
            <span className="about-stat-label">{a.stat2label}</span>
          </div>
          <div>
            <span className="about-stat-num">{a.stat3num}</span>
            <span className="about-stat-label">{a.stat3label}</span>
          </div>
        </div>

        <div className="about-grid">

          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake - Lead Coach" loading="lazy" width="1200" height="800" />
          </div>

          <div className="about-content reveal">
            <span className="section-label">{a.label}</span>
            <h3>{a.title} <em className="gold-text">{a.titleEm}</em></h3>
            {a.p1 && <p>{a.p1}</p>}
            {a.p2 && <p>{a.p2}</p>}
            {a.p3 && <p>{a.p3}</p>}
            {a.p4 && <p>{a.p4}</p>}
            {a.p5 && <p>{a.p5}</p>}
            <div className="about-buttons">
              <button
                className={`about-action-btn${philosophyOpen ? ' open' : ''}`}
                onClick={() => setPhilosophyOpen(o => !o)}
                aria-expanded={philosophyOpen}
              >
                <span className="section-label" style={{ letterSpacing: '0.12em' }}>{a.philosophyLabel}</span>
                <span className="about-btn-plus">+</span>
              </button>
              <a href="#coaches" className="about-action-btn">
                <span className="section-label" style={{ letterSpacing: '0.12em' }}>{a.coachesBtn}</span>
                <span className="about-btn-plus">+</span>
              </a>
            </div>
          </div>

        </div>

        <div className={`philosophy-dropdown${philosophyOpen ? ' open' : ''}`}>
          <div className="philosophy-dropdown-inner">
            <h3 className="philosophy-heading">{a.philosophyTitle} <em className="gold-text">{a.philosophyTitleEm}</em></h3>
            <div className="philosophy-grid">
              {a.philosophy.map((item, i) => (
                <div key={i} className="philosophy-item">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
