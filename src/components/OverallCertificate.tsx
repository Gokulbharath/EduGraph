import React from 'react';
import { Award, Calendar, User, Star, Brain } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface OverallCertificateProps {
  completionDate: Date;
  overallProgress: number;
}

const OverallCertificate: React.FC<OverallCertificateProps> = ({
  completionDate,
  overallProgress
}) => {
  const { user } = useAuth();
  const studentName = user?.name || 'Student';
  const selectedRole = user?.selectedRole || 'Professional';

  const handleDownload = () => {
    // Create a canvas element for the certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size (A4 landscape proportions)
    canvas.width = 1200;
    canvas.height = 850;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1E40AF');
    gradient.addColorStop(0.5, '#3B82F6');
    gradient.addColorStop(1, '#0EA5E9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Decorative border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    
    // Inner decorative border
    ctx.strokeStyle = '#FCD34D';
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
    
    // Certificate header
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 64px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE', canvas.width / 2, 160);
    
    ctx.font = 'bold 48px Arial';
    ctx.fillText('OF COMPLETION', canvas.width / 2, 220);
    
    // Decorative line
    ctx.strokeStyle = '#FCD34D';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 200, 250);
    ctx.lineTo(canvas.width / 2 + 200, 250);
    ctx.stroke();
    
    // Main text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '32px Arial';
    ctx.fillText('This is to certify that', canvas.width / 2, 320);
    
    // Student name (highlighted)
    ctx.fillStyle = '#FCD34D';
    ctx.font = 'bold 56px Arial';
    ctx.fillText(studentName, canvas.width / 2, 390);
    
    // Achievement text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '32px Arial';
    ctx.fillText('has successfully completed the comprehensive', canvas.width / 2, 450);
    
    // Role (highlighted)
    ctx.fillStyle = '#FCD34D';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(`${selectedRole} Career Path`, canvas.width / 2, 510);
    
    // Progress and completion info
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '28px Arial';
    ctx.fillText(`with ${overallProgress}% overall completion`, canvas.width / 2, 570);
    
    // Date
    ctx.font = '24px Arial';
    ctx.fillText(`Completed on ${completionDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`, canvas.width / 2, 620);
    
    // EduGraph branding section
    ctx.fillStyle = '#FCD34D';
    ctx.font = 'bold 36px Arial';
    ctx.fillText('EduGraph', canvas.width / 2, 700);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '20px Arial';
    ctx.fillText('Career Guidance Platform', canvas.width / 2, 730);
    
    // Signature line
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 150, 770);
    ctx.lineTo(canvas.width / 2 + 150, 770);
    ctx.stroke();
    
    ctx.font = '16px Arial';
    ctx.fillText('Director of Education', canvas.width / 2, 790);
    
    // Certificate ID (bottom right)
    ctx.font = '14px Arial';
    ctx.fillStyle = '#E5E7EB';
    ctx.textAlign = 'right';
    ctx.fillText(`Certificate ID: EDG-${Date.now()}`, canvas.width - 80, canvas.height - 80);
    
    // Add decorative elements (stars)
    const drawStar = (x: number, y: number, size: number) => {
      ctx.fillStyle = '#FCD34D';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 144 - 90) * Math.PI / 180;
        const x1 = x + Math.cos(angle) * size;
        const y1 = y + Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
        
        const innerAngle = ((i + 0.5) * 144 - 90) * Math.PI / 180;
        const x2 = x + Math.cos(innerAngle) * (size * 0.4);
        const y2 = y + Math.sin(innerAngle) * (size * 0.4);
        ctx.lineTo(x2, y2);
      }
      ctx.closePath();
      ctx.fill();
    };
    
    // Add decorative stars
    drawStar(150, 150, 20);
    drawStar(canvas.width - 150, 150, 20);
    drawStar(150, canvas.height - 150, 20);
    drawStar(canvas.width - 150, canvas.height - 150, 20);
    
    // Download the certificate
    const link = document.createElement('a');
    link.download = `${studentName.replace(/\s+/g, '_')}_${selectedRole.replace(/\s+/g, '_')}_Certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Career Completion Certificate
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Congratulations on completing your {selectedRole} journey!
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Student Name</p>
              <p className="font-semibold text-gray-900 dark:text-white">{studentName}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Career Path</p>
              <p className="font-semibold text-gray-900 dark:text-white">{selectedRole}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completion Date</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {completionDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overall Progress</p>
              <p className="font-semibold text-gray-900 dark:text-white">{overallProgress}%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            Outstanding Achievement
          </span>
        </div>
        
        <button
          onClick={handleDownload}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Award className="w-5 h-5 mr-2" />
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default OverallCertificate;