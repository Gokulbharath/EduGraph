import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface CourseProgress {
  courseId: string;
  courseName: string;
  progress: number;
  completedAt?: Date;
  certificateIssued?: boolean;
}

interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  issuedAt: Date;
  progress: number;
}

interface ProgressContextType {
  courseProgress: CourseProgress[];
  certificates: Certificate[];
  updateCourseProgress: (courseId: string, courseName: string, progress: number) => void;
  getCourseProgress: (courseId: string) => number;
  getUserCertificates: () => Certificate[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([
    { courseId: 'html-css', courseName: 'HTML & CSS Fundamentals', progress: 100, completedAt: new Date('2024-12-15'), certificateIssued: true },
    { courseId: 'javascript', courseName: 'JavaScript Fundamentals', progress: 85, completedAt: new Date('2024-12-20'), certificateIssued: true },
    { courseId: 'react', courseName: 'React.js Development', progress: 65 },
    { courseId: 'git', courseName: 'Git & Version Control', progress: 90, completedAt: new Date('2024-12-10'), certificateIssued: true },
    { courseId: 'nodejs', courseName: 'Node.js & Express', progress: 45 },
    { courseId: 'database', courseName: 'Database Design & SQL', progress: 30 },
  ]);

  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: 'cert-001',
      courseId: 'html-css',
      courseName: 'HTML & CSS Fundamentals',
      issuedAt: new Date('2024-12-15'),
      progress: 100
    },
    {
      id: 'cert-002',
      courseId: 'javascript',
      courseName: 'JavaScript Fundamentals',
      issuedAt: new Date('2024-12-20'),
      progress: 85
    },
    {
      id: 'cert-003',
      courseId: 'git',
      courseName: 'Git & Version Control',
      issuedAt: new Date('2024-12-10'),
      progress: 90
    }
  ]);

  const updateCourseProgress = (courseId: string, courseName: string, progress: number) => {
    setCourseProgress(prev => {
      const existing = prev.find(cp => cp.courseId === courseId);
      const newProgress = Math.min(100, Math.max(0, progress));
      
      if (existing) {
        const updated = prev.map(cp => 
          cp.courseId === courseId 
            ? { 
                ...cp, 
                progress: newProgress,
                completedAt: newProgress >= 75 ? new Date() : cp.completedAt,
                certificateIssued: newProgress >= 75 ? true : cp.certificateIssued
              }
            : cp
        );
        
        // Issue certificate if progress >= 75% and not already issued
        if (newProgress >= 75 && !existing.certificateIssued) {
          const newCertificate: Certificate = {
            id: `cert-${Date.now()}`,
            courseId,
            courseName,
            issuedAt: new Date(),
            progress: newProgress
          };
          setCertificates(prevCerts => [...prevCerts, newCertificate]);
        }
        
        return updated;
      } else {
        const newCourse: CourseProgress = {
          courseId,
          courseName,
          progress: newProgress,
          completedAt: newProgress >= 75 ? new Date() : undefined,
          certificateIssued: newProgress >= 75
        };
        
        // Issue certificate if progress >= 75%
        if (newProgress >= 75) {
          const newCertificate: Certificate = {
            id: `cert-${Date.now()}`,
            courseId,
            courseName,
            issuedAt: new Date(),
            progress: newProgress
          };
          setCertificates(prevCerts => [...prevCerts, newCertificate]);
        }
        
        return [...prev, newCourse];
      }
    });
  };

  const getCourseProgress = (courseId: string): number => {
    const course = courseProgress.find(cp => cp.courseId === courseId);
    return course?.progress || 0;
  };

  const getUserCertificates = (): Certificate[] => {
    return certificates;
  };

  return (
    <ProgressContext.Provider value={{
      courseProgress,
      certificates,
      updateCourseProgress,
      getCourseProgress,
      getUserCertificates
    }}>
      {children}
    </ProgressContext.Provider>
  );
};