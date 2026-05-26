
import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/about.css'

export default function AboutSection() {
  useReveal()
  const [philosophyOpen, setPhilosophyOpen] = useState(false)

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake - Lead Coach" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">ABOUT</span>
            <h3 className="reveal reveal-delay-1">About the Founder &amp; <em className="gold-text">Creator</em></h3>
            <p className="reveal reveal-delay-2">Behind every fluent speaker is a coach who understands that true mastery begins with confidence.</p>
            <p className="reveal reveal-delay-3">With over a decade of experience, I have learned that the most effective growth doesn’t come from rigid rules or textbooks. It comes from genuine connection.</p>
            <p className="reveal reveal-delay-4">Currently based in Vietnam, I bring a unique international perspective to my coaching. This background allows me to provide children with a truly global lens, helping them see English not just as a school subject, but as a gateway to the world.</p>
            <p className="reveal reveal-delay-4">My philosophy centers on accompanying growth. I focus on building real trust and creating a relaxed space where individuals feel safe to express their ideas, take risks, and find their unique voice. This “expression-first” approach guides ambitious young learners to transform what they know into natural, high-level English.</p>
            <p className="reveal reveal-delay-4">What parents value most isn’t just the curriculum—it’s having a dedicated mentor who makes their child feel confident, supported, and eager to connect.</p>
            <div className="about-stats reveal">
              <div>
                <span className="about-stat-num">8+ Years</span>
                <span className="about-stat-label">Coaching Experience</span>
              </div>
              <div>
                <span className="about-stat-num">1,000+</span>
                <span className="about-stat-label">Participants Guided</span>
              </div>
              <div>
                <span className="about-stat-num">7,000+</span>
                <span className="about-stat-label">Hours of Coaching</span>
              </div>
            </div>
            {/* <a href="#coaches" className="btn-primary about-coaches-cta reveal">Meet Our Coaches</a> */}
          </div>
        </div>

        <div className="philosophy-block reveal">
          <button
            className={`philosophy-toggle${philosophyOpen ? ' open' : ''}`}
            onClick={() => setPhilosophyOpen(o => !o)}
            aria-expanded={philosophyOpen}
          >
            <span className="section-label">OUR PHILOSOPHY</span>
            <svg className="philosophy-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <div className={`philosophy-dropdown${philosophyOpen ? ' open' : ''}`}>
            <div className="philosophy-dropdown-inner">
            <h3 className="philosophy-heading">More than a language. <em className="gold-text">A tool for life.</em></h3>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <h4>Accompanying Growth</h4>
                <p>English is not just a subject to be memorized - it is a tool for life. We focus on building each learner's confidence, critical thinking, and willingness to express themselves. Coaching goes beyond grammar to help learners feel relaxed, engaged, and supported.</p>
              </div>
              <div className="philosophy-item">
                <h4>A Truly International Perspective</h4>
                <p>Based in a vibrant, international environment, our coaching brings real-world cultural context into the digital classroom. We serve families looking for more than just language acquisition - we provide an expansive, global lens that helps learners connect with the world.</p>
              </div>
              <div className="philosophy-item">
                <h4>KET / PET &amp; IELTS Preparation</h4>
                <p>Our expression-first methodology naturally lays the groundwork for high-level English exams. We integrate targeted speaking and writing skills aligned with KET, PET, and IELTS standards. As students progress, exam-specific elements are introduced seamlessly into 1-on-1 and group coaching - preparing learners for academic and international paths without unnecessary stress.</p>
              </div>
              <div className="philosophy-item">
                <h4>Communication &amp; Progress Reporting</h4>
                <p>To ensure high-quality tracking and respect everyone's time, parents receive structured, periodic progress feedback from the Coach at fixed intervals during each package. Clear, meaningful communication about real growth - not noise.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
