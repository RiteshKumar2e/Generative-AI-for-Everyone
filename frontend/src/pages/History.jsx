import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Search, Filter, ArrowUpRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import '../styles/Dashboard.css';

const History = () => {
    const activities = [
        { id: 1, type: 'Event', action: 'Created new event: AI Summit', user: 'Club Lead', time: '2 hours ago', status: 'success' },
        { id: 2, type: 'Member', action: 'Approved 3 membership requests', user: 'Alex Rivera', time: '5 hours ago', status: 'success' },
        { id: 3, type: 'Creation', action: 'Generated Marketing Banner #12', user: 'Club Lead', time: 'Yesterday', status: 'success' },
        { id: 4, type: 'Settings', action: 'Updated club description', user: 'Sarah Chen', time: '2 days ago', status: 'warning' },
        { id: 5, type: 'Role', action: 'Changed Marcus Jo to Moderator', user: 'Club Lead', time: '3 days ago', status: 'success' },
        { id: 6, type: 'Creation', action: 'AI Content Generation: Newsletter', user: 'Emma Wilson', time: '4 days ago', status: 'success' },
    ];

    return (
        <div className="dashboard-wrapper">
            <main className="dashboard-main" style={{ marginLeft: 0, width: '100%', padding: '2rem' }}>
                <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}>Activity History</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Audit log of all actions taken in your club workspace</p>
                    </div>
                    <button style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>
                        <FileText size={20} />
                        Export Log
                    </button>
                </div>

                <div className="filters-row" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                        <input
                            type="text"
                            placeholder="Search logs..."
                            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }}
                        />
                    </div>
                    <button style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                        <Filter size={20} />
                        All Types
                    </button>
                </div>

                <div style={{ background: 'white', borderRadius: '20px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1.25rem 2rem',
                                borderBottom: idx === activities.length - 1 ? 'none' : '1px solid var(--border-color)',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'var(--slate-50)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)'
                            }}>
                                <Clock size={20} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-color)', background: 'var(--slate-100)', padding: '2px 8px', borderRadius: '4px' }}>
                                        {activity.type}
                                    </span>
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{activity.action}</span>
                                </div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    by <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{activity.user}</span> • {activity.time}
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {activity.status === 'success' ? (
                                    <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                                ) : (
                                    <AlertCircle size={18} style={{ color: '#f59e0b' }} />
                                )}
                                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: activity.status === 'success' ? '#10b981' : '#f59e0b' }}>
                                    {activity.status === 'success' ? 'Completed' : 'Pending'}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default History;
