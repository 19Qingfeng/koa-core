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
    global.HttpException = HttpException;
    global.ParamsException = ParamsException;
    global.validateError = (msg) => {
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
