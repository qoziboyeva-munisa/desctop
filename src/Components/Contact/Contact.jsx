
import './Contact.css'
import tel from "../../assets/img/tel.png"
import axios from 'axios';
import { useTranslation } from 'react-i18next';
function Contact() {
  const {t, i18n}=useTranslation();
 const myfunction = (e) =>{
  e.preventDefault()
   const token ="6760074363:AAG5oBjXnm9O2E0PGwDihFH5eArxYuyqxk0";
   const id = -1002000309086;
   const url = `https://api.telegram.org/bot${token}/sendMessage`;
   const name =document.getElementById("name").value;
   const number = document.getElementById("number").value;
   const adress = document.getElementById("adress").value;
   const email = document.getElementById("email").value;
   const textcontant = `ismi ${name} \n telefon raqami:${number} \n addres:${adress} \n email:${email}`

   axios({
    url:url,
    method:'POST',
    data:{
      "text":textcontant,
      "chat_id":id
    }
   })
   .then((res)=>{
    alert("yuborildi")
   }).catch((error)=>{
    console.log(error);
   })

 }

  return (
    <>
      <div className="contact" id='contact'>
        <div className="container contact__container">
            <div className="contact__box">
                <h1 className="contact__title">{t("contact.contact")}</h1>
                <p className="contact__text">{t("contact.in")}</p>
                <img className="contact__img" src={tel} alt="" />
                 <hr />
                 <h2 className="contact__title__name">{t("contact.not")}</h2>
                 <p className="contact__text">{t("conatat.massa")}</p>
                  <a href="#" className="contact__link">{t("conatct.brow")}</a> 
            </div>
            <div className="contact__form">
              <form className="form">
                <div className="form__box">
                <p className="contact__formtext">{t("contact.full")}</p>
                <input className="contact__input" type="text" id='name' />
                </div>
                  <div className="form__box">
                  <p className="contact__formtext">{t("contact.phon")}</p>
                <input className="contact__input" type="phonenumber" id='number' />
                  </div>
                <div className="form__box">
                <p className="contact__formtext">{t("contact.adres")}</p>
                <input className="contact__input" type="text" id='adress' />
                </div>
              <div className="form__box">
              <p className="contact__formtext">{t("contact.email")}</p>
                <input className="contact__input" type="email" id='email' />
              </div>
                <div className="form__box">
                <p className="contact__formtext">{t("contact.req")}</p>
                <input className="contact__input" type="text" id='servic' />
                </div>
                <div className="form__box">
                <p className="contact__formtext">{t("contact.day")}</p>
                <input className="contact__input" type="text" id='day' />
                </div>
               <div className="form__box">
               <p className="contact__formtext">{t("contact.add")}</p>
                <input className="contact__input1" type="text" id='add' />
               </div>
               <button className='contact__btn' onClick={myfunction}>
              Submit messege
               </button>
              </form>
            </div>
        </div>
      </div>
     

    </>
  )
}
        
export default Contact