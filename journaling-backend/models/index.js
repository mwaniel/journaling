const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const JournalEntry = require('./journalEntry');


User.hasMany(JournalEntry);
JournalEntry.belongsTo(User);


sequelize.sync();

module.exports = { User, JournalEntry };
