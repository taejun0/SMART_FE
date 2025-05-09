import * as S from './styledSol';

import { useNavigate } from 'react-router-dom';

import { useMain } from '@hooks/useMain';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';
import FeedbackCarousal from '@components/specifics/feedbackcarousal/FeedbackCarousal';
import { HistoryBox } from '@components/specifics/historybox/HistoryBox';

export const SoldierMain = ({ userInfo }) => {
  const { medalImage, feedbackList } = useMain();
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Contatiner>
        <S.InfoContainer>
          <S.Info>
            <S.InfoIMG src={medalImage} />
            {userInfo.rank}
            <S.VerLine />
            {userInfo.name}
          </S.Info>
          <S.Saying>{MAINSOLCONSTANTS.Text.main_Text}</S.Saying>
          <S.Goal>{MAINSOLCONSTANTS.Text.goal}</S.Goal>
          <S.soldier src={MAINSOLCONSTANTS.Images.soldier} />
        </S.InfoContainer>
        <S.DataInfo>
          <S.SemiTitleBox>
            <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTItle1}</S.SemiTitle>
            <S.PlusButton onClick={() => navigate('feedback')}>
              {MAINSOLCONSTANTS.SemiTitle.plus}
            </S.PlusButton>
          </S.SemiTitleBox>
          <FeedbackCarousal feedbackList={feedbackList} />
          <S.SemiTitleBox>
            <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTitle2}</S.SemiTitle>
          </S.SemiTitleBox>
          <S.RowBet>
            {Object.values(MAINSOLCONSTANTS.historyBox).map((box, idx) => (
              <HistoryBox
                key={idx}
                image={box.Image}
                text={box.text}
                detail={MAINSOLCONSTANTS.detail}
                arrow={MAINSOLCONSTANTS.Images.Arrow}
                onClick={() => navigate(`/analyze/${box.type}`)}
              />
            ))}
          </S.RowBet>

          <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTitle3}</S.SemiTitle>
        </S.DataInfo>
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default SoldierMain;
