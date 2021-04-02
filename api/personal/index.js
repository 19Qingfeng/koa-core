const request = require('../config');

const getPersonList = (params) => {
  return request({
    url: '/api/v1/categories',
    method: 'get',
    params,
  });
};

const createPersonal = (data) => {
  return request({
    url: '/api/v1/categories',
    method: 'post',
    data,
  });
};

const detailPersonal = (id) => {
  return request({
    url: '/api/v1/categories/' + id,
    method: 'get',
  });
};

const editPersonal = (data) => {
  return request({
    url: '/api/v1/category',
    method: 'put',
    data,
  });
};

module.exports = {
  getPersonList,
  createPersonal,
  detailPersonal,
  editPersonal,
};
