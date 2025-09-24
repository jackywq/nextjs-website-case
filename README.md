# Next.js + Express 全栈网站项目

一个现代化的全栈Web应用项目，结合了Next.js前端和Express.js后端API服务器。

## 🚀 项目特性

- **前端**: Next.js 15.5.3 + React + TypeScript
- **后端**: Express.js + RESTful API
- **开发工具**: concurrently 同时运行前后端
- **代码质量**: ESLint + TypeScript 配置
- **部署就绪**: 完整的开发和生产环境配置

## 📁 项目结构

```
nextjs-website-case/
├── client/                 # Next.js 前端应用
│   ├── src/
│   │   ├── app/           # App Router 页面
│   │   ├── components/    # React 组件
│   │   ├── hooks/         # 自定义 Hooks
│   │   ├── lib/           # 工具库
│   │   └── utils/         # 工具函数
│   ├── public/            # 静态资源
│   └── package.json       # 前端依赖
├── server/                # Express.js 后端API
│   ├── server.js          # 服务器主文件
│   ├── test-api.js        # API 测试文件
│   └── package.json       # 后端依赖
├── package.json           # 根目录配置（开发脚本）
└── README.md              # 项目说明
```

## 🛠️ 开发环境

### 前置要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
# 安装根目录开发工具
npm install

# 安装前端依赖
cd client && npm install

# 安装后端依赖  
cd server && npm install
```

### 启动开发服务器

```bash
# 同时启动前端和后端（推荐）
npm run dev

# 或者分别启动
npm run dev:client    # 仅启动前端 (端口 3000)
npm run dev:server    # 仅启动后端 (端口 3002)
```

## 🌐 服务地址

- **前端应用**: http://localhost:3000
- **API服务器**: http://localhost:3002

## 📊 API 端点

后端服务器提供以下RESTful API：

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/data` | GET | 获取所有数据 |
| `/api/users` | GET | 获取用户列表 |
| `/api/products` | GET | 获取产品列表 |
| `/api/articles` | GET | 获取文章列表 |
| `/api/settings` | GET | 获取设置信息 |
| `/api/health` | GET | 健康检查 |
| `/api/info` | GET | 服务信息 |

## 🚦 可用脚本

### 根目录脚本

```bash
npm run dev          # 同时启动前后端开发服务器
npm run dev:client   # 仅启动前端开发服务器
npm run dev:server   # 仅启动后端开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 运行代码检查
```

### 客户端脚本 (client/)

```bash
cd client
npm run dev        # 开发模式
npm run build      # 构建生产版本
npm run start      # 启动生产服务器
npm run lint       # 代码检查
```

### 服务器脚本 (server/)

```bash
cd server  
npm start         # 启动服务器
npm run dev       # 开发模式（如配置）
```

## 🔧 开发配置

### 环境变量

前端环境文件 (`client/.env.development`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3002
```

### Git 配置

项目已配置完整的 `.gitignore` 文件，包含：
- Node.js 依赖忽略规则
- 构建输出目录
- 环境配置文件
- IDE 和操作系统生成文件
- 日志和运行时数据

## 📦 生产部署

### 构建生产版本

```bash
# 构建前端
cd client && npm run build

# 启动生产环境
npm run start
```

### Docker 部署（可选）

项目结构支持容器化部署，可配置Dockerfile进行容器化。

## 🐛 故障排除

### 常见问题

1. **端口冲突**: 确保3000和3002端口未被占用
2. **依赖安装**: 确保所有子目录都安装了依赖
3. **并发启动**: 使用 `npm run dev` 确保前后端同时启动

### 开发工具

- 使用 `npm run dev` 自动管理前后端进程
- 查看终端日志了解服务状态
- 访问 `/api/health` 检查API服务健康状态

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

---

**Happy Coding!** 🎉