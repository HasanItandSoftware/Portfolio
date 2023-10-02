/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Hero/Hero'
import Services_item from '../Services/Services_item'
import Choose from '../Choose/Choose'
import Location from '../Location/Location'
import Banner from '../Banner/Banner'
import ProfileCard from '../ProfileCard/ProfileCard'
function MainPage() {
  return (
    <>
    <Banner />
    <Hero />
    <Services_item />
    <Choose />
    <ProfileCard />
    <Location />  
    </>
  )
}

export default MainPage