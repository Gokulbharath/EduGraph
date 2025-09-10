import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, TrendingUp, Target, Clock, Star, BookOpen, Users, Award, 
  CheckCircle, Circle, Sun, Moon, Download, Calendar, User,
  Play, Pause, RotateCcw, Plus
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import Certificate from '../components/Certificate';
import OverallCertificate from '../components/OverallCertificate';

const DashboardPage = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { courseProgress, certificates, updateCourseProgress, getUserCertificates } = useProgress();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'certificates'>('overview');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please sign in to view dashboard</h2>
          <Link to="/auth" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">Go to login</Link>
        </div>
      </div>
    );
  }

  const totalCourses = courseProgress.length;
  const completedCourses = courseProgress.filter(cp => cp.progress >= 75).length;
  const totalProgress = courseProgress.reduce((sum, cp) => sum + cp.progress, 0) / totalCourses;
  const totalLearningTime = Math.floor(totalProgress * 2.5); // Estimate based on progress
  const userCertificates = getUserCertificates();

  // Check if user qualifies for overall certificate (75% overall progress)
  const qualifiesForOverallCertificate = totalProgress >= 75;

  const handleProgressUpdate = (courseId: string, courseName: string, newProgress: number) => {
    updateCourseProgress(courseId, courseName, newProgress);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">EduGraph</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <span className="text-gray-600 dark:text-gray-300">Welcome, {user.name}</span>
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Career Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your progress and continue your journey to career success</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{Math.round(totalProgress)}%</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Overall Progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{completedCourses}/{totalCourses}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Courses Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{totalLearningTime}h</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Learning Time</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{userCertificates.length}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Certificates Earned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'certificates'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Certificates ({userCertificates.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Current Learning Path</h2>
              <div className="space-y-4">
                {courseProgress.slice(0, 4).map((course) => (
                  <div key={course.courseId} className={`p-4 rounded-lg border ${
                    course.progress >= 75 
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                      : course.progress >= 50 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                        : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {course.progress >= 75 ? (
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                        )}
                        <div>
                          <h4 className={`font-semibold ${
                            course.progress >= 75 
                              ? 'text-green-900 dark:text-green-100' 
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {course.courseName}
                          </h4>
                          <p className={`text-sm ${
                            course.progress >= 75 
                              ? 'text-green-700 dark:text-green-300' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {course.progress >= 75 ? 'Completed' : `${course.progress}% complete`}
                          </p>
                        </div>
                      </div>
                      {course.certificateIssued && (
                        <Award className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          course.progress >= 75 
                            ? 'bg-green-600 dark:bg-green-400' 
                            : 'bg-blue-600 dark:bg-blue-400'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/roadmap/software-engineer"
                className="mt-6 w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Full Roadmap
              </Link>
            </div>

            {/* Recent Achievements & Quick Actions */}
            <div className="space-y-6">
              {/* Recent Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Achievements</h2>
                <div className="space-y-4">
                  {courseProgress
                    .filter(cp => cp.certificateIssued)
                    .slice(0, 3)
                    .map((course) => (
                    <div key={course.courseId} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 dark:text-green-100">{course.courseName}</h4>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          Certificate earned • {course.completedAt?.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 text-left rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className="font-medium text-gray-900 dark:text-white">Find a Mentor</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 text-left rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className="font-medium text-gray-900 dark:text-white">Browse Courses</span>
                    <BookOpen className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  <Link
                    to="/quiz"
                    className="w-full flex items-center justify-between p-3 text-left rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">Retake Assessment</span>
                    <Brain className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Course Progress Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseProgress.map((course) => (
                  <div key={course.courseId} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{course.courseName}</h3>
                      {course.certificateIssued && (
                        <Award className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            course.progress >= 75 
                              ? 'bg-green-600 dark:bg-green-400' 
                              : course.progress >= 50
                                ? 'bg-blue-600 dark:bg-blue-400'
                                : 'bg-gray-400 dark:bg-gray-500'
                          }`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <button
                        onClick={() => handleProgressUpdate(course.courseId, course.courseName, Math.max(0, course.progress - 10))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={course.progress}
                        onChange={(e) => handleProgressUpdate(course.courseId, course.courseName, parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      />
                      <button
                        onClick={() => handleProgressUpdate(course.courseId, course.courseName, Math.min(100, course.progress + 10))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {course.progress >= 75 && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <div className="flex items-center text-green-800 dark:text-green-200">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">Certificate Available!</span>
                        </div>
                      </div>
                    )}

                    {course.completedAt && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Completed: {course.completedAt.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="space-y-6">
            {/* Overall Certificate */}
            {qualifiesForOverallCertificate && user?.selectedRole && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Career Completion Certificate</h2>
                  <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
                    <Award className="w-4 h-4" />
                    <span>Qualified for Overall Certificate</span>
                  </div>
                </div>
                
                <OverallCertificate
                  completionDate={new Date()}
                  overallProgress={Math.round(totalProgress)}
                />
              </div>
            )}

            {/* Individual Course Certificates */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Course Certificates</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>{userCertificates.length} certificates earned</span>
                </div>
              </div>
              
              {userCertificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userCertificates.map((certificate) => (
                    <Certificate
                      key={certificate.id}
                      id={certificate.id}
                      courseName={certificate.courseName}
                      issuedAt={certificate.issuedAt}
                      progress={certificate.progress}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Award className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No certificates yet</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Complete courses with 75% or higher progress to earn certificates
                  </p>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Courses
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;