


import './About.css'
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import { useEffect, useState } from 'react'
import axios from 'axios'


function About() { 
 const url = 'https://autoapi.dezinfeksiyatashkent.uz/api/cities'  
//  const img ='23c1b9b1-81fa-4392-a63f-111e8f1b56a1.jpeg'
const [data, setData]=useState([])
const getAbout=()=>{
    
    axios({
        // imgage_src :img,
        url:url,
        method:"GET",
    }).then((res)=>{
         setData(res.data.data)
    }).catch((err)=>{
        console.log(err);
    })
}
    
    useEffect(()=>{
        getAbout()
    },[])
  
    return(
    
  <>
   <div className="about" id='about'>
    <div className="container about__container">
     
        <h1 className="about__title">About Us</h1>
        <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <ul className="about__list">
            <li className="about__item">
                <img className='about__img' src={img1} alt="" />
                <div className="about__text__name">
                {
            data && data.map((item,index)=>(
                <div key={index}>
                    <p className="">{item.name}</p> 
                   <p className="">{item.text}</p>
                   <p className="">{item.img}</p>
                    

                </div>
            ))

        }

                </div>
            </li>
            <li className="about__item">
                <img className='about__img' src={img2} alt="" />
                <div className="about__text__name">
                {
            data && data.map((item,index)=>(
                <div key={index}>
                   <p className="">{item.name}</p> 
                   <p className="">{item.text}</p>
                   <p className="">{item.img}</p>
                    

                </div>
            ))

        }   
                </div>
            </li>
            <li className="about__item">
                <img className='about__img' src={img3} alt="" />
                <div className="about__text__name">
                {
            data && data.map((item,index)=>(
                <div key={index}>
                   <p className="">{item.name}</p> 
                   <p className="">{item.text}</p>
                   <p className="">{item.img}</p>
                    

                </div>
            ))

        }  
                </div>
            </li>
        </ul>
    </div>
   </div>
    </>
)
}

export default About