import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, type }) => {
    const content = {
        privacy: {
            title: "Privacy Policy",
            icon: <Eye size={32} className="modal-icon-blue" />,
            sections: [
                {
                    title: "Data Collection",
                    text: "We collect minimal institutional data necessary to provide high-performance generative services. This includes project metadata and user interaction patterns."
                },
                {
                    title: "Information Usage",
                    text: "Your data is used exclusively to optimize neural processing and personalize your creative workspace. We do not sell or share student data with third parties."
                },
                {
                    title: "Generation Privacy",
                    text: "Content generated through CampusGenAI is private to your account. Our models do not 'learn' from your sensitive project outputs without explicit permission."
                }
            ]
        },
        security: {
            title: "Security Protocols",
            icon: <Shield size={32} className="modal-icon-purple" />,
            sections: [
                {
                    title: "Encryption Standards",
                    text: "All data transmissions are protected by enterprise-grade TLS 1.3 encryption. Your stored assets are shielded with AES-256 bit encryption."
                },
                {
                    title: "Neural Safety",
                    text: "Every output undergoes a real-time 'Safety Scan' to prevent the generation of harmful, biased, or non-compliant institutional content."
                },
                {
                    title: "Access Control",
                    text: "We implement multi-layered authentication and role-based access control (RBAC) to ensure only authorized campus members can access specific tools."
                }
            ]
        }
    };

    const currentContent = content[type] || content.privacy;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="modal-backdrop"
                    />

                    {/* Modal Content */}
                    <div className="modal-wrapper">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="legal-modal-card"
                        >
                            <button className="modal-close-btn" onClick={onClose}>
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <div className="modal-icon-container">
                                    {currentContent.icon}
                                </div>
                                <h2>{currentContent.title}</h2>
                                <div className="modal-badge">Version 2026.1</div>
                            </div>

                            <div className="modal-body">
                                {currentContent.sections.map((section, idx) => (
                                    <div key={idx} className="modal-section">
                                        <div className="section-title">
                                            <CheckCircle size={16} />
                                            <h3>{section.title}</h3>
                                        </div>
                                        <p>{section.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="modal-footer">
                                <button className="modal-primary-btn" onClick={onClose}>
                                    I Understand
                                </button>
                                <p className="footer-note">Last updated: February 11, 2026</p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
