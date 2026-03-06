import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import Background from './components/Background';
import { QUESTIONS, calculateScore, getResultLevel } from './data';

const CACHE_KEY = 'energy_profile_progress';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'question' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load cached progress on mount
  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.step && parsed.answers) {
          setStep(parsed.step);
          setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
          setAnswers(parsed.answers);
        }
      }
    } catch (e) {
      console.error('Failed to load cached progress', e);
    }
  }, []);

  // Save progress to cache whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        step,
        currentQuestionIndex,
        answers
      }));
    } catch (e) {
      console.error('Failed to save progress to cache', e);
    }
  }, [step, currentQuestionIndex, answers]);

  const handleStart = () => {
    setStep('question');
  };

  const handleRestart = () => {
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
    localStorage.removeItem(CACHE_KEY);
  };

  const handleAnswer = (value: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const questionId = QUESTIONS[currentQuestionIndex].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setStep('result');
      }
      setIsTransitioning(false);
    }, 400); // Small delay for smooth transition
  };

  const bgColorClass = useMemo(() => {
    if (step === 'welcome' || step === 'question') {
      return 'from-gray-900 via-purple-900 to-gray-900';
    }
    const { totalScore } = calculateScore(answers);
    const level = getResultLevel(totalScore);
    return level.color;
  }, [step, answers]);

  return (
    <div className="min-h-screen font-sans antialiased text-white selection:bg-white/30">
      <Background colorClass={bgColorClass} />
      
      <AnimatePresence mode="wait">
        {step === 'welcome' && <WelcomeScreen key="welcome" onStart={handleStart} />}
        {step === 'question' && (
          <QuestionScreen
            key="question"
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            answers={answers}
          />
        )}
        {step === 'result' && <ResultScreen key="result" answers={answers} onRestart={handleRestart} />}
      </AnimatePresence>
    </div>
  );
}
