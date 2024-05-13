
import './Navbar.css'
import yulduz from "../../assets/img/yulduz.png"
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Modal/Modal';







function Navbar() {
const {t, i18n}= useTranslation();
const languages = localStorage.getItem('i18nextLng')
const ChangeLanguage=(event)=>{
  const selectedLanguage = event.target.value;
  i18n.changeLanguage(selectedLanguage)

}




  return (
    <>
      <div className="navbar">
        <div className="container navbar__container">
            <ul className="navbar__list">
                <li className="navbar__item">
                 <a href="#" className="navbar__linkimg">
                    <img className='navbar__img' src={yulduz} alt="" />
                 </a>
                </li>
              
                <li className="navbar__item">
                  <a href="#home" className="navbar__link">{t("navbar.home")}</a>
                </li>
                <li className="navbar__item">
                <a href="#about" className="navbar__link">{t("navbar.about")} </a>
                </li>
                <li className="navbar__item">
                <a href="#servic" className="navbar__link">{t("navbar.servic")}</a>
                </li>
                <li className="navbar__item">
                <a href="#artic" className="navbar__link">{t("navbar.artic")}</a>
                </li>
                <li className="navbar__item">
                <a href="#contact" className="navbar__link">{t("navbar.contact")} </a>
                </li>
                <li className="navbar__item">
                <a href="#" className="navbar__link">{t("navbar.cart")} </a>
                </li>
              <div className='btn'>
              < TemporaryDrawer/>
              </div>
                  

                <select className='select' onChange={ChangeLanguage} value={languages}>
                  <option  value="en">en</option>
                  <option value="uz">uz</option>
                  <option  value="ru">ru</option>
                </select>
                <li className="navbar__item">
                <a href="#" className="link__name">{t("navbar.get")}</a>
                </li>
            </ul>
        </div>
      </div>
   
   

  

    
    </>
  )
}

export default Navbar
