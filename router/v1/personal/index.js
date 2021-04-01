const Router = require('koa-router');
const { handlePersonalList } = require('@controllers/personal/index');
const { validateList } = require('@validator/personal/index');

const router = new Router();

router.prefix('/v1/personal');

router.get('/list', validateList, handlePersonalList);

module.exports = router;
