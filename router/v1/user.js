const Router = require('koa-router');
const { validateLogin } = require('../../validator/user');
const { handleLogin } = require('../../controllers/user');
const router = new Router();

router.prefix('/v1/user');

router.post('/login', validateLogin, handleLogin);

module.exports = router;
