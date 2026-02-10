import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        let role = 'student';
        if (email.includes('admin')) {
            role = 'admin';
        } else if (email.includes('lead')) {
            role = 'club';
        }

        localStorage.setItem('userRole', role);
        localStorage.setItem('userName', role === 'admin' ? 'Admin User' : role === 'club' ? 'Club Lead' : 'Student User');

        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'club') {
            navigate('/club-dashboard');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="auth-wrapper">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="auth-card"
            >
                <div className="auth-accent-line"></div>

                <div className="auth-header">
                    <div className="auth-logo-box">
                        <Brain size={32} />
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Enter your credentials to access the suite</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <div className="input-container">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="auth-input"
                                placeholder="name@university.edu"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-label-row">
                            <label className="form-label">Password</label>
                            <a href="#" className="form-link">Forgot?</a>
                        </div>
                        <div className="input-container">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-auth-submit">
                        Sign In
                        <ArrowRight size={20} />
                    </button>
                </form>

                <div className="auth-divider">
                    <button className="btn-sso">
                        <Github size={20} />
                        Continue with Institution SSO
                    </button>
                </div>

                <p className="auth-footer">
                    New to CampusGenAI? <Link to="/register">Create an account</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
