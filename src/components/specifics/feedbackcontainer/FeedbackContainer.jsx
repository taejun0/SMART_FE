import * as S from './styled';
import { IMAGE_CONSTANTS } from '@constants/imageConstants';

const FeedbackBoxContainer = ({ comment, date }) => {
  return (
    <S.FeedbackContainer>
      <S.FeedbackBox>
        <S.FeedbackBoxTitle>
          <S.FeedbackBoxTitleImg src={IMAGE_CONSTANTS.SOLDIER_SMILE_POSE} />
          {date}
        </S.FeedbackBoxTitle>
        <S.FeedbackBoxComment>{comment}</S.FeedbackBoxComment>
      </S.FeedbackBox>
    </S.FeedbackContainer>
  );
};

export default FeedbackBoxContainer;
