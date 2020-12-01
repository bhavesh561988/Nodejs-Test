const express = require('express');
const router = express.Router();

router.use('/articles', require('./api/article.route'));
router.use('/comments', require('./api/comment.route'));

module.exports = router;
