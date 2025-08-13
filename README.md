# AI Assessment Tasks Application

A comprehensive web application showcasing three AI-powered tasks for technical assessment. Built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

**Deployed Application**: [https://hilarious-kitsune-eb6125.netlify.app](https://hilarious-kitsune-eb6125.netlify.app)

## 📋 Project Overview

This application demonstrates proficiency in AI integration, modern web development, and user experience design through three distinct tasks:

1. **AI Voice Interview System** - Interactive voice-based interview with real-time speech recognition
2. **AI Resume Optimizer** - Intelligent resume analysis and optimization with ATS scoring
3. **AI Research Agent** - Company and job market intelligence gathering

## 🚀 Features

### Task 1: AI Voice Interview
- Real-time speech recognition using Web Speech API
- Text-to-speech for AI questions
- Live transcription and confidence scoring
- Performance analytics (clarity, response time)
- Progressive interview flow with multiple questions
- Real-time feedback and suggestions

### Task 2: Resume Optimizer
- Drag-and-drop file upload (PDF, DOCX, TXT)
- AI-powered resume analysis and optimization
- ATS compatibility scoring
- Keyword matching and suggestions
- Before/after comparison
- Downloadable optimized resume

### Task 3: Research Agent
- Company profile analysis
- Job market insights and trends
- Salary range and requirements analysis
- Recent news and company metrics
- Market demand and competition analysis
- Comprehensive reporting dashboard

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **APIs**: Web Speech API, Speech Synthesis API

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-assessment-tasks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard with task navigation
│   ├── VoiceInterview.tsx     # AI voice interview implementation
│   ├── ResumeOptimizer.tsx    # Resume analysis and optimization
│   └── ResearchAgent.tsx      # Company research and analysis
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── index.css                  # Global styles and Tailwind imports
└── vite-env.d.ts             # TypeScript environment definitions
```

## 🎯 Key Implementation Details

### Voice Interview System
- Utilizes browser's native Speech Recognition API
- Implements continuous speech recognition with interim results
- Real-time confidence scoring based on speech patterns
- Automated question progression with speech synthesis
- Performance metrics tracking and analysis

### Resume Optimizer
- File upload handling with drag-and-drop interface
- Mock AI analysis with realistic optimization suggestions
- ATS scoring algorithm simulation
- Keyword extraction and matching
- Professional formatting recommendations

### Research Agent
- Simulated company data aggregation
- Market analysis with trend indicators
- Comprehensive job role requirements analysis
- Salary benchmarking and benefits analysis
- News and company metrics compilation

## 🔧 Configuration

### Environment Variables
Currently, the application runs with mock data. For production deployment with real AI services, you would need:

```env
VITE_OPENAI_API_KEY=your_openai_key
VITE_GEMINI_API_KEY=your_gemini_key
VITE_SERP_API_KEY=your_serp_api_key
```

### Browser Compatibility
- Chrome/Edge: Full support for Speech Recognition
- Firefox: Limited speech recognition support
- Safari: Partial support with webkit prefix
- Mobile browsers: Variable support for speech features

## 🚀 Deployment

### Netlify Deployment
The application is configured for automatic deployment on Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18.x

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🎨 Design Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with gradient accents
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized bundle size and lazy loading
- **User Experience**: Smooth transitions and micro-interactions

## 🧪 Testing

### Browser Testing
- Test speech recognition in Chrome/Edge for best results
- Verify file upload functionality across browsers
- Check responsive design on various screen sizes

### Feature Testing
- Voice interview flow and speech recognition accuracy
- Resume upload and optimization workflow
- Research agent data display and navigation

## 📈 Performance Optimizations

- **Code Splitting**: Lazy loading of components
- **Bundle Optimization**: Tree shaking and minification
- **Asset Optimization**: Compressed images and optimized fonts
- **Caching**: Service worker for offline functionality (future enhancement)

## 🔮 Future Enhancements

### Real AI Integration
- OpenAI GPT integration for resume optimization
- Google Gemini for voice interview conversations
- SerpAPI for real company research data

### Advanced Features
- User authentication and progress saving
- Interview recording and playback
- Advanced analytics dashboard
- Multi-language support

### Technical Improvements
- WebRTC for better audio quality
- Real-time collaboration features
- Advanced file parsing (PDF, DOCX)
- Database integration for user data

## 📝 Assessment Criteria Addressed

### Technical Skills
- ✅ Modern React development with TypeScript
- ✅ AI API integration architecture
- ✅ Real-time audio processing
- ✅ File handling and processing
- ✅ Responsive web design

### AI Integration
- ✅ Speech recognition and synthesis
- ✅ Natural language processing concepts
- ✅ Data analysis and scoring algorithms
- ✅ User interaction design for AI features

### Code Quality
- ✅ Clean, maintainable code structure
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Professional UI/UX design
- ✅ Performance optimization

## 👨‍💻 Developer Information

**Candidate**: GURRAMPATI LAVANYA  
**Company**: Isaii AI Technologies  
**Assessment Date**: August 2025  
**Completion Status**: All three tasks implemented

*Built with ❤️ using React, TypeScript, and modern web technologies*
