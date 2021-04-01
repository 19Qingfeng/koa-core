const handleRobotCount = async (ctx, next) => {
  ctx.state.success({
    total: 7777,
    newlyAdded: 99,
  });
};

const handleRobotList = async (ctx, next) => {
  const query = ctx.query;
  const list = [];
  for (let i = 0; i < 50; i++) {
    list.push({
      id: 1,
      name: 'wanghaoyu',
      avatar:
        'https://tse1-mm.cn.bing.net/th?id=OIP.ZwatLnpo7avdvBtWRHB8TwHaE8&w=136&h=100&c=8&rs=1&qlt=90&dpr=2&pid=3.1&rm=2',
      age: 19,
      cate: ['人设1', '人设2'],
      gender: 0,
      tag: ['喝酒', '抽烟', '烫头'],
      ablum: 10,
      publicStories: 10,
      privateStories: 2,
      quickChat: 10,
      chatSource: 20,
      coins: 8980,
    });
  }
  const data = {
    total: 100,
    data: list,
    query,
  };
  ctx.state.success(data);
};

module.exports = {
  handleRobotCount,
  handleRobotList,
};
