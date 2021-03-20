const handleLogin = async (ctx, next) => {
  ctx.state.success({
    token: '1231',
  });
};

module.exports = {
  handleLogin,
};
