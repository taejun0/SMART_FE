import * as S from './styled';

import { useNavigate } from 'react-router-dom';
import { useFeedback } from '@hooks/useFeedback';
import { MAINDETAILCONSTANTS } from '@constants/mainDetailConstants';
import { ROUTE_PATHS } from '@constants/routeConstants';
import FeedbackBox from '@components/specifics/feedbackbox/FeedbackBox';

export const FeedbackPage = () => {
  const navigate = useNavigate();
  const { visibleList, loaderRef, hasMore } = useFeedback();

  return (
    <S.Wrapper>
      <S.Contatiner>
        <S.HeaderBox>
          <S.Title>{MAINDETAILCONSTANTS.Feedback.TEXT.Title}</S.Title>
          <S.Image
            src={MAINDETAILCONSTANTS.Feedback.IMAGE.X}
            onClick={() => navigate(ROUTE_PATHS.MAIN)}
          />
        </S.HeaderBox>
        <S.Line />

        <S.FeedbackList>
          {visibleList.map((item, idx) => (
            <FeedbackBox key={idx} date={item.date} comment={item.comment} />
          ))}
        </S.FeedbackList>

        {hasMore && (
          <S.Loader ref={loaderRef}>
            <S.Spinner src={MAINDETAILCONSTANTS.Feedback.IMAGE.Loader} />
          </S.Loader>
        )}
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default FeedbackPage;
