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
    CheckCircle2
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
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <header className="dashboard-header" style={{ marginBottom: '2rem' }}>
                <div className="search-bar">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search members, events, or projects..."
                    />
                </div>
                <div className="header-actions">
                    <button className="notification-btn">
                        <Bell size={20} />
                        <span className="notification-badge">3</span>
                    </button>
                    <div className="user-profile">
                        <div className="user-info">
                            <span className="user-name">{userName}</span>
                            <span className="user-role">Club Lead</span>
                        </div>
                        <div className="user-avatar">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} alt="profile" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Banner Section */}
            <section className="dashboard-banner club-lead-banner">
                <div className="banner-content">
                    <h1>Ready to Lead, {userName}? 🚀</h1>
                    <p>Manage your team, track performance, and create campus impact with AI tools.</p>
                    <div className="banner-actions">
                        <Link to="/create" className="btn-create-banner" style={{ textDecoration: 'none' }}>
                            <Zap size={20} />
                            Launch Suite
                        </Link>
                        <button className="btn-secondary-banner">
                            <Target size={20} />
                            Set Monthly Goal
                        </button>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <div className="stats-grid">
                <div className="stat-card club-stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                        <Users size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>158</h3>
                        <p>Total Members</p>
                    </div>
                    <div className="stat-trend positive">
                        <TrendingUp size={16} />
                        <span>12%</span>
                    </div>
                </div>
                <div className="stat-card club-stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                        <Calendar size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>4</h3>
                        <p>Active Events</p>
                    </div>
                </div>
                <div className="stat-card club-stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                        <Sparkles size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>24</h3>
                        <p>AI Assets Created</p>
                    </div>
                </div>
                <div className="stat-card club-stat-card">
                    <div className="stat-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                        <Award size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>#2</h3>
                        <p>Campus Ranking</p>
                    </div>
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
