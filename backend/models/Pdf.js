const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pdf = sequelize.define('Pdf', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pdf_path: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

module.exports = Pdf;
