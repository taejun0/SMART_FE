import * as S from './TrainingPage.styled';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PoseTrainer from './components/posttrainer/PoseTrainer';
import DetailBox from './components/detailbox/DetailBox';
import TrainingTabs from './components/selecttap/SelectTap';
import { Footer } from '@components/footer/Footer';

import { TRAINING_CONSTANTS } from './constants/TrainingPageConstants';

export const TrainingPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('training');
  return (
    <S.Wrapper>
      <S.Contatiner>
        <S.HeaderBox>
          <S.Title>{TRAINING_CONSTANTS.TEXT.TITLE}</S.Title>
        </S.HeaderBox>

        <TrainingTabs selectedTab={selectedTab} onSelect={setSelectedTab} />

        <S.GoDetailBox>
          {selectedTab === 'training' ? (
            <>
              <DetailBox
                name="사격 훈련"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN1}
                onClick={() => navigate('/program/training/shooting')}
              />
              <DetailBox
                name="팔굽혀펴기"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN2}
                onClick={() => navigate('/program/training/pushup')}
              />
              <DetailBox
                name="윗몸 일으키기"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN3}
                onClick={() => navigate('/program/training/situp')}
              />
              <DetailBox
                name="3km 달리기"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN4}
                onClick={() => navigate('/program/training/run')}
              />
            </>
          ) : (
            <>
              <DetailBox
                name="사격 측정"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN2}
                onClick={() => navigate('/program/evaluate/pushup')}
              />
              <DetailBox
                name="팔굽혀펴기 측정"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN2}
                onClick={() => navigate('/program/evaluate/pushup')}
              />
              <DetailBox
                name="윗몸 일으키기 측정"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN3}
                onClick={() => navigate('/program/evaluate/situp')}
              />
              <DetailBox
                name="3km 달리기 측정"
                images={TRAINING_CONSTANTS.SELECTBOX.IMAGES.TRAIN4}
                onClick={() => navigate('/program/evaluate/run')}
              />
            </>
          )}
        </S.GoDetailBox>
      </S.Contatiner>
      <Footer />
    </S.Wrapper>
  );
};

export default TrainingPage;
