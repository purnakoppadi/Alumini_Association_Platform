import { useState } from 'react'
import { jobsData } from '../data'
import PageHeader from '../components/PageHeader'
import Modal from '../components/Modal'
import { useToast } from '../context/ToastContext'

function Jobs() {
  const { showToast } = useToast()
  const [filterType, setFilterType] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [postModalOpen, setPostModalOpen] = useState(false)

  // Post job form state
  const [jobTitle, setJobTitle] = useState('')
  const [jobCompany, setJobCompany] = useState('')
  const [jobType, setJobType] = useState('')
  const [jobLoc, setJobLoc] = useState('')
  const [jobSalary, setJobSalary] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [jobSkills, setJobSkills] = useState('')

  const filtered = jobsData.filter(j => {
    const matchType = filterType === '' || j.type === filterType
    const matchLoc = filterLocation === '' || j.location === filterLocation
    let matchSearch = true
    const s = searchVal.toLowerCase().trim()
    if (s.length > 0) {
      matchSearch = j.title.toLowerCase().includes(s) || j.company.toLowerCase().includes(s)
    }
    return matchType && matchLoc && matchSearch
  })

  const getBadgeClass = (type) => {
    switch (type) {
      case 'Full-time': return 'badge-primary'
      case 'Internship': return 'badge-accent'
      case 'Contract': return 'badge-secondary'
      case 'Part-time': return 'badge-success'
      default: return 'badge-primary'
    }
  }

  const applyJob = (title) => {
    const confirmed = window.confirm(`Are you sure you want to apply for "${title}"?`)
    if (confirmed) {
      showToast(`Application submitted for ${title}!`)
    }
  }

  const handlePostJob = (e) => {
    e.preventDefault()
    showToast('Job posted successfully! It will appear on the board shortly.')
    setPostModalOpen(false)
    setJobTitle(''); setJobCompany(''); setJobType(''); setJobLoc('')
    setJobSalary(''); setJobDesc(''); setJobSkills('')
  }

  return (
    <>
      <PageHeader title="Job & Internship" gradientText="Board" description="Discover exclusive career opportunities shared by alumni and trusted companies." />

      <main>
        <section className="section-padding">
          <div className="container">
            <div className="filter-bar" style={{ marginBottom: '16px' }}>
              <select value={filterType} onChange={e => setFilterType(e.target.value)}>
                <option value="">All Types</option>
                <option>Full-time</option>
                <option>Internship</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
              <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
                <option value="">All Locations</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Hyderabad</option>
                <option>Pune</option>
                <option>Delhi</option>
                <option>Remote</option>
                <option>San Francisco</option>
              </select>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                style={{ display: 'inline-block', width: '200px', padding: '10px 16px', borderRadius: '50px', fontSize: '0.88rem' }}
              />
              <button className="btn-accent" onClick={() => setPostModalOpen(true)} style={{ float: 'right' }}>+ Post a Job</button>
            </div>

            {filtered.length > 0 ? (
              <table className="data-table" id="jobsTable">
                <caption>💼 Current Job Openings</caption>
                <thead>
                  <tr>
                    <th></th>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Skills</th>
                    <th>Posted</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job, i) => (
                    <tr key={i}>
                      <td><div className="company-logo">{job.logo}</div></td>
                      <td><strong style={{ color: '#ffffff' }}>{job.title}</strong></td>
                      <td>{job.company}</td>
                      <td><span className={`badge ${getBadgeClass(job.type)}`}>{job.type}</span></td>
                      <td>📍 {job.location}</td>
                      <td><span className="job-salary">{job.salary}</span></td>
                      <td>{job.tags.map((t, ti) => <span className="tag" key={ti}>{t}</span>)}</td>
                      <td><span style={{ color: '#72738b' }}>{job.posted}</span></td>
                      <td><button className="btn-primary btn-sm" onClick={() => applyJob(job.title)}>Apply</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ textAlign: 'center', padding: '40px', color: '#a0a0b8' }}>
                No jobs found matching your criteria.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Post Job Modal */}
      <Modal id="postJobModal" isOpen={postModalOpen} onClose={() => setPostModalOpen(false)}>
        <div className="modal-header">
          <h2>Post a Job</h2>
          <button className="modal-close" onClick={() => setPostModalOpen(false)}>✕</button>
        </div>
        <form onSubmit={handlePostJob}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" placeholder="e.g. Frontend Developer" required value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="jobCompany">Company Name</label>
            <input type="text" id="jobCompany" placeholder="e.g. Google" required value={jobCompany} onChange={e => setJobCompany(e.target.value)} />
          </div>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="jobType">Job Type</label>
                  <select id="jobType" required value={jobType} onChange={e => setJobType(e.target.value)}>
                    <option value="">Select</option>
                    <option>Full-time</option>
                    <option>Internship</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </td>
                <td>
                  <label htmlFor="jobLoc">Location</label>
                  <input type="text" id="jobLoc" placeholder="e.g. Remote" required value={jobLoc} onChange={e => setJobLoc(e.target.value)} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label htmlFor="jobSalary">Salary Range</label>
            <input type="text" id="jobSalary" placeholder="e.g. ₹12L - ₹18L" value={jobSalary} onChange={e => setJobSalary(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="jobDesc">Description</label>
            <textarea id="jobDesc" placeholder="Describe the role and requirements..." required value={jobDesc} onChange={e => setJobDesc(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="jobSkills">Skills (comma-separated)</label>
            <input type="text" id="jobSkills" placeholder="e.g. React, Node.js, Python" value={jobSkills} onChange={e => setJobSkills(e.target.value)} />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Post Job</button>
        </form>
      </Modal>
    </>
  )
}

export default Jobs
