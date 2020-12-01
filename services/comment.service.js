const Comment = require('../models/comment.model');

const { COMMENT_MESSAGES } = require('../constants/messages.constant');

const createComment = async (body) => {
  try {
    return await Comment.create(body);
  } catch (error) {
    throw Error(COMMENT_MESSAGES.CREATE_ERROR);
  }
};

const updateComment = async (query, body) => {
  try {
    return await Comment.update(body, { where: query });
  } catch (error) {
    throw Error(COMMENT_MESSAGES.UPDATE_ERROR);
  }
};

const getComment = async (query) => {
  try {
    return await Comment.findOne({ where: query });
  } catch (error) {
    throw Error(COMMENT_MESSAGES.GET_ERROR);
  }
};

const getAllComments = async (query = {}, attributesObj = {}) => {
  try {
    return await Comment.findAll({ where: query, ...attributesObj });
  } catch (error) {
    throw Error(COMMENT_MESSAGES.GET_ALL_ERROR);
  }
};

module.exports = {
  createComment,
  updateComment,
  getComment,
  getAllComments,
};
