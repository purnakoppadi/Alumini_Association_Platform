function MentorCard({ mentor, onRequest }) {
  return (
    <div className="mentor-box">
      <div className="mentor-card">
        <div className="mentor-avatar">{mentor.initials}</div>
        <h3>{mentor.name}</h3>
        <p className="mentor-title">{mentor.title}</p>
        <p className="mentor-company">{mentor.company}</p>
        <div className="mentor-tags">
          {mentor.expertise.map((tag, i) => (
            <span className="badge badge-primary" style={{ margin: '2px' }} key={i}>{tag}</span>
          ))}
        </div>
        <div className="mentor-stats">
          <div><strong>{mentor.sessions}</strong><span>Sessions</span></div>
          <div><strong>⭐ {mentor.rating}</strong><span>Rating</span></div>
        </div>
        <button
          className="btn-primary btn-sm"
          style={{ width: '100%', textAlign: 'center' }}
          onClick={() => onRequest(mentor.name)}
        >
          Request Mentorship
        </button>
      </div>
    </div>
  )
}

export default MentorCard
