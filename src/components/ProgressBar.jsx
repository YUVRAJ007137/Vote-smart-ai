import React from 'react';
import { t } from '../utils/translations';

export const ProgressBar = ({ progress: progressHook, language }) => {
  const { progress, getPercentage } = progressHook;
  const isComplete = progress.step >= 6;
  const currentStepDisplay = Math.min(progress.step + 1, 6);
  const percentage = getPercentage();
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-end mb-2">
        <div className="text-sm font-semibold text-gray-600">
          {t(language, 'progressStep', { currentStep: currentStepDisplay, totalSteps: 6 })}
        </div>
        <div className="text-sm font-bold text-saffron-600">
          {t(language, 'progressPercentage', { percentage })}
        </div>
      </div>
      
      <div className="progress-bar relative">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
        
        {/* Step dots */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-1">
          {[0, 1, 2, 3, 4, 5].map((stepIdx) => (
            <div 
              key={stepIdx}
              className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                progress.step > stepIdx ? 'bg-indianGreen-500 border-indianGreen-500' :
                progress.step === stepIdx ? 'bg-white border-saffron-500 shadow-[0_0_0_2px_rgba(255,153,51,0.3)]' :
                'bg-white border-gray-300'
              }`}
              style={{ transform: 'translateX(-50%)', marginLeft: stepIdx === 0 ? '8px' : stepIdx === 5 ? 'auto' : '0' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
