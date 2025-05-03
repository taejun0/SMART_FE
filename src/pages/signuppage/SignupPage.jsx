import * as S from './styled';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@hooks/useSignup';
import { ROUTE_PATHS } from '@constants/routeConstants';
import { SIGNUP_CONSTANTS } from '@constants/signupConstants';
import LoginInput from '@components/inputs/loginInput/LoginInput';
import LoginButton from '@components/buttons/loginButton/LoginButton';
import TermsModal from '@components/modals/TermsModal';

export const SignupPage = () => {
  const navigate = useNavigate();
  const {
    fields,
    currentTitle,
    step,
    goToNextStep,
    isValid,
    closeAllDropdowns,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    eyeIconSrc,
    isTermModalOpen,
    setIsTermModalOpen,
    submitSignup,
  } = useSignup();
  return (
    <S.Wrapper>
      <S.Container>
        <S.XImage
          src={SIGNUP_CONSTANTS.IMGAE.X}
          onClick={() => {
            closeAllDropdowns();
            navigate(ROUTE_PATHS.LOGIN);
          }}
        />
        <S.TitleBox>
          <S.Title>{currentTitle}</S.Title>
        </S.TitleBox>
        {fields.reverse().map(
          (
            {
              label,
              placeholder,
              value,
              readOnly,
              visible,
              type,
              onChange,
              options,
              isDropdownOpen,
              toggleDropdown,
              closeDropdown,
            },
            i
          ) =>
            visible && (
              <S.StepBlock key={i}>
                <LoginInput
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  readOnly={readOnly}
                  onClick={type === 'select' ? toggleDropdown : undefined}
                  showPassword={
                    step === 7
                      ? showPassword
                      : step === 8
                      ? showConfirmPassword
                      : false
                  }
                  togglePassword={
                    step === 7
                      ? () => setShowPassword((prev) => !prev)
                      : () => setShowConfirmPassword((prev) => !prev)
                  }
                  eyeIconSrc={eyeIconSrc}
                />

                {type === 'select' && isDropdownOpen && (
                  <S.Options>
                    {options.map((opt) => (
                      <S.Option
                        key={opt}
                        onClick={() => {
                          onChange(opt); // 값 설정
                          closeDropdown(); // 창 닫기
                        }}
                      >
                        {opt}
                      </S.Option>
                    ))}
                  </S.Options>
                )}
              </S.StepBlock>
            )
        )}

        <LoginButton disabled={!isValid} onClick={goToNextStep}>
          다음
        </LoginButton>
      </S.Container>
      {isTermModalOpen && (
        <TermsModal
          onAgree={submitSignup}
          onCancel={() => setIsTermModalOpen(false)}
        />
      )}
    </S.Wrapper>
  );
};

export default SignupPage;
