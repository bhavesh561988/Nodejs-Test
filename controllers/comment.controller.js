const apiHelper = require('../helpers/api.helper');
const { COMMENT_MESSAGES } = require('../constants/messages.constant');
const commentService = require('../services/comment.service');

const createComment = async (req, res) => {
  try {
    const { body } = req;
    const comment = await commentService.createComment(body);
    if (comment && Object.keys(comment).length) {
      return apiHelper.success(res, COMMENT_MESSAGES.CREATE, { comment });
    }
    return apiHelper.failure(
      res,
      COMMENT_MESSAGES.CREATE_ERROR,
      [],
      BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

module.exports = {
  createComment,
};
