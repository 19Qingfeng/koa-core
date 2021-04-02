const Router = require('koa-router');

const {
  validateList,
  validateCreate,
  validateDetail,
  validateEdit,
  validateUpdateStatus,
} = require('@validator/system');

const {
  handleSystemList,
  handleSystemCreate,
  handleSystemDetail,
  handleSystemEdit,
} = require('@controllers/system');

const router = new Router();

router.prefix('/v1/system');

// 用户列表
router.get('/list', validateList, handleSystemList);

// 创建用户
router.post('/create', validateCreate, handleSystemCreate);

// 拉取详情
router.get('/detail', validateDetail, handleSystemDetail);

// 修改用户
router.patch('/edit', validateEdit, handleSystemEdit);

// 更新用户状态
router.put('/update/status', validateUpdateStatus, handleSystemEdit);

module.exports = router;
