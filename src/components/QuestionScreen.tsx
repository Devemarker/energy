import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS, OPTIONS } from '../data';

interface QuestionScreenProps {
  currentQuestionIndex: number;
  onAnswer: (value: number) => void;
  answers: Record<number, number>;
}

export default function QuestionScreen({ currentQuestionIndex, onAnswer, answers }: QuestionScreenProps) {
  const question = QUESTIONS[currentQuestionIndex];
  
  if (!question) {
    return null;
  }

  const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-white overflow-hidden">
      {/* Progress Halo */}
      <div className="absolute top-12 flex flex-col items-center">
        <div className="relative w-20 h-20 mb-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-light tracking-widest">
            {currentQuestionIndex + 1}
            <span className="text-white/40 text-xs ml-1">/{QUESTIONS.length}</span>
          </div>
        </div>
      </div>

      {/* Question Card Container */}
      <div className="w-full max-w-2xl relative h-[500px] mt-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-full flex flex-col items-center justify-center p-8 md:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-xl md:text-2xl font-light text-center leading-relaxed mb-12 min-h-[80px] flex items-center tracking-wide">
              {question.text}
            </h2>

            <div className="w-full space-y-3">
              {OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onAnswer(option.value)}
                  className={`w-full py-4 px-6 text-left rounded-xl border transition-all duration-300 font-light tracking-wider flex justify-between items-center group
                    ${answers[question.id] === option.value 
                      ? 'bg-white/30 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/20 hover:border-white/30'
                    }
                  `}
                >
                  <span className="text-sm md:text-base">{option.label}</span>
                  <div className={`w-3 h-3 rounded-full border transition-colors duration-300
                    ${answers[question.id] === option.value 
                      ? 'border-white bg-white' 
                      : 'border-white/30 group-hover:border-white/60 bg-transparent'
                    }
                  `} />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
