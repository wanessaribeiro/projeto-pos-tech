import React, { useEffect } from 'react';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { InvestmentEntity } from '../../domain/entities/investment.entity';
import { useAccountProvider } from './AccountContext';
import PutUpdateInvestmentsService from '../services/Investments/PutUpdateInvestmentsService';

const InvestmentContext = createContext<
  | {
      investments: InvestmentEntity;
      newInvestment: (type: string, newInvestment: number) => void;
      totalInvestment: number;
      setInvestments: Dispatch<SetStateAction<InvestmentEntity>>;
    }
  | undefined
>(undefined);

export function InvestmentProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { account } = useAccountProvider();

  const [investments, setInvestments] = useState<InvestmentEntity>({
    investmentFunds: 0,
    treasure: 0,
    privatePrevidence: 0,
    stocks: 0,
  });
  const [totalInvestment, setTotalInvestment] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('biteBankToken');

    if (token) {
      setInvestments({
        investmentFunds: account.investment.investmentFunds,
        treasure: account.investment.treasure,
        privatePrevidence: account.investment.privatePrevidence,
        stocks: account.investment.stocks,
      });
      setTotalInvestment(
        account.investment.investmentFunds +
          account.investment.privatePrevidence +
          account.investment.stocks +
          account.investment.treasure,
      );
    }
  }, [account]);

  const newInvestmentFunds = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.investmentFunds;
    setInvestments({ ...investments, investmentFunds: newTotalInvestment });
    PutUpdateInvestmentsService({
      token: localStorage.getItem('biteBankToken') ?? '',
      userId: account.id,
      data: { investmentFunds: newTotalInvestment },
    });
  };

  const newTreasure = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.treasure;
    setInvestments({ ...investments, treasure: newTotalInvestment });
    PutUpdateInvestmentsService({
      token: localStorage.getItem('biteBankToken') ?? '',
      userId: account.id,
      data: { treasure: newTotalInvestment },
    });
  };

  const newPrivatePrevidence = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.privatePrevidence;
    setInvestments({ ...investments, privatePrevidence: newTotalInvestment });
    PutUpdateInvestmentsService({
      token: localStorage.getItem('biteBankToken') ?? '',
      userId: account.id,
      data: { privatePrevidence: newTotalInvestment },
    });
  };

  const newStocks = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.stocks;
    setInvestments({ ...investments, stocks: newTotalInvestment });
    PutUpdateInvestmentsService({
      token: localStorage.getItem('biteBankToken') ?? '',
      userId: account.id,
      data: { stocks: newTotalInvestment },
    });
  };

  const newInvestment = (type: string, newInvestment: number) => {
    if (type === 'Fundos de investimento') newInvestmentFunds(newInvestment);
    else if (type === 'Tesouro direto') newTreasure(newInvestment);
    else if (type === 'Previdência privada')
      newPrivatePrevidence(newInvestment);
    else if (type === 'Bolsa de valores') newStocks(newInvestment);

    const total = totalInvestment + newInvestment;
    setTotalInvestment(total);
  };

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        setInvestments,
        newInvestment,
        totalInvestment,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestmentProvider() {
  const context = useContext(InvestmentContext);
  if (!context) throw new Error('Invalid InvestmentContext');
  return context;
}
