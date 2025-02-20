import './ServicesMenu.css'
import pixels3 from '../../images/Pixels3.png'
import pixels4 from '../../images/Pixels4.png'
import iconCard from '../../images/IconCard.png'
import iconDonations from '../../images/IconDonations.png'
import iconInsurance from '../../images/IconInsurance.png'
import iconLoan from '../../images/IconLoan.png'
import iconPhone from '../../images/IconPhone.png'
import iconPix from '../../images/IconPix.png'
import ServicesButton from '../ServicesButton/ServicesButton'

export default function ServicesMenu(){
    return (
        <div className="services-body container border-round">
            <img src={pixels3} className='img-1'/>
            <img src={pixels4} className='img-2'/>
            <div className='inner-div'>
                <h1>Confira os serviços disponíveis</h1>
            <div className='services'>
                <div className='services-buttons'>
                    <ServicesButton iconImg={iconLoan} buttonLabel='Empréstimo'/>
                    <ServicesButton iconImg={iconPix} buttonLabel='Pix'/>
                </div>
                <div className='services-buttons'>
                    <ServicesButton iconImg={iconCard} buttonLabel='Meus cartões'/>
                    <ServicesButton iconImg={iconInsurance} buttonLabel='Seguros'/>
                </div>
                <div className='services-buttons'>
                    <ServicesButton iconImg={iconDonations} buttonLabel='Doações'/>
                    <ServicesButton iconImg={iconPhone} buttonLabel='Crédito celular'/>
                </div>
            </div>
            </div>
        </div>
    )
}