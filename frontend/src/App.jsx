import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminLoginPage from './pages/AdminLoginPage';
import Dashboard from './pages/Dashboard';
import ClubLeadDashboard from './pages/ClubLeadDashboard';
import AiCreationSuite from './pages/AiCreationSuite';
import LowCodeBuilder from './pages/LowCodeBuilder';
import AdminPanel from './pages/AdminPanel';
import TeamHub from './pages/TeamHub';
import Events from './pages/Events';
import Analytics from './pages/Analytics';
import History from './pages/History';
import Profile from './pages/Profile';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Protected Routes (Logic will be simplified for this version) */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Unified Dashboard Group for Students and Club Leads */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/club-dashboard" element={<ClubLeadDashboard />} />
          <Route path="/team" element={<TeamHub />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create" element={<AiCreationSuite />} />
          <Route path="/builder" element={<LowCodeBuilder />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
