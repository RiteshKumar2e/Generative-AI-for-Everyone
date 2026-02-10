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
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Outfit', margin: 0 }}>Overview</h1>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Welcome back to your workspace</p>
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
                        <div className="stat-trend positive" style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <TrendingUp size={16} />
                            <span>12%</span>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>158</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Total Members</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#6366f1' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                            <Calendar size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>4</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Active Events</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#f59e0b' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                            <Sparkles size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>24</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>AI Assets Created</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#10b981' }} />
                </div>

                <div className="stat-card-premium">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                            <Award size={26} />
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>#2</h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Campus Ranking</p>
                    </div>
                    <div className="stat-progress-bar" style={{ background: '#8b5cf6' }} />
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
                                    <Link to="/history" className="view-all-link">View Audit Log</Link>
                                </div>
                                <div className="team-activity-card">
                                    <div className="activity-avatar">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="user" />
                                    </div>
                                    <div className="activity-details">
                                        <h4>Alex Rivera</h4>
                                        <p>Created a new marketing campaign using Creation Suite 🚀</p>
                                        <div className="activity-meta">
                                            <span className="activity-type">Creation</span>
                                            <span className="activity-time">2 hours ago</span>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="activity-arrow" />
                                </div>
                                <div className="team-activity-card">
                                    <div className="activity-avatar">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="user" />
                                    </div>
                                    <div className="activity-details">
                                        <h4>Sarah Chen</h4>
                                        <p>Updated the event details for "AI Campus Summit" 📅</p>
                                        <div className="activity-meta">
                                            <span className="activity-type">Event</span>
                                            <span className="activity-time">5 hours ago</span>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="activity-arrow" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'upcoming' && (
                            <div className="events-grid">
                                <div className="event-card">
                                    <div className="event-header">
                                        <span className="event-status status-confirmed">Confirmed</span>
                                        <MoreVertical size={18} />
                                    </div>
                                    <h4>AI Workshop: GenAI Basics</h4>
                                    <p className="event-date">March 15, 2024 • 2:00 PM</p>
                                    <div className="event-footer">
                                        <div className="event-attendees">
                                            <Users size={16} />
                                            <span>45 Registered</span>
                                        </div>
                                        <button className="btn-action-small">Manage</button>
                                    </div>
                                </div>
                                <div className="event-card">
                                    <div className="event-header">
                                        <span className="event-status status-planning">Planning</span>
                                        <MoreVertical size={18} />
                                    </div>
                                    <h4>Campus Hackathon 2024</h4>
                                    <p className="event-date">April 02, 2024 • 9:00 AM</p>
                                    <div className="event-footer">
                                        <div className="event-attendees">
                                            <Users size={16} />
                                            <span>120 Interested</span>
                                        </div>
                                        <button className="btn-action-small">Edit</button>
                                    </div>
                                </div>
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
                        <div className="members-list">
                            {[
                                { name: 'Alex Rivera', role: 'Lead Designer', status: 'online' },
                                { name: 'Sarah Chen', role: 'Dev Lead', status: 'online' },
                                { name: 'Marcus Jo', role: 'Events', status: 'offline' }
                            ].map((member, i) => (
                                <div key={i} className="member-item">
                                    <div className="member-avatar-wrapper">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} alt="avatar" />
                                        <span className={`status-dot ${member.status}`}></span>
                                    </div>
                                    <div className="member-info">
                                        <p className="member-name">{member.name}</p>
                                        <p className="member-role">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tasks-widget">
                        <div className="section-title-row">
                            <h2 className="section-title">To-Do</h2>
                            <span className="task-count">3</span>
                        </div>
                        <div className="tasks-list">
                            <div className="task-item">
                                <CheckCircle2 size={18} className="task-checkbox" />
                                <span>Approve event budget</span>
                                <span className="priority-badge priority-high">High</span>
                            </div>
                            <div className="task-item">
                                <CheckCircle2 size={18} className="task-checkbox" />
                                <span>Review AI assets</span>
                                <span className="priority-badge priority-medium">Medium</span>
                            </div>
                            <div className="task-item">
                                <CheckCircle2 size={18} className="task-checkbox" />
                                <span>Send club newsletter</span>
                                <span className="priority-badge priority-low">Low</span>
                            </div>
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
