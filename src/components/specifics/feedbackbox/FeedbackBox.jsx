import { useState } from 'react';
import * as S from './styled';
import { MAINDETAILCONSTANTS } from '@constants/mainDetailConstants';

export const FeedbackBox = ({ date, comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src={MAINDETAILCONSTANTS.Feedback.IMAGE.SOLDIER_SMILE_POSE} />
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
