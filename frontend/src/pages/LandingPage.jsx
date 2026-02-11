import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, FileText, Image, Play, Layers, Code, ShieldCheck, Zap, Users, ArrowRight, Mail, Github, Linkedin, ChevronUp } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <a href="#team">Team</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="nav-actions">
                        {userRole ? (
                            <Link to={getDashboardLink()} className="btn-cta">{getDashboardText()}</Link>
                        ) : (
                            <>
                                <Link to="/login" className="btn-signin">Sign In</Link>
                                <Link to="/register" className="btn-cta">Start Building</Link>
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
                        <div className="badge-label" style={{ background: '#f8fafc' }}>Strategic Vision</div>
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

            {/* About Section Placeholder */}
            <section id="about" style={{ padding: '8rem 2rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>About Us</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Building the Foundation of AI</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                        CampusGenAI is an initiative dedicated to bringing state-of-the-art generative artificial intelligence tools to students, researchers, and educators worldwide. We bridge the gap between complex AI infrastructure and creative minds.
                    </p>
                </div>
            </section>

            {/* Goals Section Placeholder */}
            <section id="goals" style={{ padding: '8rem 2rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>Our Goals</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Vision for the Future</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        {[
                            { title: "Accessibility", desc: "Making AI tools available to everyone, regardless of technical background." },
                            { title: "Innovation", desc: "Fostering a culture of experimentation and breakthrough discoveries." },
                            { title: "Collaboration", desc: "Connecting minds across disciplines to solve global challenges." }
                        ].map((goal, i) => (
                            <div key={i} style={{ padding: '2.5rem', background: 'white', borderRadius: '2rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{goal.title}</h3>
                                <p style={{ color: '#64748b' }}>{goal.desc}</p>
                            </div>
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

            {/* Team & Testimonials Placeholder */}
            <section id="team" style={{ padding: '8rem 2rem', background: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>Team</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>Meet the Minds</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ width: '120px', height: '120px', background: '#f1f5f9', borderRadius: '50%', margin: '0 auto 1.5rem', overflow: 'hidden' }}>
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=dev${i}`} alt="Team Member" />
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Dev Member {i}</h4>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Lead Engineer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="testimonials" style={{ padding: '8rem 2rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="badge-label" style={{ marginBottom: '1.5rem', marginInline: 'auto' }}>Testimonials</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '4rem' }}>Campus Voices</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ padding: '2.5rem', background: 'white', borderRadius: '2rem', textAlign: 'left', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>★★★★★</div>
                                <p style={{ fontStyle: 'italic', color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6' }}>"CampusGenAI has completely transformed how our research club operates. The tools are intuitive yet incredibly powerful."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', overflow: 'hidden' }}>
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Student" />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>Alex Chen</div>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Computer Science Student</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner" style={{ padding: '0 2rem 10rem' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        maxWidth: '1300px',
                        margin: '0 auto',
                        background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
                        borderRadius: '3.5rem',
                        padding: '6rem 4rem',
                        textAlign: 'center',
                        color: 'white',
                        boxShadow: '0 40px 100px -20px rgba(124, 58, 237, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)', opacity: 0.1 }}></div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem', color: 'white' }}>Ready to redefine your campus?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: 500 }}>Join hundreds of teams already shaping the future with CampusGenAI.</p>
                    <Link to="/register" className="btn-cta" style={{ background: 'white', color: '#0ea5e9', fontSize: '1.1rem', padding: '1.25rem 3rem' }}>Get Started Free</Link>
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
                                <li><a href="#team">Team</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Connect With Us</h4>
                            <div className="social-icons-row">
                                <a href="mailto:hello@campusgenai.edu" className="social-icon-btn" aria-label="Email">
                                    <Mail size={20} />
                                </a>
                                <a href="https://github.com/campusgenai" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/company/campusgenai" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 CampusGenAI Platforms. Optimized for next-generation intelligence.</p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Security Protocols</a>
                        </div>
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
        </div>
    );
};

export default LandingPage;
