const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize, User } = require('./models');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const storeRoutes = require('./routes/stores');
const storeOwnerRoutes = require('./routes/storeOwner');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/store-owner', storeOwnerRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Seed default admin user
const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ where: { role: 'admin' } });
    if (!existingAdmin) {
      await User.create({
        name: 'System Administrator User',
        email: 'admin@storerating.com',
        password: 'Admin@123',
        address: '123 Admin Street, Admin City',
        role: 'admin',
      });
      console.log('Default admin created: admin@storerating.com / Admin@123');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};

// Start server
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    await sequelize.sync({ alter: true });
    console.log('Database synced.');

    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();
