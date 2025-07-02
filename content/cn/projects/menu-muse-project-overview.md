---
title: MenuMuse 项目概述
image: /uploads/illustrations/cuate/menumuse.png
date: 2025-07-02 00:00:00
tags: 
  - GitHub
---

## 项目概述

MenuMuse 是一款基于先进人工智能技术的菜单生成器，能够将普通的菜单照片转化为充满诗意的美食故事。通过深度学习和自然语言处理技术，MenuMuse 不仅能够智能识别菜品信息，还能为每道菜创作独特的文艺描述，并生成专业级的美食摄影图片。


### Demo
Visit the live demo at [MenuMuse Demo](https://menumuse.blazorserver.com/)

### 核心价值
- **🧠 智能识别**：先进的 AI 视觉技术，精准识别菜单中的每一道美食
- **🎨 诗意文案**：为每道菜品创作独特的文艺描述，让美食拥有文学的温度
- **🌍 双语呈现**：中英文对照的菜品名称，让美食跨越语言的边界
- **📸 美食摄影**：AI 生成专业级的美食图片，让每道菜都如艺术品般呈现
- **💝 个性推荐**：智能搭配建议，帮助您发现味蕾的完美组合
- **🏛️ 文化传承**：深度解析菜品的文化背景和烹饪工艺的精妙之处

---

## 技术栈

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

---

## 快速开始

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

---

## 联系我们

### 🔗 链接
- **官方网站**：[https://menumuse.blazorserver.com](https://menumuse.blazorserver.com)
- **GitHub**：[https://github.com/neozhu/menu-muse-app](https://github.com/neozhu/menu-muse-app)

### 💬 社区
- **GitHub Discussions**：[参与讨论](discussions/)
- **问题反馈**：[提交 Issue](issues/)
- **邮件联系**：neo.js.cn@gmail.com
