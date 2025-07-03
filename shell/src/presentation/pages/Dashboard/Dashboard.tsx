import React from 'react';
import NavBar from 'navbar/navbar';
import Header from 'navbar/header';
import Invoice from 'transactions/invoice';
import BalanceCard from 'account/balance-card';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAccountProvider } from '../../../infrastructure/contexts/AccountContext';
import { useAuthProvider } from '../../../infrastructure/contexts/AuthContext';
import { useInvoiceProvider } from '../../../infrastructure/contexts/InvoiceContext';

export default function Dashboard() {
  const { account, balance, setBalance } = useAccountProvider();
  const { invoices, setSelectedInvoice, useDeleteInvoice } =
    useInvoiceProvider();
  const { token } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  return (
    <div>
      <Header account={account} />
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
          setBalance={setBalance}
        />
      </div>
    </div>
  );
}
