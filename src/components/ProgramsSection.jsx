import { useState, useRef, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/programs.css'

export default function ProgramsSection({ onOpenProgram }) {
  useReveal()
  const { t } = useLanguage()
  const p = t.programs
  const programs = p.items

  const [selected, setSelected] = useState('coaching')
  const [activeIndex, setActiveIndex] = useState(0)
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const card = el.firstElementChild
        if (!card) return
        const width = card.getBoundingClientRect().width + 14
        const idx = Math.round(el.scrollLeft / width)
        setActiveIndex(Math.max(0, Math.min(programs.length - 1, idx)))
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [programs.length])

  const scrollToIndex = (idx) => {
    const el = gridRef.current
    if (!el) return
    const next = Math.max(0, Math.min(programs.length - 1, idx))
    const card = el.firstElementChild
    const width = card ? card.getBoundingClientRect().width + 14 : el.clientWidth
    el.scrollTo({ left: next * width, behavior: 'smooth' })
  }

  const prev = () => scrollToIndex(activeIndex - 1)
  const next = () => scrollToIndex(activeIndex + 1)

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{p.label}</span>
          <h2 className="section-title">{p.title}</h2>
          <p className="section-desc">{p.desc}</p>
        </div>

        <div className="programs-carousel-wrapper">
          <button
            className={`programs-arrow programs-arrow-prev${activeIndex === 0 ? ' disabled' : ''}`}
            onClick={prev}
            aria-label="Previous program"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="programs-grid programs-grid-3" ref={gridRef}>
            {programs.map((prog, i) => (
              <div
                key={prog.key}
                className={`program-card reveal${i ? ` reveal-delay-${i}` : ''}${selected === prog.key ? ' featured' : ''}`}
                onClick={() => setSelected(prog.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(prog.key) } }}
              >
                {prog.badge && <div className="program-badge">{prog.badge}</div>}
                <div className="program-age">{prog.tag}</div>
                <h3 className="program-name">{prog.name}</h3>
                <div className="program-highlight">{prog.highlight}</div>
                <p className="program-desc">{prog.desc}</p>
                <button
                  className="program-cta"
                  onClick={(e) => { e.stopPropagation(); onOpenProgram(prog.key) }}
                >
                  {p.learnMore}
                </button>
              </div>
            ))}
          </div>

          <button
            className={`programs-arrow programs-arrow-next${activeIndex === programs.length - 1 ? ' disabled' : ''}`}
            onClick={next}
            aria-label="Next program"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
