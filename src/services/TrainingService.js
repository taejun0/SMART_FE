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
  getHistory: async () => {
    return [
      {
        year: 2025,
        month: 1,
        pushup: 40,
        situp: 40,
        running: 10,
      },
      {
        year: 2025,
        month: 2,
        pushup: 42,
        situp: 41,
        running: 10.2,
      },
      {
        year: 2025,
        month: 3,
        pushup: 43,
        situp: 42,
        running: 10.5,
      },
      {
        year: 2025,
        month: 4,
        pushup: 45,
        situp: 43,
        running: 10.8,
      },
      {
        year: 2025,
        month: 5,
        pushup: 47,
        situp: 44,
        running: 11,
      },
    ];
  },
  getShootingHistory: async () => {
    return [
      {
        year: 2025,
        month: 1,
        score: 10,
      },
      {
        year: 2025,
        month: 2,
        score: 20,
      },
      {
        year: 2025,
        month: 3,
        score: 16,
      },
      {
        year: 2025,
        month: 4,
        score: 19,
      },
      {
        year: 2025,
        month: 5,
        score: 9,
      },
    ];
  },
};

export default TrainingService;
