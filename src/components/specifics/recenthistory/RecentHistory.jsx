import * as S from './styled';
import { ANALYZECONSTANTS } from '@constants/anaylzeConstants';

export const RecentHistory = ({ type, data }) => {
  return (
    <S.Count>
      <S.Title>{ANALYZECONSTANTS.Section.HISTORY_TITLE}</S.Title>
      {data.map((item, idx) => (
        <S.HistoryWrap key={idx}>
          <S.HistoryRow>
            <S.HistoryWrap>
              {type === 'fitness' ? (
                <>
                  <S.HistoryData>
                    {ANALYZECONSTANTS.HistoryLabel.PUSHUP}: {item.pushup}
                    {ANALYZECONSTANTS.HistoryLabel.UNIT.REP}
                  </S.HistoryData>
                  <S.HistoryData>
                    {ANALYZECONSTANTS.HistoryLabel.SITUP}: {item.situp}
                    {ANALYZECONSTANTS.HistoryLabel.UNIT.REP}
                  </S.HistoryData>
                  <S.HistoryData>
                    {ANALYZECONSTANTS.HistoryLabel.RUNNING}: {item.running}
                    {ANALYZECONSTANTS.HistoryLabel.UNIT.TIME}
                  </S.HistoryData>
                </>
              ) : (
                <S.HistoryData>
                  {ANALYZECONSTANTS.HistoryLabel.SHOOTING}: {item.value}
                  {ANALYZECONSTANTS.HistoryLabel.UNIT.SCORE}
                </S.HistoryData>
              )}
            </S.HistoryWrap>

            <S.HistoryDate>{item.date}</S.HistoryDate>
          </S.HistoryRow>
          <S.Line />
        </S.HistoryWrap>
      ))}
    </S.Count>
  );
};

export default RecentHistory;
