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
    CreditCard,
    Search,
    ChevronRight,
    Sparkles,
    Award,
    Play,
    Image as ImageIcon,
    FileText,
    Code
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../components/LogoutModal';
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
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole') || 'student';
    const userName = localStorage.getItem('userName') || 'User';

    React.useEffect(() => {
        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'club') {
            navigate('/club-dashboard');
        }
    }, [role, navigate]);

    if (role === 'admin' || role === 'club') {
        return null;
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
            {/* Header */}
            <header className="dashboard-header-simple">
                <div className="header-title-group">
                    <h1 className="header-title">Student Overview</h1>
                    <p className="header-subtitle">Welcome back to your workspace, {userName}</p>
                </div>
                <div className="header-actions">
                    <div className="search-bar-modern">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search tools, projects..."
                        />
                    </div>
                    <div className="credit-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', padding: '0.6rem 1rem', borderRadius: '12px', fontWeight: 700 }}>
                        <Zap size={16} fill="currentColor" />
                        <span>842 Credits</span>
                    </div>
                </div>
            </header>

            <div className="dashboard-content" style={{ padding: 0 }}>
                {/* Welcome Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="welcome-banner"
                    style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)' }}
                >
                    <div className="welcome-banner-content">
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Ready to Build, {userName}?</h1>
                        <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>Your AI capacity is at 94%. What will you create today?</p>
                        <Link to="/create" className="btn-create-banner" style={{ textDecoration: 'none' }}>
                            <PlusCircle size={20} />
                            Launch Creation Suite
                        </Link>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {[
                        { label: 'Weekly Generations', value: '142', icon: <Sparkles size={24} />, color: '#eab308' },
                        { label: 'Cloud Storage', value: '1.2 GB', icon: <ImageIcon size={24} />, color: '#0ea5e9' },
                        { label: 'AI Savings', value: '$840', icon: <CreditCard size={24} />, color: '#7c3aed' },
                        { label: 'System Rank', value: 'Top 5%', icon: <Award size={24} />, color: '#f43f5e' }
                    ].map((stat, i) => (
                        <div key={i} className="stat-card-premium">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div style={{ padding: '0.75rem', borderRadius: '16px', background: `${stat.color}15`, color: stat.color }}>
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 0.25rem' }}>{stat.value}</h3>
                                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{stat.label}</p>
                            </div>
                            <div className="stat-progress-bar" style={{ background: stat.color }} />
                        </div>
                    ))}
                </div>

                <div className="dashboard-grid">
                    {/* Recent Creations */}
                    <div className="creations-section">
                        <div className="section-title-row">
                            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800 }}>Recent Creations</h2>
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
                                <div key={i} className="creation-card" style={{ borderRadius: '24px', border: '1px solid var(--border-color)', padding: '1.25rem' }}>
                                    <div className="creation-preview" style={{ background: item.color, borderRadius: '16px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                                        {item.type === 'Image' && <ImageIcon size={48} color="#3b82f6" />}
                                        {item.type === 'Code' && <Code size={48} color="#a855f7" />}
                                        {item.type === 'Video' && <Play size={48} color="#ec4899" />}
                                        {item.type === 'Text' && <FileText size={48} color="#22c55e" />}
                                    </div>
                                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h4>
                                    <p className="creation-meta" style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.type} • {item.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions Side */}
                    <div className="side-column">
                        <div className="section-title-row">
                            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800 }}>Quick Creation</h2>
                        </div>
                        <div className="quick-tools-list" style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                { label: "Post Generator", icon: <ImageIcon size={20} />, color: "#3b82f6" },
                                { label: "Code Utility", icon: <Code size={20} />, color: "#a855f7" },
                                { label: "Script Writer", icon: <FileText size={20} />, color: "#22c55e" },
                                { label: "AI Narrator", icon: <Play size={20} />, color: "#ec4899" }
                            ].map((tool, i) => (
                                <button key={i} className="tool-button" style={{ background: 'white', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    <div className="tool-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div className="tool-icon-box" style={{ color: tool.color, padding: '0.5rem', background: `${tool.color}10`, borderRadius: '12px' }}>{tool.icon}</div>
                                        <span style={{ fontWeight: 700, fontSize: '1rem' }}>{tool.label}</span>
                                    </div>
                                    <ChevronRight size={18} color="var(--text-muted)" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
