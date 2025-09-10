import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Brain } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const questions = [
  {
    id: 1,
    type: 'multiple',
    question: "Which subjects do you enjoy most?",
    options: [
      { value: 'tech', label: 'Technology & Programming' },
      { value: 'creative', label: 'Art & Creative Design' },
      { value: 'business', label: 'Business & Economics' },
      { value: 'science', label: 'Science & Research' },
      { value: 'social', label: 'Psychology & Social Sciences' }
    ]
  },
  {
    id: 2,
    type: 'slider',
    question: "Do you prefer creativity or logic?",
    leftLabel: "Creativity",
    rightLabel: "Logic",
    value: 50
  },
  {
    id: 3,
    type: 'multiple',
    question: "What type of work environment appeals to you?",
    options: [
      { value: 'collaborative', label: 'Collaborative team environments' },
      { value: 'independent', label: 'Independent, focused work' },
      { value: 'dynamic', label: 'Fast-paced, dynamic settings' },
      { value: 'structured', label: 'Structured, organized environments' },
      { value: 'flexible', label: 'Flexible, remote-friendly' }
    ]
  },
  {
    id: 4,
    type: 'slider',
    question: "Do you enjoy problem-solving or storytelling more?",
    leftLabel: "Storytelling",
    rightLabel: "Problem-solving",
    value: 50
  },
  {
    id: 5,
    type: 'multiple',
    question: "What motivates you most in your career?",
    options: [
      { value: 'money', label: 'Financial stability and growth' },
      { value: 'impact', label: 'Making a positive impact' },
      { value: 'innovation', label: 'Creating innovative solutions' },
      { value: 'recognition', label: 'Recognition and achievement' },
      { value: 'learning', label: 'Continuous learning and growth' }
    ]
  },
  {
    id: 6,
    type: 'slider',
    question: "How do you prefer to learn new skills?",
    leftLabel: "Hands-on practice",
    rightLabel: "Theory first",
    value: 50
  },
  {
    id: 7,
    type: 'multiple',
    question: "Which of these activities sounds most appealing?",
    options: [
      { value: 'building', label: 'Building apps or websites' },
      { value: 'analyzing', label: 'Analyzing data and trends' },
      { value: 'designing', label: 'Designing user experiences' },
      { value: 'leading', label: 'Leading projects and teams' },
      { value: 'researching', label: 'Researching and discovering' }
    ]
  },
  {
    id: 8,
    type: 'slider',
    question: "Do you prefer stability or adventure in your career?",
    leftLabel: "Stability",
    rightLabel: "Adventure",
    value: 50
  }
];

const QuizPage = () => {
  const { theme } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [loading, setLoading] = useState(false);
  const { saveQuizResults } = useQuiz();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleMultipleChoice = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSlider = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Quiz complete
      saveQuizResults(answers);
      navigate('/home');
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please sign in to take the quiz</h2>
          <Link to="/auth" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">Go to login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">EduGraph</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Welcome, {user.name}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Career Assessment</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{currentQuestion + 1} of {questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            {currentQ.question}
          </h2>

          {currentQ.type === 'multiple' && (
            <div className="space-y-4">
              {currentQ.options?.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleMultipleChoice(currentQ.id, option.value)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQ.id] === option.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      answers[currentQ.id] === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 dark:border-gray-500'
                    }`}>
                      {answers[currentQ.id] === option.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentQ.type === 'slider' && (
            <div className="space-y-6">
              <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                <span>{currentQ.leftLabel}</span>
                <span>{currentQ.rightLabel}</span>
              </div>
              <div className="px-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={answers[currentQ.id] || currentQ.value}
                  onChange={(e) => handleSlider(currentQ.id, parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {answers[currentQ.id] || currentQ.value}%
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goBack}
            disabled={currentQuestion === 0}
            className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <button
            onClick={goNext}
            disabled={!isAnswered || loading}
            className="flex items-center px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {currentQuestion === questions.length - 1 ? 'Complete Quiz' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563EB;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563EB;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default QuizPage;