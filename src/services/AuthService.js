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

  signup: async ({ militaryId, password, role }) => {
    console.log('[MOCK SIGNUP]', { militaryId, password, role });

    // 회원가입 성공한 것처럼 응답
    return {
      success: true,
      message: '회원가입 성공',
    };
  },
};

export default AuthService;
