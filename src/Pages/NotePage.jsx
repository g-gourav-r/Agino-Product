import React, { useState } from 'react';
import { Container } from 'reactstrap';  // Importing Container from reactstrap
import { NoteEditor } from '../components/NoteEditor';
import { NotesList } from '../components/NotesList';
import Header from '../components/Header';  // Import Header component
import Sidebar from '../components/Sidebar';  // Import Sidebar component
import '../assets/css/NotePage.css';

export const NotePage = () => {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh', margin: 0, overflow: 'hidden' }}>
    {/********Header**********/}
    <Header />
    <div className="pageWrapper d-lg-flex" style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
      {/********Sidebar**********/}
      <aside className="sidebarArea shadow" id="sidebarArea" style={{ flex: '0 0 250px', backgroundColor: '#1a1a1a', height: '100%', overflow: 'hidden' }}>
        <Sidebar />
      </aside>
      {/********Content Area**********/}
      <div className="contentArea" style={{ flexGrow: 1, overflowY: 'auto' }}>
        {/********Middle Content**********/}
        <Container className="p-0" fluid>
        <div className="note-page container">
      <h1 className="text-center my-4">Note Editor</h1>
      <div className="row">
        <div className="col-md-6">
          <NoteEditor onSave={handleSaveNote} />
        </div>
        <div className="col-md-6">
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
        </Container>
      </div>
    </div>
  </main>
  );
};
