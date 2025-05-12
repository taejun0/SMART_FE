import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100 - 4rem);
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 3rem 0;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ROKAF_24};
  color: ${({ theme }) => theme.colors.black02};
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ROKAF_Medium_16};
  color: ${({ theme }) => theme.colors.black02};
`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
export const SelectLabel = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.green01 : theme.colors.green02};
`;

export const SelectBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.green01 : theme.colors.green04};
`;

export const Image = styled.img`
  width: 146px;
`;

export const Signupbox = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  transform: translateY(-60px);
  gap: 8px;

  cursor: pointer;
`;

export const Sign1 = styled.div`
  ${({ theme }) => theme.fonts.Caption_SemiBold_12};
  color: ${({ theme }) => theme.colors.green01};
`;

export const Sign2 = styled.div`
  ${({ theme }) => theme.fonts.Caption_ExtraBold_12};
  color: ${({ theme }) => theme.colors.green01};
`;
