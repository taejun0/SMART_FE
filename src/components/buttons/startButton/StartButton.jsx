import * as S from './styled';

import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@constants/routeConstants';

const StartButton = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Button onClick={() => navigate(ROUTE_PATHS.MAIN)}>시작하기</S.Button>
    </S.Wrapper>
  );
};

export default StartButton;
