import './clients.css'



function Clients({info}) {

    function clicked(e) {
        q1.classList.remove("active")
        q2.classList.remove("active")
        q3.classList.remove("active")
        q4.classList.remove("active")
        e.target.classList.add("active")
    }

    return (
        <>
            <div className='container'>
                <div className='clients__header-wrapper'>
                    <h2 className='clients__heading'>
                        {info?.clientsTitle}
                    </h2>
                    <span className='clients__heading-line'></span>
                </div>


                <div className='clients__swiper'>
                    <div className="middle">
                        <div className="slides">
                            <input type="radio" name="r" className="bar" id="r1" checked />
                            <input type="radio" name="r" className="bar" id="r2" />
                            <input type="radio" name="r" className="bar" id="r3" />
                            <input type="radio" name="r" className="bar" id="r4" />
                            <div className="imgwrapper s1">
                                <div className='slide-wrapper'>
                                    <div className='card'>
                                        <img src={info?.clientsCard1.cardImgLeft} className="slide" alt="" />
                                        <div className='card__right'>
                                            <p className='card__right-text'>
                                                {info?.clientsCard1.cardText}
                                            </p>
                                            <p className='card__right-author'>
                                            {info?.clientsCard1.cardAuthor}
                                            </p>
                                        </div>
                                    </div>
                                    <img className='slide__right' src={info?.clientsCard1.cardImgRight} alt="" />
                                </div>
                            </div>
                            <div className="imgwrapper">
                                <div className='slide-wrapper'>
                                    <div className='card'>
                                        <img src={info?.clientsCard2.cardImgLeft} className="slide" alt="" />
                                        <div className='card__right'>
                                            <p className='card__right-text'>
                                                {info?.clientsCard2.cardText}
                                            </p>
                                            <p className='card__right-author'>
                                            {info?.clientsCard2.cardAuthor}
                                            </p>
                                        </div>
                                    </div>
                                    <img className='slide__right' src={info?.clientsCard2.cardImgRight} alt="" />
                                </div>
                            </div>
                            <div className="imgwrapper">
                                <div className='slide-wrapper'>
                                    <div className='card'>
                                        <img src={info?.clientsCard3.cardImgLeft} className="slide" alt="" />
                                        <div className='card__right'>
                                            <p className='card__right-text'>
                                                {info?.clientsCard3.cardText}
                                            </p>
                                            <p className='card__right-author'>
                                            {info?.clientsCard3.cardAuthor}
                                            </p>
                                        </div>
                                    </div>
                                    <img className='slide__right' src={info?.clientsCard3.cardImgRight} alt="" />
                                </div>
                            </div>
                            <div className="imgwrapper">
                                <div className='slide-wrapper'>
                                    <div className='card'>
                                        <img src={info?.clientsCard4.cardImgLeft} className="slide" alt="" />
                                        <div className='card__right'>
                                            <p className='card__right-text'>
                                                {info?.clientsCard4.cardText}
                                            </p>
                                            <p className='card__right-author'>
                                            {info?.clientsCard4.cardAuthor}
                                            </p>
                                        </div>
                                    </div>
                                    <img className='slide__right' src={info?.clientsCard4.cardImgRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <label onClick={clicked} for="r1" id='q1' className="q active"></label>
                        <label onClick={clicked} for="r2" id='q2' className="q"></label>
                        <label onClick={clicked} for="r3" id='q3' className="q"></label>
                        <label onClick={clicked} for="r4" id='q4' className="q"></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients