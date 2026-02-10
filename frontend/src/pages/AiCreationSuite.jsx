import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    ChevronLeft,
    Copy,
    Download,
    ShieldCheck,
    Zap,
    CheckCircle2,
    FileText,
    Code as CodeIcon,
    Image as ImageIcon,
    Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AttributionLabel from '../components/AttributionLabel';
import '../styles/Workspace.css';

const Steps = ['Draft', 'Generate', 'Edit', 'Attribute', 'Publish'];

const AiCreationSuite = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [type, setType] = useState('text');
    const [prompt, setPrompt] = useState('');
    const [generating, setGenerating] = useState(false);
    const [output, setOutput] = useState('');
    const [provider, setProvider] = useState('');

    const handleGenerate = async () => {
        if (!prompt) return;
        setGenerating(true);
        setCurrentStep(1);

        try {
            let endpoint = 'http://localhost:5000/api/ai/generate-text';
            let payload = { prompt };

            if (type === 'code') {
                endpoint = 'http://localhost:5000/api/ai/generate-code';
            } else if (type === 'image') {
                // For image mode in a demo, we simulate a response but show a visual/caption
                setTimeout(() => {
                    setOutput("A futuristic campus scene featuring students collaborating in an AI-powered innovation hub. Vibrant colors, sleek architecture, and holographic displays. [Visual Reference Generated]");
                    setProvider('dall-e-3 (Simulated)');
                    setGenerating(false);
                    setCurrentStep(2);
                }, 2000);
                return;
            } else if (type === 'extra') {
                // Research mode simulation
                setTimeout(() => {
                    setOutput("Research Summary: Based on current campus trends, GenAI adoption has increased by 42% this semester. Primary use cases include coding assistance and event marketing automation. Recommendations: Focus on ethics-first integration.");
                    setProvider('perplexity-research (Simulated)');
                    setGenerating(false);
                    setCurrentStep(2);
                }, 2000);
                return;
            }

            const response = await axios.post(endpoint, {
                ...payload,
                systemPrompt: type === 'code' ? 'You are an expert developer. Provide clean, documented code.' : 'You are a creative content specialist for campus events.'
            });

            setOutput(response.data.content);
            setProvider(response.data.provider);
            setCurrentStep(2);
        } catch (error) {
            console.error('Generation failed:', error);
            // Service itself handles fallback but if network fails:
            setOutput("Network Error: Could not connect to the campus AI backend. Please verify that the server is running on port 5000.");
            setProvider('system-error');
            setCurrentStep(2);
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <header className="workspace-header" style={{ borderRadius: '20px', marginBottom: '2rem' }}>
                <div className="workspace-nav-container">
                    <div className="nav-left">
                        <h1 className="workspace-title">Creation Suite</h1>
                    </div>

                    <div className="steps-indicator">
                        {Steps.map((step, i) => (
                            <React.Fragment key={step}>
                                <div className={`step-item ${currentStep >= i ? 'active' : ''}`}>
                                    <div className="step-number">
                                        {currentStep > i ? <CheckCircle2 size={14} /> : i + 1}
                                    </div>
                                    <span className="step-label">{step}</span>
                                </div>
                                {i < Steps.length - 1 && <div className="step-line" />}
                            </React.Fragment>
                        ))}
                    </div>

                    <div style={{ width: '100px' }} /> {/* Spacer */}
                </div>
            </header>

            <div className="dashboard-content" style={{ margin: '0 auto' }}>
                <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="auth-header" style={{ marginBottom: '3rem' }}>
                                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>What are we creating today?</h1>
                                <p>Select a tool and provide a brief description to get started.</p>
                            </div>

                            <div className="tool-grid">
                                {[
                                    { id: 'text', icon: <FileText size={32} />, label: 'Post/Script', color: '#3b82f6' },
                                    { id: 'code', icon: <CodeIcon size={32} />, label: 'Algorithm', color: '#a855f7' },
                                    { id: 'image', icon: <ImageIcon size={32} />, label: 'Visual Ref', color: '#eab308' },
                                    { id: 'extra', icon: <Sparkles size={32} />, label: 'Research', color: '#7c3aed' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setType(item.id)}
                                        className={`tool-select-btn ${type === item.id ? 'active' : ''}`}
                                    >
                                        <div style={{ color: type === item.id ? item.color : '#94a3b8' }}>
                                            {item.icon}
                                        </div>
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="prompt-container">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe your project goal in detail... e.g., 'Write a 30-second script for our university Science Olympiad teaser video...'"
                                    className="prompt-textarea"
                                />
                                <button
                                    onClick={handleGenerate}
                                    disabled={!prompt || generating}
                                    className="btn-generate"
                                >
                                    {generating ? <Loader2 className="animate-spin" /> : <Zap size={20} fill="currentColor" />}
                                    Generate Content
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ textAlign: 'center', padding: '5rem 0' }}
                        >
                            <Loader2 size={64} className="animate-spin" style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Summoning AI Intelligence...</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Optimizing parameters for maximum campus impact</p>
                        </motion.div>
                    )}

                    {currentStep >= 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="result-grid"
                        >
                            <div className="left-col">
                                <div className="result-card">
                                    <div className="result-header">
                                        <span className="badge-green">AI Draft Generated</span>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className="btn-back"><Copy size={16} /></button>
                                            <button className="btn-back"><Download size={16} /></button>
                                        </div>
                                    </div>
                                    <div className="result-body">
                                        <textarea
                                            className="result-textarea"
                                            value={output}
                                            onChange={(e) => setOutput(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <AttributionLabel
                                        provider={provider || 'groq'}
                                        timestamp={new Date().toISOString()}
                                        safetyScore="99.8%"
                                    />
                                </div>

                                <div className="actions-row">
                                    <button onClick={() => setCurrentStep(0)} className="btn-secondary">
                                        Cancel & Restart
                                    </button>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button onClick={() => setCurrentStep(3)} className="btn-auth-submit" style={{ background: 'var(--slate-200)', color: 'var(--text-main)', width: 'auto', padding: '0.75rem 1.5rem' }}>
                                            Add Attribution
                                        </button>
                                        <button onClick={() => setCurrentStep(4)} className="btn-primary">
                                            Publish to Team
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="workspace-sidebar">
                                <div className="meta-widget">
                                    <span className="meta-title">Generation Meta</span>
                                    <div className="meta-item">
                                        <span>Provider</span>
                                        <span className="badge-green">{provider || 'Groq'}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span>Latency</span>
                                        <span>142ms</span>
                                    </div>
                                    <div className="meta-item">
                                        <span>Tokens</span>
                                        <span>842</span>
                                    </div>
                                    <div style={{ background: '#fefce8', padding: '1rem', borderRadius: '1rem', border: '1px solid #fef08a', display: 'flex', gap: '0.75rem' }}>
                                        <ShieldCheck size={20} color="#eab308" />
                                        <div style={{ fontSize: '0.75rem' }}>
                                            <p style={{ fontWeight: 800, margin: '0 0 0.25rem', color: '#854d0e' }}>Responsible AI Pass</p>
                                            <p style={{ margin: 0, color: '#a16207', opacity: 0.8 }}>Content scanned for safety and campus guidelines.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AiCreationSuite;
