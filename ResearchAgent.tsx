import React, { useState } from 'react';
import { Search, Building2, Briefcase, DollarSign, Users, TrendingUp, MapPin, Calendar, Globe } from 'lucide-react';

interface CompanyInfo {
  name: string;
  size: string;
  industry: string;
  headquarters: string;
  founded: string;
  website: string;
  description: string;
  recentNews: string[];
  keyMetrics: {
    employees: string;
    revenue: string;
    funding: string;
  };
}

interface JobInfo {
  title: string;
  requiredSkills: string[];
  experience: string;
  salaryRange: string;
  benefits: string[];
  responsibilities: string[];
  qualifications: string[];
  similarRoles: string[];
}

interface ResearchResult {
  company: CompanyInfo;
  job: JobInfo;
  marketInsights: {
    demandLevel: 'High' | 'Medium' | 'Low';
    competitionLevel: 'High' | 'Medium' | 'Low';
    growthTrend: 'Growing' | 'Stable' | 'Declining';
    averageTimeToHire: string;
  };
}

const ResearchAgent: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [researchResult, setResearchResult] = useState<ResearchResult | null>(null);

  const handleSearch = async () => {
    if (!companyName || !jobRole) return;
    
    setIsSearching(true);
    
    // Simulate API research process
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    // Mock research results
    const mockResult: ResearchResult = {
      company: {
        name: companyName,
        size: 'Large Enterprise',
        industry: 'Technology',
        headquarters: 'San Francisco, CA',
        founded: '2008',
        website: 'www.company.com',
        description: `${companyName} is a leading technology company specializing in artificial intelligence, machine learning, and cloud computing solutions. The company serves enterprise clients worldwide with innovative software products and services.`,
        recentNews: [
          `${companyName} announces $100M Series C funding round led by major VC firm`,
          `Company expands AI research team with 50 new hires across engineering roles`,
          `${companyName} partners with Fortune 500 company for digital transformation project`,
          'New product launch receives industry recognition for innovation in AI'
        ],
        keyMetrics: {
          employees: '1,500-2,000',
          revenue: '$150M ARR',
          funding: '$200M total raised'
        }
      },
      job: {
        title: jobRole,
        requiredSkills: [
          'Python', 'Machine Learning', 'TensorFlow/PyTorch', 'SQL', 'AWS/GCP',
          'Data Structures & Algorithms', 'Software Engineering', 'Statistics',
          'Docker', 'Kubernetes', 'REST APIs', 'Git/GitHub'
        ],
        experience: '3-5 years',
        salaryRange: '$120,000 - $180,000',
        benefits: [
          'Health, dental, and vision insurance',
          'Unlimited PTO policy',
          'Remote work flexibility',
          '401(k) with company matching',
          'Professional development budget',
          'Stock options/equity',
          'Wellness programs',
          'Team lunches and events'
        ],
        responsibilities: [
          'Design and implement machine learning models for production systems',
          'Collaborate with cross-functional teams to deliver AI-powered features',
          'Optimize model performance and scalability',
          'Conduct research on emerging AI/ML techniques',
          'Mentor junior engineers and contribute to technical documentation',
          'Participate in code reviews and maintain high coding standards'
        ],
        qualifications: [
          "Bachelor's/Master's in Computer Science, Engineering, or related field",
          '3+ years of experience in machine learning and software development',
          'Strong programming skills in Python and familiarity with ML frameworks',
          'Experience with cloud platforms (AWS, GCP, or Azure)',
          'Understanding of software engineering best practices',
          'Excellent problem-solving and communication skills'
        ],
        similarRoles: [
          'ML Engineer', 'Data Scientist', 'AI Researcher', 'Software Engineer - ML',
          'Applied Scientist', 'Machine Learning Specialist', 'AI Engineer'
        ]
      },
      marketInsights: {
        demandLevel: 'High',
        competitionLevel: 'High',
        growthTrend: 'Growing',
        averageTimeToHire: '6-8 weeks'
      }
    };
    
    setResearchResult(mockResult);
    setIsSearching(false);
  };

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'Growing': return 'text-green-600';
      case 'Stable': return 'text-blue-600';
      case 'Declining': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Research Agent</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get comprehensive company intelligence and job market analysis. Our AI agent researches 
          company details, role requirements, and market insights in real-time.
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Research Query</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g., Google, Microsoft, OpenAI..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Job Role
            </label>
            <input
              id="role"
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="e.g., Machine Learning Engineer, Data Scientist..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          disabled={!companyName || !jobRole || isSearching}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSearching ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Researching...
            </>
          ) : (
            <>
              <Search className="h-5 w-5 mr-2" />
              Start Research
            </>
          )}
        </button>
      </div>

      {/* Research Progress */}
      {isSearching && (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Research in Progress</h3>
          <div className="space-y-3">
            {[
              'Gathering company information...',
              'Analyzing job market data...',
              'Extracting role requirements...',
              'Compiling market insights...'
            ].map((step, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="animate-pulse w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Research Results */}
      {researchResult && (
        <div className="space-y-6">
          {/* Market Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Market Overview</h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <TrendingUp className={`h-8 w-8 mx-auto mb-2 ${getTrendColor(researchResult.marketInsights.growthTrend)}`} />
                <div className="font-medium text-gray-900">{researchResult.marketInsights.growthTrend}</div>
                <div className="text-sm text-gray-600">Market Trend</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 ${getDemandColor(researchResult.marketInsights.demandLevel)}`}>
                  {researchResult.marketInsights.demandLevel}
                </div>
                <div className="text-sm text-gray-600">Job Demand</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 ${getDemandColor(researchResult.marketInsights.competitionLevel)}`}>
                  {researchResult.marketInsights.competitionLevel}
                </div>
                <div className="text-sm text-gray-600">Competition</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-medium text-gray-900">{researchResult.marketInsights.averageTimeToHire}</div>
                <div className="text-sm text-gray-600">Time to Hire</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Company Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">{researchResult.company.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{researchResult.company.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Industry:</span>
                      <div className="font-medium text-gray-900">{researchResult.company.industry}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <div className="font-medium text-gray-900">{researchResult.company.size}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Founded:</span>
                      <div className="font-medium text-gray-900">{researchResult.company.founded}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">HQ:</span>
                      <div className="font-medium text-gray-900 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {researchResult.company.headquarters}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-600">Employees</span>
                    </div>
                    <span className="font-medium text-gray-900">{researchResult.company.keyMetrics.employees}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-600">Revenue</span>
                    </div>
                    <span className="font-medium text-gray-900">{researchResult.company.keyMetrics.revenue}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-600">Total Funding</span>
                    </div>
                    <span className="font-medium text-gray-900">{researchResult.company.keyMetrics.funding}</span>
                  </div>
                </div>
              </div>

              {/* Recent News */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent News</h3>
                
                <div className="space-y-3">
                  {researchResult.company.recentNews.map((news, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{news}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Role Analysis</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">{researchResult.job.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>Experience: {researchResult.job.experience}</span>
                      <span className="text-green-600 font-medium">💰 {researchResult.job.salaryRange}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Skills */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
                
                <div className="flex flex-wrap gap-2">
                  {researchResult.job.requiredSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                
                <div className="space-y-2">
                  {researchResult.job.responsibilities.slice(0, 4).map((responsibility, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                
                <div className="grid grid-cols-1 gap-2">
                  {researchResult.job.benefits.slice(0, 6).map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchAgent;