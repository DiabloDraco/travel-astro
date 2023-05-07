import { createRef } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import './footer.css'

function Footer({ info }) {
    let fio = useRef(null)
    let fish = useRef(null)
    let tour = useRef(null)
    let startDate = useRef(null)
    let endDate = useRef(null)
    let peopleCount = useRef(null)
    let accept = useRef(null)

    function changeType() {
        fish.current.value = fio.current.value
    }

    function setPay(e) {
        e.preventDefault()
        if (fish.current.value.length > 1) {
            return e.target.submit()
        }
        alert("Fish kiriting")
    }


    async function fetchBot(e) {
        e.preventDefault();

        let req = await fetch("http://api.travelorzu.uz/send", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                fio: fio.current.value,
                tour: tour.current.value,
                startDate: startDate.current.value,
                endDate: endDate.current.value,
                peopleCount: peopleCount.current.value,
            })
        });

        req = await req.json()

        e.target.reset()
        accept.current.style.display = "block"

        setTimeout(() => {
            accept.current.style.display = "none"
        }, 3000)
    }


    return (
        <footer id='footer'>
            <div className='footer__inner-wrapper container'>
                <div className='footer__top-wrapper'>
                    <h3 className='footer__top-heading'>
                        {info?.footerTitle}
                    </h3>
                    <div className='footer__top__buttons-wrapper'>
                        <a className='footer__top__left-btn' href="">
                            {info?.footerTopLeftBtn}
                        </a>
                        <a className='footer__top__right-btn' href="">
                            {info?.footerTopRightBtn}
                        </a>
                    </div>
                </div>
                <div className='footer__middle'>
                    <div className='footer__middle-left'>
                        <div className='footer__middle__text-wrapper'>
                            <p className='footer__middle-text'>
                                {info?.footerAdress}
                            </p>

                            <p className='footer__middle-text-adress text-reg18'>
                                {info?.footerAdressMiddle}
                            </p>
                            <p className='footer__middle-text-adress text-reg18'>
                                {info?.footerAdressBottom}
                            </p>
                        </div>
                        <div className='footer__middle__text-wrapper'>
                            <p className='footer__middle-text-adress text-reg18'>
                                {info?.footerPhone}
                            </p>
                            <p className='footer__middle-text-adress text-reg18'>
                                {info?.footerPhoneBottom}
                            </p>
                        </div>
                        <div className='footer__middle__media-wrapper'>
                            <a className='footer__middle__media-link' href="">
                                <img className='footer__middle__media' src="/images/insta.svg" alt="insta" />
                            </a>
                            <a className='footer__middle__media-link' href="">
                                <img className='footer__middle__media' src="/images/facebook.svg" alt="insta" />
                            </a>
                            <a className='footer__middle__media-link' href="">
                                <img className='footer__middle__media' src="/images/twitter.svg" alt="insta" />
                            </a>
                            <a className='footer__middle__media-link' href="">
                                <img className='footer__middle__media' src="/images/message.svg" alt="insta" />
                            </a>
                        </div>
                    </div>
                    <form onSubmit={fetchBot} className='footer__middle-right'>
                        <h3 className='footer__right-heading'>
                            {info?.footerRightTitle}
                        </h3>
                        <div className='footer__right__input-wrapper'>
                            <span className='footer__right__input-text'>{info?.footerNamePlace}</span>
                            <input ref={fio} onInput={changeType} className='footer__right__input' placeholder={`${info?.footerNamePlace}`} type="text" />
                        </div>
                        <div className='footer__right__input-wrapper'>
                            <span className='footer__right__input-text'>{info?.footerPhonePlace}</span>
                            <input ref={tour} className='footer__right__input' placeholder={`${info?.footerPhonePlace}`} type="text" />
                        </div>
                        <div className='footer__right__labels-wrapper'>
                            <p className='footer__right__date-text'>{info?.footerDateLabel}</p>
                            <p className='footer__right__date-text minus'>{info?.footerDateToLabel}</p>
                            <p className='footer__right__date-text r-text minus1'>{info?.footerPerPersonLabel}</p>
                        </div>
                        <div className='mobile__bottom flex gap-5'>
                            <div className='footer__dropDown-wrapper gap-8'>
                                <input ref={startDate} name='startDate' className='footer__dropDown-date-from date' value="2023-01-03" type="date" />
                                <input ref={endDate} className='footer__dropDown-date-to date' value="2023-01-03" type="date" />
                            </div>
                            <input ref={peopleCount} min={1} className='footer__dropDown-number' placeholder={`${info?.footerPerPerson}`} type="number" />
                        </div>
                        <p ref={accept} className='footer__accept'>
                            {info?.alert}
                        </p>
                        <button type='submit' className='footer__middle__right-btn'>{info?.footerSubmitBtn}</button>

                        <form onSubmit={setPay} id="click_form" action="https://my.click.uz/services/pay" method="get" target="_blank">
                            <input type="hidden" name="amount" value="1000" />
                            <input type="hidden" name="merchant_id" value="18342" />
                            <input type="hidden" name="merchant_user_id" value="29568" />
                            <input type="hidden" name="service_id" value="26044" />
                            <input type="hidden" name="transaction_param" ref={fish} required />
                            <input type="hidden" name="return_url" value="http://travelorzu.uz/" />
                            <div className='flex items-center mb-5'>
                                <p className='text-bold24 text-white mr-4'>{info?.payment}</p>
                                <select className='border border-orange text-orange rounded cursor-pointer' name="card_type" required>
                                    <option value="humo">Humo</option>
                                    <option selected value="uzcard">Uzcard</option>
                                </select>
                            </div>
                            <button type="submit" class="click_logo w-full"><i></i>
                                <button type='button' className='footer__middle__right-btn  w-full footer__bottom-btn'>{info?.footerPayBtn}
                                </button>
                            </button>
                        </form>
                    </form>
                </div>
                <hr className='footer__middle-line' />
                <div className='footer__bottom'>
                    <a href='https://uztech.uz/' className='footer__bottom-left'>
                        {info?.footerRights}
                    </a>
                    <p className='footer__bottom-right'>
                        {info?.footerPrivacy}
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer