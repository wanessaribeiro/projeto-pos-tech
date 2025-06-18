import React from 'react';
import Home from 'login/home';
import { useAuthProvider } from '../../../infrastructure/contexts/AuthContext';

export default function HomePage() {
  const { loginAction, token } = useAuthProvider();

  return <Home onLogin={loginAction} token={token} />;
}
