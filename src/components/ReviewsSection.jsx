import { useState, useRef, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import { useLanguage } from '../LanguageContext'
import '../styles/reviews.css'

export default function ReviewsSection({ onOpenVideo }) {
  useReveal()
  const { t } = useLanguage()
  const r = t.reviews
  const reviews = r.items
  const videoTestimonials = r.videoTestimonials

  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const viewportRef = useRef(null)
  const shuffled = useRef([...reviews].sort(() => Math.random() - 0.5)).current

  const tabs = [
    { key: 'all', label: r.tabs.all },
    { key: '1on1', label: r.tabs.oneon1 },
    { key: 'ielts', label: r.tabs.ielts },
  ]

  const filtered = shuffled.filter(rv => filter === 'all' || rv.category.includes(filter))

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ left: 0, behavior: 'auto' })
    }
    setActiveIndex(0)
  }, [filter])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const slide = el.firstElementChild
        if (!slide) return
        const width = slide.getBoundingClientRect().width || 1
        const idx = Math.round(el.scrollLeft / width)
        setActiveIndex(Math.max(0, Math.min(filtered.length - 1, idx)))
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [filtered.length])

  const scrollToIndex = (idx) => {
    const el = viewportRef.current
    if (!el) return
    const count = filtered.length
    if (count === 0) return
    const next = ((idx % count) + count) % count
    const slide = el.firstElementChild
    const width = slide ? slide.getBoundingClientRect().width : el.clientWidth
    el.scrollTo({ left: next * width, behavior: 'smooth' })
  }

  const prev = () => scrollToIndex(activeIndex - 1)
  const next = () => scrollToIndex(activeIndex + 1)

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{r.label}</span>
          <h2 className="section-title">{r.title}</h2>
          <p className="section-desc">{r.desc}</p>
        </div>

        <div className="reviews-tabs reveal">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`review-tab${filter === tab.key ? ' active' : ''}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="reviews-carousel reveal">
          <button className="reviews-arrow reviews-arrow-prev" onClick={prev} aria-label="Previous review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="reviews-viewport" ref={viewportRef}>
            {filtered.map((rv) => (
              <div className="reviews-slide" key={rv.id}>
                <div className="review-card">
                  <div className="review-stars">★ ★ ★ ★ ★</div>
                  <p className="review-text">{rv.text}</p>
                  <div className="review-author">
                    <div className="review-avatar">{rv.avatar}</div>
                    <div>
                      <div className="review-name">{rv.name}</div>
                      <div className="review-meta">{rv.meta}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="reviews-arrow reviews-arrow-next" onClick={next} aria-label="Next review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="reviews-dots reveal">
          {filtered.map((_, i) => (
            <button
              key={i}
              className={`reviews-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* VIDEO SECTION — uncomment when real client video clips are available.
        <div style={{ marginTop: 48 }}>
          <h3 className="section-title reveal" style={{ fontSize: '1.6rem' }}>{r.videoTitle}</h3>
          <p className="section-desc reveal" style={{ marginBottom: 24 }}>{r.videoDesc}</p>
          <div className="review-video-cards">
            {videoTestimonials.map((v, i) => (
              <div key={v.id} className={`review-video-card reveal${i ? ` reveal-delay-${i}` : ''}`} onClick={() => onOpenVideo(v.text)}>
                <img src={v.img} alt="Video testimonial" onError={(e) => e.target.style.display = 'none'} />
                <div className="review-video-play"></div>
                <div className="review-video-label">
                  <strong>{v.name}</strong>
                  {v.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
