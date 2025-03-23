import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ErrorScreen from 'login/error'
import Dashboard from './pages/Dashboard/Dashboard';
import Contexts from './components/Contexts';
import InvestmentsPage from './pages/Dashboard/Content/InvestmentsPage';
import EditTransactionPage from './pages/Dashboard/Content/EditTransactionPage';
import ServicesPage from './pages/Dashboard/Content/ServicesPage';
import NewInvestmentPage from './pages/Dashboard/Content/NewInvestmentPage';
import NewTransactionPage from './pages/Dashboard/Content/NewTransactionPage';
import TransferencesPage from './pages/Dashboard/Content/TrasferencesPage';
import HomePage from './pages/Home/HomePage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  return (
      <BrowserRouter>
        <Contexts>
          <Routes>
          <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<HomePage />}/>
            <Route element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<NewTransactionPage />}></Route>
                <Route path='transactions' element={<TransferencesPage/>} />
                <Route path='investments' element={<InvestmentsPage/>} />
                <Route path='edit' element={<EditTransactionPage/>} />
                <Route path='services' element={<ServicesPage/>} />
                <Route path='new-investment' element={<NewInvestmentPage/>} />
              </Route>
            </Route>
            <Route path='*' element={<ErrorScreen />}/>
          </Routes>
        </Contexts>
      </BrowserRouter>
  );
};

export default App;
