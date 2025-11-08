import React from 'react'
import Header from '../components/Header'
import { ThreeDCardDemo } from './Card'
import Why_choose from './Why_choose'
import {AnimatedTestimonialsDemo} from './Testimonial'
import Footer from '../components/Footer'
import Blog from '../components/Blog'


const Home = () => {
  return (
    <div>
        <Header/>
        <ThreeDCardDemo/>
        <Why_choose/>
        <AnimatedTestimonialsDemo/> 
        <Blog/>
        <Footer/>  
    </div>
  )
}

export default Home