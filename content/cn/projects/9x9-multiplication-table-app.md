---
title: '九九乘法表学习应用'
image: /uploads/illustrations/cuate/9x9app.png
date: 2025-07-02 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "在 GitHub 上查看" "https://github.com/neozhu/9x9" >}}
{{< /brick_title >}}

一款现代化的交互式网络应用程序，旨在通过引人入胜的视觉和音频功能帮助学生学习九九乘法表。本应用将传统的中国学习方法与现代技术相结合，创造出一个高效且愉快的学习体验。

## 在线演示
访问在线演示：[九九乘法表演示](https://9x9.blazorserver.com/)

## 核心功能

### 🎯 互动学习
- **视觉网格**：交互式九九乘法表，单元格可点击
- **公式显示**：同时展示中文传统口诀和数学等式
- **面积可视化**：突出显示矩形区域以演示乘法概念
- **相同结果高亮**：自动突出显示所有得出相同结果的组合

### 🔊 语音学习
- **文字转语音**：乘法口诀的中文发音
- **语音控制**：音频开关和当前公式重复功能
- **优化语音**：调整语速、音调和音量，提供更好的学习体验

### 🎨 用户体验
- **响应式设计**：在桌面和移动设备上无缝运行
- **明暗主题**：支持自动主题切换
- **流畅动画**：引人入胜的过渡效果和视觉反馈
- **触屏友好**：针对触摸设备优化的按钮尺寸

### 🌏 本地化
- **中文口诀**：传统中文乘法口诀
- **双语显示**：中文口诀配合阿拉伯数字等式
- **文化学习**：正宗的中国数学学习方法

## 教育优势

### 视觉学习
- **空间理解**：通过矩形可视化帮助理解乘法面积概念
- **模式识别**：突出显示相同结果，揭示数学规律
- **互动参与**：动手学习保持学生注意力

### 听觉学习
- **发音练习**：听取正确的中文发音
- **记忆辅助**：音频强化帮助记忆
- **多感官**：结合视觉和听觉学习方式

## 技术栈

### 前端技术
- **[Next.js 14](https://nextjs.org/)** - 支持 TypeScript 的 React 框架
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[Web Speech API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API)** - 原生文字转语音功能

### 开发工具
- **TypeScript** - 类型安全的 JavaScript 开发
- **Docker** - 容器化部署支持
- **现代构建工具** - 优化的生产构建

## 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn
- Docker（可选，用于容器化部署）

### 本地开发

1. **克隆项目**
```bash
git clone https://github.com/neozhu/9x9.git
cd 9x9
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### Docker 部署
```bash
# 使用 Docker Compose 构建和运行
docker-compose up -d
```

## 开源协议
本项目采用 MIT 许可证 - 详情请查看 LICENSE 文件。
