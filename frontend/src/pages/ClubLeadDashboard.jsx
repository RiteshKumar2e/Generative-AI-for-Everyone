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
        <div className="dashboard-wrapper">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon">
                        <BrainIcon size={24} />
                    </div>
                    <span>Campus<span style={{ color: 'var(--primary-color)' }}>GenAI</span></span>
                </div>

                <nav className="sidebar-nav">
                    <SidebarLink icon={<LayoutDashboard size={20} />} label="Overview" to="/club-dashboard" active />
                    <SidebarLink icon={<Users size={20} />} label="Team Hub" to="/team" />
                    <SidebarLink icon={<Calendar size={20} />} label="Events" to="/events" />
                    <SidebarLink icon={<PlusCircle size={20} />} label="Creation Suite" to="/create" />
                    <SidebarLink icon={<BarChart3 size={20} />} label="Analytics" to="/analytics" />
                    <SidebarLink icon={<Clock size={20} />} label="History" to="/history" />
                </nav>

                <div className="sidebar-footer">
                    <SidebarLink icon={<Settings size={20} />} label="Settings" to="/settings" />
                    <button className="btn-logout" onClick={() => setShowLogoutModal(true)}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Header */}
                <header className="dashboard-header">
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
                        <div className="credit-badge">
                            <Zap size={16} fill="currentColor" />
                            <span>1,240 Credits</span>
                        </div>
                        <div className="user-profile">
                            <div className="user-info">
                                <p className="user-name">{userName}</p>
                                <p className="user-role">Club Lead</p>
                            </div>
                            <div className="user-avatar">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} alt="avatar" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* Welcome Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="welcome-banner club-lead-banner"
                    >
                        <div className="welcome-banner-content">
                            <h1>Welcome back, {userName}! 🎯</h1>
                            <p>Your club has 8 active members and 3 upcoming events. Let's make this week amazing!</p>
                            <div className="banner-actions">
                                <Link to="/events" className="btn-create-banner">
                                    <Calendar size={20} />
                                    Create Event
                                </Link>
                                <Link to="/team" className="btn-secondary-banner">
                                    <UserPlus size={20} />
                                    Invite Members
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Grid - Club Lead Specific */}
                    <div className="stats-row">
                        {[
                            { label: 'Team Members', value: '8', icon: <Users color="#3b82f6" />, trend: '+2 this month', color: '#3b82f6' },
                            { label: 'Active Events', value: '3', icon: <Calendar color="#22c55e" />, trend: '2 upcoming', color: '#22c55e' },
                            { label: 'Club Engagement', value: '94%', icon: <TrendingUp color="#eab308" />, trend: '+12% vs last week', color: '#eab308' },
                            { label: 'Team Credits', value: '1.2K', icon: <Award color="#7c3aed" />, trend: 'Pool balance', color: '#7c3aed' }
                        ].map((stat, i) => (
                            <div key={i} className="dashboard-stat-card club-stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon-wrapper" style={{ background: `${stat.color}15` }}>{stat.icon}</div>
                                    <span className="stat-trend">{stat.trend}</span>
                                </div>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="dashboard-grid">
                        {/* Team Activity & Events */}
                        <div className="creations-section">
                            <div className="section-tabs">
                                <button
                                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    Team Activity
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('events')}
                                >
                                    Upcoming Events
                                </button>
                            </div>

                            {activeTab === 'overview' && (
                                <div className="team-activity-grid">
                                    {[
                                        { member: "Sarah Chen", action: "Created AI Workshop Poster", type: "Image", time: "2h ago", avatar: "Sarah" },
                                        { member: "Alex Rivera", action: "Updated Event Registration Form", type: "Code", time: "5h ago", avatar: "Alex" },
                                        { member: "James Wilson", action: "Shared Club Presentation", type: "Document", time: "1d ago", avatar: "James" },
                                        { member: "Taylor Swift", action: "Posted Event Announcement", type: "Video", time: "2d ago", avatar: "Taylor" }
                                    ].map((item, i) => (
                                        <div key={i} className="team-activity-card">
                                            <div className="activity-avatar">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.avatar}`} alt={item.member} />
                                            </div>
                                            <div className="activity-details">
                                                <h4>{item.member}</h4>
                                                <p>{item.action}</p>
                                                <div className="activity-meta">
                                                    <span className="activity-type">{item.type}</span>
                                                    <span className="activity-time">{item.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'events' && (
                                <div className="events-grid">
                                    {[
                                        { title: "AI Workshop Series", date: "Feb 15, 2026", attendees: 24, status: "Confirmed" },
                                        { title: "Tech Talk: GenAI", date: "Feb 20, 2026", attendees: 18, status: "Planning" },
                                        { title: "Club Fest Booth", date: "Mar 1, 2026", attendees: 12, status: "Pending" }
                                    ].map((event, i) => (
                                        <div key={i} className="event-card">
                                            <div className="event-header">
                                                <Calendar size={20} color="#3b82f6" />
                                                <span className={`event-status status-${event.status.toLowerCase()}`}>{event.status}</span>
                                            </div>
                                            <h4>{event.title}</h4>
                                            <p className="event-date">{event.date}</p>
                                            <div className="event-footer">
                                                <div className="event-attendees">
                                                    <Users size={16} />
                                                    <span>{event.attendees} registered</span>
                                                </div>
                                                <ChevronRight size={18} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick Actions & Team Overview */}
                        <div className="side-column">
                            <div className="section-title-row">
                                <h2>Quick Actions</h2>
                            </div>
                            <div className="quick-tools-list">
                                {[
                                    { label: "Event Poster", icon: <ImageIcon size={18} />, color: "#3b82f6" },
                                    { label: "Registration Form", icon: <FileText size={18} />, color: "#22c55e" },
                                    { label: "Social Media Post", icon: <MessageSquare size={18} />, color: "#ec4899" },
                                    { label: "Presentation Slides", icon: <Play size={18} />, color: "#a855f7" }
                                ].map((tool, i) => (
                                    <button key={i} className="tool-button">
                                        <div className="tool-info">
                                            <div className="tool-icon-box" style={{ color: tool.color }}>{tool.icon}</div>
                                            <span>{tool.label}</span>
                                        </div>
                                        <ChevronRight size={18} />
                                    </button>
                                ))}
                            </div>

                            {/* Team Members */}
                            <div className="team-members-widget">
                                <div className="section-title-row">
                                    <h3>Team Members</h3>
                                    <Link to="/team" className="view-all-link">View All</Link>
                                </div>
                                <div className="members-list">
                                    {[
                                        { name: "Sarah Chen", role: "Designer", status: "online" },
                                        { name: "Alex Rivera", role: "Developer", status: "online" },
                                        { name: "James Wilson", role: "Content", status: "offline" },
                                        { name: "Taylor Swift", role: "Marketing", status: "online" }
                                    ].map((member, i) => (
                                        <div key={i} className="member-item">
                                            <div className="member-avatar-wrapper">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} alt={member.name} />
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

                            {/* Tasks/To-Do */}
                            <div className="tasks-widget">
                                <div className="section-title-row">
                                    <h3>Pending Tasks</h3>
                                    <span className="task-count">3</span>
                                </div>
                                <div className="tasks-list">
                                    {[
                                        { task: "Review event budget", priority: "high" },
                                        { task: "Approve poster designs", priority: "medium" },
                                        { task: "Send team meeting invite", priority: "low" }
                                    ].map((item, i) => (
                                        <div key={i} className="task-item">
                                            <CheckCircle2 size={18} className="task-checkbox" />
                                            <span>{item.task}</span>
                                            <span className={`priority-badge priority-${item.priority}`}>{item.priority}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Logout Confirmation Modal */}
            <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={() => {
                    localStorage.clear();
                    navigate('/login');
                }}
            />
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
