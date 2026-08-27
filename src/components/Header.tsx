import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import foundationLogo from '../images/The Wallace Foundation - Gold (SVG).svg'

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = (): void => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={foundationLogo} alt="The Wallace Foundation" className="logo-image" />
            </Link>
          </div>
          <ul className="nav-list">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/the-man" onClick={closeMenu}>The Man</Link></li>
            <li><Link to="/the-muscle" onClick={closeMenu}>The Muscle</Link></li>
            <li><Link to="/gala" onClick={closeMenu}>Gala 2025</Link></li>
            <li><Link to="/tshirt" onClick={closeMenu}>Forever 25 T-Shirt</Link></li>
            <li><Link to="/sponsor" onClick={closeMenu}>Become a Sponsor</Link></li>
            <li><Link to="/help-the-cause" onClick={closeMenu}>Help the Cause</Link></li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
