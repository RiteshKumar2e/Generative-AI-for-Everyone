import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Camera,
    CheckCircle2,
    RefreshCw,
    Mail,
    Briefcase,
    Calendar,
    Award,
    Save,
    Layout
} from 'lucide-react';
import '../styles/Dashboard.css';

const Profile = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [profile, setProfile] = useState({
        name: localStorage.getItem('userName') || 'Campus User',
        email: localStorage.getItem('userEmail') || 'user@campusgenai.edu',
        bio: 'AI Enthusiast & Lead Content Creator at Campus GenAI Club. Exploring the intersection of creativity and technology.',
        avatarSeed: localStorage.getItem('userName') || 'custom-seed',
        role: localStorage.getItem('userRole') || 'student',
        joined: 'Feb 2024',
        projects: 12,
        rank: 'Elite'
    });

    const handleSave = () => {
        setIsSaving(true);
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
            <div className="section-header" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'Outfit', margin: 0 }}>My Profile</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Personalize your presence on the platform</p>
                </div>

                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#059669', fontWeight: 700, background: '#ecfdf5', padding: '0.75rem 1.5rem', borderRadius: '16px', border: '1px solid #a7f3d0' }}
                        >
                            <CheckCircle2 size={18} />
                            Profile Updated Successfully
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '3rem', alignItems: 'start' }}>
                {/* Left Side: Identity Card */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ background: 'white', padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--border-color)', textAlign: 'center', position: 'relative' }}>
                        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 1.5rem' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '48px', overflow: 'hidden', border: '4px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.avatarSeed}`}
                                    alt="Profile Avatar"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <button
                                onClick={refreshAvatar}
                                style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '48px', height: '48px', borderRadius: '18px', background: 'var(--primary-color)', color: 'white', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.4)', transition: 'transform 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Camera size={20} />
                            </button>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 0.25rem' }}>{profile.name}</h2>
                        <p style={{ color: 'var(--text-muted)', fontWeight: 600, textTransform: 'capitalize', marginBottom: '2rem' }}>{profile.role}</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>{profile.projects}</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>PROJECTS</p>
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>{profile.rank}</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>RANK</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '32px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                            <Mail size={18} />
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{profile.email}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                            <Calendar size={18} />
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Joined {profile.joined}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                            <Briefcase size={18} />
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{profile.role === 'club' ? 'Club Leadership' : 'Innovation Track'}</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Edit Form */}
                <div style={{ background: 'white', padding: '3.5rem', borderRadius: '32px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem' }}>Full Profile Data</h3>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>Update your identity across the platform</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Display Name</label>
                                <input
                                    type="text"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontWeight: 600, fontSize: '1rem', outline: 'none' }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                                <input
                                    type="email"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontWeight: 600, fontSize: '1rem', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bio & Headline</label>
                            <textarea
                                rows="4"
                                value={profile.bio}
                                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                style={{ width: '100%', padding: '1.1rem 1.25rem', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', fontWeight: 600, fontSize: '1rem', outline: 'none', resize: 'none' }}
                            />
                        </div>

                        <div className="form-group">
                            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Profile Badges</label>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {['Early Adopter', 'AI Builder', 'Top Contributor'].map(badge => (
                                    <div key={badge} style={{ padding: '0.6rem 1.25rem', background: '#f1f5f9', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                        <Award size={14} />
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', marginTop: '2rem' }}>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                style={{ padding: '1.1rem 2.5rem', borderRadius: '16px', background: 'var(--primary-color)', color: 'white', border: 'none', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)', transition: 'all 0.2s', opacity: isSaving ? 0.7 : 1 }}
                            >
                                {isSaving ? <RefreshCw size={20} className="animate-spin" /> : <Save size={20} />}
                                {isSaving ? 'Processing...' : 'Sync Information'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-spin { animation: spin 2s linear infinite; }
                input:focus, textarea:focus { border-color: var(--primary-color) !important; background: white !important; box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1) !important; }
            `}</style>
        </div>
    );
};

export default Profile;
