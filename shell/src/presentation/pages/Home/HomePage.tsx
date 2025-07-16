import React from 'react';
import Home from 'login/home';
import PostCreateAccountService from '../../../infrastructure/services/Account/PostCreateAccountService';
import { useAccountProvider } from '../../../infrastructure/contexts/AccountContext';

export default function HomePage() {
  const { loginAction, token } = useAccountProvider();

  return (
    <Home
      onLogin={loginAction}
      token={token}
      onCreateAccount={PostCreateAccountService}
    />
  );
}
