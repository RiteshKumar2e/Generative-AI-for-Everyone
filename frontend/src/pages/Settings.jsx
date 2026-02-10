import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Shield, User, Globe, Palette, Save } from 'lucide-react';
import '../styles/Dashboard.css';

const Settings = () => {
    const [activeSection, setActiveSection] = useState('profile');

    const sections = [
        { id: 'profile', label: 'Profile Settings', icon: <User size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
        { id: 'privacy', label: 'Privacy & Security', icon: <Shield size={20} /> },
        { id: 'appearance', label: 'Appearance', icon: <Palette size={20} /> },
        { id: 'general', label: 'General Info', icon: <Globe size={20} /> },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'Outfit' }}>Settings</h1>
                <p style={{ color: 'var(--text-muted)' }}>Configure your workspace and personal preferences</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem' }}>
                {/* Sidebar Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.5rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: activeSection === section.id ? 'var(--primary-color)' : 'transparent',
                                color: activeSection === section.id ? 'white' : 'var(--text-muted)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                        >
                            {section.icon}
                            <span>{section.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        background: 'white',
                        padding: '2.5rem',
                        borderRadius: '30px',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                    }}
                >
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {sections.find(s => s.id === activeSection).label}
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'block', fontSize: '0.9rem' }}>Workspace Name</label>
                            <input
                                type="text"
                                defaultValue="GenAI Innovation Club"
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--slate-50)' }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'block', fontSize: '0.9rem' }}>Contact Email</label>
                            <input
                                type="email"
                                defaultValue="contact@genaiclub.com"
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--slate-50)' }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'block', fontSize: '0.9rem' }}>Bio / Description</label>
                            <textarea
                                rows="4"
                                defaultValue="The frontier of AI at campus."
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--slate-50)', resize: 'none' }}
                            />
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1rem 0' }} />

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button style={{ padding: '0.8rem 2rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                            <button style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'var(--primary-color)',
                                color: 'white',
                                fontWeight: 700,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;
