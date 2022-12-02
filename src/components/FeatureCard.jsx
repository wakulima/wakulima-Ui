import React from 'react'
// import * as Fi from "react-icons/fi";

function FeatureCard({icon,word,link,linkWord,title}) {
  return (
    <div className='bg-white md:h-[500px] px-10 py-8 md:py-16 space-y-4 md:space-y-7'>
        <div className='text-[#EE7A29] text-4xl md:text-8xl'>{icon}</div>
        <h2 className='cardhero  font-light text-2xl md:text-3xl'>{title}</h2>
        <p className='text-black/50 text-sm sm:text-lg font-light '>{`${word}`}</p>
      
    </div>
  )
}

export default FeatureCard