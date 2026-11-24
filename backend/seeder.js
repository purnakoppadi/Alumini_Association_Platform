import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Alumni from './models/Alumni.js';
import MentorshipRequest from './models/MentorshipRequest.js';
import Message from './models/Message.js';

dotenv.config();

export const sampleAlumni = [
  {
    name: 'Ravi Patel',
    email: 'ravi.patel@gmail.com',
    batch: '2016',
    department: 'Computer Science',
    company: 'Google',
    designation: 'Software Architect',
    location: 'Bangalore',
    skills: ['Python', 'System Design', 'Cloud Architecture'],
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Sneha Mehta',
    email: 'sneha.m@outlook.com',
    batch: '2018',
    department: 'Computer Science',
    company: 'Amazon',
    designation: 'Data Scientist',
    location: 'Hyderabad',
    skills: ['Machine Learning', 'Python', 'Statistics'],
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Arjun Kumar',
    email: 'arjun.k@hotmail.com',
    batch: '2008',
    department: 'Electronics',
    company: 'Microsoft',
    designation: 'VP Engineering',
    location: 'San Francisco',
    skills: ['Leadership', 'Cloud Computing', 'DevOps'],
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    batch: '2019',
    department: 'Information Tech',
    company: 'Flipkart',
    designation: 'Product Manager',
    location: 'Bangalore',
    skills: ['Product Strategy', 'Agile', 'Analytics'],
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Vikram Reddy',
    email: 'vikram.r@email.com',
    batch: '2021',
    department: 'Computer Science',
    company: 'Swiggy',
    designation: 'Frontend Developer',
    location: 'Bangalore',
    skills: ['React', 'TypeScript', 'UI/UX'],
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Ananya Iyer',
    email: 'ananya.i@email.com',
    batch: '2017',
    department: 'Electronics',
    company: 'Meta',
    designation: 'ML Engineer',
    location: 'New York',
    skills: ['Deep Learning', 'PyTorch', 'NLP'],
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Rohan Desai',
    email: 'rohan.d@email.com',
    batch: '2020',
    department: 'Civil',
    company: 'L&T',
    designation: 'Civil Engineer',
    location: 'Mumbai',
    skills: ['AutoCAD', 'Project Management', 'Structural Design'],
    profileImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Kavya Nair',
    email: 'kavya.n@email.com',
    batch: '2022',
    department: 'Information Tech',
    company: 'Adobe',
    designation: 'UX Designer',
    location: 'Pune',
    skills: ['Figma', 'User Research', 'Prototyping'],
    profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Deepak Joshi',
    email: 'deepak.j@email.com',
    batch: '2019',
    department: 'Computer Science',
    company: 'Infosys',
    designation: 'DevOps Engineer',
    location: 'Hyderabad',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Meera Gupta',
    email: 'meera.g@email.com',
    batch: '2017',
    department: 'Mechanical',
    company: 'Zomato',
    designation: 'Marketing Head',
    location: 'Delhi',
    skills: ['Digital Marketing', 'Strategy', 'Branding'],
    profileImage: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Aditya Singh',
    email: 'aditya.s@email.com',
    batch: '2020',
    department: 'Computer Science',
    company: 'Polygon',
    designation: 'Blockchain Developer',
    location: 'Mumbai',
    skills: ['Solidity', 'Web3', 'Ethereum'],
    profileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Pooja Pillai',
    email: 'pooja.p@email.com',
    batch: '2016',
    department: 'Mechanical',
    company: 'ISRO',
    designation: 'Research Scientist',
    location: 'Bangalore',
    skills: ['MATLAB', 'Simulation', 'Aerospace Engineering'],
    profileImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80'
  }
];

