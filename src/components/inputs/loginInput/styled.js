import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.div`
  ${({ theme }) => theme.fonts.Body_Medium_14};
  color: ${({ theme }) => theme.colors.green01};
`;

export const Input = styled.input`
  ${({ theme }) => theme.fonts.Body_Medium_14};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 52px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.white02};
  padding: 0 1rem;
  margin-bottom: 2rem;

  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 20px;
  cursor: pointer;
`;
