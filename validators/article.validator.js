const Joi = require('joi');

const { detailObj } = require('./common.validator');

const createArticleSchema = Joi.object().keys({
  title: Joi.string().required(),
  ...detailObj,
});

const getAllArticlesQuery = Joi.object().keys({
  pageNo: Joi.number(),
  perPageRecords: Joi.number(),
});

module.exports = {
  createArticleSchema,
  getAllArticlesQuery,
};
