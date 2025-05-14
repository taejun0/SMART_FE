import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brown05};
  border-radius: 12px;
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green02};
  margin-bottom: 12px;
`;

export const Textbox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.black};
`;
export const Rank = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  width: 24px;
  height: 24px;
  mask: url(${(props) => props.$mask}) no-repeat center;
  mask-size: contain;
  background-color: ${({ theme }) => theme.colors.green01};
`;

export const CustomXAxisWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(187, 191, 154, 0.7);
  border-radius: 5px;
  padding: 6px 40px 6px 0;
  margin-top: 16px;
`;

export const XTickItem = styled.div`
  ${({ theme }) => theme.fonts.Caption_Bold_12};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledTickText = styled.text`
  ${({ theme }) => theme.fonts.Caption_Medium_12};
  fill: ${({ theme }) => theme.colors.green04};
  text-anchor: start;
`;

export const LegendBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
  align-items: center;
`;

export const LegendDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const LegendText = styled.div`
  ${({ theme }) => theme.fonts.Caption_SemiBold_12};
  color: ${({ theme }) => theme.colors.gray08};
`;

export const getGraphStyle = (theme) => ({
  height: 300,

  axis: {
    tick: { fontSize: 12, fill: theme.colors.gray08 },
  },

  grid: {
    strokeDasharray: '3 3',
    vertical: false,
  },

  tooltip: {
    labelFormatter: (label) => `월: ${label}`,
  },

  colors: {
    line: theme.colors.green02,
  },

  gradients: {
    id: 'areaColor',
    from: '#BBBF9A',
    to: '#F0ECDE',
    opacityFrom: 1,
    opacityTo: 0.144231,
  },

  dot: {
    main: { r: 1.5, fill: theme.colors.green02 },
  },
});
