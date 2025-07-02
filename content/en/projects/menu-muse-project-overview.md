---
title: MenuMuse Project Overview
image: /uploads/illustrations/cuate/menumuse.png
date: 2025-07-02 00:00:00
tags: 
  - GitHub
---

## Project Overview

MenuMuse is an advanced AI-powered menu generator that transforms ordinary menu photos into poetic culinary stories. By leveraging deep learning and natural language processing technologies, MenuMuse not only intelligently recognizes dish information but also creates unique literary descriptions for each dish and generates professional-grade food photography images.


### Demo
Visit the live demo at [MenuMuse Demo](https://menumuse.blazorserver.com/)

### Core Values
- **🧠 Intelligent Recognition**: Advanced AI vision technology for precise identification of every dish on the menu
- **🎨 Poetic Copywriting**: Unique literary descriptions for each dish, giving food a touch of warmth
- **🌍 Bilingual Presentation**: Chinese-English dish names to bridge language barriers
- **📸 Food Photography**: AI-generated professional-grade food images, presenting each dish as a work of art
- **💝 Personalized Recommendations**: Intelligent pairing suggestions to help you discover the perfect flavor combinations
- **🏛️ Cultural Heritage**: In-depth analysis of the cultural background and culinary craftsmanship of dishes

---

## Tech Stack

### Frontend Technologies
- **[Next.js 15](https://nextjs.org/)** - React full-stack framework supporting App Router and Server Components
- **[React 19](https://reactjs.org/)** - UI library supporting the latest RSC features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React component library (Neutral style)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management

### AI and Backend Technologies
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - Unified AI development toolkit
- **[OpenAI GPT-4o](https://openai.com/)** - Natural language processing and content generation
- **[Google Vertex AI](https://cloud.google.com/vertex-ai)** - Image generation and vision recognition
- **[Google Gemini](https://deepmind.google/technologies/gemini/)** - Multimodal large language model
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

---

## Quick Start

### Requirements
- Node.js 18.17+ 
- npm 9.0+
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the Project**
```bash
git clone https://github.com/neozhu/menu-muse-app.git
cd menu-muse-app
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment**
```bash
cp .env.example .env.local
```

Edit the `.env.local` file to configure API keys:
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

4. **Start Development Server**
```bash
npm run dev
```

5. **Open Browser**
Visit [http://localhost:3000](http://localhost:3000) to view the application

---

## Contact Us

### 🔗 Links
- **Official Website**: [https://menumuse.blazorserver.com](https://menumuse.blazorserver.com)
- **GitHub**: [https://github.com/neozhu/menu-muse-app](https://github.com/neozhu/menu-muse-app)

### 💬 Community
- **GitHub Discussions**: [Join Discussions](discussions/)
- **Issue Reporting**: [Submit Issue](issues/)
- **Email Contact**: neo.js.cn@gmail.com

### Demo
Visit the live demo at [MenuMuse Demo](https://menumuse.blazorserver.com/)
