import hero1 from '/images/herolist1.svg'
import hero2 from '/images/herolist2.svg'
import hero3 from '/images/herolist3.svg'
import './hero.css'

function Hero({info}) {
    return (
        <section id='hero' className='hero'>
            <div className='hero__top'>
                <h2 className='hero__top-heading text-center'>
                    {info?.heroTitle}
                </h2>
                <h3 className='hero__top-subtitle text-center'>
                    {info?.heroSubTitle}
                </h3>
            </div>

            <div className='hero__bottom'>
                <ul className='hero__bottom__list'>
                    <li className='hero__bottom__item'>
                        <img className='hero__bottom__item-icon' src={hero1} alt="icon" />
                        <p className='hero__bottom__item-text'>
                            {info?.heroInfoItem1}
                        </p>
                    </li>
                    <li className='hero__bottom__item'>
                        <img className='hero__bottom__item-icon' src={hero2} alt="icon" />
                        <p className='hero__bottom__item-text'>
                            {info?.heroInfoItem2}
                        </p>
                    </li>
                    <li className='hero__bottom__item'>
                        <img className='hero__bottom__item-icon' src={hero3} alt="icon" />
                        <p className='hero__bottom__item-text'>
                            {info?.heroInfoItem3}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Hero