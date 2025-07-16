import React from 'react';
import ErrorScreen from 'login/error';
import { useAuthProvider } from '../../../infrastructure/contexts/AuthContext';
import CreateAccountService from '../../../infrastructure/services/Account/CreateAccountService';

export default function ErrorPage() {
  const { loginAction, token } = useAuthProvider();

  return (
    <ErrorScreen
      onLogin={loginAction}
      token={token}
      onCreateAccount={CreateAccountService}
    />
  );
}
