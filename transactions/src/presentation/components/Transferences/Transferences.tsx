import React from 'react';
import './Transferences.css';
import pixels3 from '../../../domain/images/Pixels3.png';
import pixels4 from '../../../domain/images/Pixels4.png';
import TransferenceItem from '../TransferenceItem/TransferenceItem';
import { InvoiceType } from '../../../domain/shared/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import TransactionDropdown from '../TransactionDropdown/TransactionDropdown';

interface TransferencesProps {
  transferences: InvoiceType[];
}

export default function Transferences({ transferences }: TransferencesProps) {
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('');
  const [filteredTransferences, setFilteredTransferences] =
    useState<InvoiceType[]>(transferences);
  const [currentContent, setCurrentContent] = useState<InvoiceType[]>([]);

  useEffect(() => {
    setFilteredTransferences(transferences);
  }, [transferences]);

  useEffect(() => {
    setCurrentContent((prev) => {
      const take = 6;
      const initPosition = page * take;
      const endPosition = page * take + take;

      const contentPiece = filteredTransferences.slice(
        initPosition,
        endPosition,
      );
      return [...prev, ...contentPiece];
    });
  }, [page, filteredTransferences]);

  const handleLoadMoreData = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage;
    });
  };

  const onChangeFilter = (value: string) => {
    setFilter(value);
  };

  const onClickFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = transferences.filter(
      (transference) => transference.type === filter || !filter,
    );
    setFilteredTransferences(result);
  };

  const onClickClear = () => {
    setFilter('');
    setFilteredTransferences([...transferences]);
  };

  return (
    <div className="transferences-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <div className="inner-div">
        <h1>Transferências</h1>
        <form onSubmit={onClickFilter}>
          <div className="transferences-input">
            <TransactionDropdown
              selected={filter}
              setSelected={onChangeFilter}
              options={['DOC/TED', 'Pix']}
              placeholder="Selecione o tipo de transferência"
            ></TransactionDropdown>

            <button type="submit" className="transferences-button">
              Filtrar
            </button>
            <button
              type="button"
              className="transferences-button"
              onClick={() => onClickClear()}
            >
              Limpar
            </button>
          </div>
        </form>
        <InfiniteScroll
          dataLength={filteredTransferences.length}
          next={handleLoadMoreData}
          hasMore={currentContent.length < filteredTransferences.length}
          loader={<p>Carregando...</p>}
          endMessage={<p>Sem mais transferências para mostrar.</p>}
        >
          <table className="transferences-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransferences?.map((transference) => (
                <TransferenceItem
                  key={transference.id}
                  transferenceType={transference.type}
                  value={transference.value}
                  date={transference.date}
                />
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      </div>
    </div>
  );
}
