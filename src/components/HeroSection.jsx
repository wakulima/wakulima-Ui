import React from "react";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative bg-[url(https://www.brookings.edu/wp-content/uploads/2022/06/2015-05-13T120000Z_1913900413_GF10000093469_RTRMADP_3_AFRICA-CROPS.jpg)] bg-cover bg-center bg-no-repeat ">
      <div className="">
        
      </div>
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/70 sm:to-white/25"></div>

      <div className="relative mx-auto w-screen px-4 py-32  h-screen justify-center    flex flex-row ">
        <div className="aloign-center space-y-14">
        <h1 className="text-white text-6xl font-bold max-w-[900px] text-center">Green world & Food Security Solutions</h1>
        <p className="text-white max-w-[900px] text-lg tracking-wide text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!</p>

            <div className="flex flex-row space-x-8 justify-center ">
            <Link to='/signup'>
             <button className='hover:animate-pulse bg-[#4DB852] text-white tracking-wide  py-4 px-16 text-md uppercase hover:bg-[#A8CF45] rounded-3xl'>Discover More</button>
            </Link>
           
           <Link to='login'>
             <button className=' bg-[white] text-[#4DB852] tracking-wide py-4 px-16 text-md uppercase rounded-3xl'>Login</button>
           </Link>
            </div>
        </div>
        {/* <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your Next
            <strong className="block font-extrabold text-rose-700">
              Market and Buying point
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-[#9EC96E] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#9EC96E]/60 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <Link to="/signup">Get Started</Link>
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto hover:text-[#9EC96E]"
            >
              Learn More{" "}
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
