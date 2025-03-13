import './Transferences.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import TransferenceItem from '../TransferenceItem/TransferenceItem'
import { InvoiceType } from '../../libs/types';

interface TransferencesProps{
  transferences: InvoiceType[];
}

export default function Transferences ({transferences}: TransferencesProps) {
    return (
        <div className="transferences-body container border-round">
            <img src={pixels3} className='img-3'/>
            <img src={pixels4} className='img-4'/>
            <div className='inner-div'>
                <h1>Transferências</h1>
                 <form >
                 <input
                    id="search-value"
                    name="search-value"
                    placeholder="Pesquise aqui"
                    value={''}                        
                    onChange={() => {}}
                    className='transferences-input'
                    />
                     <button type='submit' className='transferences-button'>Pesquisar</button>
                 </form>
                <table className='transferences-table'>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transferences?.map((transference) => (
                        <TransferenceItem key={transference.id} transferenceType={transference.type} value={transference.value} date={transference.date}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}