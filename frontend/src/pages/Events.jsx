import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import '../styles/Dashboard.css';
import '../styles/ClubLeadDashboard.css';

const EventManagement = () => {
    const events = [
        { id: 1, title: 'AI Workshop 2024', date: 'March 15, 2024', location: 'Hall A', attendees: 120, status: 'Confirmed', color: '#3b82f6' },
        { id: 2, title: 'Hackathon Prep', date: 'March 20, 2024', location: 'Lab 3', attendees: 45, status: 'In Planning', color: '#f59e0b' },
        { id: 3, title: 'Monthly Meetup', date: 'April 02, 2024', location: 'Seminar Hall', attendees: 80, status: 'Proposed', color: '#10b981' },
    ];

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
                {events.map((event) => (
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
                ))}
            </div>
        </div>
    );
};

export default EventManagement;
