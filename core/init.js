const Router = require('koa-router');
const requireDirectory = require('require-directory');
const { HttpException, ParamsException } = require('../model/http-exception');

class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initGlobalVar();
    InitManager.initRouter();
  }
  static initGlobalVar() {
    // 基本已知错误工厂
    global.HttpException = (msg, code, status) => {
      return new HttpException(msg, code, status); // 公用错误类
    };
    // 参数错误工厂
    global.ParamsException = (msg) => {
      return new ParamsException(msg);
    };
  }

  static initRouter() {
    const loadModules = (obj) => {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
        InitManager.app.use(obj.allowedMethods());
      }
    };
    requireDirectory(module, `${process.cwd()}/router`, {
      visit: loadModules,
    });
  }
}

module.exports = InitManager;
