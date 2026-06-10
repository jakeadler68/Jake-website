import { useLanguage } from '../LanguageContext'
import '../styles/policy.css'

function Section({ section, refundLinkLabel }) {
  return (
    <div>
      <h2>{section.h}</h2>
      {section.p?.map((text, i) => <p key={i}>{text}</p>)}
      {section.refundLink && (
        <p>
          {section.p?.[0]?.includes('Refund') || section.p?.[0]?.includes('退款')
            ? null
            : null}
          <a href="#refund">{refundLinkLabel}</a>
          {'.'}
        </p>
      )}
      {section.items && (
        <ul>
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {section.p2?.map((text, i) => <p key={i}>{text}</p>)}
    </div>
  )
}

export default function PolicyPage({ type }) {
  const { t } = useLanguage()
  const p = t.policies
  const policy = p[type]
  if (!policy) return null

  const refundLinkLabel = type === 'terms'
    ? (t.footer.refundPolicy)
    : ''

  return (
    <div className="policy-page">
      <div className="container">
        <button
          className="policy-back"
          onClick={() => { window.location.hash = '' }}
        >
          {p.back}
        </button>
        <div className="policy-header">
          <span className="policy-label">{p.label}</span>
          <h1 className="policy-title">{policy.title}</h1>
          <p className="policy-meta">{p.updated}</p>
        </div>
        <div className="policy-body">
          <div className="policy-note">{p.onlineNote}</div>
          {policy.note && <div className="policy-note">{policy.note}</div>}

          {policy.s.map((section, i) => (
            section.refundLink
              ? (
                <div key={i}>
                  <h2>{section.h}</h2>
                  {section.p?.map((text, j) => (
                    <p key={j}>
                      {text.split('Refund & Cancellation Policy').length > 1 || text.includes('退款与取消政策')
                        ? <>
                            {text.split(/Refund & Cancellation Policy|退款与取消政策/)[0]}
                            <a href="#refund">{t.footer.refundPolicy}</a>
                            {text.split(/Refund & Cancellation Policy|退款与取消政策/)[1]}
                          </>
                        : text
                      }
                    </p>
                  ))}
                </div>
              )
              : <Section key={i} section={section} refundLinkLabel={refundLinkLabel} />
          ))}

          <div className="policy-contact-block">
            <h2>{p.contactHeading}</h2>
            <p>{policy.contactLine}</p>
            <p><a href="mailto:contact@exprimio.com">contact@exprimio.com</a></p>
            <p>{p.contactCompany}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
