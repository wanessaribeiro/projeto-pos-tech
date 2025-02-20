import NavBar from 'navbar/navbar'
import Header from 'navbar/header'
import Invoice from 'transactions/invoice'
import BalanceCard from 'account/balance-card'
import Content from '../../components/Content';
import { useNavProvider } from '../../context/NavContext';
import { useInvoiceProvider } from '../../context/InvoiceContext';

export default function Dashboard () {
      const {setCurrentState} = useNavProvider();
      const invoiceContext = useInvoiceProvider()
      const invoices = invoiceContext?.invoices
      
    return (
        <div>
        <Header/>
        <div className="main-container">
          <NavBar setPage={setCurrentState}/>
          <div className='items'>
            <BalanceCard/>
            <Content/>
          </div>
          <Invoice invoices={invoices}/>
        </div>
      </div>
    )
}