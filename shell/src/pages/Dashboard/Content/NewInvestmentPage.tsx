import { useInvestmentProvider } from '../../../context/InvestmentContext';
import NewInvestment from 'investments/new-investment';

export default function NewInvestmentPage() {
  const { newInvestment } = useInvestmentProvider();

  return <NewInvestment newInvestments={newInvestment} />;
}
