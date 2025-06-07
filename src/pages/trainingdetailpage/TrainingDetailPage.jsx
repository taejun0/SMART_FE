import * as S from './TrainingDetailPage.styled';
import { useParams } from 'react-router-dom';
import PoseTrainer from './components/posttrainer/PoseTrainer';
import SitupTrainer from './components/situptrainer/SitupTrainer';

export const TrainingDetailPage = () => {
  const { mode, type } = useParams();

  return (
    <S.Wrapper>
      <S.Contatiner>
        {type === 'pushup' && <PoseTrainer />}
        {type === 'situp' && <SitupTrainer />}
        {type !== 'pushup' && type !== 'situp' && (
          <p>🚧 아직 {type} 훈련은 준비 중입니다.</p>
        )}
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default TrainingDetailPage;
