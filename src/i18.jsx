

import  i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "../public/local/en.json"
import uzbek from "../public/local/uz.json"
import rus from "../public/local/ru.json"


i18n
.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)

.init ({
    fallbackLng:"en",
    debug:true,
    lng:i18n.language,
    resources :{
        en:{ translation: english },
        uz:{ translation: uzbek },
        ru:{ translation: rus }
    }
})
export default i18n;