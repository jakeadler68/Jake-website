import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/coaches.css'

export default function CoachesPage({ onOpenContact }) {
  useReveal()
  const { t } = useLanguage()
  const c = t.coaches

  return (
    <main className="coaches-page">
      <section className="coaches-hero">
        <div className="container">
          <a href="#" className="coaches-back">{c.back}</a>
          <span className="section-label reveal">{c.label}</span>
          <h1 className="coaches-title reveal reveal-delay-1">{c.title} <em className="gold-text">{c.titleEm}</em></h1>
          <p className="coaches-intro reveal reveal-delay-2">{c.intro}</p>
        </div>
      </section>

      <section className="coaches-grid-section">
        <div className="container">
          <div className="coaches-grid">
            <article className="coach-card reveal">
              <div className="coach-card-image">
                <img src="/img/about.jpg" alt="Jake — Founder & Lead Coach" loading="lazy" />
                <span className="coach-badge">{c.jakeBadge}</span>
              </div>
              <div className="coach-card-body">
                <h2 className="coach-name">{c.jakeName}</h2>
                <p className="coach-role">{c.jakeRole}</p>
                {c.jakeBio.map((para, i) => (
                  <p key={i} className="coach-bio-para">{para}</p>
                ))}
              </div>
            </article>

            <article className="coach-card reveal reveal-delay-1">
              <div className="coach-card-image">
                <img src="/img/haydn.jpg" alt="Haydn — Coach & IELTS Specialist" loading="lazy" />
                <span className="coach-badge">{c.haydnBadge}</span>
              </div>
              <div className="coach-card-body">
                <h2 className="coach-name">{c.haydnName}</h2>
                <p className="coach-role">{c.haydnRole}</p>
                {c.haydnBio.map((para, i) => (
                  <p key={i} className="coach-bio-para">{para}</p>
                ))}
              </div>
            </article>
          </div>

          <div className="coaches-footer-cta reveal">
            <h3>{c.ctaTitle}</h3>
            <button type="button" className="btn-primary" onClick={onOpenContact}>{c.ctaBtn}</button>
          </div>
        </div>
      </section>
    </main>
  )
}
