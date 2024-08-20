import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate(); // Use useNavigate to navigate programmatically

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleNoteClick = (id) => {
    navigate(`/edit/${id}`); // Navigate to the NoteEditor with the note ID
  };

  const handleAddNewNote = () => {
    navigate('/create'); // Navigate to the NoteEditor without an ID
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes List</h1>
      <button onClick={handleAddNewNote}>Add New Note</button> {/* Add button for creating a new note */}
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h2 
              onClick={() => handleNoteClick(note._id)} 
              style={{ cursor: 'pointer' }}
            >
              {note.title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
