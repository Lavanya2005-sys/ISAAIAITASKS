import React, { useState, useRef } from 'react';
import { Upload, Download, FileText, Zap, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface OptimizationResult {
  optimizedContent: string;
  changes: string[];
  atsScore: number;
  keywordMatches: string[];
  suggestions: string[];
}

const ResumeOptimizer: React.FC = () => {
  const [dragOver, setDragOver] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [optimizationResult, setOptimizationResult] = useState<OptimizationResult | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [resumeText, setResumeText] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files.find(f => f.type === 'application/pdf' || f.name.endsWith('.docx') || f.name.endsWith('.txt'));
    
    if (file) {
      setResumeFile(file);
      extractTextFromFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      extractTextFromFile(file);
    }
  };

  const extractTextFromFile = async (file: File) => {
    // Simulate text extraction from PDF/DOCX
    // In a real implementation, you'd use libraries like PDF.js or mammoth.js
    setResumeText(`
JOHN SMITH
Software Engineer
john.smith@email.com | (555) 123-4567 | LinkedIn: linkedin.com/in/johnsmith

EXPERIENCE
Software Developer | Tech Corp | 2021-2023
- Developed web applications using React and Node.js
- Worked on database optimization projects
- Collaborated with team members on various projects

Junior Developer | StartupCo | 2020-2021
- Built mobile applications
- Participated in code reviews
- Learned new technologies

EDUCATION
Bachelor of Science in Computer Science
State University | 2020

SKILLS
JavaScript, Python, React, Node.js, SQL, Git
    `);
  };

  const optimizeResume = async () => {
    if (!resumeText || !jobDescription) return;
    
    setIsOptimizing(true);
    
    // Simulate AI optimization process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock optimization results
    const mockResult: OptimizationResult = {
      optimizedContent: `
JOHN SMITH
Senior Software Engineer & AI Specialist
john.smith@email.com | (555) 123-4567 | LinkedIn: linkedin.com/in/johnsmith

PROFESSIONAL SUMMARY
Experienced Software Engineer with 3+ years of expertise in full-stack development, AI integration, and scalable web applications. Proven track record of delivering high-performance solutions using modern JavaScript frameworks, Python, and cloud technologies. Passionate about leveraging artificial intelligence to solve complex business problems.

TECHNICAL EXPERIENCE
Senior Software Developer | Tech Corp | 2021-2023
• Architected and developed 5+ responsive web applications using React.js and Node.js, serving 10,000+ daily active users
• Implemented machine learning models using Python and TensorFlow for predictive analytics, improving system efficiency by 25%
• Optimized PostgreSQL database queries, reducing response time by 40%
• Led cross-functional team of 4 developers in agile development environment
• Integrated RESTful APIs and microservices architecture for scalable solutions

Junior Full-Stack Developer | StartupCo | 2020-2021
• Built 3 mobile-first web applications using React Native and Firebase
• Implemented automated testing suites, increasing code coverage to 85%
• Collaborated with UX/UI designers to deliver pixel-perfect user interfaces
• Participated in daily standups and sprint planning in agile methodology

EDUCATION
Bachelor of Science in Computer Science | State University | 2020
Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems

TECHNICAL SKILLS
• Programming Languages: JavaScript (ES6+), Python, TypeScript, SQL
• Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express.js, Python Flask/Django
• Databases: PostgreSQL, MongoDB, Firebase
• Cloud & DevOps: AWS, Docker, Git, CI/CD
• AI/ML: TensorFlow, Scikit-learn, Pandas, NumPy

PROJECTS
AI-Powered Resume Optimizer | Personal Project
• Developed full-stack application using React and Python FastAPI
• Integrated OpenAI API for intelligent resume analysis and optimization
• Implemented user authentication and file upload functionality

CERTIFICATIONS
• AWS Certified Developer Associate (2023)
• Google Cloud Professional Developer (2022)
      `,
      changes: [
        'Added professional summary highlighting AI expertise',
        'Quantified achievements with specific metrics',
        'Enhanced job titles to reflect seniority',
        'Reorganized skills section by category',
        'Added relevant certifications section',
        'Included AI/ML project to demonstrate practical experience',
        'Improved action verbs and technical language',
        'Aligned experience with job requirements'
      ],
      atsScore: 92,
      keywordMatches: [
        'React.js', 'Node.js', 'Python', 'Machine Learning', 'TensorFlow',
        'API Integration', 'Database Optimization', 'Agile', 'Cloud Technologies',
        'Full-stack Development', 'JavaScript', 'AI', 'Scalable Applications'
      ],
      suggestions: [
        'Consider adding specific AI model types you\'ve worked with',
        'Include any publications or conference presentations',
        'Add leadership experience or mentoring activities',
        'Consider adding volunteer work related to technology',
        'Include any open-source contributions'
      ]
    };
    
    setOptimizationResult(mockResult);
    setIsOptimizing(false);
  };

  const downloadOptimizedResume = () => {
    if (!optimizationResult) return;
    
    const blob = new Blob([optimizationResult.optimizedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized_resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Resume Optimizer</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your resume with AI-powered optimization. Upload your resume and job description 
          to get ATS-friendly suggestions and keyword improvements.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Resume Upload */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Resume</h2>
            
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragOver 
                  ? 'border-green-400 bg-green-50' 
                  : 'border-gray-300 hover:border-green-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                {resumeFile ? resumeFile.name : 'Drop your resume here'}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                or click to browse (PDF, DOCX, TXT)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Choose File
              </button>
            </div>

            {resumeFile && (
              <div className="mt-4 flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Resume uploaded successfully</span>
              </div>
            )}
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Target Job Description</h2>
            
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description you're targeting here..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
            
            {jobDescription && (
              <div className="mt-3 text-sm text-gray-600">
                {jobDescription.split(' ').length} words analyzed
              </div>
            )}
          </div>

          {/* Optimize Button */}
          <button
            onClick={optimizeResume}
            disabled={!resumeFile || !jobDescription || isOptimizing}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isOptimizing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Optimizing Resume...
              </>
            ) : (
              <>
                <Zap className="h-5 w-5 mr-2" />
                Optimize Resume
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {optimizationResult && (
            <>
              {/* ATS Score */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">ATS Compatibility Score</h2>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${
                      optimizationResult.atsScore >= 80 ? 'bg-green-500' : 
                      optimizationResult.atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-3xl font-bold text-gray-900">{optimizationResult.atsScore}</span>
                    <span className="text-lg text-gray-500 ml-1">/100</span>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${optimizationResult.atsScore}%` }}
                  ></div>
                </div>
                
                <p className="text-sm text-gray-600">
                  Your resume is highly optimized for ATS systems and keyword matching.
                </p>
              </div>

              {/* Key Changes */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Optimizations</h2>
                
                <div className="space-y-2">
                  {optimizationResult.changes.map((change, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keyword Matches */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Matched Keywords</h2>
                
                <div className="flex flex-wrap gap-2">
                  {optimizationResult.keywordMatches.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Suggestions</h2>
                
                <div className="space-y-2">
                  {optimizationResult.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadOptimizedResume}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Optimized Resume
              </button>
            </>
          )}

          {!optimizationResult && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 text-center">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Optimize</h3>
              <p className="text-gray-600">
                Upload your resume and add a job description to see AI-powered optimization results.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Preview Section */}
      {optimizationResult && (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Optimized Resume Preview</h2>
            <button
              onClick={downloadOptimizedResume}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
              {optimizationResult.optimizedContent}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeOptimizer;