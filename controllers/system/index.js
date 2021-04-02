const {
  getUserList,
  createUser,
  getUserDetail,
  editUser,
} = require('@api/system');

async function handleSystemList(ctx, next) {
  const query = ctx.request.query;
  const page_size = query.size;
  const page_index = query.page;
  const params = {
    page_size,
    page_index,
  };
  const {
    data: { list, count },
  } = await getUserList(params);
  ctx.state.success({
    list,
    total: count,
  });
}

async function handleSystemCreate(ctx, next) {
  const data = ctx.request.body;
  await createUser(data);
  ctx.state.success();
}

async function handleSystemDetail(ctx, next) {
  const id = ctx.request.query.id;
  const { data } = await getUserDetail(id);
  ctx.state.success(data);
}

async function handleSystemEdit(ctx, next) {
  const data = ctx.request.body;
  await editUser(data);
  ctx.state.success();
}

module.exports = {
  handleSystemList,
  handleSystemCreate,
  handleSystemDetail,
  handleSystemEdit,
};
