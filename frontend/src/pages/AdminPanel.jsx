import React, { useState } from 'react';
import {
    BarChart3,
    Users,
    ShieldAlert,
    Settings,
    Search,
    Filter,
    MoreHorizontal,
    ChevronLeft,
    ArrowUpRight,
    TrendingUp,
    Activity,
    LogOut,
    Brain
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../components/LogoutModal';
import '../styles/AdminPanel.css';
import '../styles/Workspace.css'; // Reusing header/back button styles if possible, but Admin panel has its own header-like structure

const AdminPanel = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole') || 'student';
    const [selectedTab, setSelectedTab] = useState('students');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All Status');

    const students = [];

    const clubs = [];

    const getFilteredData = () => {
        const baseData = selectedTab === 'students' ? students : clubs;
        return baseData.filter(item => {
            const matchesSearch = (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.club && item.club.toLowerCase().includes(searchTerm.toLowerCase())));

            const matchesFilter = activeFilter === 'All Status' || item.status === activeFilter;

            return matchesSearch && matchesFilter;
        });
    };

    const filteredData = getFilteredData();

    React.useEffect(() => {
        if (role === 'student') {
            navigate('/dashboard');
        } else if (role === 'club') {
            navigate('/club-dashboard');
        }
    }, [role, navigate]);

    if (role === 'student' || role === 'club') {
        return null;
    }

    return (
        <div className="admin-wrapper">
            {/* Header */}
            <header className="workspace-header">
                <div className="workspace-nav-container">
                    <div className="nav-left">
                        <Link to="/" className="logo-box" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div className="icon-logo" style={{
                                background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
                                padding: '8px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
                            }}>
                                <Brain size={22} color="white" fill="white" />
                            </div>
                            <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-0.02em' }}>
                                Campus<span style={{ color: '#6366f1' }}>GenAI</span>
                            </span>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="badge-green" style={{ background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>
                            <div className="pulse-dot" />
                            System Live
                        </div>
                        <div className="user-profile-badge">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Admin`} alt="admin" />
                            <div className="info">
                                <span className="name">Ritesh Kumar</span>
                                <span className="role">Root Admin</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowLogoutModal(true)}
                            className="btn-logout-circle"
                            title="Logout"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </header>

            <div className="dashboard-content">
                {/* Visual Stats Recap */}
                <div className="admin-stats-row">
                    <div className="admin-stat-banner">
                        <div className="banner-info">
                            <p className="banner-label">Growth Tracking</p>
                            <h3 className="banner-value">Neutral</h3>
                            <p className="banner-sub">No new user registrations recorded this period</p>
                        </div>
                        <div className="banner-icon-box">
                            <TrendingUp size={48} />
                        </div>
                    </div>

                    <div className="admin-stat-mini-grid">
                        <div className="mini-card">
                            <Users size={20} />
                            <div className="v">0</div>
                            <div className="l">Total Users</div>
                        </div>
                        <div className="mini-card">
                            <Activity size={20} />
                            <div className="v">0%</div>
                            <div className="l">Active Rate</div>
                        </div>
                    </div>
                </div>

                {/* Main Management Section */}
                <div className="management-container">
                    <div className="management-sidebar">
                        <button
                            className={`nav-tab ${selectedTab === 'students' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('students')}
                        >
                            <Users size={20} />
                            <span>Student Ecosystem</span>
                        </button>
                        <button
                            className={`nav-tab ${selectedTab === 'clubs' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('clubs')}
                        >
                            <ShieldAlert size={20} />
                            <span>Club Lead Network</span>
                        </button>

                        <div className="sidebar-divider" />

                        <div className="sidebar-group">
                            <p className="group-label">Quick Actions</p>
                            <button className="sidebar-action-btn"><BarChart3 size={16} /> Global Reports</button>
                            <button className="sidebar-action-btn"><Settings size={16} /> System Config</button>
                        </div>
                    </div>

                    <div className="management-main">
                        <div className="main-header">
                            <div className="title-group">
                                <h2>{selectedTab === 'students' ? 'Student Oversight' : 'Club Lead Management'}</h2>
                                <p>Manage permissions, credits, and visibility across the campus</p>
                            </div>
                            <div className="header-tools">
                                <div className="search-box-modern">
                                    <Search size={18} />
                                    <input
                                        type="text"
                                        placeholder={`Search ${selectedTab}...`}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <select
                                    className="filter-pill"
                                    value={activeFilter}
                                    onChange={(e) => setActiveFilter(e.target.value)}
                                    style={{ outline: 'none', appearance: 'none', cursor: 'pointer' }}
                                >
                                    <option value="All Status">All Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Restricted">Restricted</option>
                                </select>
                            </div>
                        </div>

                        <div className="data-table-wrapper">
                            {filteredData.length > 0 ? (
                                <table className="modern-admin-table">
                                    <thead>
                                        {selectedTab === 'students' ? (
                                            <tr>
                                                <th>Student Details</th>
                                                <th>Department</th>
                                                <th>AI Credit Balance</th>
                                                <th>Usage Level</th>
                                                <th>Account Status</th>
                                                <th></th>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <th>Lead Details</th>
                                                <th>Managing Club</th>
                                                <th>Total Members</th>
                                                <th>Engagement</th>
                                                <th>Org Status</th>
                                                <th></th>
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody>
                                        {selectedTab === 'students' ? (
                                            filteredData.map(s => (
                                                <tr key={s.id}>
                                                    <td>
                                                        <div className="user-info-cell">
                                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${s.name}`} alt="" />
                                                            <div>
                                                                <div className="n">{s.name}</div>
                                                                <div className="e">{s.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="dept-cell">{s.dept}</td>
                                                    <td className="credit-cell"><span>{s.credits}</span>cr</td>
                                                    <td>
                                                        <div className={`usage-indicator usage-${s.activity.toLowerCase()}`}>
                                                            {s.activity}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`status-tag st-${s.status.toLowerCase()}`}>
                                                            {s.status}
                                                        </span>
                                                    </td>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <button className="row-action-btn"><MoreHorizontal size={18} /></button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            filteredData.map(c => (
                                                <tr key={c.id}>
                                                    <td>
                                                        <div className="user-info-cell">
                                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.name}`} alt="" />
                                                            <div>
                                                                <div className="n">{c.name}</div>
                                                                <div className="e">{c.role}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="club-cell">
                                                        <div className="club-badge">{c.club}</div>
                                                    </td>
                                                    <td className="member-cell">{c.members} Members</td>
                                                    <td>
                                                        <div className="engagement-track">
                                                            <div className="track-bar" style={{ width: c.activity }}></div>
                                                            <span>{c.activity}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`status-tag st-${c.status.toLowerCase()}`}>
                                                            {c.status}
                                                        </span>
                                                    </td>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <button className="row-action-btn"><MoreHorizontal size={18} /></button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        background: '#f1f5f9',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        color: '#94a3b8'
                                    }}>
                                        {selectedTab === 'students' ? <Users size={40} /> : <ShieldAlert size={40} />}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b' }}>
                                        No results match your criteria
                                    </h3>
                                    <p style={{ color: '#64748b', maxWidth: '300px', margin: '0 auto' }}>
                                        Try adjusting your search or status filter to find the {selectedTab === 'students' ? 'students' : 'leads'} you're looking for.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={() => {
                    localStorage.clear();
                    navigate('/');
                }}
            />
        </div>
    );
};

export default AdminPanel;
