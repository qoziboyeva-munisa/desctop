


import './About.css'
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import { useEffect, useState } from 'react'
import axios from 'axios'

function About() {   
const [data, setData]=useState([])
const getAbout=()=>{
    
    axios({
        url:"https://autoapi.dezinfeksiyatashkent.uz/api/cities",
        method:"GET",
    }).then((res)=>{
        console.log(res);
        setData(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}
// fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=4c1b589cae894762823457fea0f78c6a")
    
    useEffect(()=>{
        getAbout()
    },[])
  
    return(
    
  <>
   <div className="about" id='about'>
    <div className="container about__container">
        {/* {
            data && data.map((item,index)=>(
             <div key={index}>
                
             </div>
        
        
               
            ))
        } */}
        <h1 className="about__title">About Us</h1>
        <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <ul className="about__list">
            <li className="about__item">
                <img className='about__img' src={img1} alt="" />
                <p className="about__text__name">
    

                </p>
            </li>
            <li className="about__item">
                <img className='about__img' src={img2} alt="" />
                <p className="about__text__name">
                    
                </p>
            </li>
            <li className="about__item">
                <img className='about__img' src={img3} alt="" />
                <p className="about__text__name">
                    
                </p>
            </li>
        </ul>
    </div>
   </div>
    </>
)
}

export default About