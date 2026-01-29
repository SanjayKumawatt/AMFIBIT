import React from 'react'
import Hero from '../Component/Hero'
import WhatWeDo from '../Component/WhatWeDo'
import WhyChooseUsWithImage from '../Component/WhyChooseUsWithImage'
import AboutUs from '../Component/About'
import OurProducts from '../Component/OurProduct'
import TechStack from '../Component/TechStack'
import Architecture from '../Component/Architechture'
import Industries from '../Component/Industries'
import Team from '../Component/Team'
import CTA from '../Component/CTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <WhatWeDo/>
        <WhyChooseUsWithImage/>
        <AboutUs/>
        <OurProducts/>
        <TechStack/>
        <Architecture/>
        <Industries/>
        <Team/>
        <CTA/>
    </div>
  )
}

export default Home