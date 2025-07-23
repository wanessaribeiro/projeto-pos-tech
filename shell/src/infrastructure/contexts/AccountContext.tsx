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
  const [account, setAccount] = useState({
    id: '0',
    email: '',
    type: '',
    name: '',
    transactions: [],
    investment: {
      investmentFunds: 0,
      treasure: 0,
      privatePrevidence: 0,
      stocks: 0,
    },
  });
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState('');

  const fetchAccount = async (token: string) => {
    const responseUser = await GetAccountService({
      token: token,
    });

    setAccount({
      id: responseUser.id,
      email: responseUser.email,
      type: responseUser.type,
      name: responseUser.name,
      transactions: responseUser.transactions,
      investment: {
        investmentFunds: responseUser.investment.investmentFunds,
        treasure: responseUser.investment.treasure,
        privatePrevidence: responseUser.investment.privatePrevidence,
        stocks: responseUser.investment.stocks,
      },
    });
    setToken(token);
  };

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
    const token = localStorage.getItem('biteBankToken');

    if (token) fetchAccount(token);
  }, []);

  const loginAction = async ({ email, password }: PostLoginAccountDTO) => {
    const response = await PostLoginAccountService({ email, password });
    if (response.message === 'Credenciais inválidas') {
      alert('Email ou senha incorretos, tente novamente.');
      return;
    }
    localStorage.setItem('biteBankToken', response.token);

    fetchAccount(response.token);
    return;
  };

  const logOut = () => {
    setAccount({
      id: '0',
      email: '',
      type: '',
      name: '',
      transactions: [],
      investment: {
        investmentFunds: 0,
        treasure: 0,
        privatePrevidence: 0,
        stocks: 0,
      },
    });
    setToken('');
    localStorage.removeItem('biteBankToken');
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
