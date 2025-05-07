import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '@services/AuthService';

import { ROUTE_PATHS } from '@constants/routeConstants';
import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const useLogin = () => {
  const navigate = useNavigate();
  const [militaryId, setMilitaryId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('병사');

  const isValid = militaryId.trim() !== '' && password.trim() !== '';

  const onChangeMilitaryId = (value) => {
    setMilitaryId(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const selectRole = (role) => setSelectedRole(role);

  const passwordEyeIconSrc = showPassword
    ? IMAGE_CONSTANTS.EYE
    : IMAGE_CONSTANTS.TEXTHOLDER;

  const onLogin = async () => {
    try {
      const loginApi =
        selectedRole === '간부'
          ? AuthService.loginOfficer
          : AuthService.loginSoldier;

      const response = await loginApi({ militaryId, password });

      navigate(ROUTE_PATHS.MAIN);
    } catch (err) {
      alert('로그인에 실패했습니다.');
    }
  };

  return {
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
  };
};
