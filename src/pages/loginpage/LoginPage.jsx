import * as S from './styled';

import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@constants/routeConstants';
import { LoginConstants } from '@constants/loginConstants';
import { useLogin } from '@hooks/useLogin';
import LoginInput from '@components/inputs/loginInput/LoginInput';
import LoginButton from '@components/buttons/loginButton/LoginButton';

export const LoginPage = () => {
  const {
    militaryId,
    password,
    showPassword,
    isValid,
    onChangeMilitaryId,
    onChangePassword,
    togglePassword,
    passwordEyeIconSrc,
    selectedRole,
    selectRole,
    onLogin,
  } = useLogin();
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <S.Title>{LoginConstants.TEXT.TITLE}</S.Title>
          <S.SemiTitle>{LoginConstants.TEXT.SEMITITLE}</S.SemiTitle>
        </S.TitleBox>
        <S.Select>
          <S.SelectBox onClick={() => selectRole(LoginConstants.ROLE.SOLDIER)}>
            <S.SelectLabel
              $active={selectedRole === LoginConstants.ROLE.SOLDIER}
            >
              {LoginConstants.ROLE.SOLDIER}
            </S.SelectLabel>
            <S.SelectBar
              $active={selectedRole === LoginConstants.ROLE.SOLDIER}
            />
          </S.SelectBox>
          <S.SelectBox onClick={() => selectRole(LoginConstants.ROLE.OFFICER)}>
            <S.SelectLabel
              $active={selectedRole === LoginConstants.ROLE.OFFICER}
            >
              {LoginConstants.ROLE.OFFICER}
            </S.SelectLabel>
            <S.SelectBar
              $active={selectedRole === LoginConstants.ROLE.OFFICER}
            />
          </S.SelectBox>
        </S.Select>
        <S.Image src={LoginConstants.IMAGE.SOLDIER_MAIN} />
        <LoginInput
          type="text"
          label={LoginConstants.LABEL.MILITARY_ID}
          placeholder={LoginConstants.PLACEHOLDER.MILITARY_ID}
          value={militaryId}
          onChange={onChangeMilitaryId}
        />
        <LoginInput
          type="password"
          label={LoginConstants.LABEL.PASSWORD}
          placeholder={LoginConstants.PLACEHOLDER.PASSWORD}
          value={password}
          onChange={onChangePassword}
          showPassword={showPassword}
          togglePassword={togglePassword}
          eyeIconSrc={passwordEyeIconSrc}
        />
        <S.Signupbox onClick={() => navigate(ROUTE_PATHS.SIGNUP)}>
          <S.Sign1>아직 회원이 아니신가요?</S.Sign1>
          <S.Sign2>회원가입하기</S.Sign2>
        </S.Signupbox>

        <S.ButtonRow>
          <LoginButton disabled={!isValid} onClick={onLogin}>
            {LoginConstants.BUTTON.LOGIN}
          </LoginButton>
        </S.ButtonRow>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
