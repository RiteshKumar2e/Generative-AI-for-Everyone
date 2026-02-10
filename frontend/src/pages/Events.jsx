import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const EventManagement = () => {
    const events = [];

    return (
        <div style={{ padding: '2rem' }}>
            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Outfit' }}>Events Management</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Schedule and track upcoming campus activities</p>
                </div>
                <button className="btn-create-banner" style={{ border: 'none', cursor: 'pointer' }}>
                    <Plus size={20} />
                    Create Event
                </button>
            </div>

            <div className="events-list" style={{ display: 'grid', gap: '1.5rem' }}>
                {events.length > 0 ? events.map((event) => (
                    <motion.div
                        key={event.id}
                        whileHover={{ y: -5 }}
                        style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '1.5rem',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            background: `${event.color}15`,
                            color: event.color,
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800
                        }}>
                            <Calendar size={24} />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{event.title}</h3>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    background: `${event.color}15`,
                                    color: event.color
                                }}>
                                    {event.status}
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Clock size={16} />
                                    {event.date}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <MapPin size={16} />
                                    {event.location}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Users size={16} />
                                    {event.attendees} Registered
                                </div>
                            </div>
                        </div>

                        <button style={{
                            padding: '0.75rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            background: 'white',
                            cursor: 'pointer',
                            color: 'var(--text-muted)'
                        }}>
                            <ChevronRight size={20} />
                        </button>
                    </motion.div>
                )) : (
                    <div style={{ textAlign: 'center', padding: '5rem 0', background: 'white', borderRadius: '24px', border: '1px dashed var(--border-color)' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--slate-50)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--slate-400)' }}>
                            <Calendar size={40} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>No events scheduled</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Ready to host something amazing? Start planning your first event.</p>
                        <button className="btn-create-banner" style={{ border: 'none', cursor: 'pointer' }}>
                            <Plus size={18} />
                            Schedule New Event
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventManagement;
