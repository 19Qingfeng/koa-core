const Router = require('koa-router');
const { handlePersonalList } = require('../../controllers/personal.js');
const { validateList } = require('../../validator/personal');

const router = new Router();

router.prefix('/v1/personal');

router.get('/list', validateList, handlePersonalList);

module.exports = router;
