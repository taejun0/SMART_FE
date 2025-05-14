import * as S from './HistoryBox.styeld';

import { useNavigate } from 'react-router-dom';

export const HistoryBox = ({ text, image, detail, arrow, onClick }) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper onClick={onClick}>
      <S.Contatiner>
        <S.Title>{text}</S.Title>
        <S.detail>
          {detail}
          <S.smImage src={arrow} />
        </S.detail>
        <S.Image src={image} />
      </S.Contatiner>
    </S.Wrapper>
  );
};
export default HistoryBox;
