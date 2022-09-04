import React from 'react'
import { blog } from '../../../Data'

import './Footer.css'

const Footer = () => {
  return (
   <>
        <section className="newsletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Subscribe To Our Newsletter</h1>
                    <span>lorem ipsum dbhbsd dbvhbs dsvbsdbv </span>
                </div>
                <div className="right row">
                    <input type="email" placeholder="enter your email" />
                    <i className="fa fa-paper-plane"></i>
                </div>
            </div>
        </section>
        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>Kenya Sweet Potato</h1>
                    <span>Agribusiness Company</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box">
                   <h3>Recent Posts</h3>
                   {blog.slice(0,3).map((val) => (
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <span>
                                    <i className="fa fa-user"></i>
                                    <label>{val.type}</label>
                                </span>
                                <span>
                                    <i className="fa fa-calendar-alt"></i>
                                    <label>{val.date}</label>
                                </span>
                                <h4>{val.title}</h4>
                            </div>
                        </div>
                   ))}
                </div>
                <div className="box last">
                    <h3>Do You Have Questions?</h3>
                    <ul>
                        <li>
                            <i className="fa fa-map"></i>
                            P.O Box 8, Kadongo
                        </li>
                        <li>
                            <i className="fa fa-phone"></i>
                            +254725772524
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            ochanjijane@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p>Copyright @2022 All Rights Reserved | Made with <i className="fa fa-heart"></i> by Adam Okeyo</p>
        </div>
   </>
  )
}

export default Footer