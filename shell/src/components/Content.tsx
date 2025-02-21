import NewTransaction from 'transactions/new-transaction'
import EditTransaction from 'transactions/edit-transaction'
import Transferences from 'transactions/transferences'
import InvestmentsMenu from 'investments/investments-menu'
import ServicesMenu from 'services/services-menu'
import { useNavProvider } from '../context/NavContext'
import { useInvoiceProvider } from '../context/InvoiceContext'

export default function Content(){
    const {currentState, setCurrentState} = useNavProvider();
    const {selectedInvoice, usePatchInvoice, usePostInvoice} = useInvoiceProvider();
    const stateMap: {[key: string]: React.JSX.Element} = {
        'Home': <NewTransaction postInvoice={usePostInvoice}/>,
        'Transactions': <Transferences/>,
        'Investments':  <InvestmentsMenu/>,
        'Other': <ServicesMenu/>,
        'Edit': <EditTransaction selectedTransaction={selectedInvoice} patchInvoice={usePatchInvoice} setPage={setCurrentState} />
    }

    return stateMap[currentState]
}