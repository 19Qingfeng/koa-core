class HttpSuccess {
  constructor(data, code, status) {
    this.code = code;
    this.data = data;
    this.msg = '';
  }
}

module.exports = {
  HttpSuccess,
};
