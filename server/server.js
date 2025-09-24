const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 静态数据
const staticData = {
  users: [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '用户' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: '编辑' }
  ],
  products: [
    { id: 1, name: '笔记本电脑', price: 5999, category: '电子产品' },
    { id: 2, name: '智能手机', price: 3999, category: '电子产品' },
    { id: 3, name: '平板电脑', price: 2999, category: '电子产品' }
  ],
  articles: [
    { id: 1, title: 'Express.js入门指南', content: '这是一篇关于Express.js的入门教程...', author: '张三' },
    { id: 2, title: 'Node.js最佳实践', content: 'Node.js开发中的最佳实践分享...', author: '李四' },
    { id: 3, title: 'RESTful API设计', content: '如何设计良好的RESTful API...', author: '王五' }
  ],
  settings: {
    siteName: '我的网站',
    theme: 'light',
    language: 'zh-CN',
    features: ['用户管理', '产品展示', '文章发布']
  }
};

// API路由

// 获取所有数据
app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    data: staticData,
    timestamp: new Date().toISOString()
  });
});

// 获取用户列表
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: staticData.users,
    count: staticData.users.length,
    timestamp: new Date().toISOString()
  });
});

// 获取产品列表
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: staticData.products,
    count: staticData.products.length,
    timestamp: new Date().toISOString()
  });
});

// 获取文章列表
app.get('/api/articles', (req, res) => {
  res.json({
    success: true,
    data: staticData.articles,
    count: staticData.articles.length,
    timestamp: new Date().toISOString()
  });
});

// 获取设置
app.get('/api/settings', (req, res) => {
  res.json({
    success: true,
    data: staticData.settings,
    timestamp: new Date().toISOString()
  });
});

// 根据ID获取用户
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = staticData.users.find(u => u.id === userId);
  
  if (user) {
    res.json({
      success: true,
      data: user,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      success: false,
      message: '用户不存在',
      timestamp: new Date().toISOString()
    });
  }
});

// 根据ID获取产品
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = staticData.products.find(p => p.id === productId);
  
  if (product) {
    res.json({
      success: true,
      data: product,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      success: false,
      message: '产品不存在',
      timestamp: new Date().toISOString()
    });
  }
});

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: '服务器运行正常',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 服务信息
app.get('/api/info', (req, res) => {
  res.json({
    success: true,
    data: {
      server: 'Express.js',
      version: '1.0.0',
      port: PORT,
      environment: process.env.NODE_ENV || 'development'
    },
    timestamp: new Date().toISOString()
  });
});

// 获取网站数据（专门为前端页面设计）
app.get('/api/website-data', (req, res) => {
  res.json({
    success: true,
    data: {
      services: [
        {
          title: 'Web开发',
          description: '专业的响应式网站开发，提供最佳的用户体验和性能优化',
          features: ['React/Next.js', 'TypeScript', '响应式设计'],
          gradient: 'from-blue-500 to-blue-600',
          color: 'blue'
        },
        {
          title: '移动应用',
          description: '跨平台移动应用开发，支持iOS和Android平台',
          features: ['React Native', 'Flutter', '原生开发'],
          gradient: 'from-green-500 to-green-600',
          color: 'green'
        },
        {
          title: '云服务',
          description: '云端部署和运维服务，确保应用的高可用性和扩展性',
          features: ['AWS/Aliyun', 'Docker', 'Kubernetes'],
          gradient: 'from-purple-500 to-purple-600',
          color: 'purple'
        },
        {
          title: '数据库设计',
          description: '专业的数据库架构设计和优化，保障数据安全与性能',
          features: ['MySQL', 'MongoDB', 'Redis'],
          gradient: 'from-orange-500 to-orange-600',
          color: 'orange'
        },
        {
          title: 'API开发',
          description: 'RESTful API和GraphQL接口开发，支持微服务架构',
          features: ['Node.js', 'Python', 'Go'],
          gradient: 'from-red-500 to-red-600',
          color: 'red'
        },
        {
          title: '安全审计',
          description: '全面的安全检测和漏洞修复，保护您的业务安全',
          features: ['渗透测试', '代码审计', '安全加固'],
          gradient: 'from-indigo-500 to-indigo-600',
          color: 'indigo'
        }
      ],
      skills: [
        { name: '前端开发', percent: 95, color: '#1890ff', icon: '🚀' },
        { name: '后端开发', percent: 90, color: '#52c41a', icon: '⚡' },
        { name: '移动开发', percent: 85, color: '#faad14', icon: '📱' },
        { name: '云服务', percent: 88, color: '#722ed1', icon: '☁️' }
      ],
      stats: [
        { number: '2018', label: '成立年份', bg: 'bg-blue-100', color: 'text-blue-600' },
        { number: '50+', label: '团队成员', bg: 'bg-green-100', color: 'text-green-600' },
        { number: '500+', label: '完成项目', bg: 'bg-purple-100', color: 'text-purple-600' },
        { number: '100+', label: '满意客户', bg: 'bg-orange-100', color: 'text-orange-600' }
      ]
    },
    timestamp: new Date().toISOString()
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: '服务器内部错误',
    timestamp: new Date().toISOString()
  });
});

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '接口不存在',
    timestamp: new Date().toISOString()
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Express服务器已启动`);
  console.log(`📍 本地地址: http://localhost:${PORT}`);
  console.log(`📊 API端点:`);
  console.log(`   - GET /api/data - 获取所有数据`);
  console.log(`   - GET /api/users - 获取用户列表`);
  console.log(`   - GET /api/products - 获取产品列表`);
  console.log(`   - GET /api/articles - 获取文章列表`);
  console.log(`   - GET /api/settings - 获取设置信息`);
  console.log(`   - GET /api/health - 健康检查`);
  console.log(`   - GET /api/info - 服务信息`);
  console.log(`⏰ 启动时间: ${new Date().toLocaleString('zh-CN')}`);
});

module.exports = app;