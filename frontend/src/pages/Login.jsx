import { useState } from 'react'
import { useToast } from '../context/ToastContext'

function Login() {
  const { showToast } = useToast()
  const [activeTab, setActiveTab] = useState('login')

  // Login form
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Register form
  const [regFirstName, setRegFirstName] = useState('')
  const [regLastName, setRegLastName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPhone, setRegPhone] = useState('')
  const [regDOB, setRegDOB] = useState('')
  const [regBatch, setRegBatch] = useState('')
  const [regDept, setRegDept] = useState('')
  const [regGender, setRegGender] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regConfirm, setRegConfirm] = useState('')
  const [regBio, setRegBio] = useState('')
  const [regInterests, setRegInterests] = useState([])
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Validation errors
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)
  const [passValid, setPassValid] = useState(false)

  const switchTab = (tab) => setActiveTab(tab)

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Welcome back! Login successful. 🎉')
    showToast('Welcome back! Login successful.')
    setLoginEmail(''); setLoginPassword('')
  }

  const handleInterestChange = (value) => {
    setRegInterests(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    )
  }

  const handleRegister = (e) => {
    e.preventDefault()
    let isValid = true

    // Name validation
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9]{5,}$/
    if (!nameRegex.test(regFirstName)) {
      setNameError(true); setNameValid(false); isValid = false
    } else {
      setNameError(false); setNameValid(true)
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(regPhone)) {
      setPhoneError(true); setPhoneValid(false); isValid = false
    } else {
      setPhoneError(false); setPhoneValid(true)
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(regEmail)) {
      setEmailError(true); setEmailValid(false); isValid = false
    } else {
      setEmailError(false); setEmailValid(true)
    }

    // Password match
    if (regPassword !== regConfirm) {
      setPassError(true); setPassValid(false); isValid = false
    } else {
      setPassError(false); setPassValid(true)
    }

    if (isValid) {
      const displayName = regFirstName.charAt(0).toUpperCase() + regFirstName.slice(1).toLowerCase()
      alert(`Account created successfully! Welcome, ${displayName}! 🎉\nYour name length: ${regFirstName.length} characters.`)
      showToast(`Account created! Welcome to AlumniConnect, ${displayName}.`)
      // Reset form
      setRegFirstName(''); setRegLastName(''); setRegEmail(''); setRegPhone('')
      setRegDOB(''); setRegBatch(''); setRegDept(''); setRegGender('')
      setRegPassword(''); setRegConfirm(''); setRegBio(''); setRegInterests([])
      setAgreeTerms(false)
      setNameError(false); setEmailError(false); setPhoneError(false); setPassError(false)
      setNameValid(false); setEmailValid(false); setPhoneValid(false); setPassValid(false)
    } else {
      showToast('Please fix the errors in the form.', true)
    }
  }

  const handleReset = () => {
    setRegFirstName(''); setRegLastName(''); setRegEmail(''); setRegPhone('')
    setRegDOB(''); setRegBatch(''); setRegDept(''); setRegGender('')
    setRegPassword(''); setRegConfirm(''); setRegBio(''); setRegInterests([])
    setAgreeTerms(false)
    setNameError(false); setEmailError(false); setPhoneError(false); setPassError(false)
    setNameValid(false); setEmailValid(false); setPhoneValid(false); setPassValid(false)
  }

  return (
    <section className="auth-section">
      <div className="auth-card glass-card">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Welcome Back 👋</h2>
          <p style={{ color: '#a0a0b8', fontSize: '0.92rem' }}>Sign in to access your alumni network</p>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <button className={`auth-tab${activeTab === 'login' ? ' active' : ''}`} onClick={() => switchTab('login')}>Login</button>
          <button className={`auth-tab${activeTab === 'register' ? ' active' : ''}`} onClick={() => switchTab('register')}>Register</button>
        </div>

        {/* Login Form */}
        <form className={`auth-form${activeTab === 'login' ? ' active' : ''}`} onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="loginEmail">Email Address</label>
            <input type="email" id="loginEmail" placeholder="you@example.com" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter your password" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
          </div>
          <div className="form-options">
            <label><input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Sign In</button>
        </form>

        {/* Register Form */}
        <form className={`auth-form${activeTab === 'register' ? ' active' : ''}`} onSubmit={handleRegister}>
          <table className="form-table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="regFirstName">First Name *</label>
                  <input type="text" id="regFirstName" placeholder="e.g. Ravi" required
                    className={nameError ? 'error' : nameValid ? 'success' : ''}
                    value={regFirstName} onChange={e => setRegFirstName(e.target.value)} />
                  <div className={`error-msg${nameError ? ' show' : ''}`}>Name must start with a letter, be alphanumeric, and at least 6 characters.</div>
                </td>
                <td>
                  <label htmlFor="regLastName">Last Name *</label>
                  <input type="text" id="regLastName" placeholder="e.g. Patel" required value={regLastName} onChange={e => setRegLastName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label htmlFor="regEmail">Email Address *</label>
                  <input type="email" id="regEmail" placeholder="you@example.com" required
                    className={emailError ? 'error' : emailValid ? 'success' : ''}
                    value={regEmail} onChange={e => setRegEmail(e.target.value)} />
                  <div className={`error-msg${emailError ? ' show' : ''}`}>Please enter a valid email (e.g. name@domain.com).</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="regPhone">Mobile Number *</label>
                  <input type="tel" id="regPhone" placeholder="10-digit number" required
                    className={phoneError ? 'error' : phoneValid ? 'success' : ''}
                    value={regPhone} onChange={e => setRegPhone(e.target.value)} />
                  <div className={`error-msg${phoneError ? ' show' : ''}`}>Mobile must be exactly 10 digits (numbers only).</div>
                </td>
                <td>
                  <label htmlFor="regDOB">Date of Birth *</label>
                  <input type="date" id="regDOB" required value={regDOB} onChange={e => setRegDOB(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="regBatch">Batch Year *</label>
                  <select id="regBatch" required value={regBatch} onChange={e => setRegBatch(e.target.value)}>
                    <option value="">Select Year</option>
                    {['2024','2023','2022','2021','2020','2019','2018','2017','2016','2015','2014','2013'].map(y => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <label htmlFor="regDepartment">Department *</label>
                  <select id="regDepartment" required value={regDept} onChange={e => setRegDept(e.target.value)}>
                    <option value="">Select Dept</option>
                    {['Computer Science','Electronics','Mechanical','Civil','Electrical','Information Tech','Chemical','Biotechnology'].map(d => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label>Gender *</label>
                  <div style={{ marginTop: '6px' }}>
                    {['Male', 'Female', 'Other'].map(g => (
                      <label key={g} style={{ marginRight: '20px', color: '#a0a0b8', cursor: 'pointer' }}>
                        <input type="radio" name="gender" value={g} required checked={regGender === g} onChange={e => setRegGender(e.target.value)} /> {g}
                      </label>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="regPassword">Password *</label>
                  <input type="password" id="regPassword" placeholder="Min 6 characters" required value={regPassword} onChange={e => setRegPassword(e.target.value)} />
                </td>
                <td>
                  <label htmlFor="regConfirm">Confirm Password *</label>
                  <input type="password" id="regConfirm" placeholder="Re-enter password" required
                    className={passError ? 'error' : passValid ? 'success' : ''}
                    value={regConfirm} onChange={e => setRegConfirm(e.target.value)} />
                  <div className={`error-msg${passError ? ' show' : ''}`}>Passwords do not match.</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label htmlFor="regBio">Short Bio</label>
                  <textarea id="regBio" placeholder="Tell us about yourself, your career, interests..." value={regBio} onChange={e => setRegBio(e.target.value)}></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <label>Areas of Interest</label>
                  <div style={{ marginTop: '6px' }}>
                    {['Networking', 'Mentorship', 'Jobs', 'Events', 'Giving Back'].map(interest => (
                      <label key={interest} style={{ display: 'inline-block', marginRight: '16px', color: '#a0a0b8', cursor: 'pointer' }}>
                        <input type="checkbox" checked={regInterests.includes(interest)} onChange={() => handleInterestChange(interest)} /> {interest === 'Jobs' ? 'Job Opportunities' : interest}
                      </label>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="form-options">
                    <label><input type="checkbox" required checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} /> I agree to the <a href="#">Terms &amp; Conditions</a></label>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '48%', textAlign: 'center' }}>Create Account</button>
                  <button type="button" className="btn-secondary" style={{ width: '48%', textAlign: 'center', marginLeft: '2%' }} onClick={handleReset}>Reset Form</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {/* Social Login */}
        <div className="auth-divider">or continue with</div>
        <div className="social-login">
          <button type="button" className="social-btn">🔵 Google</button>
          <button type="button" className="social-btn">🔗 LinkedIn</button>
        </div>
      </div>
    </section>
  )
}

export default Login
