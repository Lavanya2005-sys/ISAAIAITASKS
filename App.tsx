import React, { useState } from 'react';
import { Mic, FileText, Search, Home, Brain } from 'lucide-react';
import Dashboard from './components/Dashboard';
import VoiceInterview from './components/VoiceInterview';
import ResumeOptimizer from './components/ResumeOptimizer';
import ResearchAgent from './components/ResearchAgent';

type ActiveTask = 'dashboard' | 'voice-interview' | 'resume-optimizer' | 'research-agent';

function App() {
  const [activeTask, setActiveTask] = useState<ActiveTask>('dashboard');

  const renderActiveComponent = () => {
    switch (activeTask) {
      case 'voice-interview':
        return <VoiceInterview />;
      case 'resume-optimizer':
        return <ResumeOptimizer />;
      case 'research-agent':
        return <ResearchAgent />;
      default:
        return <Dashboard onTaskSelect={setActiveTask} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">AI Assessment Suite</h1>
            </div>
            
            <nav className="flex space-x-1">
              <button
                onClick={() => setActiveTask('dashboard')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTask === 'dashboard' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="h-4 w-4 inline mr-1" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTask('voice-interview')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTask === 'voice-interview' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Mic className="h-4 w-4 inline mr-1" />
                Voice Interview
              </button>
              <button
                onClick={() => setActiveTask('resume-optimizer')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTask === 'resume-optimizer' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FileText className="h-4 w-4 inline mr-1" />
                Resume Optimizer
              </button>
              <button
                onClick={() => setActiveTask('research-agent')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTask === 'research-agent' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Search className="h-4 w-4 inline mr-1" />
                Research Agent
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;