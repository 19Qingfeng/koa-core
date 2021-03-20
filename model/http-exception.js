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

module.exports = {
  HttpException,
  ParamsException,
};
