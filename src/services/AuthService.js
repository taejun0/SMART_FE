const AuthService = {
  login: async ({ militaryId, password }) => {
    console.log('[MOCK LOGIN]', { militaryId, password });

    // 로그인 성공한 것처럼 응답
    return {
      success: true,
      message: '로그인 성공',
      token: 'mock-jwt-token',
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
};

export default AuthService;
