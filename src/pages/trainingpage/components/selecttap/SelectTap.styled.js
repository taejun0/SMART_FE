import styled from 'styled-components';

export const Select = styled.div`
  display: flex;
  margin: 2rem 0 2.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green04};
`;

export const SelectBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const SelectLabel = styled.div`
  padding: 10px 0;
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.green01 : theme.colors.green02};
`;

export const SelectBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.green01 : 'transparent'};
`;
