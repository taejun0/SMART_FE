import { instance } from './instance';

const AuthService = {
  loginSoldier: async ({ militaryId, password }) => {
    const response = await instance.post('/api/v1/auth/sign-in', {
      service_number: militaryId,
      password,
    });

    const { access_token, refresh_token } = response.data.data;
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('refreshToken', refresh_token);

    return response.data;
  },

  loginOfficer: async ({ militaryId, password }) => {
    const response = await instance.post('/api/v1/auth/sign-in', {
      service_number: militaryId,
      password,
    });

    return response.data;
  },

  signup: async ({
    name,
    birth,
    enlistDate,
    branch,
    unit,
    company,
    platoon,
    rank,
    militaryId,
    password,
  }) => {
    const requestBody = {
      soldier_name: name,
      birth,
      enlistment_date: enlistDate,
      military_branch: branch,
      military_name: unit,
      company: Number(company),
      platoon: Number(platoon),
      military_rank: rank,
      service_number: militaryId,
      password,
    };
    console.log(requestBody);
    const response = await instance.post('/api/v1/auth/sign-up', requestBody);
    return response.data;
  },

  getUserInfo: async () => {
    return {
      role: '병사',
      name: '오태준',
      branch: '박격포병',
      unit: '31사단 93여단',
      company: '17중대',
      platoon: '화기소개',
      rank: '병장',
      level: '1',
    };
  },
};

export default AuthService;
