import React from 'react';
import './InvestmentsMenu.css';
import { useNavigate } from 'react-router';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import pixels3 from '../../../domain/images/Pixels3.png';
import pixels4 from '../../../domain/images/Pixels4.png';
import { InvestmentType } from '../../../domain/shared/types';
import { percentageValue } from '../../../domain/shared/functions';

export type InvestmentMenuProps = {
  investments: InvestmentType;
  total: number;
};

export default function InvestmentsMenu({
  investments,
  total,
}: InvestmentMenuProps) {
  const navigate = useNavigate();

  const data = {
    labels: [
      'Fundos de investimento',
      'Tesouro direto',
      'Previdência privada',
      'Bolsa de valores',
    ],
    datasets: [
      {
        label: 'Valor Investido',
        data: [
          investments.investmentFunds,
          investments.treasure,
          investments.privatePrevidence,
          investments.stocks,
        ],
        backgroundColor: ['#FF5031', '#013644', '#47A138', '#F5F5F5'],
        borderColor: ['#FF5031', '#013644', '#47A138', '#F5F5F5'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="investments-body container border-round">
      <img src={pixels3} className="img-3" />
      <img src={pixels4} className="img-4" />
      <div className="inner-div">
        <h1>Investimentos</h1>
        <div className="invest-section">
          <p className="investments-text font-bold">
            Total: R$ {total + percentageValue(12, total)}
          </p>
          <button
            className="invest-button"
            onClick={() => navigate('/dashboard/new-investment')}
          >
            Investir
          </button>
        </div>
        <div className="income-section">
          <div className="investments-section mini-section border-round">
            <p>Renda Fixa (102% do CDI)</p>
            <p>R$ {total + percentageValue(2, total)}</p>
          </div>

          <div className="investments-section mini-section border-round">
            <p>Renda Variável (10%+)</p>
            <p>R$ {percentageValue(10, total)}</p>
          </div>
        </div>
        <h2>Estatísticas</h2>
        <div className="investments-section graph-section border-round">
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'left',
                  rtl: true,
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    color: '#FFFFFF',
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            className="chart"
          />
        </div>
      </div>
    </div>
  );
}
