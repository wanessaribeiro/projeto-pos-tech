import React from 'react';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { InvestmentEntity } from '../../domain/entities/investment.entity';
import { investmentsMock } from '../mocks/InvestmentsMock';

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
  const [investments, setInvestments] = useState(investmentsMock);
  const [totalInvestment, setTotalInvestment] = useState(
    investments.investmentFunds +
      investments.privatePrevidence +
      investments.stocks +
      investments.treasure,
  );

  const newInvestmentFunds = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.investmentFunds;
    setInvestments({ ...investments, investmentFunds: newTotalInvestment });
  };

  const newTreasure = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.treasure;
    setInvestments({ ...investments, treasure: newTotalInvestment });
  };

  const newPrivatePrevidence = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.privatePrevidence;
    setInvestments({ ...investments, privatePrevidence: newTotalInvestment });
  };

  const newStocks = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.stocks;
    setInvestments({ ...investments, stocks: newTotalInvestment });
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
