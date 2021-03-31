const Router = require('koa-router');
const { validateList } = require('../../../validator/tag/unVsibilityTag');
const { handleGetList } = require('../../../controllers/tag/unVsibilityTag');

const router = new Router();

router.prefix('/v1/tag/un');

router.get('/list', validateList, handleGetList);

module.exports = router;
