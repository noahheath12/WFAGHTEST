import { Link } from 'react-router-dom'
import './Mission.css'

function Mission() {
  return (
    <section className="mission">
      <div className="mission-container">
        {/* Mission Snapshot */}
        <div className="mission-content">
          <h2 className="mission-title">Our Mission</h2>
          <div className="mission-text">
            <p>
              Founded in 2021, The Wallace Foundation was created to provide awareness about physical, mental, and emotional health. To instill confidence, an individual sense of responsibility, and that each person recognize the need to have a plan for a future filled with life-enhancing goals, and for them to realize their full potential in great health.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="impact-stats">
          <div className="impact-header">
            <h2 className="mission-title">Our Impact</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Students & Families Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Youth Mentored</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Health Events</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Civic Projects</div>
            </div>
          </div>
        </div>

        {/* Feature Programs */}
        <div className="feature-programs">
          <div className="programs-header">
            <h2 className="mission-title">Our Programs</h2>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image-placeholder">
                <span>Image Placeholder</span>
              </div>
              <h3>Strong Summer Experience</h3>
              <p>A comprehensive summer program designed to build physical fitness, character, and leadership skills in young people.</p>
            </div>

            <div className="program-card">
              <div className="program-image-placeholder">
                <span>Image Placeholder</span>
              </div>
              <h3>Healing Helps</h3>
              <p>Supporting mental and emotional wellness through counseling resources, workshops, and community support networks.</p>
            </div>

            <div className="program-card">
              <div className="program-image-placeholder">
                <span>Image Placeholder</span>
              </div>
              <h3>Youth Football Camp</h3>
              <p>Teaching teamwork, discipline, and athletic skills while promoting physical health and positive youth development.</p>
            </div>

            <div className="program-card">
              <div className="program-image-placeholder">
                <span>Image Placeholder</span>
              </div>
              <h3>MLK Service Projects</h3>
              <p>Honoring Dr. King's legacy through community service initiatives that strengthen neighborhoods and inspire civic engagement.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Join us in building stronger, healthier communities — one life at a time.</h2>
          <div className="cta-buttons">
            <Link to="/help-the-cause" className="btn btn-primary">Get Involved</Link>
            <Link to="/help-the-cause" className="btn btn-secondary">Donate Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
