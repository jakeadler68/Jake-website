import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/method.css'

export default function MethodSection() {
  useReveal()
  const [philosophyOpen, setPhilosophyOpen] = useState(false)
  const [materialsOpen, setMaterialsOpen] = useState(false)
  const { t } = useLanguage()
  const m = t.method
  const a = t.about
  const materialsText = t.faq.items[t.faq.items.length - 1].a

  return (
    <section className="method-section" id="how-it-works">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{m.label}</span>
          <h2 className="section-title">{m.title}</h2>
          <p className="section-desc">{m.desc}</p>
        </div>
        <div className="method-grid">
          {m.cards.map((card, i) => (
            <div key={i} className={`method-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="method-num">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
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

        <div className="philosophy-accordion reveal">
          <button
            className={`philosophy-accordion-toggle${materialsOpen ? ' open' : ''}`}
            onClick={() => setMaterialsOpen(o => !o)}
            aria-expanded={materialsOpen}
          >
            <span className="section-label" style={{ letterSpacing: '0.12em' }}>{a.materialsLabel}</span>
            <svg className="philosophy-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <div className={`philosophy-dropdown${materialsOpen ? ' open' : ''}`}>
            <div className="philosophy-dropdown-inner">
              <div className="materials-text">
                {materialsText.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
