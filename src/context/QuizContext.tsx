import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizResults {
  answers: Record<number, any>;
  completedAt: Date;
}

interface QuizContextType {
  quizResults: QuizResults | null;
  saveQuizResults: (answers: Record<number, any>) => void;
  clearQuizResults: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);

  const saveQuizResults = (answers: Record<number, any>) => {
    setQuizResults({
      answers,
      completedAt: new Date()
    });
  };

  const clearQuizResults = () => {
    setQuizResults(null);
  };

  const value = {
    quizResults,
    saveQuizResults,
    clearQuizResults
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};