import { createContext, useContext, useState } from "react";
import { accountMock, AccountType } from "./AccountContext";

export interface AuthType {
  email: string;
  password: string;
}

const AuthContext = createContext<{
  token: string,
  user: AccountType, 
  loginAction: () => void, 
  logOut: () => void, 
} | undefined>(undefined);
    

export function AuthProvider ({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    const [user, setUser] = useState<AccountType>({
        id: '',
        email: "",
        password: "",
        type: '',
        name: '',
        balance: 0,
    });
    const [token, setToken] = useState(localStorage.getItem("biteBankId") || "");
    
    const loginAction =  () => {
        const response = accountMock;
        localStorage.setItem("biteBankId", response.id);
        
        setUser(response)
        setToken(response.id)
        return;
    };
  
    const logOut = () => {
      setUser({
        id: '0',
        email: "",
        password: "",
        type: '',
        name: '',
        balance: 0,
    });
      setToken("");
      localStorage.removeItem("biteBankId");
    };
  
    return (
      <AuthContext.Provider 
        value={{ 
            token, 
            user, 
            loginAction, 
            logOut 
        }}>
        {children}
      </AuthContext.Provider>
    );
  
  };

export function useAuthProvider() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Invalid AuthContext");
  return context;
}
