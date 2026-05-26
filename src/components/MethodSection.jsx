import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/method.css'

export default function MethodSection() {
  useReveal()
  const { t } = useLanguage()
  const m = t.method

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
      </div>
    </section>
  )
}
