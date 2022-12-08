import React from 'react'

function Footer2() {
  return (
    <div className='font-Roboto'>
        <div className='flex flex-row '>
            <div className=' space-y-10 items-center flex flex-col  pt-32 bg-[#31512A] p-4 itesm-center h-[700px] w-[600px] text-white'>
                <h1 className='tracking-wide text-2xl'>About Us</h1>
                <p className='text-white/50 max-w-[600px] text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime totam error nihil, dolorem explicabo accusamus est! Eius soluta exercitationem corporis ratione perspiciatis laborum! Totam, velit enim illum voluptatum iure sunt!
                        </p>
                        <div>
                            <h1 className='uppercase tracking-wide'>Social Connect</h1>
                        </div>

            </div>
            <div className='flex flex-row bg-[#F0EFEB]    pt-32 w-full '>

            <div className='p-4  w-full '>
                <div className=''>
                    <h1 className='text-3xl'>Services</h1>
                    <ul className='text-lg space-y-4 text-gray-600/70'>
                        <li>Farmer-to-Everything Connections </li>
                        <li>Farmer-to-Everything Connections </li>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                    </ul>
                </div>

            </div>
            <div className='p-4 bg-[#F0EFEB] w-full'>
                <div className=''>
                    <h1 className='text-3xl'>Services</h1>
                    <ul className='text-lg space-y-4 text-gray-600/70'>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                        <li>Organic Food Delivery</li>
                    </ul>
                </div>

            </div>
            
        </div>
            
            
        </div>
        
        <div className='h-[150px] bg-[#F6F6F6]  items-center flex flex-row justify-around space-x-4'>

        <p className="text-sm text-gray-500">© Copyright 2022 Foodika. All rights reserved.</p>
        <div>
            <img src="https://themepure.net/template/agronix-prev/agronix/assets/img/service/payment.png" alt="" />
        </div>
            

        </div>
      
    </div>
  )
}

export default Footer2
