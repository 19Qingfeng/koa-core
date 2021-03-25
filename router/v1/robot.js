const Router = require('koa-router');
const { validateRobotCount } = require('../../validator/user');
const { handleRobotCount } = require('../../controllers/robot.js');
const router = new Router();

router.prefix('/v1/robot');

router.get('/get_robot_count', handleRobotCount);

module.exports = router;
