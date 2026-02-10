import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Calendar,
    PlusCircle,
    BarChart3,
    Clock,
    Settings,
    LogOut,
    Zap,
    User
} from 'lucide-react';
import LogoutModal from './LogoutModal';
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

const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const role = localStorage.getItem('userRole') || 'student';

    // Simplified protection - just ensure logged in
    React.useEffect(() => {
        if (!role) {
            navigate('/login');
            return;
        }

        // Only block cross-role management pages
        if (role === 'student') {
            const clubOnlyPaths = ['/club-dashboard', '/team', '/events', '/analytics'];
            if (clubOnlyPaths.some(path => location.pathname.startsWith(path))) {
                navigate('/dashboard');
            }
        }
    }, [role, navigate, location.pathname]);

    return (
        <div className="dashboard-wrapper">
            {/* Persistence Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon">
                        <Zap size={24} />
                    </div>
                    <span>Campus<span style={{ color: 'var(--primary-color)' }}>GenAI</span></span>
                </div>

                <nav className="sidebar-nav">
                    {/* Common / Role Specific Overview */}
                    {role === 'club' ? (
                        <>
                            <SidebarLink
                                icon={<LayoutDashboard size={20} />}
                                label="Overview"
                                to="/club-dashboard"
                                active={location.pathname === '/club-dashboard'}
                            />
                            <SidebarLink
                                icon={<Users size={20} />}
                                label="Team Hub"
                                to="/team"
                                active={location.pathname === '/team'}
                            />
                            <SidebarLink
                                icon={<Calendar size={20} />}
                                label="Events"
                                to="/events"
                                active={location.pathname === '/events'}
                            />
                        </>
                    ) : (
                        <SidebarLink
                            icon={<LayoutDashboard size={20} />}
                            label="Overview"
                            to="/dashboard"
                            active={location.pathname === '/dashboard'}
                        />
                    )}

                    {/* Creation Suite is shared */}
                    <SidebarLink
                        icon={<PlusCircle size={20} />}
                        label="Creation Suite"
                        to="/create"
                        active={location.pathname === '/create'}
                    />

                    {/* Role Specific Tools */}
                    {role === 'student' ? (
                        <SidebarLink
                            icon={<Zap size={20} />}
                            label="AI Utilities"
                            to="/builder"
                            active={location.pathname === '/builder'}
                        />
                    ) : (
                        <SidebarLink
                            icon={<BarChart3 size={20} />}
                            label="Analytics"
                            to="/analytics"
                            active={location.pathname === '/analytics'}
                        />
                    )}

                    {/* Shared Audit/History */}
                    <SidebarLink
                        icon={<Clock size={20} />}
                        label="History"
                        to="/history"
                        active={location.pathname === '/history'}
                    />
                </nav>

                <div className="sidebar-footer">
                    <SidebarLink
                        icon={<User size={20} />}
                        label="My Profile"
                        to="/settings"
                        active={location.pathname === '/settings'}
                    />
                    <SidebarLink
                        icon={<Settings size={20} />}
                        label="Settings"
                        to="/settings"
                        active={location.pathname === '/settings'}
                    />
                    <button className="btn-logout" onClick={() => setShowLogoutModal(true)}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main" style={{ flex: 1, overflowY: 'auto' }}>
                <Outlet />
            </main>

            {/* Global Logout Modal */}
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

export default DashboardLayout;
