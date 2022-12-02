
import React from 'react'

function HeroTitles({word,number}) {
  return (
    <div className='text-center mx-2'>
        <h1 className='cardhero md:text-3xl lg:text-7xl  text-[#4DB852]'>{number}+</h1>
        <p className='text-black/60 text-[8px] md:text-lg font-light'>{word}</p>
    </div>
  )
}

export default HeroTitles