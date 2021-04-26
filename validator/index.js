const { ValidationError } = require('joi');
const defaultsDeep = require('lodash/defaultsDeep');
async function validate(ctx, schema) {
  try {
    const data = ctx.request.body;
    const query = ctx.request.query;
    const params = ctx.request.params;
    const request = defaultsDeep(data, query, params);
    await schema.validateAsync(request);
  } catch (e) {
    if (e instanceof ValidationError) {
      throw ParamsException(e.message);
    }
    throw e;
  }
}

module.exports = validate;
