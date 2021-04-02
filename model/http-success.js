const { camelCase } = require('../utils/index');

class HttpSuccess {
  constructor(data = {}, code) {
    this.code = code;
    this.data = camelCase(data);
    this.msg = '';
  }
}

module.exports = {
  HttpSuccess,
};
