import './Sponsor.css'

function Sponsor() {
  return (
    <div className="page-container sponsor-page">
      <div className="page-content">
        <h1>Become a Sponsor</h1>
        <p className="page-intro">
          Partner with The Wallace Foundation to make a lasting impact on health awareness in our community.
        </p>

        <section className="sponsorship-tiers">
          <h2>Sponsorship Levels</h2>
          <div className="tiers-grid">
            
            <div className="tier-card bronze">
              <h3>Friend of Foundation</h3>
              <p className="tier-amount">$1,000</p>
              <ul className="tier-benefits">
                <li>Recognition as a donor and an annual report</li>
                <li>Invitation to yearly donor appreciation event</li>
                <li>Quarterly newsletter with impact updates</li>
              </ul>
              <button className="cta-button">Become a Friend</button>
            </div>
            <div className="tier-card silver">
              <h3>Silver Benefactor</h3>
              <p className="tier-amount">$5,000</p>
              <ul className="tier-benefits">
                <li>All Friend level perks</li>
                <li>Access to exclusive webinars and talks with project leaders</li>
                <li>Personalized report showing contribution impact</li>
              </ul>
              <button className="cta-button">Become a Silver Benefactor</button>
            </div>
            <div className="tier-card gold">
              <h3>Gold Partner</h3>
              <p className="tier-amount">$10,000</p>
              <ul className="tier-benefits">
                <li>All Silver level perks</li>
                <li>Sponsor naming opportunities for specific programs or events</li>
                <li>VIP access to foundation events with backstage experiences</li>
              </ul>
              <button className="cta-button">Become a Gold Partner</button>
            </div>
            <div className="tier-card platinum">
              <h3>Platinum Leader</h3>
              <p className="tier-amount">$15,000</p>
              <ul className="tier-benefits">
                <li>All Gold level perks</li>
                <li>Naming rights within foundation facilities or projects</li>
                <li>Private leadership meetings to discuss impact and future work</li>
                <li>Featured profile in major publications</li>
              </ul>
              <button className="cta-button">Become a Platinum Leader</button>
            </div>
            <div className="tier-card diamond">
              <h3>Diamond Visionary</h3>
              <p className="tier-amount">$25,000+</p>
              <ul className="tier-benefits">
                <li>All Platinum level perks</li>
                <li>Principal naming rights to flagship programs or capital projects</li>
                <li>Annual private dinner with Board of Directors</li>
                <li>Customized executive updates and reports</li>
                <li>Lifetime recognition on foundation's Wall of Honor</li>
              </ul>
              <button className="cta-button">Become a Diamond Visionary</button>
            </div>
          </div>
        </section>

        <section className="corporate-benefits">
          <h2>Why Sponsor?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Community Impact</h3>
              <p>
                Make a meaningful difference in the lives of those affected by health challenges
                in our community.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Brand Visibility</h3>
              <p>
                Gain exposure through our events, website, and marketing materials reaching
                thousands of supporters.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Tax Benefits</h3>
              <p>
                All sponsorships are tax-deductible as allowed by law. We provide documentation
                for your records.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Partnership</h3>
              <p>
                Join a network of committed organizations working together to promote health
                awareness and support.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get Started Today</h2>
          <p>
            Contact us to discuss custom sponsorship opportunities and how we can work
            together to support our mission.
          </p>
          <button className="cta-button">Contact Us</button>
        </section>
      </div>
    </div>
  )
}

export default Sponsor
