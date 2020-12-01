const Sequelize = require('sequelize');
const sequelize = require('../configs/db-connection.config');
const { ARTICLE, COMMENT } = require('../constants/model.constant');
const FOREIGN_KEYS = require('../constants/foreign-keys.constant');
const Article = require('./article.model');
const { INTEGER, STRING, JSON } = Sequelize;

const Comment = sequelize.define(
  COMMENT.MODEL_NAME,
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: STRING,
      allowNull: false,
    },
    nickname: {
      type: STRING,
      allowNull: false,
    },
    commentRef: {
      type: INTEGER,
      allowNull: true,
      references: {
        model: COMMENT.TABLE_NAME,
        key: FOREIGN_KEYS.ID,
      },
    },
    articleRef: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: ARTICLE.TABLE_NAME,
        key: FOREIGN_KEYS.ID,
      },
    },
  },
  { timestamps: true }
);

Article.hasMany(Comment, {
  constraints: false,
  foreignKey: FOREIGN_KEYS.ARTICLE_REF,
});
Comment.belongsTo(Article, {
  constraints: false,
  foreignKey: FOREIGN_KEYS.ARTICLE_REF,
});

Comment.hasMany(Comment, {
  constraints: false,
  foreignKey: FOREIGN_KEYS.COMMENT_REF,
  as: FOREIGN_KEYS.SUB_COMMENTS,
});

module.exports = Comment;
