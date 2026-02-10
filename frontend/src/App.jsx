import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AiCreationSuite from './pages/AiCreationSuite';
import LowCodeBuilder from './pages/LowCodeBuilder';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes (Logic will be simplified for this version) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<AiCreationSuite />} />
        <Route path="/builder" element={<LowCodeBuilder />} />
        <Route path="/admin" element={<AdminPanel />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
