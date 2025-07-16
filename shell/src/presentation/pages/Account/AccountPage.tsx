import React from 'react';
import NavBar from 'navbar/navbar';
import Header from 'navbar/header';
import AccountCard from 'account/account-card';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAccountProvider } from '../../../infrastructure/contexts/AccountContext';
import { useInvoiceProvider } from '../../../infrastructure/contexts/InvoiceContext';

export default function AccountPage() {
  const { account, token, logOut } = useAccountProvider();
  useInvoiceProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  return (
    <div>
      <Header
        account={account}
        onClickAccount={() => navigate('/account')}
        onClickLogout={logOut}
      />
      <div className="main-container-2-columns">
        <NavBar />
        <AccountCard account={account} />
      </div>
    </div>
  );
}
