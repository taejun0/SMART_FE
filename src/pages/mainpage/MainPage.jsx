import * as S from './styled';

import { Footer } from '@components/footer/Footer';
import { useMain } from '@hooks/useMain';
import SoldierMain from './SoldierMain';
import OfficerMain from './OfficerMain';
import { CommonLoading } from '@components/loadings/CommonLoading';

export const MainPage = () => {
  const { userInfo, loading } = useMain();

  if (loading || !userInfo)
    return (
      <S.Wrapper>
        <CommonLoading />
        <Footer />
      </S.Wrapper>
    );
  return (
    <S.Wrapper>
      {userInfo.role === '병사' ? (
        <SoldierMain userInfo={userInfo} />
      ) : (
        <OfficerMain userInfo={userInfo} />
      )}
      <Footer />
    </S.Wrapper>
  );
};

export default MainPage;
