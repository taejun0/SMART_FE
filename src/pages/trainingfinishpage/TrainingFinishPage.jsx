import * as S from './TrainingFinishPage.styled';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@constants/routeConstants';
import useTrainingStore from '@stores/trainingStore';

export const TrainingFinishPage = () => {
  const navigate = useNavigate();
  const { count, feedbacks, reset } = useTrainingStore();
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>오늘도 훈련 완료!</S.Title>
        <S.SemiTitle>태준 님, 오늘 훈련도 수고하셨어요</S.SemiTitle>
      </S.TitleBox>

      <S.Image src="/images/clapping.svg" />

      <S.FeedbackList>
        <S.Box>
          <S.BoxImage src="/icons/chart2.svg" />총 {count}회 수행하셨어요
        </S.Box>
        {feedbacks.map((fb, idx) => (
          <S.FeedbackItem key={idx}>
            "{fb.text}" - {fb.count}회
          </S.FeedbackItem>
        ))}
      </S.FeedbackList>
      <S.Button
        onClick={() => {
          reset();
          navigate(ROUTE_PATHS.MAIN);
        }}
      >
        기록 자세히 보러 가기
      </S.Button>
    </S.Wrapper>
  );
};
export default TrainingFinishPage;
