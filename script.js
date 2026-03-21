/* ============================
   Alumni Association Platform
   Shared JavaScript
   ============================ */

// ==========================================
// DATA
// ==========================================

const alumniData = [
  { name: "Ravi Patel", initials: "RP", role: "Software Architect", company: "Google", batch: "2016", dept: "Computer Science", location: "Bangalore", email: "ravi.patel@gmail.com", skills: ["Python", "System Design", "Cloud"] },
  { name: "Sneha Mehta", initials: "SM", role: "Data Scientist", company: "Amazon", batch: "2018", dept: "Computer Science", location: "Hyderabad", email: "sneha.m@outlook.com", skills: ["Machine Learning", "Python", "Statistics"] },
  { name: "Arjun Kumar", initials: "AK", role: "VP Engineering", company: "Microsoft", batch: "2008", dept: "Electronics", location: "San Francisco", email: "arjun.k@hotmail.com", skills: ["Leadership", "Cloud", "DevOps"] },
  { name: "Priya Sharma", initials: "PS", role: "Product Manager", company: "Flipkart", batch: "2019", dept: "Information Tech", location: "Bangalore", email: "priya.sharma@email.com", skills: ["Product Strategy", "Agile", "Analytics"] },
  { name: "Vikram Reddy", initials: "VR", role: "Frontend Developer", company: "Swiggy", batch: "2021", dept: "Computer Science", location: "Bangalore", email: "vikram.r@email.com", skills: ["React", "TypeScript", "UI/UX"] },
  { name: "Ananya Iyer", initials: "AI", role: "ML Engineer", company: "Meta", batch: "2017", dept: "Electronics", location: "New York", email: "ananya.i@email.com", skills: ["Deep Learning", "PyTorch", "NLP"] },
  { name: "Rohan Desai", initials: "RD", role: "Civil Engineer", company: "L&T", batch: "2020", dept: "Civil", location: "Mumbai", email: "rohan.d@email.com", skills: ["AutoCAD", "Project Mgmt", "Structural"] },
  { name: "Kavya Nair", initials: "KN", role: "UX Designer", company: "Adobe", batch: "2022", dept: "Information Tech", location: "Pune", email: "kavya.n@email.com", skills: ["Figma", "User Research", "Prototyping"] },
  { name: "Deepak Joshi", initials: "DJ", role: "DevOps Engineer", company: "Infosys", batch: "2019", dept: "Computer Science", location: "Hyderabad", email: "deepak.j@email.com", skills: ["AWS", "Docker", "Kubernetes"] },
  { name: "Meera Gupta", initials: "MG", role: "Marketing Head", company: "Zomato", batch: "2017", dept: "Mechanical", location: "Delhi", email: "meera.g@email.com", skills: ["Digital Marketing", "Strategy", "Branding"] },
  { name: "Aditya Singh", initials: "AS", role: "Blockchain Developer", company: "Polygon", batch: "2020", dept: "Computer Science", location: "Mumbai", email: "aditya.s@email.com", skills: ["Solidity", "Web3", "Ethereum"] },
  { name: "Pooja Pillai", initials: "PP", role: "Research Scientist", company: "ISRO", batch: "2016", dept: "Mechanical", location: "Bangalore", email: "pooja.p@email.com", skills: ["MATLAB", "Simulation", "Aerospace"] }
];

const jobsData = [
  { title: "Senior Frontend Developer", company: "Google", logo: "G", type: "Full-time", location: "Bangalore", salary: "₹25L - ₹40L", tags: ["React", "TypeScript", "GraphQL"], posted: "2 days ago" },
  { title: "Data Science Intern", company: "Amazon", logo: "A", type: "Internship", location: "Hyderabad", salary: "₹50K/month", tags: ["Python", "ML", "SQL"], posted: "1 day ago" },
  { title: "Product Manager", company: "Microsoft", logo: "M", type: "Full-time", location: "Remote", salary: "₹30L - ₹45L", tags: ["Strategy", "Agile", "Analytics"], posted: "3 days ago" },
  { title: "DevOps Engineer", company: "Flipkart", logo: "F", type: "Full-time", location: "Bangalore", salary: "₹18L - ₹28L", tags: ["AWS", "Docker", "CI/CD"], posted: "5 days ago" },
  { title: "UI/UX Design Intern", company: "Swiggy", logo: "S", type: "Internship", location: "Mumbai", salary: "₹35K/month", tags: ["Figma", "Prototyping", "Research"], posted: "1 day ago" },
  { title: "Backend Developer", company: "Razorpay", logo: "R", type: "Full-time", location: "Bangalore", salary: "₹20L - ₹35L", tags: ["Go", "Microservices", "PostgreSQL"], posted: "4 days ago" },
  { title: "Machine Learning Engineer", company: "NVIDIA", logo: "N", type: "Full-time", location: "Pune", salary: "₹28L - ₹50L", tags: ["PyTorch", "CUDA", "Deep Learning"], posted: "2 days ago" },
  { title: "Marketing Intern", company: "Zomato", logo: "Z", type: "Internship", location: "Delhi", salary: "₹25K/month", tags: ["Social Media", "Content", "Analytics"], posted: "6 days ago" },
  { title: "Cloud Architect", company: "TCS", logo: "T", type: "Contract", location: "San Francisco", salary: "$150K - $200K", tags: ["Azure", "Terraform", "Security"], posted: "1 week ago" }
];

const eventsData = [
  { title: "Annual Alumni Grand Reunion 2026", desc: "Join us for the biggest reunion of the year! Meet batchmates, share memories, and celebrate our journey together.", date: "15", month: "Apr", time: "10:00 AM - 8:00 PM", venue: "University Main Auditorium", attendees: "500+", icon: "🎓", gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)" },
  { title: "Tech Talk: Future of AI & Robotics", desc: "An exclusive guest lecture by industry leaders discussing the latest advancements in AI, ML, and Robotics.", date: "22", month: "Apr", time: "2:00 PM - 5:00 PM", venue: "Online (Zoom)", attendees: "200+", icon: "🤖", gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
  { title: "Career Networking Mixer", desc: "A professional networking event to connect alumni with hiring companies and explore career opportunities.", date: "05", month: "May", time: "6:00 PM - 9:00 PM", venue: "Grand Hyatt, Mumbai", attendees: "150+", icon: "🤝", gradient: "linear-gradient(135deg, #0d9488, #059669)" },
  { title: "Alumni Sports Tournament", desc: "Inter-batch cricket and football tournament. Form your teams and compete for the Alumni Trophy!", date: "18", month: "May", time: "8:00 AM - 6:00 PM", venue: "University Sports Complex", attendees: "300+", icon: "🏆", gradient: "linear-gradient(135deg, #f59e0b, #f97316)" },
  { title: "Entrepreneurship Workshop", desc: "Learn from alumni who built successful startups. Interactive sessions on fundraising, product building, and scaling.", date: "02", month: "Jun", time: "10:00 AM - 4:00 PM", venue: "Innovation Hub, Campus", attendees: "100+", icon: "🚀", gradient: "linear-gradient(135deg, #ef4444, #ec4899)" },
  { title: "Cultural Night & Music Fest", desc: "An evening of music, dance, and cultural performances by alumni and current students. Open mic included!", date: "20", month: "Jun", time: "5:00 PM - 11:00 PM", venue: "Open Air Theatre, Campus", attendees: "400+", icon: "🎵", gradient: "linear-gradient(135deg, #3730a3, #6366f1)" }
];

const mentorsData = [
  { name: "Arjun Kumar", initials: "AK", title: "VP Engineering", company: "Microsoft", expertise: ["Leadership", "Cloud Architecture", "System Design"], sessions: 85, rating: 4.9 },
  { name: "Sneha Mehta", initials: "SM", title: "Lead Data Scientist", company: "Amazon", expertise: ["Machine Learning", "AI Strategy", "Data Analytics"], sessions: 62, rating: 4.8 },
  { name: "Ravi Patel", initials: "RP", title: "Software Architect", company: "Google", expertise: ["Backend Systems", "Distributed Computing", "Mentoring"], sessions: 94, rating: 5.0 },
  { name: "Ananya Iyer", initials: "AI", title: "ML Research Lead", company: "Meta", expertise: ["Deep Learning", "Computer Vision", "NLP"], sessions: 47, rating: 4.7 },
  { name: "Priya Sharma", initials: "PS", title: "Senior PM", company: "Flipkart", expertise: ["Product Strategy", "User Research", "Growth"], sessions: 53, rating: 4.8 },
  { name: "Meera Gupta", initials: "MG", title: "Marketing Director", company: "Zomato", expertise: ["Brand Strategy", "Digital Marketing", "Start-ups"], sessions: 38, rating: 4.6 }
];

// ==========================================
// NAVBAR
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => revealObserver.observe(el));
  }

  // Stats counter animation
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.dataset.target;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.ceil(current).toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toLocaleString() + '+';
            }
          };
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
  }

  // Testimonial carousel
  initTestimonials();

  // Auth tabs
  initAuthTabs();

  // Render dynamic content based on page
  renderProfiles();
  renderJobs();
  renderEvents();
  renderMentors();
});

