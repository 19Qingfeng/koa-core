async function handleGetList(ctx, next) {
  ctx.state.success({
    data: 'ok',
  });
}

module.exports = {
  handleGetList,
};
