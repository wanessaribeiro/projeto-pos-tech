import './Transferences.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'

export default function Transferences () {
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
                    />
                     <button type='submit' className='transaction-button'>Pesquisar</button>
                 </form>
                <div>
                    transferencias
                </div>    
            </div>
        </div>
    )
}