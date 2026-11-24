import express from 'express';
import mongoose from 'mongoose';
import Alumni from '../models/Alumni.js';

const router = express.Router();

// @desc    Get all alumni profiles
// @route   GET /api/alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find().sort({ createdAt: -1 });
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve alumni', error: error.message });
  }
});

// @desc    Get alumni by ID
// @route   GET /api/alumni/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid alumni ID format' });
    }

    const alumni = await Alumni.findById(id);
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }

    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve alumni profile', error: error.message });
  }
});

// @desc    Add a new alumni profile
// @route   POST /api/alumni
router.post('/', async (req, res) => {
  try {
    const { name, email, batch, department, company, designation, location, skills, profileImage } = req.body;

    // Check required fields
    if (!name || !email || !batch || !department || !company || !designation || !location) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, email, batch, department, company, designation, location'
      });
    }

    // Check if alumni with email already exists
    const existingAlumni = await Alumni.findOne({ email });
    if (existingAlumni) {
      return res.status(400).json({ message: 'Alumni with this email already exists' });
    }

    const newAlumni = await Alumni.create({
      name,
      email,
      batch,
      department,
      company,
      designation,
      location,
      skills: Array.isArray(skills) ? skills : skills ? skills.split(',').map(s => s.trim()) : [],
      profileImage: profileImage || ''
    });

    res.status(201).json(newAlumni);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create alumni profile', error: error.message });
  }
});

export default router;
