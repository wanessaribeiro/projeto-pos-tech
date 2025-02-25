import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { InvoiceProvider } from './context/InvoiceContext';
import { NavProvider } from './context/NavContext';
import { AccountProvider } from './context/AccountContext';


const App = () => {


  return (
    <AccountProvider>
      <InvoiceProvider>
        <NavProvider>
          <Dashboard/>
        </NavProvider>
      </InvoiceProvider>
    </AccountProvider>
  );
};

export default App;
