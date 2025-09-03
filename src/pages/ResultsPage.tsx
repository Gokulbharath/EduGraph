import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Brain, ArrowRight, Star, TrendingUp, Users, Target } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';

const careerPaths = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Build applications, websites, and systems that power the digital world',
    salary: '$75,000 - $150,000',
    growth: '+22% growth',
    skills: ['Programming', 'Problem Solving', 'System Design', 'Algorithms'],
    companies: ['Google', 'Microsoft', 'Apple', 'Meta'],
    match: 95,
    color: 'blue'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions and innovation',
    salary: '$80,000 - $160,000',
    growth: '+36% growth',
    skills: ['Statistics', 'Machine Learning', 'Python', 'Data Visualization'],
    companies: ['Netflix', 'Spotify', 'Airbnb', 'Uber'],
    match: 88,
    color: 'teal'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and beautiful user experiences for digital products',
    salary: '$65,000 - $130,000',
    growth: '+13% growth',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Prototyping'],
    companies: ['Adobe', 'Slack', 'Stripe', 'Shopify'],
    match: 82,
    color: 'purple'
  }
];

const ResultsPage = () => {
  const { quizResults } = useQuiz();
  const navigate = useNavigate();

  if (!quizResults) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No quiz results found</h2>
          <Link to="/quiz" className="text-blue-600 hover:text-blue-700">Take the quiz</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">EduGraph</span>
            </div>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Career Matches
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your responses, here are the career paths that align best with your interests and strengths
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {careerPaths.map((career, index) => (
            <div 
              key={career.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                {/* Match Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    career.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    career.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {career.match}% Match
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(career.match / 20))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{career.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{career.description}</p>

                {/* Salary and Growth */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {career.salary}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Users className="w-4 h-4 mr-1" />
                    {career.growth}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.slice(0, 3).map(skill => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {career.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{career.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Companies */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Top Employers:</p>
                  <p className="text-sm text-gray-600">{career.companies.join(', ')}</p>
                </div>

                <button
                  onClick={() => navigate(`/roadmap/${career.id}`)}
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    career.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    career.color === 'teal' ? 'bg-teal-600 hover:bg-teal-700 text-white' :
                    'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  <span>View Roadmap</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/quiz')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;