import { useState, useEffect } from 'react'
import api from '../services/api'
import PageHeader from '../components/PageHeader'
import Modal from '../components/Modal'

function Directory() {
  const [alumniList, setAlumniList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [filterBatch, setFilterBatch] = useState('')
  const [filterDept, setFilterDept] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAlumni, setSelectedAlumni] = useState(null)

  useEffect(() => {
    fetchAlumni()
  }, [])

  const fetchAlumni = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.get('/alumni')
      setAlumniList(response.data)
    } catch (err) {
      console.error('Failed to fetch alumni:', err)
      setError('Failed to load alumni profiles. Please ensure the backend server is running.')
    } finally {
      setLoading(false)
    }
  }

  const getInitials = (person) => {
    if (person.initials) return person.initials
    if (!person.name) return 'AL'
    return person.name
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const getRole = (person) => person.designation || person.role || 'Alumnus'
  const getDept = (person) => person.department || person.dept || ''
  const getSkills = (person) => Array.isArray(person.skills) ? person.skills : []

  // Pre-defined options merged with any dynamic data from MongoDB
  const defaultBatches = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2008']
  const defaultDepts = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Information Tech']
  const defaultLocations = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'San Francisco', 'New York']

  const allBatches = Array.from(new Set([...defaultBatches, ...alumniList.map(a => a.batch).filter(Boolean)]))
  const allDepts = Array.from(new Set([...defaultDepts, ...alumniList.map(getDept).filter(Boolean)]))
  const allLocations = Array.from(new Set([...defaultLocations, ...alumniList.map(a => a.location).filter(Boolean)]))

  const filtered = alumniList.filter(p => {
    const s = search.toLowerCase().trim()
    let matchSearch = true
    if (s.length > 0) {
      const nameMatch = p.name ? p.name.toLowerCase().includes(s) : false
      const companyMatch = p.company ? p.company.toLowerCase().includes(s) : false
      const roleMatch = getRole(p).toLowerCase().includes(s)
      const skillMatch = getSkills(p).some(sk => sk.toLowerCase().includes(s))
      matchSearch = nameMatch || companyMatch || roleMatch || skillMatch
    }
    const matchBatch = filterBatch === '' || p.batch === filterBatch
    const matchDept = filterDept === '' || getDept(p) === filterDept
    const matchLoc = filterLocation === '' || p.location === filterLocation
    return matchSearch && matchBatch && matchDept && matchLoc
  })

  const showProfile = (index) => {
    setSelectedAlumni(filtered[index])
    setModalOpen(true)
  }

  return (
    <>
      <PageHeader
        title="Alumni"
        gradientText="Directory"
        description="Search and connect with thousands of graduates from our institution across the globe."
      />

      <main>
        <section className="section-padding">
          <div className="container">
            <div className="search-bar clearfix">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search by name, company, or skill..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="btn-primary btn-sm" onClick={() => {}}>Search</button>
            </div>

            <div className="filter-bar">
              <select value={filterBatch} onChange={e => setFilterBatch(e.target.value)}>
                <option value="">All Batches</option>
                {allBatches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <select value={filterDept} onChange={e => setFilterDept(e.target.value)}>
                <option value="">All Departments</option>
                {allDepts.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
                <option value="">All Locations</option>
                {allLocations.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {loading ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#a0a0b8' }}>
                Loading alumni directory...
              </p>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ color: '#ef4444', marginBottom: '14px' }}>{error}</p>
                <button className="btn-primary btn-sm" onClick={fetchAlumni}>Retry</button>
              </div>
            ) : filtered.length > 0 ? (
              <table className="data-table" id="alumniTable">
                <caption>📋 Registered Alumni Directory</caption>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Role &amp; Company</th>
                    <th>Batch</th>
                    <th>Department</th>
                    <th>Location</th>
                    <th>Skills</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => (
                    <tr key={p._id || i}>
                      <td className="avatar-cell">
                        <div className="table-avatar">{getInitials(p)}</div>
                      </td>
                      <td>
                        <strong style={{ color: '#ffffff' }}>{p.name}</strong>
                      </td>
                      <td>
                        {getRole(p)} at <span style={{ color: '#818cf8' }}>{p.company}</span>
                      </td>
                      <td>{p.batch}</td>
                      <td>{getDept(p)}</td>
                      <td>📍 {p.location}</td>
                      <td>
                        {getSkills(p).map((sk, si) => (
                          <span className="tag" key={si}>{sk}</span>
                        ))}
                      </td>
                      <td>
                        <button className="btn-primary btn-sm" onClick={() => showProfile(i)}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ textAlign: 'center', padding: '40px', color: '#a0a0b8' }}>
                No alumni found matching your criteria. Try adjusting your search or filters.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Profile Modal */}
      <Modal id="profileModal" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedAlumni && (
          <>
            <div className="modal-header">
              <h2>{selectedAlumni.name}</h2>
              <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="profile-avatar">{getInitials(selectedAlumni)}</div>
              <p style={{ color: '#818cf8', fontWeight: 500, marginTop: '10px' }}>
                {getRole(selectedAlumni)}
              </p>
              <p style={{ color: '#a0a0b8', fontSize: '0.9rem' }}>{selectedAlumni.company}</p>
            </div>
            <table style={{ width: '100%', marginBottom: '20px' }}>
              <tbody>
                <tr>
                  <td className="glass-card" style={{ padding: '14px', textAlign: 'center', width: '25%', borderRadius: '10px', margin: '4px' }}>
                    <p style={{ color: '#72738b', fontSize: '0.78rem' }}>Batch</p>
                    <p style={{ fontWeight: 600, color: '#ffffff' }}>{selectedAlumni.batch}</p>
                  </td>
                  <td className="glass-card" style={{ padding: '14px', textAlign: 'center', width: '25%', borderRadius: '10px' }}>
                    <p style={{ color: '#72738b', fontSize: '0.78rem' }}>Department</p>
                    <p style={{ fontWeight: 600, color: '#ffffff' }}>{getDept(selectedAlumni)}</p>
                  </td>
                  <td className="glass-card" style={{ padding: '14px', textAlign: 'center', width: '25%', borderRadius: '10px' }}>
                    <p style={{ color: '#72738b', fontSize: '0.78rem' }}>Location</p>
                    <p style={{ fontWeight: 600, color: '#ffffff' }}>{selectedAlumni.location}</p>
                  </td>
                  <td className="glass-card" style={{ padding: '14px', textAlign: 'center', width: '25%', borderRadius: '10px' }}>
                    <p style={{ color: '#72738b', fontSize: '0.78rem' }}>Email</p>
                    <p style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.82rem' }}>{selectedAlumni.email}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              {getSkills(selectedAlumni).map((sk, i) => (
                <span className="badge badge-primary" style={{ margin: '3px' }} key={i}>{sk}</span>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className="btn-primary" onClick={() => setModalOpen(false)}>Connect</button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}

export default Directory
