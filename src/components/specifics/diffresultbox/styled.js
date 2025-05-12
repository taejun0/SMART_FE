import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.Body_SemiBold_14};
  color: ${({ theme }) => theme.colors.brown02};
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

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const Graph = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Current = styled.div`
  position: absolute;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.green01};
  border-radius: 80px 50px 120px 0px;
  bottom: 0;
  z-index: 2;
`;

export const Previous = styled.div`
  position: absolute;
  left: 10px;
  width: 180px;
  background-color: ${({ theme }) => theme.colors.green04};
  border-radius: 175px 100px 150px 0px;
  bottom: 0;
  z-index: 1;
`;
export const ValueWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 100px;
`;

export const CurrentValue = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green01};
`;

export const PreviousValue = styled.div`
  color: ${({ theme }) => theme.colors.green04};
  font-weight: bold;
  margin-top: 4px;
`;
