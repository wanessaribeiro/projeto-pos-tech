import React from 'react';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserEntity } from '../../domain/entities/user.entity';

export const accountMock: UserEntity = {
  id: '1010',
  email: 'joananaves@email.com',
  password: '3231rabanete',
  type: 'Conta Corrente',
  name: 'Joana Naves',
  balance: 2500,
};

const AccountContext = createContext<
  | {
      account: UserEntity;
      balance: number | undefined;
      setBalance: Dispatch<SetStateAction<number>>;
    }
  | undefined
>(undefined);

export function AccountProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [account, setUser] = useState(accountMock);
  const [balance, setBalance] = useState(accountMock.balance);

  useEffect(() => {
    setUser({ ...account, balance: balance });
  }, [balance]);

  return (
    <AccountContext.Provider
      value={{
        account,
        balance,
        setBalance,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountProvider() {
  const context = useContext(AccountContext);
  if (!context) throw new Error('Invalid AccountContext');
  return context;
}
