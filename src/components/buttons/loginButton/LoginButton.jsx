import * as S from './LoginButton.styled';

const LoginButton = ({ disabled, onClick, children }) => {
  return (
    <S.Wrapper>
      <S.Button disabled={disabled} onClick={onClick}>
        {children}
      </S.Button>
    </S.Wrapper>
  );
};

export default LoginButton;
