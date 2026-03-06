import { motion } from 'motion/react';
import { useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { toPng } from 'html-to-image';
import { Download, RotateCcw } from 'lucide-react';
import { calculateScore, getResultLevel, DIMENSIONS } from '../data';

interface ResultScreenProps {
  answers: Record<number, number>;
  onRestart?: () => void;
}

export default function ResultScreen({ answers, onRestart }: ResultScreenProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const { totalScore, dimensionScores } = calculateScore(answers);
  const resultLevel = getResultLevel(totalScore);

  const radarData = DIMENSIONS.map(dim => ({
    subject: dim.name,
    A: Math.round((dimensionScores[dim.id] / (dim.count * 5)) * 100), // Convert to percentage
    fullMark: 100,
  }));

  const handleDownload = async () => {
    if (resultRef.current) {
      try {
        const dataUrl = await toPng(resultRef.current, {
          cacheBust: true,
          pixelRatio: 2,
        });
        const link = document.createElement('a');
        link.download = 'energy-profile.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to generate image', err);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-screen py-12 px-4 flex flex-col items-center text-white"
    >
      <div 
        ref={resultRef}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
        
        <div className="text-center mb-10">
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/60 mb-2">你的核心能量层级</h2>
          <div className="text-6xl md:text-8xl font-light tracking-tighter mb-4 flex items-baseline justify-center gap-2">
            {totalScore}
            <span className="text-xl text-white/40 tracking-normal">/ 1000</span>
          </div>
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md">
            <span className="text-xl font-medium tracking-widest">{resultLevel.keyword}</span>
          </div>
        </div>

        <div className="h-64 w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 300 }} />
              <Radar name="能量分布" dataKey="A" stroke="rgba(255,255,255,0.8)" fill="rgba(255,255,255,0.3)" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-black/20 border border-white/10">
            <h3 className="text-lg font-medium mb-3 tracking-wider">状态解析</h3>
            <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
              {resultLevel.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-medium mb-4 tracking-wider">专属调频指南</h3>
            <ul className="space-y-4">
              {resultLevel.guide.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base font-light text-white/90">
                  <span className="opacity-80">{item.split('：')[0]}：</span>
                  <span className="flex-1">{item.split('：')[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <Download size={20} />
          <span className="tracking-widest">保存专属海报</span>
        </button>
        {onRestart && (
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-white/10 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-md"
          >
            <RotateCcw size={20} />
            <span className="tracking-widest">重新测评</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
