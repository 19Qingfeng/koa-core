const { parseHeader } = require('../utils');

async function useToken(ctx, next) {
  const whiteList = ['/v1/user/captcha', '/v1/user/login'];
  const headers = ctx.request.header;
  parseHeader(headers, 'Authorization');
  const path = ctx.request.path;
  if (whiteList.includes(path)) {
    await next();
    return;
  }
  const token = ctx.request.header['Authorization'];
  if (!token) {
    throw TokenError();
  }
  global.token = token;
  await next();
}

module.exports = useToken;
