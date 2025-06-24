const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const groupRoutes = require('./routes/group.routes');
const rehearsalRoutes = require('./routes/rehearsal.routes');

// Import middleware
const { errorHandler } = require('./middleware/errorHandler');
const { authenticateJWT } = require('./middleware/auth');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to BandFlow API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateJWT, userRoutes);
app.use('/api/groups', authenticateJWT, groupRoutes);
app.use('/api/rehearsals', authenticateJWT, rehearsalRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;