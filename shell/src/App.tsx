import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { InvoiceProvider } from './context/InvoiceContext';
import { NavProvider } from './context/NavContext';
import { AccountProvider } from './context/AccountContext';
import { TransferenceProvider } from './context/TransferencesContext';
import { InvestmentProvider } from './context/InvestmentContext';


const App = () => {


  return (
    <AccountProvider>
      <InvoiceProvider>
        <TransferenceProvider>
          <InvestmentProvider>
            <NavProvider>
              <Dashboard/>
            </NavProvider>
          </InvestmentProvider>
        </TransferenceProvider> 
      </InvoiceProvider>
    </AccountProvider>
  );
};

export default App;
