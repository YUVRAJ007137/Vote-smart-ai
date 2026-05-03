import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import { useProgress } from './hooks/useProgress';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ProgressBar } from './components/ProgressBar';
import { AIChat } from './components/AIChat';
import { t } from './utils/translations';

// Import Steps
import { Step0Introduction } from './components/steps/Step0-Introduction';
import { Step1Eligibility } from './components/steps/Step1-Eligibility';
import { Step2Registration } from './components/steps/Step2-Registration';
import { Step3VotingProcess } from './components/steps/Step3-VotingProcess';
import { Step4VotingSimulation } from './components/steps/Step4-VotingSimulation';
import { Step5Quiz } from './components/steps/Step5-Quiz';
import { CompletionScreen } from './components/steps/CompletionScreen';

function App() {
  const { language, setLanguage } = useLanguage();
  const progressHook = useProgress();
  const { progress, nextStep, prevStep, updateProgress, resetProgress } = progressHook;

  const renderStep = () => {
    switch (progress.step) {
      case 0:
        return <Step0Introduction language={language} onNext={nextStep} onBack={prevStep} />;
      case 1:
        return <Step1Eligibility language={language} progress={progress} updateProgress={updateProgress} onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <Step2Registration language={language} progress={progress} onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <Step3VotingProcess language={language} onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <Step4VotingSimulation language={language} progress={progress} updateProgress={updateProgress} onNext={nextStep} onBack={prevStep} />;
      case 5:
        return <Step5Quiz language={language} progress={progress} updateProgress={updateProgress} onNext={nextStep} onBack={prevStep} />;
      case 6:
        return <CompletionScreen language={language} progress={progress} onRestart={resetProgress} />;
      default:
        return <Step0Introduction language={language} onNext={nextStep} onBack={prevStep} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-saffron-500 via-white to-indianGreen-500 z-50"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-saffron-300/20 blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indianGreen-300/20 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-[40%] left-[50%] translate-x-[-50%] w-[40vw] h-[40vw] rounded-full bg-indianBlue-300/10 blur-[120px] pointer-events-none -z-10 animate-float"></div>
      
      {/* Top Header Section */}
      <header className="pt-8 pb-4 px-4 w-full flex flex-col items-center animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl">🗳️</span>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 to-indianBlue-800">
            {t(language, 'appTitle')}
          </h1>
        </div>
        <p className="text-gray-600 font-medium text-center max-w-md">
          {t(language, 'appSubtitle')}
        </p>
      </header>

      {/* Main Content Area */}
      <main className="w-full relative z-10">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
        
        {/* Only show progress bar if not on completion screen */}
        {progress.step < 6 && (
          <ProgressBar progress={progressHook} language={language} />
        )}
        
        {/* Render current step component */}
        {renderStep()}
      </main>

      {/* Global AI Chat widget */}
      <AIChat />
    </div>
  );
}

export default App;
