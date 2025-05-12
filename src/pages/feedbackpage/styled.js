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

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.font_green};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 22px 0;
  background: rgba(187, 191, 154, 0.5);
`;

export const FeedbackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Loader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Spinner = styled.img`
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
