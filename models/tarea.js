const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Tarea = sequelize.define('Tarea', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Tarea;
