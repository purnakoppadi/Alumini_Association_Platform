import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <span className="logo-emoji">🎓</span>
          <span className="logo-text">AlumniConnect</span>
        </Link>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/directory" className={isActive('/directory') ? 'active' : ''}>Directory</Link></li>
          <li><Link to="/jobs" className={isActive('/jobs') ? 'active' : ''}>Jobs</Link></li>
          <li><Link to="/events" className={isActive('/events') ? 'active' : ''}>Events</Link></li>
          <li><Link to="/mentorship" className={isActive('/mentorship') ? 'active' : ''}>Mentorship</Link></li>
          <li className="nav-cta"><Link to="/login" className={`btn-primary btn-sm${isActive('/login') ? ' active' : ''}`}>Join Now</Link></li>
        </ul>
        <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
