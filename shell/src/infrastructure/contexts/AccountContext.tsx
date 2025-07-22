import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { UserEntity } from '../../domain/entities/user.entity';
import { InvoiceEntity } from '../../domain/entities/invoice.entity';
import { PostLoginAccountDTO } from '../../domain/dtos/account.dto';
import PostLoginAccountService from '../services/Account/PostLoginAccountService';
import GetAccountService from '../services/Account/GetAccountService';

const AccountContext = createContext<
  | {
      token: string;
      loginAction: ({ email, password }: PostLoginAccountDTO) => void;
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
  //TODO: remover senha
  const [account, setAccount] = useState({
    id: '0',
    email: '',
    password: '',
    type: '',
    name: '',
  });
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedAccount = localStorage.getItem('user');

    if (storedAccount) {
      const parsedAccount = JSON.parse(storedAccount);
      setAccount({
        id: parsedAccount.id,
        email: parsedAccount.email,
        password: '**********',
        type: parsedAccount.type,
        name: parsedAccount.name,
      });
    }
  }, []);

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
    const token = localStorage.getItem('biteBankId');
    if (token) setToken(token);
  }, []);

  const loginAction = async ({ email, password }: PostLoginAccountDTO) => {
    const response = await PostLoginAccountService({ email, password });
    localStorage.setItem('biteBankId', response.token);

    const responseUser = await GetAccountService({
      token: response.token,
    });

    localStorage.setItem(
      'transactions',
      JSON.stringify(responseUser.transactions),
    );

    setAccount({
      id: responseUser.id,
      email: responseUser.email,
      password: responseUser.password,
      type: responseUser.type,
      name: responseUser.name,
    });
    setToken(response.token);
    localStorage.setItem('user', JSON.stringify(responseUser));
    return;
  };

  const logOut = () => {
    setAccount({
      id: '0',
      email: '',
      password: '',
      type: '',
      name: '',
    });
    setToken('');
    localStorage.removeItem('biteBankId');
    localStorage.removeItem('transactions');
    localStorage.removeItem('user');
  };

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
