const validateList = async (ctx, next) => {
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
};

const validateCreate = async (ctx, next) => {
  const schema = Joi.object({
    category_name: Joi.string().required(),
    desc: Joi.string().required(),
  });
  await validateRequest(ctx, schema);
  await next();
};

const validateDetail = async (ctx, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  await validateRequest(ctx, schema);
  await next();
};

const validateEdit = async (ctx, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    category_name: Joi.string().optional(),
    desc: Joi.string().optional(),
    status: Joi.number().optional(),
  });
  await validateRequest(ctx, schema);
  await next();
};

module.exports = {
  validateList,
  validateCreate,
  validateDetail,
  validateEdit,
};
