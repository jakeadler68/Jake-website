import '../styles/policy.css'

const POLICIES = {
  privacy: {
    label: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: June 2026',
    content: (
      <>
        <div className="policy-note">
          Exprimio provides communication coaching and consulting services through online platforms. Services are delivered online only.
        </div>

        <h2>Who We Are</h2>
        <p>Exprimio is a communication coaching and consulting service operated by Golden Eagle Consulting Company Limited (GEC CO., LTD), registered in Ho Chi Minh City, Vietnam (ERC: 0319547171). Our website is exprimio.com.</p>

        <h2>Information We Collect</h2>
        <p>When you interact with Exprimio, we may collect the following:</p>
        <ul>
          <li>Name and contact information (email address, messaging handles)</li>
          <li>Communication preferences and coaching goals</li>
          <li>Session notes and progress records, used solely to support your coaching</li>
          <li>Payment information — processed securely by third-party payment processors; we do not store card details</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Deliver and personalise your coaching sessions</li>
          <li>Communicate with you about scheduling, updates, and support</li>
          <li>Process payments and manage your account</li>
          <li>Improve the quality of our services</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2>Third-Party Services</h2>
        <p>We use a small number of trusted third-party platforms to operate our services, including ClassIn for session delivery and payment processors for billing. These providers operate under their own privacy policies and are required to handle your data securely.</p>

        <h2>Data Retention</h2>
        <p>We retain your information for as long as your coaching relationship is active, or as required for legitimate business and legal purposes. You may request deletion of your data at any time by contacting us.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, please contact us at the address below.</p>

        <h2>Contact</h2>
        <div className="policy-contact-block">
          <p>For privacy-related questions or requests:</p>
          <p><a href="mailto:contact@exprimio.com">contact@exprimio.com</a></p>
          <p>Golden Eagle Consulting Company Limited · Ho Chi Minh City, Vietnam</p>
        </div>
      </>
    ),
  },

  terms: {
    label: 'Legal',
    title: 'Terms of Service',
    updated: 'Last updated: June 2026',
    content: (
      <>
        <div className="policy-note">
          By engaging Exprimio's services, you agree to these terms. Services are delivered online only through agreed digital platforms.
        </div>

        <h2>About Our Services</h2>
        <p>Exprimio provides online communication coaching and consulting services operated by Golden Eagle Consulting Company Limited (GEC CO., LTD), Ho Chi Minh City, Vietnam. All sessions are conducted through online platforms — Exprimio does not operate any physical location or in-person program.</p>

        <h2>Eligibility</h2>
        <p>Our services are available to individuals who have completed an initial consultation and agreed to a program or session package. By using our services, you confirm that the information you provide is accurate and complete.</p>

        <h2>Payments</h2>
        <p>Packages are generally paid in advance unless otherwise agreed in writing. Payment confirms your place in a scheduled program. All pricing is communicated during the consultation process before any commitment is made.</p>

        <h2>Cancellations & Refunds</h2>
        <p>Our cancellation and refund terms are detailed in the <a href="#refund">Refund & Cancellation Policy</a>. By booking sessions or packages, you agree to those terms.</p>

        <h2>Intellectual Property</h2>
        <p>All coaching materials, frameworks, and content provided by Exprimio are for your personal use only and may not be reproduced, shared, or distributed without written permission.</p>

        <h2>Conduct</h2>
        <p>We ask that all clients engage respectfully during sessions. Exprimio reserves the right to discontinue services in cases of abusive, disrespectful, or inappropriate behaviour, without obligation to issue a refund for unused sessions.</p>

        <h2>Limitation of Liability</h2>
        <p>Exprimio provides coaching and consulting services in good faith. Results vary by individual. We cannot guarantee specific outcomes and are not liable for indirect or consequential losses arising from use of our services.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these terms from time to time. Continued use of our services following notice of changes constitutes acceptance of the updated terms.</p>

        <h2>Contact</h2>
        <div className="policy-contact-block">
          <p>Questions about these terms:</p>
          <p><a href="mailto:contact@exprimio.com">contact@exprimio.com</a></p>
          <p>Golden Eagle Consulting Company Limited · Ho Chi Minh City, Vietnam</p>
        </div>
      </>
    ),
  },

  refund: {
    label: 'Legal',
    title: 'Refund & Cancellation Policy',
    updated: 'Last updated: June 2026',
    content: (
      <>
        <div className="policy-note">
          We aim to be fair, clear, and consistent. This policy is designed to protect both clients and the integrity of the coaching schedule.
        </div>

        <h2>Initial Consultation</h2>
        <p>The initial session may be used to assess your communication goals, current level, scheduling fit, and recommended coaching path. This session helps ensure the program is the right match before any package commitment is made.</p>

        <h2>Package Payments</h2>
        <p>Packages are generally paid in advance unless otherwise agreed. Payment confirms your place in a scheduled program and reserves recurring availability with your coach.</p>

        <h2>Once a Package Begins</h2>
        <p>Once a package has begun, payments are generally non-refundable. This reflects the fact that recurring appointment availability, session planning, and coach preparation are reserved on your behalf in advance.</p>

        <h2>Unused Sessions</h2>
        <p>Unused sessions may be rescheduled, transferred, credited, or otherwise handled on a case-by-case basis at Exprimio's discretion, depending on the circumstances involved.</p>

        <h2>Scheduling & Cancellations</h2>
        <ul>
          <li>Sessions cancelled <strong>more than 24 hours in advance</strong> may be rescheduled based on availability.</li>
          <li>Sessions cancelled <strong>between 12 and 24 hours</strong> before the scheduled time may count as 50% of the session.</li>
          <li>Sessions cancelled <strong>less than 12 hours</strong> before the scheduled time may count as completed.</li>
          <li>Late arrivals do not extend the originally scheduled end time.</li>
        </ul>

        <h2>Package Usage & Inactive Scheduling</h2>
        <p>Exprimio reserves recurring schedule availability based on each client's appointment frequency. Extended inactivity may result in gradual session expiry:</p>
        <ul>
          <li>For clients with <strong>1–2 sessions per week</strong>: unused sessions may begin expiring after <strong>30 consecutive days</strong> without scheduled activity.</li>
          <li>For clients with <strong>3 or more sessions per week</strong>: unused sessions may begin expiring after <strong>60 consecutive days</strong> without scheduled activity.</li>
        </ul>
        <p>Once the inactivity threshold is reached, unused sessions may begin expiring gradually at the client's previous recurring appointment frequency — for example, a client previously attending two sessions per week may have two sessions per week deducted until the package is exhausted or activity resumes.</p>
        <p>Exceptions may be discussed in advance for travel, examinations, medical situations, or other reasonable circumstances.</p>

        <h2>Exceptional Situations</h2>
        <p>Refunds or credits may still be considered in exceptional situations, including:</p>
        <ul>
          <li>Duplicate payment or payment processing error</li>
          <li>Major technical issue caused by Exprimio</li>
          <li>Other reasonable circumstances assessed on a case-by-case basis</li>
        </ul>

        <h2>Contact</h2>
        <div className="policy-contact-block">
          <p>For questions about scheduling, billing, cancellations, or this policy:</p>
          <p><a href="mailto:contact@exprimio.com">contact@exprimio.com</a></p>
          <p>Golden Eagle Consulting Company Limited · Ho Chi Minh City, Vietnam</p>
        </div>
      </>
    ),
  },
}

export default function PolicyPage({ type }) {
  const policy = POLICIES[type]
  if (!policy) return null

  return (
    <div className="policy-page">
      <div className="container">
        <a
          href="#"
          className="policy-back"
          onClick={e => { e.preventDefault(); window.location.hash = '' }}
        >
          ← Back to Home
        </a>
        <div className="policy-header">
          <span className="policy-label">{policy.label}</span>
          <h1 className="policy-title">{policy.title}</h1>
          <p className="policy-meta">{policy.updated}</p>
        </div>
        <div className="policy-body">
          {policy.content}
        </div>
      </div>
    </div>
  )
}
