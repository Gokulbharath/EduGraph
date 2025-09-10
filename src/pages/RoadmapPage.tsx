import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Circle, Star, Clock, BookOpen, Award, Briefcase, Target, ExternalLink, DollarSign } from 'lucide-react';
import { roadmaps } from '../data/roadmaps';

const RoadmapPage = () => {
  const { careerId } = useParams();
  const [completedSkills, setCompletedSkills] = useState<Set<string>>(new Set());
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());
  
  const roadmap = roadmaps[careerId as keyof typeof roadmaps];

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Roadmap not found</h2>
          <Link to="/results" className="text-blue-600 hover:text-blue-700">Back to Results</Link>
        </div>
      </div>
    );
  }

  const toggleSkillCompletion = (skillName: string) => {
    setCompletedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  };

  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  };

  const totalSkills = roadmap.phases.reduce((sum, phase) => sum + phase.skills.length, 0);
  const completedCount = completedSkills.size;
  const progressPercentage = (completedCount / totalSkills) * 100;

  const getSkillIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'project': return <Star className="w-4 h-4" />;
      case 'certification': return <Award className="w-4 h-4" />;
      case 'job': return <Briefcase className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getSkillTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      case 'certification': return 'bg-green-100 text-green-800';
      case 'job': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/results" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Progress: {Math.round(progressPercentage)}%</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Roadmap Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {roadmap.title} Roadmap
            </h1>
            <p className="text-xl text-gray-600 mb-6">{roadmap.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{roadmap.duration}</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Salary Range</div>
                <div className="font-semibold text-gray-900">{roadmap.salary}</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Job Growth</div>
                <div className="font-semibold text-gray-900">{roadmap.growth}</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Skills</div>
                <div className="font-semibold text-gray-900">{completedCount}/{totalSkills} completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="space-y-8">
          {roadmap.phases.map((phase, phaseIndex) => (
            <div key={phase.title} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                  {phaseIndex + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 mb-2">{phase.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Expected duration: {phase.duration}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {phase.skills.map((skill) => (
                  <div key={skill.name} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div
                      onClick={() => toggleSkillCompletion(skill.name)}
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        completedSkills.has(skill.name)
                          ? 'bg-green-50 border-green-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          <div className="mr-3">
                            {completedSkills.has(skill.name) ? (
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            ) : (
                              <Circle className="w-6 h-6 text-gray-400" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-semibold text-lg ${
                                completedSkills.has(skill.name) ? 'text-green-800' : 'text-gray-900'
                              }`}>
                                {skill.name}
                              </h4>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillTypeColor(skill.type)}`}>
                                  <span className="flex items-center">
                                    {getSkillIcon(skill.type)}
                                    <span className="ml-1 capitalize">{skill.type}</span>
                                  </span>
                                </span>
                                <span className="text-sm text-gray-500">{skill.duration}</span>
                              </div>
                            </div>
                            {skill.description && (
                              <p className="text-gray-600 mt-1">{skill.description}</p>
                            )}
                          </div>
                        </div>
                        
                        {skill.courses && skill.courses.length > 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSkillExpansion(skill.name);
                            }}
                            className="ml-4 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {expandedSkills.has(skill.name) ? 'Hide Courses' : 'View Courses'}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Course Links */}
                    {skill.courses && expandedSkills.has(skill.name) && (
                      <div className="border-t border-gray-200 bg-gray-50 p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Recommended Courses:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {skill.courses.map((course, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <div className="flex items-center mb-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      course.platform === 'Infosys Springboard' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-purple-100 text-purple-800'
                                    }`}>
                                      {course.platform}
                                    </span>
                                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                                      course.price === 'Free' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-blue-100 text-blue-800'
                                    }`}>
                                      {course.price}
                                    </span>
                                  </div>
                                  <h6 className="font-semibold text-gray-900 mb-1">{course.title}</h6>
                                  <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                                </div>
                              </div>
                              <a
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                              >
                                <span>View Course</span>
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              You now have a complete roadmap with curated courses from top platforms. 
              Start with the foundation courses and work your way through each phase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Go to Dashboard
              </Link>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Find Study Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;