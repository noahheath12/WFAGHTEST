import './HelpTheCause.css'

function HelpTheCause() {
  return (
    <div className="page-container help-cause-page">
      <div className="page-content">
        <h1>Your Donations Make a Difference!</h1>
        <p className="page-intro">
          Your contributions provide essential resources, create opportunities for growth, and
          foster a brighter future for those in need. Together, we can transform lives and
          build stronger communities through education, health services, and sustainable development.
        </p>

        <section className="ways-to-help">
          <h2>Ways to Support</h2>
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon">💝</div>
              <h3>Make a Donation</h3>
              <p>
                Your financial contribution empowers underserved communities through education,
                healthcare delivery, and sustainable development initiatives. Every dollar creates
                lasting change.
              </p>
              <button className="cta-button">Donate Now</button>
            </div>

            <div className="help-card">
              <div className="help-icon">🎓</div>
              <h3>Support Education</h3>
              <p>
                Help us provide essential educational resources and mentorship programs that
                empower youth and families to reach their full potential.
              </p>
              <button className="cta-button">Learn More</button>
            </div>

            <div className="help-card">
              <div className="help-icon">🏥</div>
              <h3>Healthcare Access</h3>
              <p>
                Support our health services and awareness programs that provide vital resources
                to underserved communities in need of care.
              </p>
              <button className="cta-button">Get Involved</button>
            </div>

            <div className="help-card">
              <div className="help-icon">🤝</div>
              <h3>Become a Sponsor</h3>
              <p>
                Partner with us through sponsorship opportunities and help build stronger
                communities. From Friend to Diamond Visionary levels available.
              </p>
              <button className="cta-button">Sponsor Now</button>
            </div>

            <div className="help-card">
              <div className="help-icon">👕</div>
              <h3>Forever 25 T-Shirt</h3>
              <p>
                Purchase from our Forever 25 collection and wear your support proudly.
                All proceeds directly support our mission and programs.
              </p>
              <button className="cta-button">Shop Now</button>
            </div>

            <div className="help-card">
              <div className="help-icon">🎉</div>
              <h3>Attend the Gala</h3>
              <p>
                Join us at our 2025 Gala celebration. An evening of community, celebration,
                and fundraising to transform lives together.
              </p>
              <button className="cta-button">RSVP Now</button>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h2>Empowering Communities Through Action</h2>
          <p className="impact-intro">
            Your support creates opportunities for growth and fosters a brighter future through
            our core initiatives in education, healthcare, and community development.
          </p>
          <div className="impact-breakdown">
            <div className="impact-item">
              <h3>Education</h3>
              <p>Mentorship programs, educational resources, and scholarships that empower
              youth and families to reach their full potential</p>
            </div>
            <div className="impact-item">
              <h3>Healthcare</h3>
              <p>Health awareness programs, wellness initiatives, and access to vital
              services for underserved communities</p>
            </div>
            <div className="impact-item">
              <h3>Development</h3>
              <p>Sustainable community programs that create lasting change and build
              stronger, more resilient neighborhoods</p>
            </div>
            <div className="impact-item">
              <h3>Together</h3>
              <p>We transform lives and build stronger communities through collective
              action and dedicated support</p>
            </div>
          </div>
        </section>

        <section className="donate-section">
          <h2>Transform Lives Together</h2>
          <p>
            Your contribution provides essential resources and creates opportunities for growth.
            Together, we can build stronger communities and foster a brighter future for those in need.
          </p>
          <div className="donation-amounts">
            <button className="amount-btn">$50</button>
            <button className="amount-btn">$100</button>
            <button className="amount-btn">$250</button>
            <button className="amount-btn">$500</button>
            <button className="amount-btn">$1,000</button>
            <button className="amount-btn custom">Custom Amount</button>
          </div>
          <button className="cta-button large">Donate Now</button>
          <p className="tax-info">
            All donations are tax-deductible. Your support makes a lasting impact.
          </p>
        </section>
      </div>
    </div>
  )
}

export default HelpTheCause
