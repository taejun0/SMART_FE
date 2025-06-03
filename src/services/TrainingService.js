import { instance } from './instance';

import dayjs from 'dayjs';

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
    const res = await instance.get('/api/v1/pushups');
    const pushupData = res.data.data;

    const mockData = [
      {
        date: '2025.05.12',
        situp: 50,
        running: 12.2,
        shooting: 19,
      },
      {
        date: '2025.05.10',
        situp: 60,
        running: 13.2,
        shooting: 17,
      },
      {
        date: '2025.05.09',
        situp: 62,
        running: 14.0,
        shooting: 15,
      },
      {
        date: '2025.05.08',
        situp: 58,
        running: 15.5,
        shooting: 18,
      },
      {
        date: '2025.05.07',
        situp: 60,
        running: 13.9,
        shooting: 16,
      },
      {
        date: '2025.05.06',
        situp: 65,
        running: 14.5,
        shooting: 12,
      },
      {
        date: '2025.05.05',
        situp: 55,
        running: 15.2,
        shooting: 14,
      },
      {
        date: '2025.05.04',
        situp: 63,
        running: 13.7,
        shooting: 19,
      },
      {
        date: '2025.05.03',
        situp: 64,
        running: 13.5,
        shooting: 20,
      },
      {
        date: '2025.05.02',
        situp: 61,
        running: 13.8,
        shooting: 18,
      },
      {
        date: '2025.05.01',
        situp: 66,
        running: 14.1,
        shooting: 15,
      },
    ];

    const fullData = pushupData
      .map((item, index) => {
        const date = dayjs(item.evaluation_date).format('YYYY.MM.DD');
        const mock = mockData[index] || {};

        return {
          date,
          comment: item.summary,
          pushup: item.count,
          situp: mock.situp ?? null,
          running: mock.running ?? null,
          shooting: mock.shooting ?? null,
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const start = (page - 1) * size;
    const end = start + size;
    return fullData.slice(start, end);
  },

  getPushupHistory: async () => {
    const res = await instance.get('/api/v1/pushups');
    const data = res.data.data;

    console.log(data);

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
