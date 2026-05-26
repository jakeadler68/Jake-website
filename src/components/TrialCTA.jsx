import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/trial-cta.css'

export default function TrialCTA({ onOpenContact }) {
  useReveal()
  const { t } = useLanguage()
  const c = t.trialCta

  return (
    <section className="trial-cta-section" id="trial">
      <div className="container">
        <div className="trial-cta-content reveal">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-desc" style={{ maxWidth: 600 }}>{c.desc}</p>
          <button type="button" className="btn-primary" onClick={onOpenContact}>{c.applyNow}</button>
          <p className="trial-note">{c.note}</p>
        </div>
      </div>
    </section>
  )
}
