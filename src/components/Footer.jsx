import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/footer.css'

export default function Footer({ onOpenContact }) {
  useReveal()
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer>
      <div className="container">
        <div className="footer-cols">

          <div className="footer-col footer-col-brand">
            <div className="footer-brand">Expr<span>imio</span></div>
            <p className="footer-slogan">{f.slogan}</p>
            <p className="footer-category">{f.category}</p>
            <p className="footer-online-note">{f.onlineNote}</p>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.quickLinks}</h5>
            <ul className="footer-col-links">
              <li><a href="#programs">{f.links[0]}</a></li>
              <li><a href="#about">{f.links[1]}</a></li>
              <li><a href="#how-it-works">{f.links[2]}</a></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>{f.links[3]}</button></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>{f.links[4]}</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.contactTitle}</h5>
            <ul className="footer-col-links">
              <li><a href="mailto:contact@exprimio.com">contact@exprimio.com</a></li>
              <li><a href="https://exprimio.com">exprimio.com</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.legalTitle}</h5>
            <ul className="footer-col-links">
              <li><a href="#privacy">{f.legalLinks[0]}</a></li>
              <li><a href="#terms">{f.legalLinks[1]}</a></li>
              <li><a href="#refund">{f.legalLinks[2]}</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-legal-block reveal">
          <p className="footer-legal-text">
            {f.legalBlock.operatedBy}{' '}
            <strong>{f.legalBlock.company}</strong>
            {' · '}{f.legalBlock.short}
            {' · '}{f.legalBlock.vn}
          </p>
          <p className="footer-legal-text">
            {f.legalBlock.erc}
            {' · '}{f.legalBlock.location}
            {' · '}contact@exprimio.com
          </p>
        </div>

        <div className="footer-bottom reveal">
          <span className="footer-copy">{f.copyright}</span>
          <span className="footer-copy footer-bottom-links">
            <a href="#privacy">{f.privacyPolicy}</a>
            <span className="footer-divider">|</span>
            <a href="#terms">{f.termsOfService}</a>
            <span className="footer-divider">|</span>
            <a href="#refund">{f.refundPolicy}</a>
            <span className="footer-divider">|</span>
            <button type="button" className="footer-link-btn footer-bottom-btn" onClick={onOpenContact}>Contact</button>
          </span>
        </div>
      </div>
    </footer>
  )
}
