import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { t } from '../utils/translations';

export const StepContainer = ({ 
  children, 
  title, 
  onNext, 
  onBack, 
  isNextDisabled = false,
  isBackDisabled = false,
  nextLabelKey = 'nextBtn',
  language,
  showNavigation = true
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in pb-20">
      {title && (
        <h2 className="text-3xl md:text-4xl text-center text-indianBlue-900 mb-8 font-bold animate-slide-in stagger-1">
          {title}
        </h2>
      )}
      
      <div className="glass-card p-6 md:p-10 mb-8 animate-slide-in stagger-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
      
      {showNavigation && (
        <div className="flex justify-between items-center mt-8 animate-slide-in stagger-3">
          <button
            onClick={onBack}
            disabled={isBackDisabled}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 ${
              isBackDisabled 
                ? 'opacity-0 cursor-default' 
                : 'bg-white/80 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            <ArrowLeft size={20} />
            {t(language, 'backBtn')}
          </button>
          
          <button
            onClick={onNext}
            disabled={isNextDisabled}
            className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold transition-all duration-300 ${
              isNextDisabled
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-[0_8px_20px_-6px_rgba(255,153,51,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(255,153,51,0.6)] hover:-translate-y-1'
            }`}
          >
            {t(language, nextLabelKey)}
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
