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
  padding: 2rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.font_green};
`;

export const GoDetailBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;
