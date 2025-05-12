import * as S from './styled';

import { useTheme } from 'styled-components';

const DiffResultBox = ({ title, content, latest, previous, date, isToday }) => {
  const theme = useTheme();
  const getHeightPercent = (value, compareTo) => {
    if (!value && value !== 0) return 0;
    const max = Math.max(value, compareTo, 1);
    return (value / max) * 90;
  };
  if (!isToday) {
    return (
      <S.Wrap>
        <S.Title>{title}</S.Title>
        <S.Content>오늘의 기록이 아직 없어요.</S.Content>
      </S.Wrap>
    );
  }
  return (
    <S.Wrap>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
      <S.GraphContainer>
        <S.Graph>
          <S.Current
            style={{ height: getHeightPercent(latest, previous) + '%' }}
          />
          <S.Previous
            style={{ height: getHeightPercent(previous, latest) + '%' }}
          />
        </S.Graph>
        <S.ValueWrapper>
          <S.CurrentValue>{latest}회</S.CurrentValue>
          <S.PreviousValue>{previous}회</S.PreviousValue>
        </S.ValueWrapper>
      </S.GraphContainer>
      <S.LegendBox>
        <S.LegendDot color={theme.colors.green02} />
        <S.LegendText>오늘</S.LegendText>
        <S.LegendDot color={'#BBBF9A'} />
        <S.LegendText>{date}</S.LegendText>
      </S.LegendBox>
    </S.Wrap>
  );
};

export default DiffResultBox;
