import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    PlusCircle,
    Settings,
    LogOut,
    Zap,
    Clock,
    Users,
    Calendar,
    Search,
    ChevronRight,
    Sparkles,
    Play,
    Image as ImageIcon,
    FileText,
    Code,
    TrendingUp,
    Award,
    Target,
    MessageSquare,
    Bell,
    BarChart3,
    UserPlus,
    CheckCircle2,
    MoreVertical
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../components/LogoutModal';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const SidebarLink = ({ icon, label, to, active }) => (
    <Link
        to={to}
        className={`sidebar-link ${active ? 'active' : ''}`}
    >
        {icon}
        <span>{label}</span>
    </Link>
);

const ClubLeadDashboard = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole') || 'student';
    const userName = localStorage.getItem('userName') || 'Club Lead';
    const [activeTab, setActiveTab] = useState('overview');
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    React.useEffect(() => {
        if (role === 'student') {
            navigate('/dashboard');
        } else if (role === 'admin') {
            navigate('/admin');
        }
    }, [role, navigate]);

    if (role === 'student' || role === 'admin') {
        return null;
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
            {/* Header */}
            <header className="dashboard-header-simple">
                <div className="header-title-group">
                    <h1 className="header-title">Overview</h1>
                    <p className="header-subtitle">Welcome back to your workspace</p>
                </div>
                <div className="header-actions">
                    <div className="search-bar-modern">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search everything..."
                        />
                    </div>
                    <button className="notification-btn">
                        <Bell size={20} />
                        <span className="notification-dot">3</span>
                    </button>
                    <div className="user-profile-summary">
                        <div className="info">
                            <p className="name">{userName}</p>
                            <p className="role">Club Lead</p>
                        </div>
                        <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
                            alt="profile"
                        />
                    </div>
                </div>
            </header>

            {/* Banner Section */}
            <section className="welcome-banner club-lead-banner">
                <div className="banner-content">
                    <h1>Ready to Lead, {userName}? 🚀</h1>
                    <p>
                        Scale your impact with our AI-powered suite. Manage team growth, track event success, and generate professional assets in seconds.
                    </p>
                    <div className="banner-actions" style={{ display: 'flex', gap: '1.25rem' }}>
                        <Link to="/create" className="btn-create-banner" style={{ textDecoration: 'none' }}>
                            <Zap size={22} fill="currentColor" />
                            Launch AI Suite
                        </Link>
                        <button className="btn-secondary-banner">
                            <Target size={22} />
                            Set Monthly Goal
                        </button>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                            <Users size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>0</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Total Members</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#6366f1', width: '0%' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                            <Calendar size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>0</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Active Events</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#f59e0b', width: '0%' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                            <Sparkles size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>0</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>AI Assets Created</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#10b981', width: '0%' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                            <Award size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>-</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Campus Ranking</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#8b5cf6', width: '0%' }} />
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Left Column: Management Tabs */}
                <div className="grid-left">
                    <div className="section-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'recent' ? 'active' : ''}`}
                            onClick={() => setActiveTab('recent')}
                        >
                            Recent Activity
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'overview' && (
                            <div className="team-activity-grid">
                                <div className="section-title-row">
                                    <h2 className="section-title">Latest Team Activity</h2>
                                </div>
                                <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '24px', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                                    <Clock size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                    <p style={{ fontWeight: 600 }}>No recent activity to show</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'upcoming' && (
                            <div className="events-grid">
                                <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '24px', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                                    <Calendar size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                    <p style={{ fontWeight: 600 }}>No upcoming events scheduled</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'recent' && (
                            <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '24px', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                                <div style={{ fontWeight: 600 }}>Zero activity logs found for the selected period.</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Mini Widgets */}
                <div className="grid-right">
                    <div className="team-members-widget">
                        <div className="section-title-row">
                            <h2 className="section-title">Team</h2>
                            <Link to="/team" className="view-all-link">Manage</Link>
                        </div>
                        <div className="members-list" style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--slate-50)', borderRadius: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            No team members added yet
                        </div>
                    </div>

                    <div className="tasks-widget">
                        <div className="section-title-row">
                            <h2 className="section-title">To-Do</h2>
                        </div>
                        <div className="tasks-list" style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--slate-50)', borderRadius: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            All caught up! No pending tasks.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Internal helper for the logo */
const BrainIcon = (props) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
        <path d="M14.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
        <path d="M21 8.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
        <path d="M21 13.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" />
        <path d="M3 8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3z" />
        <path d="M3 13.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3z" />
        <path d="M12 21a7 7 0 0 1-7-7c0-2.5 1.5-4.5 4-5.5.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5c2.5 1 4 3 4 5.5a7 7 0 0 1-7 7z" />
    </svg>
);

export default ClubLeadDashboard;
