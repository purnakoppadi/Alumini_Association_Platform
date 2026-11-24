import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @desc    Submit a contact message
// @route   POST /api/messages
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, email, subject, message'
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      message: 'Contact message submitted successfully',
      data: newMessage
    });
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit message', error: error.message });
  }
});

export default router;
