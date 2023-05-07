import './tops.css'
import TopsCard from '../topsCard'

function Tops({info}) {
    return (
        <div className='container'>
            <div className='tops__heading-wrapper'>
                <h2 className='tops__heading'>
                    {info?.topsTitle}
                </h2>
                <span className="tops__line"></span>
            </div>
            <ul className='tops__list'>
                <TopsCard
                    title={`${info?.topsCard1.topsTitle}`}
                    text={`${info?.topsCard1.topsText}`}
                    img={`${info?.topsCard1.topsImg}`}
                    icon={`${info?.topsCard1.topsIcon}`}
                />
                <TopsCard
                    title={`${info?.topsCard2.topsTitle}`}
                    text={`${info?.topsCard2.topsText}`}
                    img={`${info?.topsCard2.topsImg}`}
                    icon={`${info?.topsCard2.topsIcon}`}
                />
                <TopsCard
                    title={`${info?.topsCard3.topsTitle}`}
                    text={`${info?.topsCard3.topsText}`}
                    img={`${info?.topsCard3.topsImg}`}
                    icon={`${info?.topsCard3.topsIcon}`}
                />
            </ul>
        </div>
    )
}

export default Tops