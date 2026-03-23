var alumniData = [
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

var jobsData = [
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

var eventsData = [
  { title: "Annual Alumni Grand Reunion 2026", desc: "Join us for the biggest reunion of the year! Meet batchmates and celebrate together.", date: "15", month: "Apr", time: "10:00 AM - 8:00 PM", venue: "University Main Auditorium", attendees: "500+", emoji: "🎓", bg: "linear-gradient(135deg, #6c63ff, #06b6d4)" },
  { title: "Tech Talk: Future of AI & Robotics", desc: "An exclusive guest lecture by industry leaders on AI, ML, and Robotics.", date: "22", month: "Apr", time: "2:00 PM - 5:00 PM", venue: "Online (Zoom)", attendees: "200+", emoji: "🤖", bg: "linear-gradient(135deg, #8b5cf6, #ec4899)" },
  { title: "Career Networking Mixer", desc: "A professional networking event to connect alumni with hiring companies.", date: "05", month: "May", time: "6:00 PM - 9:00 PM", venue: "Grand Hyatt, Mumbai", attendees: "150+", emoji: "🤝", bg: "linear-gradient(135deg, #0d9488, #059669)" },
  { title: "Alumni Sports Tournament", desc: "Inter-batch cricket and football tournament. Compete for the Alumni Trophy!", date: "18", month: "May", time: "8:00 AM - 6:00 PM", venue: "University Sports Complex", attendees: "300+", emoji: "🏆", bg: "linear-gradient(135deg, #f59e0b, #f97316)" },
  { title: "Entrepreneurship Workshop", desc: "Learn from alumni entrepreneurs. Sessions on fundraising, product building, and scaling.", date: "02", month: "Jun", time: "10:00 AM - 4:00 PM", venue: "Innovation Hub, Campus", attendees: "100+", emoji: "🚀", bg: "linear-gradient(135deg, #ef4444, #ec4899)" },
  { title: "Cultural Night & Music Fest", desc: "Evening of music, dance, and cultural performances by alumni. Open mic included!", date: "20", month: "Jun", time: "5:00 PM - 11:00 PM", venue: "Open Air Theatre, Campus", attendees: "400+", emoji: "🎵", bg: "linear-gradient(135deg, #3730a3, #6c63ff)" }
];

var mentorsData = [
  { name: "Arjun Kumar", initials: "AK", title: "VP Engineering", company: "Microsoft", expertise: ["Leadership", "Cloud Architecture", "System Design"], sessions: 85, rating: 4.9 },
  { name: "Sneha Mehta", initials: "SM", title: "Lead Data Scientist", company: "Amazon", expertise: ["Machine Learning", "AI Strategy", "Data Analytics"], sessions: 62, rating: 4.8 },
  { name: "Ravi Patel", initials: "RP", title: "Software Architect", company: "Google", expertise: ["Backend Systems", "Distributed Computing", "Mentoring"], sessions: 94, rating: 5.0 },
  { name: "Ananya Iyer", initials: "AI", title: "ML Research Lead", company: "Meta", expertise: ["Deep Learning", "Computer Vision", "NLP"], sessions: 47, rating: 4.7 },
  { name: "Priya Sharma", initials: "PS", title: "Senior PM", company: "Flipkart", expertise: ["Product Strategy", "User Research", "Growth"], sessions: 53, rating: 4.8 },
  { name: "Meera Gupta", initials: "MG", title: "Marketing Director", company: "Zomato", expertise: ["Brand Strategy", "Digital Marketing", "Start-ups"], sessions: 38, rating: 4.6 }
];

var testimonials = [
  { quote: "This platform helped me reconnect with my batchmates after 10 years. The networking events have been incredibly valuable for my career growth.", initials: "RP", name: "Ravi Patel", info: "Batch of 2014 · Software Architect at Google" },
  { quote: "I found my current job through the alumni job board. The mentorship program also gave me the guidance I needed to transition into a new career.", initials: "SM", name: "Sneha Mehta", info: "Batch of 2018 · Data Scientist at Amazon" },
  { quote: "Being a mentor on this platform has been incredibly rewarding. I love guiding the next generation of graduates and sharing my experiences.", initials: "AK", name: "Arjun Kumar", info: "Batch of 2008 · VP Engineering at Microsoft" }
];
window.onload = function() {
  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        navbar.className = "scrolled";
        navbar.id = "navbar";
        navbar.setAttribute("class", "scrolled");
      } else {
        navbar.removeAttribute("class");
      }
    };
  }
  renderAlumniTable();
  renderJobsTable();
  renderEvents();
  renderMentors();
  var footerYear = document.getElementById("footerYear");
  if (footerYear) {
    var today = new Date();
    var year = today.getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var currentMonth = monthNames[today.getMonth()];
    var currentDate = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var timeStr = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
    footerYear.innerHTML = "© " + year + " AlumniConnect. All rights reserved. Made with ❤️ | Today: " + currentMonth + " " + currentDate + ", " + year + " | " + timeStr;
  }
  startTestimonialCarousel();
};
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.className.indexOf("open") === -1) {
    navLinks.className = navLinks.className + " open";
  } else {
    navLinks.className = navLinks.className.substring(0, navLinks.className.indexOf(" open"));
  }
}
var currentSlide = 0;
var testimonialTimer = null;

