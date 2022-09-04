import React, { Component } from 'react'

import Back from '../Common/back/Back'
import ProductCard from './ProductCard'


const ProductHome = () => {
    return(
       <>
           <Back title="explore some of our products"/>
           <ProductCard />
       
       </>
    )
}


export default ProductHome