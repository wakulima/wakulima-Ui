
import React from 'react'

function HeroTitles({word,number}) {
  return (
    <div className='text-center mr-2 '>
        <div className='bg-[#F0EFEB] h-[160px] flex  justify-center items-center w-[160px] border rounded-full'>
        <h1 className='cardhero md:text-3xl lg:text-6xl  text-[#4DB852]'>{number}+</h1>
        </div>
        <p className='text-black/60 text-[8px] md:text-lg font-light'>{word}</p>
    </div>
  )
}

export default HeroTitles