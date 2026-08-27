import { useEffect, useRef } from 'react'
import './Gala.css'

function Gala() {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) return

    // Load rsvpify embed script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://thewallacefoundationgala.rsvpify.com/embed'
    script.async = true

    const container = document.getElementById('rsvpify-embed-container')
    if (container) {
      container.appendChild(script)
      scriptLoaded.current = true

      // After script loads, find and configure the iframe
      script.onload = () => {
        setTimeout(() => {
          const iframe = container.querySelector('iframe')
          if (iframe) {
            iframe.setAttribute('scrolling', 'no')
            iframe.style.overflow = 'hidden'
            iframe.style.height = '1200px'
          }
        }, 1000)
      }
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const container = document.getElementById('rsvpify-embed-container')
      if (container && script.parentNode === container) {
        container.removeChild(script)
        scriptLoaded.current = false
      }
    }
  }, [])

  return (
    <div className="page-container gala-page">
      <div className="page-content">
        <h1>Gala 2025</h1>
        <p className="page-intro">
          Join us for our annual gala celebration supporting The Wallace Foundation's mission.
        </p>

        <section className="event-details">
          <h2>Event Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <h3>Date</h3>
              <p>To be announced</p>
            </div>
            <div className="detail-item">
              <h3>Location</h3>
              <p>To be announced</p>
            </div>
            <div className="detail-item">
              <h3>Dress Code</h3>
              <p>Formal attire</p>
            </div>
            <div className="detail-item">
              <h3>Time</h3>
              <p>To be announced</p>
            </div>
          </div>
        </section>

        <section className="gala-info">
          <h2>About the Event</h2>
          <p>
            Our annual gala brings together supporters, donors, and community members
            for an evening of celebration and fundraising. All proceeds go directly to
            supporting our programs focused on physical, mental, and emotional health.
          </p>
        </section>

        <section className="rsvp-section">
          <h2>RSVP</h2>
          <div id="rsvpify-embed-container" className="rsvpify-container">
            {/* rsvpify embed will load here */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gala
