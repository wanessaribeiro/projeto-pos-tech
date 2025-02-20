import NavBar from 'navbar/navbar'
import Header from 'navbar/header'
import Invoice from 'transactions/invoice'
import BalanceCard from 'account/balance-card'
import Content from '../../components/Content';
import { useNavProvider } from '../../context/NavContext';

export default function Dashboard () {
      const {setCurrentState} = useNavProvider();
      
    return (
        <div>
        <Header/>
        <div className="main-container">
          <NavBar setPage={setCurrentState}/>
          <div className='items'>
            <BalanceCard/>
            <Content/>
          </div>
          <Invoice/>
        </div>
      </div>
    )
}