/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Services from './Services';
import Aos from "aos"
import 'aos/dist/aos.css'
function Services_item() {
    useEffect(() =>{
        Aos.init({
            duration: 3000
        })
    },[])

    // getting and looping through all of the items
    const {data : services, isLoading } = useQuery('services', () => fetch('services.json').then(res => res.json()))
    if(isLoading){
        return (
            <h1>Loading </h1>
        )
    }

    
  return (
    <div>
        <h1 className='font-bold text-center text-6xl underline pl-12 pb-12' data-aos="fade-right">Our <span className='choose'>Services</span></h1>
        <div className='flex gap-14 justify-center pt-4'>
        {
            services.map(service => <Services services={service} key={service.id}></Services>)
        }
        </div>
    </div>
  )
}

export default Services_item