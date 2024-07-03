const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const JournalEntry = sequelize.define('JournalEntry', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

JournalEntry.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(JournalEntry, { foreignKey: 'userId' });

module.exports = JournalEntry;
