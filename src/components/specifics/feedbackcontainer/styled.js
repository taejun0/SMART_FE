import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedbackBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(240, 236, 222, 0.7);
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
  gap: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
`;

export const FeedbackBoxTitle = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const FeedbackBoxTitleImg = styled.img`
  width: 45px;
  border-radius: 50%;
`;

export const FeedbackBoxComment = styled.div`
  ${({ theme }) => theme.fonts.Body_SemiBold_14};
  color: rgba(18, 18, 18, 0.5);
`;
