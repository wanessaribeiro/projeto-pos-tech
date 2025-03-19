import { AccountProvider } from '../context/AccountContext';
import { InvestmentProvider } from '../context/InvestmentContext';
import { InvoiceProvider } from '../context/InvoiceContext';
import { NavProvider } from '../context/NavContext';
import { TransferenceProvider } from '../context/TransferencesContext';

export default function Contexts ({children}) {

  return (
    <AccountProvider>
      <InvoiceProvider>
        <TransferenceProvider>
          <InvestmentProvider>
            <NavProvider>
              {children}
            </NavProvider>
          </InvestmentProvider>
        </TransferenceProvider> 
      </InvoiceProvider>
    </AccountProvider>
  );
};
