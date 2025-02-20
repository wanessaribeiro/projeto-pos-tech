import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { InvoiceProvider } from './context/InvoiceContext';
import { NavProvider } from './context/NavContext';


const App = () => {


  return (
    <InvoiceProvider>
      <NavProvider>
        <Dashboard/>
      </NavProvider>
    </InvoiceProvider>
  );
};

export default App;
