
import useReveal from '../hooks/useReveal'
import '../styles/about.css'

export default function AboutSection() {
  useReveal()

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

      </div>
    </section>
  )
}
