
import './Footer.css'
import yulduz from "../../assets/img/yulduz.png"
import { useTranslation } from 'react-i18next'

function Footer() {
    const {t, i18n} = useTranslation();

  return (
    <>
    <div className="footer">
        <div className="container footer__container">
            <ul className="footer__list">
                <li className="footer__item">
                     <h1 className="footer__title">{t("footer.qual")}</h1>
                     <p className="footer__text">{t("footer.lorem")}</p>
                </li>
                <li className="footer__item">
                    <h2 className="footer__title">{t("footer.contact")}</h2>
                    <p className="footer__text">{t("footer.los")}</p>
                    <p className="footer__text">{t("footer.576")}</p>
                    <p className="footer__text">{t("footer.cle")}</p>
                    </li>
                    <li className="footer__item">
                    <h2 className="footer__title">{t("footer.hour")}</h2>
                    <h3 className="footer__title1">{t("footer.monday")}</h3>
                    <p className="footer__text">{t("footer.pm")}</p>
                        <h3 className="footer__title1">{t("footer.satur")}</h3>
                        <p className="footer__text">{t("footer.pmm")}</p>
                    </li>
                    <li className="footer__item">
                    <h2 className="footer__title">{t("footer.get")}</h2>
                    <span className='footer__span'>{t("footer.576")}</span>
                    <p className="footer__text1">{t("footer.lorem")}</p>
                    <a href="#" className="link__name">{t("footer.req")}</a>
                    </li>
            </ul>
           <hr />
           <ul className="footer__list__name">
           <li className="footer__item__name">
            <img className="footer__img" src={yulduz} alt="" />
                 </li>
            <li className="footer__item__name">
                <p className="footer__text__name">{t("footer.cop")}</p>
                </li>
            <li className="footer__item__name">
            <p className="footer__text__name">{t("footer.brix")}</p>
             </li>
            <li className="footer__item__name">
            <p className="footer__text__name">{t("footer.pow")}</p>
            </li>
            <li className="footer__item__name">
            <p className="footer__text__name">{t("footer.web")}</p>
              </li>
            <li className="footer__item__name">
            <p className="footer__text__name">{t("footer.lic")}</p>
              </li>
           </ul>
        </div>
    </div>
   
    
    </>
  )
}

export default Footer