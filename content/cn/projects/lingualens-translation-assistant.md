---
title: 'LinguaLens 智能翻译助手'
image: /uploads/illustrations/cuate/lingualens-translation-assistant.png
date: 2025-05-05 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "在 GitHub 上查看" "https://github.com/neozhu/lingualens" >}}
{{< /brick_title >}}

## LinguaLens 智能翻译助手


**LinguaLens** 是一款智能翻译助手。它能够灵活适应各种情境和场景，包括电子邮件、在线会议和技术支持等。该工具能根据所选场景智能调整翻译的语气、正式程度和风格，确保翻译既准确又符合语境。

## **功能特性**

*   **国际化 (i18n)**: 通过 `next-intl` 实现完整的国际化支持，提供语言切换器和基于区域设置的路由。支持的界面和翻译语言包括：
    *   简体中文 (Chinese)
    *   English
    *   Deutsch (German)
    *   Français (French)
    *   Español (Spanish)
    *   Nederlands (Dutch)
    *   Bahasa Indonesia (Indonesian)
    *   ไทย (Thai)
    *   Tiếng Việt (Vietnamese)
    *   မြန်မာ (Burmese)
    *   Bahasa Melayu (Malay)
*   **可定制的用户界面**: 轻松切换不同的翻译场景，确保翻译的语气和风格符合特定用例。
*   **用户友好的设计**: 基于 **Next.js** 和 **ShadCN UI** 构建，界面简洁直观。
*   **先进的 AI 模型支持**: 您可以选择 **Gemini 2.5 Flash Preview** 模型，它能提供出色的翻译质量。
*   **自定义场景管理**: 强大的场景管理功能，允许用户创建、编辑、删除、重新排序和重置翻译场景，所有自定义场景都会保存在浏览器本地。

## **技术栈**

*   **前端框架**: Next.js 15 (使用 App Router)。
*   **UI 组件**: 使用 Shadcn/UI 构建现代化且易于访问的用户界面。
*   **状态管理**: 使用 Zustand 进行轻量级、高效的全局状态管理和历史记录跟踪。
*   **AI 翻译服务**: 由 **Google Gemini**、**Groq**、**OpenAI** 或 **Mistral** 等领先的 AI 模型提供支持，根据上下文和输入语言提供精准翻译，并支持长达 30 秒的流式响应。
*   **后端服务**: 与 AI 翻译服务的 API 集成。
*   **样式**: 使用 Tailwind CSS 实现现代化和响应式设计。
*   **语言检测**: 自动检测输入文本的语言，并将其翻译成合适的目标语言。

## **工作原理**

1.  **语言检测**: AI 会自动检测输入文本的语言。如果输入是**中文**，它会翻译成**英文**。如果输入是其他任何语言（例如**英文**、**法文**、**德文**），它会翻译成**中文**。
2.  **场景选择**: 用户可以选择翻译场景（例如**邮件**、**在线会议**、**技术支持**）。AI 会根据所选场景调整翻译的语气和正式程度。
3.  **自定义场景创建**: 用户可以点击“自定义场景”按钮，通过场景管理界面创建自己的翻译场景。

## **场景**

以下是一些可用的默认翻译场景：

*   **日常沟通**: 同事或朋友间的非正式、友好交流，使用常用词汇和简单语法。
*   **单词解释**: 通过提供英文和用户母语的简单解释及实用例句，帮助用户理解、记忆和使用生词。
*   **邮件**: 用于专业的商务邮件沟通。
*   **新闻资讯**: 用于翻译新闻报道或信息性内容，注重客观性和准确性，并附有摘要。
*   **谚语**: 跨文化翻译谚语，保留其智慧和诗意精髓。
*   **技术文档**: 用于翻译技术文档。
*   **社交媒体帖子 (X/Reddit)**: 用于为 X (Twitter) 或 Reddit 翻译引人入胜的帖子。
*   **技术支持**: 用于翻译 TOPdesk 等系统中的技术支持沟通内容。
*   **需求分析**: 用于基本的需求理解：翻译、总结并识别用户提供的需求（侧重于 Salesforce、SAP）的核心业务目的。
*   **会议邀请**: 用于翻译正式的会议邀请信息。
*   **会议纪要**: 用于翻译格式清晰、结构化的会议纪要。
*   **演示文稿**: 用于演示文稿幻灯片中的内容。

### **自定义场景管理**

