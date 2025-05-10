import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 2rem);
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
`;

export const XImage = styled.img`
  position: absolute;
  right: 0;
  width: 30px;
  cursor: pointer;
`;

export const StepBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 3rem 0;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_Bold_22};
  color: ${({ theme }) => theme.colors.black02};

  white-space: pre-line;
`;

export const Options = styled.ul`
  position: absolute;
  top: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.brown04};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.beige01};
  z-index: 1;
`;

export const Option = styled.li`
  padding: 16px 24px;
  width: 100%;
  cursor: pointer;
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  border: 1px solid ${({ theme }) => theme.colors.beige01};
  color: ${({ theme }) => theme.colors.green01};

  &:hover {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.brown04};
    border-radius: 15px;
    background: rgba(187, 191, 154, 0.5);
  }
`;
