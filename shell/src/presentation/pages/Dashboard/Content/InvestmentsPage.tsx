import React from 'react';
import InvestmentsMenu from 'investments/investments-menu';
import { useInvestmentProvider } from '../../../../infrastructure/contexts/InvestmentContext';

export default function InvestmentsPage() {
  const { investments, totalInvestment } = useInvestmentProvider();

  return <InvestmentsMenu investments={investments} total={totalInvestment} />;
}
