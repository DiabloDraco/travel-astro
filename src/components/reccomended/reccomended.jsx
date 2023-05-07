import TopsCard from '../topsCard'
import './reccomended.css'

function Reccomended({info}) {
    return (
        <div id='reccomend' className='container'>
            <div className='tops__heading-wrapper'>
                <h2 className='tops__heading'>
                    {info?.reccomendTitle}
                </h2>
                <span className="tops__line"></span>
            </div>
            <ul className='recs__list'>
                <TopsCard
                    title={info?.recCard1.recTitle}
                    text={info?.recCard1.recText}
                    img={info?.recCard1.recImg}
                    icon={info?.recCard1.recIcon}
                />
                <TopsCard
                    title={info?.recCard2.recTitle}
                    text={info?.recCard2.recText}
                    img={info?.recCard2.recImg}
                    icon={info?.recCard2.recIcon}
                />
                <TopsCard
                    title={info?.recCard3.recTitle}
                    text={info?.recCard3.recText}
                    img={info?.recCard3.recImg}
                    icon={info?.recCard3.recIcon}
                />
                <TopsCard 
                    title={info?.recCard4.recTitle}
                    text={info?.recCard4.recText}
                    img={info?.recCard4.recImg}
                    icon={info?.recCard4.recIcon}
                />
                <TopsCard
                    title={info?.recCard5.recTitle}
                    text={info?.recCard5.recText}
                    img={info?.recCard5.recImg}
                    icon={info?.recCard5.recIcon}
                />
                <TopsCard
                    title={info?.recCard6.recTitle}
                    text={info?.recCard6.recText}
                    img={info?.recCard6.recImg}
                    icon={info?.recCard6.recIcon}
                />
            </ul>
        </div>
    )
}

export default Reccomended