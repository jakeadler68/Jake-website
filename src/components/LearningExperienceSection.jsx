import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'

export default function LearningExperienceSection() {
  useReveal()
  const { t } = useLanguage()
  const le = t.learningExperience

  return (
    <section className="method-section" id="learning-experience">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{le.label}</span>
          <h2 className="section-title">{le.title}</h2>
          <p className="section-desc">{le.desc}</p>
        </div>
        <div className="learning-exp-grid">
          {le.cards.map((card, i) => (
            <div key={i} className={`philosophy-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 5)}` : ''}`}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
