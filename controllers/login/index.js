const { getCaptcha, postLogin, postUserProfile } = require('@api/login');

const handleCaptcha = async (ctx, next) => {
  const { data, id } = await getCaptcha();
  const responseData = {
    src: data,
    id,
  };
  ctx.state.success(responseData);
};

const handleLogin = async (ctx, next) => {
  const params = ctx.request.body;
  const { token } = await postLogin(params);
  const {
    data: { username, id, role },
  } = await postUserProfile(token);
  const responseData = {
    username,
    id,
    role,
    token,
  };
  ctx.state.success(responseData);
};

module.exports = {
  handleLogin,
  handleCaptcha,
};
