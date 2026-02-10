import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X, AlertCircle } from 'lucide-react';
import './LogoutModal.css';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="logout-modal-backdrop"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="logout-modal"
                    >
                        <button className="modal-close-btn" onClick={onClose}>
                            <X size={20} />
                        </button>

                        <div className="modal-icon">
                            <div className="icon-wrapper">
                                <AlertCircle size={48} />
                            </div>
                        </div>

                        <h2>Confirm Logout</h2>
                        <p>Are you sure you want to logout? Any unsaved changes will be lost.</p>

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={onClose}>
                                Cancel
                            </button>
                            <button className="btn-confirm-logout" onClick={onConfirm}>
                                <LogOut size={18} />
                                Yes, Logout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LogoutModal;
