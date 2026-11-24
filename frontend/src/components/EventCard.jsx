function EventCard({ event, onRsvp, isRegistered }) {
  return (
    <div className="event-box">
      <div className="event-card">
        <div className="event-banner" style={{ background: event.bg }}>
          <span>{event.emoji}</span>
          <div className="event-date-badge">
            <span className="day">{event.date}</span>
            <span className="month">{event.month}</span>
          </div>
        </div>
        <div className="event-body">
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
          <div className="event-meta">
            <span>🕐 {event.time}</span>
            <span>📍 {event.venue}</span>
            <span>👥 {event.attendees}</span>
          </div>
          <button
            className={isRegistered ? 'btn-secondary btn-sm' : 'btn-primary btn-sm'}
            style={isRegistered ? { borderColor: '#0d9488', color: '#22d3ee' } : {}}
            onClick={() => onRsvp(event.title)}
          >
            {isRegistered ? '✓ Registered' : 'RSVP Now'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
