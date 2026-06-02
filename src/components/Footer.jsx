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
            <p className="footer-mission">{f.mission}</p>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.quickLinks}</h5>
            <ul className="footer-col-links">
              <li><a href="#programs">{f.links[0]}</a></li>
              <li><a href="#programs">{f.links[1]}</a></li>
              <li><a href="#programs">{f.links[2]}</a></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>{f.links[3]}</button></li>
              <li><a href="#about">{f.links[4]}</a></li>
              <li><a href="#how-it-works">{f.links[5]}</a></li>
              <li><a href="#how-it-works">{f.links[6]}</a></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>{f.links[7]}</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.contactTitle}</h5>
            <ul className="footer-col-links">
              <li><a href="mailto:hello@exprimio.com">hello@exprimio.com</a></li>
              <li className="footer-wechat">WeChat ID: <span>exprimio</span></li>
              <li className="footer-hours" style={{ whiteSpace: 'pre-line' }}>{f.hours}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">{f.legalTitle}</h5>
            <ul className="footer-col-links">
              <li><a href="#terms">{f.legalLinks[0]}</a></li>
              <li><a href="#privacy">{f.legalLinks[1]}</a></li>
              <li><a href="#refund">{f.legalLinks[2]}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom reveal">
          <span className="footer-copy">{f.copyright}</span>
          <span className="footer-copy footer-bottom-links">
            <a href="#terms">{f.termsOfUse}</a>
            <span className="footer-divider">|</span>
            <a href="#privacy">{f.privacyPolicy}</a>
            <span className="footer-divider">|</span>
            <a href="#cookies">{f.cookieSettings}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
