import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserEntity } from '../../domain/entities/user.entity';
import { InvoiceEntity } from '../../domain/entities/invoice.entity';

export const accountMock: UserEntity = {
  id: '1010',
  email: 'joananaves@email.com',
  password: '3231rabanete',
  type: 'Conta Corrente',
  name: 'Joana Naves',
  balance: 0,
};

const AccountContext = createContext<
  | {
      account: UserEntity;
      balance: number | undefined;
      setTotalBalance: (invoices: InvoiceEntity[]) => void;
    }
  | undefined
>(undefined);

export function AccountProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [account, setUser] = useState(accountMock);
  const [balance, setBalance] = useState(0);

  const setTotalBalance = (invoices: InvoiceEntity[]) => {
    const total = invoices.reduce((acc, invoice) => {
      if (invoice.type === 'Depósito') {
        return acc + invoice.value;
      } else if (
        invoice.type === 'Saque' ||
        invoice.type === 'DOC/TED' ||
        invoice.type === 'Pix'
      ) {
        return acc - invoice.value;
      }
      return acc;
    }, 0);

    setBalance(total);
  };

  useEffect(() => {
    setUser({ ...account, balance: balance });
  }, [balance]);

  return (
    <AccountContext.Provider
      value={{
        account,
        balance,
        setTotalBalance,
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
