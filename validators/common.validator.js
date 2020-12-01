const Joi = require('joi');

const idParam = Joi.object().keys({
  id: Joi.number().required(),
});

const detailObj = {
  nickname: Joi.string().required(),
  content: Joi.string().required(),
};

module.exports = {
  idParam,
  detailObj,
};
