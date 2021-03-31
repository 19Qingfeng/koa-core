const { ValidationError } = require('joi');
const defaultsDeep = require('lodash/defaultsDeep');

async function validate(ctx, schema) {
  try {
    const data = ctx.request.body;
    const query = ctx.request.query;
    const params = defaultsDeep(data, query);
    await schema.validateAsync(params);
  } catch (e) {
    if (e instanceof ValidationError) {
      throw new ParamsException(e.message);
    }
    throw e;
  }
}

module.exports = validate;
