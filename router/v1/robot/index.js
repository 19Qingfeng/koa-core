const Router = require('koa-router');
const {
  handleRobotCount,
  handleRobotList,
} = require('@controllers/robot/index');
const router = new Router();

router.prefix('/v1/robot');

router.get('/get_robot_count', handleRobotCount);

router.get('/get_robot_list', handleRobotList);

module.exports = router;
