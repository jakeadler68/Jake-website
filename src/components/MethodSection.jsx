
import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/method.css'

export default function MethodSection() {
  useReveal()
  const [philosophyOpen, setPhilosophyOpen] = useState(false)

  return (
    <section className="method-section" id="how-it-works">
      <div className="container">
        <div className="reveal">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">A Clear Process, Tailored to the Individual</h2>
          <p className="section-desc">Focus on expression, not just correctness.</p>
        </div>
        <div className="method-grid">
          <div className="method-card reveal">
            <div className="method-num">01</div>
            <h3>We Identify the Starting Point</h3>
            <p>We begin with a conversation to understand current ability and communication style. No tests. Just a real conversation.</p>
          </div>
          <div className="method-card reveal reveal-delay-1">
            <div className="method-num">02</div>
            <h3>We Build Clear Expression</h3>
            <p>We guide full ideas first, then refine accuracy through feedback. Participants practice speaking in full sentences about things they already know.</p>
          </div>
          <div className="method-card reveal reveal-delay-2">
            <div className="method-num">03</div>
            <h3>Progress Doesn't Stop After the Session</h3>
            <p>Communication improves beyond sessions through real-world use. English improves not just during sessions, but in how people think, speak, and respond.</p>
          </div>
        </div>

        <div className="philosophy-accordion reveal">
          <button
            className={`philosophy-accordion-toggle${philosophyOpen ? ' open' : ''}`}
            onClick={() => setPhilosophyOpen(o => !o)}
            aria-expanded={philosophyOpen}
          >
            <span className="section-label" style={{ letterSpacing: '0.12em' }}>OUR PHILOSOPHY</span>
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
