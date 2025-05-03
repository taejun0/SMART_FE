import * as S from './styled';
import { useFooter } from '@hooks/useFooter';

export const Footer = () => {
  const footerItems = useFooter();
  return (
    <S.Wrapper>
      <S.container>
        {footerItems.map((item) => (
          <S.FooterItem key={item.label} onClick={item.onClick}>
            <S.FooterIcon src={item.icon} alt={item.label} />
            <S.FooterLabel $color={item.labelColor}>{item.label}</S.FooterLabel>
          </S.FooterItem>
        ))}
      </S.container>
    </S.Wrapper>
  );
};
