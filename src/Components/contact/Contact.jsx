import React from 'react'
import './Contact.css'

import Back from '../Common/back/Back'

const Contact = () => {
  return (
    <>
        <Back title="Contact Us" />
        <section className="contact padding">
            <div className="container shadow flexSB">
               <div className="left row">
                    <iframe src=""></iframe>
                </div> 
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p>Place Your Order Of Vines And Potatoes By Reaching Out To Us</p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>8, Kadongo, Homa Bay</p>

                        </div>
                        <div className="box">
                            <h4>Email: </h4>
                            <p>ochanjijane@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE: </h4>
                            <p>+254725772524</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <input type="text" placeholder="Subject" />
                        <textarea cols='30' rws='10'>Your Message...</textarea>
                        <button className="primary-btn">Send</button>
                    </form>
                    <h3> Follow Us On</h3>
                    <span>Facebook Twitter Instagram</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact