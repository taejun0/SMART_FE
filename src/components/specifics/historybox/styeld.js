import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`;

export const Contatiner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brown05};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 1.5rem;
  gap: 1rem;
  cursor: pointer;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Body_ExtraBold_14};
  color: ${({ theme }) => theme.colors.black};
`;

export const detail = styled.div`
  ${({ theme }) => theme.fonts.Caption_Medium_12};
  color: rgba(18, 18, 18, 0.5);
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 64px;
`;

export const smImage = styled.img`
  width: 16px;
`;
