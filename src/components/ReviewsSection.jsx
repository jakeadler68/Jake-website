import { useState, useRef, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/reviews.css'

const reviews = [
  { id: 1, category: '1on1', text: `“We are so lucky to have found this teacher! Humorous and witty in class, guiding my child to think seriously and actively interact. Every class is full of rewards. Thank you, teacher!”`, avatar: 'I', name: 'Parent of Isabella', meta: 'Mar 2025' },
  { id: 2, category: '1on1', text: `“The teacher sets high standards, which is actually a great motivation for my child. Thanks!”`, avatar: 'K', name: 'Parent of Karl', meta: 'Mar 2025' },
  { id: 3, category: '1on1', text: `“Very good teacher — serious and responsible. She corrects my child's problems right away and keeps the lessons engaging. Every class has a full harvest.”`, avatar: 'I', name: 'Parent of Isabella', meta: 'Feb 2025' },
  { id: 4, category: '1on1', text: `“Very nice teacher. Good at expanding the contents of the lessons. He creates more chances for students to speak.”`, avatar: 'F', name: 'Parent of Flower', meta: 'Jan 2025' },
  { id: 5, category: '1on1', text: `“Teacher Jake is Zheng's favorite teacher. His classes are very interesting — he is very skilled at guiding children to say complete sentences and correcting their pronunciation. Every class is very rewarding. Thank you, teacher.”`, avatar: 'Z', name: 'Parent of Zheng', meta: 'Aug 2024' },
  { id: 6, category: '1on1', text: `“The teacher is incredibly patient — instructions are clear, corrections are effective, and the classroom is always lively. He helps my child develop a real sense for sentences. Truly excellent.”`, avatar: 'S', name: 'Parent of Siri', meta: 'Aug 2024' },
  { id: 7, category: '1on1', text: `“Very patient and effective corrections. Fun and engaging. We're really glad to have you as our teacher!”`, avatar: 'S', name: 'Parent of Siri', meta: 'Aug 2024' },
  { id: 8, category: '1on1', text: `“The teacher is very patient, corrects mistakes right away, and is great at guiding children — just as he says, he always strives to help kids build and express more complete sentences.”`, avatar: 'K', name: 'Parent of Karl', meta: 'Aug 2024' },
  { id: 9, category: '1on1', text: `“Excellent teacher — able to guide and correct children to speak in complete sentences.”`, avatar: 'C', name: 'Parent of Claire', meta: 'Aug 2023' },
  { id: 10, category: '1on1', text: `“After just two lessons during summer vacation, my child became so interested in your class that even months later he still talks about you.”`, avatar: 'G', name: 'Parent of Graham', meta: 'Jul 2023' },
  { id: 11, category: '1on1', text: `“Jake, you are such a communicative teacher. We love your native accent and hope to keep learning from you in your classes.”`, avatar: 'I', name: 'Parent of Isabella (Susan)', meta: 'Jul 2023' },
  { id: 12, category: '1on1', text: `“The lessons are great and the teacher is very dedicated and responsible — patiently correcting my child's reading mistakes over and over again without complaint.”`, avatar: 'F', name: 'Parent of Frank', meta: 'Jun 2021' },
  { id: 13, category: '1on1', text: `“You are very humorous and Yannie loves you — she is so happy in your class! Thank you for correcting her grammatical mistakes over and over again, giving her more and more opportunities to speak and express herself correctly in English.”`, avatar: 'Y', name: 'Parent of Yannie', meta: 'May 2021' },
  { id: 14, category: '1on1', text: `“My child loves Teacher Jake so much — he takes three lessons a week and never misses a single one. He especially loves chatting with the teacher for a few minutes before class begins.”`, avatar: 'L', name: 'Parent of Leo', meta: 'Feb 2021' },
  { id: 15, category: '1on1', text: `“As the year comes to an end, I am especially grateful to Teacher Jake for guiding Leo. After more than a year of lessons, my child is very enthusiastic, and in the second half of this year I clearly saw progress — he can now express his thoughts clearly. This is inseparable from Teacher Jake's guidance. He loves the enrichment content, which keeps him deeply interested in learning. Thank you, Teacher Jake!”`, avatar: 'L', name: 'Parent of Leo', meta: 'Dec 2020' },
  { id: 16, category: '1on1', text: `“My child loves this teacher — always excited before every class. I especially appreciate how the teacher chats with my child about topics he's interested in, helping him learn to express himself more and more. It's truly our child's blessing to have such a wonderful teacher.”`, avatar: 'L', name: 'Parent of Leo', meta: 'Sep 2020' },
  { id: 17, category: '1on1', text: `“The teacher patiently listens to children as they express themselves and corrects their mistakes. He also chats with them about things they love — like LEGO and racing! This makes children so much more enthusiastic. This teacher is our child's absolute favorite.”`, avatar: 'L', name: 'Parent of Leo', meta: 'Apr 2020' },
  { id: 18, category: '1on1', text: `“I am the child's mother. What I love most is how you correct my child's pronunciation and sentence patterns. I am very satisfied. Looking forward to your next class soon!”`, avatar: 'Y', name: 'Mom of YOYO', meta: 'Apr 2020' },
  { id: 19, category: '1on1', text: `“Tongtong loves teachers who speak quickly, are quirky and fun, and who lead the lesson with energy — far better than just an encouraging style. Teacher Jake is exactly that.”`, avatar: 'T', name: 'Parent of Tongtong', meta: 'Feb 2020' },
  { id: 20, category: '1on1', text: `“Teacher Jake is very patient — correcting Tom's pronunciation sound by sound and guiding him word by word through reading. Very serious and responsible. Tom loves Teacher Jake too.”`, avatar: 'T', name: 'Parent of Tom', meta: 'Nov 2019' },
  { id: 21, category: '1on1', text: `“Thank you for your patience. Tom is happy learning English with you. I believe with more lessons, Tom will improve soon.”`, avatar: 'T', name: 'Parent of Tom', meta: 'Oct 2019' },
  { id: 22, category: '1on1', text: `“Jake is a patient teacher. Sean likes your lessons and is making great progress. Thank you very much.”`, avatar: 'S', name: 'Parent of Sean', meta: 'Oct 2019' },
  { id: 23, category: '1on1', text: `“Teacher Jack is very responsible in class — my child loves it.”`, avatar: 'P', name: 'Parent of Paxton', meta: 'Aug 2019' },
  { id: 24, category: '1on1', text: `“First lesson with the teacher and my child adapted quickly, got right into learning mode, and learned the pronunciation of the number 20.”`, avatar: 'M', name: 'Parent of Mike', meta: 'Jul 2019' },
  { id: 25, category: '1on1', text: `“Teacher Jack is especially patient and fun, paying close attention to guiding interactions with children and encouraging full sentences. He also specifically corrected the pronunciation of 'three'!”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jul 2019' },
  { id: 26, category: '1on1', text: `“Thank you, Mr. Jake, for your patience in teaching my child. After 25 lessons, my child finally entered the learning state.”`, avatar: 'G', name: 'Parent of Gary', meta: 'Jun 2019' },
  { id: 27, category: '1on1', text: `“We love the class atmosphere — it feels like talking with a friend! Thank you for the effective help!”`, avatar: 'A', name: 'Parent of Alisa', meta: 'Jun 2019' },
  { id: 28, category: '1on1', text: `“Jack is very nice and patient. We have a lot of fun! Thank you for explaining the difference between MARK and PEN.”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jun 2019' },
  { id: 29, category: '1on1', text: `“Thanks to the teacher's patience, she has made great progress.”`, avatar: 'T', name: 'Parent of Tina', meta: 'Jun 2019' },
  { id: 30, category: '1on1', text: `“Jack, thanks for your patience, concern and attention for Terry!”`, avatar: 'T', name: 'Parent of Terry', meta: 'Jun 2019' },
  { id: 31, category: '1on1', text: `“Bobi loves your lively and interesting teaching. The purpose of learning is to use language flexibly in daily life and communicate with others — and that's exactly what you teach.”`, avatar: 'B', name: 'Parent of Bobo', meta: 'Apr 2019' },
  { id: 32, category: '1on1', text: `“The teacher is great — wonderful interaction with children, seriously correcting pronunciation, and guiding them through reading complete sentences.”`, avatar: 'J', name: 'Parent of Julia', meta: 'Mar 2019' },
  { id: 33, category: '1on1', text: `“Dear Teacher Jake, you are Nelson's favorite teacher! Our whole family loves you. Thank you for teaching Nelson with love, sunshine, happiness, and wisdom — helping him enjoy learning English. Nelson makes progress every day!”`, avatar: 'N', name: `Nelson's Mom`, meta: 'Feb 2019' },
  { id: 34, category: '1on1', text: `“Teacher Jack is very patient and fun. In class he encouraged Grace to use long sentences, do free talk, and play silly faces — that's awesome! Grace had a wonderful class. Thank you.”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jan 2019' },
  { id: 35, category: '1on1', text: `“You are very kind and friendly to students. Thanks for your patience and smile. You are doing the best things with your heart.”`, avatar: 'A', name: 'Parent of Anna', meta: 'Jan 2019' },
  { id: 36, category: '1on1', text: `“Thank you for encouraging Grace to do free talk and use long sentences in class. That is exactly what we need from an online course.”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jan 2019' },
  { id: 37, category: '1on1', text: `“Teacher Jack is very energetic. Miao Miao loves him so much — he really motivates children to learn enthusiastically.”`, avatar: 'M', name: 'Parent of Miao Miao', meta: 'Jan 2019' },
  { id: 38, category: '1on1', text: `“The teacher is very outgoing and lively — my child takes to him easily. An excellent foreign language teacher.”`, avatar: 'S', name: 'Parent of Steven', meta: 'Jan 2019' },
  { id: 39, category: '1on1', text: `“He encourages children to communicate beyond the class slides — chatting about things like popcorn and dinosaurs. We have a very good time!”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jan 2019' },
  { id: 40, category: '1on1', text: `“My little boy likes you so much. Your class atmosphere is very active and engaging.”`, avatar: 'L', name: 'Parent of Leo', meta: 'Jan 2019' },
  { id: 41, category: '1on1', text: `“Teacher Jack is sooooo patient with Grace and gives her extra help every single class.”`, avatar: 'G', name: 'Parent of Grace', meta: 'Jan 2019' },
  { id: 42, category: '1on1', text: `“Teacher Jake is lovely and lively. He draws kids in and is very patient.”`, avatar: 'E', name: 'Parent of Ethan', meta: 'Dec 2018' },
  { id: 43, category: '1on1', text: `“Eric likes you very much — you are so patient and kind to him, and you always come well-prepared. See you next time!”`, avatar: 'E', name: 'Parent of Eric', meta: 'Dec 2018' },
  { id: 44, category: '1on1', text: `“Lively and interesting class, and a very nice teacher.”`, avatar: 'J', name: 'Parent of Jerry', meta: 'Dec 2018' },
  { id: 45, category: '1on1', text: `“Andy may not have fully adapted yet, but give him some time — he will be fine. You are a patient teacher, and that makes all the difference.”`, avatar: 'A', name: 'Parent of Andy', meta: 'Nov 2018' },
  { id: 46, category: '1on1', text: `“Thank you very much — your class is very interesting.”`, avatar: 'G', name: 'Parent of Gary', meta: 'Nov 2018' }
]

// VIDEO TESTIMONIALS — restore this section when real client video clips are available.
// Format: { id, img (thumbnail URL), name (parent name), meta (e.g. "Mother of Leo, age 8"), text (video description) }
// Rendered as a 3-column grid of clickable thumbnail cards with a play button overlay.
// Re-add the JSX block below (search "VIDEO SECTION") and restore the onOpenVideo prop call.
//
// const videoTestimonials = [
//   { id: 1, img: 'thumbnail-url', name: 'Lin',   meta: 'Mother of Leo, age 8',    text: 'Video: ...' },
//   { id: 2, img: 'thumbnail-url', name: 'Chen',  meta: 'Father of Sophie, age 12', text: 'Video: ...' },
//   { id: 3, img: 'thumbnail-url', name: 'Huang', meta: 'Father of Ryan, age 13',   text: 'Video: ...' },
// ]

export default function ReviewsSection({ onOpenVideo }) {
  useReveal()

  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const viewportRef = useRef(null)

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'group', label: 'Group Sessions' },
    { key: '1on1', label: '1-on-1' },
    { key: 'ielts', label: 'IELTS' }
  ]

  const filtered = reviews.filter(rv => filter === 'all' || rv.category.includes(filter))

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
          <span className="section-label">WHAT CLIENTS SAY</span>
          <h2 className="section-title">Real feedback from people who've gone through the process.</h2>
          <p className="section-desc">No cherry-picked one-liners. Real feedback from families who've committed to the process.</p>
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
          <h3 className="section-title reveal" style={{ fontSize: '1.6rem' }}>Hear from clients directly</h3>
          <p className="section-desc reveal" style={{ marginBottom: 24 }}>Short video testimonials from families who've seen the transformation.</p>
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
