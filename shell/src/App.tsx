import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from 'login/home'
import ErrorScreen from 'login/error'
import Dashboard from './pages/Dashboard/Dashboard';
import Contexts from './components/Contexts';
import InvestmentsPage from './pages/Dashboard/Content/InvestmentsPage';
import EditTransactionPage from './pages/Dashboard/Content/EditTransactionPage';
import ServicesPage from './pages/Dashboard/Content/ServicesPage';
import NewInvestmentPage from './pages/Dashboard/Content/NewInvestmentPage';
import NewTransactionPage from './pages/Dashboard/Content/NewTransactionPage';
import TransferencesPage from './pages/Dashboard/Content/TrasferencesPage';

const App = () => {

  return (
    <Contexts>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<NewTransactionPage />}></Route>
            <Route path='transactions' element={<TransferencesPage/>} />
            <Route path='investments' element={<InvestmentsPage/>} />
            <Route path='edit' element={<EditTransactionPage/>} />
            <Route path='services' element={<ServicesPage/>} />
            <Route path='new-investment' element={<NewInvestmentPage/>} />
          </Route>
          <Route path='*' element={<ErrorScreen />}/>
        </Routes>
      </BrowserRouter>
    </Contexts>
  );
};

export default App;
