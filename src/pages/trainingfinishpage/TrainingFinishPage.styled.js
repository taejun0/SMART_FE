import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(var(--vh) * 100);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_22};
  color: ${({ theme }) => theme.colors.green01};
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Body_SemiBold_14};
  color: ${({ theme }) => theme.colors.brown02};
`;

export const Image = styled.img`
  margin: 5rem;
`;

export const Box = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ theme }) => theme.colors.green01};
  background: rgba(240, 236, 222, 0.7);

  margin: 1rem 0;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const BoxImage = styled.img``;

export const Button = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.beige01};
  background-color: ${({ theme }) => theme.colors.green01};
  padding: 1rem 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const FeedbackList = styled.ul`
  width: 100%;
  max-width: 320px;
  background: rgba(240, 236, 222, 0.7);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeedbackItem = styled.li`
  ${({ theme }) => theme.fonts.Body_Medium_14};
  color: ${({ theme }) => theme.colors.brown02};
  list-style: none;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
`;
