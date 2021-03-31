const Router = require('koa-router');
const { validateList } = require('../../../validator/tag/vsibilityTag');
const { handleGetList } = require('../../../controllers/tag/vsibilityTag');
const router = new Router();

router.prefix('/v1/tag');

router.get('/list', validateList, handleGetList);

module.exports = router;
