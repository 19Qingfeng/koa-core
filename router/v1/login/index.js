const Router = require('koa-router');
const { validateLogin } = require('@validator/login/index');
const { handleLogin } = require('@controllers/login/index');
const router = new Router();

router.prefix('/v1/user');

router.post('/login', validateLogin, handleLogin);

module.exports = router;
