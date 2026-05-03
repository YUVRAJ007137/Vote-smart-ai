import React from 'react';
import { t } from '../utils/translations';

export const ProgressBar = ({ progress: progressHook, language }) => {
  const { progress, getPercentage } = progressHook;
  const currentStepDisplay = Math.min(progress.step + 1, 6);
  const percentage = getPercentage();
  const totalSteps = 6;
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-end mb-2">
        <div className="text-sm font-semibold text-gray-600">
          {t(language, 'progressStep', { currentStep: currentStepDisplay, totalSteps })}
        </div>
        <div className="text-sm font-bold text-saffron-600">
          {t(language, 'progressPercentage', { percentage })}
        </div>
      </div>
      
      <div className="progress-bar relative" style={{ height: '12px' }}>
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
        
        {/* Step dots — positioned absolutely at evenly-spaced percentages */}
        {[0, 1, 2, 3, 4, 5].map((stepIdx) => (
          <div 
            key={stepIdx}
            className={`absolute top-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
              progress.step > stepIdx 
                ? 'bg-indianGreen-500 border-indianGreen-500 scale-100' 
                : progress.step === stepIdx 
                  ? 'bg-white border-saffron-500 shadow-[0_0_0_3px_rgba(255,153,51,0.3)] scale-110' 
                  : 'bg-white border-gray-300 scale-100'
            }`}
            style={{ 
              left: `${(stepIdx / (totalSteps - 1)) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
