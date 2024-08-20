import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../Pages/LoginPage/LoginForm';
import { SignupForm } from '../Pages/SignupPage/SignupForm';
import FullLayout from '../Pages/MainPage';
import DatabaseListPage from '../Pages/db';
import NoteList from '../components/NotesList';
import NoteEditor from '../components/NoteEditor';
import NotePad from '../Pages/NotePad';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/homepage" element={<FullLayout />} />
        <Route path="/databases" element={<DatabaseListPage />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/edit/:id" element={<NoteEditor />} />
        <Route path="/create" element={<NoteEditor />} /> {/* For creating a new note */}
        <Route path="/lala" element={<NotePad />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
