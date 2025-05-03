import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green01};
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 40px 0;
  margin: 0px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 3rem 0;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_22};
  color: ${({ theme }) => theme.colors.beige01};

  white-space: pre-line;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.beige01};

  white-space: pre-line;
`;

export const Image = styled.img`
  width: 90%;
`;
