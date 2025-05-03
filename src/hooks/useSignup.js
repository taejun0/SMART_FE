import { useState } from 'react';

import AuthService from '@services/AuthService';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@constants/routeConstants';
import { SIGNUP_CONSTANTS } from '@constants/signupConstants';
import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const useSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(Array(9).fill(''));
  const [dropdownStates, setDropdownStates] = useState(Array(9).fill(false));
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
    setDropdownStates(Array(9).fill(false));
  };

  const fields = values.map((val, index) => {
    const isSelect = SIGNUP_CONSTANTS.OPTIONS[index] !== undefined;

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
        index === 7 || index === 8 ? 'password' : isSelect ? 'select' : 'text',
      isCurrent: index === step,
      options: SIGNUP_CONSTANTS.OPTIONS[index] || [],
      isDropdownOpen: dropdownStates[index],
      onChange: (v) => {
        if (index === step) setStepValue(v);
      },
      toggleDropdown: () => toggleDropdown(index),
      closeDropdown: () => closeDropdown(index),
    };
  });

  const currentTitle = fields[step].title;

  const eyeIconSrc =
    step === 7
      ? showPassword
        ? IMAGE_CONSTANTS.EYE
        : IMAGE_CONSTANTS.TEXTHOLDER
      : step === 8
      ? showConfirmPassword
        ? IMAGE_CONSTANTS.EYE
        : IMAGE_CONSTANTS.TEXTHOLDER
      : null;

  const submitSignup = async () => {
    const signupData = {
      name: values[0],
      branch: values[1],
      unit: values[2],
      company: values[3],
      platoon: values[4],
      rank: values[5],
      militaryId: values[6],
      password: values[7],
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
    eyeIconSrc,
    isTermModalOpen,
    setIsTermModalOpen,
    submitSignup,
    goToNextStep: () => {
      closeAllDropdowns();
      if (step < 8) setStep(step + 1);
      if (step == 8) setIsTermModalOpen(true);
    },
    goToPrevStep: () => {
      closeAllDropdowns();
      if (step > 0) setStep(step - 1);
    },
    closeAllDropdowns,
    isValid:
      step === 8
        ? values[7] === values[8] && values[7].trim() !== ''
        : values[step].trim() !== '',
  };
};
