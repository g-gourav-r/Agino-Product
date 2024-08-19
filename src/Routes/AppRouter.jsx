import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../Pages/LoginPage/LoginForm';
import { SignupForm } from '../Pages/SignupPage/SignupForm';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FullLayout from '../Pages/MainPage';
import MainWindow from '../Pages/FullLayout';
import ChatComponent from '../components/ChatWindow';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/head" element={<Header />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/full" element={<FullLayout />} />
        <Route path="/a" element={<ChatComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
