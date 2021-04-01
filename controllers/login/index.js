const { getCaptcha } = require('@api/login');

const handleCaptcha = async (ctx, next) => {
  const data = await getCaptcha();
  console.log(data, 'data');
};

const handleLogin = async (ctx, next) => {
  ctx.state.success({
    token: '1231',
  });
};

module.exports = {
  handleLogin,
  handleCaptcha,
};
