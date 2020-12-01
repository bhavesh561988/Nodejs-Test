const Sequelize = require('sequelize');
const {
  DB_URI,
  DB_USER_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = require('./env.config');

const sequelize = new Sequelize(DB_URI, DB_USER_NAME, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  logging: false,
});

module.exports = sequelize;
