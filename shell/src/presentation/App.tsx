import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Contexts from './components/Contexts';
import EditTransactionPage from './pages/Dashboard/Content/EditTransactionPage';
import InvestmentsPage from './pages/Dashboard/Content/InvestmentsPage';
import NewInvestmentPage from './pages/Dashboard/Content/NewInvestmentPage';
import NewTransactionPage from './pages/Dashboard/Content/NewTransactionPage';
import ServicesPage from './pages/Dashboard/Content/ServicesPage';
import TransferencesPage from './pages/Dashboard/Content/TrasferencesPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/Home/ErrorPage';
import HomePage from './pages/Home/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Contexts>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<NewTransactionPage />}></Route>
            <Route path="transactions" element={<TransferencesPage />} />
            <Route path="investments" element={<InvestmentsPage />} />
            <Route path="edit" element={<EditTransactionPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="new-investment" element={<NewInvestmentPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Contexts>
    </BrowserRouter>
  );
};

export default App;
