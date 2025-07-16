import React from 'react';
import { AccountProvider } from '../../infrastructure/contexts/AccountContext';
import { InvestmentProvider } from '../../infrastructure/contexts/InvestmentContext';
import { InvoiceProvider } from '../../infrastructure/contexts/InvoiceContext';

export default function Contexts({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AccountProvider>
      <InvoiceProvider>
        <InvestmentProvider>{children}</InvestmentProvider>
      </InvoiceProvider>
    </AccountProvider>
  );
}
