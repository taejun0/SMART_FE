import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  position: fixed;
  bottom: 20px;
  margin: 0 auto;
  height: 52px;
  max-width: 500px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.beige01};
  background-color: ${({ theme }) => theme.colors.green01};
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brown04};
    cursor: not-allowed;
    pointer-events: none;
  }
`;
