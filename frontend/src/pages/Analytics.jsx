import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const Analytics = () => {
    const stats = [
        { label: 'Total Engagement', value: '2.4k', change: '+12%', trendingUp: true, icon: <Activity size={24} /> },
        { label: 'Active Members', value: '158', change: '+5%', trendingUp: true, icon: <Users size={24} /> },
        { label: 'Events Hosted', value: '12', change: '-2%', trendingUp: false, icon: <Calendar size={24} /> },
        { label: 'Growth Rate', value: '18.4%', change: '+3.2%', trendingUp: true, icon: <TrendingUp size={24} /> },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}>Analytics Overview</h1>
                <p style={{ color: 'var(--text-muted)' }}>Track your club's performance and growth metrics</p>
            </div>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="stat-card"
                        style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ p: '10px', borderRadius: '12px', background: 'var(--slate-100)', color: 'var(--primary-color)' }}>
                                {stat.icon}
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.2rem',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                color: stat.trendingUp ? '#10b981' : '#ef4444'
                            }}>
                                {stat.trendingUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                {stat.change}
                            </div>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{stat.value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--border-color)', height: '400px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ margin: 0, fontWeight: 700 }}>Engagement Over Time</h3>
                        <select style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }}>
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div style={{ height: '280px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px', paddingBottom: '20px' }}>
                        {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95, 80, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                style={{
                                    flex: 1,
                                    background: i === 11 ? 'var(--primary-color)' : 'var(--slate-200)',
                                    borderRadius: '6px 6px 0 0',
                                    position: 'relative'
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ margin: 0, fontWeight: 700, marginBottom: '2rem' }}>Traffic Sources</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { name: 'Direct Visit', value: '45%', color: 'var(--primary-color)' },
                            { name: 'Social Media', value: '25%', color: '#ec4899' },
                            { name: 'Referral', value: '20%', color: '#f59e0b' },
                            { name: 'Other', value: '10%', color: '#94a3b8' }
                        ].map((source, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: 600 }}>{source.name}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>{source.value}</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--slate-100)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: source.value }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        style={{ height: '100%', background: source.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
