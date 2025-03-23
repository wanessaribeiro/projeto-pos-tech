import NavBar from 'navbar/navbar'
import Header from 'navbar/header'
import Invoice from 'transactions/invoice'
import BalanceCard from 'account/balance-card'
import { useInvoiceProvider } from '../../context/InvoiceContext';
import { useAccountProvider } from '../../context/AccountContext';
import { useTransferenceProvider } from '../../context/TransferencesContext';
import { Outlet } from 'react-router';
import { useAuthProvider } from '../../context/AuthContext';

export default function Dashboard () {
      const {account, balance, setBalance} = useAccountProvider();
      const {invoices, setSelectedInvoice, useDeleteInvoice} = useInvoiceProvider();
      const {useDeleteTransference} = useTransferenceProvider();
      const {logOut} = useAuthProvider()
      
    return (
        <div>
        <Header account={account} logout={logOut}/>
        <div className="main-container">
          <NavBar/>
          <div className='items'>
            <BalanceCard account={account} balance={balance}/>
            <Outlet />
          </div>
          <Invoice invoices={invoices} setSelectedTransaction={setSelectedInvoice} deleteTransaction={useDeleteInvoice} deleteTransference={useDeleteTransference} balance={balance} setBalance={setBalance}/>
        </div>
      </div>
    )
}