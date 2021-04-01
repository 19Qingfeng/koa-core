const Router = require('koa-router');

const { validateList } = require('@validator/system');

const { handleSystemList } = require('@controllers/system');

const router = new Router();

router.prefix('/v1/system');

router.get('/list', validateList, handleSystemList);

module.exports = router;
