---
title: 'CodePrompt 优化器'
image: /uploads/illustrations/cuate/codeprompts-optimizer.png
date: 2025-05-05 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "前往 GitHub" "https://github.com/neozhu/codeprompts-optimizer" >}}
{{< /brick_title >}}

## CodePrompt 优化器

> 🚀 本项目由 Firebase Studio 生成

一个基于 Next.js（App Router）和 React 的应用，用于优化和比较 AI 生成的代码提示。快速完善您的提示，测试并并排比较输出，以找到最佳性能的提示，助力您的编码任务。


## 功能

* **提示优化**：使用 AI 驱动的优化流程，完善初始的代码提示。
* **示例测试**：分别生成原始提示和优化后提示的代码输出。
* **输出比较**：并排查看输出结果，并汇总关键差异。
* **多语言支持**：可选择常见编程语言，如 C#、Python、JavaScript、TypeScript、Java、C++ 和 Go。
* **实时提示通知**：在优化、测试、比较操作时获取实时反馈。
* **便捷导航**：页眉中包含 GitHub 链接，轻松访问源码。

## 演示

* **在线演示**：[https://codeprompt.blazorserver.com/](https://codeprompt.blazorserver.com/)
* **源码仓库**：[https://github.com/neozhu/codeprompts-optimizer](https://github.com/neozhu/codeprompts-optimizer)

## 安装

1. **克隆仓库**

   ```bash
   git clone https://github.com/neozhu/codeprompts-optimizer.git
   cd codeprompts-optimizer
   ```

2. **安装依赖**

   ```bash
   npm install
   # 或者
   yarn install
   ```

3. **配置环境变量**
   在项目根目录创建 `.env.local` 文件：

   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

4. **启动开发模式**

   ```bash
   npm run dev
   # 或者
   yarn dev
   ```

   应用将在 `http://localhost:3000/` 启动。

## 使用方法

1. 从下拉框中选择编程语言（默认：C#）。
2. 在文本区域输入您的代码提示。
3. 点击 **优化提示**，生成优化后的 AI 提示。
4. 在出现优化提示后，点击 **测试提示**，查看两个提示的输出。
5. 使用 **比较输出** 功能，获取差异摘要。

## 项目结构

```
├── app/                   # Next.js App Router 页面
│   └── page.tsx           # 主页组件
├── components/            # 可重用 UI 组件
│   ├── ui/                # 基于 Tailwind 的 UI 原子组件
│   └── ...
├── ai/                    # AI 流程定义（优化、生成、汇总）
├── hooks/                 # 自定义 React 钩子（如 use-toast）
├── public/                # 静态资源（图标、图片）
├── styles/                # 全局 CSS / Tailwind 配置
└── README.md              # 项目说明（本文件）
```

## 参与贡献

欢迎贡献！请提交 issue 或者拉取请求：

1. Fork 本仓库
2. 创建新分支（`git checkout -b feature/YourFeature`）
3. 提交更改（`git commit -m '添加 YourFeature'`）
4. 推送分支（`git push origin feature/YourFeature`）
5. 打开 Pull Request

## 许可

本项目基于 MIT 协议进行许可。详见 [LICENSE](LICENSE)。


