import { useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import Background from './components/Background';
import { QUESTIONS, calculateScore, getResultLevel } from './data';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'question' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setStep('question');
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
        {step === 'result' && <ResultScreen key="result" answers={answers} />}
      </AnimatePresence>
    </div>
  );
}
