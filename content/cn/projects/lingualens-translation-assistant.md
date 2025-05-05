---
title: 'LinguaLens 翻译助手（中文版本）'
image: /uploads/illustrations/cuate/lingualens-translation-assistant.png
date: 2025-05-05 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/lingualens" >}}
{{< /brick_title >}}

## **LinguaLens 翻译助手**（中文版本）

**LinguaLens** 是一款智能翻译助手，支持中英文及多种其他语言之间的双向互译。根据不同场景（邮件、在线会议、技术支持等），智能调整语气、礼貌程度和风格，确保翻译准确且符合上下文。

---

## **功能特性**

* **双向翻译**：自动在中文与英语、法语、德语等非中文语言之间互译。
* **场景化适配**：可选多种工作场景（如在线会议、邮件、Teams 对话、技术支持等），AI 会根据场景自动调整译文的语气和正式程度。
* **多语言支持**：目前支持中、英、法、德等多种语言互译。
* **可定制界面**：一键切换不同场景，实时调整翻译风格，操作简便直观。
* **友好设计**：基于 **Next.js** 与 **ShadCN UI** 构建，界面简洁易用。

---

## **技术栈**

* **前端**：Next.js 15（App Router）
* **UI 组件**：Shadcn/UI
* **状态管理**：Zustand（轻量化状态存储和历史记录）
* **AI 翻译服务**：Google Gemini 等 AI 模型，支持最长 30 秒的流式响应
* **后端**：与 AI 服务的 API 集成
* **样式**：Tailwind CSS
* **语言检测**：自动识别输入语言并翻译至目标语言

---

## **工作原理**

1. **语言检测**

   * 系统自动识别输入语言：

     * 若检测到中文，自动翻译为英语；
     * 检测到其他语言（如英语、法语、德语），自动翻译为中文。

2. **场景选择**

   * 用户在下拉菜单中选择对应翻译场景（如“邮件”、“技术支持”等），AI 会据此调整译文的正式度、语气和格式。

3. **实时翻译**

   * 输入文本后，AI 即时返回翻译结果，快速精准。

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
   在项目根目录新建 `.env.local`，填入 AI 服务相关的 API Key 等：

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

   打开浏览器访问 `http://localhost:3000`，即可体验 LinguaLens。

---

## **使用指南**

1. **选择场景**：从下拉菜单中选定翻译场景（如“在线会议”、“邮件”等）。
2. **输入文本**：在输入框中粘贴或输入需翻译的中/英文文本。
3. **获取译文**：AI 即时反馈翻译结果。

---

## **贡献方式**

欢迎为 **LinguaLens** 提交改进建议或新功能：

1. Fork 本仓库。
2. 新建分支进行开发。
3. 提交 PR 并在说明中详细描述改动内容。

---

## **许可证**

本项目遵循 MIT 许可证，详情见 [LICENSE](LICENSE)。

---

## **鸣谢**

* 感谢 **AI SDK** 提供后台 AI 服务。
* 致谢 **Shadcn/UI** 团队，带来高质量响应式组件。
* 特别感谢 **Google Gemini** 团队赋能强大翻译能力。
