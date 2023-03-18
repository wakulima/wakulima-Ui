
import React from 'react'

function HeroTitles({word,number}) {
  return (
    <div className='text-center mr-2 flex flex-col items-center w-fit '>
        <div className='bg-[#F0EFEB] md:h-[160px] h-[60px] flex  justify-center items-center md:w-[160px] w-[60px] border rounded-full'>
        <h1 className='cardhero md:text-3xl lg:text-6xl  text-[#4DB852]'>{number}+</h1>
        </div>
        <p className='text-black/60 text-[9px] md:text-lg  font-light'>{word}</p>
    </div>
  )
}

export default HeroTitles