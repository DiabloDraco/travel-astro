import './topsCard.css'

function TopsCard(info) {

    return (
        <li className="topsCard">
            <div className='topsCard__image-wrapper'>
                <img className='topsCard__image' src={info?.img} alt="cardImage" />
            </div>
            <div className='topsCard__text-wrapper'>
                <h3 className='topsCard__heading'>
                    {info?.title}
                </h3>
                <p className='topsCard__text'>
                    {info?.text}
                </p>
            </div>
        </li>
    )
}

export default TopsCard