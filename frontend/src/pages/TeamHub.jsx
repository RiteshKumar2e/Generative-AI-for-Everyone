import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Shield, MoreVertical, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const TeamHub = () => {
    const teamMembers = [];

    return (
        <div style={{ padding: '2rem' }}>
            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}>Team Hub</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your club members and permissions</p>
                </div>
                <button className="btn-create-banner" style={{ border: 'none', cursor: 'pointer' }}>
                    <UserPlus size={20} />
                    Invite Member
                </button>
            </div>

            <div className="stats-grid" style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="stat-icon" style={{ padding: '10px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                        <Users size={24} />
                    </div>
                    <div className="stat-info">
                        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>0</h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Members</p>
                    </div>
                </div>
                <div className="stat-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="stat-icon" style={{ padding: '10px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                        <Shield size={24} />
                    </div>
                    <div className="stat-info">
                        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>0</h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Admins/Leads</p>
                    </div>
                </div>
            </div>

            <div className="table-container" style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                {teamMembers.length > 0 ? (
                    <>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ flex: 1, position: 'relative' }}>
                                <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                                <input
                                    type="text"
                                    placeholder="Search members..."
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none' }}
                                />
                            </div>
                            <button style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                                <Filter size={20} />
                                Filter
                            </button>
                        </div>

                        <div className="members-list">
                            {teamMembers.map((member) => (
                                <motion.div
                                    key={member.id}
                                    whileHover={{ x: 5 }}
                                    style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-color)', gap: '1rem' }}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <img src={member.avatar} alt={member.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderRadius: '50%', background: member.status === 'online' ? '#22c55e' : '#94a3b8', border: '2px solid white' }}></div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0, fontWeight: 700 }}>{member.name}</h4>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{member.role}</p>
                                    </div>
                                    <div style={{ flex: 1, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        {member.email}
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}><Mail size={18} /></button>
                                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}><MoreVertical size={18} /></button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--slate-50)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--slate-400)' }}>
                            <Users size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>No team members found</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start building your club's core community today.</p>
                        <button className="btn-create-banner" style={{ border: 'none', cursor: 'pointer' }}>
                            <UserPlus size={18} />
                            Invite First Member
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamHub;
