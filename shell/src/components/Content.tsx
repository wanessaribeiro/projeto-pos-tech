import NewTransaction from 'transactions/new-transaction'
import EditTransaction from 'transactions/edit-transaction'
import Transferences from 'transactions/transferences'
import InvestmentsMenu from 'investments/investments-menu'
import ServicesMenu from 'services/services-menu'
import { useNavProvider } from '../context/NavContext'

export default function Content(){
    const {currentState} = useNavProvider();
    
    if(currentState === 'Home'){
        return (
            <NewTransaction/>
        )
    }

    if(currentState === 'Transactions'){
        return (
            <Transferences/>
        )
    }

    if(currentState === 'Investments'){
        return (
            <InvestmentsMenu/>
        )
    }

    if(currentState === 'Other'){
        return (
            <ServicesMenu/>
        )
    }

    if(currentState === 'Edit'){
        return (
            <EditTransaction />
        )
    }
}