---
title: 'LinguaLens Translation Assistant'
image: /uploads/illustrations/cuate/lingualens-translation-assistant.png
date: 2025-05-05 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/lingualens" >}}
{{< /brick_title >}}

## LinguaLens Translation Assistant


**LinguaLens** is an intelligent translation assistant that supports bidirectional translation between Chinese and a variety of other languages. It adeptly adapts to diverse contexts and scenarios, including email correspondence, online meetings, and technical support interactions. The tool intelligently adjusts the translation's tone, formality, and style based on the selected scenario, ensuring both accuracy and contextual appropriateness.

## **Features**

* **Bidirectional Translation:** Automatically translates from Chinese to English, and from any non-Chinese language (such as English, French, or German) into Chinese.
* **Scene-Based Contextualization:** Tailors translations to the specific nuances of various professional scenarios, including online meetings, email communications, Microsoft Teams chats, and technical support dialogues.
* **Multilingual Capabilities:** Currently supports translation between Chinese and several other major languages, including English, French, and German, with ongoing expansion.
* **Adaptive User Interface:** Allows users to easily switch between predefined scenes, ensuring the translation's tone and style precisely match the specific use case.
* **Intuitive Design:** Developed using **Next.js** and **Shadcn/UI** for a clean, simple, and intuitive user experience.

## **Tech Stack**

* **Frontend Framework**: Next.js 15 (using App Router).
* **UI Components**: Leverages Shadcn/UI for a modern and accessible user interface.
* **State Management**: Zustand for lightweight and efficient global state management and history tracking.
* **AI Translation Service:** Powered by leading AI models such as **Google Gemini**, providing accurate translations tailored to context and input language, and supporting streaming responses up to 30 seconds.
* **Backend Services:** Integrates with the AI translation service APIs.
* **Styling:** Utilizes Tailwind CSS for a modern and responsive design.
* **Language Detection**: Automatically detects the input text's language and translates it to the appropriate target language.

## **How It Works**

1.  **Language Detection**: The AI automatically detects the language of the input text. If the input is in **Chinese**, it is translated into **English**. If the input is in any other supported language (e.g., **English**, **French**, **German**), it is translated into **Chinese**.
2.  **Scene Selection**: Users can select a specific translation scene (e.g., **Email**, **Online Meeting**, **Technical Support**). The AI then adjusts the translation's tone and formality to match the chosen scenario.
3.  **Real-Time Translation**: The translation process occurs in real-time, providing instant feedback and enabling quick, accurate translations.

## **Scenes**

The translation style adapts based on pre-defined scenes, including:

```
// lib/scenes.ts
export interface Scene {
  /** Scene name in Chinese */
  name: string;
  /** Scene name in English */
  name_en: string;
  /** Scene description */
  description: string;
  /** Generation prompt */
  prompt: string;
}

export const SCENES: Scene[] = [
  {
    name: "日常沟通",
    name_en: "Daily Communication",
    description: "Casual, friendly exchanges between colleagues or friends, using common words and simple grammar.",
    prompt: "Translate the text in a casual, friendly tone using common words and simple grammar."
  },
  {
    name: "邮件",
    name_en: "Email",
    description: "Professional emails with a formal and polite tone, using common email greetings and closings (e.g., Hi …,” and “Best regards, [Your Name]”).",
    prompt: "Translate the text as a formal, well-structured email. Include a standard greeting at the top (e.g., “Hi …,”) and a closing at the end (e.g., “Best regards, [Your Name]”)."
  },
  {
    name: "Teams对话",
    name_en: "Teams Chat",
    description: "Casual chats with colleagues that are friendly, approachable, conversational, and clear without overly formal language.",
    prompt: "Translate the text in a friendly, approachable tone suitable for colleague chats—keep it clear and natural, not too formal."
  },
  {
    name: "技术支持",
    name_en: "Technical Support",
    description: "Technical support for Salesforce and SAP issues, providing clear, concise, and helpful solutions.",
    prompt: "Translate the text as technical support guidance for Salesforce or SAP—keep it clear, concise, and solution-focused."
  },
  {
    name: "会议邀请",
    name_en: "Meeting Invitation",
    description: "Convert input into a polished, formal meeting invitation that clearly presents the greeting, date, time, venue, agenda items, participants, and closing remarks.",
    prompt: "Rewrite and translate the following text into a formal meeting invitation. Structure it with a salutation, date, time, venue, agenda, list of attendees, and a closing remark—ensure it flows naturally and includes all key details."
  },
  {
    name: "讨论需求",
    name_en: "Requirement Discussion",
    description: "This is for discussing user requirements, where you need to gather detailed information.",
    prompt: "You are discussing user requirements. Your responses should be detailed and thorough. Translate the following text."
  },
  {
    name: "客户沟通",
    name_en: "Customer Communication",
    description: "This is for communicating with customers, where you should be polite, responsive, and empathetic.",
    prompt: "You are communicating with a customer. Your responses should be polite, empathetic, and responsive. Translate the following text."
  },
  {
    name: "会议纪要",
    name_en: "Meeting Minutes",
    description: "Convert input into structured, concise meeting minutes that highlight the summary, key decisions, and action items.",
    prompt: "Rewrite and translate the following text into meeting minutes format. Use clear headings for Summary, Decisions, and Action Items; present points succinctly and in logical order."
  }
  ];
  
```

## **Getting Started**

To run **LinguaLens** locally, follow these steps:

1.  **Clone the repository**

```bash
git clone https://github.com/neozhu/lingualens.git
cd lingualens
```

2.  **Install dependencies**

    Install the project dependencies using pnpm or npm:

```bash
pnpm install
# Or if you're using npm:
npm install
```

3.  **Set up environment variables**

    Create a `.env.local` file in the project's root directory. Add your environment-specific variables, particularly the API key for the AI translation service:

```bash
NEXT_PUBLIC_GOOGLE_GENAI_API_KEY=your_google_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4.  **Run the project**

    After setting up the environment variables, you can start the development server:

```bash
pnpm dev
# Or if you're using npm:
npm run dev
```

    Open your browser and navigate to `http://localhost:3000` to access the application.

## **Usage**

1.  **Select a Scene**: Choose the context for the translation (e.g., **Online Meeting**, **Email**) from the dropdown menu.
2.  **Input Text**: Type or paste the text you wish to translate into the input area. This can be in **Chinese** or another supported language.
3.  **Receive Translation**: The AI will process the input and display the translated text in the target language (English for Chinese input, or Chinese for other languages).

## **Contributing**

Contributions to **LinguaLens** are welcome! If you would like to help improve the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/YourAmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/YourAmazingFeature`).
5.  Open a Pull Request with a clear explanation of your changes.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **Acknowledgments**

* Powered by the **AI SDK** for core AI service integration.
* User interface components inspired by the excellent **Shadcn/UI** library.
* Special acknowledgment to the **Google Gemini** team for their powerful AI translation capabilities.
