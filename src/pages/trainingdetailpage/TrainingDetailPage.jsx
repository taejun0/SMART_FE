import * as S from './TrainingDetailPage.styled';

import { useParams } from 'react-router-dom';

export const TrainingDetailPage = () => {
  const { mode, type } = useParams();
  return (
    <S.Wrapper>
      <S.Contatiner>
        <h1>
          {mode} - {type} 상세 페이지
        </h1>
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default TrainingDetailPage;
