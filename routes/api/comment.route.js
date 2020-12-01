const express = require('express');
const router = express.Router();

const { BODY } = require('../../constants/request-properties.constant');
const { createComment } = require('../../controllers/comment.controller');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const { createCommentSchema } = require('../../validators/comment.validator');

router.post(
  '/',
  requestValidatorMiddleware([createCommentSchema], [BODY]),
  createComment
);

module.exports = router;
