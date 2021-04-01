const handlePersonalList = async (ctx, next) => {
  const column = [];
  for (let i = 0; i < 100; i++) {
    column.push({
      id: Math.random() * 100,
      category_name: 'name' + Math.random() * 10,
      count: Math.random() * 10000,
      desc: '人设说明',
    });
  }
  const data = {
    total: 100,
    data: column,
  };
  ctx.state.success(data);
};

module.exports = {
  handlePersonalList,
};
