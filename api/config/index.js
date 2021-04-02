const axios = require('axios');

const service = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 20000,
});

const statusMethod = {
  400(error) {
    const responseMsg = error.response.data.msg;
    throw ParamsException(responseMsg);
  },
  401() {
    throw TokenError('登陆信息过期，请重新登陆。');
  },
  403() {
    throw TokenError('账号在别处登陆，请重新登陆。');
  },
  500(error) {
    const path = error.config.url;
    const message = `server to server Error at path: ${path}. ${error.message}`;
    throw ServerException(message);
  },
};

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (global.token) {
      // 'Bearer ' +
      config.headers['Authorization'] = global.token;
    }
    return config;
  },
  () => {
    throw ServerException(`server to serve Timeout Error`);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    console.log(response.status, 'status');
    console.log(response.data);
    return response.data;
  },
  (error) => {
    console.log(error.response.data, 'error response');
    if (error.config.error) {
      throw error.config.error;
    }
    const status = (error.response && error.response.status) || 500;
    statusMethod[status](error);
  }
);

module.exports = service;
