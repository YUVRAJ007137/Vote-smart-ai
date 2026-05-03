import React, { useState } from 'react';
import { t } from '../../utils/translations';
import { StepContainer } from '../StepContainer';

export const Step3VotingProcess = ({ language, onNext, onBack }) => {
  const [activeStep, setActiveStep] = useState(null);

  const processSteps = [
    { id: 1, icon: '🏛️', title: t(language, 'step3Card1Title'), desc: t(language, 'step3Card1Desc'), color: 'bg-blue-50 border-blue-200 text-blue-800' },
    { id: 2, icon: '🆔', title: t(language, 'step3Card2Title'), desc: t(language, 'step3Card2Desc'), color: 'bg-purple-50 border-purple-200 text-purple-800' },
    { id: 3, icon: '🖨️', title: t(language, 'step3Card3Title'), desc: t(language, 'step3Card3Desc'), color: 'bg-saffron-50 border-saffron-200 text-saffron-800' },
    { id: 4, icon: '✅', title: t(language, 'step3Card4Title'), desc: t(language, 'step3Card4Desc'), color: 'bg-indianGreen-50 border-indianGreen-200 text-indianGreen-800' }
  ];

  return (
    <StepContainer 
      title={`🏛️ ${t(language, 'step3Title')}`}
      onNext={onNext}
      onBack={onBack}
      language={language}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {processSteps.map((step, idx) => (
          <div 
            key={step.id}
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform animate-slide-in
              ${activeStep === step.id ? 'scale-105 shadow-xl' : 'shadow-md hover:shadow-lg'}
              ${step.color} stagger-${idx + 1}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{step.icon}</div>
              <div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="font-medium opacity-90">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StepContainer>
  );
};
