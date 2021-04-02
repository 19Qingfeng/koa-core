const request = require('../config');

const getUserList = (params) => {
  return request({
    url: '/api/v1/sysusers',
    method: 'get',
    params,
  });
};

const createUser = (data) => {
  return request({
    url: '/api/v1/sysusers',
    method: 'post',
    data,
  });
};

const getUserDetail = (id) => {
  return request({
    url: '/api/v1/sysusers/' + id,
    method: 'get',
  });
};

const editUser = (data) => {
  return request({
    url: '/api/v1/sysusers',
    method: 'put',
    data,
  });
};

module.exports = {
  getUserList,
  createUser,
  getUserDetail,
  editUser,
};
