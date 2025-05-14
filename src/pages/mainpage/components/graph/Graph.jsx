import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useTheme } from 'styled-components';
import dayjs from 'dayjs';
import * as S from './Graph.styled';
import { MAINSOLCONSTANTS } from '../../constants/mainSolConstants';

const formatMonth = (year, month) => `${month}월`;

export const Graph = ({ title, unit, data, yDomain, grade }) => {
  const theme = useTheme();

  const gradeImages = {
    특급: MAINSOLCONSTANTS.Images.memalstar,
    '1급': MAINSOLCONSTANTS.Images.medal1,
    '2급': MAINSOLCONSTANTS.Images.medal2,
    '3급': MAINSOLCONSTANTS.Images.medal3,
    불합격: MAINSOLCONSTANTS.Images.medalboss,
  };

  const now = dayjs();
  const chartData = data
    .map((item) => ({
      ...item,
      monthLabel: formatMonth(item.year, item.month),
      dateKey: `${item.year}-${item.month}`.padStart(7, '0'),
    }))
    .filter((item) => {
      const itemDate = dayjs(
        `${item.year}-${String(item.month).padStart(2, '0')}`
      );
      return itemDate.isAfter(
        now.subtract(3, 'month').startOf('month').subtract(1, 'day')
      );
    });

  const { height, margin, colors, gradients, dot, axis, grid, tooltip } =
    S.getGraphStyle(theme);

  const YAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <S.StyledTickText x={x} y={y} dy={4}>
        {payload.value}
      </S.StyledTickText>
    );
  };

  const formatRunningTime = (value) => {
    const min = Math.floor(value);
    const sec = Math.round((value - min) * 60);
    return `${min}분 ${sec < 10 ? '0' + sec : sec}초`;
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.Container>
        <S.Textbox>
          <S.SemiTitle>현재 내 등급</S.SemiTitle>
          <S.Rank>
            <S.Image $mask={gradeImages[grade]} />
            {grade}
          </S.Rank>
        </S.Textbox>
        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart data={chartData} margin={margin}>
            <defs>
              <linearGradient id={gradients.id} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={gradients.from}
                  stopOpacity={gradients.opacityFrom}
                />
                <stop
                  offset="100%"
                  stopColor={gradients.to}
                  stopOpacity={gradients.opacityTo}
                />
              </linearGradient>
            </defs>

            <CartesianGrid {...grid} />

            <XAxis hide dataKey="monthLabel" />
            <YAxis
              orientation="right"
              domain={yDomain || [0, 'auto']}
              tickCount={6}
              tickFormatter={(v) =>
                unit === '분' ? formatRunningTime(v) : `${v}${unit}`
              }
              tick={<YAxisTick />}
              axisLine={false}
              tickLine={false}
              reversed={unit === '분'}
              tickMargin={5}
              width={40}
            />

            <Tooltip
              formatter={(value, name) => {
                const formatted =
                  unit === '분' ? formatRunningTime(value) : `${value}${unit}`;
                return [formatted, name === 'mockValue' ? '모의 평가' : '평가'];
              }}
            />

            <Area
              type="linear"
              dataKey="mockValue"
              stroke="false"
              fill={`url(#${gradients.id})`}
              dot={false}
              activeDot={dot.mock}
              connectNulls
            />

            <Line
              type="linear"
              dataKey="value"
              stroke={colors.line}
              strokeWidth={1}
              dot={dot.main}
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
        <S.CustomXAxisWrapper>
          {chartData.map((item, idx) => (
            <S.XTickItem key={idx}>{item.monthLabel}</S.XTickItem>
          ))}
        </S.CustomXAxisWrapper>
        <S.LegendBox>
          <S.LegendDot color={theme.colors.green02} />
          <S.LegendText>평가</S.LegendText>
          <S.LegendDot color={'#BBBF9A'} />
          <S.LegendText>모의 평가</S.LegendText>
        </S.LegendBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default Graph;
