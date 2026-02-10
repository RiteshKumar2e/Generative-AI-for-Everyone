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
    Activity
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../components/LogoutModal';
import '../styles/AdminPanel.css';
import '../styles/Workspace.css'; // Reusing header/back button styles if possible, but Admin panel has its own header-like structure

const AdminPanel = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('userRole') || 'student';
    const [showLogoutModal, setShowLogoutModal] = useState(false);

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
                        <Link to="/" className="btn-back">
                            <ChevronLeft size={20} />
                        </Link>
                        <h1 className="workspace-title">Institutional Admin</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="badge-green" style={{ background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>
                            System Live
                        </div>
                        <div className="user-avatar" style={{ width: '32px', height: '32px' }}>
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Admin`} alt="admin" />
                        </div>
                        <button
                            onClick={() => setShowLogoutModal(true)}
                            className="btn-back"
                            style={{
                                border: '1px solid var(--border-color)',
                                background: 'white',
                                marginLeft: '0.5rem',
                                padding: '0.5rem',
                                cursor: 'pointer'
                            }}
                            title="Logout"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="dashboard-content">
                <div className="admin-stats-grid">
                    <div className="admin-stat-card">
                        <div className="stat-bg-icon">
                            <Activity size={80} color="var(--primary-color)" />
                        </div>
                        <p className="stat-label-row">Campus Activity</p>
                        <h3 className="stat-value">12,482</h3>
                        <div className="stat-delta delta-positive">
                            <ArrowUpRight size={16} />
                            <span>18% increase this week</span>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <div className="stat-bg-icon">
                            <Users size={80} color="var(--accent-color)" />
                        </div>
                        <p className="stat-label-row">Active Clubs</p>
                        <h3 className="stat-value">42</h3>
                        <div className="stat-delta delta-neutral">
                            <TrendingUp size={16} />
                            <span>3 pending approval</span>
                        </div>
                    </div>

                    <div className="admin-stat-card">
                        <div className="stat-bg-icon">
                            <ShieldAlert size={80} color="#ef4444" />
                        </div>
                        <p className="stat-label-row">Safety Flags</p>
                        <h3 className="stat-value">0</h3>
                        <div className="stat-delta delta-neutral" style={{ color: 'var(--text-muted)' }}>
                            <span>All content within campus guidelines</span>
                        </div>
                    </div>
                </div>

                <div className="admin-section">
                    <div className="table-controls">
                        <h2>User & Role Management</h2>
                        <div className="table-actions">
                            <div className="search-bar">
                                <Search className="search-icon" size={18} />
                                <input type="text" placeholder="Search accounts..." />
                            </div>
                            <button className="btn-back" style={{ border: '1px solid var(--border-color)', background: 'white' }}>
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Department</th>
                                    <th>Credits Used</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Alex Rivera', role: 'Club Lead', dept: 'Science', credits: '1,240', status: 'Active' },
                                    { name: 'Sarah Chen', role: 'Student', dept: 'Engineering', credits: '842', status: 'Active' },
                                    { name: 'James Wilson', role: 'Admin', dept: 'Oversight', credits: '-', status: 'Super User' },
                                    { name: 'Taylor Swift', role: 'Club Lead', dept: 'Music', credits: '2,104', status: 'Restricted' }
                                ].map((user, i) => (
                                    <tr key={i}>
                                        <td>
                                            <div className="user-cell">
                                                <div className="avatar">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="user" width="32" height="32" style={{ borderRadius: '50%' }} />
                                                </div>
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td>{user.role}</td>
                                        <td>{user.dept}</td>
                                        <td style={{ fontWeight: 700, fontFamily: 'Outfit' }}>{user.credits}</td>
                                        <td>
                                            <span className={`status-pills ${user.status === 'Active' ? 'status-active' :
                                                user.status === 'Super User' ? 'status-admin' :
                                                    'status-restricted'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <button className="btn-back" style={{ padding: '0.25rem' }}>
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
