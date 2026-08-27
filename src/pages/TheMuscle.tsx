import './TheMuscle.css'

function TheMuscle() {
  return (
    <div className="page-container the-muscle-page">
      <div className="page-content">
        <h1>The Muscle</h1>
        <p className="page-intro">
          Meet the dedicated team and volunteers who bring our mission to life every day.
        </p>

        <section className="team-intro">
          <h2>Our Team</h2>
          <p>
            The Wallace Foundation is powered by a passionate team of professionals,
            volunteers, and supporters who dedicate their time and expertise to promoting
            health awareness and supporting our community.
          </p>
        </section>

        <section className="team-members">
          <h2>Leadership Team</h2>
          <div className="members-grid">
            <div className="member-card">
              <div className="member-image-placeholder">
                <p>Photo</p>
              </div>
              <h3>Name</h3>
              <p className="member-role">Executive Director</p>
              <p className="member-bio">
                Brief bio and background about the team member's role and
                contribution to the foundation.
              </p>
            </div>

            <div className="member-card">
              <div className="member-image-placeholder">
                <p>Photo</p>
              </div>
              <h3>Name</h3>
              <p className="member-role">Program Director</p>
              <p className="member-bio">
                Brief bio and background about the team member's role and
                contribution to the foundation.
              </p>
            </div>

            <div className="member-card">
              <div className="member-image-placeholder">
                <p>Photo</p>
              </div>
              <h3>Name</h3>
              <p className="member-role">Community Outreach</p>
              <p className="member-bio">
                Brief bio and background about the team member's role and
                contribution to the foundation.
              </p>
            </div>

            <div className="member-card">
              <div className="member-image-placeholder">
                <p>Photo</p>
              </div>
              <h3>Name</h3>
              <p className="member-role">Development Director</p>
              <p className="member-bio">
                Brief bio and background about the team member's role and
                contribution to the foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="volunteer-section">
          <h2>Our Volunteers</h2>
          <p>
            Our volunteers are the heart of The Wallace Foundation. They give their time,
            energy, and compassion to support our programs and events throughout the year.
          </p>
          <div className="volunteer-stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Active Volunteers</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Hours Donated</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Events Supported</p>
            </div>
          </div>
        </section>

        <section className="join-team">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for passionate individuals to join us in our mission.
            Whether you want to volunteer, join our board, or explore career opportunities,
            we'd love to hear from you.
          </p>
          <div className="join-buttons">
            <button className="cta-button">Volunteer</button>
            <button className="cta-button secondary">Career Opportunities</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TheMuscle
