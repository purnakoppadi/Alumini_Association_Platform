import express from 'express';
import MentorshipRequest from '../models/MentorshipRequest.js';

const router = express.Router();

// @desc    Submit a mentorship request
// @route   POST /api/mentorship
router.post('/', async (req, res) => {
  try {
    const { studentName, email, mentorName, message } = req.body;

    if (!studentName || !email || !mentorName || !message) {
      return res.status(400).json({
        message: 'Please provide all required fields: studentName, email, mentorName, message'
      });
    }

    const mentorshipRequest = await MentorshipRequest.create({
      studentName,
      email,
      mentorName,
      message,
      status: 'Pending'
    });

    res.status(201).json({
      message: 'Mentorship request submitted successfully',
      data: mentorshipRequest
    });
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit mentorship request', error: error.message });
  }
});

// @desc    Get all mentorship requests
// @route   GET /api/mentorship
router.get('/', async (req, res) => {
  try {
    const requests = await MentorshipRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve mentorship requests', error: error.message });
  }
});

export default router;
