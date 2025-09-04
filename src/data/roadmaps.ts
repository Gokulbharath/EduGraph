export interface CourseLink {
  platform: string;
  title: string;
  url: string;
  duration: string;
  price: string;
}

export interface Skill {
  name: string;
  completed: boolean;
  type: 'course' | 'project' | 'certification' | 'job';
  duration: string;
  description?: string;
  courses?: CourseLink[];
}

export interface Phase {
  title: string;
  duration: string;
  description: string;
  skills: Skill[];
}

export interface Roadmap {
  title: string;
  description: string;
  duration: string;
  salary: string;
  growth: string;
  phases: Phase[];
}

export const roadmaps: Record<string, Roadmap> = {
  'software-engineer': {
    title: 'Software Engineer',
    description: 'Master the skills needed to build amazing software applications',
    duration: '12-18 months',
    salary: '$75,000 - $150,000',
    growth: '+22% growth',
    phases: [
      {
        title: 'Programming Foundations',
        duration: '3-4 months',
        description: 'Build a solid foundation in programming concepts and web technologies',
        skills: [
          {
            name: 'HTML & CSS Fundamentals',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Learn the building blocks of web development',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete Web Developer Course 2024',
                url: 'https://www.udemy.com/course/the-complete-web-developer-course-2/',
                duration: '30 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'HTML5 and CSS3 Fundamentals',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307249489321984166_shared/overview',
                duration: '20 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'JavaScript Fundamentals',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Master JavaScript programming language',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete JavaScript Course 2024',
                url: 'https://www.udemy.com/course/the-complete-javascript-course/',
                duration: '69 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'JavaScript Programming',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307249628405760167_shared/overview',
                duration: '25 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Git & Version Control',
            completed: false,
            type: 'course',
            duration: '1 week',
            description: 'Learn version control with Git and GitHub',
            courses: [
              {
                platform: 'Udemy',
                title: 'Git & GitHub Complete Guide',
                url: 'https://www.udemy.com/course/git-and-github-complete-guide/',
                duration: '12 hours',
                price: '$54.99'
              }
            ]
          }
        ]
      },
      {
        title: 'Frontend Development',
        duration: '4-5 months',
        description: 'Build modern, interactive user interfaces',
        skills: [
          {
            name: 'React.js Development',
            completed: false,
            type: 'course',
            duration: '6 weeks',
            description: 'Build dynamic web applications with React',
            courses: [
              {
                platform: 'Udemy',
                title: 'React - The Complete Guide 2024',
                url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
                duration: '48 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'React.js Fundamentals',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307249816576000168_shared/overview',
                duration: '30 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'State Management',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Manage application state effectively',
            courses: [
              {
                platform: 'Udemy',
                title: 'Redux Toolkit Complete Guide',
                url: 'https://www.udemy.com/course/redux-toolkit-tutorial/',
                duration: '8 hours',
                price: '$49.99'
              }
            ]
          },
          {
            name: 'Frontend Portfolio Project',
            completed: false,
            type: 'project',
            duration: '4 weeks',
            description: 'Build a complete frontend application'
          }
        ]
      },
      {
        title: 'Backend Development',
        duration: '3-4 months',
        description: 'Learn server-side development and databases',
        skills: [
          {
            name: 'Node.js & Express',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Build server-side applications',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete Node.js Developer Course',
                url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
                duration: '35 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Node.js Development',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250004992000169_shared/overview',
                duration: '28 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Database Design & SQL',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Design and work with databases',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete SQL Bootcamp',
                url: 'https://www.udemy.com/course/the-complete-sql-bootcamp/',
                duration: '9 hours',
                price: '$84.99'
              }
            ]
          }
        ]
      },
      {
        title: 'Professional Skills',
        duration: '2-3 months',
        description: 'Develop industry-ready professional skills',
        skills: [
          {
            name: 'Testing & Debugging',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Write tests and debug applications effectively'
          },
          {
            name: 'Portfolio Development',
            completed: false,
            type: 'project',
            duration: '4 weeks',
            description: 'Create a professional portfolio'
          }
        ]
      }
    ]
  },
  'data-scientist': {
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions and innovation',
    duration: '15-20 months',
    salary: '$80,000 - $160,000',
    growth: '+36% growth',
    phases: [
      {
        title: 'Mathematics & Statistics Foundation',
        duration: '4-5 months',
        description: 'Build strong mathematical foundations for data science',
        skills: [
          {
            name: 'Statistics & Probability',
            completed: false,
            type: 'course',
            duration: '6 weeks',
            description: 'Master statistical concepts and probability theory',
            courses: [
              {
                platform: 'Udemy',
                title: 'Statistics for Data Science and Business Analysis',
                url: 'https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/',
                duration: '5.5 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Statistics for Data Science',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307249923072000170_shared/overview',
                duration: '40 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Linear Algebra',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Understand mathematical foundations for ML',
            courses: [
              {
                platform: 'Udemy',
                title: 'Linear Algebra for Machine Learning',
                url: 'https://www.udemy.com/course/linear-algebra-for-machine-learning/',
                duration: '8 hours',
                price: '$54.99'
              }
            ]
          },
          {
            name: 'Python Programming',
            completed: false,
            type: 'course',
            duration: '6 weeks',
            description: 'Master Python for data science',
            courses: [
              {
                platform: 'Udemy',
                title: 'Complete Python Bootcamp',
                url: 'https://www.udemy.com/course/complete-python-bootcamp/',
                duration: '22 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Python Programming Fundamentals',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250111488000171_shared/overview',
                duration: '35 hours',
                price: 'Free'
              }
            ]
          }
        ]
      },
      {
        title: 'Data Analysis & Visualization',
        duration: '4-5 months',
        description: 'Learn to analyze and visualize data effectively',
        skills: [
          {
            name: 'Pandas & NumPy',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Data manipulation and analysis with Python',
            courses: [
              {
                platform: 'Udemy',
                title: 'Python for Data Science and Machine Learning',
                url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
                duration: '25 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Data Analysis with Python',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250298880000172_shared/overview',
                duration: '45 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Data Visualization',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Create compelling data visualizations',
            courses: [
              {
                platform: 'Udemy',
                title: 'Python Data Visualization with Matplotlib & Seaborn',
                url: 'https://www.udemy.com/course/python-data-visualization-with-matplotlib-seaborn/',
                duration: '12 hours',
                price: '$54.99'
              }
            ]
          },
          {
            name: 'SQL for Data Analysis',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Query and analyze data with SQL',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete SQL Course for Data Analysis',
                url: 'https://www.udemy.com/course/the-complete-sql-course/',
                duration: '15 hours',
                price: '$74.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'SQL for Data Science',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250486272000173_shared/overview',
                duration: '25 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Data Analysis Project',
            completed: false,
            type: 'project',
            duration: '4 weeks',
            description: 'Complete end-to-end data analysis project'
          }
        ]
      },
      {
        title: 'Machine Learning',
        duration: '5-6 months',
        description: 'Build predictive models and AI solutions',
        skills: [
          {
            name: 'Machine Learning Fundamentals',
            completed: false,
            type: 'course',
            duration: '6 weeks',
            description: 'Learn core ML algorithms and concepts',
            courses: [
              {
                platform: 'Udemy',
                title: 'Machine Learning A-Z: Python & R',
                url: 'https://www.udemy.com/course/machinelearning/',
                duration: '44 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Introduction to Machine Learning',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250673664000174_shared/overview',
                duration: '50 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Deep Learning',
            completed: false,
            type: 'course',
            duration: '6 weeks',
            description: 'Neural networks and deep learning',
            courses: [
              {
                platform: 'Udemy',
                title: 'Deep Learning A-Z: Neural Networks',
                url: 'https://www.udemy.com/course/deeplearning/',
                duration: '23 hours',
                price: '$84.99'
              }
            ]
          },
          {
            name: 'Scikit-learn & TensorFlow',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Implement ML models with popular frameworks',
            courses: [
              {
                platform: 'Udemy',
                title: 'TensorFlow Developer Certificate',
                url: 'https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/',
                duration: '64 hours',
                price: '$84.99'
              }
            ]
          },
          {
            name: 'ML Portfolio Project',
            completed: false,
            type: 'project',
            duration: '6 weeks',
            description: 'Build and deploy a machine learning model'
          }
        ]
      },
      {
        title: 'Advanced Analytics',
        duration: '2-3 months',
        description: 'Master advanced data science techniques',
        skills: [
          {
            name: 'Big Data Technologies',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Work with large-scale data processing',
            courses: [
              {
                platform: 'Udemy',
                title: 'Apache Spark with Python - Big Data',
                url: 'https://www.udemy.com/course/spark-and-python-for-big-data-with-pyspark/',
                duration: '11 hours',
                price: '$84.99'
              }
            ]
          },
          {
            name: 'Data Science Capstone',
            completed: false,
            type: 'project',
            duration: '8 weeks',
            description: 'Complete comprehensive data science project'
          }
        ]
      }
    ]
  },
  'ux-designer': {
    title: 'UX/UI Designer',
    description: 'Create intuitive and beautiful user experiences for digital products',
    duration: '10-14 months',
    salary: '$65,000 - $130,000',
    growth: '+13% growth',
    phases: [
      {
        title: 'Design Fundamentals',
        duration: '3-4 months',
        description: 'Learn core design principles and theory',
        skills: [
          {
            name: 'Design Principles & Theory',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Understand fundamental design concepts',
            courses: [
              {
                platform: 'Udemy',
                title: 'The Complete Graphic Design Theory Course',
                url: 'https://www.udemy.com/course/graphic-design-theory-for-beginners-course/',
                duration: '12 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'Design Thinking Fundamentals',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307250861056000175_shared/overview',
                duration: '20 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Color Theory & Typography',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Master visual design fundamentals',
            courses: [
              {
                platform: 'Udemy',
                title: 'Color Theory for Digital Displays & Web Design',
                url: 'https://www.udemy.com/course/color-theory-for-digital-displays-web-design/',
                duration: '4 hours',
                price: '$49.99'
              }
            ]
          },
          {
            name: 'User Psychology',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Understand how users think and behave',
            courses: [
              {
                platform: 'Udemy',
                title: 'User Experience Psychology and UX Design',
                url: 'https://www.udemy.com/course/user-experience-psychology-and-ux-design/',
                duration: '6 hours',
                price: '$54.99'
              }
            ]
          }
        ]
      },
      {
        title: 'UX Research & Strategy',
        duration: '3-4 months',
        description: 'Learn to research users and validate design decisions',
        skills: [
          {
            name: 'User Research Methods',
            completed: false,
            type: 'course',
            duration: '4 weeks',
            description: 'Conduct effective user research',
            courses: [
              {
                platform: 'Udemy',
                title: 'User Experience Design Fundamentals',
                url: 'https://www.udemy.com/course/user-experience-design-fundamentals/',
                duration: '8 hours',
                price: '$74.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'User Experience Research',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307251048448000176_shared/overview',
                duration: '30 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Information Architecture',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Structure and organize information effectively',
            courses: [
              {
                platform: 'Udemy',
                title: 'Information Architecture for UX Design',
                url: 'https://www.udemy.com/course/information-architecture-for-ux-design/',
                duration: '4 hours',
                price: '$49.99'
              }
            ]
          },
          {
            name: 'Wireframing & Prototyping',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Create wireframes and interactive prototypes',
            courses: [
              {
                platform: 'Udemy',
                title: 'Figma UI UX Design Essentials',
                url: 'https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/',
                duration: '12 hours',
                price: '$84.99'
              }
            ]
          },
          {
            name: 'UX Research Project',
            completed: false,
            type: 'project',
            duration: '4 weeks',
            description: 'Conduct comprehensive user research study'
          }
        ]
      },
      {
        title: 'UI Design & Tools',
        duration: '3-4 months',
        description: 'Master visual design and design tools',
        skills: [
          {
            name: 'Figma Mastery',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Become proficient in Figma design tool',
            courses: [
              {
                platform: 'Udemy',
                title: 'Figma UI UX Design Essentials',
                url: 'https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/',
                duration: '12 hours',
                price: '$84.99'
              },
              {
                platform: 'Infosys Springboard',
                title: 'UI/UX Design with Figma',
                url: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_012307251235840000177_shared/overview',
                duration: '25 hours',
                price: 'Free'
              }
            ]
          },
          {
            name: 'Mobile UI Design',
            completed: false,
            type: 'course',
            duration: '3 weeks',
            description: 'Design for mobile platforms',
            courses: [
              {
                platform: 'Udemy',
                title: 'Mobile App Design in Figma',
                url: 'https://www.udemy.com/course/mobile-app-design-in-figma/',
                duration: '8 hours',
                price: '$64.99'
              }
            ]
          },
          {
            name: 'Design Systems',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Create scalable design systems',
            courses: [
              {
                platform: 'Udemy',
                title: 'Design Systems with Figma',
                url: 'https://www.udemy.com/course/design-systems-with-figma/',
                duration: '6 hours',
                price: '$54.99'
              }
            ]
          },
          {
            name: 'UI Design Portfolio',
            completed: false,
            type: 'project',
            duration: '5 weeks',
            description: 'Build comprehensive UI design portfolio'
          }
        ]
      },
      {
        title: 'Professional Practice',
        duration: '2-3 months',
        description: 'Develop professional UX/UI skills',
        skills: [
          {
            name: 'Usability Testing',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Test and validate design decisions',
            courses: [
              {
                platform: 'Udemy',
                title: 'Usability Testing Fundamentals',
                url: 'https://www.udemy.com/course/usability-testing-fundamentals/',
                duration: '3 hours',
                price: '$39.99'
              }
            ]
          },
          {
            name: 'Design Collaboration',
            completed: false,
            type: 'course',
            duration: '2 weeks',
            description: 'Work effectively with developers and stakeholders',
            courses: [
              {
                platform: 'Udemy',
                title: 'UX Design: How to Work with Developers',
                url: 'https://www.udemy.com/course/ux-design-how-to-work-with-developers/',
                duration: '2 hours',
                price: '$34.99'
              }
            ]
          },
          {
            name: 'UX Case Study Project',
            completed: false,
            type: 'project',
            duration: '6 weeks',
            description: 'Complete comprehensive UX case study'
          },
          {
            name: 'Portfolio Presentation',
            completed: false,
            type: 'course',
            duration: '1 week',
            description: 'Present your work professionally',
            courses: [
              {
                platform: 'Udemy',
                title: 'UX Portfolio: How to Build & Present',
                url: 'https://www.udemy.com/course/ux-portfolio-how-to-build-present/',
                duration: '4 hours',
                price: '$49.99'
              }
            ]
          }
        ]
      }
    ]
  }
};