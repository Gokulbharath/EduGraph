import React from 'react';
import { Award, Calendar, User, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface CertificateProps {
  id: string;
  courseName: string;
  issuedAt: Date;
  progress: number;
}

const Certificate: React.FC<CertificateProps> = ({
  id,
  courseName,
  issuedAt,
  progress
}) => {
  const { user } = useAuth();
  const studentName = user?.name || 'Student';

  const handleDownload = () => {
    // Create a canvas element for the certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#3B82F6');
    gradient.addColorStop(1, '#1E40AF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Completion', canvas.width / 2, 120);
    
    // Subtitle
    ctx.font = '24px Arial';
    ctx.fillText('This is to certify that', canvas.width / 2, 180);
    
    // Student name
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = '#FCD34D';
    ctx.fillText(studentName, canvas.width / 2, 240);
    
    // Course completion text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.fillText('has successfully completed the course', canvas.width / 2, 290);
    
    // Course name
    ctx.font = 'bold 32px Arial';
    ctx.fillStyle = '#FCD34D';
    ctx.fillText(courseName, canvas.width / 2, 340);
    
    // Progress
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '20px Arial';
    ctx.fillText(`with ${progress}% completion`, canvas.width / 2, 380);
    
    // Date
    ctx.font = '18px Arial';
    ctx.fillText(`Issued on ${issuedAt.toLocaleDateString()}`, canvas.width / 2, 420);
    
    // EduGraph branding
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#FCD34D';
    ctx.fillText('EduGraph', canvas.width / 2, 480);
    
    ctx.font = '16px Arial';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Career Guidance Platform', canvas.width / 2, 505);
    
    // Certificate ID
    ctx.font = '12px Arial';
    ctx.fillStyle = '#E5E7EB';
    ctx.textAlign = 'right';
    ctx.fillText(`Certificate ID: ${id}`, canvas.width - 60, canvas.height - 60);
    
    // Download the certificate
    const link = document.createElement('a');
    link.download = `${courseName.replace(/\s+/g, '_')}_Certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{courseName}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Certificate of Completion</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <User className="w-4 h-4 mr-2" />
          <span>Awarded to: {studentName}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Issued: {issuedAt.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Award className="w-4 h-4 mr-2" />
          <span>Completion: {progress}%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">ID: {id}</span>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;