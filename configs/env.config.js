const dotenv = require('dotenv');
dotenv.config();

const {
  NODE_ENV,
  PORT,
  DB_URI,
  DB_USER_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = process.env;

module.exports = {
  NODE_ENV,
  PORT,
  DB_URI,
  DB_USER_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
};
