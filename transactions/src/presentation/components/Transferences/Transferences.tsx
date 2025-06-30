import React from 'react';
import './Transferences.css';
import pixels3 from '../../images/Pixels3.png';
import pixels4 from '../../images/Pixels4.png';
import TransferenceItem from '../TransferenceItem/TransferenceItem';
import { InvoiceType } from '../../../domain/shared/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

interface TransferencesProps {
  transferences: InvoiceType[];
}

export default function Transferences({ transferences }: TransferencesProps) {
  const [page, setPage] = useState(0);
  const [currentContent, setCurrentContent] = useState<InvoiceType[]>([]);

  useEffect(() => {
    setCurrentContent((prev) => {
      const take = 6;
      const initPosition = page * take;
      const endPosition = page * take + take;

      const contentPiece = transferences.slice(initPosition, endPosition);
      return [...prev, ...contentPiece];
    });
  }, [page, transferences]);

  const handleLoadMoreData = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage;
    });
  };

  return (
    <div className="transferences-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <div className="inner-div">
        <h1>Transferências</h1>
        <form>
          <input
            id="search-value"
            name="search-value"
            placeholder="Pesquise aqui"
            value={''}
            onChange={() => {}}
            className="transferences-input"
          />
          <button type="submit" className="transferences-button">
            Pesquisar
          </button>
        </form>
        <InfiniteScroll
          dataLength={transferences.length}
          next={handleLoadMoreData}
          hasMore={currentContent.length < transferences.length}
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
              {transferences?.map((transference) => (
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
