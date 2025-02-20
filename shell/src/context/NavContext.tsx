import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export const NavContext = createContext<{
    currentState: string,
    setCurrentState: Dispatch<SetStateAction<string>>
} | null>(null);
    

export function NavProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [currentState, setCurrentState] = useState('Home');

  return (
    <NavContext.Provider
      value={{
        currentState,
        setCurrentState
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNavProvider() {
  const context = useContext(NavContext);
  if (!context) throw new Error("Invalid NavContext");
  return context;
}
