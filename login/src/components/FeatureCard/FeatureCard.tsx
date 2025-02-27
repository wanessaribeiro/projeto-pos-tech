import './FeatureCard.css'

type FeatureCardProps = {
    iconImg: string;
    title: string;
    description: string;
}

export default function FeatureCard({iconImg, title, description}: FeatureCardProps) {
    return(
        <div className='feature-body'>
            <img src={iconImg} className="feature-img"/>
            <p className='font-bold'>{title}</p>
            <small className='feature-text'>{description}</small>
        </div>
    )
}