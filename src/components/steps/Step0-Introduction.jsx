import React from 'react';
import { t } from '../../utils/translations';
import { StepContainer } from '../StepContainer';

export const Step0Introduction = ({ language, onNext, onBack }) => {
  return (
    <StepContainer 
      title={`🗳️ ${t(language, 'step0Title')}`}
      onNext={onNext}
      onBack={onBack}
      isBackDisabled={true}
      nextLabelKey="startBtn"
      language={language}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
            {t(language, 'step0Content')}
          </p>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center relative">
          <div className="absolute inset-0 bg-saffron-100 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
          <svg className="w-64 h-64 animate-float relative z-10" viewBox="0 0 100 100">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="70">🗳️</text>
          </svg>
        </div>
      </div>
    </StepContainer>
  );
};
