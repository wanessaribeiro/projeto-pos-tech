import NavBar from 'navbar/navbar'
import Header from 'navbar/header'
import Invoice from 'transactions/invoice'
import BalanceCard from 'account/balance-card'
import Content from '../../components/Content';
import { useNavProvider } from '../../context/NavContext';
import { useInvoiceProvider } from '../../context/InvoiceContext';
import { useAccountProvider } from '../../context/AccountContext';

export default function Dashboard () {
      const {setCurrentState} = useNavProvider();
      const {account, balance} = useAccountProvider();
      const {invoices, setSelectedInvoice, useDeleteInvoice} = useInvoiceProvider();
      
    return (
        <div>
        <Header account={account}/>
        <div className="main-container">
          <NavBar setPage={setCurrentState}/>
          <div className='items'>
            <BalanceCard account={account} balance={balance}/>
            <Content/>
          </div>
          <Invoice invoices={invoices} setPage={setCurrentState} setSelectedTransaction={setSelectedInvoice} deleteTransaction={useDeleteInvoice}/>
        </div>
      </div>
    )
}