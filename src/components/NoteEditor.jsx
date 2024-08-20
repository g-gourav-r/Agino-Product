import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const NoteEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const quillRef = useRef(null); // Use ref to store Quill instance
  const editorContainerRef = useRef(null); // Ref for editor container

  useEffect(() => {
    if (editorContainerRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorContainerRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image', 'blockquote', 'code-block'],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      });
    }

    if (id) {
      const fetchNote = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/notes/${id}`);
          setTitle(response.data.title || '');
          if (quillRef.current) {
            quillRef.current.root.innerHTML = response.data.content || '';
          }
        } catch (error) {
          console.error('Error fetching note:', error);
        }
      };
      fetchNote();
    }

    return () => {
      // Optional: Clean up if needed
      if (quillRef.current) {
        quillRef.current.enable(false);
        quillRef.current.disable();
        quillRef.current = null;
      }
    };
  }, [id]);

  const saveNote = async () => {
    if (!quillRef.current) return;
    const noteContent = quillRef.current.root.innerHTML;

    try {
      if (id) {
        await axios.put(`http://localhost:3001/api/notes/${id}`, { title, content: noteContent });
      } else {
        await axios.post('http://localhost:3001/api/notes', { title, content: noteContent });
      }
      navigate('/lala');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <div id="editor-container" ref={editorContainerRef} style={{ height: '300px' }}></div>
      <button onClick={saveNote} className='btn btn-primary'>Save Note</button>
    </div>
  );
};

export default NoteEditor;
