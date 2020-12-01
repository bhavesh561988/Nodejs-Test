const Article = require('../models/article.model');

const { ARTICLE_MESSAGES } = require('../constants/messages.constant');

const createArticle = async (body) => {
  try {
    return await Article.create(body);
  } catch (error) {
    throw Error(ARTICLE_MESSAGES.CREATE_ERROR);
  }
};

const getArticle = async (query) => {
  try {
    return await Article.findOne({ where: query });
  } catch (error) {
    throw Error(ARTICLE_MESSAGES.GET_ERROR);
  }
};

const getAllArticles = async (query = {}, attributesObj = {}) => {
  try {
    return await Article.findAll({ where: query, ...attributesObj });
  } catch (error) {
    throw error;
    throw Error(ARTICLE_MESSAGES.GET_ALL_ERROR);
  }
};

module.exports = {
  createArticle,
  getArticle,
  getAllArticles,
};
