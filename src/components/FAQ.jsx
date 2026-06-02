import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/faq.css'

export default function FAQ() {
  useReveal()
  const { t } = useLanguage()
  const f = t.faq
  const faqs = f.items

  const [openIndex, setOpenIndex] = useState(null)

  const midPoint = Math.ceil(faqs.length / 2)
  const leftCol = faqs.slice(0, midPoint)
  const rightCol = faqs.slice(midPoint)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{f.label}</span>
          <h2 className="section-title">{f.title}</h2>
        </div>
        <div className="faq-list">
          <div className="faq-column">
            {leftCol.map((faq, i) => (
              <div className={`faq-item reveal${openIndex === i ? ' open' : ''}${i === 0 ? '' : ` reveal-delay-${Math.min(i, 5)}`}`} key={i}>
                <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <h4>{faq.q}</h4>
                  <div className="faq-icon"></div>
                </button>
                <div className="faq-answer">
                  {faq.a.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {rightCol.map((faq, i) => {
              const actualIndex = i + midPoint
              return (
                <div className={`faq-item reveal${openIndex === actualIndex ? ' open' : ''} reveal-delay-${Math.min(actualIndex, 5)}`} key={actualIndex}>
                  <button className="faq-question" onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}>
                    <h4>{faq.q}</h4>
                    <div className="faq-icon"></div>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
