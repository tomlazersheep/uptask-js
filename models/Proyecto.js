const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../config/db');

const Proyectos = db.define('proyectos',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: Sequelize.STRING(60),
  url: Sequelize.STRING(1000),
});

module.exports = Proyectos;