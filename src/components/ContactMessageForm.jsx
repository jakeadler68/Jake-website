import { useState, useCallback, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../LanguageContext'
import '../styles/modals.css'
import '../styles/contact-form.css'

const EMAILJS_PUBLIC_KEY = '0uGaLF7Jx1YMCOj4n'
const EMAILJS_SERVICE_ID = 'service_b56f55o'
const CONTACT_TEMPLATE_ID = 'template_poty0am'

export default function ContactMessageForm({ isOpen, onClose }) {
  const { t } = useLanguage()
  const cm = t.contactMessage

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [contactError, setContactError] = useState(false)
  const formRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    if (!emailRef.current?.value && !phoneRef.current?.value) {
      setContactError(true)
      return
    }
    setContactError(false)
    setSending(true)
    setError(null)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, CONTACT_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setSubmitted(true)
      formRef.current.reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setError(cm.error)
    } finally {
      setSending(false)
    }
  }, [cm.error])

  if (!isOpen) return null

  return (
    <div className="contact-modal open" onClick={onClose}>
      <button className="contact-modal-close" onClick={onClose} aria-label="Close">&times;</button>
      <div className="contact-modal-content contact-msg-content" onClick={(e) => e.stopPropagation()}>
        <div className="contact-msg-header">
          <span className="section-label">{cm.label}</span>
          <h2 className="section-title">{cm.title}</h2>
          <p className="section-desc">{cm.desc}</p>
        </div>
        <form ref={formRef} className="enquiry-form contact-msg-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{cm.labels.name}</label>
            <input type="text" name="name" placeholder={cm.placeholders.name} required />
          </div>
          <div className={`form-group${contactError ? ' contact-field-error' : ''}`}>
            <label>
              {cm.labels.email}
              <span className="field-optional"> {cm.contactHint}</span>
            </label>
            <input ref={emailRef} type="email" name="email" placeholder={cm.placeholders.email} onChange={() => setContactError(false)} />
          </div>
          <div className={`form-group${contactError ? ' contact-field-error' : ''}`}>
            <label>{cm.labels.phone}</label>
            <input ref={phoneRef} type="text" name="phone" placeholder={cm.placeholders.phone} onChange={() => setContactError(false)} />
          </div>
          {contactError && (
            <p style={{ color: '#c0392b', fontSize: '0.85rem', marginTop: '-12px', marginBottom: '16px' }}>
              {cm.contactRequired}
            </p>
          )}
          <div className="form-group">
            <label>{cm.labels.message}</label>
            <textarea name="message" placeholder={cm.placeholders.message} rows="5" required></textarea>
          </div>
          {error && <p style={{ color: '#c0392b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{error}</p>}
          <button
            type="submit"
            className="form-submit"
            disabled={sending}
            style={submitted ? { background: '#2d7a4f', color: '#fff' } : {}}
          >
            {sending ? cm.sending : submitted ? cm.submitted : cm.submit}
          </button>
          <p className="form-privacy">{cm.privacy}</p>
        </form>
      </div>
    </div>
  )
}
