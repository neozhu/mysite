---
title: '9x9 Multiplication Table Learning App'
image: /uploads/illustrations/cuate/9x9app.png
date: 2025-07-02 00:00:00
tags: 
  - GitHub
---

{{< brick_title >}}
{{< button "View on GitHub" "https://github.com/neozhu/9x9" >}}
{{< /brick_title >}}

A modern, interactive web application designed to help students learn the 9x9 multiplication table through engaging visual and audio features. This app combines traditional Chinese learning methods with modern technology to create an effective and enjoyable learning experience.

## Demo
Visit the live demo at [9x9 Demo](https://9x9.vercel.app/)

## Key Features

### Interactive Learning
- **Visual Grid:** Interactive 9x9 multiplication table with clickable cells
- **Formula Display:** Shows both Chinese traditional formulas and mathematical equations
- **Area Visualization:** Highlights rectangular areas to demonstrate multiplication concepts
- **Same Result Highlighting:** Automatically highlights all combinations that produce the same result

### Audio Learning
- **Text-to-Speech:** Chinese pronunciation of multiplication formulas
- **Speech Controls:** Toggle audio on/off and repeat current formula
- **Optimized Speech:** Adjusted rate, pitch, and volume for better learning experience

### User Experience
- **Responsive Design:** Works seamlessly on desktop and mobile devices
- **Dark/Light Theme:** Automatic theme switching support
- **Smooth Animations:** Engaging transitions and visual feedback
- **Touch-Friendly:** Optimized for touch devices with proper button sizing

### Localization
- **Chinese Formulas:** Traditional Chinese multiplication mnemonics (口诀)
- **Bilingual Display:** Chinese formulas with Arabic numeral equations
- **Cultural Learning:** Authentic Chinese mathematical learning approach

## Educational Benefits

### Visual Learning
- **Spatial Understanding:** Rectangle visualization helps understand multiplication as area
- **Pattern Recognition:** Highlighting same results reveals mathematical patterns
- **Interactive Engagement:** Hands-on learning maintains student attention

### Auditory Learning
- **Pronunciation Practice:** Hear correct Chinese pronunciation
- **Memory Aid:** Audio reinforcement helps memorization
- **Multi-sensory:** Combines visual and auditory learning styles

## Technology Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with TypeScript support
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** - Native text-to-speech capabilities

### Development Tools
- **TypeScript** - Type-safe JavaScript development
- **Docker** - Containerization for easy deployment
- **Modern Build Tools** - Optimized production builds

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/neozhu/9x9.git
cd 9x9
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
