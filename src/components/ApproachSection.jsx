import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/approach.css'
import '../styles/method.css'

export default function ApproachSection() {
  useReveal()
  const [materialsOpen, setMaterialsOpen] = useState(false)
  const { t } = useLanguage()
  const a = t.approach
  const ab = t.about
  const materialsText = t.faq.items[t.faq.items.length - 1].a

  return (
    <section className="approach-section" id="approach">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{a.label}</span>
          <h2 className="section-title">{a.title}</h2>
          <p className="section-desc">{a.desc}</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card reveal">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>{a.cards[0].title}</h3>
            <p>{a.cards[0].text}</p>
          </div>
          <div className="approach-card reveal reveal-delay-1">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3>{a.cards[1].title}</h3>
            <p>{a.cards[1].text}</p>
          </div>
          <div className="approach-card reveal reveal-delay-2">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3>{a.cards[2].title}</h3>
            <p>{a.cards[2].text}</p>
          </div>
        </div>

        <div className="approach-materials-outer">
          <div className="approach-materials-inner">
            <div className="philosophy-accordion reveal">
              <button
                className={`philosophy-accordion-toggle${materialsOpen ? ' open' : ''}`}
                onClick={() => setMaterialsOpen(o => !o)}
                aria-expanded={materialsOpen}
              >
                <span className="section-label" style={{ letterSpacing: '0.12em' }}>{ab.materialsLabel}</span>
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
        </div>
      </div>
    </section>
  )
}
