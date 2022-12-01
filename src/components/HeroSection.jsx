import React from "react";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative bg-[url(https://www.brookings.edu/wp-content/uploads/2022/06/2015-05-13T120000Z_1913900413_GF10000093469_RTRMADP_3_AFRICA-CROPS.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="sticky float z-40">
        <NavBar />
      </div>
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
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
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <Link to="/signup">Get Started</Link>
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
