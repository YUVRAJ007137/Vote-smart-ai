import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { t } from '../../utils/translations';
import { StepContainer } from '../StepContainer';

export const Step4VotingSimulation = ({ language, progress, updateProgress, onNext, onBack }) => {
  const [selectedParty, setSelectedParty] = useState(progress.voteSelected || null);
  const [showSuccess, setShowSuccess] = useState(!!progress.voteSelected);

  const parties = [
    { id: 'partyA', labelKey: 'step4PartyA', color: 'bg-red-500 hover:bg-red-600 focus:ring-red-500', border: 'border-red-600', ring: 'ring-red-300' },
    { id: 'partyB', labelKey: 'step4PartyB', color: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500', border: 'border-blue-600', ring: 'ring-blue-300' },
    { id: 'nota', labelKey: 'step4NOTA', color: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500', border: 'border-gray-600', ring: 'ring-gray-300' }
  ];

  const handleVote = (partyId, partyLabel) => {
    if (selectedParty) return; // Prevent multiple votes

    setSelectedParty(partyId);
    updateProgress('voteSelected', partyId);
    setShowSuccess(true);
  };

  return (
    <StepContainer 
      title={`🗳️ ${t(language, 'step4Title')}`}
      onNext={onNext}
      onBack={onBack}
      isNextDisabled={!selectedParty}
      language={language}
    >
      <div className="max-w-2xl mx-auto text-center mb-8 animate-fade-in">
        <p className="text-xl font-medium text-gray-700 mb-8">{t(language, 'step4Instruction')}</p>

        <div className="space-y-4">
          {parties.map((party) => {
            const partyLabel = t(language, party.labelKey);
            const isSelected = selectedParty === party.id;
            const isDisabled = !!selectedParty && !isSelected;

            return (
              <button
                key={party.id}
                onClick={() => handleVote(party.id, partyLabel)}
                disabled={!!selectedParty}
                className={`w-full relative flex items-center justify-between p-6 rounded-xl border-2 transition-all duration-300 ${
                  isSelected 
                    ? `${party.border} bg-white shadow-lg scale-105 ring-4 ${party.ring}` 
                    : isDisabled 
                      ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' 
                      : 'border-gray-300 hover:border-gray-400 bg-white hover:shadow-md cursor-pointer'
                }`}
                aria-label={`Vote for ${partyLabel}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-12 rounded flex items-center justify-center ${party.color} shadow-inner`}>
                    {/* Placeholder for party symbol */}
                    <div className="w-6 h-6 rounded-full bg-white/30"></div>
                  </div>
                  <span className={`text-2xl font-bold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                    {partyLabel}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-10 w-24 bg-gray-200 rounded flex items-center justify-center border-b-4 border-gray-300">
                    <div className={`w-6 h-6 rounded-full ${isSelected ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'bg-indianGreen-500 border-indianGreen-600' : 'bg-gray-100 border-gray-300'
                  }`}>
                    {isSelected && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {showSuccess && (
          <div className="mt-8 animate-slide-in relative">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-full h-full animate-confetti"></div>
            </div>
            
            <div className="bg-indianGreen-50 border-2 border-indianGreen-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-center gap-3 text-indianGreen-700 mb-4">
                <CheckCircle2 size={32} className="animate-bounce-in" />
                <h3 className="text-2xl font-bold">{t(language, 'step4Success')}</h3>
              </div>
              <p className="text-indianGreen-800 font-medium">{t(language, 'step4SuccessMsg')}</p>
            </div>
          </div>
        )}
      </div>
    </StepContainer>
  );
};
