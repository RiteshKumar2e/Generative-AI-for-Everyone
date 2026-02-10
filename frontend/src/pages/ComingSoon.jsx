import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Hammer, Construction } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const ComingSoon = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-wrapper">
            <main className="dashboard-main" style={{ marginLeft: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                    >
                        <div style={{
                            width: '120px',
                            height: '120px',
                            background: 'var(--slate-100)',
                            borderRadius: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem',
                            color: 'var(--primary-color)'
                        }}>
                            <Construction size={60} />
                        </div>
                    </motion.div>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Outfit' }}>{title} Module</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        We're currently building this feature to give you the best experience. <br />
                        Stay tuned for the official campus launch!
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn-create-banner"
                        style={{ border: 'none', cursor: 'pointer' }}
                    >
                        <ChevronLeft size={20} />
                        Go Back to Dashboard
                    </button>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <div style={{ padding: '1rem 2rem', background: 'white', borderRadius: '15px', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontWeight: 800, color: 'var(--primary-color)' }}>92%</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Progress</div>
                        </div>
                        <div style={{ padding: '1rem 2rem', background: 'white', borderRadius: '15px', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontWeight: 800, color: 'var(--accent-color)' }}>March 2026</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Launch</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ComingSoon;
