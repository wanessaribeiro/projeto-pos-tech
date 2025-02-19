import './App.css';
import NavBar from 'navbar/navbar'
import Header from 'navbar/header'
import Invoice from 'transactions/invoice'
import BalanceCard from 'account/balance-card'
import NewTransaction from 'transactions/new-transaction'

const App = () => {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <NavBar/>
        <div className='items'>
          <BalanceCard/>
          <NewTransaction/>
        </div>
        <Invoice/>
      </div>
    </div>
  );
};

export default App;
