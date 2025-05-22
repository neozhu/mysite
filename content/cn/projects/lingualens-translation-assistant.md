---
title: 'LinguaLens 翻译助手（中文版本）'
image: /uploads/illustrations/cuate/lingualens-translation-assistant.png
date: 2025-05-05 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "前往 GitHub 查看" "https://github.com/neozhu/lingualens" >}}
{{< /brick_title >}}

## **LinguaLens 翻译助手** (中文版)

**LinguaLens** 是一款智能翻译辅助工具，能够在中英文及多种其他语言间进行双向互译。它能根据不同应用场景（如邮件、在线会议、技术支持等），智能地调整翻译文本的语气、礼貌程度及风格，以确保翻译结果既准确又贴合具体语境。

---

## **功能特性**

* **双向互译**：自动在中文与英语、法语、德语等多种非中文语言之间进行翻译。
* **场景化适配**：提供多种预设工作场景（例如在线会议、电子邮件、Teams 对话、技术支持等），AI 会根据所选场景自动优化译文的语气和正式程度。
* **多语言覆盖**：当前支持中文、英文、法文、德文等多种主流语言的互译。
* **便捷操控界面**：支持一键切换不同翻译场景，实时调整翻译风格，操作简单直观。
* **现代化设计**：基于 **Next.js** 和 **ShadCN UI** 构建，提供简洁美观且易于上手的用户界面。

---

## **技术栈**

* **前端**：Next.js 15（App Router）
* **UI 组件**：Shadcn/UI
* **状态管理**：采用 Zustand 实现轻量级的状态存储与历史记录管理。
* **AI 翻译引擎**：集成 Google Gemini 等先进 AI 模型，支持长达30秒的流式响应。
* **后端集成**：与 AI 翻译服务的 API 进行后端集成。
* **UI 样式**：使用 Tailwind CSS 构建界面样式。
* **自动语言检测**：能够自动识别输入文本的语种，并将其翻译至预定目标语言。

---

## **工作原理**

1. **语言检测**

   * 系统会自动识别输入文本的语言：

     * 若检测到中文内容，将自动翻译为英文。
     * 若检测到其他语言（如英文、法文、德文等），则自动翻译为中文。

2. **场景选择**

   * 用户可从下拉菜单中选择具体的翻译场景（例如“电子邮件”、“技术支持”等），AI 将依据此选择调整译文的正式程度、语气及格式。

3. **实时翻译**

   * 在输入框中输入待翻译文本后，AI 将即时反馈翻译结果，力求快速与精准。

---

## **内置场景**

// lib/scenes.ts

```ts
export interface Scene {
  /** 场景名称（中文） */
  name: string;
  /** 场景英文名称（保留英文字段，便于前端显示） */
  name_en: string;
  /** 场景描述 */
  description: string;
  /** AI 生成提示 */
  prompt: string;
}

export const SCENES: Scene[] = [
  {
    name: "日常沟通",
    name_en: "Daily Communication",
    description: "同事或朋友之间的随意、友好交流，使用常见词汇和简单语法。",
    prompt: "以随意、友好的语气翻译，使用常见词汇和简单语法。"
  },
  {
    name: "邮件",
    name_en: "Email",
    description: "专业、礼貌的邮件格式，包含常见的称呼和结束语（如 “Hi …,” 及 “Best regards, [Your Name]”）。",
    prompt: "将文本翻译为正式且结构清晰的邮件，包括邮件开头称呼（如 “Hi …,”）和结尾落款（如 “Best regards, [Your Name]”）。"
  },
  {
    name: "Teams 对话",
    name_en: "Teams Chat",
    description: "同事间的轻松、自然聊天风格，语气友好但不过于正式。",
    prompt: "以适合同事聊天的友好、自然语气翻译，保持清晰流畅，不要过于正式。"
  },
  {
    name: "技术支持",
    name_en: "Technical Support",
    description: "针对 Salesforce 或 SAP 问题的技术支持，提供清晰、简洁且有用的解决方案。",
    prompt: "将文本翻译为针对 Salesforce 或 SAP 的技术支持指导，保持清晰、简洁、以解决问题为导向。"
  },
  {
    name: "会议邀请",
    name_en: "Meeting Invitation",
    description: "正式的会议邀请函，明确包含问候、日期、时间、地点、议程、参会人员及结束语。",
    prompt: "将以下内容改写并翻译为正式的会议邀请函，结构包括：称呼、日期、时间、地点、议程、参会人员列表及结束语，确保自然流畅并包含所有关键要素。"
  },
  {
    name: "讨论需求",
    name_en: "Requirement Discussion",
    description: "用于详细讨论用户需求，需要收集充分的信息。",
    prompt: "你正在讨论用户需求，回复应详尽、全面。请将以下文本翻译。"
  },
  {
    name: "客户沟通",
    name_en: "Customer Communication",
    description: "与客户沟通时保持礼貌、富有同理心并及时回应。",
    prompt: "你正在与客户沟通，应保持礼貌、富有同理心并及时回应。请将以下文本翻译。"
  },
  {
    name: "会议纪要",
    name_en: "Meeting Minutes",
    description: "结构化的会议纪要，突出摘要、关键决策和行动项。",
    prompt: "将以下文本改写并翻译为会议纪要格式，使用“摘要”、“决策”、“行动项”等清晰标题，简明有序地呈现要点。"
  }
];
```

---

## **快速启动**

1. **克隆仓库**

   ```bash
   git clone https://github.com/neozhu/lingualens.git
   cd lingualens
   ```

2. **安装依赖**

   ```bash
   pnpm install
   # 或
   npm install
   ```

3. **配置环境变量**
   在项目根目录新建 `.env.local` 文件，并填入 AI 服务相关的 API Key 等配置信息：

   ```env
   NEXT_PUBLIC_GOOGLE_GENAI_API_KEY=your_google_api_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **启动开发服务器**

   ```bash
   pnpm dev
   # 或
   npm run dev
   ```

   打开您的浏览器并访问 `http://localhost:3000`，即可开始体验 LinguaLens。

---

## **使用指南**

1. **选择翻译场景**：从提供的下拉菜单中选定最符合您当前需求的翻译场景（例如“在线会议”、“电子邮件”等）。
2. **输入待翻译文本**：在指定的输入框中粘贴或手动输入需要翻译的中文或英文文本内容。
3. **获取翻译结果**：AI 系统将即时处理您的请求，并快速反馈翻译后的文本。

---

## **贡献方式**

我们欢迎您为 **LinguaLens** 项目贡献改进建议或新功能：

1. Fork 本项目的 GitHub 仓库。
2. 基于 `main` 分支新建一个特性分支进行您的开发工作。
3. 提交 Pull Request (PR)，并在 PR 说明中详细描述您所做的改动及其原因。

---

## **许可证**

本项目遵循 MIT 许可证授权，详细条款请参阅 [LICENSE](LICENSE) 文件。

---

## **鸣谢**

* 感谢 **AI SDK** 为本项目提供后台 AI 服务支持。
* 向 **Shadcn/UI** 团队致以谢意，他们开发了高质量的响应式 UI 组件。
* 特别鸣谢 **Google Gemini** 团队，为本项目提供了强大的翻译能力。
