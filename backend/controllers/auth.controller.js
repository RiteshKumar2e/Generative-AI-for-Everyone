const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        const token = signToken(user._id);

        res.status(201).json({
            success: true,
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                credits: user.credits,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const token = signToken(user._id);

        res.status(200).json({
            success: true,
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                credits: user.credits,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getMe = async (req, res) => {
    // In a real app, this would be protected by middleware
    // For now, let's assume req.user is set or just return status 200
    res.status(200).json({ success: true, message: 'Auth working' });
};

// Demo Login - Works without database
exports.demoLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Demo credentials
        const demoUsers = {
            'admin@test.com': {
                password: 'Admin123!',
                user: {
                    id: 'demo-admin-001',
                    name: 'Admin User',
                    email: 'admin@test.com',
                    role: 'admin',
                    credits: 1000
                }
            },
            'club@test.com': {
                password: 'Club123!',
                user: {
                    id: 'demo-club-001',
                    name: 'Club Lead',
                    email: 'club@test.com',
                    role: 'club',
                    credits: 500
                }
            },
            'student@test.com': {
                password: 'Student123!',
                user: {
                    id: 'demo-student-001',
                    name: 'Student User',
                    email: 'student@test.com',
                    role: 'student',
                    credits: 100
                }
            }
        };

        const demoUser = demoUsers[email];

        if (!demoUser || demoUser.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid demo credentials. Try: admin@test.com / Admin123!'
            });
        }

        const token = signToken(demoUser.user.id);

        res.status(200).json({
            success: true,
            token,
            data: demoUser.user,
            message: '🎉 Demo login successful!'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
