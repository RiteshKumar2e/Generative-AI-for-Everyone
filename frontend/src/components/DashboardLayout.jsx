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
    Zap
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

    // Role protection - though routes should be protected too
    React.useEffect(() => {
        if (role !== 'club' && role !== 'admin') {
            // If student tries to access club layout, redirect them
            if (location.pathname.startsWith('/club-dashboard') || ['/team', '/events', '/analytics', '/history', '/settings'].includes(location.pathname)) {
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
                    <SidebarLink
                        icon={<PlusCircle size={20} />}
                        label="Creation Suite"
                        to="/create"
                        active={location.pathname === '/create'}
                    />
                    <SidebarLink
                        icon={<BarChart3 size={20} />}
                        label="Analytics"
                        to="/analytics"
                        active={location.pathname === '/analytics'}
                    />
                    <SidebarLink
                        icon={<Clock size={20} />}
                        label="History"
                        to="/history"
                        active={location.pathname === '/history'}
                    />
                </nav>

                <div className="sidebar-footer">
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
                    navigate('/login');
                }}
            />
        </div>
    );
};

export default DashboardLayout;
