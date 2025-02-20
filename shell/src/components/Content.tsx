import NewTransaction from 'transactions/new-transaction'
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
            <p>Pagina</p>
        )
    }
}