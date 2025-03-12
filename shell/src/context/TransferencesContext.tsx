import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export interface TransferenceType {
  id: string;
  type: string;
  value: number;
  date: Date;
}

const transferencesMock: TransferenceType[] = [
  {
    id: "3",
    type: "Pix",
    value: 250.0,
    date: new Date(
      "Sat Jun 01 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
  {
    id: "2",
    type: "DOC/TED",
    value: 300.0,
    date: new Date(
      "Mon Apr 08 2024 16:24:42 GMT-0300 (Hora padrão de Brasília)"
    ),
  },
];

const TransferenceContext = createContext<{
  transferences: TransferenceType[],
  setTransferences: Dispatch<SetStateAction<TransferenceType[]>>,
    } | undefined>(undefined);
    

export function TransferenceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [transferences, setTransferences] = useState([...transferencesMock]);


  return (
    <TransferenceContext.Provider
      value={{
        setTransferences,
        transferences,
      }}
    >
      {children}
    </TransferenceContext.Provider>
  );
}

export function useTransferenceProvider() {
  const context = useContext(TransferenceContext);
  if (!context) throw new Error("Invalid TransferenceContext");
  return context;
}
