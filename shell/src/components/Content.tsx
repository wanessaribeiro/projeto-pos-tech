import NewTransaction from 'transactions/new-transaction'
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
            <p>Investimentos</p>
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
}