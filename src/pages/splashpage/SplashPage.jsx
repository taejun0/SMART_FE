import * as S from './styled';

import { IMAGE_CONSTANTS } from '@constants/imageConstants';
import StartButton from '@components/buttons/startButton/StartButton';

export const SplashPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <S.Title>반가워요!</S.Title>
          <S.SubTitle>
            {'이제부터 SMART와 함께\n스마트한 군생활을 시작해봐요.'
              .split('\n')
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </S.SubTitle>
        </S.TitleBox>
        <S.Image src={IMAGE_CONSTANTS.SOLDIER_SPLASH} />
      </S.Container>
      <S.ButtonRow>
        <StartButton />
      </S.ButtonRow>
    </S.Wrapper>
  );
};

export default SplashPage;