// ==========================================
// TESTIMONIALS CAROUSEL
// ==========================================

let currentSlide = 0;
let testimonialInterval;

function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('#testimonialDots .dot');
  if (!track || !dots.length) return;

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(+dot.dataset.index);
    });
  });

  testimonialInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % dots.length);
  }, 5000);
}

function goToSlide(index) {
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('#testimonialDots .dot');
  if (!track) return;

  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));

  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % dots.length);
  }, 5000);
}

// ==========================================
// AUTH TABS
// ==========================================

function initAuthTabs() {
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (!loginTab || !registerTab) return;

  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });
}

// ==========================================
// FORM HANDLERS
// ==========================================

function handleLogin(e) {
  e.preventDefault();
  showToast('Welcome back! Login successful.');
  e.target.reset();
  return false;
}

function handleRegister(e) {
  e.preventDefault();
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  if (pass !== confirm) {
    showToast('Passwords do not match!', true);
    return false;
  }
  showToast('Account created successfully! Welcome to AlumniConnect.');
  e.target.reset();
  return false;
}

function handlePostJob(e) {
  e.preventDefault();
  showToast('Job posted successfully! It will appear on the board shortly.');
  closeModal('postJobModal');
  e.target.reset();
  return false;
}

function handleContact(e) {
  e.preventDefault();
  showToast('Message sent! We will get back to you within 24 hours.');
  e.target.reset();
  return false;
}

// ==========================================
// TOAST
// ==========================================

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.style.borderColor = isError ? '#ef4444' : 'var(--secondary)';
  toast.querySelector('.toast-icon').style.background = isError ? 'rgba(239,68,68,0.15)' : 'rgba(13,148,136,0.15)';
  toast.querySelector('.toast-icon').style.color = isError ? '#ef4444' : 'var(--secondary-light)';
  toast.querySelector('.toast-icon').textContent = isError ? '!' : '✓';
  toast.classList.add('show');

  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==========================================
// MODAL
// ==========================================

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ==========================================
// ALUMNI DIRECTORY
// ==========================================

function renderProfiles(data = alumniData) {
  const grid = document.getElementById('profilesGrid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><h3 style="color:var(--text-secondary);">No alumni found matching your criteria.</h3><p style="color:var(--text-muted);margin-top:8px;">Try adjusting your filters or search terms.</p></div>';
    return;
  }

  grid.innerHTML = data.map((p, i) => `
    <div class="profile-card glass-card" onclick="showProfile(${i})" style="animation: fadeInUp 0.5s ease ${i * 0.08}s both;">
      <div class="profile-avatar">${p.initials}</div>
      <h3>${p.name}</h3>
      <p class="role">${p.role} at ${p.company}</p>
      <p class="batch">Batch of ${p.batch} · ${p.dept}</p>
      <div class="profile-tags">
        ${p.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
      <button class="btn btn-secondary btn-sm profile-btn">View Profile</button>
    </div>
  `).join('');
}

function showProfile(index) {
  const p = alumniData[index];
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalAvatar').textContent = p.initials;
  document.getElementById('modalRole').textContent = p.role;
  document.getElementById('modalCompany').textContent = p.company;
  document.getElementById('modalBatch').textContent = p.batch;
  document.getElementById('modalDept').textContent = p.dept;
  document.getElementById('modalLocation').textContent = p.location;
  document.getElementById('modalEmail').textContent = p.email;
  document.getElementById('modalSkills').innerHTML = p.skills.map(s => `<span class="badge badge-primary">${s}</span>`).join('');
  openModal('profileModal');
}

function filterProfiles() {
  const search = (document.getElementById('directorySearch')?.value || '').toLowerCase();
  const batch = document.getElementById('filterBatch')?.value || '';
  const dept = document.getElementById('filterDept')?.value || '';
  const location = document.getElementById('filterLocation')?.value || '';

  const filtered = alumniData.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.company.toLowerCase().includes(search) || p.skills.some(s => s.toLowerCase().includes(search));
    const matchBatch = !batch || p.batch === batch;
    const matchDept = !dept || p.dept === dept;
    const matchLocation = !location || p.location === location;
    return matchSearch && matchBatch && matchDept && matchLocation;
  });

  renderProfiles(filtered);
}

