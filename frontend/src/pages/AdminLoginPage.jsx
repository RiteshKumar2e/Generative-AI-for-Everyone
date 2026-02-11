import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const AdminLoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        e.preventDefault();
        // Secure Admin Login Simulation
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('userName', 'Super Admin');
        navigate('/admin');
    };

    return (
        <div className="auth-wrapper admin-theme">
            {/* Back to Home Button */}
            <Link to="/" className="back-to-home-btn">
                <ArrowLeft size={20} />
                <span>Return to Portal</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="auth-card admin-card"
            >
                <div className="auth-accent-line admin-accent"></div>

                <div className="auth-header">
                    <div className="auth-logo-box admin-logo-box">
                        <ShieldAlert size={32} />
                    </div>
                    <h2>Admin Gateway</h2>
                    <p>Authorization required for central control access</p>
                </div>

                <form onSubmit={handleAdminLogin} className="auth-form">
                    <div className="form-group">
                        <label className="form-label admin-label">Administrator ID</label>
                        <div className="input-container">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="auth-input admin-input"
                                placeholder="ADM-77-XXXX"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label admin-label">Master Key</label>
                        <div className="input-container">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="auth-input admin-input"
                                placeholder="••••••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-auth-submit admin-submit">
                        Secure Authentication
                        <ArrowRight size={20} />
                    </button>
                </form>

                <p className="auth-footer">
                    Restricted access. All login attempts are logged for audit purposes.
                </p>
            </motion.div>
        </div>
    );
};

export default AdminLoginPage;
