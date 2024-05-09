

import './Artic.css'
import chang from "../../assets/img/chang.png"
import img from "../../assets/img/img.png"
import kok from "../../assets/img/kok.png"
import { useTranslation } from 'react-i18next'

function Artic() {
  const {t, i18n} =useTranslation();

  return (
    <>
    <hr />
    <div className="artic" id='artic'>
        <div className="container artic__container">
           <div className="artic__box">
           <h1 className="artic__title">{t("artic.artic")}</h1> 
           <div className="artic__boxlink">
            <a href="#" className="link__name">{t("navbar.get")}</a>
            <a href="#" className="link__name">{t("artic.brow")}</a>
           </div>
           </div>
           <ul className="artic__list">
            <li className="artic__item">
              <img className="artic__img" src={chang} alt="" />
              <div className="artic__itembox">
                <h2 className="artic__title__name">{t("artic.best")}</h2>
                <p className="artic__text">{t("artic.lorem")}</p>
                <div className="artic__wrapper">
                    <p className="artic__wrapper__text">{t("artic.jan")}</p>
                    <img className="artic__kok" src={kok} alt="" />
                </div>
              </div>
            </li>
            <li className="artic__item">
            <img className="artic__img" src={img} alt="" />
            <div className="artic__itembox">
                <h2 className="artic__title__name">{t("artic.how")}</h2>
                <p className="artic__text">{t("artic.lorem")}</p>
                <div className="artic__wrapper">
                    <p className="artic__wrapper__text">{t("artic.feb")}</p>
                    <img className="artic__kok" src={kok} alt="" />
                </div>
              </div>
          </li>
           </ul>
        </div>
    </div>
   
    
    </>
  )
}

export default Artic