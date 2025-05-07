const AuthService = {
  loginSoldier: async ({ militaryId, password }) => {
    console.log('[MOCK SOLDIER LOGIN]', { militaryId, password });
    return {
      success: true,
      message: '병사 로그인 성공',
      token: 'mock-soldier-jwt-token',
    };
  },

  loginOfficer: async ({ militaryId, password }) => {
    console.log('[MOCK OFFICER LOGIN]', { militaryId, password });
    return {
      success: true,
      message: '간부 로그인 성공',
      token: 'mock-officer-jwt-token',
    };
  },

  signup: async ({
    name,
    branch,
    unit,
    company,
    platoon,
    rank,
    militaryId,
    password,
  }) => {
    console.log('[MOCK SIGNUP]', {
      name,
      branch,
      unit,
      company,
      platoon,
      rank,
      militaryId,
      password,
    });
    return {
      success: true,
      message: '회원가입 성공',
    };
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
    };
  },
};

export default AuthService;
