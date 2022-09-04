import React from 'react'
import { price } from '../../Data'

const PriceCard = () => {
  return (
    <>
        {price.map((val) => (
            <div className="items shadow">
                <h4>{val.name}</h4>
                <h1>
                    <span> Ksh </span>
                    {val.price}
                </h1>
                <p>{val.desc}</p>
                <button className="outline-btn">Place Your Order</button>
            </div>
        ))}
    </>
  )
}

export default PriceCard