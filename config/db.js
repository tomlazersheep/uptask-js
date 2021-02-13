const Sequelize = require('sequelize');

const sequelize = new Sequelize('uptask_db','root','suite340',{
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3306',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;