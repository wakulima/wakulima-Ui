import React from "react";
import '../farm/farm.css'

export default function Farm() {
  return (
    <div className="text-center items-center object-cover md:h-[600px] h-[400px] bg-[url(https://www.brookings.edu/wp-content/uploads/2022/06/2015-05-13T120000Z_1913900413_GF10000093469_RTRMADP_3_AFRICA-CROPS.jpg)] bg-no-repeat flex flex-row align-center justify-center ">
     <div className="max-w-[600px]">
     
     <h2 className='text-center family-Poppins text-white font-extrabold md:text-4xl text-2xl max-w-[600px] '>We Ensure green environment and Food security across the region</h2>
     
     <br/>
     <p className="text-white max-w-[900px] md:text-lg tracking-wide "> Farmers are facing climate change problems that require action, all while trying to feed the growing global populace. As they work to overcome these challenges, one key strategy they deploy is the introduction of advanced Ag Tech into their farming practices.</p>

     </div>
      
    </div>
  );
}
