import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Lock, User, ArrowRight, Building, GraduationCap, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const RegisterPage = () => {
    const [role, setRole] = useState('student');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration and save role
        localStorage.setItem('userRole', role);
        localStorage.setItem('userName', 'New User'); // Mock name

        if (role === 'club') {
            navigate('/club-dashboard');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="auth-wrapper">
            {/* Back to Home Button */}
            <Link to="/" className="back-to-home-btn">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="auth-card"
                style={{ maxWidth: '550px' }}
            >
                <div className="auth-accent-line" style={{ background: 'linear-gradient(to right, var(--accent-color), var(--primary-color))' }}></div>

                <div className="auth-header">
                    <div className="auth-logo-box" style={{ background: 'linear-gradient(to right, var(--accent-color), var(--primary-color))' }}>
                        <Brain size={32} />
                    </div>
                    <h2>Join Your Campus</h2>
                    <p>Create your high-performance AI workspace</p>
                </div>

                <form onSubmit={handleRegister} className="auth-form">
                    <div className="grid-2">
                        <div className="form-group">
                            <label className="form-label" style={{ color: 'var(--accent-color)' }}>Full Name</label>
                            <div className="input-container">
                                <User className="input-icon" size={20} />
                                <input
                                    type="text"
                                    className="auth-input"
                                    placeholder="Alex Rivera"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ color: 'var(--accent-color)' }}>Campus Email</label>
                            <div className="input-container">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    className="auth-input"
                                    placeholder="alex@uni.edu"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="role-selection">
                        <label className="form-label" style={{ color: 'var(--accent-color)' }}>Select Your Primary Role</label>
                        <div className="role-grid">
                            {[
                                { id: 'student', label: 'Student', icon: <GraduationCap size={20} /> },
                                { id: 'club', label: 'Club Lead', icon: <Building size={20} /> }
                            ].map((r) => (
                                <button
                                    key={r.id}
                                    type="button"
                                    onClick={() => setRole(r.id)}
                                    className={`role-btn ${role === r.id ? `active-${r.id}` : ''}`}
                                >
                                    {r.icon}
                                    <span>{r.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" style={{ color: 'var(--accent-color)' }}>Secure Password</label>
                        <div className="input-container">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-auth-submit" style={{ background: 'linear-gradient(to right, var(--accent-color), var(--primary-color))' }}>
                        Create My Account
                        <ArrowRight size={20} />
                    </button>
                </form>

                <p className="auth-footer">
                    Already a member? <Link to="/login" style={{ color: 'var(--accent-color)' }}>Log in instead</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
