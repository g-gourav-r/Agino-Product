import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../Pages/LoginPage/LoginForm';
import { SignupForm } from '../Pages/SignupPage/SignupForm';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FullLayout from '../Pages/MainPage';
import ChatComponent from '../components/ChatWindow';
import { NotePage } from '../Pages/NotePage';
// import DatabaseListPage from '../Pages/DatabaseListPage';
import DatabaseListPage from '../Pages/db';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/homepage" element={<FullLayout />} />
        <Route path="/notes" element={<NotePage />} />
        <Route path="/databases" element={<DatabaseListPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
