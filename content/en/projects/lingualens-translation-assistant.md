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


**LinguaLens** is an intelligent translation assistant. It adeptly adapts to diverse contexts and scenarios, including email correspondence, online meetings, and technical support interactions. The tool intelligently adjusts the translation's tone, formality, and style based on the selected scenario, ensuring both accuracy and contextual appropriateness.

## **Features**

*   **Internationalization (i18n)**: Implements full internationalization (i18n) with a language switcher and locale-based routing. Supported interface and translation languages:
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
*   **Customizable User Interface**: Easily switch between different scenes for translations, ensuring the tone and style fit the specific use case.
*   **User-Friendly Design**: Built with **Next.js** and **ShadCN UI**, making the interface simple and intuitive.
*   **Advanced AI Model Support**: You can choose the **Gemini 2.5 Flash Preview** model, which provides excellent translation quality.
*   **Custom Scene Management**: A powerful feature allowing users to create, edit, delete, reorder, and reset translation scenes, all saved locally in the browser.

## **Tech Stack**

*   **Frontend Framework**: Next.js 15 (using App Router).
*   **UI Components**: Leverages Shadcn/UI for a modern and accessible user interface.
*   **State Management**: Zustand for lightweight and efficient global state management and history tracking.
*   **AI Translation Service:** Powered by leading AI models from **Google Gemini**, **Groq**, **OpenAI**, or **Mistral**, providing accurate translations tailored to context and input language, and supporting streaming responses up to 30 seconds.
*   **Backend Services:** Integrates with the AI translation service APIs.
*   **Styling:** Utilizes Tailwind CSS for a modern and responsive design.
*   **Language Detection**: Automatically detects the input text's language and translates it to the appropriate target language.

## **How It Works**

1.  **Language Detection**: The AI detects the language of the input text. If the input is in **Chinese**, it translates it into **English**. If the input is in any other language (e.g., **English**, **French**, **German**), it translates it into **Chinese**.
2.  **Scene Selection**: Users can select the translation scene (e.g., **Email**, **Online Meeting**, **Technical Support**). The AI adjusts the tone and formality of the translation based on the selected scene.
3.  **Custom Scene Creation**: Users can create their own custom translation scenes by clicking the "自定义场景" (Custom Scene) button and using the scene management interface.

## **Scenes**

Below are some of the default translation scenes available:

*   **Daily Communication**: Casual, friendly exchanges between colleagues or friends, using common vocabulary and simple grammar.
*   **Word Explanation**: Helps users understand, remember, and use unfamiliar words by providing simple explanations and practical example sentences in both English and the user's native language.
*   **Email**: For professional business email communication.
*   **News Article**: For translating news reports or informational content, focusing on objectivity and accuracy, and concluding with a summary.
*   **Proverbs**: Translate proverbs across cultures, preserving their wisdom and poetic essence.
*   **Technical Documentation**: For translating technical documentation
*   **Social Media Post (X/Reddit)**: For translating engaging posts for X (Twitter) or Reddit.
*   **Technical Support**: For translating technical support communication in systems like TOPdesk.
*   **Requirement Analysis**: For basic requirement understanding: translates, summarizes, and identifies the core business purpose of user-provided requirements (Salesforce, SAP focused).
*   **Meeting Invitation**: For translating formal meeting invitation messages.
*   **Meeting Minutes**: For translating meeting minutes with a clear and structured format.
*   **Presentation Slides**: For content used in presentation slides.

### **Custom Scene Management**

The custom scene management feature allows you to:

1.  **Create Custom Scenes**: Create your own translation scenes with specific prompts, names, and descriptions.
2.  **Edit Existing Scenes**: Modify any custom scene to fine-tune the translation style and context.
3.  **Delete Scenes**: Remove any custom scenes you no longer need.
4.  **Reorder Scenes**: Drag and drop to reorder your scenes according to your preference.
5.  **Reset to Default**: Return to the default set of scenes at any time.

All custom scenes are automatically saved in your browser's localStorage.

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

    Create a `.env.local` file in the project's root directory and add your API keys for the AI translation services.

```bash
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=<your API key>
MISTRAL_API_KEY=<your API key>
```

4.  **Run the project**

    After setting up the environment variables, you can start the development server:

```bash
pnpm dev
# Or if you're using npm:
npm run dev
```

    Open your browser and navigate to `http://localhost:3000` to access the application.

## **Docker Deployment**

You can deploy **LinguaLens** using Docker for easy setup and consistent environments.

1.  **Pull the latest code**
    ```bash
    git pull
    ```

2.  **Build the Docker image**
    ```bash
    sudo docker build . -t lingualens:ver
    ```
    Replace `ver` with your desired version tag (e.g., `v1.0`).

3.  **(Optional) Use Docker Compose**
    Below is an example `docker-compose.yml` file:
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
4.  **Start the service**
    ```bash
    sudo docker compose up -d
    ```

## **Usage**

1.  **Select a Scene**: Choose a context for the translation (e.g., **Online Meeting**, **Email**) or create your own custom scenes.
2.  **Input Text**: Type or paste the text you want to translate in either **Chinese** or another language.
3.  **Receive Translation**: The AI will process the translation and output the result in the target language (English for Chinese input, or Chinese for other language inputs).

## **Extending Supported Languages**

If you want to add support for more languages (for both translation and the interface), follow these steps:

1.  **Add the locale code** to the `locales` array in `middleware.ts` and update the language switcher in `components/language-switcher.tsx`.
2.  **Create a new translation file** in the `messages/` directory, e.g., `messages/ja.json` for Japanese. Use the structure of `en.json` as a template.
3.  **(Optional) Add scene prompt logic**: If your new language requires special translation logic, update the prompt generation in `app/api/chat/route.ts`.
4.  **Restart the development server** to apply the changes.

## **Contributing**

Contributions to **LinguaLens** are welcome! If you would like to help improve the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/YourAmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/YourAmazingFeature`).
5.  Open a Pull Request with a clear explanation of your changes.

## **License**

This project is licensed under the MIT License.

## **Acknowledgments**

*   Thanks to the **AI SDK** for providing the AI services used in the project.
*   Inspired by **Shadcn/UI** for building responsive and customizable UI components.
*   Special thanks to the **Google Gemini** team for their AI-powered translation capabilities.
