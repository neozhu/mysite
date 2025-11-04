---
title: MenuMuse - AI Smart Menu Generator
image: /uploads/illustrations/cuate/menumuse-app.png
date: 2025-06-22 00:00:00
tags:
  - AI
  - Menu Generation
  - Image Recognition
  - Next.js
---

# 🍜 MenuMuse - AI Smart Menu Generator



## ✨ Product Overview

MenuMuse is an advanced AI-powered menu generator that transforms ordinary menu photos into poetic culinary stories. Through deep learning and natural language processing technologies, MenuMuse not only intelligently recognizes dish information but also creates unique literary descriptions for each dish and generates professional-grade food photography images.


{{< gallery dir="/uploads/gallery/menumus" >}}

## Demo

- 🔗 **Live Demo**：[menumuse.blazorserver.com](https://menumuse.blazorserver.com/)

### 🎯 Core Values
- **🧠 Smart Recognition**: Advanced AI vision technology for precise identification of every dish on the menu
- **🎨 Poetic Copy**: Create unique literary descriptions for each dish, giving food the warmth of literature
- **🌍 Bilingual Presentation**: Chinese-English dish names that let cuisine transcend language barriers
- **📸 Food Photography**: AI-generated professional-grade food images, presenting each dish like a work of art
- **💝 Personalized Recommendations**: Intelligent pairing suggestions to help you discover perfect taste combinations
- **🏛️ Cultural Heritage**: Deep analysis of dishes' cultural backgrounds and the artistry of culinary craftsmanship

---

## 🚀 Tech Stack

### Frontend Technologies
- **[Next.js 15](https://nextjs.org/)** - React full-stack framework with App Router and Server Components support
- **[React 19](https://reactjs.org/)** - User interface library with latest RSC features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React component library (Neutral style)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management

### AI and Backend Technologies
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - Unified AI development toolkit
- **[OpenAI GPT-4o](https://openai.com/)** - Natural language processing and content generation
- **[Google Vertex AI](https://cloud.google.com/vertex-ai)** - Image generation and visual recognition
- **[Google Gemini](https://deepmind.google/technologies/gemini/)** - Multimodal large language model
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - High-performance bundler
- **[ESLint](https://eslint.org/)** - Code quality checking
- **[Docker](https://www.docker.com/)** - Containerized deployment

---

## 🛠️ Quick Start

### Requirements
- Node.js 18.17+ 
- npm 9.0+
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the project**
```bash
git clone https://github.com/neozhu/menu-muse-app.git
cd menu-muse-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment configuration**
```bash
cp .env.example .env.local
```

Edit `.env.local` file and configure API keys:
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

4. **Start development server**
```bash
npm run dev
```

5. **Open browser**
Visit [http://localhost:3000](http://localhost:3000) to view the application

### 🐳 Docker Deployment

1. **Build image**
```bash
docker build -t menu-muse-app .
```

2. **Run container**
```bash
docker run -p 3000:3000 --env-file .env.local menu-muse-app
```

3. **Using Docker Compose**
```bash
docker-compose up -d
```

---

## 📱 Features

### 🎯 Core Functions

#### 🔍 Smart Menu Recognition
- Support for multiple image formats (JPG, PNG, HEIC)
- Intelligent text recognition (OCR) and content parsing
- Multi-language menu support (Chinese, English, Japanese, etc.)
- Automatic image preprocessing and optimization

#### 🎨 AI Content Generation
- **Poetic Copy Creation**: Generate unique literary descriptions for each dish
- **Bilingual Dish Translation**: Chinese-English bilingual display for international presentation
- **Cultural Background Analysis**: Deep exploration of dishes' historical and cultural significance
- **Culinary Craft Description**: Professional cooking methods and technique introductions

#### 📸 AI Food Photography
- Based on Google Vertex AI Imagen model
- Professional-grade food photography styles
- Automatic optimization of lighting and composition
- Multiple styles and angle options

#### 💡 Smart Recommendation System
- Personalized taste matching
- Nutritional pairing suggestions
- Seasonal recommendations
- Regional specialty recommendations

### 🌟 User Experience

#### 🚀 Three Simple Steps
1. **Upload menu photo** - Capture or select menu images
2. **AI smart analysis** - Automatically identify and parse dish information
3. **Get culinary stories** - Generate poetic descriptions and professional images

#### 🎨 Modern Design
- **Neutral × Half-Flat Minimalism** design style
- **Liquid Class** fluid design elements
- **Glassmorphism** glass-like visual effects
- Complete dark mode support
- Responsive design, perfectly adapted to all devices

#### ♿ Accessibility
- WCAG AA standard contrast ratios
- Complete keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

---

## 🏗️ Project Architecture

```
menu-muse-app/
├── app/                          # Next.js App Router
│   ├── api/                     # API routes
│   │   ├── analyze-menu/        # Menu analysis endpoint
│   │   ├── generate-image/      # Image generation endpoint
│   │   └── health/              # Health check endpoint
│   ├── menu-magic/              # Menu magic feature page
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui base components
│   ├── menu/                    # Menu-related components
│   ├── hero-section.tsx         # Hero section component
│   └── ...
├── lib/                         # Core libraries
│   ├── ai/                      # AI client wrappers
│   │   ├── aiClient.ts         # Multi-model AI client
│   │   └── index.ts            # Unified exports
│   ├── env.ts                   # Environment variable configuration
│   └── utils.ts                 # Utility functions
├── hooks/                       # Custom React Hooks
├── types/                       # TypeScript type definitions
├── stores/                      # Zustand state management
└── public/                      # Static assets
```

### 🔧 Core Modules

#### AI Client (`lib/ai/aiClient.ts`)
- Unified multi-model AI interface
- Support for OpenAI, Google Vertex AI, Google Gemini
- Automatic error handling and retry mechanisms
- Type-safe API calls

#### Component System (`components/`)
- Design system based on shadcn/ui
- Reusable UI component library
- Strict TypeScript type checking
- Accessibility support

#### State Management (`stores/`)
- Zustand lightweight state management
- Middleware extension support
- Server-side rendering friendly

---

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

### Testing AI Features
```bash
# Test image generation
npm run test:image

# Test menu analysis
npm run test:menu-analysis
```

---

## 📊 Performance Optimization

### 🚀 Loading Performance
- **Server Components** first, reducing client-side JavaScript
- **Dynamic Imports** for lazy loading large components
- **Image Optimization** using `next/image` for automatic optimization
- **Font Optimization** using `next/font` to reduce CLS

### 🎯 Runtime Performance
- **React 19** concurrent features
- **Suspense** for graceful async UI
- **useOptimistic** for optimistic updates
- **Caching Strategy** intelligent data caching

### 📈 Monitoring Metrics
- **Web Vitals** core web vitals monitoring
- **Lighthouse** performance auditing
- **Bundle Analyzer** bundle analysis
- **Performance Profiling** performance analysis

---

## 🔐 Security

### 🛡️ Data Protection
- **API Key Management**: Secure environment variable configuration
- **Input Validation**: Zod schema validation
- **Error Handling**: Error responses that don't leak sensitive information
- **Rate Limiting**: API request frequency limiting

### 🔒 Privacy Compliance
- **Data Minimization**: Only collect necessary data
- **Temporary Storage**: Automatic image deletion after processing
- **Transparency**: Clear privacy policies
- **User Control**: Complete data control rights

---

## 🌍 Internationalization

### 🗺️ Multi-language Support
- **Chinese**: Simplified Chinese (default)
- **English**: English
- **日本語**: Japanese (planned)
- **한국어**: Korean (planned)

### 🎨 Localization Adaptation
- **Cultural Adaptation**: Localized design elements
- **Cuisine Features**: Optimization for different regional cuisines
- **Timezone Handling**: Automatic timezone recognition and conversion

---

## 🤝 Contributing

We welcome and appreciate all forms of contributions!

### 📋 How to Contribute
1. **Report Issues**: Report bugs or suggest features in [Issues](issues/)
2. **Submit Code**: Fork the repository, create branches, submit PRs
3. **Improve Documentation**: Enhance documentation and examples
4. **Testing Feedback**: Participate in testing and provide feedback

### 🛠️ Development Workflow
1. Fork this repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Create Pull Request

### 📝 Code Standards
- Follow ESLint configuration
- Use TypeScript strict mode
- Write unit tests
- Maintain code readability and maintainability

For detailed contribution guidelines, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

--- 