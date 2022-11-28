import React from 'react'

function NavBar() {
  return (
    <div className=' flex flex-row items-center justify-between'>
        <img className='w-12 rounded-md' src="https://us.123rf.com/450wm/wikagraphic/wikagraphic2104/wikagraphic210401231/167618258-initial-logo-letter-tc-with-golden-color-with-laurel-and-wreath-vector-logo-for-business-and-company.jpg?ver=6" alt="" />
        
        <div>
            <ul className='flex flex-row text-lg space-x-4'>
                <li>Home</li>
                <li>Services</li>
                <li>Features</li>
                <li>Abouts Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className='px-6 border border-white bg-red-400 py-2 rounded-3xl'>Sign Up</button>
        </div>
        
    </div>
  )
}

export default NavBar