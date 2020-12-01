const {
  SUCCESS,
  INTERNAL_SERVER_ERROR,
} = require('../constants/http-status-code.constant');

const success = (res, message = '', data = {}, meta = {}, errors = []) => {
  return res.status(SUCCESS).json({
    success: true,
    message,
    data,
    meta,
    errors,
  });
};

const failure = (
  res,
  message = '',
  errors = [],
  statusCode = INTERNAL_SERVER_ERROR,
  data = {},
  meta = {}
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data,
    meta,
    errors,
  });
};

module.exports = {
  success,
  failure,
};
