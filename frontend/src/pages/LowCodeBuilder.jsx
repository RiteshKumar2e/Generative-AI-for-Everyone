import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Plus,
    Database,
    Cpu,
    Layout,
    Save,
    Play,
    ChevronLeft,
    Settings,
    Layers,
    Search,
    Zap,
    Box,
    Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/LowCodeBuilder.css';

const Block = ({ icon, title, desc, type, onClick }) => (
    <button
        onClick={onClick}
        className="block-button"
    >
        <div className="block-icon-wrapper" style={{ color: type === 'input' ? '#3b82f6' : type === 'ai' ? '#a855f7' : '#22c55e' }}>
            {icon}
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </button>
);

const LowCodeBuilder = () => {
    const [pipeline] = useState([
        { id: '1', type: 'input', label: 'Form Input', desc: 'Accept text from users' },
        { id: '2', type: 'ai', label: 'Groq/Llama3', desc: 'Process and transform' },
        { id: '3', type: 'output', label: 'Team Channel', desc: 'Publish result' }
    ]);

    return (
        <div className="builder-wrapper">
            {/* Toolbox */}
            <aside className="toolbox-aside">
                <div className="toolbox-header">
                    <Link to="/dashboard" className="btn-back">
                        <ChevronLeft size={20} />
                    </Link>
                    <h2 className="workspace-title">Toolbox</h2>
                </div>

                <div className="toolbox-scroll">
                    <div className="toolbox-section">
                        <h3>Input Components</h3>
                        <Block icon={<Database size={18} />} title="Form Field" desc="Basic text input" type="input" />
                        <Block icon={<Layout size={18} />} title="File Upload" desc="Documents/Images" type="input" />
                    </div>

                    <div className="toolbox-section">
                        <h3>AI Logic</h3>
                        <Block icon={<Cpu size={18} />} title="Text Generator" desc="Groq-powered" type="ai" />
                        <Block icon={<Zap size={18} />} title="Code Assistant" desc="Specialized logic" type="ai" />
                        <Block icon={<Layers size={18} />} title="Refiner" desc="Multi-pass AI" type="ai" />
                    </div>

                    <div className="toolbox-section">
                        <h3>Actions</h3>
                        <Block icon={<Box size={18} />} title="Slack/Email" desc="Push notification" type="output" />
                        <Block icon={<Database size={18} />} title="Save to DB" desc="Permanent storage" type="output" />
                    </div>
                </div>
            </aside>

            {/* Canvas */}
            <main className="builder-canvas">
                {/* Toolbar */}
                <div className="canvas-toolbar">
                    <div className="toolbar-title">
                        <h1>Campaign Script Workflow</h1>
                        <span className="badge-draft">Draft</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button className="btn-back"><Settings size={18} /></button>
                        <div style={{ width: '1px', height: '20px', background: 'var(--border-color)' }} />
                        <button className="btn-auth-submit" style={{ width: 'auto', background: 'white', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                            <Play size={16} fill="#22c55e" stroke="#22c55e" />
                            Test Flow
                        </button>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <Save size={16} />
                            Deploy Utility
                        </button>
                    </div>
                </div>

                {/* Builder Area */}
                <div className="canvas-scroll">
                    {pipeline.map((step, i) => (
                        <React.Fragment key={step.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="pipeline-node"
                            >
                                <div className="node-header">
                                    <div className="node-icon-box" style={{ color: step.type === 'input' ? '#3b82f6' : step.type === 'ai' ? '#a855f7' : '#22c55e' }}>
                                        {step.type === 'input' ? <Database size={20} /> : step.type === 'ai' ? <Cpu size={20} /> : <Box size={20} />}
                                    </div>
                                    <div className="node-title">
                                        <h5>{step.label}</h5>
                                        <span>{step.type}</span>
                                    </div>
                                </div>

                                <div className="node-config">
                                    {step.desc}
                                </div>
                            </motion.div>

                            {i < pipeline.length - 1 && (
                                <div className="node-connector">
                                    <div className="connector-line" />
                                    <div className="connector-dot">
                                        <Plus size={16} />
                                    </div>
                                    <div className="connector-line" style={{ background: 'linear-gradient(to top, var(--primary-color), transparent)' }} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    <button className="btn-append-node">
                        <div className="append-icon">
                            <Plus size={20} />
                        </div>
                        <span className="append-label">Append Block</span>
                    </button>
                </div>

                <div style={{ position: 'absolute', bottom: '2rem', right: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                    <Search size={14} color="#94a3b8" />
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8' }}>CTRL + K</span>
                </div>
            </main>
        </div>
    );
};

export default LowCodeBuilder;
