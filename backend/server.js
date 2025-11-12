require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Setup express
const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Talent Schema
const talentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [String],
  experience: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Talent = mongoose.model('Talent', talentSchema);

// POST /api/talents
app.post('/api/talents', async (req, res) => {
  try {
    const { name, email, skills, experience } = req.body;
    if (!name || !email || !Array.isArray(skills) || !experience) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const talent = new Talent({ name, email, skills, experience });
    await talent.save();
    res.status(201).json(talent);
  } catch (err) {
    if (err.code === 11000) { // Duplicate email
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to add talent' });
  }
});

// GET /api/talents
app.get('/api/talents', async (req, res) => {
  try {
    if (req.query.skill) {
      // Filter by skill
      const talents = await Talent.find({ skills: req.query.skill });
      res.json(talents);
    } else {
      // All talents
      const talents = await Talent.find();
      res.json(talents);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch talents' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
