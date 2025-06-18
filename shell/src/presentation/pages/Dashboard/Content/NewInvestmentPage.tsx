import React from 'react';
import NewInvestment from 'investments/new-investment';
import { useInvestmentProvider } from '../../../../infrastructure/contexts/InvestmentContext';

export default function NewInvestmentPage() {
  const { newInvestment } = useInvestmentProvider();

  return <NewInvestment newInvestments={newInvestment} />;
}
