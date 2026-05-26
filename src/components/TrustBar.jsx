import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/trust-bar.css'

export default function TrustBar() {
  useReveal()
  const { t } = useLanguage()
  const tb = t.trustBar

  return (
    <div className="trust-bar" id="trust">
      <div className="container">
        <div className="trust-items">
          <div className="trust-item reveal">
            <strong>{tb.item1strong}</strong>
            {tb.item1}
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <strong>{tb.item2strong}</strong>
            {tb.item2}
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <strong>{tb.item3strong}</strong>
            {tb.item3}
          </div>
          <div className="trust-item reveal reveal-delay-3">
            <strong>{tb.item4strong}</strong>
            {tb.item4}
          </div>
        </div>
      </div>
    </div>
  )
}
