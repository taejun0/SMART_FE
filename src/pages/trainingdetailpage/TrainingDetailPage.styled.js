import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(var(--vh) * 100);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  height: 100%;
`;

export const StartButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const StopButton = styled(StartButton)`
  background-color: #f44336;
`;
