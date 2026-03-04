export const DIMENSIONS = [
  { id: 'emotion', name: '情绪基调' },
  { id: 'thinking', name: '思维模式' },
  { id: 'drive', name: '行为驱动' },
  { id: 'social', name: '社交频率' },
];

export const QUESTIONS = [
  // 情绪基调 (Emotional Tone)
  { id: 1, dimension: 'emotion', text: '面对突如其来的困境，我的第一反应通常是恐惧或愤怒。', reverse: true },
  { id: 2, dimension: 'emotion', text: '即使在压力下，我也能较快恢复内心的平静。', reverse: false },
  { id: 3, dimension: 'emotion', text: '我经常感到焦虑，担心未来会发生不好的事情。', reverse: true },
  { id: 4, dimension: 'emotion', text: '我容易因为别人的无心之言而感到受伤或被冒犯。', reverse: true },
  { id: 5, dimension: 'emotion', text: '我能够坦然接受生活中的不确定性，并保持乐观。', reverse: false },
  { id: 6, dimension: 'emotion', text: '当事情不如意时，我会长时间陷入自责或懊悔中。', reverse: true },
  { id: 7, dimension: 'emotion', text: '我经常能感受到发自内心的喜悦和感恩。', reverse: false },
  { id: 8, dimension: 'emotion', text: '我倾向于压抑自己的负面情绪，而不是表达出来。', reverse: true },
  { id: 9, dimension: 'emotion', text: '面对他人的成功，我更容易感到嫉妒而不是随喜。', reverse: true },
  { id: 10, dimension: 'emotion', text: '我相信一切发生皆有利于我，即使是暂时的挫折。', reverse: false },

  // 思维模式 (Thinking Pattern)
  { id: 11, dimension: 'thinking', text: '我认为世界资源是有限的，必须通过竞争才能获得。', reverse: true },
  { id: 12, dimension: 'thinking', text: '我倾向于用“非黑即白”、“对错分明”的眼光看待事物。', reverse: true },
  { id: 13, dimension: 'thinking', text: '我相信宇宙是丰盛的，每个人都能获得自己所需的。', reverse: false },
  { id: 14, dimension: 'thinking', text: '我经常觉得自己是环境或他人行为的受害者。', reverse: true },
  { id: 15, dimension: 'thinking', text: '我能看到事物之间的相互联系，理解整体大于部分之和。', reverse: false },
  { id: 16, dimension: 'thinking', text: '我习惯于关注事物缺失或不足的一面。', reverse: true },
  { id: 17, dimension: 'thinking', text: '我认为改变是困难且痛苦的，倾向于维持现状。', reverse: true },
  { id: 18, dimension: 'thinking', text: '我乐于接受新观念，即使它们挑战了我原有的认知。', reverse: false },
  { id: 19, dimension: 'thinking', text: '我经常用过去的经验来限制对未来的想象。', reverse: true },
  { id: 20, dimension: 'thinking', text: '我相信自己有能力创造和改变自己的现实。', reverse: false },

  // 行为驱动 (Behavioral Drive)
  { id: 21, dimension: 'drive', text: '我做事的动力主要来自于对金钱、地位或名誉的渴望。', reverse: true },
  { id: 22, dimension: 'drive', text: '我经常因为害怕失败或被惩罚而采取行动。', reverse: true },
  { id: 23, dimension: 'drive', text: '我的行动更多是受到内在灵感和热爱的驱使。', reverse: false },
  { id: 24, dimension: 'drive', text: '我做决定时，非常在意别人会怎么看我。', reverse: true },
  { id: 25, dimension: 'drive', text: '我渴望通过自己的工作或行为为世界带来积极的改变。', reverse: false },
  { id: 26, dimension: 'drive', text: '我经常为了证明自己比别人强而努力拼搏。', reverse: true },
  { id: 27, dimension: 'drive', text: '我能够顺流而为，而不是总是试图强行控制结果。', reverse: false },
  { id: 28, dimension: 'drive', text: '我经常感到疲惫，觉得生活是一场需要不断努力的挣扎。', reverse: true },
  { id: 29, dimension: 'drive', text: '我在做自己喜欢的事情时，经常会进入忘我的“心流”状态。', reverse: false },
  { id: 30, dimension: 'drive', text: '我的目标通常与服务他人或实现更高的使命感有关。', reverse: false },

  // 社交频率 (Social Frequency)
  { id: 31, dimension: 'social', text: '在人际交往中，我经常在心里评判或挑剔他人。', reverse: true },
  { id: 32, dimension: 'social', text: '与人交流后，我经常感到能量被消耗或身心疲惫。', reverse: true },
  { id: 33, dimension: 'social', text: '我能够真诚地倾听他人，并给予不带偏见的接纳。', reverse: false },
  { id: 34, dimension: 'social', text: '我倾向于在关系中索取情感支持，而不是主动给予。', reverse: true },
  { id: 35, dimension: 'social', text: '我的存在往往能让周围的人感到放松和被赋能。', reverse: false },
  { id: 36, dimension: 'social', text: '我经常卷入他人的戏剧化冲突或八卦中。', reverse: true },
  { id: 37, dimension: 'social', text: '我愿意原谅曾经伤害过我的人，放下心中的怨恨。', reverse: false },
  { id: 38, dimension: 'social', text: '我习惯于用讨好他人来维持关系，即使委屈自己。', reverse: true },
  { id: 39, dimension: 'social', text: '我能与不同背景和观念的人建立深层的连接。', reverse: false },
  { id: 40, dimension: 'social', text: '我倾向于控制亲密关系中的另一半，以获得安全感。', reverse: true },
];

