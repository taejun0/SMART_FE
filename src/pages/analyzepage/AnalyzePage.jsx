import * as S from './AnalyzePage.styled';
import { useAnalyze } from './hooks/useAnalyze';
import { useNavigate } from 'react-router-dom';

import FeedbackBoxContainer from './components/feedbackcontainer/FeedbackContainer';
import DiffResultBox from './components/diffresultbox/DiffresultBox';
import RecentHistory from './components/recenthistory/RecentHistory';

import { ANALYZECONSTANTS } from './constants/anaylzeConstants';
import { ROUTE_PATHS } from '@constants/routeConstants';

export const AnalyzePage = () => {
  const navigate = useNavigate();
  const { type, data, latest, previous, diff, isTodayRecord, loading } =
    useAnalyze();

  if (loading) return <p>로딩 중...</p>;
  if (!data || data.length === 0) return <p>데이터가 없습니다.</p>;

  return (
    <S.Wrapper>
      <S.Header>
        <S.Icon
          src={ANALYZECONSTANTS.Image.Arrow}
          onClick={() => navigate(ROUTE_PATHS.MAIN)}
        />
        <S.HeaderText>{ANALYZECONSTANTS.Header.TITLE}</S.HeaderText>
      </S.Header>
      <S.Contatiner>
        {latest && (
          <>
            {latest && (
              <FeedbackBoxContainer
                comment={latest.comment}
                date={previous.date}
              />
            )}
          </>
        )}
        {diff && type === 'fitness' && (
          <S.Count>
            <DiffResultBox
              title={
                diff.pushup > 0
                  ? ANALYZECONSTANTS.Feedback.PUSHUP.INCREASE
                  : ANALYZECONSTANTS.Feedback.PUSHUP.DECREASE
              }
              content={`지난번의 나보다 ${Math.abs(diff.pushup)}${
                ANALYZECONSTANTS.HistoryLabel.UNIT.REP
              } ${diff.pushup > 0 ? '더 많이' : '더 적게'} 했어요.`}
              latest={latest.pushup}
              previous={previous.pushup}
              date={previous.date}
              isToday={isTodayRecord.pushup}
            />
            <DiffResultBox
              title={
                diff.situp > 0
                  ? ANALYZECONSTANTS.Feedback.SITUP.INCREASE
                  : ANALYZECONSTANTS.Feedback.SITUP.DECREASE
              }
              content={`지난번의 나보다 ${Math.abs(diff.situp)}${
                ANALYZECONSTANTS.HistoryLabel.UNIT.REP
              } ${diff.situp > 0 ? '더 많이' : '더 적게'} 했어요.`}
              latest={latest.situp}
              previous={previous.situp}
              date={previous.date}
              isToday={isTodayRecord.situp}
            />
            <DiffResultBox
              title={
                diff.running > 0
                  ? ANALYZECONSTANTS.Feedback.RUNNING.INCREASE
                  : ANALYZECONSTANTS.Feedback.RUNNING.DECREASE
              }
              content={`지난번의 나보다 ${Math.abs(diff.running).toFixed(2)}${
                ANALYZECONSTANTS.HistoryLabel.UNIT.TIME
              } ${diff.running > 0 ? '더 빨리' : '더 늦게'} 뛰었어요.`}
              latest={latest.running}
              previous={previous.running}
              date={previous.date}
              isToday={isTodayRecord.running}
            />
          </S.Count>
        )}

        {diff && type === 'shooting' && (
          <S.Count>
            <DiffResultBox
              title={
                diff.value > 0
                  ? ANALYZECONSTANTS.Feedback.SHOOTING.INCREASE
                  : ANALYZECONSTANTS.Feedback.SHOOTING.DECREASE
              }
              content={`지난번의 나보다 ${Math.abs(diff.value)}${
                ANALYZECONSTANTS.HistoryLabel.UNIT.SCORE
              } ${diff.value > 0 ? '더 많이' : '더 적게'} 맞췄어요.`}
              latest={latest.value}
              previous={previous.value}
              date={previous.date}
              isToday={isTodayRecord.shooting}
            />
          </S.Count>
        )}
        <RecentHistory type={type} data={data} />
        <S.Rap>
          <S.TrainBTN onClick={() => navigate(ROUTE_PATHS.TRAINING)}>
            {ANALYZECONSTANTS.GoTOTRAIN}
          </S.TrainBTN>
        </S.Rap>
      </S.Contatiner>
    </S.Wrapper>
  );
};
