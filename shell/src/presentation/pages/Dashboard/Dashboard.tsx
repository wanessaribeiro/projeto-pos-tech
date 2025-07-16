import React from 'react';
import NavBar from 'navbar/navbar';
import Header from 'navbar/header';
import Invoice from 'transactions/invoice';
import BalanceCard from 'account/balance-card';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAccountProvider } from '../../../infrastructure/contexts/AccountContext';
import { useInvoiceProvider } from '../../../infrastructure/contexts/InvoiceContext';

export default function Dashboard() {
  const { account, balance, setTotalBalance, token, logOut } =
    useAccountProvider();
  const { invoices, setSelectedInvoice, useDeleteInvoice } =
    useInvoiceProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  //TODO: logout funcional

  return (
    <div>
      <Header
        account={account}
        onClickAccount={() => navigate('/account')}
        onClickLogout={logOut}
      />
      <div className="main-container">
        <NavBar />
        <div className="items">
          <BalanceCard account={account} balance={balance} />
          <Outlet />
        </div>
        <Invoice
          invoices={invoices}
          setSelectedTransaction={setSelectedInvoice}
          deleteTransaction={useDeleteInvoice}
          balance={balance}
          setTotalBalance={setTotalBalance}
        />
      </div>
    </div>
  );
}
