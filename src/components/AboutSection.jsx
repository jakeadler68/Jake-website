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
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake - Lead Coach" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">{a.label}</span>
            <h3 className="reveal reveal-delay-1">{a.title} <em className="gold-text">{a.titleEm}</em></h3>
            {a.p1 && <p className="reveal reveal-delay-2">{a.p1}</p>}
            {a.p2 && <p className="reveal reveal-delay-3">{a.p2}</p>}
            {a.p3 && <p className="reveal reveal-delay-4">{a.p3}</p>}
            {a.p4 && <p className="reveal reveal-delay-4">{a.p4}</p>}
            {a.p5 && <p className="reveal reveal-delay-4">{a.p5}</p>}
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
          </div>
        </div>

        <div className="philosophy-accordion reveal">
          <button
            className={`philosophy-accordion-toggle${philosophyOpen ? ' open' : ''}`}
            onClick={() => setPhilosophyOpen(o => !o)}
            aria-expanded={philosophyOpen}
          >
            <span className="section-label" style={{ letterSpacing: '0.12em' }}>{a.philosophyLabel}</span>
            <svg className="philosophy-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
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
      </div>
    </section>
  )
}
