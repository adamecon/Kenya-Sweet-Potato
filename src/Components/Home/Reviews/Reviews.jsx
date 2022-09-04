import React from 'react'
import './Reviews.css'


import Title from '../../Common/title/Title'
import { testimonial } from '../../../Data'

const Reviews = () => {
  return (
   <>
        <section className="testimonal padding">
            <div className="container">
                <Title subtitle="Reviews" title="What They Say About Us"/>

                <div className="conent grid2">
                    {testimonial.map((val) => (
                        <div className="items shadow">
                            <div className="box flex">
                                <div className="img">
                                    <img src={val.cover} alt="img"/>
                                    <i className="fa fa-quote-left icon"></i>
                                </div>
                                <div className="name">
                                    <h2>{val.name}</h2>
                                    <span>{val.post}</span>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
   
   </>
  )
}

export default Reviews