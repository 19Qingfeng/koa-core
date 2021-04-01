const Router = require('koa-router');
const { validateLogin } = require('@validator/login/index');
const { handleLogin, handleCaptcha } = require('@controllers/login/index');
const router = new Router();

router.prefix('/v1/user');

router.get('/captcha', handleCaptcha);

router.post('/login', validateLogin, handleLogin);

module.exports = router;
