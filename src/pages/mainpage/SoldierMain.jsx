import * as S from './styledSol';

import { useNavigate } from 'react-router-dom';

import { useMain } from '@hooks/useMain';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';

export const SoldierMain = ({ userInfo }) => {
  const { medalImage } = useMain();
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Contatiner>
        <S.InfoContainer>
          <S.Info>
            <S.InfoIMG src={medalImage} />
            {userInfo.rank}
            <S.VerLine />
            {userInfo.name}
          </S.Info>
          <S.Saying>{MAINSOLCONSTANTS.Text.main_Text}</S.Saying>
          <S.Goal>{MAINSOLCONSTANTS.Text.goal}</S.Goal>
          <S.soldier src={MAINSOLCONSTANTS.Images.soldier} />
        </S.InfoContainer>
        <S.DataInfo>
          <S.SemiTitleBox>
            <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTItle1}</S.SemiTitle>
            <S.PlusButton onClick={() => navigate('feedback')}>
              {MAINSOLCONSTANTS.SemiTitle.plus}
            </S.PlusButton>
          </S.SemiTitleBox>

          <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTitle2}</S.SemiTitle>
          <S.SemiTitle>{MAINSOLCONSTANTS.SemiTitle.SemiTitle3}</S.SemiTitle>
        </S.DataInfo>
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default SoldierMain;
