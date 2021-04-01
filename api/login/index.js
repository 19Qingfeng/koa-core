const request = require('../config/index');

const getCaptcha = () => {
  return request({
    url: '/api/v1/captcha',
    method: 'get',
  });
};

module.exports = {
  getCaptcha,
};
