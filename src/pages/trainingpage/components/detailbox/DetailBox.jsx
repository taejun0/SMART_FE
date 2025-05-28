import * as S from './DetailBox.styled';

const DetailBox = ({ name, images, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.TitleBox>
        <S.Title>
          <S.TitleBold>{name}</S.TitleBold>을
        </S.Title>
        <S.Title>시작해 보세요!</S.Title>
      </S.TitleBox>
      <S.Button>바로 시작하기</S.Button>
      <S.IMAGE src={images} />
    </S.Wrapper>
  );
};

export default DetailBox;
