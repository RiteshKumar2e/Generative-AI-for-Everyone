import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Settings as SettingsIcon,
    Bell,
    Shield,
    User,
    Globe,
    Palette,
    Save,
    Camera,
    CheckCircle2,
    RefreshCw
} from 'lucide-react';
import '../styles/Dashboard.css';

const Settings = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Profile State
    const [profile, setProfile] = useState({
        name: localStorage.getItem('userName') || 'Campus User',
        email: localStorage.getItem('userEmail') || 'user@campusgenai.edu',
        bio: 'AI Enthusiast & Content Creator',
        avatarSeed: localStorage.getItem('userName') || 'custom-seed',
        role: localStorage.getItem('userRole') || 'student'
    });

    const sections = [
        { id: 'profile', label: 'My Profile', icon: <User size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
        { id: 'privacy', label: 'Security', icon: <Shield size={20} /> },
        { id: 'appearance', label: 'Theme', icon: <Palette size={20} /> },
    ];

    const handleSave = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            localStorage.setItem('userName', profile.name);
            localStorage.setItem('userEmail', profile.email);
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1200);
    };

    const refreshAvatar = () => {
        setProfile(prev => ({ ...prev, avatarSeed: Math.random().toString(36).substring(7) }));
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div className="section-header" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'Outfit', margin: 0, letterSpacing: '-0.02em' }}>
                        Account Settings
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                        Manage your profile, preferences, and security settings
                    </p>
                </div>

                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#22c55e', fontWeight: 700, background: '#f0fdf4', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid #bbf7d0' }}
                        >
                            <CheckCircle2 size={18} />
                            Success! Your profile has been updated.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', alignItems: 'start' }}>
                {/* Navigation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'sticky', top: '2rem' }}>
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem 1.5rem',
                                borderRadius: '16px',
                                border: 'none',
                                background: activeSection === section.id ? 'var(--primary-color)' : 'white',
                                color: activeSection === section.id ? 'white' : 'var(--text-muted)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: activeSection === section.id ? '0 10px 20px -5px rgba(99, 102, 241, 0.4)' : 'none',
                                textAlign: 'left'
                            }}
                        >
                            {section.icon}
                            <span>{section.label}</span>
                        </button>
                    ))}
                </div>

                {/* Main Section */}
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'white',
                        padding: '3.5rem',
                        borderRadius: '32px',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)'
                    }}
                >
                    {activeSection === 'profile' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {/* Avatar Section */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        width: '140px',
                                        height: '140px',
                                        borderRadius: '40px',
                                        background: '#f1f5f9',
                                        overflow: 'hidden',
                                        border: '4px solid white',
                                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                                    }}>
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.avatarSeed}`}
                                            alt="Avatar"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <button
                                        onClick={refreshAvatar}
                                        style={{
                                            position: 'absolute',
                                            bottom: '-5px',
                                            right: '-5px',
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            border: 'none',
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                                        }}
                                    >
                                        <Camera size={20} />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>Profile Photo</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
                                        Click the camera icon to generate a new AI persona. We use unique seeds to create your identity.
                                    </p>
                                    <button
                                        onClick={refreshAvatar}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--primary-color)',
                                            fontWeight: 700,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            cursor: 'pointer',
                                            padding: 0,
                                            marginTop: '0.5rem'
                                        }}
                                    >
                                        <RefreshCw size={16} />
                                        Randomize Avatar
                                    </button>
                                </div>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

                            {/* Form Fields */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="form-group">
                                    <label style={{ fontWeight: 800, marginBottom: '0.75rem', display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                                        placeholder="Your full name"
                                        style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '1rem', fontWeight: 600, transition: 'all 0.2s', outline: 'none' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 800, marginBottom: '0.75rem', display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={profile.email}
                                        onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="name@example.com"
                                        style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '1rem', fontWeight: 600, outline: 'none' }}
                                    />
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label style={{ fontWeight: 800, marginBottom: '0.75rem', display: 'block', color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Bio & Headline
                                    </label>
                                    <textarea
                                        rows="3"
                                        value={profile.bio}
                                        onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                                        placeholder="Tell us about yourself..."
                                        style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '1rem', fontWeight: 600, resize: 'none', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.25rem', marginTop: '1rem' }}>
                                <button style={{ padding: '1.1rem 2.5rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: 'white', fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s', color: 'var(--text-muted)' }}>
                                    Reset
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    style={{
                                        padding: '1.1rem 2.5rem',
                                        borderRadius: '16px',
                                        border: 'none',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.4)',
                                        transition: 'all 0.2s',
                                        opacity: isSaving ? 0.7 : 1
                                    }}
                                >
                                    {isSaving ? <RefreshCw size={20} className="animate-spin" /> : <Save size={20} />}
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </div>
                    )}

                    {activeSection !== 'profile' && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                <Globe size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem' }}>Coming Soon</h3>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
                                This section is currently under development. Stay tuned for updates!
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 2s linear infinite;
                }
                input:focus, textarea:focus {
                    border-color: var(--primary-color) !important;
                    background: white !important;
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Settings;
