import { useState } from 'react'
import { mentorsData } from '../data'
import PageHeader from '../components/PageHeader'
import MentorCard from '../components/MentorCard'
import Modal from '../components/Modal'
import { useToast } from '../context/ToastContext'
import api from '../services/api'

function Mentorship() {
  const { showToast } = useToast()
  const [faqActive, setFaqActive] = useState(null)

  // Mentorship request modal state
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const [selectedMentor, setSelectedMentor] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  const [requestMessage, setRequestMessage] = useState('')
  const [mentorshipLoading, setMentorshipLoading] = useState(false)

  // Contact form state
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactSubject, setContactSubject] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [contactLoading, setContactLoading] = useState(false)

  const handleOpenRequest = (name) => {
    setSelectedMentor(name)
    setRequestModalOpen(true)
  }

  const handleMentorshipSubmit = async (e) => {
    e.preventDefault()
    setMentorshipLoading(true)
    try {
      const response = await api.post('/mentorship', {
        studentName,
        email: studentEmail,
        mentorName: selectedMentor,
        message: requestMessage
      })
      showToast(response.data?.message || `Mentorship request sent to ${selectedMentor}!`)
      setStudentName('')
      setStudentEmail('')
      setRequestMessage('')
      setRequestModalOpen(false)
    } catch (err) {
      console.error('Mentorship request error:', err)
      const errorMsg = err.response?.data?.message || 'Failed to submit mentorship request. Please try again.'
      showToast(errorMsg, true)
    } finally {
      setMentorshipLoading(false)
    }
  }

  const toggleFaq = (index) => {
    setFaqActive(prev => prev === index ? null : index)
  }

  const handleContact = async (e) => {
    e.preventDefault()
    setContactLoading(true)
    try {
      const response = await api.post('/messages', {
        name: contactName,
        email: contactEmail,
        subject: contactSubject,
        message: contactMessage
      })
      showToast(response.data?.message || 'Message sent! We will get back to you within 24 hours.')
      setContactName('')
      setContactEmail('')
      setContactSubject('')
      setContactMessage('')
    } catch (err) {
      console.error('Contact submission error:', err)
      const errorMsg = err.response?.data?.message || 'Failed to send message. Please try again.'
      showToast(errorMsg, true)
    } finally {
      setContactLoading(false)
    }
  }

  const faqs = [
    { q: 'How do I sign up as a mentor?', a: 'To become a mentor, register on our platform and go to your profile settings. Toggle the "Available as Mentor" option, fill in your areas of expertise, and set your preferred availability. Students and recent graduates will then be able to find and connect with you.' },
    { q: 'Is the mentorship program free?', a: "Yes! Our mentorship program is completely free for all registered alumni and students. It's our way of giving back to the community and fostering growth within our alumni network." },
    { q: 'How are mentors matched with mentees?', a: 'Mentees can browse available mentors and choose based on their areas of interest, industry expertise, and availability. We also provide recommendations based on your profile and career goals.' },
    { q: 'Can I attend events without being a registered alumni?', a: 'Some events are open to all, while exclusive events like reunions and networking mixers require alumni registration. Check individual event pages for eligibility details.' },
    { q: 'How can I post a job on the job board?', a: 'Navigate to the Jobs page and click "Post a Job." Fill in the job details including title, company, description, and required skills. Your posting will be visible to all registered members immediately.' },
  ]

  return (
    <>
      <PageHeader
        title="Mentorship &"
        gradientText="Contact"
        description="Connect with experienced alumni mentors for guidance, or reach out to us for any queries."
      />

      <main>
        {/* Mentors */}
        <section className="section-padding">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Available Mentors</span></h2>
              <p>Our mentors are industry leaders ready to guide you in your career journey.</p>
            </div>
            <div className="mentors-row clearfix" id="mentorsContainer">
              {mentorsData.map((mentor, i) => (
                <MentorCard key={i} mentor={mentor} onRequest={handleOpenRequest} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Get In Touch</span></h2>
              <p>Have questions or want to request a specific mentor? Reach out to us.</p>
            </div>
            <div className="contact-row clearfix">
              <div className="contact-info-col">
                <div className="glass-card" style={{ padding: '30px' }}>
                  <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>
                  <p style={{ marginBottom: '20px' }}>We'd love to hear from you! Whether you're an alumnus looking to contribute or a student seeking guidance.</p>
                  <div className="info-item">
                    <div className="icon">📧</div>
                    <div className="text"><h4>Email</h4><p>alumni@university.edu</p></div>
                  </div>
                  <div className="info-item">
                    <div className="icon">📞</div>
                    <div className="text"><h4>Phone</h4><p>+91 98765 43210</p></div>
                  </div>
                  <div className="info-item">
                    <div className="icon">📍</div>
                    <div className="text"><h4>Address</h4><p>Alumni Office, Main Campus</p></div>
                  </div>
                  <div className="info-item">
                    <div className="icon">🕐</div>
                    <div className="text"><h4>Office Hours</h4><p>Mon - Fri, 9:00 AM - 5:00 PM</p></div>
                  </div>
                  <h4 style={{ marginTop: '24px', marginBottom: '10px', color: '#818cf8' }}>Quick Links</h4>
                  <dl className="info-dl">
                    <dt>General Inquiries</dt>
                    <dd>info@alumniconnect.edu</dd>
                    <dt>Career Services</dt>
                    <dd>careers@alumniconnect.edu</dd>
                    <dt>Event Coordination</dt>
                    <dd>events@alumniconnect.edu</dd>
                  </dl>
                </div>
              </div>
              <div className="contact-form-col">
                <div className="glass-card" style={{ padding: '30px' }}>
                  <h3 style={{ marginBottom: '24px' }}>Send a Message</h3>
                  <form onSubmit={handleContact}>
                    <table className="form-table">
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="contactName">Full Name *</label>
                            <input
                              type="text"
                              id="contactName"
                              placeholder="Your name"
                              required
                              value={contactName}
                              onChange={e => setContactName(e.target.value)}
                            />
                          </td>
                          <td>
                            <label htmlFor="contactEmail">Email *</label>
                            <input
                              type="email"
                              id="contactEmail"
                              placeholder="you@email.com"
                              required
                              value={contactEmail}
                              onChange={e => setContactEmail(e.target.value)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="form-group">
                      <label htmlFor="contactSubject">Subject *</label>
                      <select
                        id="contactSubject"
                        required
                        value={contactSubject}
                        onChange={e => setContactSubject(e.target.value)}
                      >
                        <option value="">Select a topic</option>
                        <option>Mentorship Request</option>
                        <option>General Inquiry</option>
                        <option>Event Suggestion</option>
                        <option>Report an Issue</option>
                        <option>Partnership Opportunity</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactMessage">Message *</label>
                      <textarea
                        id="contactMessage"
                        placeholder="Write your message..."
                        required
                        value={contactMessage}
                        onChange={e => setContactMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', textAlign: 'center' }}
                      disabled={contactLoading}
                    >
                      {contactLoading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <div className="container">
            <div className="section-title">
              <h2><span className="gradient-text">Frequently Asked Questions</span></h2>
              <p>Find answers to common questions about our mentorship and community programs.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div className={`faq-item${faqActive === i ? ' active' : ''}`} key={i}>
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mentorship Request Modal */}
      <Modal id="requestMentorModal" isOpen={requestModalOpen} onClose={() => setRequestModalOpen(false)}>
        <div className="modal-header">
          <h2>Request Mentorship</h2>
          <button className="modal-close" onClick={() => setRequestModalOpen(false)}>✕</button>
        </div>
        <form onSubmit={handleMentorshipSubmit}>
          <div className="form-group">
            <label htmlFor="reqMentorName">Selected Mentor</label>
            <input
              type="text"
              id="reqMentorName"
              value={selectedMentor}
              readOnly
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#818cf8', fontWeight: 600 }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reqStudentName">Your Name *</label>
            <input
              type="text"
              id="reqStudentName"
              placeholder="e.g. John Doe"
              required
              value={studentName}
              onChange={e => setStudentName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reqStudentEmail">Your Email *</label>
            <input
              type="email"
              id="reqStudentEmail"
              placeholder="you@example.com"
              required
              value={studentEmail}
              onChange={e => setStudentEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reqMessage">Message / Goals *</label>
            <textarea
              id="reqMessage"
              placeholder="Explain what guidance you are seeking from this mentor..."
              required
              value={requestMessage}
              onChange={e => setRequestMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
            disabled={mentorshipLoading}
          >
            {mentorshipLoading ? 'Submitting...' : 'Submit Mentorship Request'}
          </button>
        </form>
      </Modal>
    </>
  )
}

export default Mentorship
