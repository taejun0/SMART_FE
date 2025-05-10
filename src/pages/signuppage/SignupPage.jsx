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
              showPassword,
              togglePassword,
              eyeIconSrc,
              error,
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
                  showPassword={showPassword}
                  togglePassword={togglePassword}
                  eyeIconSrc={eyeIconSrc}
                  error={error}
                />

                {type === 'select' && isDropdownOpen && (
                  <S.Options>
                    {options.map((opt) => (
                      <S.Option
                        key={opt}
                        onClick={() => {
                          onChange(opt);
                          closeDropdown();
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
          {SIGNUP_CONSTANTS.Text.next}
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
