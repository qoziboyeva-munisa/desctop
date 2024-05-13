


import './About.css'
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import { useEffect, useState } from 'react'
import axios from 'axios'


function About() {
    const url = 'https://autoapi.dezinfeksiyatashkent.uz/api/cities'
    const urlimage = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
    const [data, setData] = useState([])
    const getAbout = () => {

        axios({
            url: url,
            method: "GET",
        }).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAbout()
    }, [])

     return (

        <>
            <div className="about" id='about'>
                <div className="container about__container">

                    <h1 className="about__title">About Us</h1>
                    <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                    <ul className="about__list">
                        <li className="about__item">
                      
                            <div className="about__text__name">

                                <div  >
                                    <img style={{width:'100%'}} src={`${urlimage}${data[0]?.image_src}`} alt="" />
                                    <p className="">{data[0]?.name}</p>
                                    <p className="">{data[0]?.text}</p>
                                    <p className="">{data[0]?.img}</p>
                                </div>


                            </div>
                        </li>
                        <li className="about__item">
                            
                            <div className="about__text__name">
                                <div  >
                                    <img style={{width:'100%'}} src={`${urlimage}${data[1]?.image_src}`} alt="" />
                                    <p className="">{data[1]?.name}</p>
                                    <p className="">{data[1]?.text}</p>
                                    <p className="">{data[1]?.img}</p>
                                </div>
                            </div>
                        </li>
                        <li className="about__item">
                            
                            <div className="about__text__name">
                                <div  >
                                    <img style={{width:'100%'}} src={`${urlimage}${data[2]?.image_src}`} alt="" />
                                    <p className="">{data[2]?.name}</p>
                                    <p className="">{data[2]?.text}</p>
                                    <p className="">{data[2]?.img}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About