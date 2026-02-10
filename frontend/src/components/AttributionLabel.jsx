import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import '../styles/Components.css';

const AttributionLabel = ({ provider, timestamp, safetyScore = '100%' }) => {
    return (
        <div className="attribution-wrapper">
            <div className="badge-safe">
                <ShieldCheck size={12} />
                CampusSafe Verified
            </div>

            <div className="attribution-meta">
                <span>Engine: <b>{provider.toUpperCase()}</b></span>
                <span>Generated: <b>{new Date(timestamp).toLocaleString()}</b></span>
                <span>Safety Score: <b style={{ color: '#16a34a' }}>{safetyScore}</b></span>
            </div>

            <div className="info-tooltip-container">
                <Info size={14} />
                <div className="tooltip-box">
                    This content was generated using institutional high-performance AI. It has been automatically scanned for bias, toxicity, and campus guideline compliance.
                </div>
            </div>
        </div>
    );
};

export default AttributionLabel;
