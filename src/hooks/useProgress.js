import { useLocalStorage } from './useLocalStorage';

export const useProgress = () => {
  const [progress, setProgress] = useLocalStorage('votesmart_progress', {
    step: 0,
    userAge: null,
    userState: '',
    voteSelected: null,
    quizSubmitted: false,
    quizScore: 0,
    achievements: []
  });

  const nextStep = () => {
    if (progress.step < 6) {
      setProgress((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const prevStep = () => {
    if (progress.step > 0) {
      setProgress((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const updateProgress = (key, value) => {
    setProgress((prev) => ({ ...prev, [key]: value }));
  };
  
  const resetProgress = () => {
    setProgress({
      step: 0,
      userAge: null,
      userState: '',
      voteSelected: null,
      quizSubmitted: false,
      quizScore: 0,
      achievements: []
    });
  };

  // 6 steps: 0, 1, 2, 3, 4, 5. Percentage is (step / 5) * 100.
  // Step 6 is Completion screen.
  const getPercentage = () => {
    if (progress.step >= 6) return 100;
    return Math.round((progress.step / 5) * 100);
  };

  return { 
    progress, 
    nextStep, 
    prevStep, 
    updateProgress, 
    getPercentage,
    resetProgress 
  };
};
