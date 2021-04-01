const validateRobotCount = async (ctx, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });
  await validateRequest(ctx, schema);
  await next();
};

module.exports = {
  validateRobotCount,
};
