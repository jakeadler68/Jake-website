import { useLanguage } from '../LanguageContext'
import '../styles/navbar.css'

export default function MobileMenu({ isOpen, onToggleMobile, onOpenContact, onToggleLang, lang }) {
  const { t } = useLanguage()
  const handleContact = () => {
    onToggleMobile()
    onOpenContact()
  }
  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
      <a href="#how-it-works" onClick={onToggleMobile}>{t.nav.method}</a>
      <a href="#programs" onClick={onToggleMobile}>{t.nav.programs}</a>
      <a href="#about" onClick={onToggleMobile}>{t.nav.about}</a>
      <a href="#reviews" onClick={onToggleMobile}>{t.nav.results}</a>
      <button type="button" onClick={handleContact}>{t.nav.applyNow}</button>
      <button className="nav-lang-toggle mobile-lang-toggle" onClick={onToggleLang}>
        <span className={`lang-text ${lang === 'zh' ? 'active' : ''}`}>中</span>
        <span className={`lang-thumb ${lang === 'zh' ? 'left' : 'right'}`}></span>
        <span className={`lang-text ${lang === 'en' ? 'active' : ''}`}>EN</span>
      </button>
    </div>
  )
}
