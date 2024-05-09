import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import icon from "../../assets/img/icon.png"
import './Modal.css';
import i18next from "i18next";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
 
  const ChangeLanguage=(event)=>{
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage)
  
  }
  const toggleDrawer =  () => {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
 const {t} = useTranslation()

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <div className="modal">
      <ul className="modal__list">
           < li className="modal__item" >
                  <a href="#home" className="modal__link">{t("navbar.home")}</a>
                </li>
                <li className="modal__item">
                <a href="#about" className="modal__link">{t("navbar.about")} </a>
                </li>
                <li className="modal__item">
                <a href="#servic" className="modal__link">{t("navbar.servic")}</a>
                </li>
                <li className="modal__item">
                <a href="#artic" className="modal__link">{t("navbar.artic")}</a>
                </li>
                <li className="modal__item">
                <a href="#contact" className="modal__link">{t("navbar.contact")} </a>
                </li>
                <li className="modal__item">
                <a href="#" className="modal__link">{t("navbar.cart")} </a>
                </li>
                </ul>

                   <select className='select' onChange={ChangeLanguage} value={i18next.language}>
                  <option  className="option" value="en">en</option>
                  <option className="option"  value="uz">uz</option>
                  <option className="option"  value="ru">ru</option>
                </select>

            
                </div>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <img className="hamicon" src={icon} alt="" />
      </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}