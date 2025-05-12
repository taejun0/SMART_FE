import styled from 'styled-components';

export const Count = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 3rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
`;

export const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryData = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const HistoryDate = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.gray01};
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: rgba(187, 191, 154, 0.5);
  margin-top: 17px;
`;
