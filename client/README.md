# Next.js 企业官网项目

一个基于 Next.js 15 构建的现代化企业官网项目，采用最新的 React 19 和现代前端技术栈，提供优秀的开发体验和性能表现。

## 🚀 技术栈

### 核心框架
- **Next.js 15.5.3** - 基于 React 的现代化全栈框架
- **React 19.1.0** - 最新的 React 版本，支持并发特性
- **TypeScript 5** - 类型安全的 JavaScript 超集

### UI 组件库
- **Ant Design 5.27.4** - 企业级 UI 设计语言和组件库
- **TailwindCSS 4** - 实用优先的 CSS 框架

### 状态管理
- **Redux Toolkit 2.9.0** - 现代化的 Redux 开发工具包
- **React Redux 9.2.0** - React 的 Redux 绑定库

### 开发工具
- **ESLint 9** - 代码质量检查和格式化
- **Vite 7.1.7** - 快速的构建工具（用于开发模式）
- **PostCSS** - CSS 转换工具

### 字体和图标
- **Geist 字体** - 现代化的无衬线字体
- **Ant Design Icons** - 丰富的图标库

## 📁 项目结构

```
nextjs-website-case/
├── src/
│   ├── app/                 # Next.js App Router 目录
│   │   ├── globals.css      # 全局样式文件
│   │   ├── layout.tsx       # 根布局组件
│   │   └── page.tsx         # 首页组件
│   ├── components/          # 可复用组件
│   │   ├── Header.tsx       # 页面头部组件
│   │   ├── Hero.tsx         # 英雄区域组件
│   │   ├── About.tsx        # 关于我们组件
│   │   ├── Services.tsx     # 服务介绍组件
│   │   ├── Contact.tsx      # 联系表单组件
│   │   └── Footer.tsx       # 页脚组件
│   └── lib/                 # 工具和配置
│       ├── store.ts         # Redux store 配置
│       ├── StoreProvider.tsx # Redux Provider 组件
│       └── slices/          # Redux slice 目录
├── public/                  # 静态资源目录
│   ├── next.svg            # Next.js logo
│   ├── vercel.svg          # Vercel logo
│   └── *.svg              # 其他 SVG 图标
├── scripts/                # 脚本目录
│   └── dev-monitor.js      # 开发监控脚本
├── .env.development        # 开发环境变量
├── next.config.ts          # Next.js 配置
├── tsconfig.json          # TypeScript 配置
├── package.json           # 项目依赖配置
└── README.md              # 项目说明文档
```

## 🏗️ 架构设计

### 1. 应用架构
- **App Router** - 使用 Next.js 15 最新的 App Router 架构
- **服务端组件** - 充分利用 React Server Components 的优势
- **客户端组件** - 在需要交互性的地方使用客户端组件

### 2. 状态管理架构
- **Redux Toolkit** - 使用现代化的 Redux 进行全局状态管理
- **Slice 模式** - 采用 Redux Toolkit 的 slice 模式组织状态
- **类型安全** - 完整的 TypeScript 类型定义

### 3. 样式架构
- **CSS Modules** - 组件级别的样式隔离
- **TailwindCSS** - 实用优先的 CSS 类名
- **Ant Design** - 统一的 UI 设计语言

### 4. 性能优化
- **Turbopack** - 使用 Next.js 的快速打包工具
- **代码分割** - 自动的代码分割和懒加载
- **图片优化** - 自动的图片优化和 WebP 支持
- **字体优化** - 字体子集和预加载

## 🚀 开发命令

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev          # 使用 Next.js 开发服务器
npm run dev:vite     # 使用 Vite 开发服务器（实验性）
npm run dev:monitor  # 启动开发监控
npm run dev:analyze  # 启用构建分析
```

### 构建和部署
```bash
npm run build        # 生产环境构建
npm run start        # 启动生产服务器
npm run build:vite   # 使用 Vite 构建
npm run preview:vite # 预览 Vite 构建结果
```

### 代码质量
```bash
npm run lint         # 运行 ESLint 检查
```

## ⚙️ 配置说明

### Next.js 配置 (next.config.ts)
- **Turbopack** - 启用更快的开发构建
- **热更新优化** - 自定义文件监听配置
- **构建指示器** - 显示构建状态和位置
- **详细日志** - 启用详细的请求日志

### 开发环境变量 (.env.development)
- 环境特定的配置变量
- 本地开发服务器配置

## 🎨 设计特性

### 响应式设计
- 移动端优先的响应式布局
- 断点系统：sm(640px), md(768px), lg(1024px), xl(1280px)

### 主题系统
- Ant Design 的深色/浅色主题支持
- 自定义主题变量和样式覆盖

### 国际化
- 内置中文语言包 (zh_CN)
- 易于扩展的多语言支持

## 📊 性能特性

### 构建优化
- **Tree Shaking** - 自动移除未使用代码
- **代码分割** - 按路由自动分割代码
- **预加载** - 关键资源的预加载

### 运行时优化
- **图片优化** - 自动的 WebP 格式和尺寸优化
- **字体优化** - 字体显示策略和性能优化
- **缓存策略** - 合理的缓存配置

## 🔧 开发工具

### 调试工具
- React DevTools
- Redux DevTools
- Next.js DevTools

### 监控脚本
- 开发环境性能监控
- 构建时间分析
- 包大小分析

## 🚀 部署

### Vercel 部署 (推荐)
```bash
npx vercel --prod
```

### 其他平台
- Netlify
- AWS Amplify
- 自建服务器

## 📝 开发指南

### 添加新页面
1. 在 `src/app` 目录下创建新的目录
2. 创建 `page.tsx` 文件作为页面组件
3. 在 `layout.tsx` 中配置页面元数据

### 添加新组件
1. 在 `src/components` 目录下创建组件文件
2. 使用 `.tsx` 扩展名和 TypeScript
3. 遵循组件命名规范

### 状态管理
1. 在 `src/lib/slices` 中创建新的 slice
2. 在 `store.ts` 中注册 slice
3. 在组件中使用 `useSelector` 和 `useDispatch`

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 支持

如果您遇到问题：
1. 查看 [Next.js 文档](https://nextjs.org/docs)
2. 查看 [React 文档](https://react.dev)
3. 查看 [Ant Design 文档](https://ant.design)
4. 创建 Issue 描述您的问题

---

**Happy Coding!** 🎉