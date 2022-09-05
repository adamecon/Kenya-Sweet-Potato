import React from 'react'
import AboutCard from '../about/AboutCard'
import Hero from'../Home/hero/Hero'
import HAbout from './HAbout'
import Reviews from './Reviews/Reviews'
import HBlog from './HBlog'
import HPrice from './HPrice'


const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HPrice />
       
        <HBlog />
        <Reviews />
    </>
  )
}

export default Home