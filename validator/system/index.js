async function handleSystemList(ctx, next) {
  const schema = Joi.object({
    size: Joi.string().required(),
    page: Joi.number().required(),
    prop: Joi.string().required(),
    order: Joi.string()
      .regex(/['ascending'|'descending']/)
      .required(),
  });
  await validateRequest(ctx, schema);
  await next();
}

module.exports = {
  handleSystemList,
};
