const { ValidationError } = require('joi');

async function validate(ctx, schema) {
  try {
    const data = ctx.request.body;
    await schema.validateAsync(data);
  } catch (e) {
    if (e instanceof ValidationError) {
      throw new ParamsException(e.message);
    }
  }
}

module.exports = validate;
