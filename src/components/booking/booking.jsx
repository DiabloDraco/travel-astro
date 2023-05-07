import './booking.css'

function Booking({info}) {
    return (
        <>
            <div className='booking-bg'>
                <div className='booking container'>
                    <div className='booking__header-wrapper'>
                        <h2 className='booking__heading'>
                            {info?.bookingTitle}
                        </h2>
                        <span className='booking__heading-line'></span>
                    </div>
                    <div className='booking__bottom-wrapper'>
                        <img controls className='booking__video' src={info?.bookingVideo} alt="turizm" />
                        <div className='booking__text-wrapper'>
                            <h3 className='booking__text-heading'>
                                {info?.bookingSubtitle}
                            </h3>
                            <p className='booking-text'>
                                {info?.bookingText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking