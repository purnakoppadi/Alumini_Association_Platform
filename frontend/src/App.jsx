import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import Directory from './pages/Directory'
import Jobs from './pages/Jobs'
import Events from './pages/Events'
import Mentorship from './pages/Mentorship'
import Login from './pages/Login'
import { ToastProvider } from './context/ToastContext'

function App() {
  return (
    <ToastProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <Toast />
    </ToastProvider>
  )
}

export default App
