import { useState } from 'react'
import { eventsData } from '../data'
import PageHeader from '../components/PageHeader'
import EventCard from '../components/EventCard'
import { useToast } from '../context/ToastContext'

function Events() {
  const { showToast } = useToast()
  const [rsvpMap, setRsvpMap] = useState({})

  const handleRsvp = (title) => {
    setRsvpMap(prev => {
      const isRegistered = !prev[title]
      if (isRegistered) {
        showToast(`You've registered for "${title}"!`)
      } else {
        showToast(`Registration cancelled for "${title}".`)
      }
      return { ...prev, [title]: isRegistered }
    })
  }

  return (
    <>
      <PageHeader title="Events &" gradientText="Reunions" description="Never miss a gathering. From grand reunions to insightful guest lectures, stay connected with what's happening." />

      <main>
        {/* Upcoming Events */}
        <section className="section-padding">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Upcoming Events</span></h2>
              <p>Mark your calendars for these exciting upcoming events.</p>
            </div>
            <div className="events-row clearfix" id="eventsContainer">
              {eventsData.map((event, i) => (
                <EventCard
                  key={i}
                  event={event}
                  onRsvp={handleRsvp}
                  isRegistered={!!rsvpMap[event.title]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Events Schedule */}
        <section className="section-padding bg-fixed-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Events Schedule 2026</span></h2>
              <p>Plan your year with our comprehensive events calendar.</p>
            </div>
            <table className="timetable" border="1" cellSpacing="0" cellPadding="12">
              <caption>📅 AlumniConnect Events Timetable — April to June 2026</caption>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Expected Attendees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">April 15</td>
                  <td>Grand Alumni Reunion (Morning Session)</td>
                  <td>10:00 AM - 1:00 PM</td>
                  <td rowSpan="2">University Main Auditorium</td>
                  <td rowSpan="2">500+</td>
                </tr>
                <tr>
                  <td>Grand Alumni Reunion (Evening Gala)</td>
                  <td>5:00 PM - 8:00 PM</td>
                </tr>
                <tr>
                  <td>April 22</td>
                  <td>Tech Talk: Future of AI &amp; Robotics</td>
                  <td>2:00 PM - 5:00 PM</td>
                  <td>Online (Zoom)</td>
                  <td>200+</td>
                </tr>
                <tr>
                  <td>May 5</td>
                  <td>Career Networking Mixer</td>
                  <td>6:00 PM - 9:00 PM</td>
                  <td>Grand Hyatt, Mumbai</td>
                  <td>150+</td>
                </tr>
                <tr>
                  <td rowSpan="2">May 18</td>
                  <td>Cricket Tournament</td>
                  <td>8:00 AM - 1:00 PM</td>
                  <td rowSpan="2">University Sports Complex</td>
                  <td rowSpan="2">300+</td>
                </tr>
                <tr>
                  <td>Football Tournament</td>
                  <td>2:00 PM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>June 2</td>
                  <td>Entrepreneurship Workshop</td>
                  <td>10:00 AM - 4:00 PM</td>
                  <td>Innovation Hub, Campus</td>
                  <td>100+</td>
                </tr>
                <tr>
                  <td>June 20</td>
                  <td colSpan="2">Cultural Night &amp; Music Fest — 5:00 PM to 11:00 PM</td>
                  <td>Open Air Theatre, Campus</td>
                  <td>400+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Memories from Past Events</span></h2>
              <p>Click on any thumbnail to view the full-size image.</p>
            </div>
            <div className="gallery-row">
              {[
                { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94', alt: 'Annual Reunion 2025', caption: 'Reunion 2025' },
                { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', alt: 'Tech Talk Series', caption: 'Tech Talks' },
                { src: 'https://images.unsplash.com/photo-1461896836934-bd45ba48bfca', alt: 'Sports Meet', caption: 'Sports Meet' },
                { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', alt: 'Cultural Night', caption: 'Cultural Night' },
                { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865', alt: 'Networking Mixer', caption: 'Networking Mixer' },
                { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Workshop Series', caption: 'Workshops' },
              ].map((img, i) => (
                <figure key={i} style={{ display: 'inline-block', margin: '8px', verticalAlign: 'top', textAlign: 'center' }}>
                  <a href={`${img.src}?w=800`} target="_blank" rel="noreferrer">
                    <img
                      src={`${img.src}?w=100&h=100&fit=crop`}
                      width="100" height="100" alt={img.alt}
                      style={{ borderRadius: '12px', border: '2px solid rgba(255,255,255,0.1)' }}
                    />
                  </a>
                  <figcaption style={{ color: '#a0a0b8', fontSize: '0.78rem', marginTop: '6px' }}>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Events
