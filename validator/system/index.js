async function validateList(ctx, next) {
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

async function validateCreate(ctx, next) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.allow(1, 2).required(),
  });
  await validateRequest(ctx, schema);
  await next();
}

async function validateDetail(ctx, next) {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  await validateRequest(ctx, schema);
  await next();
}

async function validateEdit(ctx, next) {
  const schema = Joi.object({
    id: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().optional(),
    role: Joi.any().allow(0, 1),
  });
  await validateRequest(ctx, schema);
  await next();
}

async function validateUpdateStatus(ctx, next) {
  const schema = Joi.object({
    id: Joi.number().required(),
    status: Joi.allow(1, 2),
  });
  await validateRequest(ctx, schema);
  await next();
}

module.exports = {
  validateList,
  validateCreate,
  validateDetail,
  validateEdit,
  validateUpdateStatus,
};
