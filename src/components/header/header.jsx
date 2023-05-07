import './header.css'
import logo from '/images/logo.png'
import hNav1 from '/images/hnav1.svg'
import hNav2 from '/images/hnav2.svg'
import hNav3 from '/images/hnav3.svg'

function changeLang(e) {
    if (e.target.value == "RU") {
        window.location.href = '/'
    }
    if (e.target.value == "UZ") {
        window.location.href = '/uz'
    }
    if (e.target.value == "EN") {
        window.location.href = '/en'
    }
}

function Header({ info }) {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <a className="header__logo-link" href="#">
                    <img className="header__logo" src={logo} alt="logo" />
                    <h2 className='header__logo-text'>{info?.headerLogoText}</h2>
                </a>

                <nav className='header__navbar'>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <select onChange={changeLang}>
                                <option selected disabled>
                                    {info?.headerLangText}
                                </option>
                                <option value={"RU"}>
                                    RU
                                </option>
                                <option value={"EN"}>
                                    EN
                                </option>
                                <option value={"UZ"}>
                                    UZ
                                </option>
                            </select>
                        </li>
                        <li className='header__item'>
                            <a className='header__item__link' href="#reccomend">
                                <img className='header__link-icon' src={hNav1} alt="icon" />
                                <span className='header__link-text'>{info?.headerItem1}</span>
                            </a>
                        </li>
                        <li className='header__item'>
                            <a className='header__item__link' href="#footer">
                                <img className='header__link-icon' src={hNav2} alt="icon" />
                                <span className='header__link-text'>{info?.headerItem2}</span>
                            </a>
                        </li>
                        <li className='header__item'>
                            <a className='header__item__link' href="#footer">
                                <img className='header__link-icon' src={hNav3} alt="icon" />
                                <span className='header__link-text'>{info?.headerItem3}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <select className='header__mobile-sel' onChange={changeLang}>
                    <option selected disabled>
                        {info?.headerLang}
                    </option>
                    <option value={"RU"}>
                        RU
                    </option>
                    <option value={"EN"}>
                        EN
                    </option>
                    <option value={"UZ"}>
                        UZ
                    </option>
                </select>
            </div>
            <span className='header__line'></span>
        </header>
    )
}

export default Header