async function handleGetList(ctx, next) {
  ctx.state.success({
    data: 'un-ok',
  });
}

module.exports = {
  handleGetList,
};
