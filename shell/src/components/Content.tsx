import NewTransaction from 'transactions/new-transaction'
import EditTransaction from 'transactions/edit-transaction'
import Transferences from 'transactions/transferences'
import InvestmentsMenu from 'investments/investments-menu'
import NewInvestment from 'investments/new-investment'
import ServicesMenu from 'services/services-menu'
import { useNavProvider } from '../context/NavContext'
import { useInvoiceProvider } from '../context/InvoiceContext'
import { useAccountProvider } from '../context/AccountContext'
import { useTransferenceProvider } from '../context/TransferencesContext'
import { useInvestmentProvider } from '../context/InvestmentContext'

export default function Content(){
    const {currentState, setCurrentState} = useNavProvider();
    const {balance, setBalance} = useAccountProvider();
    const {selectedInvoice, usePatchInvoice, usePostInvoice} = useInvoiceProvider();
    const {transferences, usePostTransference, usePatchTransference} = useTransferenceProvider();
    const {investments, totalInvestment, newInvestment} = useInvestmentProvider();
    const stateMap: {[key: string]: React.JSX.Element} = {
        'Home': <NewTransaction postInvoice={usePostInvoice} balance={balance} setBalance={setBalance} postTransference={usePostTransference}/>,
        'Transactions': <Transferences transferences={transferences}/>,
        'Investments':  <InvestmentsMenu investments={investments} setPage={setCurrentState} total={totalInvestment}/>,
        'Other': <ServicesMenu/>,
        'Edit': <EditTransaction selectedTransaction={selectedInvoice} patchInvoice={usePatchInvoice} patchTransference={usePatchTransference} setPage={setCurrentState} />,
        'New-Investment': <NewInvestment newInvestments={newInvestment} setPage={setCurrentState}/>,
    }

    return stateMap[currentState]
}