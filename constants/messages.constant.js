const COMMON_MESSAGES = {
  ROUTE_NOT_EXISTS: 'Requested route does not exists!',
  VALIDATION_ERROR: 'Data validation failed!',
  UNKNOWN_ERROR: 'Something went wrong, please try again later!',
  NO_DATA_FOUND: 'No data found!',
};

const ARTICLE_MESSAGES = {
  CREATE: 'Article created successfully!',
  CREATE_ERROR: 'Unable to create article!',
  GET: 'Article fetched successfully!',
  GET_ERROR: 'Unable to fetch requested article!',
  GET_ALL: 'All articles fetched successfully!',
  GET_ALL_ERROR: 'Unable to fetch all articles!',
  GET_COMMENTS_OF_ARTICLE: 'All comments fetched according to article!',
};

const COMMENT_MESSAGES = {
  CREATE: 'Comment created successfully!',
  CREATE_ERROR: 'Unable to create comment!',
  UPDATE_ERROR: 'Unable to update comment!',
  GET_ERROR: 'Unable to fetch requested comment!',
  GET_ALL_ERROR: 'Unable to fetch all comments!',
};

const SUB_COMMENT_MESSAGES = {
  CREATE: 'Sub comment created successfully!',
  CREATE_ERROR: 'Unable to create sub comment!',
  COMMENT_ID_NOT_EXISTS: 'Comment id not exists!',
};

module.exports = {
  COMMON_MESSAGES,
  ARTICLE_MESSAGES,
  COMMENT_MESSAGES,
  SUB_COMMENT_MESSAGES,
};
