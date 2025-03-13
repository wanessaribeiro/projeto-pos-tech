import NewTransaction from 'transactions/new-transaction'
import EditTransaction from 'transactions/edit-transaction'
import Transferences from 'transactions/transferences'
import InvestmentsMenu from 'investments/investments-menu'
import ServicesMenu from 'services/services-menu'
import { useNavProvider } from '../context/NavContext'
import { useInvoiceProvider } from '../context/InvoiceContext'
import { useAccountProvider } from '../context/AccountContext'
import { useTransferenceProvider } from '../context/TransferencesContext'

export default function Content(){
    const {currentState, setCurrentState} = useNavProvider();
    const {balance, setBalance} = useAccountProvider();
    const {selectedInvoice, usePatchInvoice, usePostInvoice} = useInvoiceProvider();
    const {transferences, usePostTransference, usePatchTransference} = useTransferenceProvider();
    const stateMap: {[key: string]: React.JSX.Element} = {
        'Home': <NewTransaction postInvoice={usePostInvoice} balance={balance} setBalance={setBalance} postTransference={usePostTransference}/>,
        'Transactions': <Transferences transferences={transferences}/>,
        'Investments':  <InvestmentsMenu/>,
        'Other': <ServicesMenu/>,
        'Edit': <EditTransaction selectedTransaction={selectedInvoice} patchInvoice={usePatchInvoice} patchTransference={usePatchTransference} setPage={setCurrentState} />
    }

    return stateMap[currentState]
}