export const OPTIONS = [
  { value: 1, label: '完全不符合' },
  { value: 2, label: '较不符合' },
  { value: 3, label: '一般/不确定' },
  { value: 4, label: '比较符合' },
  { value: 5, label: '完全符合' },
];

export const calculateScore = (answers: Record<number, number>) => {
  let totalScore = 0;
  const dimensionScores: Record<string, number> = {
    emotion: 0,
    thinking: 0,
    drive: 0,
    social: 0,
  };

  QUESTIONS.forEach((q) => {
    const rawValue = answers[q.id] || 3;
    // If reverse is true, 1->5, 2->4, 3->3, 4->2, 5->1
    const score = q.reverse ? 6 - rawValue : rawValue;
    totalScore += score;
    dimensionScores[q.dimension] += score;
  });

  // Map total score (40-200) to Hawkins scale (20-700+)
  // 120 (average 3) -> 200 (Courage)
  // 40 (average 1) -> 20 (Shame)
  // 200 (average 5) -> 700 (Enlightenment)
  let hawkinsScore = 0;
  if (totalScore <= 120) {
    // 40-120 maps to 20-200
    hawkinsScore = 20 + ((totalScore - 40) / 80) * 180;
  } else {
    // 120-200 maps to 200-700
    hawkinsScore = 200 + ((totalScore - 120) / 80) * 500;
  }

  return {
    totalScore: Math.round(hawkinsScore),
    dimensionScores,
  };
};

export const getResultLevel = (score: number) => {
  if (score < 200) {
    return {
      level: '沉睡期',
      keyword: '能量潜伏者',
      description: '你目前可能正处于一段能量内耗的时期，外界的压力和内在的恐惧、焦虑较容易影响你的状态。这并不是你的错，而是觉醒前必经的蛰伏。',
      guide: [
        '🎧 冥想建议：每天进行10分钟的“身体扫描”冥想，将注意力带回当下，停止头脑的过度运转。',
        '📚 推荐书籍：《当下的力量》（埃克哈特·托利）',
        '🌿 精油调频：薰衣草或岩兰草，帮助扎根大地，平复焦虑。',
        '💡 行动指南：从小事开始练习“接纳”，当负面情绪升起时，不评判它，只是观察它。'
      ],
      color: 'from-gray-800 to-purple-900'
    };
  } else if (score < 310) {
    return {
      level: '觉醒期',
      keyword: '勇气探索者',
      description: '你已经跨越了勇气的临界点（200），开始主动为自己的生命负责。你不再是环境的受害者，而是尝试用积极的态度面对挑战，内在力量正在复苏。',
      guide: [
        '🎧 冥想建议：尝试“感恩冥想”，每天回忆三件微小但美好的事物，提升内在的丰盛感。',
        '📚 推荐书籍：《被讨厌的勇气》（岸见一郎）',
        '🌿 精油调频：甜橙或佛手柑，激发内在的阳光与活力。',
        '💡 行动指南：在面临选择时，问自己：“我是出于恐惧还是出于爱做这个决定？”尽量选择后者。'
      ],
      color: 'from-blue-900 to-indigo-800'
    };
  } else if (score < 500) {
    return {
      level: '跃升期',
      keyword: '高频共振者',
      description: '你的意识水平已经达到了相当高的高度，理性和爱开始主导你的生活。你能够理解事物的复杂性，对他人的包容度很高，经常能体验到心流和喜悦。',
      guide: [
        '🎧 冥想建议：进行“慈悲心（Metta）冥想”，将爱与祝福发送给自己、亲人，甚至曾经有过冲突的人。',
        '📚 推荐书籍：《力量与权力》（大卫·霍金斯）',
        '🌿 精油调频：玫瑰或乳香，开启心轮，连接更高的智慧。',
        '💡 行动指南：将你的高频能量转化为创造力，去开启一个能服务他人的项目或爱好。'
      ],
      color: 'from-indigo-600 to-purple-500'
    };
  } else {
    return {
      level: '合一期',
      keyword: '觉醒先锋',
      description: '你处于极高的能量频率中，体验着深层的平静、喜悦甚至开悟的瞥见。你不再受限于二元对立的思维，你的存在本身就是对周围人的一种疗愈和赋能。',
      guide: [
        '🎧 冥想建议：无为冥想（Just Sitting），不需要任何特定的观想，只是安住于纯粹的觉知中。',
        '📚 推荐书籍：《道德经》或《奇迹课程》',
        '🌿 精油调频：檀香或莲花，协助顶轮的开启与宇宙意识的连接。',
        '💡 行动指南：顺流而活，成为光的管道，让灵感和直觉指引你的每一个行动。'
      ],
      color: 'from-yellow-400 to-purple-600'
    };
  }
};
