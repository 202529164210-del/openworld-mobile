const questions = [
  {
    id: 1,
    title: '以下哪个是 JavaScript 中用于声明常量的关键字？',
    options: ['var', 'let', 'const', 'define'],
    answer: 2,
    explanation: 'const 用于声明块级常量。'
  },
  {
    id: 2,
    title: 'HTTP 状态码 404 表示什么？',
    options: ['服务器内部错误', '资源未找到', '请求超时', '权限不足'],
    answer: 1,
    explanation: '404 表示请求的资源不存在。'
  },
  {
    id: 3,
    title: '在微信小程序中，页面逻辑文件的后缀是？',
    options: ['.js', '.ts', '.wxml', '.wxss'],
    answer: 0,
    explanation: '页面逻辑通常写在 .js 文件中。'
  },
  {
    id: 4,
    title: '以下哪种数据结构遵循先进后出（LIFO）？',
    options: ['队列', '栈', '链表', '哈希表'],
    answer: 1,
    explanation: '栈是典型的 LIFO 结构。'
  },
  {
    id: 5,
    title: 'Git 中用于提交改动的命令是？',
    options: ['git push', 'git status', 'git commit', 'git diff'],
    answer: 2,
    explanation: 'git commit 用于将暂存区改动提交到本地仓库。'
  }
];

module.exports = {
  questions
};
