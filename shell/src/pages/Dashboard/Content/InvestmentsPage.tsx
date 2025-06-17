import { useInvestmentProvider } from '../../../context/InvestmentContext';
import InvestmentsMenu from 'investments/investments-menu';

export default function InvestmentsPage() {
  const { investments, totalInvestment } = useInvestmentProvider();

  return <InvestmentsMenu investments={investments} total={totalInvestment} />;
}
