


import './Servic.css'
import uy from "../../assets/img/uy.png"
import uy1 from "../../assets/img/uy1.png"
import uy2 from "../../assets/img/uy2.png"
import { useTranslation } from 'react-i18next'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Servic() {
    const {t,i18n}=useTranslation();
    const [expanded, setExpanded] = React.useState(false);
     const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)};
     

  return (
    <>
 
   <div className="servic" id='servic'>
    <div className="container servic__container">
        <div className="servic__box">
            <h1 className="servic__title">{t("servic.our")}</h1>
            <a href="#" className="servic__link">{t("servic.explore")}</a>
        </div>
        <ul className="servic__list">
            <li className="servic__item">
                <img className="servic__img" src={uy} alt="" />
             
              

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <Typography sx={{ color: 'text.secondary' }}> 
           {/* <h2 className="servic__title__name"> */}
            {t("servic.hous")}
           {/* </h2> */}
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <p className="servic__text"> */}
            {t("servic.lorem")}
            {/* </p> */}
            </Typography>
        </AccordionDetails>
      </Accordion>
         
                
            </li>
            <li className="servic__item">
                <img className="servic__img" src={uy1} alt="" />
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <Typography sx={{ color: 'text.secondary' }}>
            {/* <h2 className="servic__title__name"> */}
              {t("servic.offic")}
              {/* </h2> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* <p className="servic__text"> */}
            {t("servic.lorem")}
            {/* </p> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
            </li>
            <li className="servic__item">
                <img className="servic__img" src={uy2} alt="" />
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            <Typography sx={{ color: 'text.secondary' }}>
            {/* <h2 className="servic__title__name"> */}
              {t("servic.induc")}
              {/* </h2> */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* <p className="servic__text"> */}
            {t("servic.lorem")}
            {/* </p> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
          
               
            </li>
        </ul>
    </div>
   </div>
    
    </>
  )
}

export default Servic