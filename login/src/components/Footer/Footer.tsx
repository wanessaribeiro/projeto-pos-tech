import'./Footer.css'

export default function Footer () {
    return (
        <div className="footer-body">
            <ul className='footer-section'>
                <li className='font-bold li-footer'>Serviços</li>
                <li className='li-footer'>Conta Corrente</li>
                <li className='li-footer'>Conta PJ</li>
                <li className='li-footer'>Cartão de crédito</li>
            </ul>
            <ul className='footer-section'>
                <li className='font-bold li-footer'>Contato</li>
                <li className='li-footer'>0800 004 250 08</li>
                <li className='li-footer'>meajuda@bytebank.com.br</li>
                <li className='li-footer'>ouvidoria@bytebank.com.br</li>
            </ul>
            <ul className='footer-section'>
                <li className='font-bold li-footer'>Desenvolvido por WCPR Software</li>
                <li className='li-footer'>Conta Corrente</li>
                <li className='li-footer'>Conta PJ</li>
                <li className='li-footer'>Cartão de crédito</li>
            </ul>
        </div>
    )
}