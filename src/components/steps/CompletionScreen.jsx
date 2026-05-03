import React from 'react';
import { Share2, RotateCcw, MessageCircle, Download } from 'lucide-react';
import { t } from '../../utils/translations';
import { badges } from '../../utils/constants';

export const CompletionScreen = ({ language, progress, onRestart }) => {
  const score = progress.quizScore || 0;
  
  // Quick badge calculation based on score
  const getBadge = () => {
    if (score === 5) return badges.perfect;
    if (score >= 4) return badges.excellent;
    if (score >= 3) return badges.good;
    return badges.learning;
  };
  
  const badge = getBadge();
  const badgeName = language === 'hi' ? badge.nameHi : badge.nameEn;

  const earnedAchievements = [
    { icon: '🌟', text: 'Election Starter' },
    { icon: '✓', text: 'Eligible Voter' },
    { icon: '📋', text: 'Registered Citizen' },
    { icon: '🗳️', text: 'Voting Expert' },
    { icon: badge.icon, text: badgeName }
  ];

  const appUrl = 'https://votesmart-ai.vercel.app';
  const shareMessage = `I just completed VoteSmart AI and scored ${score}/5 on the Indian Elections quiz! Earned the ${badgeName} badge. 🇮🇳\n\nLearn about the Indian election process: ${appUrl}`;

  const handleShare = (platform) => {
    const encodedMessage = encodeURIComponent(shareMessage);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    } else if (platform === 'twitter') {
      const tweet = `I just completed @VoteSmart_AI! Score: ${score}/5. Badge: ${badgeName} 🇮🇳\n\n#VoteSmart #IndianElections #Civics\n\n${appUrl}`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(shareMessage);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 animate-slide-in relative">
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
        <div className="w-full h-full animate-confetti"></div>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative z-10 text-center">
        
        <div className="text-6xl mb-6 animate-bounce-in">🎉</div>
        
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 via-indianGreen-500 to-indianBlue-600 mb-4">
          {t(language, 'completionTitle')}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 max-w-2xl mx-auto">
          {t(language, 'completionMessage')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Certificate / Stats Card */}
          <div className="bg-gradient-to-br from-saffron-50 to-indianGreen-50 rounded-2xl p-8 shadow-inner border border-saffron-100 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Final Score</h3>
            <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-saffron-400 mb-6 relative">
              <span className="text-5xl font-black text-indianBlue-900">{score}</span>
              <span className="absolute bottom-4 right-4 text-xl font-bold text-gray-400">/5</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-saffron-700 bg-white px-4 py-2 rounded-full shadow-sm">
              <span>{badge.icon}</span> {badgeName}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{t(language, 'achievementsTitle')}</h3>
            <div className="space-y-4">
              {earnedAchievements.map((ach, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-xl">
                    {ach.icon}
                  </div>
                  <span className="font-semibold text-gray-700">{ach.text}</span>
                  <CheckCircle2 size={20} className="text-indianGreen-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              onClick={() => handleShare('whatsapp')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
            >
              <Share2 size={20} /> WhatsApp
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-900 shadow-md hover:shadow-lg transition-all"
            >
              <Share2 size={20} /> X
            </button>
          </div>
          
          <button 
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 shadow-sm transition-all border border-gray-300"
          >
            <RotateCcw size={20} /> {t(language, 'completionRestart')}
          </button>
        </div>

      </div>
    </div>
  );
};

// Extracted CheckCircle2 since it's used inside
const CheckCircle2 = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