export const sampleMentorshipRequests = [
  {
    studentName: 'Aarav Sen',
    email: 'aarav.sen@student.edu',
    mentorName: 'Arjun Kumar',
    message: 'Seeking guidance on scaling microservices and transitioning into technical leadership.',
    status: 'Accepted'
  },
  {
    studentName: 'Ishaan Verma',
    email: 'ishaan.v@student.edu',
    mentorName: 'Sneha Mehta',
    message: 'Interested in machine learning research paths and data science internships at top tech firms.',
    status: 'Accepted'
  },
  {
    studentName: 'Diya Rao',
    email: 'diya.rao@student.edu',
    mentorName: 'Ravi Patel',
    message: 'Looking for advice on preparing for software architect interviews and distributed system design.',
    status: 'Pending'
  },
  {
    studentName: 'Tanvi Kapoor',
    email: 'tanvi.k@student.edu',
    mentorName: 'Priya Sharma',
    message: 'Would love to get feedback on transitioning from engineering to Associate Product Management.',
    status: 'Pending'
  },
  {
    studentName: 'Karan Malhotra',
    email: 'karan.m@student.edu',
    mentorName: 'Ananya Iyer',
    message: 'Seeking mentorship in Computer Vision model deployment and PyTorch pipelines.',
    status: 'Rejected'
  },
  {
    studentName: 'Neha Bhatt',
    email: 'neha.b@student.edu',
    mentorName: 'Meera Gupta',
    message: 'Requesting advice on building marketing strategies for a college tech fest startup.',
    status: 'Pending'
  }
];

export const sampleMessages = [
  {
    name: 'Sameer Joshi',
    email: 'sameer.j@gmail.com',
    subject: 'Inquiry regarding Alumni Mentorship Program',
    message: 'Hello, I am a 3rd year student interested in joining the mentorship cohort. Could you provide details on the session schedule?'
  },
  {
    name: 'Ritu Nambiar',
    email: 'ritu.n@alumni.org',
    subject: 'Volunteering for Annual Reunion 2026',
    message: 'I would love to participate as an organizer for the upcoming Grand Alumni Reunion in April. Please let me know how I can contribute.'
  },
  {
    name: 'Alok Bansal',
    email: 'alok.bansal@techcorp.com',
    subject: 'Campus Hiring Drive Collaboration',
    message: 'We are expanding our software engineering team and would like to post new job openings exclusively for our alumni network.'
  },
  {
    name: 'Shweta Dixit',
    email: 'shweta.d@university.edu',
    subject: 'Alumni Directory Profile Update',
    message: 'Could you please help me update my department and company details in the directory? I recently changed roles.'
  },
  {
    name: 'Manish Chawla',
    email: 'manish.c@startup.io',
    subject: 'Guest Lecture Proposal on Entrepreneurship',
    message: 'I am an alumnus from the 2015 batch and would like to conduct an interactive workshop on early-stage seed funding.'
  },
  {
    name: 'Kriti Saxena',
    email: 'kriti.saxena@gmail.com',
    subject: 'General Feedback on Platform UI',
    message: 'The new alumni platform looks great and is very responsive! Thank you to the development and alumni committee team.'
  }
];

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri || mongoUri === 'your_mongodb_connection_string') {
      console.error('❌ Cannot run seed script: MONGO_URI is not set in .env. Please configure your MongoDB Atlas connection string first.');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB for seeding');

    // 1. Seed Alumni (Upsert by email)
    let alumniCount = 0;
    for (const record of sampleAlumni) {
      await Alumni.findOneAndUpdate(
        { email: record.email },
        record,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      alumniCount++;
    }
    console.log(`✅ Seeded/verified ${alumniCount} alumni records.`);

    // 2. Seed Mentorship Requests (Upsert by email + mentorName)
    let mentorshipCount = 0;
    for (const record of sampleMentorshipRequests) {
      await MentorshipRequest.findOneAndUpdate(
        { email: record.email, mentorName: record.mentorName },
        record,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      mentorshipCount++;
    }
    console.log(`✅ Seeded/verified ${mentorshipCount} mentorship requests.`);

    // 3. Seed Contact Messages (Upsert by email + subject)
    let messageCount = 0;
    for (const record of sampleMessages) {
      await Message.findOneAndUpdate(
        { email: record.email, subject: record.subject },
        record,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      messageCount++;
    }
    console.log(`✅ Seeded/verified ${messageCount} contact messages.`);

    console.log('🎉 Database demo data seeding completed successfully without duplicate entries.');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
