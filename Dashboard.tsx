import React from 'react';
import { Mic, FileText, Search, Star, Clock, Award } from 'lucide-react';

type ActiveTask = 'dashboard' | 'voice-interview' | 'resume-optimizer' | 'research-agent';

interface DashboardProps {
  onTaskSelect: (task: ActiveTask) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTaskSelect }) => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Technical Assessment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           TASKS I BUILT ARE LISTED DOWN
        </p>
      </div>

      
              

      {/* Task Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Task 1: Voice Interview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Task 1</h3>
                <p className="text-sm text-gray-600">AI Voice Interview</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
               AI-powered voice interview system with real-time speech recognition, 
              conversational flow, and confidence analysis.
            </p>
            
            
            <button
              onClick={() => onTaskSelect('voice-interview')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              Start Voice Interview
            </button>
          </div>
        </div>

        {/* Task 2: Resume Optimizer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Task 2</h3>
                <p className="text-sm text-gray-600">Resume Optimizer</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              AI system that analyzes resumes and job descriptions to create 
              optimized, ATS-friendly resumes with detailed improvement explanations.
            </p>
            
            
            
            <button
              onClick={() => onTaskSelect('resume-optimizer')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors"
            >
              Optimize Resume
            </button>
          </div>
        </div>

        {/* Task 3: Research Agent */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Task 3</h3>
                <p className="text-sm text-gray-600">Research Agent</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
               Intelligent research agent that gathers comprehensive company 
              information and job requirements using web search APIs.
            </p>
            
            
            
            <button
              onClick={() => onTaskSelect('research-agent')}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-colors"
            >
              Start Research
            </button>
          </div>
        </div>
      </div>

      {/* Company Info Footer */}
      <div className="text-center text-gray-600 text-sm">
        <p>Assessment for <span className="font-semibold">Isaii AI Technologies</span></p>
        <p>Candidate: GURRAMPATI LAVANYA</p>
      </div>
    </div>
  );
};

export default Dashboard;