import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-row clearfix">
          <div className="footer-col brand">
            <Link to="/" className="nav-logo">
              <span className="logo-emoji">🎓</span>
              <span className="logo-text">AlumniConnect</span>
            </Link>
            <p>Building bridges between generations of graduates. Stay connected, grow together.</p>
            <div className="footer-socials">
              <a href="#" target="_blank" title="Twitter">𝕏</a>
              <a href="#" target="_blank" title="LinkedIn">in</a>
              <a href="#" target="_blank" title="Facebook">f</a>
              <a href="#" target="_blank" title="Instagram">📷</a>
            </div>
          </div>
          <div className="footer-col links">
            <h4>Platform</h4>
            <Link to="/directory">Alumni Directory</Link>
            <Link to="/jobs">Job Board</Link>
            <Link to="/events">Events</Link>
            <Link to="/mentorship">Mentorship</Link>
          </div>
          <div className="footer-col links">
            <h4>Community</h4>
            <a href="#">Success Stories</a>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">Donate</a>
          </div>
          <div className="footer-col links">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <Link to="/mentorship">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} AlumniConnect. All rights reserved. Made with ❤️ for our alumni community.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
