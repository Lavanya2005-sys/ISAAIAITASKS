import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Play, Pause, RotateCcw, Volume2, Brain, Award } from 'lucide-react';

interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const VoiceInterview: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [confidence, setConfidence] = useState(85);
  const [speechClarity, setSpeechClarity] = useState(92);
  const [responseTime, setResponseTime] = useState(3.2);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const interviewQuestions: InterviewQuestion[] = [
    {
      id: 1,
      question: "Tell me about yourself and your background in technology.",
      category: "Introduction",
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "Describe a challenging AI project you've worked on and how you approached it.",
      category: "Technical Experience",
      difficulty: "Medium"
    },
    {
      id: 3,
      question: "How would you implement a real-time recommendation system for a large-scale application?",
      category: "System Design",
      difficulty: "Hard"
    },
    {
      id: 4,
      question: "What are your thoughts on the ethical implications of AI in hiring processes?",
      category: "AI Ethics",
      difficulty: "Medium"
    },
    {
      id: 5,
      question: "Where do you see yourself contributing to AI innovation in the next 3-5 years?",
      category: "Future Goals",
      difficulty: "Easy"
    }
  ];

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript(finalTranscript);
          // Simulate confidence scoring based on transcript length and keywords
          const wordCount = finalTranscript.split(' ').length;
          const hasKeywords = /experience|project|implement|technology|challenge/.test(finalTranscript.toLowerCase());
          setConfidence(Math.min(95, 60 + wordCount * 2 + (hasKeywords ? 15 : 0)));
        }
      };
    }
  }, []);

  const startInterview = () => {
    setInterviewStarted(true);
    speakQuestion(interviewQuestions[0].question);
  };

  const speakQuestion = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      setTranscript('');
      
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      setTimeout(() => {
        if (isRecording) {
          stopRecording();
        }
      }, 120000); // Auto-stop after 2 minutes
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }

    // Simulate analysis results
    setSpeechClarity(Math.floor(Math.random() * 15) + 85);
    setResponseTime(Math.random() * 2 + 2);
  };

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      const nextIndex = currentQuestion + 1;
      setCurrentQuestion(nextIndex);
      setTranscript('');
      speakQuestion(interviewQuestions[nextIndex].question);
    }
  };

  const resetInterview = () => {
    setCurrentQuestion(0);
    setTranscript('');
    setInterviewStarted(false);
    setIsRecording(false);
    setIsPlaying(false);
    setConfidence(85);
    setSpeechClarity(92);
    setResponseTime(3.2);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (!interviewStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Voice Interview System</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience an AI-powered mock interview with real-time speech analysis, 
            confidence scoring, and personalized feedback.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interview Process</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Volume2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">AI Questions</h3>
              <p className="text-sm text-gray-600">Listen to AI-generated interview questions covering various technical topics</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mic className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Voice Response</h3>
              <p className="text-sm text-gray-600">Respond using your microphone with real-time speech-to-text transcription</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600">Get instant feedback on confidence, clarity, and response quality</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium text-blue-900 mb-2">What You'll Be Asked:</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Personal background and technical experience</li>
              <li>• AI and machine learning project discussions</li>
              <li>• System design and architecture questions</li>
              <li>• Ethics in AI and technology</li>
              <li>• Future career goals and aspirations</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={startInterview}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors inline-flex items-center"
            >
              <Brain className="h-5 w-5 mr-2" />
              Start AI Interview
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Interview Progress</span>
          <span className="text-sm text-gray-500">{currentQuestion + 1} of {interviewQuestions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / interviewQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Interview Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Question */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-blue-600">Q{currentQuestion + 1}</span>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {interviewQuestions[currentQuestion].category}
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(interviewQuestions[currentQuestion].difficulty)}`}>
                    {interviewQuestions[currentQuestion].difficulty}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => speakQuestion(interviewQuestions[currentQuestion].question)}
                disabled={isPlaying}
                className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50"
              >
                <Volume2 className="h-4 w-4 mr-1" />
                {isPlaying ? 'Playing...' : 'Replay'}
              </button>
            </div>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              {interviewQuestions[currentQuestion].question}
            </p>
          </div>

          {/* Recording Controls */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="text-center mb-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-green-500 hover:bg-green-600'
                } text-white`}
              >
                {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
              </button>
              
              <p className="text-sm text-gray-600 mb-4">
                {isRecording ? 'Recording your response...' : 'Click to start recording your answer'}
              </p>
              
              <div className="flex justify-center space-x-3">
                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion >= interviewQuestions.length - 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Question
                </button>
                <button
                  onClick={resetInterview}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Transcript */}
          {transcript && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Response</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 leading-relaxed">
                  {transcript || 'Your speech will appear here in real-time...'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Panel */}
        <div className="space-y-6">
          {/* Real-time Metrics */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analysis</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Confidence Score</span>
                  <span className="text-sm font-bold text-blue-600">{confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${confidence}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Speech Clarity</span>
                  <span className="text-sm font-bold text-green-600">{speechClarity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${speechClarity}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Response Time</span>
                  <span className="text-sm font-bold text-purple-600">{responseTime}s</span>
                </div>
                <div className="text-xs text-gray-500">Average thinking time</div>
              </div>
            </div>
          </div>

          {/* AI Feedback */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Feedback</h3>
            
            <div className="space-y-3 text-sm">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="font-medium text-green-800 mb-1">Strengths</div>
                <p className="text-green-700">Clear articulation and structured responses</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="font-medium text-yellow-800 mb-1">Suggestions</div>
                <p className="text-yellow-700">Consider adding specific examples to strengthen your answers</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="font-medium text-blue-800 mb-1">Overall</div>
                <p className="text-blue-700">Demonstrating good technical communication skills</p>
              </div>
            </div>
          </div>

          {/* Interview Completion */}
          {currentQuestion >= interviewQuestions.length - 1 && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Interview Complete!</h3>
                <p className="text-sm opacity-90">
                  Great job completing all interview questions. Your performance analysis is ready for review.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceInterview;