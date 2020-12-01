const Joi = require('joi');

const { detailObj } = require('./common.validator');

const createCommentSchema = Joi.object().keys({
  articleRef: Joi.number().required(),
  commentRef: Joi.number(),
  ...detailObj,
});

module.exports = {
  createCommentSchema,
};
