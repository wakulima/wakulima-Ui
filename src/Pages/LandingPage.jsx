import React from 'react'
import Community from '../components/Community'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from "react-redux"
import Cards from '../components/Cards'
import HeroTitles from '../components/HeroTitles'

function LandingPage() {
  const auth = useSelector((state) => state.auth);
  console.log(auth)
  return (
    <div className='space-y-14'>
      {/* all sections */}
        
        <section id='home'>
            <HeroSection/>
        </section>
        <section id='services '>
            <div className='space-y-16 mx-8'>
            <div className='flex flex-row justify-center md:space-x-28 '>
                <HeroTitles number={'250'} word={'Our Happy Customer'}/>
                <HeroTitles  number={'100'} word={'Best Service Provided'}/>
                <HeroTitles  number={'570'} word={'Product Portfolio Results'}/>
                <HeroTitles  number={'300'} word={'Our Business Partner'}/>
            </div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide sm:leading-10 text-black '>What We Do</h1>
                <Cards/>

            </div>
        </section>
     
        <Footer/>

      
    </div>
  )
}

export default LandingPage
