import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const ANALYZECONSTANTS = {
  Header: {
    TITLE: '훈련분석',
  },
  Section: {
    HISTORY_TITLE: '최근 기록들이에요',
  },
  Feedback: {
    PUSHUP: {
      INCREASE: '팔굽혀펴기 횟수가 증가했어요!',
      DECREASE: '팔굽혀펴기 횟수가 감소했어요!',
    },
    SITUP: {
      INCREASE: '윗몸일으키기 횟수가 증가했어요!',
      DECREASE: '윗몸일으키기 횟수가 감소했어요!',
    },
    RUNNING: {
      INCREASE: '뜀걸음 시간이 감소했어요!',
      DECREASE: '뜀걸음 시간이 증가했어요',
    },
    SHOOTING: {
      INCREASE: '사격 횟수가 증가했어요!',
      DECREASE: '사격 횟수가 감소했어요',
    },
  },
  HistoryLabel: {
    PUSHUP: '팔굽혀펴기',
    SITUP: '윗몸일으키기',
    RUNNING: '뜀걸음',
    SHOOTING: '사격 점수',
    UNIT: {
      REP: '회',
      TIME: '분',
      SCORE: '점',
    },
  },
  NG_DECREASE: '사격 횟수가 감소했어요',
  GoTOTRAIN: '훈련하러 가기',
  Image: {
    Arrow: IMAGE_CONSTANTS.ARROW,
  },
  Feedbackboxcontainer: {
    Image: {
      SOLDIER_SMILE_POSE: IMAGE_CONSTANTS.SOLDIER_SMILE_POSE,
    },
    TEXT: {
      TITLE: 'SMART한 훈련 피드백',
    },
  },
};
