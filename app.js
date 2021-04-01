const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const InitManager = require('./core/init');
const { useSuccessModel, useExceptionModel } = require('./middleware/model');
const useToken = require('./middleware/token');
const app = new Koa();

app.use(useSuccessModel);
app.use(useExceptionModel);

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());

app.use(useToken);

InitManager.initCore(app);

module.exports = app;
