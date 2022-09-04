import React from 'react'
import './Pricing.css'

import Back from '../Common/back/Back'
import PriceCard from './PriceCard'
import Faq from './Faq'

const Pricing = () => {
  return (
    <>
        <Back title="Product Pricing"/>
        <section className="price padding">
            <div className="container grid">
                <PriceCard />
            </div>
        </section>
        <Faq />
    
    </>
  )
}

export default Pricing