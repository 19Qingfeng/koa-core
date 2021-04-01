class HttpException extends Error {
  constructor(msg, code, status) {
    super(msg);
    this.msg = msg;
    this.code = code;
    this.status = status;
  }
}

class ParamsException extends HttpException {
  constructor(msg = '参数错误') {
    super(msg, 400, 400);
  }
}

class TokenError extends HttpException {
  constructor(msg = '登陆信息过期，请重新登陆。', code = 401, status = 401) {
    super(msg, code, status);
  }
}

class ServerException extends HttpException {
  constructor(msg = 'server to server error', code = 500, status = 500) {
    super(msg, 500, 500);
  }
}

module.exports = {
  HttpException,
  ParamsException,
  ServerException,
  TokenError,
};
