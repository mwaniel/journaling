const express = require('express');
const authRoutes = require('./routes/authRoutes');
const journalRoutes = require('./routes/journalRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);

module.exports = app;
