const Router = require('koa-router');

const { handleSystemList } = require('@validator/system');

const router = new Router();

router.prefix('/v1/system');

router.get('/list', handleSystemList);

module.exports = router;
