import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Database,
    Cpu,
    Layout,
    Save,
    Play,
    Settings,
    Layers,
    Search,
    Zap,
    Box,
    Trash2,
    CheckCircle2,
    X,
    Loader2,
    ArrowRight
} from 'lucide-react';
import '../styles/LowCodeBuilder.css';

const Block = ({ icon, title, desc, type, onAdd }) => (
    <button
        onClick={() => onAdd({ type, label: title, desc })}
        className="block-button"
        style={{ width: '100%', marginBottom: '1rem', textAlign: 'left' }}
    >
        <div className="block-icon-wrapper" style={{ color: type === 'input' ? '#3b82f6' : type === 'ai' ? '#a855f7' : '#22c55e' }}>
            {icon}
        </div>
        <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700 }}>{title}</h4>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{desc}</p>
        </div>
        <Plus size={16} color="#94a3b8" />
    </button>
);

const LowCodeBuilder = () => {
    const [pipeline, setPipeline] = useState([
        { id: '1', type: 'input', label: 'Form Input', desc: 'Accept text from users' },
        { id: '2', type: 'ai', label: 'Groq/Llama3', desc: 'Process and transform' },
        { id: '3', type: 'output', label: 'Team Channel', desc: 'Publish result' }
    ]);

    const [testing, setTesting] = useState(false);
    const [testNode, setTestNode] = useState(null);
    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    // Editor State
    const [editingNode, setEditingNode] = useState(null);
    const [editData, setEditData] = useState(null);

    const addNode = (nodeData) => {
        const newNode = {
            ...nodeData,
            id: Date.now().toString()
        };
        setPipeline([...pipeline, newNode]);
    };

    const removeNode = (id, e) => {
        e.stopPropagation();
        setPipeline(pipeline.filter(n => n.id !== id));
    };

    const startEdit = (node) => {
        setEditingNode(node.id);
        setEditData({ ...node });
    };

    const saveEdit = () => {
        setPipeline(prev => prev.map(n => n.id === editingNode ? editData : n));
        setEditingNode(null);
        setEditData(null);
    };

    const runTest = () => {
        setTesting(true);
        let index = 0;

        const next = () => {
            if (index < pipeline.length) {
                setTestNode(pipeline[index].id);
                index++;
                setTimeout(next, 1000);
            } else {
                setTimeout(() => {
                    setTesting(false);
                    setTestNode(null);
                }, 800);
            }
        };
        next();
    };

    const handleSave = async () => {
        setShowSaveSuccess(true);
        const { logActivity } = await import('../utils/historyLogger');
        logActivity('Utility', `Deployed custom AI Flow with ${pipeline.length} blocks`);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', gap: '2rem', height: 'calc(100vh - 4rem)' }}>
            {/* Toolbox */}
            <aside className="toolbox-aside" style={{ width: '300px', flexShrink: 0, height: '100%', border: '1px solid var(--border-color)', borderRadius: '24px', background: 'white' }}>
                <div className="toolbox-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Toolbox</h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>Add blocks to your flow</p>
                </div>

                <div className="toolbox-scroll" style={{ padding: '1.5rem', overflowY: 'auto', height: 'calc(100% - 80px)' }}>
                    <div className="toolbox-section">
                        <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Input</h3>
                        <Block onAdd={addNode} icon={<Database size={18} />} title="Form Field" desc="Basic text input" type="input" />
                        <Block onAdd={addNode} icon={<Layout size={18} />} title="File Upload" desc="Documents/Images" type="input" />
                    </div>

                    <div className="toolbox-section" style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>AI Intelligence</h3>
                        <Block onAdd={addNode} icon={<Cpu size={18} />} title="Text Generator" desc="Groq-powered" type="ai" />
                        <Block onAdd={addNode} icon={<Zap size={18} />} title="Translation" desc="Convert languages" type="ai" />
                        <Block onAdd={addNode} icon={<Layers size={18} />} title="Image Gen" desc="Stable Diffusion" type="ai" />
                    </div>

                    <div className="toolbox-section" style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Output</h3>
                        <Block onAdd={addNode} icon={<Box size={18} />} title="Email Send" desc="Push notification" type="output" />
                        <Block onAdd={addNode} icon={<Database size={18} />} title="DB Update" desc="Save state" type="output" />
                    </div>
                </div>
            </aside>

            {/* Canvas */}
            <main className="builder-canvas" style={{ flex: 1, borderRadius: '24px', position: 'relative', display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid var(--border-color)' }}>
                {/* Toolbar */}
                <div className="canvas-toolbar" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Custom AI utility</h1>
                        <span style={{ padding: '0.4rem 0.8rem', background: '#fef3c7', color: '#92400e', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>In Build</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={runTest}
                            disabled={testing || pipeline.length === 0}
                            className="btn-test"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.25rem', borderRadius: '12px', background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                            {testing ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
                            Test Workflow
                        </button>
                        <button
                            onClick={handleSave}
                            className="btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '12px', background: 'var(--primary-color)', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}
                        >
                            <Save size={16} />
                            Deploy App
                        </button>
                    </div>
                </div>

                {/* Builder Area */}
                <div className="canvas-scroll" style={{ flex: 1, padding: '3rem', overflowY: 'auto', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AnimatePresence>
                        {pipeline.map((step, i) => (
                            <React.Fragment key={step.id}>
                                <motion.div
                                    layout
                                    onClick={() => startEdit(step)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: testNode === step.id ? 1.05 : 1,
                                        boxShadow: testNode === step.id ? '0 20px 40px rgba(99, 102, 241, 0.2)' : '0 4px 12px rgba(0,0,0,0.05)',
                                        borderColor: editingNode === step.id ? 'var(--primary-color)' : testNode === step.id ? 'var(--primary-color)' : 'var(--border-color)',
                                        borderWidth: editingNode === step.id ? '2px' : '2px'
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={`pipeline-node-functional`}
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        padding: '1.5rem',
                                        borderRadius: '20px',
                                        background: 'white',
                                        border: '2px solid',
                                        borderColor: 'var(--border-color)',
                                        position: 'relative',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: step.type === 'input' ? '#dbeafe' : step.type === 'ai' ? '#f3e8ff' : '#dcfce7', color: step.type === 'input' ? '#3b82f6' : step.type === 'ai' ? '#a855f7' : '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {step.type === 'input' ? <Database size={20} /> : step.type === 'ai' ? <Cpu size={20} /> : <Box size={20} />}
                                            </div>
                                            <div>
                                                <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>{step.label}</h5>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{step.type}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button onClick={(e) => { e.stopPropagation(); startEdit(step); }} style={{ padding: '0.4rem', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#94a3b8' }}>
                                                <Settings size={16} />
                                            </button>
                                            <button onClick={(e) => removeNode(step.id, e)} style={{ padding: '0.4rem', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#94a3b8' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        {step.desc}
                                    </div>

                                    {testNode === step.id && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            style={{ height: '3px', background: 'var(--primary-color)', position: 'absolute', bottom: 0, left: 0, borderRadius: '0 0 20px 20px' }}
                                        />
                                    )}
                                </motion.div>

                                {i < pipeline.length - 1 && (
                                    <div style={{ height: '40px', width: '2px', background: 'var(--border-color)', margin: '0.5rem 0', position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#f8fafc', padding: '0.25rem' }}>
                                            <ArrowRight size={14} style={{ transform: 'rotate(90deg)', color: '#94a3b8' }} />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </AnimatePresence>

                    {pipeline.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
                            <Zap size={48} style={{ marginBottom: '1.5rem', opacity: 0.3 }} />
                            <h3 style={{ margin: 0 }}>Start Your Flow</h3>
                            <p>Click items in the toolbox to build your utility</p>
                        </div>
                    )}
                </div>

                {/* Configuration Sidebar */}
                <AnimatePresence>
                    {editingNode && (
                        <motion.div
                            initial={{ x: 400 }}
                            animate={{ x: 0 }}
                            exit={{ x: 400 }}
                            style={{ position: 'absolute', right: 0, top: 0, width: '380px', height: '100%', background: 'white', borderLeft: '1px solid var(--border-color)', boxShadow: '-20px 0 40px rgba(0,0,0,0.05)', zIndex: 100, display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ margin: 0, fontWeight: 800 }}>Configure Block</h3>
                                <button onClick={() => setEditingNode(null)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Block Label</label>
                                    <input
                                        type="text"
                                        value={editData.label}
                                        onChange={(e) => setEditData({ ...editData, label: e.target.value })}
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', fontWeight: 600, outline: 'none' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Description</label>
                                    <textarea
                                        value={editData.desc}
                                        onChange={(e) => setEditData({ ...editData, desc: e.target.value })}
                                        rows="3"
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', fontWeight: 600, outline: 'none', resize: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ padding: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
                                <button onClick={() => setEditingNode(null)} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                                <button onClick={saveEdit} style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: 'none', background: 'var(--primary-color)', color: 'white', fontWeight: 700, cursor: 'pointer' }}>Save Changes</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Feedback */}
                <AnimatePresence>
                    {showSaveSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '1rem 2rem', borderRadius: '16px', border: '1px solid #bbf7d0', color: '#059669', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 101 }}
                        >
                            <CheckCircle2 size={20} />
                            Utility Deployment Successful!
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-spin { animation: spin 2s linear infinite; }
                .toolbox-section { border-bottom: 2px solid #f1f5f9; padding-bottom: 1.5rem; }
                .toolbox-section:last-child { border-bottom: none; }
                .block-button { 
                    display: flex; 
                    align-items: center; 
                    gap: 1rem; 
                    padding: 0.8rem; 
                    background: #f8fafc; 
                    border: 1px solid #e2e8f0; 
                    border-radius: 12px; 
                    cursor: pointer; 
                    transition: all 0.2s; 
                }
                .block-button:hover { 
                    background: white; 
                    border-color: var(--primary-color);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    transform: translateX(4px);
                }
                .pipeline-node-functional {
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}</style>
        </div>
    );
};

export default LowCodeBuilder;
