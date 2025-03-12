import './App.css';
import InvestmentsMenu from './components/InvestmentsMenu/InvestmentsMenu';
import NewInvestment from './components/NewInvestment/NewInvestment';

const App = () => {
  return (
    <div className="content">
      <NewInvestment/>
      <InvestmentsMenu/>
    </div>
  );
};

export default App;
