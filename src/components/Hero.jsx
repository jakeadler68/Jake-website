import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/hero.css'

export default function Hero({ onOpenContact }) {
  useReveal()
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="reveal hero-badge">
            <div className="hero-badge-dot"></div>
            <span>{h.badge}</span>
          </div>
          <h1 className="reveal reveal-delay-1">
            {h.h1} <em>{h.h1em}</em>
          </h1>
          <p className="hero-sub reveal reveal-delay-2">{h.sub}</p>
          <div className="hero-actions reveal reveal-delay-3">
            <button type="button" className="btn-primary" onClick={onOpenContact}>{h.applyNow}</button>
            <a href="#how-it-works" className="btn-secondary">{h.seeHow}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
