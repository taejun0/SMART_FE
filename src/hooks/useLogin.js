import { useState } from 'react';
import { IMAGE_CONSTANTS } from '@constants/imageConstants';

export const useLogin = () => {
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
  };
};
