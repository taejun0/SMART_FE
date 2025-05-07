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

  // 기존 회원가입 유지
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
};

export default AuthService;
