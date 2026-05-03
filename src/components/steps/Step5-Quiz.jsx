import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { t } from '../../utils/translations';
import { quizQuestions, badges } from '../../utils/constants';
import { StepContainer } from '../StepContainer';

export const Step5Quiz = ({ language, progress, updateProgress, onNext, onBack }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(progress.quizSubmitted || false);
  const [score, setScore] = useState(progress.quizScore || 0);

  const currentQuestion = quizQuestions[currentQuestionIdx][language === 'hi' ? 'hi' : 'en'];
  const allAnswered = answers.every(a => a !== null);

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestionIdx] = idx;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    answers.forEach((ans, idx) => {
      if (ans === quizQuestions[idx][language === 'hi' ? 'hi' : 'en'].correctAnswer) {
        calculatedScore += 1;
      }
    });
    
    setScore(calculatedScore);
    setIsSubmitted(true);
    updateProgress('quizScore', calculatedScore);
    updateProgress('quizSubmitted', true);
  };

  const getBadge = () => {
    if (score === quizQuestions.length) return badges.perfect;
    if (score >= quizQuestions.length - 1) return badges.excellent;
    if (score >= Math.ceil(quizQuestions.length / 2)) return badges.good;
    return badges.learning;
  };

  return (
    <StepContainer 
      title={`📝 ${t(language, 'step5Title')}`}
      onNext={onNext}
      onBack={onBack}
      isNextDisabled={!isSubmitted}
      nextLabelKey="nextBtn"
      language={language}
      showNavigation={isSubmitted} // Only show container navigation after submission
    >
      {!isSubmitted ? (
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="mb-6 flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-wider">
            <span>{t(language, 'step5QuestionCount', { current: currentQuestionIdx + 1, total: quizQuestions.length })}</span>
            <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full">
              {Math.round(((answers.filter(a => a !== null).length) / quizQuestions.length) * 100)}%
            </span>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-indianBlue-900 mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[currentQuestionIdx] === idx 
                      ? 'border-saffron-500 bg-saffron-50 shadow-md transform scale-[1.02]' 
                      : 'border-gray-200 hover:border-saffron-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      answers[currentQuestionIdx] === idx ? 'border-saffron-500 bg-saffron-500' : 'border-gray-300 bg-white'
                    }`}>
                      {answers[currentQuestionIdx] === idx && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className={`text-lg ${answers[currentQuestionIdx] === idx ? 'font-semibold text-saffron-900' : 'text-gray-700'}`}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIdx === 0}
              className="px-6 py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            
            {currentQuestionIdx === quizQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="px-8 py-3 rounded-xl font-bold text-white bg-indianGreen-500 hover:bg-indianGreen-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
              >
                {t(language, 'submitBtn')}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                disabled={answers[currentQuestionIdx] === null}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-indianBlue-500 hover:bg-indianBlue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto animate-slide-in relative">
          <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-50">
            <div className="w-full h-full animate-confetti"></div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-black text-indianBlue-900 mb-2">{t(language, 'step5Score')}</h3>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-saffron-400 to-indianGreen-500 text-white shadow-xl mb-6 mt-4">
              <span className="text-5xl font-black">{score}</span>
              <span className="text-2xl font-bold opacity-80">/{quizQuestions.length}</span>
            </div>
            
            <p className="text-xl font-semibold text-gray-700 mb-4">
              {score === quizQuestions.length ? t(language, 'step5Perfect') :
               score >= quizQuestions.length - 1 ? t(language, 'step5Great') :
               score >= Math.ceil(quizQuestions.length / 2) ? t(language, 'step5Good') :
               t(language, 'step5Feedback')}
            </p>

            <div className="inline-flex items-center gap-3 bg-yellow-50 border-2 border-yellow-200 px-6 py-3 rounded-full text-yellow-800 font-bold shadow-sm">
              <span className="text-2xl">{getBadge().icon}</span>
              <span>Badge Earned: {language === 'hi' ? getBadge().nameHi : getBadge().nameEn}</span>
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            <h4 className="font-bold text-gray-700 mb-4">Review Your Answers:</h4>
            {quizQuestions.map((q, idx) => {
              const qData = q[language === 'hi' ? 'hi' : 'en'];
              const userAns = answers[idx];
              const isCorrect = userAns === qData.correctAnswer;

              return (
                <div key={idx} className={`p-4 rounded-xl border-l-4 shadow-sm bg-white ${
                  isCorrect ? 'border-indianGreen-500' : 'border-red-500'
                }`}>
                  <p className="font-bold text-gray-800 mb-2">{idx + 1}. {qData.question}</p>
                  
                  <div className="flex flex-col gap-1 mb-2">
                    <p className={`text-sm ${isCorrect ? 'text-indianGreen-700 font-semibold' : 'text-red-600 line-through'}`}>
                      Your Answer: {qData.options[userAns]}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-indianGreen-700 font-semibold">
                        Correct Answer: {qData.options[qData.correctAnswer]}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-3 bg-gray-50 p-3 rounded-lg text-sm text-gray-600 italic flex gap-2 items-start">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-indianBlue-500" />
                    <p>{qData.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </StepContainer>
  );
};
