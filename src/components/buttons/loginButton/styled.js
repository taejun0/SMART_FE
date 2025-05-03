import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Button = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.beige01};
  background-color: ${({ theme }) => theme.colors.green01};
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.colors.brown04};
    cursor: not-allowed;
  `}
`;
