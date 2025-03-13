import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { InvoiceProvider } from './context/InvoiceContext';
import { NavProvider } from './context/NavContext';
import { AccountProvider } from './context/AccountContext';
import { TransferenceProvider } from './context/TransferencesContext';


const App = () => {


  return (
    <AccountProvider>
      <InvoiceProvider>
        <TransferenceProvider>
          <NavProvider>
            <Dashboard/>
          </NavProvider>
        </TransferenceProvider> 
      </InvoiceProvider>
    </AccountProvider>
  );
};

export default App;
