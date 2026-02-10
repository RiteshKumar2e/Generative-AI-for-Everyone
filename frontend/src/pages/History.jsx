import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Search, Filter, ArrowUpRight, CheckCircle2, AlertCircle, FileText, Trash2, XCircle, Zap } from 'lucide-react';
import '../styles/Dashboard.css';

const History = () => {
    const [activities, setActivities] = useState(() => {
        const saved = localStorage.getItem('app_activity_history');
        if (saved) return JSON.parse(saved);

        // Default demo data only for first time
        const demoData = [
            { id: 1, type: 'Event', action: 'Created new event: AI Summit', user: 'Club Lead', time: '2 hours ago', status: 'success' },
            { id: 2, type: 'Member', action: 'Approved 3 membership requests', user: 'Alex Rivera', time: '5 hours ago', status: 'success' },
            { id: 3, type: 'Creation', action: 'Generated Marketing Banner #12', user: 'Club Lead', time: 'Yesterday', status: 'success' },
            { id: 4, type: 'Settings', action: 'Updated club description', user: 'Sarah Chen', time: '2 days ago', status: 'warning' },
            { id: 5, type: 'Role', action: 'Changed Marcus Jo to Moderator', user: 'Club Lead', time: '3 days ago', status: 'success' },
            { id: 6, type: 'Creation', action: 'AI Content Generation: Newsletter', user: 'Emma Wilson', time: '4 days ago', status: 'success' },
        ];
        return demoData;
    });

    const [searchTerm, setSearchTerm] = useState('');

    // Sync to localStorage
    React.useEffect(() => {
        localStorage.setItem('app_activity_history', JSON.stringify(activities));
    }, [activities]);

    const deleteOne = (id) => {
        setActivities(prev => prev.filter(activity => activity.id !== id));
    };

    const clearAll = () => {
        if (window.confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
            setActivities([]);
            localStorage.setItem('app_activity_history', JSON.stringify([]));
        }
    };

    const filteredActivities = activities.filter(act =>
        act.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '2rem' }}>
            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}>Activity History</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Audit log of all actions taken in your club workspace</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={clearAll}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '12px',
                            border: '1px solid #fee2e2',
                            background: '#fef2f2',
                            color: '#dc2626',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        <Trash2 size={18} />
                        Clear All
                    </button>
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
            </div>

            <div className="filters-row" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search logs..."
                        style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                </div>
                <button style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                    <Filter size={20} />
                    All Types
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '24px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                <AnimatePresence mode='popLayout'>
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((activity, idx) => (
                            <motion.div
                                key={activity.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1.25rem 2rem',
                                    borderBottom: idx === filteredActivities.length - 1 ? 'none' : '1px solid var(--border-color)',
                                    gap: '1.5rem',
                                    background: 'white'
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
                                    {activity.type === 'Creation' ? <Zap size={20} /> : <Clock size={20} />}
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

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {activity.status === 'success' ? (
                                            <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                                        ) : (
                                            <AlertCircle size={18} style={{ color: '#f59e0b' }} />
                                        )}
                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: activity.status === 'success' ? '#10b981' : '#f59e0b' }}>
                                            {activity.status === 'success' ? 'Completed' : 'Pending'}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => deleteOne(activity.id)}
                                        style={{ background: 'transparent', border: 'none', padding: '0.5rem', cursor: 'pointer', color: '#94a3b8', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ textAlign: 'center', padding: '5rem 0' }}
                        >
                            <XCircle size={48} style={{ color: 'var(--slate-200)', marginBottom: '1rem' }} />
                            <h3 style={{ margin: 0, fontWeight: 800, color: 'var(--text-main)' }}>History Clear</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Zero activity logs found for your workspace.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default History;
