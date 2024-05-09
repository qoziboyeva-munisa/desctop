
import './Header.css'
import tel from "../../assets/img/tel.png"
import IMAGE from "../../assets/img/IMAGE.png"
import { useTranslation } from 'react-i18next'

function Header() {
  const {t,i18n}=useTranslation();

  return (
    <>
      <div className="header">
        <div className="container header__container">
            <div className="header__box">
             <h1 className="header__title">{t("header.qulality")}</h1>
             <p className="header__text">{t("header.condimen")}</p>
             <div className="header__wrapper">
             <a href="#" className="link__name">{t("header.free")}</a>
             <a href="#" className="header__link">
                <img className='header__tel' src={tel} alt="" />
             </a>
             </div>
            </div>
            <img className="header__img" src={IMAGE} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header