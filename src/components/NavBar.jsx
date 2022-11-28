import React from 'react'

function NavBar() {
  return (
    <div className=' flex flex-row items-center justify-between  '>
        <img className='w-32 rounded-md' src="https://images-platform.99static.com/CecykL6D7mS0R0gP8uCB22GJZmE=/326x49:1281x1004/500x500/top/smart/99designs-contests-attachments/123/123900/attachment_123900006" alt="" />
        
        <div>
            <ul className='li flex flex-row text-lg space-x-4'>
                <li>Home</li>
                <li>Services</li>
                <li>Features</li>
                <li>Abouts Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            
        </div>
        
    </div>
  )
}

export default NavBar