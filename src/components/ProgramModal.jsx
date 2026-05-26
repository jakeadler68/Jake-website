import { useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import '../styles/modals.css'

export default function ProgramModal({ programKey, onClose, onOpenContact }) {
  const { t } = useLanguage()
  const modalData = t.programs.modal
  const pkgData = modalData.packages

  const handleCta = () => {
    onClose()
    onOpenContact()
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (programKey) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [programKey, onClose])

  if (!programKey || !modalData[programKey]) return null

  const data = modalData[programKey]

  return (
    <div className="program-modal open" onClick={onClose}>
      <button className="program-modal-close" onClick={onClose}>&times;</button>
      <div className="program-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="program-modal-badge">{data.badge}</span>
        <h2 className="program-modal-title">{data.title}</h2>
        <p className="program-modal-desc">{data.desc}</p>
        <div className="program-modal-features">
          {data.features.map((f, i) => (
            <div className="program-modal-feature" key={i}>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="program-modal-packages">
          <h3>{modalData.packagesTitle}</h3>
          <div className="program-modal-packages-grid">
            {pkgData.map((pkg, i) => (
              <div key={i} className={`program-modal-pkg${pkg.badge ? ' featured' : ''}`}>
                {pkg.badge && <span className="program-modal-pkg-badge">{pkg.badge}</span>}
                <div className="program-modal-pkg-sessions">{pkg.sessions}</div>
                <h4>{pkg.name}</h4>
                <p>{pkg.desc}</p>
                <div className="program-modal-pkg-price">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="program-modal-cta" onClick={handleCta}>{modalData.applyNow}</button>
      </div>
    </div>
  )
}
