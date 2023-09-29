/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function Services({services}) {
    const {name,description,icon} = services;
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    },[])
  return (
    <div className="card w-96 glass" data-aos="slide-up">
  <figure><img src={icon} alt="car!" className='w-2/4'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0,120)}</p>
    <div className="card-actions justify-end">
      <button className="btn own-button text-white rounded-md">Learn More</button>
    </div>
  </div>
</div>
  )
}

export default Services