
import './Main.css'
import IMAGE5 from "../../assets/img/IMAGE5.png"
import tel1 from "../../assets/img/tel1.png"
import { useTranslation } from 'react-i18next'

function Main() {
  const {t,i18n}= useTranslation();

  return (
    <>
     <div className="main">
        <div className="container main__container">
            <img src={IMAGE5} alt="" className="main__img" />
            <div className="main__box">
                <p className="main__text">{t("main.covid")}</p>
                <h1 className="main__title">{t("main.follow")}</h1>
                <p className="main__text">{t("main.lobor")}</p>
                <div className="main__wrapper">
                    <a href="#" className="link__name">{t("navbar.get")}</a>
                    <img src={tel1} alt="" className="main__imgname" />
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Main