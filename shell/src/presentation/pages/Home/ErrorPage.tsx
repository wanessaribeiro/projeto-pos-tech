import React from 'react';
import ErrorScreen from 'login/error';
import { useAuthProvider } from '../../../infrastructure/contexts/AuthContext';

export default function ErrorPage() {
  const { loginAction, token } = useAuthProvider();

  return <ErrorScreen onLogin={loginAction} token={token} />;
}
