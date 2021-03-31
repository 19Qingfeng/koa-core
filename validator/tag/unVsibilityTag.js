const Joi = require('joi');
const validate = require('../index');

const validateList = async (ctx, next) => {
  const schema = Joi.object({
    size: Joi.string().required(),
    page: Joi.number().required(),
    prop: Joi.string().required(),
    order: Joi.string()
      .regex(/['ascending'|'descending']/)
      .required(),
  });
  await validate(ctx, schema);
  await next();
};

module.exports = {
  validateList,
};
