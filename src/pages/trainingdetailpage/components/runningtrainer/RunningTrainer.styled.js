import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background: rgba(240, 236, 222, 0.7);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: ${({ $test }) => ($test ? 0 : '5rem')};

  video,
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const FeedbackText = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: blue;
  text-align: center;
`;

export const StatusText = styled.div`
  font-size: 1rem;
  color: green;
  text-align: center;
  margin-top: 0.5rem;

  margin-bottom: ${({ $test }) => ($test ? '6rem' : 0)};
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.Title_ExtraBold_20};
  color: ${({ theme }) => theme.colors.green01};
`;

export const FeedbackBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  background: rgba(240, 236, 222, 0.7);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
`;

export const Image = styled.img`
  position: absolute;
  width: 50px;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_ExtraBold_16};
  color: ${({ theme }) => theme.colors.green01};
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Body_Medium_14};
  color: ${({ theme }) => theme.colors.brown02};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(187, 191, 154, 0.5);
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Images = styled.img`
  width: calc(90% / 4);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 16px;
`;

export const StartButton = styled.button`
  position: relative;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.green01};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 1rem auto 0;
  display: block;
`;

export const HeaderBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackImage = styled.img`
  width: 30px;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_Bold_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderSemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.green01};

  cursor: pointer;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.beige01};
  border-radius: 12px;
  text-align: center;
`;

export const ModalText = styled.div`
  ${({ theme }) => theme.fonts.Subtitle_SemiBold_16};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 0.5px solid rgba(142, 142, 147, 0.5);

  padding: 1rem 2rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalButton = styled.button`
  ${({ theme }) => theme.fonts.Subtitle_Medium_16}
  color: ${({ theme }) => theme.colors.green01};
  padding: 1rem;
  cursor: pointer;
`;
