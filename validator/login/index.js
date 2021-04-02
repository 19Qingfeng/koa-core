const validateLogin = async (ctx, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    code: Joi.string().required(),
    uuid: Joi.string().required(),
  });
  await validateRequest(ctx, schema);
  await next();
};

module.exports = {
  validateLogin,
};
