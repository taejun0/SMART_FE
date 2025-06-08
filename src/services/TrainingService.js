import { instance } from './instance';

import dayjs from 'dayjs';

const TrainingService = {
  postPushupResult: async ({
    count,
    summary,
    evaluation_type,
    evaluation_date,
  }) => {
    try {
      return await instance.post('/api/v1/pushups', {
        count,
        summary,
        evaluation_type,
        evaluation_date,
      });
    } catch (error) {
      const res = error?.response;

      if (res?.data?.code === 40004) {
        return await instance.patch('/api/v1/pushups', {
          count,
          summary,
          evaluation_type,
          evaluation_date,
        });
      } else {
        throw error;
      }
    }
  },

  postSitupResult: async ({
    count,
    summary,
    evaluation_type,
    evaluation_date,
  }) => {
    try {
      return await instance.post('/api/v1/situps', {
        count,
        summary,
        evaluation_type,
        evaluation_date,
      });
    } catch (error) {
      const res = error?.response;

      if (res?.data?.code === 40004) {
        return await instance.patch('/api/v1/situps', {
          count,
          summary,
          evaluation_type,
          evaluation_date,
        });
      } else {
        throw error;
      }
    }
  },

  postRunningResult: async ({
    count,
    summary,
    evaluation_type,
    evaluation_date,
  }) => {
    try {
      return await instance.post('/api/v1/runnings', {
        count,
        summary,
        evaluation_type,
        evaluation_date,
      });
    } catch (error) {
      const res = error?.response;

      if (res?.data?.code === 40004) {
        return await instance.patch('/api/v1/runnings', {
          count,
          summary,
          evaluation_type,
          evaluation_date,
        });
      } else {
        throw error;
      }
    }
  },

  getFeedback: async (page = 1, size = 10) => {
    const [pushupRes, situpRes] = await Promise.all([
      instance.get('/api/v1/pushups'),
      instance.get('/api/v1/situps'),
    ]);

    const pushupData = pushupRes.data.data;
    const situpData = situpRes.data.data;

    const mockData = [
      {
        date: '2025.05.12',
        running: 12.2,
        shooting: 19,
      },
      {
        date: '2025.05.10',
        running: 13.2,
        shooting: 17,
      },
      {
        date: '2025.05.09',
        running: 14.0,
        shooting: 15,
      },
      {
        date: '2025.05.08',
        running: 15.5,
        shooting: 18,
      },
      {
        date: '2025.05.07',
        running: 13.9,
        shooting: 16,
      },
      {
        date: '2025.05.06',
        running: 14.5,
        shooting: 12,
      },
      {
        date: '2025.05.05',
        running: 15.2,
        shooting: 14,
      },
      {
        date: '2025.05.04',
        running: 13.7,
        shooting: 19,
      },
      {
        date: '2025.05.03',
        running: 13.5,
        shooting: 20,
      },
      {
        date: '2025.05.02',
        running: 13.8,
        shooting: 18,
      },
      {
        date: '2025.05.01',
        running: 14.1,
        shooting: 15,
      },
    ];

    const situpMap = {};
    situpData.forEach((item) => {
      const date = dayjs(item.evaluation_date).format('YYYY.MM.DD');
      situpMap[date] = item;
    });

    const fullData = pushupData
      .map((item) => {
        if (!item) return null;
        const date = dayjs(item.evaluation_date).format('YYYY.MM.DD');
        const mock = mockData.find((d) => d.date === date) || {};
        const situp = situpMap[date];

        const pushupSummary = `[팔굽혀펴기] ${item.summary}`;
        const situpSummary = situp ? `\n[윗몸일으키기] ${situp.summary}` : '';

        return {
          date,
          comment: pushupSummary + situpSummary,
          pushup: item.count,
          situp: situp ? situp.count : null,
          running: mock.running ?? null,
          shooting: mock.shooting ?? null,
        };
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const start = (page - 1) * size;
    const end = start + size;
    console.log(fullData);
    return fullData.slice(start, end);
  },

  getPushupHistory: async () => {
    const res = await instance.get('/api/v1/pushups');
    const data = res.data.data;

    const grouped = {};

    data.forEach((item) => {
      const date = dayjs(item.evaluation_date);
      const year = date.year();
      const month = date.month() + 1;
      const key = `${year}-${month}`;

      if (!grouped[key]) {
        grouped[key] = {
          year,
          month,
          value: null,
          mockValue: null,
        };
      }

      if (item.evaluation_type === 'TRAINING') {
        grouped[key].mockValue = item.count;
      } else if (item.evaluation_type === 'TEST') {
        grouped[key].value = item.count;
      }
    });

    console.log(grouped);

    return Object.values(grouped).sort(
      (a, b) => a.year - b.year || a.month - b.month
    );
  },

  getSitupHistory: async () => {
    const res = await instance.get('/api/v1/situps');
    const data = res.data.data;

    const grouped = {};

    data.forEach((item) => {
      const date = dayjs(item.evaluation_date);
      const year = date.year();
      const month = date.month() + 1;
      const key = `${year}-${month}`;

      if (!grouped[key]) {
        grouped[key] = {
          year,
          month,
          value: null,
          mockValue: null,
        };
      }

      if (item.evaluation_type === 'TRAINING') {
        grouped[key].mockValue = item.count;
      } else if (item.evaluation_type === 'TEST') {
        grouped[key].value = item.count;
      }
    });

    return Object.values(grouped).sort(
      (a, b) => a.year - b.year || a.month - b.month
    );
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
