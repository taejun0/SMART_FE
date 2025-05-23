import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const SIGNUP_CONSTANTS = {
  TITLE_TEXT: {
    0: () => `반가워요!\n이름을 입력해 주세요`,
    1: (name) => `${name}님의\n군종을 선택해 주세요`,
    2: (name) => `${name}님의\n자대를 선택해 주세요`,
    3: (name) => `${name}님의\n중대를 선택해 주세요`,
    4: (name) => `${name}님의\n소대를 선택해 주세요`,
    5: (name) => `${name}님의\n계급을 선택해 주세요`,
    6: (name) => `${name}님의\n군번을 입력해 주세요`,
    7: () => `안전한\n비밀번호를 입력해 주세요`,
    8: () => `안전한\n비밀번호를 확인해 주세요`,
  },
  PLACEHOLDER: {
    0: '이름을 입력하세요',
    1: '군종을 선택하세요',
    2: '자대를 선택하세요',
    3: '중대를 선택하세요',
    4: '소대를 선택하세요',
    5: '계급을 선택하세요',
    6: '군번을 입력하세요',
    7: '8~16자리 영문, 숫자, 특수문자',
    8: '한번 더 입력해주세요',
  },
  LABEL: {
    0: '이름',
    1: '군종',
    2: '자대',
    3: '중대',
    4: '소대',
    5: '계급',
    6: '군번',
    7: '비밀번호',
    8: '비밀번호 재확인',
  },
  IMGAE: {
    X: IMAGE_CONSTANTS.X,
    eye: IMAGE_CONSTANTS.EYE,
    noneye: IMAGE_CONSTANTS.TEXTHOLDER,
  },
  OPTIONS: {
    1: ['육군', '해군', '공군', '해병대'],
    5: ['이병', '일병', '상병', '병장', '간부'],
  },
  Text: {
    next: '다음',
  },
};
