---
title: MenuMuse - AI 智能菜单生成器
image: /uploads/illustrations/cuate/menumuse-app.png
date: 2025-06-22 00:00:00
tags:
  - AI
  - 菜单生成
  - 图像识别
  - Next.js
---

# 🍜 MenuMuse - AI 智能菜单生成器



## ✨ 产品简介

MenuMuse 是一款基于先进人工智能技术的菜单生成器，能够将普通的菜单照片转化为充满诗意的美食故事。通过深度学习和自然语言处理技术，MenuMuse 不仅能够智能识别菜品信息，还能为每道菜创作独特的文艺描述，并生成专业级的美食摄影图片。


{{< gallery dir="/uploads/gallery/menumus" >}}

## 在线演示

- 🔗 **在线演示站点**：[menumuse.blazorserver.com](https://menumuse.blazorserver.com/)

### 🎯 核心价值
- **🧠 智能识别**：先进的 AI 视觉技术，精准识别菜单中的每一道美食
- **🎨 诗意文案**：为每道菜品创作独特的文艺描述，让美食拥有文学的温度
- **🌍 双语呈现**：中英文对照的菜品名称，让美食跨越语言的边界
- **📸 美食摄影**：AI 生成专业级的美食图片，让每道菜都如艺术品般呈现
- **💝 个性推荐**：智能搭配建议，帮助您发现味蕾的完美组合
- **🏛️ 文化传承**：深度解析菜品的文化背景和烹饪工艺的精妙之处

---

## 🚀 技术栈

### 前端技术
- **[Next.js 15](https://nextjs.org/)** - React 全栈框架，支持 App Router 和 Server Components
- **[React 19](https://reactjs.org/)** - 用户界面库，支持最新的 RSC 特性
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的 JavaScript 超集
- **[Tailwind CSS 4](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[shadcn/ui](https://ui.shadcn.com/)** - 现代化的 React 组件库 (Neutral 风格)
- **[Lucide React](https://lucide.dev/)** - 精美的图标库
- **[Zustand](https://github.com/pmndrs/zustand)** - 轻量级状态管理

### AI 和后端技术
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - 统一的 AI 开发工具包
- **[OpenAI GPT-4o](https://openai.com/)** - 自然语言处理和内容生成
- **[Google Vertex AI](https://cloud.google.com/vertex-ai)** - 图像生成和视觉识别
- **[Google Gemini](https://deepmind.google/technologies/gemini/)** - 多模态大语言模型
- **[Zod](https://zod.dev/)** - TypeScript 优先的模式验证

### 开发工具
- **[Turbopack](https://turbo.build/pack)** - 高性能的打包工具
- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[Docker](https://www.docker.com/)** - 容器化部署

---

## 🛠️ 快速开始

### 环境要求
- Node.js 18.17+ 
- npm 9.0+
- Docker (可选，用于容器化部署)

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/neozhu/menu-muse-app.git
cd menu-muse-app
```

2. **安装依赖**
```bash
npm install
```

3. **环境配置**
```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，配置 API 密钥：
```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Google Vertex AI
GOOGLE_VERTEX_API_KEY=your_vertex_api_key
GOOGLE_PROJECT_ID=your_google_project_id

# Google AI (Gemini)
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **打开浏览器**
访问 [http://localhost:3000](http://localhost:3000) 查看应用

### 🐳 Docker 部署

1. **构建镜像**
```bash
docker build -t menu-muse-app .
```

2. **运行容器**
```bash
docker run -p 3000:3000 --env-file .env.local menu-muse-app
```

3. **使用 Docker Compose**
```bash
docker-compose up -d
```

---

## 📱 功能特性

### 🎯 核心功能

#### 🔍 智能菜单识别
- 支持多种图片格式 (JPG, PNG, HEIC)
- 智能文字识别 (OCR) 和内容解析
- 多语言菜单支持（中文、英文、日文等）
- 自动图片预处理和优化

#### 🎨 AI 内容生成
- **诗意文案创作**：为每道菜品生成独特的文学描述
- **双语菜名翻译**：中英文对照，国际化展示
- **文化背景解析**：深度挖掘菜品的历史文化内涵
- **烹饪工艺说明**：专业的制作方法和技巧介绍

#### 📸 AI 美食摄影
- 基于 Google Vertex AI Imagen 模型
- 专业级美食摄影风格
- 自动优化光影和构图
- 多种风格和角度选择

#### 💡 智能推荐系统
- 个性化口味匹配
- 营养搭配建议
- 季节性推荐
- 地域特色推荐

### 🌟 用户体验

#### 🚀 三步简单操作
1. **上传菜单照片** - 拍摄或选择菜单图片
2. **AI 智能分析** - 自动识别和解析菜品信息
3. **获得美食故事** - 生成诗意描述和专业图片

#### 🎨 现代化设计
- **Neutral × Half-Flat Minimalism** 设计风格
- **Liquid Class** 流体设计元素
- **Glassmorphism** 玻璃态视觉效果
- 完整的暗色模式支持
- 响应式设计，完美适配各种设备

#### ♿ 无障碍访问
- WCAG AA 标准对比度
- 完整的键盘导航支持
- 屏幕阅读器友好
- 语义化 HTML 结构

---

## 🏗️ 项目架构

```
menu-muse-app/
├── app/                          # Next.js App Router
│   ├── api/                     # API 路由
│   │   ├── analyze-menu/        # 菜单分析接口
│   │   ├── generate-image/      # 图片生成接口
│   │   └── health/              # 健康检查接口
│   ├── menu-magic/              # 菜单魔法功能页面
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 首页
├── components/                   # React 组件
│   ├── ui/                      # shadcn/ui 基础组件
│   ├── menu/                    # 菜单相关组件
│   ├── hero-section.tsx         # 英雄区域组件
│   └── ...
├── lib/                         # 核心库
│   ├── ai/                      # AI 客户端封装
│   │   ├── aiClient.ts         # 多模型 AI 客户端
│   │   └── index.ts            # 统一导出
│   ├── env.ts                   # 环境变量配置
│   └── utils.ts                 # 工具函数
├── hooks/                       # 自定义 React Hooks
├── types/                       # TypeScript 类型定义
├── stores/                      # Zustand 状态管理
└── public/                      # 静态资源
```

### 🔧 核心模块

#### AI 客户端 (`lib/ai/aiClient.ts`)
- 统一的多模型 AI 接口
- 支持 OpenAI、Google Vertex AI、Google Gemini
- 自动错误处理和重试机制
- 类型安全的 API 调用

#### 组件系统 (`components/`)
- 基于 shadcn/ui 的设计系统
- 可复用的 UI 组件库
- 严格的 TypeScript 类型检查
- 无障碍访问支持

#### 状态管理 (`stores/`)
- Zustand 轻量级状态管理
- 支持中间件扩展
- 服务端渲染友好

---

## 🧪 测试

### 运行测试
```bash
# 单元测试
npm run test

# 集成测试
npm run test:integration

# E2E 测试
npm run test:e2e

# 测试覆盖率
npm run test:coverage
```

### 测试 AI 功能
```bash
# 测试图片生成
npm run test:image

# 测试菜单分析
npm run test:menu-analysis
```

---

## 📊 性能优化

### 🚀 加载性能
- **Server Components** 优先，减少客户端 JavaScript
- **Dynamic Imports** 按需加载大型组件
- **Image Optimization** 使用 `next/image` 自动优化
- **Font Optimization** 使用 `next/font` 减少 CLS

### 🎯 运行时性能
- **React 19** 并发特性
- **Suspense** 优雅的异步 UI
- **useOptimistic** 乐观更新
- **缓存策略** 智能的数据缓存

### 📈 监控指标
- **Web Vitals** 核心网络指标监控
- **Lighthouse** 性能审计
- **Bundle Analyzer** 打包分析
- **Performance Profiling** 性能分析

---

## 🔐 安全性

### 🛡️ 数据保护
- **API 密钥管理**：安全的环境变量配置
- **输入验证**：Zod 模式验证
- **错误处理**：不泄露敏感信息的错误响应
- **Rate Limiting**：API 请求频率限制

### 🔒 隐私合规
- **数据最小化**：只收集必要的数据
- **临时存储**：图片处理后自动删除
- **透明度**：清晰的隐私政策
- **用户控制**：完整的数据控制权

---

## 🌍 国际化

### 🗺️ 多语言支持
- **中文**：简体中文（默认）
- **English**：英语
- **日本語**：日语（规划中）
- **한국어**：韩语（规划中）

### 🎨 本地化适配
- **文化适应**：本地化的设计元素
- **菜系特色**：针对不同地区的菜系优化
- **时区处理**：自动时区识别和转换

---

## 🤝 贡献指南

我们欢迎并感谢所有形式的贡献！

### 📋 贡献方式
1. **报告问题**：在 [Issues](issues/) 中报告 bug 或提出功能请求
2. **提交代码**：Fork 仓库，创建分支，提交 PR
3. **改进文档**：完善文档和示例
4. **测试反馈**：参与测试并提供反馈

### 🛠️ 开发流程
1. Fork 此仓库
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交变更：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建 Pull Request

### 📝 代码规范
- 遵循 ESLint 配置
- 使用 TypeScript 严格模式
- 编写单元测试
- 保持代码可读性和可维护性

详细的贡献指南请参考 [CONTRIBUTING.md](CONTRIBUTING.md)。

---
