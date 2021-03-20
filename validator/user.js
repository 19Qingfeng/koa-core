const Joi = require('joi');
const validate = require('./index');

const validateLogin = async (ctx, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });
  await validate(ctx, schema);
  await next();
};

module.exports = {
  validateLogin,
};
