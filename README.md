# Alumni Association Platform (AlumniConnect)

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) web platform designed to bridge the gap between alumni and students. The application provides interactive features for alumni discovery, career opportunities, event tracking, mentorship connections, and direct communication.

---

## 🚀 Tech Stack

### Frontend
- **React.js** (v18) with **Vite**
- **React Router DOM** for client-side navigation
- **Axios** for API communication
- **Responsive CSS3** with modern variables, gradients, and flexbox/grid layouts

### Backend
- **Node.js** & **Express.js** (ES Modules)
- **MongoDB Atlas** with **Mongoose ODM**
- **CORS** middleware supporting dynamic deployment origins
- **Dotenv** for secure environment variable management

---

## 📁 Repository Structure

```text
Alumini_Association_Platform/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable components (Navbar, Footer, Modals, Cards, Toast)
│   │   ├── context/          # Toast notification context
│   │   ├── pages/            # Page components (Home, Directory, Jobs, Events, Mentorship, Login)
│   │   ├── services/         # Axios API client (api.js)
│   │   ├── data.js           # Static data for presentation
│   │   ├── styles.css        # Core stylesheet
│   │   ├── App.jsx           # Route definitions
│   │   └── main.jsx          # React entry point
│   ├── .env.example          # Frontend environment template
│   ├── package.json
│   ├── vercel.json           # Vercel SPA routing configuration
│   └── vite.config.js
│
├── backend/
│   ├── config/               # Database connection (db.js)
│   ├── models/               # Mongoose models (Alumni, MentorshipRequest, Message)
│   ├── routes/               # Express REST routes (alumni, mentorship, messages)
│   ├── server.js             # Express application entry point
│   ├── seeder.js             # Demo data population script (idempotent)
│   ├── .env.example          # Backend environment template
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🌟 Features

1. **Alumni Directory**: Real-time integration with MongoDB Atlas to view, search, and filter alumni by batch, department, and location, complete with interactive profile detail modals.
2. **Mentorship Network**: Submit mentorship requests directly to alumni mentors with validation and instant status feedback.
3. **Contact & Inquiries**: Send messages to the association, persisted in MongoDB.
4. **Jobs & Internships**: Browse open positions with filtering and job submission modal.
5. **Events Hub**: Discover upcoming alumni reunions, webinars, and conferences with RSVP tracking.
6. **Responsive Design**: Polished user experience across mobile, tablet, and desktop screens.

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas connection string (or local MongoDB)

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLIENT_URL=http://localhost:5173
```

Seed the database with sample demo data (idempotent, safe to run multiple times):
```bash
npm run seed
```

Start the backend development server:
```bash
npm run dev
```
The API will run on `http://localhost:5000`.

### 2. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Backend status & health check |
| `GET` | `/api/alumni` | Fetch all alumni profiles |
| `GET` | `/api/alumni/:id` | Fetch specific alumni profile by ID |
| `POST` | `/api/alumni` | Create a new alumni profile |
| `GET` | `/api/mentorship` | Fetch all mentorship requests |
| `POST` | `/api/mentorship` | Submit a mentorship request |
| `POST` | `/api/messages` | Submit a contact message |

---

## 🌐 Deployment Configuration

### Frontend: Vercel
- **Root Directory**: `frontend`
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variable**: `VITE_API_URL=https://your-backend-service.onrender.com/api`
- *Note*: `vercel.json` is included to handle client-side React Router rewrites.

### Backend: Render
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `MONGO_URI`: `your_mongodb_atlas_connection_string`
  - `PORT`: `10000` (platform provided)
  - `CLIENT_URL`: `https://your-frontend-domain.vercel.app`

---

## 🔒 Security Best Practices
- Database credentials and secrets are excluded from Git via `.gitignore`.
- Template `.env.example` files are provided with placeholder values only.
- CORS is configured to validate authorized client origins in production.
