import { instance } from './instance';

const TrainingService = {
  getFeedback: async () => {
    return [
      {
        date: '2025.05.08',
        comment:
          '조준 자세가 안정적입니다. 다음엔 반응속도를 개선해보조준 자세가 안정적입니다. 다음엔 반응속도를 개선해보세요.조준 자세가 안정적입니다. 다음엔 반응속도를 개선해보세요. 조준 자세가 안정적입니다. 다음엔 반응속도를 개선해보세요.세hi',
      },
      {
        date: '2025.05.07',
        comment: '복부 근력 훈련이 우수했습니다.',
      },
      {
        date: '2025.05.06',
        comment: '유산소 훈련 참여율이 높았습니다. 꾸준히 유지하세요.',
      },
    ];
  },
  getPushupHistory: async () => {
    return [
      { year: 2025, month: 1, value: 65, mockValue: 60 }, // 1급
      { year: 2025, month: 2, value: 72, mockValue: 66 }, // 특급
      { year: 2025, month: 3, value: 48, mockValue: 52 }, // 3급
      { year: 2025, month: 4, value: 40, mockValue: 60 }, // 불합격
      { year: 2025, month: 5, value: 56, mockValue: 45 }, // 2급
    ];
  },

  getSitupHistory: async () => {
    return [
      { year: 2025, month: 1, value: 80, mockValue: 72 }, // 특급
      { year: 2025, month: 2, value: 62, mockValue: 60 }, // 3급
      { year: 2025, month: 3, value: 68, mockValue: 66 }, // 2급
      { year: 2025, month: 4, value: 75, mockValue: 78 }, // 1급
      { year: 2025, month: 5, value: 50, mockValue: 56 }, // 불합격
    ];
  },

  getRunningHistory: async () => {
    return [
      { year: 2025, month: 1, value: 12.3, mockValue: 13.5 }, // 특급 vs 1급
      { year: 2025, month: 2, value: 14.8, mockValue: 14.2 }, // 2급
      { year: 2025, month: 3, value: 15.3, mockValue: 13.8 }, // 3급 vs 1급
      { year: 2025, month: 4, value: 16.5, mockValue: 16.2 }, // 불합격
      { year: 2025, month: 5, value: 12.5, mockValue: 12.7 }, // 특급 경계
    ];
  },

  getShootingHistory: async () => {
    return [
      { year: 2025, month: 1, value: 18 }, // 특급
      { year: 2025, month: 2, value: 16 }, // 1급
      { year: 2025, month: 3, value: 14 }, // 2급
      { year: 2025, month: 4, value: 10 }, // 불합격
      { year: 2025, month: 5, value: 12 }, // 3급
    ];
  },
};

export default TrainingService;
