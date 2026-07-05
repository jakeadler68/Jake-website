import { useState, useCallback, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../LanguageContext'
import '../styles/modals.css'
import '../styles/contact-form.css'

const EMAILJS_PUBLIC_KEY = '0uGaLF7Jx1YMCOj4n'
const EMAILJS_SERVICE_ID = 'service_b56f55o'
const EMAILJS_TEMPLATE_ID = 'template_32tqtsc'

export default function ContactForm({ isOpen, onClose }) {
  const { t } = useLanguage()
  const cf = t.contactForm

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const formRef = useRef(null)

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
    setSending(true)
    setError(null)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setSubmitted(true)
      formRef.current.reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setError(cf.error)
    } finally {
      setSending(false)
    }
  }, [cf.error])

  if (!isOpen) return null

  const goalKeys = ['confidence', 'academic', 'ielts', 'conversation', 'other']
  const dayKeys = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="contact-modal open" onClick={onClose}>
      <button className="contact-modal-close" onClick={onClose} aria-label="Close">&times;</button>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-info">
          <span className="section-label">{cf.getStarted}</span>
          <h2 className="section-title">{cf.title}</h2>
          <p className="section-desc">{cf.desc}</p>
          <div className="enquiry-benefits">
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>{cf.benefit1}</span>
            </div>
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>{cf.benefit2}</span>
            </div>
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>{cf.benefit3}</span>
            </div>
          </div>
          <p className="enquiry-key-line">{cf.keyLine}</p>
        </div>
        <div className="enquiry-form-wrapper">
          <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.name}</label>
                <input type="text" name="name" placeholder={cf.placeholders.name} required />
              </div>
              <div className="form-group">
                <label>{cf.labels.age}</label>
                <input type="text" name="age" placeholder={cf.placeholders.age} required />
              </div>
            </div>
            <div className="form-group">
              <label>{cf.labels.level}</label>
              <div className="select-wrapper">
                <select name="level" required defaultValue="">
                  {cf.levelOptions.map(opt => (
                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>{cf.labels.goal}</label>
              <div className="checkbox-group">
                {goalKeys.map(g => (
                  <label key={g} className="checkbox-item">
                    <input type="checkbox" name="goal" value={g} /> {cf.goals[g]}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.weeklySessionsLabel}</label>
                <div className="select-wrapper">
                  <select name="weekly_sessions" defaultValue="">
                    {cf.sessionsOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group" />
            </div>
            <div className="form-section-divider">
              <span>{cf.labels.summerSection}</span>
              <p className="form-section-note">{cf.summerNote}</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.summerDays}</label>
                <div className="day-checkboxes">
                  {dayKeys.map(d => (
                    <label key={d} className="day-checkbox-item">
                      <input type="checkbox" name="summer_days" value={d} />
                      <span>{cf.days[d]}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>{cf.labels.summerTime}</label>
                <div className="select-wrapper">
                  <select name="summer_preferred_time" defaultValue="">
                    {cf.timeOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-section-divider">
              <span>{cf.labels.schoolTermSection}</span>
              <p className="form-section-note">{cf.schoolTermNote}</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.days}</label>
                <div className="day-checkboxes">
                  {dayKeys.map(d => (
                    <label key={d} className="day-checkbox-item">
                      <input type="checkbox" name="days" value={d} />
                      <span>{cf.days[d]}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>{cf.labels.time}</label>
                <div className="select-wrapper">
                  <select name="preferred_time" defaultValue="">
                    {cf.timeOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.email}</label>
                <input type="email" name="email" placeholder={cf.placeholders.email} required />
              </div>
              <div className="form-group">
                <label>{cf.labels.phone} <span className="field-optional">{cf.optional}</span></label>
                <input type="tel" name="phone" placeholder={cf.placeholders.phone} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{cf.labels.program}</label>
                <div className="select-wrapper">
                  <select name="program" defaultValue="">
                    {cf.programOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>{cf.labels.startTime} <span className="field-optional">{cf.optional}</span></label>
                <div className="select-wrapper">
                  <select name="start_time" defaultValue="">
                    {cf.startOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>{cf.labels.experience} <span className="field-optional">{cf.optional}</span></label>
              <input type="text" name="experience" placeholder={cf.placeholders.experience} />
            </div>
            <div className="form-group">
              <label>{cf.labels.notes} <span className="field-optional">{cf.optional}</span></label>
              <textarea name="notes" placeholder={cf.placeholders.notes} rows="3"></textarea>
            </div>
            {error && <p className="form-error" style={{ color: '#c0392b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{error}</p>}
            <button type="submit" className="form-submit" disabled={sending} style={submitted ? { background: '#2d7a4f', color: '#fff' } : {}}>
              {sending ? cf.sending : submitted ? cf.submitted : cf.submit}
            </button>
            <p className="form-note">{submitted ? '' : cf.note}</p>
            <p className="form-privacy">{cf.privacy}</p>
          </form>
        </div>
      </div>
    </div>
  )
}
