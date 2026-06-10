import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import '../styles/navbar.css'

export default function Navbar({ onToggleMobile, onToggleLang, lang, onOpenContact, forceDark, forceLight }) {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={forceLight ? 'light' : scrolled || forceDark ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <span className="nav-logo">Expr<span>imio</span></span>
          <span className="nav-slogan">{t.footer.slogan}</span>
        </a>
        <ul className="nav-links">
          <li><a href="#how-it-works">{t.nav.method}</a></li>
          <li><a href="#programs">{t.nav.programs}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#reviews">{t.nav.results}</a></li>
          <li><button type="button" className="nav-cta" onClick={onOpenContact}>{t.nav.applyNow}</button></li>
        </ul>
        <div className="nav-right">
          <button className="nav-lang-toggle" onClick={onToggleLang}>
            <span className={`lang-text ${lang === 'zh' ? 'active' : ''}`}>中</span>
            <span className={`lang-thumb ${lang === 'zh' ? 'left' : 'right'}`}></span>
            <span className={`lang-text ${lang === 'en' ? 'active' : ''}`}>EN</span>
          </button>
          <button className="mobile-toggle" onClick={onToggleMobile} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
