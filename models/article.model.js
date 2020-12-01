const Sequelize = require('sequelize');
const sequelize = require('../configs/db-connection.config');
const { ARTICLE } = require('../constants/model.constant');

const { INTEGER, STRING } = Sequelize;

const Article = sequelize.define(
  ARTICLE.MODEL_NAME,
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    content: {
      type: STRING,
      allowNull: false,
    },
    nickname: {
      type: STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = Article;
