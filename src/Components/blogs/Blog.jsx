import React from 'react'
import './Blog.css'


import Back from '../Common/back/Back'
import BlogCard from './BlogCard'


const Blog = () => {
  return (
    <>
        <Back title="Feature Blogs" subtitle="Blogs" />
        <section className="blog padding">
            <div className="container grid2">
                <BlogCard />
            </div>
        </section>
    
    </>
  )
}

export default Blog