import { motion } from 'motion/react';

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center text-white"
    >
      <div className="max-w-md p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-light tracking-widest mb-4">能量图谱测评</h1>
        <p className="text-lg text-white/80 mb-8 font-light leading-relaxed">
          基于大卫·霍金斯意识层级理论，探索你当下的核心能量频率。
          <br /><br />
          请在安静的环境下，跟随直觉回答接下来的40个问题。
        </p>
        <button
          onClick={onStart}
          className="px-8 py-3 text-lg tracking-widest bg-white/20 hover:bg-white/30 border border-white/30 rounded-full transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          开启探索
        </button>
      </div>
    </motion.div>
  );
}
