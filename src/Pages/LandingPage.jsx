import React,{useEffect,useState} from 'react'
import Community from '../components/Community'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from "react-redux"
import Cards from '../components/Cards'
import HeroTitles from '../components/HeroTitles'
import FeatureCard from '../components/FeatureCard'
import Farm from '../components/farm/Farm'
import Footer2 from '../components/Footer2'
import ServicesSection from '../components/ServicesSection'
import { Link } from 'react-router-dom'
import RestartButton from '../components/RestartButton'
import { motion } from "framer-motion"

import { data } from 'autoprefixer'
// import * as Hi from "react-icons/hi";
// import * as Md from "react-icons/md";
// import * as Fi from "react-icons/fi";

function LandingPage() {
    const [data,setData]=useState([])
  const auth = useSelector((state) => state.auth);
  console.log(auth)
//   useEffect(() => {
//     fetch("https://ec.europa.eu/agrifood/api/beef/prices?memberStateCodes=PT&years=2020,2021&months=1,3,9&weeks=5,6,7,8,40,41,42&beginDate=01/09/2019&endDate=02/02/2020&carcassCategories=heifers,cows", {
//         mode: 'no-cors'
//     }).then(response => response.json()).then(data => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);
//   console.log(data);

  return (
    <div className=' '>
      {/* all sections */}
      {/* <RestartButton/> */}
      <NavBar />
        <section id='home'>    
            <HeroSection/>
        </section>
        <section id='OUr company all ' className='all'>
            <div className='md:space-y-24 md:mx-8 mx-4 md:py-16 py-8'>
                <div className='flex flex-col items-center space-y-10'>
                    <h1 className='md:text-6xl text-3xl font-Prata text-[#005364]'>Our General Company</h1>
                    
                </div>
 
            <div className='md:pt-20'>
                <div className='flex md:flex-row flex-col md:space-x-16   justify-center pt-10'>
                    <div className='space-y-8'>
                        <h1 className=' text-[#4DB852] font-bold tracking-wide'>WHO WE ARE</h1>
                        <h2 className='family-Poppins font-extrabold md:text-5xl text-2xl max-w-[600px]'>We Ensure green environment and Food security across the region</h2>
                        <p className='text-black/50 md:max-w-[600px] md:text-lg '>
                        Climate change is a real and present threat to African food security that is only set to get worse. Compounded with population growth, severe soil degradation across much of the continent, weak and disconnected markets, and limited access to up to date weather information, the situation could be very bleak. Better access to information through digital technology platforms however can help farmers to overcome some of these barriers to adaptation and growth.
                        </p>
                        <div >
                        <Link to={'/about'}>
                        <motion.button className='bg-[#4DB852] text-white tracking-wide  md:py-3 py-2 px-6 md:px-10 md:text-md text-[14px] uppercase rounded-3xl'>Discover More</motion.button></Link></div>
                    </div>
                    <div>
                        <div className='md:w-[600px] md:h-[600px] bg-[#4DB852] p-4 mt-10 md:p-6'>
                            <img className='-mb-6 md:mb-0' src="https://media.istockphoto.com/id/1325471641/photo/portrait-of-a-happy-young-female-african-american-farmer-girl-standing-in-a-green-wheat-grass.jpg?s=612x612&w=0&k=20&c=Mdf--fqajzQpMmlyX27BSH0MAZLkClO1_WmGcPip0ho=" alt="" />

                        </div>
                    </div>
                </div>

                
            </div>
            
            <div className='md:space-x-16  w-fit m-auto md:space-y-12 space-y-6 md:pt-32 pt-16'>
                <h1 className=' text-[#4DB852] md:text-2xl text-lg underline font-bold tracking-wide'>Last 6 months Actions</h1>
                
                <p className=" text-black md:max-w-[900px] md:text-lg text-[15px] tracking-wide ">Accurate and easy to use Farm Management Information Systems/Applications are of fundamental importance for a successful operational agricultural sector. Enabled farmers to sell their products faster to avoid wastage of food through.
                    </p>
                    <div className='flex flex-row  justify-center md:space-x-28 '>
                        <HeroTitles number={'250'} word={'Our Happy Customer'}/>
                        <HeroTitles  number={'100'} word={'Best Service Provided'}/>
                        <HeroTitles  number={'570'} word={'Product Portfolio Results'}/>
                        <HeroTitles  number={'300'} word={'Our Business Partner'}/>
                    </div></div>
            </div>
        </section>
        <section className='bg-[#F0EFEB] md:py-32 py-8  all'>
            <ServicesSection/>
        </section>
        {/* <section id='services' className='py-20 all'>
            <Farm/>
        </section> */}
        
     
        {/* <Footer/> */}
        {/* <Footer2/> */}

      
    </div>
  )
}

export default LandingPage
