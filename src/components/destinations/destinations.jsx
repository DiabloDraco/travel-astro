import './destinations.css'


function Destinations({info}) {
    return (
        <>
            <div className='container'>
                <div className='destinations__header-wrapper'>
                    <h2 className='destinations__heading'>
                        {info?.destinationsTitle}
                    </h2>
                    <span className='destinations__heading-line'></span>
                </div>
            </div>

            <div className='destinations__gallery-wrapper container'>
                <div className='destinations__col1'>  
                    <img className='img1' src="/images/swiper1.png" alt="img" />
                    <img className='img2' src="/images/swiper2.png" alt="img" />
                </div>
                <div className='destinations__col2'>
                    <img className='img3' src="/images/swiper3.png" alt="img" />
                    <img className='img4' src="/images/swiper4.png" alt="img" />
                </div>
                <div className='destinations__col3'>
                    <img className='img5' src="/images/swiper5.png" alt="img" />
                    <img className='img6' src="/images/swiper6.png" alt="img" />
                </div>
                <div className='destinations__col4'>
                    <img className='img7' src="/images/swiper7.png" alt="img" />
                    <img className='img8' src="/images/swiper8.png" alt="img" />
                </div>
            </div>
        </>
    )
}

export default Destinations