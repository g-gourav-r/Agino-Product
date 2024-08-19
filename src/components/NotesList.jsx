import React from 'react';
import '../assets/css/NotesList.css';

export const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? notes.map((note, index) => (
        <Note key={index} content={note} />
      )) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

const Note = ({ content }) => (
  <div className="note">
    <p>{content}</p>
  </div>
);
