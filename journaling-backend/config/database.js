const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('journal', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
