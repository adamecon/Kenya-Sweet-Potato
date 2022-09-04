import React from 'react'
import './About.css'

import Title from '../Common/title/Title'
import InfoImg from '../../Assets/779.jpg'
import { homeAbout } from '../../Data'
import AWrapper from './AWrapper'

const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    <img src={InfoImg} alt="info image" />
                </div>
                <div className="right row">
                    <Title subtitle="about our business and what we offer to the agribusiness industry" title="MAKE AN ORDER"/>
                    <div className="items">
                        {homeAbout.map((val) => (
                            <div className="item flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="img" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                    
                        ))}
                    </div>
                </div>
            </div>
        </section>

        
    </>
  )
}

export default AboutCard