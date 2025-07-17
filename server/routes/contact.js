import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  try {
    const newContact = await contact.save();
    
    // Here you could add email notification logic
    // Example: sendEmailNotification(newContact);

    res.status(201).json({
      message: 'Message sent successfully',
      contact: newContact
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to send message',
      error: error.message
    });
  }
});

// Get all messages (protected route - you should add authentication)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update message status (protected route - you should add authentication)
router.patch('/:id/status', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      contact.status = req.body.status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete message (protected route - you should add authentication)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      await contact.remove();
      res.json({ message: 'Message deleted successfully' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;