import React from 'react';
import { FileText, CheckSquare, BadgeCheck, ExternalLink } from 'lucide-react';
import { t, translations } from '../../utils/translations';
import { getStateFact } from '../../utils/stateData';
import { StepContainer } from '../StepContainer';

export const Step2Registration = ({ language, progress, onNext, onBack }) => {
  const stateInput = progress.userState;
  const states = translations[language]?.states || translations['en'].states;
  const englishState = stateInput ? (translations['en'].states[states.indexOf(stateInput)] || stateInput) : 'your state';
  const stateFact = stateInput ? getStateFact(englishState) : null;

  const steps = [
    {
      icon: <CheckSquare size={32} className="text-saffron-500" />,
      title: t(language, 'step2Step1Title'),
      desc: t(language, 'step2Step1Desc'),
      delay: 'stagger-1'
    },
    {
      icon: <FileText size={32} className="text-indianBlue-500" />,
      title: t(language, 'step2Step2Title'),
      desc: t(language, 'step2Step2Desc'),
      delay: 'stagger-2'
    },
    {
      icon: <BadgeCheck size={32} className="text-indianGreen-500" />,
      title: t(language, 'step2Step3Title'),
      desc: t(language, 'step2Step3Desc'),
      delay: 'stagger-3'
    }
  ];

  return (
    <StepContainer 
      title={`📋 ${t(language, 'step2Title')}`}
      onNext={onNext}
      onBack={onBack}
      language={language}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="w-full space-y-6">
          <div className="relative border-l-4 border-gray-200 ml-6 space-y-8 pb-4">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative animate-slide-in ${step.delay}`}>
                <div className="absolute -left-[26px] bg-white p-1 rounded-full border-4 border-white shadow-sm">
                  {step.icon}
                </div>
                <div className="ml-8 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 font-bold text-sm">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-9">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in stagger-4 pl-6">
            <a 
              href="https://voters.eci.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-indianBlue-600 text-white p-3 rounded-lg font-semibold hover:bg-indianBlue-700 transition-colors"
            >
              {t(language, 'step2RegisterECI')} <ExternalLink size={18} />
            </a>
            {stateFact && stateFact.url && stateFact.url !== '#' && (
              <a 
                href={stateFact.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-indianBlue-800 border border-indianBlue-200 p-3 rounded-lg font-semibold hover:bg-indianBlue-50 transition-colors"
              >
                {t(language, 'step2RegisterState')} <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </StepContainer>
  );
};
