import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(var(--vh) * 100);
  width: 100%;
`;

export const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 4rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green01};
  gap: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoIMG = styled.img`
  width: 20px;
`;

export const VerLine = styled.div`
  height: 12px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Saying = styled.div`
  ${({ theme }) => theme.fonts.Title_Bold_20};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-line;
`;

export const Goal = styled.div`
  ${({ theme }) => theme.fonts.Body_SemiBold_14}
  color: ${({ theme }) => theme.colors.white};
`;

export const soldier = styled.img`
  position: absolute;
  right: 0;
  width: 94px;
  z-index: 1;
`;

export const DataInfo = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 2rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.beige01};
  border-radius: 20px 20px 0px 0px;
  transform: translateY(-2rem);
`;

export const SemiTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const PlusButton = styled.div`
  ${({ theme }) => theme.fonts.Caption_Medium_12};
  color: rgba(138, 138, 138, 0.6);
  cursor: pointer;
`;

export const RowBet = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
