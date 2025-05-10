import * as S from './styledSol';

import { useNavigate } from 'react-router-dom';

import { useMain } from '@hooks/useMain';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';
import FeedbackCarousal from '@components/specifics/feedbackcarousal/FeedbackCarousal';
import { HistoryBox } from '@components/specifics/historybox/HistoryBox';
import Graph from '@components/specifics/graph/Graph';

export const SoldierMain = ({ userInfo }) => {
  const {
    medalImage,
    feedbackList,
    pushupHistory,
    situpHistory,
    runningHistory,
    shootingHistory,
    grades,
  } = useMain();
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
          <Graph
            title={MAINSOLCONSTANTS.Text.pushup}
            unit="회"
            data={pushupHistory}
            yDomain={[0, 100]}
            grade={grades.pushup}
          />

          <Graph
            title={MAINSOLCONSTANTS.Text.situp}
            unit="회"
            data={situpHistory}
            yDomain={[0, 100]}
            grade={grades.situp}
          />

          <Graph
            title={MAINSOLCONSTANTS.Text.running}
            unit="분"
            data={runningHistory}
            yDomain={[10, 20]}
            grade={grades.running}
          />

          <Graph
            title={MAINSOLCONSTANTS.Text.shooting}
            unit="점"
            data={shootingHistory}
            yDomain={[0, 20]}
            grade={grades.shooting}
          />
        </S.DataInfo>
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default SoldierMain;
