import * as S from './CommonLoading.styled';
import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const CommonLoading = () => {
  return (
    <S.Wrapper>
      <S.ClipWrap>
        <S.Image src={IMAGE_CONSTANTS.SPINNER}></S.Image>
      </S.ClipWrap>
    </S.Wrapper>
  );
};
