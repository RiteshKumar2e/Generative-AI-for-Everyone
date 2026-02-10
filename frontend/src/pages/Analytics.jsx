import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const Analytics = () => {
    const stats = [
        { label: 'Total Engagement', value: '0', change: '0%', trendingUp: true, icon: <Activity size={24} /> },
        { label: 'Active Members', value: '0', change: '0%', trendingUp: true, icon: <Users size={24} /> },
        { label: 'Events Hosted', value: '0', change: '0%', trendingUp: true, icon: <Calendar size={24} /> },
        { label: 'Growth Rate', value: '0%', change: '0%', trendingUp: true, icon: <TrendingUp size={24} /> },
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
                        className="stat-card"
                        style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ p: '10px', borderRadius: '12px', background: 'var(--slate-100)', color: 'var(--primary-color)' }}>
                                {stat.icon}
                            </div>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.25rem' }}>{stat.value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--border-color)', height: '400px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <h3 style={{ margin: 0, fontWeight: 700 }}>Engagement Over Time</h3>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', background: '#f8fafc', borderRadius: '16px' }}>
                        <Activity size={32} color="var(--slate-400)" />
                        <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Insufficient data to generate chart</p>
                    </div>
                </div>
                <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ margin: 0, fontWeight: 700, marginBottom: '2.5rem' }}>Traffic Sources</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', justifyContent: 'center', padding: '3rem 0' }}>
                        <BarChart3 size={32} color="var(--slate-400)" />
                        <p style={{ color: 'var(--text-muted)', fontWeight: 600, textAlign: 'center' }}>No traffic data recorded</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
