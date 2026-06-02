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
    </div>
  )
}