function goToSlide(index) {
  currentSlide = index;
  var quoteEl = document.getElementById("testimonialQuote");
  var avatarEl = document.getElementById("testimonialAvatar");
  var nameEl = document.getElementById("testimonialName");
  var infoEl = document.getElementById("testimonialInfo");
  var dotsEl = document.getElementById("testimonialDots");

  if (!quoteEl) return;
  quoteEl.innerHTML = testimonials[index].quote;
  avatarEl.innerHTML = testimonials[index].initials;
  nameEl.innerHTML = testimonials[index].name;
  infoEl.innerHTML = testimonials[index].info;
  if (dotsEl) {
    var dots = dotsEl.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
      if (i === index) {
        dots[i].className = "dot active";
      } else {
        dots[i].className = "dot";
      }
    }
  }
  if (testimonialTimer) {
    clearTimeout(testimonialTimer);
  }
  testimonialTimer = setTimeout(function() {
    var nextSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(nextSlide);
  }, 5000);
}

function startTestimonialCarousel() {
  if (document.getElementById("testimonialQuote")) {
    goToSlide(0);
  }
}
function renderAlumniTable(data) {
  var table = document.getElementById("alumniTable");
  var noResults = document.getElementById("noResults");
  if (!table) return;
  if (data === undefined) {
    data = alumniData;
  }
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  if (data.length === 0) {
    table.style.display = "none";
    if (noResults) noResults.style.display = "block";
    return;
  }

  table.style.display = "table";
  if (noResults) noResults.style.display = "none";
  for (var i = 0; i < data.length; i++) {
    var row = table.insertRow(-1);
    var person = data[i];
    var cell0 = row.insertCell(0);
    cell0.innerHTML = '<div class="table-avatar">' + person.initials + '</div>';
    cell0.className = "avatar-cell";
    var cell1 = row.insertCell(1);
    cell1.innerHTML = '<strong style="color: #ffffff;">' + person.name + '</strong>';
    var cell2 = row.insertCell(2);
    cell2.innerHTML = person.role + ' at <span style="color: #818cf8;">' + person.company + '</span>';
    var cell3 = row.insertCell(3);
    cell3.innerHTML = person.batch;
    var cell4 = row.insertCell(4);
    cell4.innerHTML = person.dept;
    var cell5 = row.insertCell(5);
    cell5.innerHTML = "📍 " + person.location;
    var cell6 = row.insertCell(6);
    var skillsHtml = "";
    var skillsList = person.skills;
    for (var s = 0; s < skillsList.length; s++) {
      skillsHtml = skillsHtml + '<span class="tag">' + skillsList[s] + '</span> ';
    }
    cell6.innerHTML = skillsHtml;
    var cell7 = row.insertCell(7);
    cell7.innerHTML = '<button class="btn-primary btn-sm" onclick="showProfile(' + i + ')">View</button>';
  }
}
function filterDirectory() {
  var searchVal = document.getElementById("directorySearch").value;
  var batchVal = document.getElementById("filterBatch").value;
  var deptVal = document.getElementById("filterDept").value;
  var locationVal = document.getElementById("filterLocation").value;
  searchVal = searchVal.toLowerCase().trim();

  var filtered = [];
  for (var i = 0; i < alumniData.length; i++) {
    var p = alumniData[i];
    var matchSearch = true;
    var matchBatch = true;
    var matchDept = true;
    var matchLoc = true;
    if (searchVal.length > 0) {
      var nameMatch = p.name.toLowerCase().indexOf(searchVal) !== -1;
      var companyMatch = p.company.toLowerCase().indexOf(searchVal) !== -1;
      var skillMatch = false;
      for (var s = 0; s < p.skills.length; s++) {
        if (p.skills[s].toLowerCase().indexOf(searchVal) !== -1) {
          skillMatch = true;
        }
      }
      matchSearch = nameMatch || companyMatch || skillMatch;
    }
    if (batchVal !== "") {
      matchBatch = (p.batch === batchVal);
    }
    if (deptVal !== "") {
      matchDept = (p.dept === deptVal);
    }
    if (locationVal !== "") {
      matchLoc = (p.location === locationVal);
    }

    if (matchSearch && matchBatch && matchDept && matchLoc) {
      filtered.push(p);
    }
  }

  renderAlumniTable(filtered);
}
function showProfile(index) {
  var p = alumniData[index];
  document.getElementById("modalName").innerHTML = p.name;
  document.getElementById("modalAvatar").innerHTML = p.initials;
  document.getElementById("modalRole").innerHTML = p.role;
  document.getElementById("modalCompany").innerHTML = p.company;
  document.getElementById("modalBatch").innerHTML = p.batch;
  document.getElementById("modalDept").innerHTML = p.dept;
  document.getElementById("modalLocation").innerHTML = p.location;
  document.getElementById("modalEmail").innerHTML = p.email;
  var skillsHtml = "";
  for (var i = 0; i < p.skills.length; i++) {
    skillsHtml = skillsHtml + '<span class="badge badge-primary" style="margin: 3px;">' + p.skills[i] + '</span>';
  }
  document.getElementById("modalSkills").innerHTML = skillsHtml;

  openModal("profileModal");
}
function renderJobsTable(data) {
  var table = document.getElementById("jobsTable");
  var noResults = document.getElementById("noJobResults");
  if (!table) return;

  if (data === undefined) {
    data = jobsData;
  }
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  if (data.length === 0) {
    table.style.display = "none";
    if (noResults) noResults.style.display = "block";
    return;
  }

  table.style.display = "table";
  if (noResults) noResults.style.display = "none";

  for (var i = 0; i < data.length; i++) {
    var row = table.insertRow(-1);
    var job = data[i];
    var c0 = row.insertCell(0);
    c0.innerHTML = '<div class="company-logo">' + job.logo + '</div>';
    var c1 = row.insertCell(1);
    c1.innerHTML = '<strong style="color: #ffffff;">' + job.title + '</strong>';
    var c2 = row.insertCell(2);
    c2.innerHTML = job.company;
    var c3 = row.insertCell(3);
    var badgeClass = "";
    switch (job.type) {
      case "Full-time":
        badgeClass = "badge-primary";
        break;
      case "Internship":
        badgeClass = "badge-accent";
        break;
      case "Contract":
        badgeClass = "badge-secondary";
        break;
      case "Part-time":
        badgeClass = "badge-success";
        break;
      default:
        badgeClass = "badge-primary";
        break;
    }
    c3.innerHTML = '<span class="badge ' + badgeClass + '">' + job.type + '</span>';
    var c4 = row.insertCell(4);
    c4.innerHTML = "📍 " + job.location;
    var c5 = row.insertCell(5);
    c5.innerHTML = '<span class="job-salary">' + job.salary + '</span>';
    var c6 = row.insertCell(6);
    var tagsHtml = "";
    for (var t = 0; t < job.tags.length; t++) {
      tagsHtml = tagsHtml + '<span class="tag">' + job.tags[t] + '</span> ';
    }
    c6.innerHTML = tagsHtml;
    var c7 = row.insertCell(7);
    c7.innerHTML = '<span style="color: #72738b;">' + job.posted + '</span>';
    var c8 = row.insertCell(8);
    c8.innerHTML = '<button class="btn-primary btn-sm" onclick="applyJob(\'' + job.title + '\')">Apply</button>';
  }
}

