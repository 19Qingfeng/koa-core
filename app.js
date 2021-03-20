const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const InitManager = require('./core/init');
const { useSuccessModel, useExceptionModel } = require('./middleware/model');
const app = new Koa();

app.use(useSuccessModel);
app.use(useExceptionModel);

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());

InitManager.initCore(app);

module.exports = app;
