import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    PlusCircle,
    Settings,
    LogOut,
    Zap,
    Clock,
    Users,
    CreditCard,
    Search,
    ChevronRight,
    Sparkles,
    Play,
    Image as ImageIcon,
    FileText,
    Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const SidebarLink = ({ icon, label, to, active }) => (
    <Link
        to={to}
        className={`sidebar-link ${active ? 'active' : ''}`}
    >
        {icon}
        <span>{label}</span>
    </Link>
);

const Dashboard = () => {
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
                    <SidebarLink icon={<LayoutDashboard size={20} />} label="Overview" to="/dashboard" active />
                    <SidebarLink icon={<PlusCircle size={20} />} label="Creation Suite" to="/create" />
                    <SidebarLink icon={<Code size={20} />} label="AI Utilities" to="/builder" />
                    <SidebarLink icon={<Users size={20} />} label="Team Hub" to="/team" />
                    <SidebarLink icon={<Clock size={20} />} label="History" to="/history" />
                </nav>

                <div className="sidebar-footer">
                    <SidebarLink icon={<Settings size={20} />} label="Settings" to="/settings" />
                    <button className="btn-logout">
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
                            placeholder="Search tools, projects, or docs..."
                        />
                    </div>

                    <div className="header-actions">
                        <div className="credit-badge">
                            <Zap size={16} fill="currentColor" />
                            <span>842 Credits</span>
                        </div>
                        <div className="user-profile">
                            <div className="user-info">
                                <p className="user-name">Alex Rivera</p>
                                <p className="user-role">Science Club Lead</p>
                            </div>
                            <div className="user-avatar">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Alex`} alt="avatar" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* Welcome Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="welcome-banner"
                    >
                        <div className="welcome-banner-content">
                            <h1>Good morning, Alex!</h1>
                            <p>Your team's AI capacity is at 94%. Ready to build something extraordinary today?</p>
                            <Link to="/create" className="btn-create-banner">
                                <PlusCircle size={20} />
                                Create New Project
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="stats-row">
                        {[
                            { label: 'Weekly Generations', value: '142', icon: <Sparkles color="#eab308" />, trend: '+12%' },
                            { label: 'Cloud Storage', value: '1.2 GB', icon: <ImageIcon color="#0ea5e9" />, trend: 'Healthy' },
                            { label: 'Team Members', value: '8', icon: <Users color="#22c55e" />, trend: 'Active' },
                            { label: 'AI Savings', value: '$840', icon: <CreditCard color="#7c3aed" />, trend: 'Lifetime' }
                        ].map((stat, i) => (
                            <div key={i} className="dashboard-stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon-wrapper">{stat.icon}</div>
                                    <span className="stat-trend">{stat.trend}</span>
                                </div>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="dashboard-grid">
                        {/* Recent Creations */}
                        <div className="creations-section">
                            <div className="section-title-row">
                                <h2>Recent Creations</h2>
                                <button className="btn-view-all">
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>
                            <div className="creations-grid">
                                {[
                                    { title: "Club Fest Poster v2", type: "Image", time: "2h ago", color: "rgba(59, 130, 246, 0.1)" },
                                    { title: "AI Research Script", type: "Code", time: "5h ago", color: "rgba(168, 85, 247, 0.1)" },
                                    { title: "Event Announcement", type: "Video", time: "1d ago", color: "rgba(236, 72, 153, 0.1)" },
                                    { title: "Workshop Curriculum", type: "Text", time: "2d ago", color: "rgba(34, 197, 94, 0.1)" }
                                ].map((item, i) => (
                                    <div key={i} className="creation-card">
                                        <div className="creation-preview" style={{ background: item.color }}>
                                            {item.type === 'Image' && <ImageIcon size={32} color="#3b82f6" />}
                                            {item.type === 'Code' && <Code size={32} color="#a855f7" />}
                                            {item.type === 'Video' && <Play size={32} color="#ec4899" />}
                                            {item.type === 'Text' && <FileText size={32} color="#22c55e" />}
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p className="creation-meta">{item.type} • {item.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions Side */}
                        <div className="side-column">
                            <div className="section-title-row">
                                <h2>Quick Creation</h2>
                            </div>
                            <div className="quick-tools-list">
                                {[
                                    { label: "Post Generator", icon: <ImageIcon size={18} />, color: "#3b82f6" },
                                    { label: "Code Utility", icon: <Code size={18} />, color: "#a855f7" },
                                    { label: "Script Writer", icon: <FileText size={18} />, color: "#22c55e" },
                                    { label: "AI Narrator", icon: <Play size={18} />, color: "#ec4899" }
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

                            <div className="activity-feed">
                                <h3>
                                    <div className="online-dot"></div>
                                    Team Activity
                                </h3>
                                <div className="activity-list">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="activity-item">
                                            <div className="avatar"></div>
                                            <div className="activity-text">
                                                <p><b>Sarah Chen</b> edited <span style={{ color: 'var(--primary-color)' }}>Project Alpha</span></p>
                                                <span className="activity-time">12 minutes ago</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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

export default Dashboard;
