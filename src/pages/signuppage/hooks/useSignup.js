import { useState } from 'react';

import AuthService from '@services/AuthService';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@constants/routeConstants';
import { SIGNUP_CONSTANTS } from '../constants/signupConstants';

import { isValidPassword } from '@utils/loginValidation';

export const useSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(Array(11).fill(''));
  const [dropdownStates, setDropdownStates] = useState(Array(11).fill(false));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermModalOpen, setIsTermModalOpen] = useState(false);

  const setStepValue = (val) => {
    setValues((prev) => {
      const newVals = [...prev];
      newVals[step] = val;
      return newVals;
    });
  };

  const toggleDropdown = (index) => {
    if (index !== step) return;

    setDropdownStates((prev) =>
      prev.map((open, i) => (i === index ? !open : false))
    );
  };

  const closeDropdown = (index) => {
    setDropdownStates((prev) =>
      prev.map((open, i) => (i === index ? false : open))
    );
  };

  const closeAllDropdowns = () => {
    setDropdownStates(Array(11).fill(false));
  };

  const fields = values.map((val, index) => {
    const isSelect = SIGNUP_CONSTANTS.OPTIONS[index] !== undefined;
    const isPassword = index === 9;
    const isConfirmPassword = index === 10;

    return {
      title:
        typeof SIGNUP_CONSTANTS.TITLE_TEXT[index] === 'function'
          ? SIGNUP_CONSTANTS.TITLE_TEXT[index](values[0])
          : SIGNUP_CONSTANTS.TITLE_TEXT[index],
      label: SIGNUP_CONSTANTS.LABEL[index],
      placeholder: SIGNUP_CONSTANTS.PLACEHOLDER[index],
      value: val,
      readOnly: index < step || isSelect,
      visible: index <= step,
      type:
        index === 9 || index === 10
          ? 'password'
          : index === 1 || index === 2
          ? 'date'
          : SIGNUP_CONSTANTS.OPTIONS[index]
          ? 'select'
          : 'text',
      isCurrent: index === step,
      options: SIGNUP_CONSTANTS.OPTIONS[index] || [],
      isDropdownOpen: dropdownStates[index],
      onChange: (v) => {
        if (index === step) setStepValue(v);
      },
      toggleDropdown: () => toggleDropdown(index),
      closeDropdown: () => closeDropdown(index),
      showPassword: isPassword
        ? showPassword
        : isConfirmPassword
        ? showConfirmPassword
        : undefined,
      togglePassword: isPassword
        ? () => setShowPassword((prev) => !prev)
        : isConfirmPassword
        ? () => setShowConfirmPassword((prev) => !prev)
        : undefined,
      eyeIconSrc: isPassword
        ? showPassword
          ? SIGNUP_CONSTANTS.IMGAE.eye
          : SIGNUP_CONSTANTS.IMGAE.noneye
        : isConfirmPassword
        ? showConfirmPassword
          ? SIGNUP_CONSTANTS.IMGAE.eye
          : SIGNUP_CONSTANTS.IMGAE.noneye
        : null,
      error: isPassword && step === 9 ? !isValidPassword(val) : false,
    };
  });

  const currentTitle = fields[step].title;

  const submitSignup = async () => {
    const signupData = {
      name: values[0],
      birth: values[1],
      enlistDate: values[2],
      branch: values[3],
      unit: values[4],
      company: values[5],
      platoon: values[6],
      rank: values[7],
      militaryId: values[8],
      password: values[9],
    };

    try {
      await AuthService.signup(signupData);
      navigate(ROUTE_PATHS.SPLASH);
    } catch (err) {
      alert('회원가입에 실패했습니다.');
    }
  };

  return {
    step,
    fields,
    currentTitle,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isTermModalOpen,
    setIsTermModalOpen,
    submitSignup,
    goToNextStep: () => {
      closeAllDropdowns();
      if (step < 10) setStep(step + 1);
      if (step === 10) setIsTermModalOpen(true);
    },
    goToPrevStep: () => {
      closeAllDropdowns();
      if (step > 0) setStep(step - 1);
    },
    closeAllDropdowns,
    isValid:
      step === 9
        ? isValidPassword(values[9])
        : step === 10
        ? values[9] === values[10] && isValidPassword(values[9])
        : values[step].trim() !== '',
  };
};
