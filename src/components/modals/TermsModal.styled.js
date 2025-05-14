import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.beige01};
  border-radius: 35px 35px 0 0;
  text-align: center;
  width: 100%;
  min-height: 250px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.brown01};
  display: flex;
  width: calc(100% - 60px);
  margin: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Desc = styled.div`
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AgreeButton = styled.button`
  position: absolute;
  bottom: 20px;
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  display: flex;
  height: 52px;
  width: calc(100% - 40px);
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green01};
  color: ${({ theme }) => theme.colors.beige01};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 16px;
  cursor: pointer;
`;

export const Fullscreen = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.beige01};
  z-index: 9999;
  display: flex;
  height: 100%;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
`;

export const FullContent = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

export const FullTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const FullText = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const Chapter = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.black02};
  margin: 1.25rem 0;
`;

export const Article = styled.div`
  ${({ theme }) => theme.fonts.Body_Bold_14};
  color: ${({ theme }) => theme.colors.black02};
  margin: 1rem 0;
`;

export const Paragraph = styled.div`
  ${({ theme }) => theme.fonts.Caption_Medium_10};
  color: ${({ theme }) => theme.colors.black02};
`;

export const Icon2 = styled.img`
  position: absolute;
  right: 0;
  width: 30px;
  cursor: pointer;
`;
