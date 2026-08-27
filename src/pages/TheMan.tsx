import './TheMan.css'
import seanWallaceImage from '../images/SeanWallace.jpg'

function TheMan() {
  return (
    <div className="the-man-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1>THE MAN</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="content-wrapper">
          <h2 className="section-heading">Sean Wallace: A Legacy of Excellence</h2>
          <p className="intro-text">
            Founded on the principles of <span className="highlight">resilience</span>, <span className="highlight">dedication</span>,
            and <span className="highlight">service</span>, The Wallace Foundation stands as a testament to the extraordinary
            life and vision of Sean Wallace—a champion athlete, devoted educator, and community leader.
          </p>
        </div>
      </section>

      {/* Biography with Portrait */}
      <section className="biography-section">
        <div className="content-wrapper">
          <div className="bio-grid">
            <div className="bio-image-container">
              <img src={seanWallaceImage} alt="Sean Wallace" className="bio-image" />
            </div>
            <div className="bio-content">
              <h2>The Journey</h2>
              <p>
                Born in 1972 in New Orleans, Louisiana, Sean Wallace's journey is one of dedication,
                perseverance, and service. A proud graduate of O. Perry Walker Senior High School,
                Sean went on to dominate Southern University's defense as a walk-on athlete under
                coach Pete Richardson.
              </p>
              <p>
                After a brief stint with the Arizona Cardinals, Sean returned to complete his degree
                in 2011—over 25 years after initially attending Southern University. His commitment
                to education led him to coaching roles at The Dunham School and Mentorship Academy
                in Baton Rouge for over a decade, and eventually as safeties coach at Southern
                University A&M College.
              </p>
              <p>
                Beyond coaching, Sean has served as a youth minister, mentor, and successful businessman.
                In 2021, he established the Wallace Foundation to support underserved and at-risk families
                through mentorship, education, and health initiatives. Married for 30 years to Venio Wallace,
                he is a devoted father to Tonyatta, Abraham, and Sadijah, and grandfather to Tiana and DJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="content-wrapper">
          <h2 className="section-heading">Awards & Honors</h2>
          <div className="achievements-grid">
            <ul className="achievements-list">
              <li>Two-time All-SWAC Selection</li>
              <li>SWAC Defensive Player of the Year</li>
              <li>Bayou Classic MVP</li>
              <li>Two-time Sheridan Black College All American</li>
              <li>Walter Camp All American</li>
              <li>Kodak All American</li>
              <li>1993 SWAC Championship Leader</li>
              <li>1993 Black College National Championship Leader</li>
              <li>Southern University Football Hall of Fame (2011)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="family-section">
        <div className="content-wrapper">
          <div className="family-grid">
            <div className="family-content">
              <h2>The Wallace Family</h2>
              <p>
                Family is at the heart of everything Sean Wallace does. Married for 30 years to his wife
                Venio Wallace, Sean embodies the values of commitment and devotion both at home and in
                the community.
              </p>
              <p>
                As a father to Tonyatta, Abraham, and Sadijah, and grandfather to Tiana and DJ, Sean
                understands the importance of strong family bonds and mentorship. These relationships
                inspire his work with the Wallace Foundation, where he extends that same care and
                guidance to underserved and at-risk families throughout the community.
              </p>
            </div>
            <div className="family-image-container">
              <div className="family-image-placeholder">
                <p>Wallace Family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="content-wrapper">
          <h2 className="section-heading">The Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1972</div>
              <div className="timeline-content">
                <h3>Born in New Orleans</h3>
                <p>Sean Wallace was born in New Orleans, Louisiana, beginning a journey that would inspire countless others.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1993</div>
              <div className="timeline-content">
                <h3>Championship Glory</h3>
                <p>Led Southern University Jaguars to SWAC Championship and Black College National Championship, earning numerous All-American honors.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2011</div>
              <div className="timeline-content">
                <h3>Hall of Fame & Degree</h3>
                <p>Inducted into Southern University Football Hall of Fame and completed his college degree after 25 years, exemplifying perseverance.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Foundation Established</h3>
                <p>Founded the Wallace Foundation to support underserved and at-risk families through mentorship, education, and health initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="content-wrapper">
          <blockquote>
            <p>"True success is measured not by the championships won, but by the lives touched and the communities uplifted through service, mentorship, and unwavering dedication."</p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default TheMan
