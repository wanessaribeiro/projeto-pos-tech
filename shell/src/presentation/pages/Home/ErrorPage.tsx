import React from 'react';
import ErrorScreen from 'login/error';
import PostCreateAccountService from '../../../infrastructure/services/Account/PostCreateAccountService';
import { useAccountProvider } from '../../../infrastructure/contexts/AccountContext';

export default function ErrorPage() {
  const { loginAction, token } = useAccountProvider();

  return (
    <ErrorScreen
      onLogin={loginAction}
      token={token}
      onCreateAccount={PostCreateAccountService}
    />
  );
}
