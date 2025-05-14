import * as S from './FeedbackContainer.styled';
import { ANALYZECONSTANTS } from '@pages/analyzepage/constants/anaylzeConstants';

const FeedbackBoxContainer = ({ comment, date }) => {
  return (
    <S.FeedbackContainer>
      <S.Title>{ANALYZECONSTANTS.Feedbackboxcontainer.TEXT.TITLE}</S.Title>

      <S.FeedbackBox>
        <S.FeedbackBoxTitle>
          <S.FeedbackBoxTitleImg
            src={ANALYZECONSTANTS.Feedbackboxcontainer.Image.SOLDIER_SMILE_POSE}
          />
          {date}
        </S.FeedbackBoxTitle>
        <S.FeedbackBoxComment>{comment}</S.FeedbackBoxComment>
      </S.FeedbackBox>
    </S.FeedbackContainer>
  );
};

export default FeedbackBoxContainer;
