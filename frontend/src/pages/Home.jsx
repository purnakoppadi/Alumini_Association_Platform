import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { testimonials } from '../data'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const t = testimonials[currentSlide]

  return (
    <>
      {/* Hero */}
      <header className="hero">
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>
        <div className="container">
          <div className="hero-badge">🌟 Welcome to Our Alumni Network</div>
          <h1>Building Bridges Between <span className="gradient-text">Past &amp; Future</span></h1>
          <p className="hero-subtitle">Connect with fellow graduates, discover career opportunities, find mentors, and stay engaged with your alma mater through our vibrant alumni community.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Get Started →</Link>
            <Link to="/directory" className="btn-secondary">Explore Directory</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Stats */}
        <section className="section-padding">
          <div className="container">
            <table className="stats-table">
              <tbody>
                <tr>
                  <td>
                    <div className="stat-icon">👥</div>
                    <span className="stat-number">15,000+</span>
                    <span className="stat-label">Registered Alumni</span>
                  </td>
                  <td>
                    <div className="stat-icon">🎉</div>
                    <span className="stat-number">120+</span>
                    <span className="stat-label">Events Hosted</span>
                  </td>
                  <td>
                    <div className="stat-icon">💼</div>
                    <span className="stat-number">3,500+</span>
                    <span className="stat-label">Jobs Posted</span>
                  </td>
                  <td>
                    <div className="stat-icon">🤝</div>
                    <span className="stat-number">850+</span>
                    <span className="stat-label">Mentorship Pairs</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Everything You Need</span></h2>
              <p>Our platform offers powerful tools to stay connected, grow your career, and give back to the community.</p>
            </div>
            <div className="features-row clearfix">
              <div className="feature-box">
                <div className="feature-card">
                  <div className="feature-emoji">🔍</div>
                  <h3>Alumni Directory</h3>
                  <p>Search and connect with thousands of alumni by batch, department, location, and expertise.</p>
                  <Link to="/directory" className="feature-link">Browse Directory →</Link>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-card">
                  <div className="feature-emoji">💼</div>
                  <h3>Job Board</h3>
                  <p>Discover exclusive job and internship opportunities shared by fellow alumni and partner companies.</p>
                  <Link to="/jobs" className="feature-link">View Openings →</Link>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-card">
                  <div className="feature-emoji">📅</div>
                  <h3>Events &amp; Reunions</h3>
                  <p>Stay updated on upcoming reunions, guest lectures, workshops, and networking events.</p>
                  <Link to="/events" className="feature-link">See Events →</Link>
                </div>
              </div>
              <div className="feature-box">
                <div className="feature-card">
                  <div className="feature-emoji">🌱</div>
                  <h3>Mentorship</h3>
                  <p>Connect with experienced alumni mentors for career guidance, advice, and professional growth.</p>
                  <Link to="/mentorship" className="feature-link">Find a Mentor →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="section-padding bg-fixed-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Why Join AlumniConnect?</span></h2>
              <p>Here's what makes our platform special for every graduate.</p>
            </div>
            <div className="content-with-aside clearfix">
              <div className="main-content">
                <article className="glass-card" style={{ marginBottom: '24px' }}>
                  <h3>Our Mission</h3>
                  <p style={{ marginTop: '12px' }}>AlumniConnect bridges the gap between past and present students, creating a thriving community of professionals who support each other's growth and success.</p>
                  <h4 style={{ marginTop: '20px', color: '#818cf8' }}>Key Benefits:</h4>
                  <ol className="styled-ol" style={{ marginTop: '10px' }}>
                    <li>Professional networking with industry leaders</li>
                    <li>Exclusive job opportunities and internships</li>
                    <li>Mentorship from experienced alumni
                      <ul className="styled-ul">
                        <li>One-on-one career guidance</li>
                        <li>Resume and interview preparation</li>
                        <li>Industry-specific advice</li>
                      </ul>
                    </li>
                    <li>Annual reunions and cultural events</li>
                    <li>Knowledge sharing through tech talks</li>
                  </ol>
                </article>
                <article className="glass-card">
                  <h3>Quick Facts</h3>
                  <dl className="info-dl">
                    <dt>Founded</dt>
                    <dd>Established in 2010 to connect alumni worldwide</dd>
                    <dt>Members</dt>
                    <dd>Over 15,000 registered alumni across 20+ countries</dd>
                    <dt>Events</dt>
                    <dd>120+ events organized including reunions, tech talks, and workshops</dd>
                    <dt>Partnerships</dt>
                    <dd>Collaborations with top companies like Google, Microsoft, and Amazon</dd>
                  </dl>
                </article>
              </div>
              <aside className="aside-sidebar">
                <div className="aside-card">
                  <h4>📢 Announcements</h4>
                  <ul className="styled-ul">
                    <li>Annual Reunion 2026 coming in April!</li>
                    <li>New job postings from top MNCs</li>
                    <li>Mentorship applications now open</li>
                  </ul>
                </div>
                <div className="aside-card">
                  <h4>🗓️ Upcoming</h4>
                  <p><strong>April 15</strong> - Grand Alumni Reunion</p>
                  <p><strong>April 22</strong> - AI &amp; Robotics Tech Talk</p>
                  <p><strong>May 5</strong> - Networking Mixer</p>
                </div>
                <div className="aside-card">
                  <h4>📊 Platform Stats</h4>
                  <p>Active this month: <span style={{ color: '#4ade80', fontWeight: 700 }}>2,847</span></p>
                  <p>New members: <span style={{ color: '#818cf8', fontWeight: 700 }}>156</span></p>
                  <p>Jobs filled: <span style={{ color: '#fbbf24', fontWeight: 700 }}>89</span></p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">What Alumni Say</span></h2>
              <p>Hear from our alumni about how this platform has helped them grow.</p>
            </div>
            <div id="testimonialArea">
              <div className="testimonial-card glass-card" id="testimonialCard">
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-info">{t.info}</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <span
                    key={i}
                    className={`dot${i === currentSlide ? ' active' : ''}`}
                    onClick={() => goToSlide(i)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media */}
        <section className="media-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Campus Memories</span></h2>
              <p>Listen to our alumni anthem and watch highlights from past events.</p>
            </div>
            <div className="media-row">
              <figure style={{ display: 'inline-block', margin: '10px', verticalAlign: 'top', textAlign: 'center' }}>
                <audio controls>
                  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <figcaption style={{ color: '#a0a0b8', fontSize: '0.88rem', marginTop: '10px' }}>🎵 Alumni Community Anthem</figcaption>
              </figure>
              <figure style={{ display: 'inline-block', margin: '10px', verticalAlign: 'top', textAlign: 'center' }}>
                <video controls width="480" height="270">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                <figcaption style={{ color: '#a0a0b8', fontSize: '0.88rem', marginTop: '10px' }}>🎬 Annual Reunion Highlights 2025</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <h2>Ready to Reconnect?</h2>
              <p>Join thousands of alumni who are already networking, mentoring, and growing together on our platform.</p>
              <Link to="/login" className="btn-primary">Create Your Profile →</Link>
              <Link to="/events" className="btn-secondary">Upcoming Events</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
