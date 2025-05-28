import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 10rem;
  justify-content: space-between;
  border-radius: 8px;
  background-color: rgba(240, 236, 222, 0.7);

  display: flex;
  flex-direction: column;
  padding: 1.25rem;

  cursor: pointer;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.green01};
  display: flex;
`;

export const TitleBold = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ theme }) => theme.colors.green01};
`;

export const Button = styled.div`
  ${({ theme }) => theme.fonts.Caption_Bold_10};
  color: ${({ theme }) => theme.colors.white};
  width: 100px;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green01};
`;

export const IMAGE = styled.img`
  width: 90px;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
