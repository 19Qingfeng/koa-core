async function handleSystemList(ctx, next) {
  const column = [];
  for (let i of Array.from({ length: 80 })) {
    column.push({
      id: parseInt(Math.random() * 100),
      username: 'wang' + Math.random(),
      role: Math.random() > 0.5 ? 0 : 1,
      update_ts: Date.now(),
      status: Math.random() > 0.5 ? 0 : 1,
    });
  }
  ctx.state.success({
    data: column,
    total: 80,
  });
}

module.exports = {
  handleSystemList,
};
