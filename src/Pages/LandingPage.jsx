import React from 'react'
import Community from '../components/Community'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from "react-redux"
import Cards from '../components/Cards'
import HeroTitles from '../components/HeroTitles'
import FeatureCard from '../components/FeatureCard'
// import * as Hi from "react-icons/hi";
// import * as Md from "react-icons/md";
// import * as Fi from "react-icons/fi";

function LandingPage() {
  const auth = useSelector((state) => state.auth);
  console.log(auth)

//   const features=[
//     {
//         icon: <Fi.FiTool/>,
//         title:'Best Technology Tools',
//         word: "It's easier to develop a business with the latest modern technology tools that we have so that it can give your business the opportunity to grow bigger",
//         link: '/home',
//         linkWord: 'Know More'
//     },
//     {
//         icon: <Md.MdOutlineTimer/>,
//         title:'Fast & Responsive Result',
//         word: "We gurantee the impact of our work can be seen quickly and precisely because of our business strategy and great team that work prefessionally ",
//         link: '/home',
//         linkWord: 'Know More'
//     },
//     {
//         icon: <Hi.HiOutlineLockClosed/>,
//         title:'Data Security Gurantee',
//         word: "We will manage your business and company data security wisely and guranteed to be safe from outside parties, without any fraud from our side",
//         link: '/home',
//         linkWord: 'Know More'
//     },
//     {
//         icon: <Md.MdAutoGraph/>,
//         title:'More Flexible Pricing',
//         word: "The price offers we provide for our farm produce tend to be more flexible, you can choose according to your needs, you don't have to choose a particular package",
//         link: '/home',
//         linkWord: 'Know More'
//     }
    
// ]
  return (
    <div className='space-y-14'>
      {/* all sections */}
        
        <section id='home'>
            <NavBar />
            <HeroSection/>
        </section>
        <section id='services '>
            <div className='space-y-24 mx-8'>
            <div className='flex flex-row justify-center md:space-x-28 '>
                <HeroTitles number={'250'} word={'Our Happy Customer'}/>
                <HeroTitles  number={'100'} word={'Best Service Provided'}/>
                <HeroTitles  number={'570'} word={'Product Portfolio Results'}/>
                <HeroTitles  number={'300'} word={'Our Business Partner'}/>
            </div>
 
            <div className='pt-20'>
                <div className='flex flex-row space-x-16  justify-center pt-10'>
                    <div className='space-y-8'>
                        <h1 className=' text-[#4DB852] font-bold tracking-wide'>WHO WE ARE</h1>
                        <h2 className='family-Poppins font-extrabold text-5xl max-w-[600px]'>We Ensure green environment and Food security across the region</h2>
                        <p className='text-black/50 max-w-[600px] text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime totam error nihil, dolorem explicabo accusamus est! Eius soluta exercitationem corporis ratione perspiciatis laborum! Totam, velit enim illum voluptatum iure sunt!
                        </p>
                        <button className=' bg-[#4DB852] text-white tracking-wide  py-3 px-10 text-md uppercase rounded-3xl'>Discover More</button>
                    </div>
                    <div>
                        <div className='w-[600px] h-[600px] bg-[#4DB852] p-6'>
                            <img className='' src="https://media.istockphoto.com/id/1325471641/photo/portrait-of-a-happy-young-female-african-american-farmer-girl-standing-in-a-green-wheat-grass.jpg?s=612x612&w=0&k=20&c=Mdf--fqajzQpMmlyX27BSH0MAZLkClO1_WmGcPip0ho=" alt="" />

                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center space-x-16 pt-32'>
                    <div className='w-[400px] h-[400px]  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center p-8 space-y-4'>
                        <div className='    w-[80px] h-[80px]  bg-[#4DB852] rounded-full'></div>
                        <h1 className='text-2xl font-bold text-[#4DB852]'>Ai enabled Supply chain</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    </div>


                    <div className='p-8 space-y-4 w-[400px] h-[400px] bg-[#4DB852] bg-gradient-to-r  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center '>
                    <div className='    w-[80px] h-[80px]  bg-[white] rounded-full '></div>
                    <h1 className='text-2xl font-bold text-[white]'>Market Analysis</h1>
                        <p className='text-lg text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    </div>


                    <div className='w-[400px] h-[400px]  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center p-8 space-y-4'>
                        <div className='    w-[80px] h-[80px]  bg-[#4DB852] rounded-full'></div>
                        <h1 className='text-2xl font-bold text-[#4DB852]'>Farmer Connection</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    </div>
                </div>
                
            </div>

            </div>
        </section>
     
        <Footer/>

      
    </div>
  )
}

export default LandingPage
