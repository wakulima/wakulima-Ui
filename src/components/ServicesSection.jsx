import React from 'react'
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";


function ServicesSection() {
  return (
    <div>
        <div className='flex flex-col items-center space-y-10'>
            <h1 className='md:text-6xl text-3xl font-Prata text-[#005364]'>Featured Services</h1>
            <div>
            <div className='flex md:flex-row flex-col justify-center items-center md:space-x-16 space-y-16 md:space-y-0 md:pt-32'>

                    <div className='text-center md:w-[400px] md:h-[400px] w-[300px] h-[300px]  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center p-8 space-y-4'>
                        <div className='  w-[80px] h-[80px]  bg-[#4DB852] rounded-full items-center flex flex-col justify-center'>
                            <Fa.FaLaptopCode size={58} color={'white'}/>
                        </div>
                        <h1 className='md:text-2xl font-bold text-[#4DB852]'>Ai enabled Supply chain</h1>
                        <p className='md:text-lg text-md'>AI can enable improve quality and efficiency of yield through precision farming .</p>

                    </div>


                    <div className='hover:animate-pulse p-8 text-center space-y-4 md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#4DB852] bg-gradient-to-r  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center '>
                    <div className='    w-[80px] h-[80px]  bg-[white] rounded-full items-center flex flex-col justify-center'><Md.MdAutoGraph size={58} color={'#4DB852'}/></div>
                    <h1 className='md:text-2xlfont-bold text-[white]'>Market Analysis</h1>
                        <p className='md:text-lg text-md text-white'>contributing to food security by ensuring that food moves from surplus to deficit areas.</p>

                    </div>


                    <div className=' text-center md:w-[400px] md:h-[400px] w-[300px] h-[300px]  shadow-2xl rounded-xl shadow-black/50 flex flex-col align-center items-center p-8 space-y-4'>
                        <div className='    w-[80px] h-[80px]  bg-[#4DB852] rounded-full items-center flex flex-col justify-center'><Fa.FaHandshake size={58} color={'white'}/></div>
                        <h1 className='md:text-2xl font-bold text-[#4DB852]'>Farmer Connection</h1>
                        <p className='md:text-lg text-sm'>Better 'connections' improve farmers' access to knowledge, markets, financial and healthcare services, and more productive and transparent supply chains..</p>

                    </div>
                </div>
            </div>
                    
        </div>
      
    </div>
  )
}

export default ServicesSection
