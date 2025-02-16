export type InvoiceItemProps = {
    id: string;
    type: string;
    value: number;
    date: string;
};


export default function InvoiceItem ({id, type, value, date}: InvoiceItemProps) {
    return (
      <div>
        <small className="txt-secondary-400 font-bold">Mês</small>
        <div>
          <p>{type}</p>
          <div>
            botão
          </div>
        </div>
        <div>
          <p className="font-bold">R$ {value}</p>
          <small className="txt-gray-600">{'' + date}</small>   
        </div>
      </div>
    );
  };
  