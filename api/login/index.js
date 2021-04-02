const request = require('../config/index');
const getCaptcha = () => {
  return request({
    url: '/api/v1/captcha',
    method: 'get',
  });
};

const postLogin = (data) => {
  return request({
    url: '/api/v1/login',
    method: 'post',
    data,
    // error: HttpException('用户名或密码不正确', 400, 400),
  });
};

const postUserProfile = (token) => {
  return request({
    url: '/api/v1/sysuser/profile ',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    method: 'get',
  });
};

module.exports = {
  getCaptcha,
  postLogin,
  postUserProfile,
};
