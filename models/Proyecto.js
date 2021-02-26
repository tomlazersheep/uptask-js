const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');

const Proyectos = db.define('proyectos',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: Sequelize.STRING(60),
  url: Sequelize.STRING(1000)
});

Proyectos.beforeCreate( (user) => {
  user.url = slug(user.nombre);
});

module.exports = Proyectos;