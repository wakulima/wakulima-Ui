import React from 'react'
import Footer2 from '../components/Footer2'
import MapComponent from '../components/MapComponent'
import NavBar from '../components/NavBar'

function About() {
  return (
    <div id='about'>
        <NavBar/>
        <div className='px-32 py-56 text-center bg-[#F0EFEB]'>
            <h1 className='text-6xl tracking-widest font-medium font-Prata text-[#005364]'>About Us</h1>
            
        </div>
        <div className='px-32 py-32'>
            <div className='flex flex-row'>
            <div className='min-w-[800px] space-y-2'>
                <h1 className=' text-[#4DB852] font-bold tracking-wider font-graces'>About our Company</h1>
                <h1 className='text-5xl font-Prata font-bold text-[#005364]'>Our Company</h1>
            </div>
            <div className='space-y-4'>
                <p>At agronix we are passionate about supporting the financial cooperative movement that currently improves the lives of hundreds of millions of people worldwide. Cooperatives are voluntary organisations, open to all persons able to use their services and willing to accept the responsibilities of membership, without discrimination. You can join, and leave, at any time.The Agronix is developing a new modular insurance model that addresses the new generation of customers through digital processes.</p>
                <button className='text-white  font-bold tracking-wider bg-[#4DB852] px-12 py-4'>Get In Touch</button>
            </div>
            
            </div>
        </div>
        <div className='py-16'>
        <div className=' justify-center flex flex-row items-center '>
            <MapComponent/>
        </div></div>
        <Footer2/>
        
        
      
    </div>
  )
}

export default About
