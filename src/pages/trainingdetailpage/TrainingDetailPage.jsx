import * as S from './TrainingDetailPage.styled';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import PoseTrainer from './components/posttrainer/PoseTrainer';

export const TrainingDetailPage = () => {
  const { mode, type } = useParams();

  return (
    <S.Wrapper>
      <S.Contatiner>
        <h1>
          {mode} - {type} 상세 페이지
        </h1>

        {type === 'pushup' ? (
          <>
            <PoseTrainer />
          </>
        ) : (
          <p>🚧 아직 {type} 훈련은 준비 중입니다.</p>
        )}
      </S.Contatiner>
    </S.Wrapper>
  );
};

export default TrainingDetailPage;
