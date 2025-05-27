const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite', // archivo donde se guarda la DB
});

module.exports = sequelize;
