import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export interface InvestmentType {
  investmentFunds: number;
  treasure: number;
  privatePrevidence: number;
  stocks: number;
}

const investmentsMock: InvestmentType = {
    investmentFunds: 50,
    treasure: 90,
    privatePrevidence: 120,
    stocks: 60
}

const InvestmentContext = createContext<{
  investments: InvestmentType,
  newInvestmentFunds: (newInvestment: number) => void,
  newTreasure: (newInvestment: number) => void,
  newPrivatePrevidence: (newInvestment: number) => void,
  newStocks: (newInvestment: number) => void,
  setInvestments: Dispatch<SetStateAction<InvestmentType>>,
    } | undefined>(undefined);
    

export function InvestmentProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [investments, setInvestments] = useState(investmentsMock);

  const newInvestmentFunds = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.investmentFunds
    setInvestments({...investments, investmentFunds: newTotalInvestment})
  }

  const newTreasure = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.treasure
    setInvestments({...investments, treasure: newTotalInvestment})
  }

  const newPrivatePrevidence = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.privatePrevidence
    setInvestments({...investments, privatePrevidence: newTotalInvestment})
  }

  const newStocks = (newInvestment: number) => {
    const newTotalInvestment = newInvestment + investments.stocks
    setInvestments({...investments, stocks: newTotalInvestment})
  }

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        setInvestments,
        newInvestmentFunds,
        newTreasure,
        newPrivatePrevidence,
        newStocks
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestmentProvider() {
  const context = useContext(InvestmentContext);
  if (!context) throw new Error("Invalid InvestmentContext");
  return context;
}
