import { instance } from './instance';

const TrainingService = {
  postPushupResult: async ({
    count,
    summary,
    evaluation_type,
    evaluation_date,
  }) => {
    return await instance.post('/api/v1/pushups', {
      count,
      summary,
      evaluation_type,
      evaluation_date,
    });
  },

  getFeedback: async (page = 1, size = 10) => {
    const fullData = [
      {
        date: '2025.05.12',
        comment:
          '운동 루틴을 철저히 지키고 있으며, 이로 인해 체력 회복 속도가 빨라졌습니다. 앞으로도 이 기조를 유지해주시기 바랍니다.',
        pushup: 59,
        situp: 50,
        running: 12.2,
        shooting: 19,
      },
      {
        date: '2025.05.10',
        comment:
          '운동 루틴을 철저히 지키고 있으며, 이로 인해 체력 회복 속도가 빨라졌습니다. 앞으로도 이 기조를 유지해주시기 바랍니다.',
        pushup: 55,
        situp: 60,
        running: 13.2,
        shooting: 17,
      },
      {
        date: '2025.05.09',
        comment:
          '복부 근력과 하체 근지구력이 함께 좋아지고 있으며, 이는 최근 운동 참여율이 증가한 결과로 보입니다. 매우 인상적입니다.',
        pushup: 60,
        situp: 62,
        running: 14.0,
        shooting: 15,
      },
      {
        date: '2025.05.08',
        comment:
          '사격 정확도가 눈에 띄게 개선되고 있습니다. 앞으로 반응속도 개선과 복합적인 트레이닝을 통해 더 큰 성장을 기대해볼 수 있습니다.',
        pushup: 48,
        situp: 58,
        running: 15.5,
        shooting: 18,
      },
      {
        date: '2025.05.07',
        comment:
          '유산소 훈련 참여율이 꾸준히 높아지고 있으며, 이는 심폐지구력 향상에 큰 도움이 되고 있습니다. 정말 훌륭한 모습이에요.',
        pushup: 50,
        situp: 60,
        running: 13.9,
        shooting: 16,
      },
      {
        date: '2025.05.06',
        comment:
          '전반적인 자세가 향상되었으며, 앞으로도 지속적인 자세 교정과 꾸준한 루틴 유지가 필요합니다. 특히 상체 안정성이 돋보입니다.',
        pushup: 52,
        situp: 65,
        running: 14.5,
        shooting: 12,
      },
      {
        date: '2025.05.05',
        comment:
          '체력 향상이 두드러지며, 훈련 전보다 피로 회복이 빠릅니다. 이는 식단과 수면 등 생활 습관의 개선도 영향을 준 것으로 보입니다.',
        pushup: 46,
        situp: 55,
        running: 15.2,
        shooting: 14,
      },
      {
        date: '2025.05.04',
        comment:
          '집중력이 눈에 띄게 증가했으며, 세밀한 움직임에서도 흔들림 없이 좋은 자세를 유지하고 있습니다.',
        pushup: 58,
        situp: 63,
        running: 13.7,
        shooting: 19,
      },
      {
        date: '2025.05.03',
        comment:
          '호흡 조절이 안정적이며 좋은 컨디션을 유지하고 있습니다. 긴 시간 동안 유지되는 집중력도 함께 향상되고 있습니다.',
        pushup: 62,
        situp: 64,
        running: 13.5,
        shooting: 20,
      },
      {
        date: '2025.05.02',
        comment:
          '운동 루틴을 철저히 지키고 있으며, 이로 인해 체력 회복 속도가 빨라졌습니다. 앞으로도 이 기조를 유지해주시기 바랍니다.',
        pushup: 57,
        situp: 61,
        running: 13.8,
        shooting: 18,
      },
      {
        date: '2025.05.01',
        comment:
          '복부 근력과 하체 근지구력이 함께 좋아지고 있으며, 이는 최근 운동 참여율이 증가한 결과로 보입니다. 매우 인상적입니다.',
        pushup: 59,
        situp: 66,
        running: 14.1,
        shooting: 15,
      },
    ];
    const start = (page - 1) * size;
    const end = start + size;
    return fullData.slice(start, end);
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
