import React from 'react';
import Home from 'login/home';
import { useAuthProvider } from '../../../infrastructure/contexts/AuthContext';
import CreateAccountService from '../../../infrastructure/services/Account/CreateAccountService';

export default function HomePage() {
  const { loginAction, token } = useAuthProvider();

  return (
    <Home
      onLogin={loginAction}
      token={token}
      onCreateAccount={CreateAccountService}
    />
  );
}
