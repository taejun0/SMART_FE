import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Button = styled.button`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.green01};
  background: ${({ theme }) => theme.colors.beige01};
  height: 52px;
  width: calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;

  cursor: pointer;
`;
