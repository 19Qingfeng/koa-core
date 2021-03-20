const { HttpSuccess } = require('../model/http-success');
const { HttpException } = require('../model/http-exception');

/* 获取Restful status */
const getSuccessStatus = (method) => {
  const _method = method.toLocaleLowerCase();
  const statusList = {
    get: 200,
    post: 201,
    put: 200,
    patch: 200,
    delete: 204,
  };
  return statusList[_method];
};

// 成功中间件
async function useSuccessModel(ctx, next) {
  ctx.state.success = function (data, code = 0, statusCode) {
    const status = statusCode || getSuccessStatus(ctx.method);
    ctx.status = status;
    const successModel = new HttpSuccess(data, code);
    ctx.body = successModel;
  };
  await next();
}

// 失败中间件 错误处理
async function useExceptionModel(ctx, next) {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpException) {
      // 已知错误
      ctx.body = {
        code: e.code,
        msg: e.msg,
      };
      ctx.status = e.status;
    } else {
      ctx.body = {
        code: e.code || 500,
        msg: e.msg || '服务器错误',
      };
      ctx.status = e.status || 500;
    }
  }
}

module.exports = {
  useSuccessModel,
  useExceptionModel,
};