function applyJob(title) {
  var confirmed = confirm("Are you sure you want to apply for \"" + title + "\"?");
  if (confirmed) {
    showToast("Application submitted for " + title + "!");
  }
}
function filterJobs() {
  var typeVal = document.getElementById("filterJobType").value;
  var locVal = document.getElementById("filterJobLocation").value;
  var searchEl = document.getElementById("jobSearch");
  var searchVal = searchEl ? searchEl.value.toLowerCase().trim() : "";

  var filtered = [];

  for (var i = 0; i < jobsData.length; i++) {
    var j = jobsData[i];
    var matchType = (typeVal === "" || j.type === typeVal);
    var matchLoc = (locVal === "" || j.location === locVal);
    var matchSearch = true;

    if (searchVal.length > 0) {
      matchSearch = (j.title.toLowerCase().indexOf(searchVal) !== -1) ||
                    (j.company.toLowerCase().indexOf(searchVal) !== -1);
    }

    if (matchType && matchLoc && matchSearch) {
      filtered.push(j);
    }
  }

  renderJobsTable(filtered);
}
function renderEvents() {
  var container = document.getElementById("eventsContainer");
  if (!container) return;

  var html = "";
  for (var i = 0; i < eventsData.length; i++) {
    var e = eventsData[i];
    html = html + '<div class="event-box">';
    html = html + '  <div class="event-card">';
    html = html + '    <div class="event-banner" style="background: ' + e.bg + ';">';
    html = html + '      <span>' + e.emoji + '</span>';
    html = html + '      <div class="event-date-badge">';
    html = html + '        <span class="day">' + e.date + '</span>';
    html = html + '        <span class="month">' + e.month + '</span>';
    html = html + '      </div>';
    html = html + '    </div>';
    html = html + '    <div class="event-body">';
    html = html + '      <h3>' + e.title + '</h3>';
    html = html + '      <p>' + e.desc + '</p>';
    html = html + '      <div class="event-meta">';
    html = html + '        <span>🕐 ' + e.time + '</span>';
    html = html + '        <span>📍 ' + e.venue + '</span>';
    html = html + '        <span>👥 ' + e.attendees + '</span>';
    html = html + '      </div>';
    html = html + '      <button class="btn-primary btn-sm" onclick="handleRsvp(this, \'' + e.title.replace(/'/g, "\\'") + '\')">RSVP Now</button>';
    html = html + '    </div>';
    html = html + '  </div>';
    html = html + '</div>';
  }

  container.innerHTML = html;
}

function handleRsvp(btn, eventTitle) {
  var text = btn.innerHTML.trim();
  if (text.indexOf("RSVP") !== -1) {
    btn.innerHTML = "✓ Registered";
    btn.className = "btn-secondary btn-sm";
    btn.style.borderColor = "#0d9488";
    btn.style.color = "#22d3ee";
    showToast("You've registered for \"" + eventTitle + "\"!");
  } else {
    btn.innerHTML = "RSVP Now";
    btn.className = "btn-primary btn-sm";
    btn.style.borderColor = "";
    btn.style.color = "";
    showToast("Registration cancelled for \"" + eventTitle + "\".");
  }
}
function renderMentors() {
  var container = document.getElementById("mentorsContainer");
  if (!container) return;

  var html = "";

  for (var i = 0; i < mentorsData.length; i++) {
    var m = mentorsData[i];
    var tagsHtml = "";
    for (var key in m.expertise) {
      if (m.expertise.hasOwnProperty(key)) {
        tagsHtml = tagsHtml + '<span class="badge badge-primary" style="margin: 2px;">' + m.expertise[key] + '</span>';
      }
    }

    html = html + '<div class="mentor-box">';
    html = html + '  <div class="mentor-card">';
    html = html + '    <div class="mentor-avatar">' + m.initials + '</div>';
    html = html + '    <h3>' + m.name + '</h3>';
    html = html + '    <p class="mentor-title">' + m.title + '</p>';
    html = html + '    <p class="mentor-company">' + m.company + '</p>';
    html = html + '    <div class="mentor-tags">' + tagsHtml + '</div>';
    html = html + '    <div class="mentor-stats">';
    html = html + '      <div><strong>' + m.sessions + '</strong><span>Sessions</span></div>';
    html = html + '      <div><strong>⭐ ' + m.rating + '</strong><span>Rating</span></div>';
    html = html + '    </div>';
    html = html + '    <button class="btn-primary btn-sm" style="width:100%; text-align:center;" onclick="requestMentor(\'' + m.name + '\')">Request Mentorship</button>';
    html = html + '  </div>';
    html = html + '</div>';
  }

  container.innerHTML = html;
}

function requestMentor(name) {
  showToast("Mentorship request sent to " + name + "!");
}
function switchTab(tab) {
  var loginTab = document.getElementById("loginTab");
  var registerTab = document.getElementById("registerTab");
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");

  if (!loginTab || !registerTab) return;
  if (tab === "login") {
    loginTab.className = "auth-tab active";
    registerTab.className = "auth-tab";
    loginForm.className = "auth-form active";
    registerForm.className = "auth-form";
  } else {
    registerTab.className = "auth-tab active";
    loginTab.className = "auth-tab";
    registerForm.className = "auth-form active";
    loginForm.className = "auth-form";
  }
}

function handleLogin(e) {
  e.preventDefault();
  alert("Welcome back! Login successful. 🎉");
  showToast("Welcome back! Login successful.");
  e.target.reset();
  return false;
}

function handleRegister(e) {
  e.preventDefault();
  var isValid = true;
  var firstName = document.getElementById("regFirstName").value;
  var nameError = document.getElementById("nameError");
  var nameRegex = new RegExp("^[a-zA-Z][a-zA-Z0-9]{5,}$");
  if (!nameRegex.test(firstName)) {
    nameError.className = "error-msg show";
    document.getElementById("regFirstName").className = "error";
    isValid = false;
  } else {
    nameError.className = "error-msg";
    document.getElementById("regFirstName").className = "success";
  }
  var phone = document.getElementById("regPhone").value;
  var phoneError = document.getElementById("phoneError");
  var phoneRegex = new RegExp("^[0-9]{10}$");
  if (!phoneRegex.test(phone)) {
    phoneError.className = "error-msg show";
    document.getElementById("regPhone").className = "error";
    isValid = false;
  } else {
    phoneError.className = "error-msg";
    document.getElementById("regPhone").className = "success";
  }
  var email = document.getElementById("regEmail").value;
  var emailError = document.getElementById("emailError");
  var emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
  if (!emailRegex.test(email)) {
    emailError.className = "error-msg show";
    document.getElementById("regEmail").className = "error";
    isValid = false;
  } else {
    emailError.className = "error-msg";
    document.getElementById("regEmail").className = "success";
  }
  var pass = document.getElementById("regPassword").value;
  var confirmPass = document.getElementById("regConfirm").value;
  var passError = document.getElementById("passError");
  if (pass !== confirmPass) {
    passError.className = "error-msg show";
    document.getElementById("regConfirm").className = "error";
    isValid = false;
  } else {
    passError.className = "error-msg";
    document.getElementById("regConfirm").className = "success";
  }
  if (isValid) {
    var displayName = firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase();
    alert("Account created successfully! Welcome, " + displayName + "! 🎉\nYour name length: " + firstName.length + " characters.");
    showToast("Account created! Welcome to AlumniConnect, " + displayName + ".");
    e.target.reset();
    nameError.className = "error-msg";
    phoneError.className = "error-msg";
    emailError.className = "error-msg";
    passError.className = "error-msg";
  } else {
    showToast("Please fix the errors in the form.", true);
  }

  return false;
}

function handlePostJob(e) {
  e.preventDefault();
  showToast("Job posted successfully! It will appear on the board shortly.");
  closeModal("postJobModal");
  e.target.reset();
  return false;
}

function handleContact(e) {
  e.preventDefault();
  showToast("Message sent! We will get back to you within 24 hours.");
  e.target.reset();
  return false;
}
function showToast(message, isError) {
  var toast = document.getElementById("toast");
  var msg = document.getElementById("toastMessage");
  if (!toast || !msg) return;

  msg.innerHTML = message;

  var icon = toast.getElementsByClassName("toast-icon")[0];
  if (isError) {
    toast.style.borderColor = "#ef4444";
    icon.style.backgroundColor = "rgba(239,68,68,0.15)";
    icon.style.color = "#ef4444";
    icon.innerHTML = "!";
  } else {
    toast.style.borderColor = "rgba(108,99,255,0.3)";
    icon.style.backgroundColor = "rgba(34,197,94,0.15)";
    icon.style.color = "#4ade80";
    icon.innerHTML = "✓";
  }

  toast.className = "toast show";
  setTimeout(function() {
    toast.className = "toast";
  }, 3500);
}
function openModal(id) {
  var modal = document.getElementById(id);
  if (modal) {
    modal.className = "modal-overlay active";
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  var modal = document.getElementById(id);
  if (modal) {
    modal.className = "modal-overlay";
    document.body.style.overflow = "";
  }
}
document.onclick = function(e) {
  if (e.target.className && e.target.className.indexOf("modal-overlay active") !== -1) {
    e.target.className = "modal-overlay";
    document.body.style.overflow = "";
  }
};
document.onkeydown = function(e) {
  if (e.key === "Escape") {
    var modals = document.getElementsByClassName("modal-overlay active");
    var count = modals.length;
    var idx = 0;
    if (count > 0) {
      do {
        modals[0].className = "modal-overlay";
        idx++;
      } while (idx < count && modals.length > 0);
      document.body.style.overflow = "";
    }
  }
};
function toggleFaq(btn) {
  var item = btn.parentElement;
  var wasActive = item.className.indexOf("active") !== -1;
  var allItems = document.getElementsByClassName("faq-item");
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].className = "faq-item";
  }
  if (!wasActive) {
    item.className = "faq-item active";
  }
}
function getRandomGreeting() {
  var greetings = [
    "Welcome back, Champion! 🏆",
    "Great to see you! 🌟",
    "Hello, Fellow Alumnus! 👋",
    "Ready to connect? 🤝",
    "Let's grow together! 🌱"
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}
function getAllBatches() {
  var batches = [];
  for (var item of alumniData) {
    if (batches.indexOf(item.batch) === -1) {
      batches.push(item.batch);
    }
  }
  return batches;
}
function printAlumniDetails(index) {
  var alumni = alumniData[index];
  var details = "";
  for (var key in alumni) {
    if (alumni.hasOwnProperty(key)) {
      details = details + key.toUpperCase() + ": " + alumni[key] + "\n";
    }
  }
  return details;
}
