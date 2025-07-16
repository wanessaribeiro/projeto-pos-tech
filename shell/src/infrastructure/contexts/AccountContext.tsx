import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserEntity } from '../../domain/entities/user.entity';
import { InvoiceEntity } from '../../domain/entities/invoice.entity';
import { LoginAccountDTO } from '../../domain/dtos/account.dto';
import PostLoginAccountService from '../services/Account/PostLoginAccountService';
import GetAccountService from '../services/Account/GetAccountService';

const AccountContext = createContext<
  | {
      token: string;
      loginAction: ({ email, password }: LoginAccountDTO) => void;
      logOut: () => void;
      account: UserEntity;
      balance: number | undefined;
      setTotalBalance: (invoices: InvoiceEntity[]) => void;
    }
  | undefined
>(undefined);

export function AccountProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [account, setUser] = useState({
    id: '0',
    email: '',
    password: '',
    type: '',
    name: '',
    balance: 0,
  });
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');

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

  const loginAction = async ({ email, password }: LoginAccountDTO) => {
    const response = await PostLoginAccountService({ email, password });
    localStorage.setItem('biteBankId', response.token);

    const responseUser = await GetAccountService({
      id: '28298e8e-9b9f-451d-aaba-f9ff5bbcfb75',
      token: response.token,
    });

    console.log('response do user:' + JSON.stringify(responseUser));
    setUser({
      id: responseUser.id,
      email: responseUser.email,
      password: responseUser.senha,
      type: responseUser.tipoConta,
      name: 'João',
      balance: 0,
    });
    setToken(response.token);
    return;
  };

  const logOut = () => {
    setUser({
      id: '0',
      email: '',
      password: '',
      type: '',
      name: '',
      balance: 0,
    });
    setToken('');
    localStorage.removeItem('biteBankId');
  };

  useEffect(() => {
    setUser({ ...account, balance: balance });
  }, [balance]);

  return (
    <AccountContext.Provider
      value={{
        token,
        loginAction,
        logOut,
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
