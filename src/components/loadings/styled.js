import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% { transform: rotate(0deg); }
  0% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 78px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 132px;
`;

export const ClipWrap = styled.div`
  width: 134px;
  height: 112px;
  animation: ${rotate} 1s linear infinite;
  transform-origin: center;
`;
