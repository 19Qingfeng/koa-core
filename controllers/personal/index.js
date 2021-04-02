const {
  getPersonList,
  createPersonal,
  detailPersonal,
  editPersonal,
} = require('@api/personal/index');

const handlePersonalList = async (ctx, next) => {
  const query = ctx.request.query;
  const page_size = query.size;
  const page_index = query.page;
  const params = {
    page_size,
    page_index,
  };
  const {
    data: { list, count },
  } = await getPersonList(params);
  ctx.state.success({
    list,
    total: count,
  });
};

const handlePersonalCreate = async (ctx, next) => {
  const data = ctx.request.body;
  await createPersonal(data);
  ctx.state.success();
};

const handlePersonalDetail = async (ctx, next) => {
  const id = ctx.request.query.id;
  const { data } = await detailPersonal(id);
  ctx.state.success(data);
};

const handlePersonalEdit = async (ctx, next) => {
  const data = ctx.request.body;
  await editPersonal(data);
  ctx.state.success();
};

const handlePersonalStatus = async (ctx, next) => {
  const data = ctx.request.body;
  await editPersonal(data);
  ctx.state.success();
};

module.exports = {
  handlePersonalList,
  handlePersonalCreate,
  handlePersonalDetail,
  handlePersonalEdit,
  handlePersonalStatus,
};
