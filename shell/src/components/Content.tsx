import NewTransaction from 'transactions/new-transaction'
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
            <p>Transferencias</p>
        )
    }

    if(currentState === 'Investments'){
        return (
            <p>Investimentos</p>
        )
    }

    if(currentState === 'Other'){
        return (
            <ServicesMenu/>
        )
    }
}