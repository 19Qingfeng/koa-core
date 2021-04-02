const Router = require('koa-router');
const {
  handlePersonalList,
  handlePersonalCreate,
  handlePersonalDetail,
  handlePersonalEdit,
  handlePersonalStatus,
} = require('@controllers/personal/index');
const {
  validateList,
  validateCreate,
  validateDetail,
  validateEdit,
} = require('@validator/personal/index');

const router = new Router();

router.prefix('/v1/personal');

// 列表
router.get('/list', validateList, handlePersonalList);

// 创建
router.post('/create', validateCreate, handlePersonalCreate);

// 查看详情
router.get('/detail', validateDetail, handlePersonalDetail);

// 编辑
router.patch('/edit', validateEdit, handlePersonalEdit);

// 切换显示隐藏
router.put('/update/status', validateEdit, handlePersonalStatus);

module.exports = router;
