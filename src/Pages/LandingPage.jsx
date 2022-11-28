import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'


function LandingPage() {
  return (
    <div>
        {/* <div className='sticky '><NavBar/></div> */}
        <section id='home'>
            <HeroSection/>
        </section>
        <section id='services'>
            <div>
                <h1 className='lg:w-[900px] text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-wide sm:leading-10 text-black '>What We Offer</h1>
            </div>
        </section>

        <Footer/>

      
    </div>
  )
}

export default LandingPage
