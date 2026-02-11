import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, FileText, Image, Play, Layers, Code, ShieldCheck, Zap, Users, ArrowRight, Mail, Github, Linkedin, ChevronUp, Heart } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import LegalModal from '../components/LegalModal';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('privacy');


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openModal = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const userRole = localStorage.getItem('userRole');

    const getDashboardLink = () => {
        if (userRole === 'admin') return '/admin';
        if (userRole === 'club') return '/club-dashboard';
        return '/dashboard';
    };

    const getDashboardText = () => {
        if (userRole === 'admin') return 'Oversight Panel';
        if (userRole === 'club') return 'Club Dashboard';
        return 'Go to Dashboard';
    };

    return (
        <div className="landing-wrapper">
            <ThreeBackground />



            {/* Navbar */}
            <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <Link to={userRole ? getDashboardLink() : "/"} className="logo-box">
                        <div className="icon-logo">
                            <Brain size={26} fill="white" />
                        </div>
                        <span>Campus</span>GenAI
                    </Link>

                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#mission">Mission</a>
                        <a href="#about">About</a>
                        <a href="#goals">Goals</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="nav-actions">
                        {userRole ? (
                            <Link to={getDashboardLink()} className="btn-cta">{getDashboardText()}</Link>
                        ) : (
                            <>
                                <Link to="/login" className="btn-signin" style={{ marginRight: '1rem' }}>Sign In</Link>
                                <Link to="/admin-login" className="btn-cta">Admin Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="badge-label"
                >
                    <Sparkles size={14} style={{ marginRight: '8px' }} />
                    Leading the Campus AI Revolution
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="hero-title"
                >
                    Universal GenAI <br />
                    <span className="hero-gradient">For Every Student Mind</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="hero-desc"
                >
                    From complex data and stunning visuals to scalable code and immersive media. We empower the next generation of creators with institutional-grade AI performance.
                </motion.p>

                {/* Buttons removed from here as they are now in the navbar */}

                <div className="capabilities-dock">
                    {[
                        { Icon: FileText, label: "Text Gen" },
                        { Icon: Image, label: "Visuals" },
                        { Icon: Play, label: "Media" },
                        { Icon: Brain, label: "Neural" },
                        { Icon: Code, label: "Logic" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="capability-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8 }}
                        >
                            <motion.div
                                className="capability-box"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.5
                                }}
                            >
                                <item.Icon size={26} />
                                <span className="capability-label">{item.label}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="mission-section">
                <div className="mission-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mission-content"
                    >
                        <div className="badge-label">Strategic Vision</div>
                        <h2>Democratizing High-Performance AI</h2>
                        <p className="mission-desc">
                            We believe that elite AI capabilities shouldn't be reserved for tech giants. Our platform provides the infrastructure that enables any student or club to build, create, and innovate without limits.
                        </p>

                        <div className="user-trust">
                            <div className="avatar-stack">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="avatar">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 150}`}
                                            alt="user"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontWeight: 900, margin: 0, fontSize: '1.1rem' }}>500+ Campus Teams</p>
                                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, fontWeight: 700 }}>Already building on CampusGenAI</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="stats-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                            viewport={{ once: true }}
                            className="stat-card"
                        >
                            <h4 style={{ color: '#0ea5e9' }}>95%</h4>
                            <p>Resource Efficiency</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: 5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="stat-card"
                        >
                            <h4 style={{ color: '#7c3aed' }}>0ms</h4>
                            <p>Entry Latency</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: -3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="stat-card"
                        >
                            <h4 style={{ color: '#10b981' }}>100%</h4>
                            <p>Safety Assured</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: 1 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="stat-card"
                        >
                            <h4 style={{ color: '#f59e0b' }}>12+</h4>
                            <p>Global Engines</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={{ padding: '10rem 2rem', background: 'transparent' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-content-card"
                    >
                        <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>About Us</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                            Building the <span className="hero-gradient">Foundation of AI</span>
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
                            CampusGenAI is an initiative dedicated to bringing state-of-the-art generative artificial intelligence tools to students, researchers, and educators worldwide. We bridge the gap between complex AI infrastructure and creative minds.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Goals Section */}
            <section id="goals" style={{ padding: '10rem 2rem', background: 'transparent' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>Our Goals</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Vision for the Future</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '5rem' }}>
                        {[
                            { title: "Accessibility", desc: "Making AI tools available to everyone, regardless of technical background." },
                            { title: "Innovation", desc: "Fostering a culture of experimentation and breakthrough discoveries." },
                            { title: "Collaboration", desc: "Connecting minds across disciplines to solve global challenges." }
                        ].map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="goal-card"
                            >
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 800 }}>{goal.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '1.05rem' }}>{goal.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Exploration Paths / Solutions */}
            <section id="solutions" className="paths-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="badge-label" style={{ marginBottom: '1.5rem' }}>Solutions</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Built for Absolute Potential</h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '750px', margin: '0 auto 5rem', fontWeight: 500, lineHeight: 1.7 }}>
                        Our multi-layered architecture supports every stage of the creative lifecycle, from raw ideation to enterprise-level deployment.
                    </p>
                </motion.div>

                <div className="path-grid">
                    {[
                        {
                            icon: <Layers size={32} />,
                            title: "Multimodal Studio",
                            desc: "Seamlessly transition between text, image, and code generation within a single unified workspace."
                        },
                        {
                            icon: <Code size={32} />,
                            title: "Neural Architect",
                            desc: "Build custom AI logic chains and utilities without writing complex backend infrastructure."
                        },
                        {
                            icon: <ShieldCheck size={32} />,
                            title: "Institutional Trust",
                            desc: "Every generation is validated against our proprietary safety protocols for institutional compliance."
                        },
                        {
                            icon: <Zap size={32} />,
                            title: "Instant Scaling",
                            desc: "Deploy your AI tools to your entire campus or club with zero configuration and infinite scalability."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "Collaborative Intelligence",
                            desc: "Real-time co-authoring tools that allow your whole team to shape AI outputs together."
                        },
                        {
                            icon: <ArrowRight size={32} />,
                            title: "Next-Gen Future",
                            desc: "We are constantly evolving to integrate the latest breakthroughs in Generative AI technology."
                        }
                    ].map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="path-card"
                        >
                            <div className="path-icon">
                                {path.icon}
                            </div>
                            <h3>{path.title}</h3>
                            <p>{path.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>



            <section id="testimonials" style={{ padding: '10rem 2rem', background: 'transparent' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>Testimonials</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '5rem', letterSpacing: '-0.02em' }}>Campus Voices</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="testimonial-card"
                            >
                                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem', color: '#f59e0b' }}>★★★★★</div>
                                <p style={{ fontStyle: 'italic', color: '#475569', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>"CampusGenAI has completely transformed how our research club operates. The tools are intuitive yet incredibly powerful."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                    <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#f1f5f9', border: '2px solid white', overflow: 'hidden' }}>
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Student" />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>Alex Chen</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Computer Science Student</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner" style={{ padding: '0 2rem 10rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        maxWidth: '1300px',
                        margin: '0 auto',
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(24px)',
                        borderRadius: '4rem',
                        padding: '8rem 4rem',
                        textAlign: 'center',
                        color: 'white',
                        boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }}></div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '2rem', color: 'white', letterSpacing: '-0.03em' }}>
                        Ready to redefine <br /><span className="hero-gradient">your campus?</span>
                    </h2>
                    <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 4rem', fontWeight: 500, lineHeight: 1.6 }}>Join hundreds of teams already shaping the future with CampusGenAI.</p>
                    <Link to="/register" className="btn-cta" style={{ fontSize: '1.2rem', padding: '1.5rem 3.5rem' }}>Get Started Free</Link>
                </motion.div>
            </section>

            {/* Footer */}
            <footer id="contact" className="site-footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-info">
                            <Link to="/" className="logo-box">
                                <div className="icon-logo" style={{ width: '36px', height: '36px' }}>
                                    <Brain size={22} fill="white" />
                                </div>
                                <span style={{ fontSize: '1.25rem' }}>Campus</span><span style={{ fontSize: '1.25rem', color: '#0ea5e9' }}>GenAI</span>
                            </Link>
                            <p>Accelerating the adoption of generative AI across global academic institutions through superior creative infrastructure.</p>
                        </div>

                        <div className="footer-links">
                            <h4>Platform</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#goals">Goals</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Community</h4>
                            <ul>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }}>Privacy Policy</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('security'); }}>Security Protocols</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Connect With Us</h4>
                            <div className="social-icons-row">
                                <a href="mailto:riteshkumar90359@gmail.com" className="social-icon-btn" aria-label="Email">
                                    <Mail size={20} />
                                </a>
                                <a href="https://github.com/RiteshKumar2e" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/ritesh-kumar-b3a654253" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 CampusGenAI Platforms. Optimized for next-generation intelligence.</p>
                        <p style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 700,
                            color: '#64748b'
                        }}>
                            Developed with <Heart size={16} fill="#ef4444" color="#ef4444" /> by <span style={{ color: '#0ea5e9' }}>Ritesh Kumar</span>
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <motion.button
                className={`scroll-top-btn ${isScrolled ? 'visible' : ''}`}
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isScrolled ? 1 : 0,
                    scale: isScrolled ? 1 : 0.5,
                    y: isScrolled ? 0 : 20
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
                title="Scroll to top"
            >
                <ChevronUp size={24} />
            </motion.button>

            {/* Legal Modal Component */}
            <LegalModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalType}
            />
        </div>
    );
};

export default LandingPage;
