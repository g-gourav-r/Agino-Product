const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
// Increase the request size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Replace this with your actual MongoDB connection string
const mongoURI = 'ds';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB:', err));

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Ensure title is required
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

app.post('/api/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log('POST Request Body:', req.body); // Log the incoming data

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newNote = new Note({
      title, // Ensure title is captured
      content
    });
    const savedNote = await newNote.save();
    console.log('Saved Note:', savedNote); // Log the saved note
    res.status(201).json(savedNote);
  } catch (err) {
    console.error('Error creating note:', err); // Log the error
    res.status(500).json({ message: 'Failed to create note', error: err.message });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log('PUT Request Body:', req.body); // Log the incoming data

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    console.log('Updated Note:', updatedNote); // Log the updated note
    res.json(updatedNote);
  } catch (err) {
    console.error('Error updating note:', err); // Log the error
    res.status(500).json({ message: 'Failed to update note', error: err.message });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (err) {
    console.error('Error fetching note:', err);
    res.status(500).json({ message: 'Failed to fetch note', error: err.message });
  }
});

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find(); // Fetch all notes
    res.json(notes);
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).json({ message: 'Failed to fetch notes', error: err.message });
  }
});

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
