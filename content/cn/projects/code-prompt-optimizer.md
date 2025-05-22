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

> 🚀 本项目由 Firebase Studio 自动生成

这是一款基于 Next.js (App Router) 和 React 构建的应用，旨在帮助您优化和对比 AI 生成的代码提示。通过本工具，您可以快速完善提示、测试不同提示生成的代码，并并排比较输出结果，从而找到性能最佳的提示，为您的编码工作提效。


## 功能

* **提示优化**：利用 AI 驱动的优化流程，改进您初始设定的代码提示。
* **示例测试**：针对原始提示和优化后的提示，分别生成代码输出。
* **输出对比**：并排展示不同提示的输出结果，并高亮显示关键差异。
* **多语言支持**：支持多种主流编程语言，如 C#、Python、JavaScript、TypeScript、Java、C++ 和 Go。
* **实时状态通知**：在执行优化、测试、对比等操作时，获得实时的进度反馈。
* **便捷导航**：页眉集成 GitHub 链接，方便快速访问项目源码。

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

## 操作指南

1.  从下拉菜单中选择目标编程语言 (默认为 C#)。
2.  在文本框中输入您的初始代码提示。
3.  点击 **“优化提示”** 按钮，AI 将为您生成一个优化版本的新提示。
4.  优化提示生成后，点击 **“测试提示”** 按钮，系统将分别展示原始提示和优化提示所生成的代码输出。
5.  使用 **“比较输出”** 功能，可以清晰地看到两个版本输出之间的差异摘要。

## 项目结构概览

```
├── app/                   # Next.js App Router 页面目录
│   └── page.tsx           # 主页面组件
├── components/            # 可复用的 UI 组件目录
│   ├── ui/                # 基于 Tailwind CSS 的基础 UI 原子组件
│   └── ...                # 其他自定义组件
├── ai/                    # AI 相关流程定义 (例如：优化、生成、汇总逻辑)
├── hooks/                 # 自定义 React 钩子 (例如：use-toast 用于消息提示)
├── public/                # 静态资源目录 (例如：图标、图片文件)
├── styles/                # 全局样式及 Tailwind CSS 配置文件目录
└── README.md              # 项目说明文档 (即本文档)
```

## 如何贡献

我们欢迎各种形式的贡献！您可以通过提交 Issue 或发起 Pull Request 来参与项目：

1. Fork 本仓库
2. 创建新分支（`git checkout -b feature/YourFeature`）
3. 提交更改（`git commit -m '添加 YourFeature'`）
4. 推送分支（`git push origin feature/YourFeature`）
5. 打开 Pull Request

## 授权许可

本项目遵循 MIT 协议授权。详细信息请参阅 [LICENSE](LICENSE) 文件。


