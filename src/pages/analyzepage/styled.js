import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

export const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const Header = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled.img`
  position: absolute;
  width: 30px;
  left: 15px;
  rotate: 180deg;
  cursor: pointer;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
`;

export const Count = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 3rem;
`;

export const Rap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrainBTN = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.beige01};
  background-color: ${({ theme }) => theme.colors.green01};
  border-radius: 12px;
  padding: 14px 30px;
  cursor: pointer;
`;
