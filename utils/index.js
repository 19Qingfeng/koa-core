const lodashCamelCase = require('lodash/camelCase');

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function parseHeader(headers, normazilerName) {
  if (!headers) return;
  Object.keys(headers).forEach((header) => {
    if (
      header !== normazilerName &&
      header.toLocaleLowerCase() === normazilerName.toLocaleLowerCase()
    ) {
      headers[normazilerName] = headers[header];
      delete headers[header];
    }
  });
}

/**
 *  列表返回内容key值转为驼峰
 *
 * @param {Array|Object} obj key值转为驼峰
 * @returns
 */
function camelCase(obj) {
  const isArray = Array.isArray(obj);
  const result = isArray ? [] : {};
  if (Array.isArray(obj)) {
    // 如果是数组
    for (let i of obj) {
      result.push(camelCase(i));
    }
  }
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const camelKey = lodashCamelCase(key);
    // 数组也要进入
    if (isPlainObject(value) || Array.isArray(value)) {
      result[camelKey] = camelCase(value);
    } else {
      result[camelKey] = value;
    }
  });
  return result;
}

module.exports = {
  camelCase,
  parseHeader,
};
