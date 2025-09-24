# Express 服务器

这是一个使用 Express.js 搭建的 RESTful API 服务器，提供静态数据服务。

## 🚀 功能特性

- ✅ RESTful API 设计
- ✅ CORS 跨域支持
- ✅ 静态数据服务
- ✅ 健康检查端点
- ✅ 错误处理中间件
- ✅ 详细的日志输出

## 📊 API 端点

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/data` | GET | 获取所有数据 |
| `/api/users` | GET | 获取用户列表 |
| `/api/users/:id` | GET | 根据ID获取用户 |
| `/api/products` | GET | 获取产品列表 |
| `/api/products/:id` | GET | 根据ID获取产品 |
| `/api/articles` | GET | 获取文章列表 |
| `/api/settings` | GET | 获取设置信息 |
| `/api/health` | GET | 健康检查 |
| `/api/info` | GET | 服务信息 |

## 🛠️ 安装和运行

### 1. 安装依赖
```bash
cd server
npm install
```

### 2. 启动服务器
```bash
# 生产模式
npm start

# 开发模式（需要安装nodemon）
npm run dev
```

### 3. 测试API
```bash
node test-api.js
```

## 🌐 访问地址

服务器启动后，可以通过以下地址访问：
- 本地地址: http://localhost:3002
- API文档: 查看控制台输出的端点列表

## 📁 项目结构

```
server/
├── package.json          # 项目配置和依赖
├── server.js            # 服务器主文件
├── test-api.js          # API测试脚本
└── README.md           # 说明文档
```

## 🔧 配置

- 端口号: 3002（可通过环境变量 PORT 修改）
- CORS: 已启用跨域支持
- 静态文件: public 目录下的文件可静态访问

## 📋 数据格式

### 用户数据
```json
{
  "id": 1,
  "name": "张三",
  "email": "zhangsan@example.com",
  "role": "管理员"
}
```

### 产品数据
```json
{
  "id": 1,
  "name": "笔记本电脑",
  "price": 5999,
  "category": "电子产品"
}
```

### 响应格式
所有API响应都遵循以下格式：
```json
{
  "success": true,
  "data": {},
  "message": "操作成功",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🐛 故障排除

1. **端口占用**: 如果3002端口被占用，设置环境变量 `PORT=其他端口`
2. **依赖问题**: 删除 node_modules 重新安装 `rm -rf node_modules && npm install`
3. **CORS问题**: 确保前端应用正确配置跨域

## 📝 开发说明

- 服务器使用 Express.js 4.x
- 支持中间件扩展
- 易于添加新的API端点
- 包含完整的错误处理

## 🔗 相关项目

- 前端Next.js应用: 位于项目根目录
- 共享静态数据: 可在前后端之间共享数据格式

## 📄 许可证

MIT License