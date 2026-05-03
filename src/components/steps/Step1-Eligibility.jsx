import React, { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { t, translations } from '../../utils/translations';
import { getStateFact } from '../../utils/stateData';
import { StepContainer } from '../StepContainer';

export const Step1Eligibility = ({ language, progress, updateProgress, onNext, onBack }) => {
  const [ageInput, setAgeInput] = useState(progress.userAge || '');
  const [stateInput, setStateInput] = useState(progress.userState || '');
  
  const isEligible = parseInt(ageInput) >= 18;
  const isFormComplete = ageInput && stateInput;
  const states = translations[language]?.states || translations['en'].states;
  const stateFact = stateInput ? getStateFact(translations['en'].states[states.indexOf(stateInput)] || stateInput) : null;

  const handleAgeChange = (e) => {
    const val = e.target.value;
    if (val === '' || (/^\d+$/.test(val) && parseInt(val) >= 0 && parseInt(val) <= 120)) {
      setAgeInput(val);
      updateProgress('userAge', val ? parseInt(val) : null);
    }
  };

  const handleStateChange = (e) => {
    setStateInput(e.target.value);
    updateProgress('userState', e.target.value);
  };

  return (
    <StepContainer 
      title={`✓ ${t(language, 'step1Title')}`}
      onNext={onNext}
      onBack={onBack}
      isNextDisabled={!isFormComplete}
      language={language}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t(language, 'step1AgeLabel')}</label>
              <input 
                type="number" 
                value={ageInput}
                onChange={handleAgeChange}
                placeholder={t(language, 'step1AgePlaceholder')}
                className={`w-full p-4 text-lg border-2 rounded-xl focus:outline-none transition-colors ${
                  !ageInput ? 'border-gray-300 focus:border-saffron-500' : 
                  isEligible ? 'border-indianGreen-500 bg-indianGreen-50' : 'border-warning bg-yellow-50'
                }`}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t(language, 'step1StateLabel')}</label>
              <select 
                value={stateInput}
                onChange={handleStateChange}
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl focus:border-saffron-500 focus:outline-none bg-white"
              >
                <option value="" disabled>{t(language, 'step1SelectState')}</option>
                {states.map((state, idx) => (
                  <option key={idx} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {ageInput && (
            <div className={`p-4 rounded-xl flex items-center gap-3 animate-fade-in ${
              isEligible ? 'bg-indianGreen-100 text-indianGreen-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {isEligible ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
              <span className="font-bold text-lg">
                {isEligible ? t(language, 'step1Eligible') : t(language, 'step1NotEligible')}
              </span>
            </div>
          )}
        </div>

        {isFormComplete && stateFact && (
          <div className="flex-1 space-y-6 animate-slide-in">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-indianBlue-500 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-indianBlue-900 mb-4 flex items-center gap-2">
                📍 {stateInput} Info
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-2xl font-black text-saffron-600">{stateFact.totalVoters}</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase">{t(language, 'votersLabel')}</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <p className="text-2xl font-black text-indianGreen-600">{stateFact.constituencies}</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase">{t(language, 'constituenciesLabel')}</p>
                </div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg">
                <p className="text-sm"><strong>{t(language, 'funFactLabel')}:</strong> {stateFact.funFact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </StepContainer>
  );
};
