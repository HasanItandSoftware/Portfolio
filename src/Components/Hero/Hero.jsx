/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Lottie from 'react-lottie-player'
import heroData from "../../Json/hero_animation.json"
import Aos from "aos"
import 'aos/dist/aos.css'
function Hero() {
    // animation
    useEffect(() => {
        Aos.init({duration : 3000});
    },[])


  return (
    <div className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <Lottie loop animationData={heroData} play className='w-5/12' data-aos="fade-right"/>
      <div className='w-3/6' data-aos="fade-up">
        <h1 className="text-7xl font-bold">An <span className='innovative'>Innovative</span> it and Software consult center</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur, libero omnis amet facere voluptatibus laboriosam qui dicta voluptatem placeat!</p>
        <button className="btn btn-primary hero-btn text-white rounded-md">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Hero