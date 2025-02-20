import './ServicesButton.css'

interface ServicesButtonProps {
    iconImg?: string,
    buttonLabel: string
}

export default function ServicesButton ({iconImg, buttonLabel}: ServicesButtonProps) {
    return (
        <button className="services-button" >
            <img src={iconImg} className="button-img"/>
            <p>{buttonLabel}</p>
        </button>
    )
}