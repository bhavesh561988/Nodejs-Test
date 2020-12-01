const apiHelper = require('../helpers/api.helper');
const {
  ARTICLE_MESSAGES,
  COMMON_MESSAGES,
} = require('../constants/messages.constant');
const FOREIGN_KEYS = require('../constants/foreign-keys.constant');
const Article = require('../models/article.model');
const Comment = require('../models/comment.model');
const articleService = require('../services/article.service');
const commentService = require('../services/comment.service');

const createArticle = async (req, res) => {
  try {
    const { body } = req;
    const article = await articleService.createArticle(body);
    if (article && Object.keys(article).length) {
      return apiHelper.success(res, ARTICLE_MESSAGES.CREATE, { article });
    }
    return apiHelper.failure(
      res,
      ARTICLE_MESSAGES.CREATE_ERROR,
      [],
      BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await articleService.getArticle({ id });
    if (article && Object.keys(article).length) {
      return apiHelper.success(res, ARTICLE_MESSAGES.GET, { article });
    }
    return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, {
      article: {},
    });
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const getAllArticles = async (req, res) => {
  try {
    const { pageNo, perPageRecords } = req.query;
    const limit = +perPageRecords ? +perPageRecords : 20;
    const offset = +pageNo ? (+pageNo - 1) * limit : 0;
    const articles = await articleService.getAllArticles({}, { limit, offset });
    if (articles && articles.length) {
      return apiHelper.success(res, ARTICLE_MESSAGES.GET_ALL, { articles });
    }
    return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, {
      articles: [],
    });
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const getCommentsOfArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const commentModelObj = {
      model: Comment,
      required: false,
      as: FOREIGN_KEYS.SUB_COMMENTS,
    };
    const comments = await commentService.getAllComments(
      { articleRef: id },
      {
        include: [
          {
            ...commentModelObj,
            include: {
              ...commentModelObj,
            },
          },
          { model: Article, required: false },
        ],
      }
    );
    if (comments && comments.length) {
      return apiHelper.success(res, ARTICLE_MESSAGES.GET_COMMENTS_OF_ARTICLE, {
        comments,
      });
    }
    return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, {
      comments: [],
    });
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

module.exports = {
  createArticle,
  getArticle,
  getAllArticles,
  getCommentsOfArticle,
};