自定义场景管理功能允许您：

1.  **创建自定义场景**: 创建具有特定提示、名称和描述的自定义翻译场景。
2.  **编辑现有场景**: 修改任何自定义场景，以微调翻译风格和上下文。
3.  **删除场景**: 删除不再需要的任何自定义场景。
4.  **重新排序场景**: 根据您的偏好拖放重新排序场景。
5.  **重置为默认值**: 随时恢复到默认的场景设置。

所有自定义场景都会自动保存在浏览器的 localStorage 中。

## **入门指南**

要在本地运行 **LinguaLens**，请按照以下步骤操作：

1.  **克隆仓库**

```bash
git clone https://github.com/neozhu/lingualens.git
cd lingualens
```

2.  **安装依赖**

    使用 pnpm 或 npm 安装项目依赖项：

```bash
pnpm install
# 或使用 npm:
npm install
```

3.  **设置环境变量**

    在项目根目录中创建一个 `.env.local` 文件，并添加 AI 翻译服务的 API 密钥。

```bash
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=<your API key>
MISTRAL_API_KEY=<your API key>
```

4.  **运行项目**

    设置好环境变量后，您可以启动开发服务器：

```bash
pnpm dev
# 或使用 npm:
npm run dev
```

    打开浏览器并访问 `http://localhost:3000` 以访问应用程序。

## **Docker 部署**

您可以使用 Docker 部署 **LinguaLens**，以简化设置并确保环境一致。

1.  **拉取最新代码**
    ```bash
    git pull
    ```

2.  **构建 Docker 镜像**
    ```bash
    sudo docker build . -t lingualens:ver
    ```
    将 `ver` 替换为您想要的版本标签（例如 `v1.0`）。

3.  **(可选) 使用 Docker Compose**
    以下是一个 `docker-compose.yml` 文件的示例：
    ```yaml
    version: '3.8'

    services:
      lingualens:
        image: lingualens:v1.0
        ports:
          - "4010:3000"
        environment:
          - NODE_ENV=production
          - NEXT_PUBLIC_GA_ID=<your tag id>
          - GROQ_API_KEY=<your api key>
          - GOOGLE_GENERATIVE_AI_API_KEY=<your api key>
          - OPENAI_API_KEY=<your API key>
          - MISTRAL_API_KEY=<your API key>
        restart: unless-stopped
    ```
4.  **启动服务**
    ```bash
    sudo docker compose up -d
    ```

## **使用方法**

1.  **选择场景**: 为翻译选择一个上下文（例如**在线会议**、**邮件**），或创建您自己的自定义场景。
2.  **输入文本**: 输入或粘贴您想要翻译的文本，可以是**中文**或其他语言。
3.  **接收翻译**: AI 将处理翻译并在目标语言中输出结果（中文输入输出英文，其他语言输入输出中文）。

## **扩展支持的语言**

如果您想为更多语言（包括翻译和界面）添加支持，请按照以下步骤操作：

1.  **添加区域代码**: 将区域代码添加到 `middleware.ts` 中的 `locales` 数组，并更新 `components/language-switcher.tsx` 中的语言切换器。
2.  **创建新的翻译文件**: 在 `messages/` 目录中创建一个新的翻译文件，例如 `messages/ja.json`（日语）。使用 `en.json` 的结构作为模板。
3.  **(可选) 添加场景提示逻辑**: 如果您的新语言需要特殊的翻译逻辑，请更新 `app/api/chat/route.ts` 中的提示生成逻辑。
4.  **重启开发服务器** 以应用更改。

## **贡献**

欢迎为 **LinguaLens** 做出贡献！如果您想帮助改进项目，请遵循以下步骤：

1.  Fork 本仓库。
2.  为您的新功能或错误修复创建一个新分支 (`git checkout -b feature/YourAmazingFeature`)。
3.  提交您的更改 (`git commit -m 'Add some AmazingFeature'`)。
4.  将分支推送到远程 (`git push origin feature/YourAmazingFeature`)。
5.  提交一个 Pull Request，并清楚地说明您的更改。

## **许可证**

本项目采用 MIT 许可证。

## **致谢**

*   感谢 **AI SDK** 为本项目提供了核心的 AI 服务集成。
*   界面组件的灵感来源于优秀的 **Shadcn/UI** 库。
*   特别感谢 **Google Gemini** 团队提供的强大 AI 翻译能力。