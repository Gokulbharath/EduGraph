import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Map, Users, Target, Star, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">EduGraph</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Success Stories</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <Link to="/auth" className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Google Maps for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Your Career</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your ideal career path through AI-powered assessments, personalized roadmaps, 
              and expert guidance. Turn confusion into clarity with data-driven career insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/quiz"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">84%</div>
              <div className="text-gray-600 dark:text-gray-300">of students feel lost about their career direction</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">67%</div>
              <div className="text-gray-600 dark:text-gray-300">change careers due to poor initial choices</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">of our users find their ideal path</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Navigate Your Career
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform combines AI technology with career expertise to provide personalized guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Career Quiz</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Take our scientifically-designed assessment to discover your natural strengths and career preferences
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Roadmap</h3>
              <p className="text-gray-600">
                Get a personalized learning path with courses, certifications, and milestones to reach your goals
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentor Connect</h3>
              <p className="text-gray-600">
                Connect with industry professionals who can guide you through your career journey
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal Tracking</h3>
              <p className="text-gray-600">
                Set and track your career milestones with our progress monitoring system
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Resources</h3>
              <p className="text-gray-600">
                Access hand-picked courses, articles, and tools relevant to your chosen career path
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Metrics</h3>
              <p className="text-gray-600">
                Track your progress with real-time analytics and celebrate your achievements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How EduGraph Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to discover and pursue your ideal career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Take the Quiz</h3>
              <p className="text-gray-600">
                Complete our 8-question assessment to identify your interests, strengths, and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized career paths and resources matched to your unique profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow Your Roadmap</h3>
              <p className="text-gray-600">
                Track your progress through our visual skill tree and achieve your career goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how EduGraph has helped thousands find their perfect career match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?w=100&h=100&fit=crop"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "EduGraph helped me transition from business to tech. The roadmap was incredibly clear and the progress tracking kept me motivated."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100&h=100&fit=crop"
                  alt="Marcus Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Marcus Johnson</h4>
                  <p className="text-sm text-gray-600">UX Designer at Apple</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The AI quiz was spot-on in identifying my creative and analytical strengths. I found my perfect role in UX design!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop"
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Data Scientist at Netflix</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "From psychology major to data science - EduGraph showed me skills I never knew I had and guided me every step."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and professionals who have discovered their ideal career path
          </p>
          <Link 
            to="/quiz"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg space-x-2"
          >
            <span>Start Free Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">EduGraph</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering the next generation with AI-driven career guidance and personalized learning paths.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career Quiz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skill Roadmaps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduGraph. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;