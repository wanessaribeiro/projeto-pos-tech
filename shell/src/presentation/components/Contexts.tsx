import React from 'react';
import { AccountProvider } from '../../infrastructure/contexts/AccountContext';
import { AuthProvider } from '../../infrastructure/contexts/AuthContext';
import { InvestmentProvider } from '../../infrastructure/contexts/InvestmentContext';
import { InvoiceProvider } from '../../infrastructure/contexts/InvoiceContext';
import { TransferenceProvider } from '../../infrastructure/contexts/TransferencesContext';

export default function Contexts({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <AccountProvider>
        <InvoiceProvider>
          <TransferenceProvider>
            <InvestmentProvider>{children}</InvestmentProvider>
          </TransferenceProvider>
        </InvoiceProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
