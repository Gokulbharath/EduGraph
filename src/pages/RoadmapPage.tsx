import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Circle, Star, Clock, BookOpen, Award, Briefcase, Target } from 'lucide-react';

const roadmaps = {
  'software-engineer': {
    title: 'Software Engineer',
    description: 'Master the skills needed to build amazing software applications',
    duration: '12-18 months',
    phases: [
      {
        title: 'Foundations',
        duration: '3-4 months',
        skills: [
          { name: 'HTML & CSS', completed: false, type: 'course', duration: '2 weeks' },
          { name: 'JavaScript Fundamentals', completed: false, type: 'course', duration: '4 weeks' },
          { name: 'Git & Version Control', completed: false, type: 'course', duration: '1 week' },
          { name: 'Basic Programming Logic', completed: false, type: 'course', duration: '3 weeks' }
        ]
      },
      {
        title: 'Frontend Development',
        duration: '4-5 months',
        skills: [
          { name: 'React.js', completed: false, type: 'course', duration: '6 weeks' },
          { name: 'State Management', completed: false, type: 'course', duration: '2 weeks' },
          { name: 'API Integration', completed: false, type: 'project', duration: '3 weeks' },
          { name: 'Responsive Design', completed: false, type: 'course', duration: '2 weeks' },
          { name: 'Frontend Project', completed: false, type: 'project', duration: '4 weeks' }
        ]
      },
      {
        title: 'Backend & Databases',
        duration: '3-4 months',
        skills: [
          { name: 'Node.js & Express', completed: false, type: 'course', duration: '4 weeks' },
          { name: 'Database Design', completed: false, type: 'course', duration: '3 weeks' },
          { name: 'RESTful APIs', completed: false, type: 'course', duration: '3 weeks' },
          { name: 'Authentication', completed: false, type: 'course', duration: '2 weeks' }
        ]
      },
      {
        title: 'Professional Skills',
        duration: '2-3 months',
        skills: [
          { name: 'Testing & Debugging', completed: false, type: 'course', duration: '3 weeks' },
          { name: 'Code Review', completed: false, type: 'course', duration: '1 week' },
          { name: 'Portfolio Development', completed: false, type: 'project', duration: '4 weeks' },
          { name: 'Technical Interviews', completed: false, type: 'course', duration: '2 weeks' }
        ]
      },
      {
        title: 'Career Launch',
        duration: '2-4 months',
        skills: [
          { name: 'Internship/Entry Role', completed: false, type: 'job', duration: '3 months' },
          { name: 'Professional Networking', completed: false, type: 'course', duration: '2 weeks' },
          { name: 'Continuous Learning', completed: false, type: 'course', duration: 'ongoing' }
        ]
      }
    ]
  }
};

const RoadmapPage = () => {
  const { careerId } = useParams();
  const [completedSkills, setCompletedSkills] = useState<Set<string>>(new Set());
  
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

  const totalSkills = roadmap.phases.reduce((sum, phase) => sum + phase.skills.length, 0);
  const completedCount = completedSkills.size;
  const progressPercentage = (completedCount / totalSkills) * 100;

  const getSkillIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'project': return <Star className="w-4 h-4" />;
      case 'job': return <Briefcase className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
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
                Back to Results
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Progress: {Math.round(progressPercentage)}%</span>
              <div className="w-20 bg-gray-200 rounded-full h-2">
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
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {roadmap.title} Roadmap
          </h1>
          <p className="text-xl text-gray-600 mb-6">{roadmap.description}</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{roadmap.duration}</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>{completedCount}/{totalSkills} skills completed</span>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="space-y-8">
          {roadmap.phases.map((phase, phaseIndex) => (
            <div key={phase.title} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  {phaseIndex + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">Expected duration: {phase.duration}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => toggleSkillCompletion(skill.name)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      completedSkills.has(skill.name)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        {completedSkills.has(skill.name) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${
                            completedSkills.has(skill.name) ? 'text-green-800' : 'text-gray-900'
                          }`}>
                            {skill.name}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            {getSkillIcon(skill.type)}
                            <span className="ml-1">{skill.type}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{skill.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h3>
            <p className="text-gray-600 mb-6">
              Connect with mentors, access curated courses, and join a community of learners on the same path
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Find Mentor
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;