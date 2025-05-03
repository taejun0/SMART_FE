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
  readOnly,
  onClick,
  children,
}) => {
  const isPassword = type === 'password';

  return (
    <S.Wrapper onClick={onClick}>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Input
          type={isPassword && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
        />
        {isPassword && value && (
          <S.EyeIcon src={eyeIconSrc} onClick={togglePassword} />
        )}
        {children}
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginInput;
