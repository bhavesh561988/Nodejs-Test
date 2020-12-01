const express = require('express');
const router = express.Router();

const {
  BODY,
  PARAMS,
  QUERY,
} = require('../../constants/request-properties.constant');
const {
  createArticle,
  getArticle,
  getAllArticles,
  getCommentsOfArticle,
} = require('../../controllers/article.controller');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const { idParam } = require('../../validators/common.validator');
const {
  createArticleSchema,
  getAllArticlesQuery,
} = require('../../validators/article.validator');

router.post(
  '/',
  requestValidatorMiddleware([createArticleSchema], [BODY]),
  createArticle
);

router.get(
  '/:id/comments',
  requestValidatorMiddleware([idParam], [PARAMS]),
  getCommentsOfArticle
);

router.get('/:id', requestValidatorMiddleware([idParam], [PARAMS]), getArticle);

router.get(
  '/',
  requestValidatorMiddleware([getAllArticlesQuery], [QUERY]),
  getAllArticles
);

module.exports = router;
