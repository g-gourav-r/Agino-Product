import React, { useState } from 'react';
import { FaBold, FaItalic, FaSave } from "react-icons/fa";
import '../assets/css/NoteEditor.css';

export const NoteEditor = ({ onSave }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (content.trim()) {
      onSave(content);
      setContent(''); // Clear editor after saving
    }
  };

  return (
    <div className="note-editor">
      <Toolbar />
      <textarea 
        className="note-textarea" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Write your note here..."
      />
      <button onClick={handleSave} className="btn btn-primary mt-3">
        <FaSave /> Save Note
      </button>
    </div>
  );
};

const Toolbar = () => (
  <div className="toolbar">
    <button className="btn btn-light"><FaBold /></button>
    <button className="btn btn-light"><FaItalic /></button>
    {/* Add more formatting options as needed */}
  </div>
);
