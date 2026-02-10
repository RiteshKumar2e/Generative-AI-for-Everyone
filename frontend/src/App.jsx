import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ClubLeadDashboard from './pages/ClubLeadDashboard';
import AiCreationSuite from './pages/AiCreationSuite';
import LowCodeBuilder from './pages/LowCodeBuilder';
import AdminPanel from './pages/AdminPanel';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes (Logic will be simplified for this version) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/club-dashboard" element={<ClubLeadDashboard />} />
        <Route path="/create" element={<AiCreationSuite />} />
        <Route path="/builder" element={<LowCodeBuilder />} />
        <Route path="/admin" element={<AdminPanel />} />

        {/* Module Placeholders to avoid redirects */}
        <Route path="/team" element={<ComingSoon title="Team Hub" />} />
        <Route path="/events" element={<ComingSoon title="Events Management" />} />
        <Route path="/analytics" element={<ComingSoon title="Analytics" />} />
        <Route path="/history" element={<ComingSoon title="History" />} />
        <Route path="/settings" element={<ComingSoon title="Settings" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