// ==========================================
// JOBS
// ==========================================

function renderJobs(data = jobsData) {
  const grid = document.getElementById('jobsGrid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;"><h3 style="color:var(--text-secondary);">No jobs found matching your criteria.</h3></div>';
    return;
  }

  grid.innerHTML = data.map((j, i) => `
    <div class="job-card glass-card" style="animation: fadeInUp 0.5s ease ${i * 0.08}s both;">
      <div class="job-header">
        <span class="badge ${j.type === 'Internship' ? 'badge-accent' : j.type === 'Contract' ? 'badge-secondary' : 'badge-primary'}">${j.type}</span>
        <div class="company-logo">${j.logo}</div>
      </div>
      <h3>${j.title}</h3>
      <p class="company-name">${j.company}</p>
      <div class="job-info">
        <span>📍 ${j.location}</span>
        <span>🕐 ${j.posted}</span>
      </div>
      <div class="job-tags">
        ${j.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="job-footer">
        <span class="salary">${j.salary}</span>
        <button class="btn btn-primary btn-sm" onclick="showToast('Application submitted for ${j.title}!')">Apply →</button>
      </div>
    </div>
  `).join('');
}

function filterJobs() {
  const search = (document.getElementById('jobSearch')?.value || '').toLowerCase();
  const type = document.getElementById('filterJobType')?.value || '';
  const location = document.getElementById('filterJobLocation')?.value || '';

  const filtered = jobsData.filter(j => {
    const matchSearch = !search || j.title.toLowerCase().includes(search) || j.company.toLowerCase().includes(search) || j.tags.some(t => t.toLowerCase().includes(search));
    const matchType = !type || j.type === type;
    const matchLocation = !location || j.location === location;
    return matchSearch && matchType && matchLocation;
  });

  renderJobs(filtered);
}

// ==========================================
// EVENTS
// ==========================================

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;

  grid.innerHTML = eventsData.map((e, i) => `
    <div class="event-card glass-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both;">
      <div class="event-banner" style="background: ${e.gradient};">
        <span>${e.icon}</span>
        <div class="event-date-badge">
          <span class="day">${e.date}</span>
          <span class="month">${e.month}</span>
        </div>
      </div>
      <div class="event-body">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <div class="event-meta">
          <span>🕐 ${e.time}</span>
          <span>📍 ${e.venue}</span>
          <span>👥 ${e.attendees}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="handleRsvp(this, '${e.title}')">RSVP Now</button>
      </div>
    </div>
  `).join('');
}

function handleRsvp(btn, eventTitle) {
  if (btn.textContent.trim() === 'RSVP Now') {
    btn.textContent = '✓ Registered';
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
    btn.style.borderColor = 'var(--secondary)';
    btn.style.color = 'var(--secondary-light)';
    showToast(`You've registered for "${eventTitle}"!`);
  } else {
    btn.textContent = 'RSVP Now';
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    btn.style.borderColor = '';
    btn.style.color = '';
    showToast(`Registration cancelled for "${eventTitle}".`);
  }
}

// ==========================================
// MENTORS
// ==========================================

function renderMentors() {
  const grid = document.getElementById('mentorsGrid');
  if (!grid) return;

  grid.innerHTML = mentorsData.map((m, i) => `
    <div class="mentor-card glass-card" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both;">
      <div class="mentor-avatar">${m.initials}</div>
      <h3>${m.name}</h3>
      <p class="mentor-title">${m.title}</p>
      <p class="mentor-company">${m.company}</p>
      <div class="mentor-tags">
        ${m.expertise.map(e => `<span class="badge badge-primary">${e}</span>`).join('')}
      </div>
      <div class="mentor-stats">
        <div>
          <strong>${m.sessions}</strong>
          <span>Sessions</span>
        </div>
        <div>
          <strong>⭐ ${m.rating}</strong>
          <span>Rating</span>
        </div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;" onclick="showToast('Mentorship request sent to ${m.name}!')">Request Mentorship</button>
    </div>
  `).join('');
}

// ==========================================
// FAQ ACCORDION
// ==========================================

function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasActive = item.classList.contains('active');

  // Close all
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));

  // Toggle clicked
  if (!wasActive) {
    item.classList.add('active');
  }
}
