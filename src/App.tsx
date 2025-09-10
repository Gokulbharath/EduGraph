import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import RoadmapPage from './pages/RoadmapPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <AuthProvider>
          <QuizProvider>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/roadmap/:careerId" element={<RoadmapPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
              </div>
            </Router>
          </QuizProvider>
        </AuthProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;