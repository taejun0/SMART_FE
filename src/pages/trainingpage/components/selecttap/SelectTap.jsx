import * as S from './SelectTap.styled';

const TrainingTabs = ({ selectedTab, onSelect }) => {
  return (
    <S.Select>
      <S.SelectBox onClick={() => onSelect('training')}>
        <S.SelectLabel $active={selectedTab === 'training'}>
          훈련하기
        </S.SelectLabel>
        <S.SelectBar $active={selectedTab === 'training'} />
      </S.SelectBox>
      <S.SelectBox onClick={() => onSelect('evaluate')}>
        <S.SelectLabel $active={selectedTab === 'evaluate'}>
          측정하기
        </S.SelectLabel>
        <S.SelectBar $active={selectedTab === 'evaluate'} />
      </S.SelectBox>
    </S.Select>
  );
};

export default TrainingTabs;
