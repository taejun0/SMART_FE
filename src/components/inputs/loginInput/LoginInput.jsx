import * as S from './styled';

export const LoginInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  showPassword,
  togglePassword,
  eyeIconSrc,
}) => {
  const isPassword = type === 'password';

  return (
    <S.Wrapper>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Input
          type={isPassword && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {isPassword && value && (
          <S.EyeIcon src={eyeIconSrc} onClick={togglePassword} />
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginInput;
