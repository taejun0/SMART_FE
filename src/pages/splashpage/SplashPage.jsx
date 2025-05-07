import * as S from './styled';

import { SPLASH_CONSTANTS } from '@constants/splashConstants';
import StartButton from '@components/buttons/startButton/StartButton';

export const SplashPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <S.Title>{SPLASH_CONSTANTS.Title}</S.Title>
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
        <S.Image src={SPLASH_CONSTANTS.IMGAE} />
        <StartButton />
      </S.Container>
    </S.Wrapper>
  );
};

export default SplashPage;
