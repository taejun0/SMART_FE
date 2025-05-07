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
            {SPLASH_CONSTANTS.Text.split('\n').map((line, index) => (
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
