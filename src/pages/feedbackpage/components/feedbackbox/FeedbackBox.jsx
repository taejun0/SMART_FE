import { useState } from 'react';
import * as S from './FeedbackBox.styled';
import { FEEDBACKPAGE_CONSTANTS } from '../../constants/feedbackPageConstants';

export const FeedbackBox = ({ date, comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Image
          src={FEEDBACKPAGE_CONSTANTS.Feedback.IMAGE.SOLDIER_SMILE_POSE}
        />
        <S.Col>
          <S.Date>{date}</S.Date>
          <S.Comment
            $expanded={isExpanded}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {comment}
          </S.Comment>
        </S.Col>
      </S.Container>
    </S.Wrapper>
  );
};

export default FeedbackBox;
