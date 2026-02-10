const mongoose = require('mongoose');
const User = require('../models/user.model');
require('dotenv').config();

// Demo credentials - Same as backend demo login
const testUsers = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: 'Admin123!',
        role: 'admin',
        credits: 1000
    },
    {
        name: 'Club Lead',
        email: 'club@test.com',
        password: 'Club123!',
        role: 'club',
        credits: 500
    },
    {
        name: 'Student User',
        email: 'student@test.com',
        password: 'Student123!',
        role: 'student',
        credits: 100
    }
];

const seedUsers = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing test users
        await User.deleteMany({
            email: { $in: testUsers.map(u => u.email) }
        });
        console.log('🗑️  Cleared existing test users');

        // Create new test users
        const createdUsers = await User.create(testUsers);
        console.log('✅ Test users created successfully!\n');

        console.log('═'.repeat(60));
        console.log('📧  DEMO LOGIN CREDENTIALS');
        console.log('═'.repeat(60));

        createdUsers.forEach(user => {
            const originalPassword = testUsers.find(u => u.email === user.email).password;
            console.log(`\n🔹 ${user.role.toUpperCase()} ACCOUNT:`);
            console.log(`   Email:    ${user.email}`);
            console.log(`   Password: ${originalPassword}`);
            console.log(`   Credits:  ${user.credits}`);
            console.log(`   Dashboard: /${user.role === 'admin' ? 'admin' : user.role === 'club' ? 'club-dashboard' : 'dashboard'}`);
        });

        console.log('\n' + '═'.repeat(60));
        console.log('✨ You can now use these credentials to login!');
        console.log('💡 Tip: Use POST /api/auth/demo-login for testing without DB');
        console.log('═'.repeat(60) + '\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding users:', error.message);
        process.exit(1);
    }
};

seedUsers();
