const handleRobotCount = (ctx, next) => {
  ctx.state.success({
    total: 7777,
    newlyAdded: 99,
  });
};

module.exports = {
  handleRobotCount,
};
